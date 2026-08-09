# PROGRESS.md — log, open items, reminders
docs-version: 11

> Append-only log + living checklist. Any chat session working on this project: read PLAN.md → PROFILE.md → DESIGN.md → this file, then continue from "Next actions".

## Next actions
1. **Matt:** replace the GitHub profile README with the version in `docs/PROFILES.md` (badge and `mailto:` dropped, as agreed), and update the LinkedIn About section from the same file.
2. **Matt (still urgent):** take down the old CV PDF on `matthew8747.github.io` — it exposes phone, address and referees.
3. **Matt (when the paper allows):** the two or three bike-fit findings you're happy to publish ahead of the paper. The case study reports method only until then.
4. **Matt (before an interview):** re-check the two Barnett Art figures flagged in `docs/TODO.md` §3f (101 tests, 0/0/2 security findings) if you ship to that repo.
5. **Matt (anytime):** NY Racing modelling when it's finished, and it becomes a project card.

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
- **2026-08-09 (ONEGUARD + SITE-WIDE TONE PASS):** Matt asked for the entrepreneurship coursework as a new
  project, then, mid-session, for a review of the copy on every page: it read arrogant, Peru should not have
  its own section, and the whole thing should make a hiring manager want to interview him.
  - **New second tier of project.** OneGuard is a five-person venture, not a flagship, so it does not go in
    `featured` (which the home page renders in full). Added `secondary: Project[]` in `content/projects.ts`
    plus an `allStudies` helper, and a new **study row** component on `/work`: hairline rows on the
    experience list's 150px/1fr rhythm, kind label in rubric, no image. Rank is legible from density rather
    than from size. Routes, OG images and the sitemap all read `allStudies`, so the build generates 5 study
    pages instead of 4.
  - **Sources read in full:** the 28-page CW1 report, the CW2 brief, and the final poster. Every figure on
    the page traces to the report. The Google Slides deck could **not** be read (login-gated, so WebFetch
    gets the app shell, not the notes) and the gstack headless browser failed to start, so the speaker notes
    are still unread. Nothing on the page depends on them.
  - **Role honesty.** The report has no per-author attribution, so the first draft of the page was written
    entirely in the plural and claimed nothing for Matt alone. He then confirmed his share: market research,
    idea validation, interviews with people working in finance, and a light regulatory check on the finance
    angle. The page now names those three and stays in the plural everywhere else. The interview line is
    backed by the report's own "Corporate MD Employee (Nov. 2025), Personal Communication" citations, and
    quotes seven words of one of them.
  - **Three images** cut from source: the hi-fi lesson screen (lead), the hand-drawn ten-screen flow, and the
    poster. The poster is portrait in a column built for landscape, so a `.fig-portrait` rule caps it at
    520px. All three verified serving 200 and decoding through `/_next/image` as webp.
  - **Tone pass, and what was actually wrong.** The copy kept claiming quality rather than showing it, and
    took swipes at absent third parties. Fixed: "a simulator that refuses to lie" (moral framing), "the work,
    told properly" (implies others do it badly), "the gate most tools skip" and "CI confirms what my machine
    already knew" (both smug), the Squarespace paragraph (dismissive of a reasonable choice), "listed because
    people ask, not because a list proves anything" (arch at the reader's expense), and the rowing section's
    "a fair proxy for how quickly I pick things up" (telling a hiring manager what to conclude).
  - **Found a broken sentence live on the site:** Barnett Art's "card details never touch the which keeps the
    whole thing inside the lightest PCI bracket" had words missing. Fixed.
  - **Peru** dropped from an H2 section with a paragraph about judgement to one clause under "Outside that".
    **The placement year got its own section instead**, which is the strongest hiring evidence on the page and
    was previously one paragraph inside "How I got here".
  - **Society Matchmaker's stale claim finally cleared.** `content/projects.ts` still carried "engagement rose
    150%" even though `content/site.ts` was corrected in July. It now carries the measured 36% against 15%.
    Matt's link to the group repo (`olpaynter/society-matchmaker`) is **private**, so it is deliberately not
    linked from the card.
  - **First-year archive reviewed** (`Desktop/coursework/YR1`) after Matt corrected the hardware pick. Whac-A-Mole
    was dropped, it is ungraded and thin. Two cards added instead: the **morse code transceiver** (Systems
    Architecture CW2, two Arduinos over I2C, dot and dash on separate interrupts, a one-second gap as the
    character delimiter, lookup decode to an LCD, potentiometer channel select with channel zero as a
    broadcast), and **sudoku plus the dice game** grouped as one card (constraint satisfaction with
    minimum-remaining-values and backtracking; a Markov decision process solved by value iteration).
  - **No repos created, deliberately.** The morse source that survives is `last code.txt`, a working dump with
    a missing brace in `send()` and debug prints still in it, and it is group work. The AI courseworks are
    solo and clean but are solutions to units Bath still runs, so publishing them is an academic-integrity
    risk with no upside. SRPN (emulating a legacy calculator's exact behaviour, saturating integer
    arithmetic and all) is a good interview anecdote but did not earn a card. Email spam classification was
    skipped as a duplicate of the NLP pipeline card. SPaM, Dungeon of Doom and the networks assignment add
    nothing a recruiter would use.
  - Tagline changed from "Software with judgement" (a claim about himself) to "Software engineering and
    applied AI" (a statement of field), which also fixes the page title.
  - Verified: `tsc --noEmit` clean, `next build` clean, 27 static pages, no horizontal overflow, study-row
    computed styles resolve to the documented tokens (rubric `#C23A18`, display face, 1px hairline).
    Screenshots were not possible: the preview pane does not composite in this session, so lazy-loaded
    figures never decode there, and that is true of the existing Barnett Art page too, not just the new one.
