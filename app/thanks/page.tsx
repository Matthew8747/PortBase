import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Request received",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="page-head">
          <span className="t-section">Request received</span>
          <h1>That&rsquo;s with me.</h1>
          <p className="lede">
            I&rsquo;ll send the CV over within a day or two. If it&rsquo;s urgent, a message on LinkedIn will
            reach me faster.
          </p>
        </div>

        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="cv-row">
            <Link className="btn btn-ink" href="/work">
              Read a case study
            </Link>
            <a className="ulink" href={site.links.linkedin} rel="noreferrer" target="_blank">
              LinkedIn
            </a>
            <Link className="ulink" href="/">
              Back to the start
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
