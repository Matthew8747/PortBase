import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { site } from "@/content/site";

/**
 * Only the real site is crawlable.
 *
 * Vercel gives every deployment a *.vercel.app hostname. Left open, those get indexed
 * and compete with the real site for Matt's own name. Anything that is not the
 * canonical host is disallowed outright.
 *
 * www and the bare domain count as the same site, so a redirect between them does not
 * silently turn crawling off.
 */
function normalise(host: string) {
  return host.toLowerCase().replace(/^www\./, "").split(":")[0];
}

export default async function robots(): Promise<MetadataRoute.Robots> {
  const canonical = normalise(new URL(site.url).host);
  const host = normalise((await headers()).get("host") ?? "");

  if (host !== canonical) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/thanks", "/api/"] }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
