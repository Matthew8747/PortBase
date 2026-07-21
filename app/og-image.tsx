import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/content/site";

/**
 * Shared Open Graph renderer. Every route's opengraph-image.tsx calls this so links to
 * the site look like the site rather than like a default card.
 *
 * The ground is --void, matching the hero, because a dark card stands out in a feed of
 * white ones. The mark is app/icon.svg inlined; satori cannot read external files.
 *
 * Satori has no access to system fonts, so one serif ships for this purpose only. It does
 * not pre-empt the display-face decision still open in docs/TODO.md.
 */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const MARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32"><g fill="none" stroke-linecap="round" stroke-width="3.4"><path d="M22 4C22 12.6 10 19.4 10 28" stroke="#E8683F"/><path d="M10 4C10 12.6 22 19.4 22 28" stroke="#0A0907" stroke-width="5.8"/><path d="M10 4C10 12.6 22 19.4 22 28" stroke="#8B9CF4"/></g></svg>`;
const MARK_URI = `data:image/svg+xml;base64,${Buffer.from(MARK).toString("base64")}`;

export async function renderOgImage({ title, subtitle }: { title: string; subtitle: string }) {
  // A static instance, not the variable original: satori's parser cannot read `fvar`.
  const serif = await readFile(join(process.cwd(), "assets", "newsreader-regular.ttf"));

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0907",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" height={40} src={MARK_URI} width={40} />
          <div style={{ color: "#8F887B", fontSize: 22, letterSpacing: 4 }}>MATTPEARSON.DEV</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              color: "#F4F1E9",
              fontFamily: "Newsreader",
              fontSize: title.length > 26 ? 84 : 104,
              letterSpacing: -3,
              lineHeight: 1.05,
            }}
          >
            {title}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ background: "#8B9CF4", height: 3, width: 88 }} />
            <div style={{ background: "#E8683F", height: 3, width: 28 }} />
          </div>
          <div style={{ color: "#B5AFA2", fontSize: 30, lineHeight: 1.4, maxWidth: 900 }}>{subtitle}</div>
        </div>

        <div style={{ color: "#8F887B", display: "flex", fontSize: 24, gap: 14 }}>
          <span>{site.name}</span>
          <span style={{ color: "#4A453C" }}>·</span>
          <span>{site.status}</span>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [{ name: "Newsreader", data: serif, style: "normal", weight: 400 }],
    },
  );
}
