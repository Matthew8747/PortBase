import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectFigure from "@/components/project-figure";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { allStudies, projectBySlug, type Figure } from "@/content/projects";

/** Taller than it is wide, so it needs the narrow figure treatment rather than the wide one. */
function isPortrait(figure: Figure) {
  return figure.kind === "image" && figure.height > figure.width;
}

export function generateStaticParams() {
  return allStudies.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return { title: "Not found" };
  return {
    title: project.title,
    description: project.summary,
    openGraph: { title: project.title, description: project.summary },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="page-head">
          <span className="t-section">
            {project.kind} · {project.kindDetail}
          </span>
          <h1>{project.title}</h1>
          <p className="lede">{project.summary}</p>
        </div>

        <figure className="fig fig-lead">
          <div className="frame">
            <ProjectFigure figure={project.figure} priority sizes="(max-width: 900px) 100vw, 1000px" />
          </div>
          {project.figure.caption ? <figcaption>{project.figure.caption}</figcaption> : null}
        </figure>

        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="meta-grid">
            <div>
              <h3>Built with</h3>
              <p>{project.tech.join(", ")}</p>
            </div>
            {project.links?.length || project.sourceNote ? (
              <div>
                <h3>{project.links?.length ? "Links" : "Source"}</h3>
                <p>
                  {project.links?.map((link, i) => (
                    <span key={link.href}>
                      {i > 0 ? <br /> : null}
                      <a className="ulink" href={link.href} rel="noreferrer" target="_blank">
                        {link.label}
                      </a>
                    </span>
                  ))}
                  {project.sourceNote ? (
                    <>
                      <br />
                      {project.sourceNote}
                    </>
                  ) : null}
                </p>
              </div>
            ) : null}
            <div>
              <h3>Role</h3>
              <p>{project.role ?? "Sole developer unless noted in the case study."}</p>
            </div>
          </div>

          <div className="prose">
            {project.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
                {section.figure ? (
                  <figure className={`fig ${isPortrait(section.figure) ? "fig-portrait" : "fig-wide"}`}>
                    <div className="frame">
                      <ProjectFigure
                        figure={section.figure}
                        sizes={
                          isPortrait(section.figure)
                            ? "(max-width: 700px) 100vw, 520px"
                            : "(max-width: 1180px) 100vw, 880px"
                        }
                      />
                    </div>
                    {section.figure.caption ? <figcaption>{section.figure.caption}</figcaption> : null}
                  </figure>
                ) : null}
              </section>
            ))}
          </div>

          <div style={{ marginTop: "var(--s9)", display: "flex", gap: "var(--s6)", flexWrap: "wrap" }}>
            <Link className="ulink" href="/work">
              All work
            </Link>
            <Link className="ulink" href="/cv">
              Request the CV
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
