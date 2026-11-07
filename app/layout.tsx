import type { Metadata } from "next";
import { Archivo, Bricolage_Grotesque, Spline_Sans_Mono } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

/**
 * Direction B, "Lab notebook" (chosen 2026-11-06 from docs/type-concepts.html).
 *
 * Before this the type was delegated to the operating system, so the site rendered in
 * Palatino Linotype on Windows, Iowan Old Style on macOS and Georgia on Android. Three
 * self-hosted families replace that: one voice everywhere.
 *
 *  - Bricolage Grotesque carries display. Variable on opsz and wght, so the 104px name
 *    and a 30px section heading are different drawings rather than one scaled twice.
 *  - Archivo carries body text. High x-height, quiet, built for long measures.
 *  - Spline Sans Mono carries every label, chip, caption and number. The module the
 *    site is actually about is measurement, so the mono does real work here.
 *
 * next/font self-hosts and inlines the @font-face, so there is no render-blocking
 * request to a third party and no layout shift. `display: swap` keeps first paint.
 */
// Loaded as the variable font, not as fixed cuts: `axes` is only available when the
// weight axis stays variable, and the optical-size axis is the reason for choosing
// this face. CSS drives both axes (--display-wght, --display-opsz in globals.css).
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-display",
  display: "swap",
});

const body = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = Spline_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}. ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name}. ${site.tagline}`,
    description: site.description,
    locale: "en_GB",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.formalName,
    alternateName: site.name,
    url: site.url,
    jobTitle: "Software engineer",
    alumniOf: { "@type": "CollegeOrUniversity", name: "University of Bath" },
    sameAs: [site.links.github, site.links.linkedin],
  };

  return (
    <html className={`${display.variable} ${body.variable} ${mono.variable}`} lang="en-GB">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
      </body>
    </html>
  );
}
