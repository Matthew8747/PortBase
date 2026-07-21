import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { site } from "@/content/site";

/**
 * Only the canonical domain is crawlable.
 *
 * Vercel gives every deployment a *.vercel.app hostname. Left open, those can be
 * indexed and end up competing with the real site for Matt's own name. Anything
 * that isn't the canonical host is disallowed outright.
 */
export default async function robots(): Promise<MetadataRoute.Robots> {
  const canonicalHost = new URL(site.url).host;
  const host = (await headers()).get("host") ?? "";
  const isCanonical = host === canonicalHost;

  if (!isCanonical) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/thanks", "/api/"] }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
