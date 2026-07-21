import Link from "next/link";
import { site } from "@/content/site";

export default function SiteFooter() {
  return (
    <footer className="site-foot">
      <div className="foot-grid">
        <div>
          <div className="foot-mark">{site.name}</div>
          <p className="foot-note">
            {site.role}. Currently in {site.location}, {site.relocation}.
          </p>
        </div>
        <div className="foot-col">
          <h4>Site</h4>
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/cv">Request CV</Link>
        </div>
        <div className="foot-col">
          <h4>Elsewhere</h4>
          <a href={site.links.github} rel="me noreferrer" target="_blank">
            GitHub
          </a>
          <a href={site.links.linkedin} rel="me noreferrer" target="_blank">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="foot-base">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>Built with Next.js and deliberately little else.</span>
      </div>
    </footer>
  );
}
