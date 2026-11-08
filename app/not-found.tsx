import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <div className="page-head">
          <span className="t-section">404</span>
          <h1>That page doesn&rsquo;t exist.</h1>
          <p className="lede">
            Either it moved or the link was wrong. The work is the most useful place to pick things up again.
          </p>
        </div>
        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="cv-row">
            <Link className="btn btn-ink" href="/work">
              See the work
            </Link>
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
