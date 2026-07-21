"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

/**
 * Header. Transparent over the dark hero, compacts to a light bar past 90px of scroll.
 * `onDark` is set by pages that open with the dark hero (only the homepage today).
 */
export default function SiteHeader({ onDark = false }: { onDark?: boolean }) {
  const [compact, setCompact] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setCompact((window.pageYOffset || document.documentElement.scrollTop || 0) > 90);
        ticking = false;
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className={`site-head${onDark ? " on-dark" : ""}${compact ? " compact" : ""}`}>
      <Link className="wordmark" href="/">
        {site.name}
      </Link>
      <nav className="site-nav" aria-label="Main">
        {nav.map((item) => {
          const current = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              className="navlink"
              href={item.href}
              aria-current={current ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
        <Link className="btn btn-ink sm" href="/cv">
          Request CV
        </Link>
      </nav>
    </header>
  );
}
