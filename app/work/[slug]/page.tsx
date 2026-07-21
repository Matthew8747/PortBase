import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { featured, projectBySlug } from "@/content/projects";

export function generateStaticParams() {
  return featured.map((p) => ({ slug: p.slug }));
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

        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="meta-grid">
            <div>
              <h3>Built with</h3>
              <p>{project.tech.join(", ")}</p>
            </div>
            {project.links?.length ? (
              <div>
                <h3>Links</h3>
                <p>
                  {project.links.map((link, i) => (
                    <span key={link.href}>
                      {i > 0 ? <br /> : null}
                      <a className="ulink" href={link.href} rel="noreferrer" target="_blank">
                        {link.label} →
                      </a>
                    </span>
                  ))}
                </p>
              </div>
            ) : null}
            <div>
              <h3>Role</h3>
              <p>Sole developer unless noted in the case study.</p>
            </div>
          </div>

          <div className="prose">
            {project.sections.map((section) => (
              <Reveal as="section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </Reveal>
            ))}
          </div>

          <div style={{ marginTop: "var(--s9)", display: "flex", gap: "var(--s6)", flexWrap: "wrap" }}>
            <Link className="ulink" href="/work">
              ← All work
            </Link>
            <Link className="ulink" href="/cv">
              Request the CV →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
