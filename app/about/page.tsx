import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { coursework, education, experience, site, skills } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Final-year Computer Science and AI at Bath, a placement year at Kontron, and rowing at national level. " +
    "The longer version.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="page-head about-head">
          <div className="about-intro">
            <span className="t-section">About</span>
            <h1>The longer story.</h1>
            <p className="lede">
              I&rsquo;m a final-year Computer Science and AI student at the University of Bath, on the integrated
              masters with a placement year. I like problems where the answer isn&rsquo;t already known, and I care a
              great deal about not overstating what the answer turned out to be.
            </p>
          </div>
          {site.portrait.enabled ? (
            <div className="portrait">
              <Image
                alt={site.portrait.alt}
                height={900}
                priority
                sizes="(max-width: 900px) 60vw, 260px"
                src={site.portrait.src}
                width={720}
              />
            </div>
          ) : null}
        </div>

        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="prose">
            <Reveal as="section">
              <h2>How I got here</h2>
              <p>
                I took Maths, Computer Science and Physics at A-level and an EPQ asking whether computer-aided
                diagnosis was ready for large-scale use. That question, a technology that works in a paper but has
                to survive contact with real clinical practice, is roughly the question I&rsquo;ve kept asking
                since, in different clothes.
              </p>
              <p>
                Bath came next, then a year at Kontron on their device management product, working across
                development and QA. The most useful thing I built there wasn&rsquo;t a feature: it was a Jenkins
                test runner that let anyone specify a set of tests and get results back, which finally got the
                dev-ops and development teams running the same suite instead of two different ones.
              </p>
            </Reveal>

            <Reveal as="section">
              <h2>Rowing, and what it&rsquo;s actually for</h2>
              <p>
                I rowed in the British Rowing Performance Development Academy and won medals at the Senior British
                Championships and at BUCS. This year I switched to sweep for the university squad for the first time
                and made the first boat. We didn&rsquo;t qualify for Henley, and we were fractions of a second off
                the A final at BUCS, so by the numbers it wasn&rsquo;t a successful season.
              </p>
              <p>
                I mention it because twelve-plus sessions a week alongside a degree and a full-time placement is the
                clearest evidence I have about how I work: consistently, early, and without needing to be chased.
                And because learning a new discipline well enough to make a first boat inside a season is a fair
                proxy for how quickly I pick things up.
              </p>
            </Reveal>

            <Reveal as="section">
              <h2>A month in Peru</h2>
              <p>
                I spent a month travelling Peru alone. It is the single most useful thing I have done for my own
                judgement. Every day is a series of decisions made on incomplete information in a language you
                only partly speak, and you find out quite quickly whether you actually solve problems or just
                prefer the idea of solving them.
              </p>
            </Reveal>

            <Reveal as="section">
              <h2>Outside all that</h2>
              <p>
                Fifteen years of football, including captaining teams and running the social side of the department
                side. Hiking, guitar, badminton, and slowly improving French and German.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="sec sec-work">
          <Reveal className="sec-head">
            <span className="t-section">Education</span>
            <h2>{education.degree}</h2>
            <p>
              {education.institution}. {education.detail}
            </p>
          </Reveal>
          <Reveal>
            <ul className="fact-list" style={{ maxWidth: 680 }}>
              {education.results.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </Reveal>
        </section>

        <section className="sec">
          <Reveal className="sec-head">
            <span className="t-section">Coursework</span>
            <h2>What I&rsquo;ve studied recently.</h2>
            <p>Final-year modules, in brief.</p>
          </Reveal>
          <div className="card-list">
            {coursework.map((item) => (
              <Reveal className="card" key={item.module}>
                <h3>{item.module}</h3>
                <p>{item.note}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="sec sec-work">
          <Reveal className="sec-head">
            <span className="t-section">Experience</span>
            <h2>Where the work has happened.</h2>
          </Reveal>
          <div className="exp-list">
            {experience.map((role) => (
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

        <section className="sec">
          <Reveal className="sec-head">
            <span className="t-section">Tools</span>
            <h2>What I reach for.</h2>
            <p>Listed because people ask, not because a list proves anything.</p>
          </Reveal>
          <Reveal style={{ display: "flex", flexDirection: "column", gap: "var(--s5)", maxWidth: 780 }}>
            {(
              [
                ["Languages", skills.languages],
                ["Frameworks", skills.frameworks],
                ["Tools", skills.tools],
                ["Ways of working", skills.methods],
              ] as const
            ).map(([label, items]) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", gap: "var(--s3)" }}>
                <span className="t-section">{label}</span>
                <div className="chip-row">
                  {items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </Reveal>

          <div style={{ marginTop: "var(--s9)" }}>
            <Link className="btn btn-ink" href="/cv">
              Request the CV{" "}
              <span className="arr" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
