"use client";

import { useEffect, useRef } from "react";

/**
 * Volumetric ink, the hero's signature element. See docs/SYSTEM.md §8.
 *
 * Depth comes from four things a flat canvas doesn't have: layers at different
 * distances, a two-stage bloom, an unblurred core pass, and grain in the medium.
 * Dropping the core pass is what made an earlier version read as uniform grey haze
 * (measured: max brightness 93 and no bright pixels, versus 191 and 6% with it).
 */

type Density = "bloom" | "veil" | "filament";

const COBALT: [number, number, number] = [78, 107, 255];
const RUBRIC: [number, number, number] = [255, 90, 43];
const VOID = "#0A0907";

const PRESET: Record<
  Density,
  { L: number; S: number; turns: number; thick: number; spread: number; drift: number; soft: number; core: number }
> = {
  bloom: { L: 5, S: 1, turns: 2.5, thick: 0.085, spread: 0.3, drift: 0.00016, soft: 0.055, core: 0.34 },
  veil: { L: 6, S: 3, turns: 1.5, thick: 0.02, spread: 0.44, drift: 0.00011, soft: 0.04, core: 0.26 },
  filament: { L: 4, S: 1, turns: 3.6, thick: 0.016, spread: 0.26, drift: 0.00022, soft: 0.032, core: 0.42 },
};

function rgba(c: [number, number, number], a: number) {
  return `rgba(${c[0]},${c[1]},${c[2]},${a})`;
}

let grainCache: HTMLCanvasElement | null = null;
function grainTile() {
  if (grainCache) return grainCache;
  const g = document.createElement("canvas");
  g.width = g.height = 140;
  const gx = g.getContext("2d");
  if (!gx) return g;
  const d = gx.createImageData(140, 140);
  for (let i = 0; i < d.data.length; i += 4) {
    const v = Math.random() * 255;
    d.data[i] = d.data[i + 1] = d.data[i + 2] = v;
    d.data[i + 3] = 13;
  }
  gx.putImageData(d, 0, 0);
  grainCache = g;
  return g;
}

