"use client";

import { useEffect, useRef } from "react";

/**
 * The helix — the page-long motif. See docs/SYSTEM.md §8.
 *
 * Two strands in the left gutter, offset by π. A ghost track is always visible so the
 * motif reads at the top of the page; the lit strand draws over it with scroll progress,
 * and the wave phase drifts with scroll delta so the strands weave while you move.
 *
 * Stroke colour comes from an SVG gradient rather than CSS, because the strand crosses a
 * dark hero and warm paper below it and has to survive both.
 */

const NS = "http://www.w3.org/2000/svg";
const AMP = 13;
const LAMBDA = 540;
const CX = 27;
const STEP = 14;

export default function Helix({ darkUntilSelector = ".hero" }: { darkUntilSelector?: string }) {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!ref.current?.parentElement) return;
    const svg: SVGSVGElement = ref.current;
    const host: HTMLElement = ref.current.parentElement;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let H = 0;
    let phase = 0;
    let lastY = 0;
    let ticking = false;
    let lit: SVGPathElement[] = [];
    let ghosts: SVGPathElement[] = [];
    let rungs: SVGLineElement[] = [];

    function gradient(id: string, lift: string, base: string, darkH: number) {
      const g = document.createElementNS(NS, "linearGradient");
      g.setAttribute("id", id);
      g.setAttribute("gradientUnits", "userSpaceOnUse");
      g.setAttribute("x1", "0");
      g.setAttribute("y1", "0");
      g.setAttribute("x2", "0");
      g.setAttribute("y2", String(H));
      const edge = Math.min(0.999, darkH / H);
      const fade = Math.min(1, edge + 70 / H);
      ([[0, lift], [edge, lift], [fade, base], [1, base]] as [number, string][]).forEach(([o, c]) => {
        const st = document.createElementNS(NS, "stop");
        st.setAttribute("offset", `${(o * 100).toFixed(3)}%`);
        st.setAttribute("stop-color", c);
        g.appendChild(st);
      });
      return g;
    }

    function pathD(offset: number) {
      let d = "";
      for (let y = 0; y <= H; y += STEP) {
        const x = CX + AMP * Math.sin((2 * Math.PI * y) / LAMBDA + phase + offset);
        d += `${y === 0 ? "M" : "L"}${x.toFixed(1)} ${y}`;
      }
      return d;
    }

    function draw() {
      const dA = pathD(0);
      const dB = pathD(Math.PI);
      lit[0]?.setAttribute("d", dA);
      lit[1]?.setAttribute("d", dB);
      ghosts[0]?.setAttribute("d", dA);
      ghosts[1]?.setAttribute("d", dB);
      rungs.forEach((l) => {
        const y = Number(l.getAttribute("data-y"));
        l.setAttribute("x1", String(CX + AMP * Math.sin((2 * Math.PI * y) / LAMBDA + phase)));
        l.setAttribute("y1", String(y));
        l.setAttribute("x2", String(CX + AMP * Math.sin((2 * Math.PI * y) / LAMBDA + phase + Math.PI)));
        l.setAttribute("y2", String(y));
      });
    }

    function scrollTop() {
      return window.pageYOffset || document.documentElement.scrollTop || 0;
    }

    function progress() {
      const span = host!.offsetHeight - window.innerHeight;
      return Math.min(1, Math.max(0, scrollTop() / (span || 1)));
    }

    function setProgress(p: number) {
      lit.forEach((path) => {
        const L = path.getTotalLength();
        path.style.strokeDasharray = String(L);
        path.style.strokeDashoffset = String(L * (1 - p));
      });
      const reach = p * H;
      rungs.forEach((l) => l.classList.toggle("lit", Number(l.getAttribute("data-y")) < reach));
    }

    function build() {
      H = host!.offsetHeight;
      const darkEl = document.querySelector(darkUntilSelector) as HTMLElement | null;
      const darkH = darkEl ? darkEl.offsetHeight : 0;

      svg.setAttribute("height", String(H));
      svg.setAttribute("width", "54");
      svg.style.height = `${H}px`;
      svg.innerHTML = "";
      rungs = [];
      ghosts = [];
      lit = [];

      const defs = document.createElementNS(NS, "defs");
      defs.appendChild(gradient("helix-a", "#8B9CF4", "#2A46D4", darkH));
      defs.appendChild(gradient("helix-b", "#E8683F", "#C23A18", darkH));
      svg.appendChild(defs);

      // rungs mark section boundaries; the hero has none, so they start below it
      for (let y = darkH + LAMBDA / 4; y < H - 100; y += LAMBDA / 2) {
        const l = document.createElementNS(NS, "line");
        l.setAttribute("data-y", String(y));
        rungs.push(l);
        svg.appendChild(l);
      }

      (["helix-a", "helix-b"] as const).forEach((id) => {
        const g = document.createElementNS(NS, "path");
        g.setAttribute("class", "ghost");
        g.setAttribute("stroke", `url(#${id})`);
        ghosts.push(g);
        svg.appendChild(g);
      });
      (["helix-a", "helix-b"] as const).forEach((id) => {
        const p = document.createElementNS(NS, "path");
        p.setAttribute("stroke", `url(#${id})`);
        lit.push(p);
        svg.appendChild(p);
      });

      draw();
      setProgress(reduced ? 1 : progress());
    }

    function onScroll() {
      if (ticking || reduced) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = scrollTop();
        phase += (y - lastY) * 0.0017;
        lastY = y;
        draw();
        setProgress(progress());
        ticking = false;
      });
    }

    let resizeTimer: ReturnType<typeof setTimeout>;
    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(build, 200);
    }

    build();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [darkUntilSelector]);

  return <svg id="helix" ref={ref} aria-hidden="true" />;
}
