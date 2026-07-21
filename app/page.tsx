import Link from "next/link";
import Helix from "@/components/helix";
import ProjectFigure from "@/components/project-figure";
import Reveal from "@/components/reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import VolumetricInk from "@/components/volumetric-ink";
import { experience, site } from "@/content/site";
import { featured } from "@/content/projects";

export default function HomePage() {
  return (
    <>
      <SiteHeader onDark />
      <div style={{ position: "relative" }}>
        <Helix />

        <main id="main">
          {/* ---------------- HERO ---------------- */}
          <section className="hero play">
            <VolumetricInk density="bloom" />
            <div className="hero-scrim" aria-hidden="true" />
            <div className="hero-copy">
              <h1 className="r1">
                Matt
                <br />
                <span className="sweep">Pearson</span>.
              </h1>
              <p className="phrase r2">{site.tagline}</p>
              <div className="hero-meta r3">
                <span className="hero-status">
                  <i aria-hidden="true" />
                  {site.status}
                </span>
                <Link className="ulink" href="/work">
                  See the work →
                </Link>
              </div>
            </div>
            <div className="scroll-cue" aria-hidden="true">
              <span>SCROLL</span>
              <i />
            </div>
            <div className="hero-edge" aria-hidden="true" />
          </section>

          {/* ---------------- WORK ---------------- */}
          <section className="sec sec-work" id="work">
            <Reveal className="sec-head">
              <span className="t-section">Selected work</span>
              <h2>The work, told properly.</h2>
              <p>
                Each one has a case study covering what it had to do, what I chose, what it cost, and what
                I&rsquo;d change.
              </p>
            </Reveal>

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
                  <ProjectFigure
                    figure={project.figure}
                    priority={i === 0}
                    sizes="(max-width: 900px) 100vw, 400px"
                  />
                </div>
              </Reveal>
            ))}

            <div style={{ marginTop: "var(--s8)" }}>
              <Link className="ulink" href="/work">
                Everything else I&rsquo;ve built →
              </Link>
            </div>
          </section>

          {/* ---------------- EXPERIENCE ---------------- */}
          <section className="sec" id="experience">
            <Reveal className="sec-head">
              <span className="t-section">Experience</span>
              <h2>Where the work has happened.</h2>
            </Reveal>
            <div className="exp-list">
              {experience.slice(0, 3).map((role) => (
                <Reveal className="exp-row" key={`${role.org}-${role.when}`}>
                  <span className="exp-when">{role.when}</span>
                  <div className="exp-body">
                    <span className="exp-role">
                      {role.role}, <b>{role.org}</b>
                    </span>
                    <p className="exp-note">{role.note}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* ---------------- ABOUT ---------------- */}
          <section className="sec sec-about" id="about">
            <Reveal className="about-in">
              <span className="t-section">About</span>
              <blockquote>
                Three first-class years at Bath, a placement year shipping enterprise software, and a seat in the
                university&rsquo;s <i>first boat</i>. I like hard problems and honest results, and I&rsquo;ll go a
                long way for both, including a month alone in Peru.
              </blockquote>
              <Link className="ulink" href="/about">
                The longer story →
              </Link>
            </Reveal>
          </section>

          {/* ---------------- CV ---------------- */}
          <section className="sec" id="cv">
            <Reveal className="cv-in">
              <span className="t-section">CV &amp; contact</span>
              <h2>The paperwork, on request.</h2>
              <p>
                Education, grades and the full project record, sent personally. A CV carrying my phone number
                doesn&rsquo;t belong on the open internet.
              </p>
              <span className="status">
                <i aria-hidden="true" />
                {site.status}
              </span>
              <div className="cv-row">
                <Link className="btn btn-ink" href="/cv">
                  Request the CV{" "}
                  <span className="arr" aria-hidden="true">
                    →
                  </span>
                </Link>
                <a className="ulink" href={site.links.github} rel="noreferrer" target="_blank">
                  GitHub
                </a>
                <a className="ulink" href={site.links.linkedin} rel="noreferrer" target="_blank">
                  LinkedIn
                </a>
              </div>
            </Reveal>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
