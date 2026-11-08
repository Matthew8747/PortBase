import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "../og-image";

export const alt = "About Matt Pearson.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    title: "The longer story.",
    subtitle:
      "How I got into computing, a placement year at Kontron, a final year of vision and HCI work, and rowing at " +
      "national level.",
  });
}
