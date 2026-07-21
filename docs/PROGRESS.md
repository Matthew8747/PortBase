# PROGRESS.md — log, open items, reminders
docs-version: 6

> Append-only log + living checklist. Any chat session working on this project: read PLAN.md → PROFILE.md → DESIGN.md → this file, then continue from "Next actions".

## Next actions
1. **Matt:** work through `docs/TODO.md` — domain, email, Resend keys, project screenshots, and taking down the old CV PDF (that one is urgent: it exposes phone, address and referees).
2. **Matt (decision):** commit + push to GitHub, and deploy to Vercel. Not done — CLAUDE.md forbids committing without an explicit ask.
3. **Next session:** fine-tuning pass on the live site, then rewrite the CV using `docs/PROFILE.md` as the source.
3. **Matt (anytime, blocks Phase 8 only):** upload remaining courseworks (this year + previous years) — cyber security HAR analysis, Spotify innovation analysis, entrepreneurship brand, any year-1/2 work worth mining.
4. **Matt (anytime):** Barnett Art live link + screenshots for card.
5. **Matt (decision, pre-launch):** buy mattpearson.dev ($9.99/yr, available as of 2026-07-20) or ship on vercel.app first.

## Standing reminders
- ⚠️ Old public CV PDF (on github.io) exposes phone, address, references — remove/replace at launch.
- Restart Lab demo is slow + results early-stage → case study framed as "trustworthy analytics tooling"; optional perf polish before launch; don't over-claim results.
- Bike fit: confirm ethics/publishability of data visuals before case study ships.
- Convert `1725137655982.jfif` → `assets/photo.jpg`/webp if photo used; alt photo available from Matt.
- NY Racing externship: add card when deliverables done.
- Phase 8 includes crafting the "unrejectable" CV from PROFILE.md — explicit Matt request.

## Decision log
| Date | Decision |
|---|---|
| 2026-07-20 | Brand = Matt Pearson; Pearson Digital retired to LinkedIn shell for client work only |
| 2026-07-20 | Domain rec: mattpearson.dev; email via forwarding (Cloudflare routing / Zoho free) — no server |
| 2026-07-20 | CV gated (request flow); no raw email on site; contact = form |
| 2026-07-20 | No blog in v1 |
| 2026-07-20 | Project tiers set (PROFILE.md): flagships = Restart Lab, BUBC, Bike Fit |
| 2026-07-20 | Direction "Editorial Precision" APPROVED, amended: two accents; background temperature to be settled by concept choice |
| 2026-07-20 | Phase 3 concepts delivered: Paper / Studio / Ledger (docs/concepts.html + artifact) |
| 2026-07-20 | CONCEPT LOCKED: A×B synthesis ("Paper × Studio"). Accents blue+red (cobalt action / rubric marks). Hero motion = Studio's. Signature motif = scroll-drawn thread line w/ section nodes (Matt's idea). Colour never arbitrary — every use has named job |
| 2026-07-20 | Craft standard formalised in CLAUDE.md (all components fully designed, all states). Canary protocol added (footer line proves context) |
| 2026-07-20 | v3 from Matt's v2 critique: cards → editorial work rows; hero owns full first viewport (nothing else above fold); section bg rhythm ground→white→ink-band→ground; thread → DNA HELIX (two strands cobalt+rubric intertwine, draw with scroll, phase-drift while scrolling, faint rungs); buttons v3 rationale rest=ink-object hover=cobalt-action, secondary = two-layer underline links; hero eyebrow ("Final-year MComp…") deleted — degree info lives in about band + CV section; landing = design-first, info unfolds on scroll |
| 2026-07-20 | IA draft: 7 page types; rejected Blog/Uses/Now/Speaking/Lab pages |

