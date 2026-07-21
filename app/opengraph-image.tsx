import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "./og-image";

export const alt = "Matt Pearson. Software with judgement.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default async function Image() {
  return renderOgImage({
    title: "Software with judgement.",
    subtitle:
      "Final-year Computer Science and AI at Bath. Three first-class years, a placement year shipping enterprise software, and projects built to tell the truth about their own results.",
  });
}
