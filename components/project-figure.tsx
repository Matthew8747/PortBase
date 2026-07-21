import Image from "next/image";
import type { Figure } from "@/content/projects";
import BikeFitDiagram from "./bike-fit-diagram";

/**
 * Renders whatever a project has for artwork: a real screenshot, or a diagram drawn in the
 * site's own palette where no publishable image exists. Both land in the same 16:10 frame so
 * the work rows stay on one rhythm.
 *
 * `priority` is for the lead figure of a case study, which sits above the fold.
 */
export default function ProjectFigure({
  figure,
  sizes,
  priority = false,
}: {
  figure: Figure;
  sizes: string;
  priority?: boolean;
}) {
  if (figure.kind === "diagram") return <BikeFitDiagram />;

  return (
    <Image
      alt={figure.alt}
      height={figure.height}
      priority={priority}
      sizes={sizes}
      src={figure.src}
      width={figure.width}
    />
  );
}
