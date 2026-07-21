import type { Metadata } from "next";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.tagline}`,
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
    <html lang="en-GB">
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