export default function VolumetricInk({ density = "bloom" }: { density?: Density }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    if (!cv) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const P = PRESET[density];

    let raf = 0;
    let live = false;
    let t = 0;
    let W = 0;
    let H = 0;
    let ctx: CanvasRenderingContext2D | null = null;
    let off: HTMLCanvasElement | null = null;
    let oc: CanvasRenderingContext2D | null = null;

    /** Containers can measure zero before layout resolves; caller retries via ResizeObserver. */
    function fit() {
      const r = cv!.getBoundingClientRect();
      if (!r.width || !r.height) return false;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv!.width = Math.round(r.width * dpr);
      cv!.height = Math.round(r.height * dpr);
      const c = cv!.getContext("2d");
      if (!c) return false;
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx = c;
      W = r.width;
      H = r.height;
      off = document.createElement("canvas");
      off.width = Math.max(2, Math.round(W * 0.5));
      off.height = Math.max(2, Math.round(H * 0.5));
      oc = off.getContext("2d");
      return !!oc;
    }

    function sheet(g: CanvasRenderingContext2D, depth: number, phase: number, col: [number, number, number], alpha: number) {
      const w = off!.width;
      const h = off!.height;
      const SEG = 54;
      const amp = w * P.spread * (0.45 + 0.55 * depth);
      const thick = h * P.thick * (0.35 + 0.65 * depth);
      const mid = 0.62 * w; // ink sits right of centre; the headline takes the left
      g.beginPath();
      for (let i = 0; i <= SEG; i++) {
        const u = i / SEG;
        const x = mid + Math.sin(u * Math.PI * P.turns + phase) * amp;
        const tw = thick * (0.3 + 0.7 * Math.sin(u * Math.PI));
        if (i === 0) g.moveTo(x - tw, u * h);
        else g.lineTo(x - tw, u * h);
      }
      for (let i = SEG; i >= 0; i--) {
        const u = i / SEG;
        const x = mid + Math.sin(u * Math.PI * P.turns + phase) * amp;
        const tw = thick * (0.3 + 0.7 * Math.sin(u * Math.PI));
        g.lineTo(x + tw, u * h);
      }
      g.closePath();
      g.fillStyle = rgba(col, alpha);
      g.fill();
    }

    function render() {
      if (!ctx || !oc || !off) return;
      oc.globalCompositeOperation = "source-over";
      oc.clearRect(0, 0, off.width, off.height);
      oc.globalCompositeOperation = "lighter"; // inks add light, the way projection does
      for (let l = 0; l < P.L; l++) {
        const depth = l / (P.L - 1 || 1); // 0 far, 1 near
        for (let k = 0; k < P.S; k++) {
          const kk = P.S > 1 ? (k - (P.S - 1) / 2) * 0.3 : 0;
          const col = (l + k) % 2 ? RUBRIC : COBALT;
          const a = (0.1 + 0.52 * depth * depth) / (P.S > 1 ? 1.5 : 1);
          sheet(oc, depth, t + l * 0.85 + kk, col, a);
        }
      }
      oc.globalCompositeOperation = "source-over";

      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = VOID;
      ctx.fillRect(0, 0, W, H);

      const canFilter = typeof ctx.filter !== "undefined";
      const m = Math.min(W, H);
      ctx.globalCompositeOperation = "lighter";

      if (canFilter) {
        // wide halo: the medium scattering light far from the source
        ctx.filter = `blur(${(m * P.soft).toFixed(1)}px)`;
        ctx.globalAlpha = 0.5;
        ctx.drawImage(off, 0, 0, W, H);
        // tight glow: keeps the shape readable close in
        ctx.filter = `blur(${(m * P.soft * 0.32).toFixed(1)}px)`;
        ctx.globalAlpha = 0.65;
        ctx.drawImage(off, 0, 0, W, H);
        ctx.filter = "none";
      }
      // core: without this the frame is uniform haze
      ctx.globalAlpha = 1;
      ctx.drawImage(off, 0, 0, W, H);
      ctx.globalAlpha = P.core;
      ctx.drawImage(off, 0, 0, W, H);
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";

      const pat = ctx.createPattern(grainTile(), "repeat");
      if (pat) {
        ctx.globalAlpha = 0.38;
        ctx.fillStyle = pat;
        ctx.fillRect(0, 0, W, H);
        ctx.globalAlpha = 1;
      }
      const vg = ctx.createRadialGradient(W * 0.62, H * 0.5, m * 0.1, W * 0.62, H * 0.5, Math.max(W, H) * 0.7);
      vg.addColorStop(0, "rgba(10,9,7,0)");
      vg.addColorStop(0.55, "rgba(10,9,7,0.42)");
      vg.addColorStop(1, "rgba(10,9,7,0.93)");
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, W, H);
    }

    function loop() {
      if (!live) return;
      t += P.drift * 60;
      render();
      raf = requestAnimationFrame(loop);
    }

    let io: IntersectionObserver | null = null;
    let ro: ResizeObserver | null = null;

    function start() {
      if (!fit()) return false;
      if (reduced) {
        t = 1.1;
        render();
        return true;
      }
      render(); // paint one frame immediately so it is never blank
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting && !live) {
              live = true;
              loop();
            } else if (!e.isIntersecting && live) {
              live = false;
              cancelAnimationFrame(raf);
            }
          });
        },
        { threshold: 0.05 },
      );
      io.observe(cv!);
      return true;
    }

    if (!start()) {
      ro = new ResizeObserver(() => {
        if (cv!.getBoundingClientRect().width > 0) {
          ro?.disconnect();
          ro = null;
          start();
        }
      });
      ro.observe(cv);
    }

    let resizeTimer: ReturnType<typeof setTimeout>;
    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (fit()) render();
      }, 200);
    }
    window.addEventListener("resize", onResize);

    return () => {
      live = false;
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      io?.disconnect();
      ro?.disconnect();
    };
  }, [density]);

  return <canvas ref={ref} aria-hidden="true" />;
}