- **2026-08-05 (PORTRAIT NOT UPDATING):** Matt replaced `profile.jpeg` but the About portrait was unchanged.
  - **Cause: the new file was put in the wrong tree.** Commit `170a415` ("new pfp") touched `content/photos/profile/` only. That directory is a source archive — nothing in it is served. `content/site.ts` points the portrait at `/profile.jpeg`, which Next serves from `public/`, and `public/profile.jpeg` was still the July file (82,426 bytes, 1232×1640) while the new one (139,710 bytes, 904×1215) sat in `content/photos/profile/`.
  - **Fix:** copied `content/photos/profile/profile.jpeg` → `public/profile.jpeg`. No code change needed; `site.ts` and the About page were already correct.
  - **Verified, not assumed:** `next dev` + `GET /_next/image?url=%2Fprofile.jpeg&w=1080` returns 200 `image/jpeg` at **904×1215**, i.e. the new source, not the old one.
  - **Aspect note:** the new photo is 0.744 where `.portrait img` fixes `aspect-ratio: 4 / 5` (0.8) with `object-fit: cover`, so it crops slightly top/bottom. No layout shift; flagged in case Matt wants the framing checked.
  - **Standing trap:** anything meant to be visible on the site must land in `public/`. `content/photos/` is originals only.
- **2026-07-21 (DEPLOY FIX + SU role):** Matt reported images not loading on the live site.
  - **Not a code bug.** Production was still serving the pre-imagery build: the figure slots rendered the old `<span>OPTIMISATION STUDY</span>` placeholder plates, which is exactly what a broken image looks like. Every new asset 404'd on prod (`/profile.jpeg`, `/work/*.webp`, `/icon.svg`) because that build did not contain them. `x-vercel-cache: HIT` with `age: 37798` (10.5 hours) confirmed nothing had rebuilt.
  - **Root cause: Vercel had no GitHub integration.** `GET repos/Matthew8747/PortBase/deployments` returned **0**. The project was originally linked with the Vercel CLI, which does not connect the Git repo. So merging PR #2 deployed nothing, and would have kept deploying nothing.
  - **Ruled out the alternatives before blaming the deploy:** ran `next build` + `next start` locally and confirmed every asset serves 200 and `/_next/image` returns a real optimised image. The pipeline was never broken.
  - **Matt connected the Git repo mid-session.** Verified it works rather than assuming: the branch push produced a **Preview** deployment (success), the preview served all assets, and all three work-row images reported `complete && naturalWidth > 0`. Merging PR #3 then produced a **Production** deployment automatically. So pushes to `main` now deploy to production, and branches get previews.
  - **Live and verified:** www.mattpearson.dev now serves the new build (new copy, Barnett Art, the SU role), all assets 200, `/_next/image` returns `image/webp` through Cloudflare, zero console errors.
  - **Added the SU Performance Sport Officer role** (PR #3), elected seat on the Students' Union Sports Executive. Sits third in the experience list, ahead of the ambassador entry. Description is the official remit from thesubath.com only. An early draft invented a line about what Matt did and did not enjoy about the role; it was cut before commit. Nothing is claimed about his personal record in the post because nothing is on record.
- **2026-07-21 (RESPONSIVE + FACT-CHECK):** Matt: the site does not look right at 16:9, check mobile too; plus pointers to the coursework archives and answers to the open questions.
  - **Found a production-only bug first.** `content/site.ts` pointed the portrait at `/PROFILE.jpeg` while the file on disk is `public/profile.jpeg`. Windows does not care about case; Vercel's filesystem does, so it worked locally and would have 404'd in production. Corrected, with a comment so the next person does not repeat it.
  - **The 16:9 problem was structural.** Sections carried a 150px left gutter and no maximum width, so on a 1920 monitor everything hugged the left rail and roughly a third of the screen sat empty. Added a centred shell (`--shell: 1280px`, `--bleed`) applied to `.sec`, `.page-head` and `.fig-lead`. Backgrounds still run edge to edge; only the content centres. Verified at 2560, 1920, 1366, 1024, 768, 390 and 360: no horizontal overflow at any width.
  - **The helix broke as a result** and had to be fixed with it: absolutely positioned at `left: 36px`, it stranded itself in the empty left margin, disconnected from the column it edges. Now `left: calc(36px + var(--bleed))`.
  - **Mobile fixes:** section headings carried 96px of air beneath them, which reads as generous at desktop and as a mistake at 390px, cut to 32px. The bike-fit diagram was illegible when squeezed into 342px, so it now keeps its own horizontal scroll at a 620px minimum, which is what SYSTEM.md §4 already required for wide figures.
  - **Screenshots finally worked**, via the gstack headless browser after the built-in preview pane returned a collapsed viewport (`vh: 32`) and ignored resize commands. Every claim above was checked against a real render.
  - **Fact-checking against the coursework archives turned up three errors that were live on the site.** Digital Business Innovation is **Red Bull**, not Spotify. Entrepreneurship is **"Human versus AI Generated Detection Training"**, not AI-security training for financial services. Cyber security is the payment-card exercise, now described with what it actually found: one Argos checkout reaching 49 domains over 766 requests.
  - **The Society Matchmaker claim was unsourced and is now evidenced.** "Engagement rose 150%" appears nowhere in the group's Deliverable 4 report. What the report records is an engagement ratio of **36% against the students' union site's 15%**, n=18 after removing two compromised samples, paired single-tailed t-tests, Cohen's d 0.77 to 1.48, p from .008 to <.001. The site and the GitHub README now carry the measured figures. This was the exact "it unravels in an interview" risk flagged last session.
  - **Answers applied:** Anna Barnett named as the client; Barnett Art stays on its Vercel URL; bike fit reports method only and says a paper is in progress; the GitHub email badge goes. Restart Lab's baseline call was left to me, and is recorded with its reasoning in `docs/TODO.md` §3d.
  - NY Racing has real collected data now (`Documents/nascar-visibility-analysis`), but the modelling is unfinished, so it stays an experience entry with the honest "still in progress" wording instead of becoming a card.
  - Removed the stand-in `public/matt.jpg`; the real headshot is `public/profile.jpeg`.
- **2026-07-21 (POPULATE — imagery, fourth flagship, CV, OG, identity):** Matt asked to flesh the site out, kill any AI-generated feel, and make him unrejectable. Spec: `docs/superpowers/specs/2026-07-21-populate-and-harden-design.md`.
  - **An icon at last.** The mark is the helix cropped to the one instant the cobalt and rubric strands cross, curve geometry lifted from `components/helix.tsx` (x = cx + A·sin θ over θ = −π/2 to +π/2) with the amplitude exaggerated from the page's 13px/540px so it survives 16px. SYSTEM.md already says the two accents meet exactly once per page; the icon **is** that meeting, so the mark has a job in the existing system instead of being decoration. Ships as `app/icon.svg`, `app/apple-icon.png` and a six-resolution `favicon.ico`, all generated from the same geometry. First render had serrated strokes from PIL's polyline joints; redrawn by stamping circles along the path.
  - **Real imagery, finally.** `public/work/` now carries eight processed WebP assets (41–123KB each), cropped for the size they are actually shown at — the raw BUBC capture was 574×2000 and would have been mush in a 400px column. Project frame moved from 4:3 to 16:10; the hatch survives as the ground behind a loading image and as the treatment for any project with no artwork.
  - **Bike fit got a drawn figure**, since its ethics position is still open and there is no publishable imagery. `components/bike-fit-diagram.tsx` renders six instrument lanes at six different tick densities converging on one timeline, with the protocol's real RPE marks at 4, 9, 14 and 19 minutes. It is method, not participant data. Colours resolve from tokens, so it flips with the theme instead of being a picture of one theme. First composition was lopsided (dead space bottom and right, and the output line carried no information) — rebalanced and the RPE marks added so the right-hand third says something.
  - **Barnett Art promoted from a one-line card to the fourth flagship**, on Matt's approval, after reading the repository: Stripe hosted Checkout, Neon Postgres with Drizzle, atomic stock decrement plus an idempotency ledger, Terraform-provisioned S3/CloudFront, 101 Vitest tests, gitleaks and an OWASP audit in CI, and an import pipeline that strips GPS EXIF. It was the strongest thing in the portfolio and the site was describing it as "a gallery site for an artist's work". Repo is private; the page says so instead of hiding the absence.
  - **Restart Lab corrected.** The case study claimed no routine was decisively better. `optimization_studies/england-vs-argentina/study.json` says otherwise: 6.66% mean xG (CI 6.61–6.71) against a 1.04% library baseline (CI 0.78–1.30) over 400 confirm sims, stable under ±10% attribute perturbation. Now reported with the bounds that hold it honest — one fixture, 24 trials, absolutes only as good as the simulator. The screenshot on the page shows those exact figures, so text and image now corroborate instead of contradicting.
  - **`/cv` rebuilt** around evidence: education, experience, a new Selected Work block where every line leads with the outcome, skills grouped by kind instead of one undifferentiated chip wall, and awards. Plus a print stylesheet, so Cmd+P yields a clean document. **The reveal animation had to be forced visible in print** — it is IntersectionObserver-driven, so everything below the fold would have printed blank.
  - **Open Graph images** per route via `ImageResponse`, on the hero's void ground so links stand out in a feed of white cards. Satori cannot read system fonts, and it also cannot read variable fonts: the first build died with `Cannot read properties of undefined (reading '256')` on Newsreader's `fvar` table. Fixed by instancing a static cut with fonttools (wght 400, opsz 18) and shipping that.
  - **Copy pass, measured rather than eyeballed.** Pulled the visible text off all nine live routes and analysed it: sentence length mean 19.9, median 18, stdev 10.8, range 3–64, so the rhythm was already varied. The genuine tell was `rather than`, 15 uses, which is my crutch and not Matt's voice; rewritten down to 4. Rule-of-three hits were all real lists (instruments, minute markers) and were left alone.
  - **Portrait slot** built on `/about`, 4:5 hairline frame, gated by one flag in `content/site.ts`. The existing holiday photo is cropped in as a stand-in at `public/matt.jpg`; the new one overwrites the same path with no code change.
  - **Verified:** `next build` clean (25 routes incl. 9 OG images), `tsc --noEmit` clean, `eslint` clean. No horizontal overflow at 1280. Case-study lead figure measures 962×602, the in-prose wide figure breaks out to 880px past the 680px prose column as designed. **Privacy grep across source and build output is clean** — the only `07\d{9}` hit was `9007199254740991`, and "referees" appears solely as the word in copy.
  - **Scroll depth measured, since the fourth row was the named risk:** the CV section now sits 6.3 viewports down on a 7.5-viewport page. Request CV is in the header on every page and never scrolls away, so UX.md's 60-second guarantee holds.
  - Browser-pane screenshots timed out again this session, as in v3–v5. Worked around it by rasterising the diagram with `sharp` outside the browser and by probing geometry with JS — **but the pages themselves have still not been eyeballed by me this session. Matt should look.**
  - New: `docs/PROFILES.md` (GitHub README + LinkedIn copy, with reasons for what was left out), `docs/superpowers/specs/2026-07-21-populate-and-harden-design.md`.
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
