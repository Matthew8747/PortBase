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
    "Final-year Computer Science and AI at Bath, a placement year at Kontron, and the longer version of " +
    "how I work.",
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
              masters with a placement year, and I&rsquo;m looking for a graduate software role starting in 2027.
              What I can point to is a year of production work at Kontron, two client sites in live use, and
              research projects documented well enough for somebody else to check them. I ask a lot of
              questions early, and I would much rather find out something is wrong now than defend it later.
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
                I took Maths, Computer Science and Physics at A-level, alongside an EPQ asking whether
                computer-aided diagnosis was ready to be used at scale. That question, a technology that works in a
                paper and then has to survive contact with practice, is one I have kept coming back to. The brain
                tumour detection project on the work page is the same question five years later with better tools.
              </p>
              <p>
                Bath came next: three years of study so far, a placement year in the middle, and a final year to
                come. The dissertation was a crossover study on professional bike fitting, which is written up on
                the work page as far as the paper allows.
              </p>
            </Reveal>

            <Reveal as="section">
              <h2>The placement year</h2>
              <p>
                I spent a year at Kontron, formerly Bsquare, on their device management product, working across
                development and QA. I started on bug fixes in Angular and TypeScript, moved on to delivering full
                features, and documented more than fifty defects on the QA side.
              </p>
              <p>
                The part I am most pleased with was not a feature. Development and dev-ops were running different
                test suites, so the two sets of results disagreed and neither was fully trusted. I built a Jenkins
                runner that let anyone select a set of tests and get results back in one format, and both teams
                moved onto it. The code and the screenshots are covered by the agreement I signed, so I can
                describe that work but not show it.
              </p>
            </Reveal>

            <Reveal as="section">
              <h2>Rowing</h2>
              <p>
                I rowed in the British Rowing Performance Development Academy and have medals from the Senior
                British Championships and from BUCS. This year I moved to sweep for the university squad for the
                first time and was selected for the first boat. We did not qualify for Henley and we missed the A
                final at BUCS by a fraction of a second, so by results it was not a successful season.
              </p>
              <p>
                It is on the page for the schedule more than the medals. Twelve or more sessions a week alongside
                a degree and a full-time placement is a fair record of what I can keep up over a long stretch,
                and a squad is a good place to learn how to be useful to people who are having a bad week.
              </p>
              <p>
                I was also elected Performance Sport Officer on the Students&rsquo; Union Sports Executive, which
                means representing performance athletes across the university rather than only the rowers. The seat
                sits on the Blues Committee and works with the sports department on how performance sport is run.
              </p>
            </Reveal>

            <Reveal as="section">
              <h2>Outside that</h2>
              <p>
                Fifteen years of football, including captaining sides and running the social side of the department
                team. Hiking, guitar, badminton, and French and German that are both improving slowly. I spent a
                month travelling in Peru on my own, which is the trip I would do again.
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
            <p>
              The list is here because people ask for it. The case studies are the better guide to what I have
              actually used and why.
            </p>
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
