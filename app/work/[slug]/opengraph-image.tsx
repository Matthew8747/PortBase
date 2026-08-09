import { OG_CONTENT_TYPE, OG_SIZE, renderOgImage } from "../../og-image";
import { allStudies, projectBySlug } from "@/content/projects";

export const alt = "A case study by Matt Pearson.";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return allStudies.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  return renderOgImage({
    title: project?.title ?? "Work",
    subtitle: project?.summary ?? "",
  });
}
