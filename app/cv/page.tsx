import type { Metadata } from "next";
import Link from "next/link";
import CvRequestForm from "@/components/cv-request-form";
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
          <h1>The paperwork, on request</h1>
          <p className="lede">
            The short version is below and it covers everything except the contact details. For the full document,
            with grades module by module, referees and a way to reach me, send a request and I&rsquo;ll reply
            personally. The only reason it is not a download is that it carries a phone number and an address.
            If you would rather just ask a question first, the same form reaches me and I&rsquo;m happy to
            answer it.
          </p>
        </div>

        <section className="sec no-print" style={{ paddingTop: 0 }}>
          <div className="cv-in" style={{ maxWidth: 560 }}>
            <span className="status">{site.status}</span>
            <CvRequestForm />
          </div>
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
          <div className="sec-head">
            <span className="t-section">Education</span>
            <h2>{education.degree}</h2>
            <p>
              {education.institution}. {education.detail}
            </p>
          </div>

          <div>
            <ul className="fact-list" style={{ maxWidth: 680 }}>
              {education.results.map((result) => (
                <li key={result}>{result}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="sec cv-section">
          <div className="sec-head">
            <span className="t-section">Experience</span>
            <h2>Where the work has happened</h2>
          </div>
          <div className="exp-list">
            {experience.map((role) => (
              <div className="exp-row" key={`${role.org}-${role.when}`}>
                <span className="exp-when">{role.when}</span>
                <div className="exp-body">
                  <span className="exp-role">
                    {role.role}, <b>{role.org}</b>
                  </span>
                  <p className="exp-note">{role.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="sec sec-work cv-section">
          <div className="sec-head">
            <span className="t-section">Selected work</span>
            <h2>What it produced</h2>
            <p>The case studies behind these carry the reasoning.</p>
          </div>
          <div className="exp-list">
            {cvHighlights.map((item) => (
              <div className="exp-row" key={item.title}>
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
              </div>
            ))}
          </div>
        </section>

        <section className="sec cv-section">
          <div className="sec-head">
            <span className="t-section">Technical</span>
            <h2>What I reach for</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--s5)", maxWidth: 780 }}>
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
          </div>
        </section>

        <section className="sec sec-work cv-section">
          <div className="sec-head">
            <span className="t-section">Awards</span>
            <h2>Competitive record</h2>
          </div>
          <div>
            <ul className="fact-list" style={{ maxWidth: 680 }}>
              {awards.map((award) => (
                <li key={award}>{award}</li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
