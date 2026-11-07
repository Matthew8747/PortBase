"use client";

import Link from "next/link";
import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

/**
 * Scroll reveal. Fires once and stops observing. Nothing re-animates on the way back up.
 * Under prefers-reduced-motion the CSS shows content immediately, so this becomes inert.
 *
 * Pass `href` to reveal a link. The element type is a string rather than a component
 * because functions can't cross the server/client boundary.
 */
export default function Reveal({
  as = "div",
  href,
  id,
  className = "",
  style,
  children,
}: {
  as?: "div" | "section" | "article" | "li" | "span";
  href?: string;
  /** Set when the block is a link target, so in-page anchors can land on it. */
  id?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls = `reveal ${className}`.trim();

  if (href) {
    return (
      <Link
        href={href}
        id={id}
        className={cls}
        style={style}
        ref={ref as React.Ref<HTMLAnchorElement>}
      >
        {children}
      </Link>
    );
  }

  const Tag = as;
  return (
    <Tag className={cls} id={id} style={style} ref={ref as React.Ref<never>}>
      {children}
    </Tag>
  );
}