## Session log
- **2026-07-21 (BUILD — Phases 7–9 executed):** Matt approved v5 and asked to populate the site, set up hosting, and get a manual TODO list.
  - **Scaffolded** Next.js 16.2.10 (App Router, Turbopack) + React 19.2.4 + TypeScript strict + Tailwind v4, in the existing repo. Added `resend` and `zod`. No component library, no CMS, no state library — see `docs/PLAN.md` Phase 7 anti-complexity rules.
  - **Design system ported** from `docs/SYSTEM.md` into `app/globals.css` as real CSS organised by section, rather than utility soup — guarantees fidelity with the prototype Matt approved.
  - **Content model:** `content/site.ts` + `content/projects.ts` hold every fact and all copy; pages read from them. Chose typed TS modules over MDX — no build config, still trivially editable. Deviation from the PLAN.md leaning toward MDX, recorded here deliberately.
  - **Nine routes live:** `/`, `/work`, three case studies, `/about`, `/cv`, `/thanks`, 404. Plus `sitemap.xml`, `robots.txt`, `Person` structured data, per-page metadata.
  - **Case studies written** to the fixed five-part spine from IA.md, keeping PROFILE.md's honesty rules: Restart Lab framed as early-stage with thin results; bike-fit credits Bath's Lovelace/IMPACT labs for the rig; Kontron described but never shown.
  - **CV request flow:** validated with zod, honeypot field, in-memory rate limit (5/hour/IP), Resend delivery. Env-gated — without keys it returns an honest "not connected yet" message pointing at LinkedIn, and logs the request server-side so none are lost.
  - **Bugs found and fixed:** TS narrowing didn't survive into the helix's hoisted closures (fixed with explicit non-nullable aliases); passing `as={Link}` into the client `Reveal` component broke the production build ("Functions cannot be passed directly to Client Components") — `Reveal` now renders the link itself.
  - **Verified:** `next build` clean (14/14 static pages), `tsc --noEmit` clean, `eslint` clean. All nine routes return 200, unknown route returns 404. Hero canvas measured in the running app at max 194 / mean 32.6 / 8% bright / 63% dark — matching the approved prototype's profile. Helix renders 2 ghost + 2 lit paths. API returns 422 on bad input, 503 with an honest message when unconfigured. **Privacy grep across source and build output for phone, address, referees and both raw email addresses: clean.**
  - Browser-pane screenshots timed out again this session; page structure verified by fetching each route and parsing the DOM instead.
  - **Shipped, on Matt's explicit approval:** committed (2 commits), pushed to `github.com/Matthew8747/PortBase`, deployed to Vercel (`matt-pearson-projects/portbase`).
    - ⚠️ **The first deploy landed in Production, not Preview as intended** — Vercel's CLI targets production for a project's first-ever deployment. Reported to Matt rather than papered over. Practical impact was nil: the project has Vercel Deployment Protection enabled, so the URL 302s to Vercel SSO and carries `x-robots-tag: noindex`. It is not publicly reachable. Subsequent deploys are Preview as expected.
    - Added a robots guard as a result: `app/robots.ts` now disallows all crawling unless the request host matches `NEXT_PUBLIC_SITE_URL`, so no `*.vercel.app` hostname can ever be indexed and compete with the real site for Matt's name.
  - **Vercel state:** project `portbase`, team `matt-pearson-projects` (`team_JJGtL26RMNkJ42BhSNSxWp21`). CLI authenticated as `matthew164798-3520`. No custom domain, no env vars set yet — both in `docs/TODO.md`.
  - New: `docs/TODO.md` (manual tasks), `README.md`, `.env.example`, `.claude/launch.json`. `docs/HANDOFF.md` rewritten for the build phase.
