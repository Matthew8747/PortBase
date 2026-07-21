import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "../og-image";

export const alt = "Work by Matt Pearson.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    title: "Things I've built.",
    subtitle:
      "A set-piece simulator that refuses to overstate itself, a painter's storefront taking real payments, a club site built to outlive its committee, and a 51-participant cycling study.",
  });
}
