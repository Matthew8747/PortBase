import type { Metadata } from "next";
import Link from "next/link";
import CvRequestForm from "@/components/cv-request-form";
import Reveal from "@/components/reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { awards, cvHighlights, education, experience, site, skills } from "@/content/site";

export const metadata: Metadata = {
  title: "CV",
  description:
    "The short version of Matt Pearson's CV, and a form to request the full document. No contact details are " +
    "published on this site.",
};

const SKILL_GROUPS = [
  ["Languages", skills.languages],
  ["Frameworks and libraries", skills.frameworks],
  ["Tools and platforms", skills.tools],
  ["Ways of working", skills.methods],
] as const;

export default function CvPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="page-head">
          <span className="t-section">CV &amp; contact</span>
          <h1>The paperwork, on request.</h1>
          <p className="lede">
            The short version is below, and it is the whole record apart from the private parts. For the full
            document, with grades module by module, referees and contact details, send a request and I&rsquo;ll
            reply personally. A CV carrying my phone number doesn&rsquo;t belong on the open internet, which is the
            only reason it isn&rsquo;t a download.
          </p>
        </div>

        <section className="sec no-print" style={{ paddingTop: 0 }}>
          <Reveal className="cv-in" style={{ maxWidth: 560 }}>
            <span className="status">
              <i aria-hidden="true" />
              {site.status}
            </span>
            <CvRequestForm />
          </Reveal>
        </section>

        {/* Only appears on paper. Keeps the printed page from being anonymous without
            putting anything private on the web page. */}
        <div className="print-only print-head">
          <h2>{site.formalName}</h2>
          <p>
            {site.role} · {site.location} · {site.status}
          </p>
          <p>
            {site.url.replace("https://", "")} · {site.links.linkedin.replace("https://www.", "")} ·{" "}
            {site.links.github.replace("https://", "")}
          </p>
        </div>

        <section className="sec sec-work cv-section">
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

        <section className="sec cv-section">
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

        <section className="sec sec-work cv-section">
          <Reveal className="sec-head">
            <span className="t-section">Selected work</span>
            <h2>What it produced.</h2>
            <p>Each line leads with the result. The case studies behind them carry the reasoning.</p>
          </Reveal>
          <div className="exp-list">
            {cvHighlights.map((item) => (
              <Reveal className="exp-row" key={item.title}>
                <span className="exp-when">
                  {item.href ? (
                    <Link className="ulink" href={item.href}>
                      {item.title}
                    </Link>
                  ) : (
                    item.title
                  )}
                </span>
                <div className="exp-body">
                  <p className="exp-note">{item.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="sec cv-section">
          <Reveal className="sec-head">
            <span className="t-section">Technical</span>
            <h2>What I reach for.</h2>
          </Reveal>
          <Reveal style={{ display: "flex", flexDirection: "column", gap: "var(--s5)", maxWidth: 780 }}>
            {SKILL_GROUPS.map(([label, items]) => (
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
        </section>

        <section className="sec sec-work cv-section">
          <Reveal className="sec-head">
            <span className="t-section">Awards</span>
            <h2>Competitive record.</h2>
          </Reveal>
          <Reveal>
            <ul className="fact-list" style={{ maxWidth: 680 }}>
              {awards.map((award) => (
                <li key={award}>{award}</li>
              ))}
            </ul>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