- **2026-07-21 (v5 — volumetric hero):** Matt: "very flat", wants the helix visibly running down the side, sent Unicorn Studio + two component references (Aether Flow particle hero, Ethereal Beams three.js hero).
  - **Diagnosis:** flatness was the *medium*, not the shape — a translucent form on warm paper has nothing to be deep in. Hero moved to a near-black ground (`--void #0A0907`) with the two inks suspended in it: layered at depth, two-stage bloom, hot core pass, grain, vignette. Measured before/after — old hero mean brightness 67 / max 93 / 0% bright pixels (a uniform grey haze); new hero mean 29 / max 191 / 6% bright / 66% genuinely dark. Verified visually: reads as real volumetric light.
  - **Helix:** now always visible via a permanent ghost track at 24% opacity, with the lit portion drawing over it on scroll. Stroke uses an SVG gradient so it lifts over the dark hero and returns to full-strength ink over paper below. Rungs now start below the hero (the hero has no section boundary to mark).
  - **Verdict on Matt's references (in the board):** neither adopted as-is. Aether Flow = particle-network + purple + gradient text = the most-generated hero on the internet, and connected-dot fields are on our banned list. Ethereal Beams ships glassmorphism, shimmer buttons, gradient text and invented stats ("1M+ users") which would be lies on Matt's site. **Kept the technique** — volumetric light with real falloff — rebuilt in his two inks, no dependencies.
  - **Unicorn Studio: not pursued.** I will not log into Matt's Google account, and their output is a hosted script + remote scene rather than source we own — an external dependency, a load-time cost, and no version control.
  - Ink lab reframed: three densities (Bloom mounted / Veil / Filament) instead of four flat plates.
  - Section rhythm now: dark hero → white work → warm experience → dark About band → warm CV. **Needs Matt's confirmation.**
  - Renderer note: browser-pane screenshots worked intermittently this session. Hero verified visually; light board sections verified visually; work rows verified via DOM probe (opacity/geometry) after the renderer stopped repainting. One apparent header bug (light band at scroll 0) was proven to be the preview renderer freezing CSS transitions mid-flight — with transitions disabled the header is correctly transparent with cream wordmark.
  - **New: `docs/HANDOFF.md`** — paste-in prompt for resuming in a fresh chat, plus when to start one. CLAUDE.md updated to point at it.
- **2026-07-21 (v4 + Phases 4–6):** Typography surgery from Matt's critique — killed decorative uppercase-mono labels ("01 — FEATURED"); numerals dropped entirely (implied a ranking carrying no information); work-kind labels now italic-serif + body sans; mono demoted to genuine data only (tech stacks, dates). Radius 10px→2px sitewide. Added: Experience timeline section, designed 3-column footer, header scroll-compression, hatched project frames. Built **Ink Lab** — 4 hero-plate treatments (Diffusion / Twin ribbons / Bleed / Filament knot), all hand-built canvas 2D, none templated; Option B mounted in hero pending Matt's pick. Phase 4–6 documents written: IA.md, UX.md, SYSTEM.md. Docs v4.
  - Bugs found and fixed during verification: canvases never sized (`fit()` bailed on zero-width containers before grid/aspect-ratio resolved — now retries via ResizeObserver + paints one frame immediately); hero entrance gated on a rAF that never fired in the preview renderer.
  - Verification honesty: browser-pane screenshots and image reads both failed this session (renderer/tooling, not the page — screenshots were already failing in v3 before any canvas existed). Verified numerically instead via direct JS probes: all 5 canvases sized and painting, ink coverage measured (hero 14%, diffusion 100%, bleed 27%, ribbon 10%, knot 5%) and ribbon/knot strengthened after measuring too sparse. **Matt should eyeball it — I have not seen it rendered.**
- **2026-07-20 (session 1, v3):** v2 critique → full landing PROTOTYPE (not framed mockup): 100vh hero, helix motif, work rows, ink about-band, CV section, spec notes appended below prototype. Verified: layout probes all pass (fold discipline, quirks handled via doctype in docs copy); helix logic proven by synchronous JS probes (draw-to-progress, rung lighting, phase weave) — pane screenshots died mid-session (renderer freeze, tooling issue, not page). Docs v3.
- **2026-07-20 (session 1, later):** Direction approved w/ amendments (two accents; bg temperature open). Phase 3 concept board built + verified in browser (all 3 mockups render, motion demos work, charset fixed): `docs/concepts.html` + artifact (same content). Claude rec: Studio chassis + Ledger index block + Paper pull-quote serif; accent roles = action vs achievement. DESIGN.md updated. Awaiting Matt's 4 picks.
- **2026-07-20 (session 1):** Tooling installed (see PLAN.md Phase 0). Interview completed. Ingested: CV PDF, all GitHub repos (incl. new NLP-pipeline), old github.io site, Restart Lab live site; LinkedIn blocked (HTTP 999). Domain availability checked live. Phase 2 research written. Docs created: PROFILE, DESIGN, PLAN, PROGRESS.
