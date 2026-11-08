import type { Metadata } from "next";
import Link from "next/link";
import ProjectFigure from "@/components/project-figure";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { featured, secondary, supporting } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies: a set-piece simulator, a painter's storefront that takes real payments, a club website " +
    "built to outlive its committee, a 51-participant cycling study, and a group venture in AI-detection " +
    "training.",
};

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="page-head">
          <span className="t-section">Work</span>
          <h1>Things I&rsquo;ve built</h1>
          <p className="lede">
            The four at the top have full case studies, covering what each one had to do, what it cost and
            what I would do differently. Below them are two more written up the same way, then the smaller
            pieces, with a link to the code wherever there is code worth reading.
          </p>
        </div>

        <section className="sec sec-work" style={{ paddingTop: "var(--s8)" }}>
          {featured.map((project, i) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className={`work-row${i % 2 === 1 ? " flip" : ""}`}
            >
              <div className="w-txt">
                <span className="w-kind">
                  <em>{project.kind}</em> · {project.kindDetail}
                </span>
                <span className="w-title">{project.title}</span>
                <p className="w-desc">{project.summary}</p>
                <span className="t-tech">{project.tech.join(" · ")}</span>
              </div>
              <div className="w-vis">
                <ProjectFigure
                  figure={project.figure}
                  priority={i === 0}
                  sizes="(max-width: 900px) 100vw, 400px"
                />
              </div>
            </Link>
          ))}
        </section>

        <section className="sec">
          <div className="sec-head">
            <span className="t-section">Also written up</span>
            <h2>Two more, same treatment</h2>
            <p>Case studies for work that sits outside the four above.</p>
          </div>

          <div className="study-list">
            {secondary.map((project) => (
              <Link className="study-row" href={`/work/${project.slug}`} key={project.slug}>
                <span className="study-kind">
                  <em>{project.kind}</em>
                  <span>{project.kindDetail}</span>
                </span>
                <div className="study-body">
                  <span className="study-title">{project.title}</span>
                  <p className="study-desc">{project.summary}</p>
                  <span className="t-tech">{project.tech.join(" · ")}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="sec">
          <div className="sec-head">
            <span className="t-section">Also built</span>
            <h2>Coursework, experiments and client work</h2>
            <p>Smaller pieces. Where there&rsquo;s code worth reading, the link goes straight to it.</p>
          </div>

          <div className="card-list">
            {supporting.map((item) => (
              <div className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
                <div className="foot">
                  <span className="t-tech">{item.tech}</span>
                  {item.href ? (
                    <a className="ulink" href={item.href} rel="noreferrer" target="_blank">
                      Code
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
