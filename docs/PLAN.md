# PLAN.md — Portfolio master plan

> The phase map. Update status as phases complete. Details live in: PROFILE.md (facts), DESIGN.md (visual), PROGRESS.md (log + open items).
> Last updated: 2026-07-21 (docs v7)

## Phase status

| Phase | Name | Status |
|---|---|---|
| 0 | Tooling install | ✅ Done 2026-07-20 |
| 1 | Interview | ✅ Done 2026-07-20 |
| 2 | Design discovery | ✅ Research done — **direction "Editorial Precision" awaiting approval** |
| 3 | Concepts → locked synthesis + v4 prototype | ✅ Done. `docs/concepts.html`. One open pick: hero ink A/B/C/D |
| 4 | Information architecture | ✅ Written — `docs/IA.md` |
| 5 | UX journeys | ✅ Written — `docs/UX.md` |
| 6 | Design system | ✅ Written — `docs/SYSTEM.md`. Open: final display face (specimens pending) |
| 7 | Technical architecture | ✅ Built. Next 16 + React 19 + TS strict + Tailwind v4 + Resend + Zod. No CMS, no component library, no state library |
| 8 | Content strategy | ✅ Written into `content/`. Populated 2026-07-21: real imagery, Barnett Art promoted to a fourth flagship, Restart Lab results corrected, `/cv` rebuilt around evidence. Remaining coursework still outstanding from Matt |
| 9 | Build | ✅ Live at mattpearson.dev. 25 routes incl. per-route OG images. Identity mark shipped. Build/typecheck/lint clean |

## Phase 0 — Tooling installed (global skills)
ui-ux-pro-max, web-design-guidelines (Vercel), wcag-accessibility-audit, framer-motion-animator, vercel-react-view-transitions, vercel-composition-patterns, writing-guidelines. Pre-existing: frontend-design (Anthropic), Vercel plugin (shadcn/nextjs/deploy), superpowers suite, dataviz, code-review/verify.

## Phase 4 draft — Information architecture

Recommended pages (challenge everything else):
- **/** Home — hero (name, one-line pitch, current status line "Final-year MComp @ Bath · seeking 2027 grad roles"), 3 flagship project cards, brief about teaser, contact CTA
- **/projects** — flagships + cards (tiers per PROFILE.md)
- **/projects/[slug]** — case studies ×3 (Restart Lab, BUBC, Bike Fit)
- **/about** — story, education, rowing/Peru woven in, photo optional
- **/experience** — Kontron, NY Racing, Secure Thingz, ambassador (recruiter-scannable)
- **/cv** — sanitised web CV + "request full CV" flow (NO public PDF with contact details)
- **/contact** — form (Resend), LinkedIn, GitHub

**Rejected pages:** Blog/Writing (empty-blog risk; READMEs suffice — revisit post-launch), Uses (senior-dev trope), Now (maintenance debt — status line on home instead), Speaking (none yet), Lab (Restart Lab already covers it), separate Open Source (nothing to justify it).

## Phase 7 preliminary — stack leanings (finalise after concepts)

- **Next.js (App Router, latest) + TypeScript strict** — React signal matters for grad market; interactive case-study figures need islands of interactivity; he already knows Astro (BUBC) so Next adds range.
- **Tailwind CSS v4 + shadcn/ui (Radix primitives)** — only the ~6 components needed; no kitchen sink.
- **Motion (framer-motion successor) sparingly + native View Transitions** for route changes.
- **MDX** for case studies. **Lucide** icons. **React Hook Form + Zod + Resend** for contact/CV-request.
- **Vercel hosting** (already his platform), GitHub Actions CI (lint, typecheck, Lighthouse CI, Playwright smoke).
- **Biome** over ESLint+Prettier (single fast tool) — decide at build.
- Content: local MDX, no CMS (owner is the only editor; BUBC already proves he can do CMS).
- Analytics: Vercel Analytics or Plausible (privacy-clean).

Anti-complexity rules: no global state lib, no i18n, no auth, no database. CV-request = form → email. Static-first; server code only for the form action.

## Phase 9 skeleton — build milestones

| # | Milestone | Definition of done (headline) |
|---|---|---|
| 1 | Foundation | Repo scaffold, Next+TS+Tailwind+Biome, CI green, deployed skeleton on Vercel |
| 2 | Design tokens | Colours/type/spacing/radius/motion as Tailwind theme; dark mode toggle works |
| 3 | Layout + nav | Header/footer/container primitives, responsive, skip-links |
| 4 | Home | Hero + flagship cards + status line; approved concept faithfully built |
| 5 | Projects + case-study template | MDX pipeline, 3 case studies drafted in |
| 6 | About + Experience + CV | Sanitised CV page + request flow (Resend) |
| 7 | Contact | Form validated (RHF+Zod), spam-safe, delivers |
| 8 | Motion pass | Baseline micro-motion + chosen hero moment; reduced-motion audit |
| 9 | Accessibility | wcag-accessibility-audit skill pass; keyboard-only walkthrough; AA contrast |
| 10 | SEO + meta | OG images, sitemap, structured data (Person), per-page meta |
| 11 | Performance | Lighthouse ≥95 ×4 on 4G throttle; image/font optimisation |
| 12 | Launch | Domain decision executed, redirects from old github.io site, LinkedIn updated |

Full objectives/files/components/risks per milestone get written in Phase 9 proper.

## Approval gates
1. ✋ **NOW: approve/adjust "Editorial Precision" direction** (DESIGN.md)
2. ✋ Pick one of three Phase 3 concepts (incl. hero-motion demo choice)
3. ✋ Sign off IA + content drafts before build
4. ✋ Launch checklist
