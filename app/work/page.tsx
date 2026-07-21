import type { Metadata } from "next";
import Reveal from "@/components/reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { featured, supporting } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Three case studies: a set-piece simulator, a client website built to outlive its committee, and a " +
    "51-participant cycling study. Plus the smaller projects behind them.",
};

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="page-head">
          <span className="t-section">Work</span>
          <h1>Things I&rsquo;ve built.</h1>
          <p className="lede">
            Three of these have proper case studies, because they had real constraints and taught me something. The
            rest are here because they&rsquo;re honest evidence of what I can do, not because they need explaining.
          </p>
        </div>

        <section className="sec sec-work" style={{ paddingTop: "var(--s8)" }}>
          {featured.map((project, i) => (
            <Reveal
              key={project.slug}
              href={`/work/${project.slug}`}
              className={`work-row${i % 2 === 1 ? " flip" : ""}`}
            >
              <div className="w-txt">
                <span className="w-kind">
                  <em>{project.kind}</em> · {project.kindDetail}
                </span>
                <span className="w-title">
                  {project.title}{" "}
                  <span className="go" aria-hidden="true">
                    →
                  </span>
                </span>
                <p className="w-desc">{project.summary}</p>
                <span className="t-tech">{project.tech.join(" · ")}</span>
              </div>
              <div className="w-vis">
                <span>{project.figure.toUpperCase()}</span>
              </div>
            </Reveal>
          ))}
        </section>

        <section className="sec">
          <Reveal className="sec-head">
            <span className="t-section">Also built</span>
            <h2>Coursework, experiments and client work.</h2>
            <p>Smaller pieces. Where there&rsquo;s code worth reading, the link goes straight to it.</p>
          </Reveal>

          <div className="card-list">
            {supporting.map((item) => (
              <Reveal className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
                <div className="foot">
                  <span className="t-tech">{item.tech}</span>
                  {item.href ? (
                    <a className="ulink" href={item.href} rel="noreferrer" target="_blank">
                      Code →
                    </a>
                  ) : null}
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
