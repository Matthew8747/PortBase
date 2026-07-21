import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "../og-image";

export const alt = "Matt Pearson's CV, on request.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    title: "The paperwork, on request.",
    subtitle:
      "Education, grades, experience and the full project record, sent personally rather than left on the open internet.",
  });
}
