import type { Metadata } from "next";
import CvRequestForm from "@/components/cv-request-form";
import Reveal from "@/components/reveal";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { education, experience, site, skills } from "@/content/site";

export const metadata: Metadata = {
  title: "CV",
  description:
    "The short version of Matt Pearson's CV, and a form to request the full document. No contact details are " +
    "published on this site.",
};

export default function CvPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="page-head">
          <span className="t-section">CV &amp; contact</span>
          <h1>The paperwork, on request.</h1>
          <p className="lede">
            The short version is below. For the full document — grades module by module, referees and contact
            details — send a request and I&rsquo;ll reply personally. A CV carrying my phone number
            doesn&rsquo;t belong on the open internet, which is the only reason it isn&rsquo;t a download.
          </p>
        </div>

        <section className="sec" style={{ paddingTop: 0 }}>
          <Reveal className="cv-in" style={{ maxWidth: 560 }}>
            <span className="status">
              <i aria-hidden="true" />
              {site.status}
            </span>
            <CvRequestForm />
          </Reveal>
        </section>

        <section className="sec sec-work">
          <Reveal className="sec-head">
            <span className="t-section">The short version</span>
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

          <div className="exp-list" style={{ marginTop: "var(--s9)" }}>
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

          <Reveal style={{ marginTop: "var(--s9)", display: "flex", flexDirection: "column", gap: "var(--s3)" }}>
            <span className="t-section">Technical</span>
            <div className="chip-row">
              {[...skills.languages, ...skills.frameworks, ...skills.tools].map((item) => (
                <span className="chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
