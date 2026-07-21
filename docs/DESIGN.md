# DESIGN.md — Phase 2 design discovery + direction

> Status: direction **APPROVED 2026-07-20** with amendments: (1) TWO accents, not one — used via role-split or section-swap; (2) background temperature open question (Matt unsure warm paper reads "tech" enough) — resolved empirically by Phase 3 concepts.
> Phase 3 concept board built: `docs/concepts.html` (open locally) / artifact https://claude.ai/code/artifact/999ccae6-ba7f-4e89-b221-8e35c4c317b5
> Concepts: **A Paper** (pale stone + cobalt/rubric red, serif-led) · **B Studio** (cool white + azure/gold, sans-led, serif signature) · **C Ledger** (ledger paper + ultramarine/market-green, mono-structured, finance-leaning). Claude recommendation: Studio chassis + Ledger indexed-flagships block + Paper serif pull-quotes; accents as roles (action vs achievement), section-swap reserved for case-study pages.
> **RESOLVED 2026-07-20 — Matt's picks:** base = A×B synthesis · accents = blue + red (cobalt #2946D8-ish action / rubric #C33A1B-ish marks, hues refinable) · hero motion = B (stagger + underline sweep) · mechanic = neither demo as-is: colours run through the page via **the thread** — a hairline that draws down the page with scroll, nodes at section boundaries; small line animations follow scroll. Rule: every colour use has a named job, nothing changes "for the sake of it".
> **Craft feedback from Matt:** v1 board buttons/chips/captions read basic. Standard raised (see CLAUDE.md): all components fully designed, all states, headers included.
> **v3 (current): full landing prototype** = `docs/concepts.html` (artifact same URL). Locked landing rules from Matt's v2 critique: (1) hero owns the entire first viewport — projects/info require scroll; (2) sections break with background changes: ground → white (work) → ink band (about) → ground (CV); (3) projects = editorial full-width rows w/ serif titles + screenshot frames, alternating layout — never card grids; (4) signature motif = **the helix**: cobalt+rubric strands intertwining DNA-style down the left gutter, drawn by scroll progress, wave phase drifts while scrolling, faint rungs bridge at intervals, hidden <940px, static under reduced-motion; (5) buttons: rest = ink object, hover = cobalt action; secondary = two-layer underline links, no borders on landing; (6) no biography eyebrow in hero — degree/status info lives in about band + CV section; (7) landing is design-first, information unfolds downward ending at gated CV.
> Last updated: 2026-07-20 (docs v3)

## Brief distilled

- Must feel: **minimal, elegant, professional, insightful**
- Must never feel: AI-generated, in-your-face, ugly, "typical flashy dev portfolio"
- Taste calibration from interview: **Stripe = favourite.** Apple nice but product-y. Linear good but "almost too techy" on landing. Vercel overwhelming on landing. Notion good but monotone.
- Serif instinct for personal brand; sans for company feel. Likes blue; open to a small multi-colour scheme (few colours, not loads).
- Motion: small + smooth throughout; open to ONE bigger hero moment — wants demos before committing.
- Audience: grad recruiters (30-second skim), engineers/hiring managers (case-study depth), product/finance recruiters (evidence of thinking).

## Inspiration analysis (grouped themes)

### Theme 1 — Product-grade minimal (the Stripe/Linear/Vercel axis)
| Site | Excellent | Overdone / avoid | Steal |
|---|---|---|---|
| stripe.com | Typography discipline, restrained gradient identity, information density without clutter, world-class docs feel | Animated gradient hero is *their* trademark — copying it reads as imitation | Spacing rhythm, type scale, "calm density", section transitions |
| linear.app | Motion restraint (fade+8px rise, ~200ms), dark refinement, keyboard-first credibility | Full-dark + glow = the "techy" feel Matt flagged; hundreds of clones | Motion timing values, feature-section pacing, focus states |
| vercel.com | Geist type system, pure black/white confidence, developer credibility | Landing overwhelm (Matt's words); triangle-brand austerity too cold for a person | Crispness, monochrome + one accent logic, docs typography |
| apple.com | Product photography scale, scroll pacing, one-idea-per-viewport | Scroll-jacking; needs $10k photography to work; product-not-person | One-idea-per-viewport pacing for case studies |
| notion.com | Friendly modernism, illustration warmth | Monotone (Matt's words); illustration style widely cloned | Warmth-within-minimal balance |
| raycast.com | Dark premium polish, feature storytelling | Full techno-dark again | Card polish, subtle gradient borders |
| anthropic.com | Serif (Styrene/Tiempos mix) editorial-meets-tech, ivory palette, calm authority | Very corporate-research tone | **Closest existing vibe to recommended direction** — serif headlines + warm paper + restrained accent |
| cursor.com | Confident simplicity, fast | Generic dark-SaaS drift | Brevity of messaging |

### Theme 2 — Engineer craft portfolios (individuals)
| Site | Excellent | Overdone / avoid | Steal |
|---|---|---|---|
| rauno.me (Rauno Freiberg, Vercel) | Interaction craft as proof-of-skill; "uses the medium to demonstrate the skill" | Interactions ARE the content — Matt's content is projects, not UI experiments | The principle: one or two exquisite interactions > twenty average ones |
| emilkowal.ski (Emil Kowalski, ex-Linear/Vercel) | Benchmark of motion restraint; teaches taste through subtlety | Minimal to the point of sparse — needs his reputation to carry it | Motion values, reduced-motion respect, less-is-more default |
| paco.me (Paco Coursey) | Text-first, near-zero decoration, perfect type | Too austere for a grad who must *show evidence* fast | Typographic hierarchy, quiet dark mode |
| leerob.com | Content-first structure, honest plain writing | Blog-centric (Matt has no blog) | Plain-English self-description voice |
| brianlovin.com | App-like sidebar IA, project detail pages | Sidebar IA overkill for ~8 projects | Project detail page anatomy |
| ped.ro (Pedro Duarte, Radix) | Technical credibility with personality; great code presentation | — | Code/demo embedding style for case studies |
| nan.fyi | Interactive explainers as flagship content | Heavy build cost per page | Interactive figure idea for ONE case study (e.g. Restart Lab sim visual) |
| rsms.me (Rasmus Andersson) | Engineer-designer hybrid credibility, Inter creator | Idiosyncratic layout | Proof that engineer+design sensibility is a brand |
| joshwcomeau.com | Delightful education, strong personality | Whimsy level would undercut "professional, elegant" brief | Micro-interaction quality bar only |
| cassie.codes | SVG animation personality | Playful-creative direction ≠ this brief | — |

### Theme 3 — Editorial / quiet craft
| Site | Excellent | Overdone / avoid | Steal |
|---|---|---|---|
| benji.org | Serif warmth, personal-yet-precise, generous whitespace | — | Personal editorial tone in type |
| daylightcomputer.com | Warm paper palette, craft obsession signalling | Product site budget | Warm neutral palette values |
| read.cv profiles (pattern) | Structured CV-as-design, recruiter-fast scanning | Template sameness | Experience-section scannability |
| Swiss/typographic tradition (grid-first) | Hierarchy from type + grid alone, zero decoration | Can feel cold/academic if pure | Grid discipline, type-scale-as-design |

### Theme 4 — Agency/creative-dev (borrow sparingly)
| Site | Excellent | Overdone / avoid | Steal |
|---|---|---|---|
| basement.studio | Swagger, technical showmanship | Whole aesthetic too loud for brief | Confidence of voice |
| darkroom.engineering (Studio Freight) | Lenis smooth-scroll pedigree, precision | Smooth-scroll libraries often hurt perf/a11y | Only: easing taste |
| obys.agency | Award-tier typography experiments | Experimental > professional | Type pairing courage |
| exo-ape.com / locomotive.ca | Cinematic storytelling | Heavy WebGL, long loads — everything Matt said avoid | — |
| lusion.co | Best-in-class WebGL | Gimmick risk, GPU cost | — |

### Theme 5 — Anti-patterns (named, so they're never accidentally built)
- **brittanychiang.com** — genuinely good, but the most-cloned dev portfolio on earth (numbered nav, "Hi, my name is" green-on-navy). Anything resembling it reads template.
- **bruno-simon.com** — 3D driving portfolio; masterpiece for a creative-3D dev, pure gimmick for anyone else.
- **AI-slop tells (2025–26):** Instrument Serif + gradient mesh blobs + glassmorphism cards + purple/indigo default + emoji section headers + "Crafting digital experiences" hero copy + typing animations + skill bars + particle backgrounds + spinning cube + terminal intro. **All banned.**
- GitHub-stats-widget walls, contribution-graph flexes, badge soup (current Matthew8747 profile README does this — site must not).

## Recommended direction: **"Editorial Precision"**

One sentence: **Stripe's engineering polish + Anthropic's serif warmth + Linear's motion restraint, on warm paper with ink text and one deep blue accent.**

- **Type:** serif display for name/headlines (candidates: Newsreader, Source Serif 4, Fraunces — NOT Instrument Serif) + neutral sans for UI/body (Inter or Geist) + mono for code/data touches (case studies contain real data — mono accents earn their place).
- **Colour:** warm paper (#FAF9F7-ish) / near-black ink; ONE accent: deep cobalt/royal blue (nods to Bath + rowing without saying it). Dark mode: true ink background, same accent lifted. System-default + toggle.
- **Layout:** generous whitespace, strict grid, max ~680px prose measure in case studies, wider for data figures.
- **Motion:** barely-there baseline (150–250ms fades/rises, Linear values), hover states that reward attention, View Transitions between pages. ONE hero moment candidate (Phase 3 will demo 2–3 options, incl. a "no hero moment" control). `prefers-reduced-motion` fully respected.
- **Imagery:** real project screenshots in consistent frames; NO stock, no generated abstract blobs. Optional headshot later.
- **Voice:** plain English, evidence-first, quietly confident. "I built X. It does Y. Here's proof."

Why this wins for Matt: matches his own taste ranking (Stripe #1, serif instinct, blue), differentiates from both template-slop AND cold-techy clones, flatters case-study content (editorial = reading experience), and reads "mature product sense" to every audience — exactly the grad-role differentiator.

### Phase 3 concept plan (after approval)
Three concepts, all inside Editorial Precision, varying temperature:
1. **"Paper"** — warmest, serif-led, most editorial.
2. **"Studio"** — Stripe-closest, sans-led, serif only for name, crispest.
3. **"Ledger"** — data-inflected: mono accents stronger, subtle rules/tables aesthetic (nods to finance ambition).
Each gets: homepage wireframe, type specimen, palette, component language, motion spec + hero-moment demo, mobile behaviour, pros/cons.

## Research sources
Curated from direct knowledge of the sites above; freshness cross-checked via [Muzli 100 best portfolios 2026](https://muz.li/blog/top-100-most-creative-and-unique-portfolio-websites-of-2025/), [Sitebuilder Report engineer portfolios](https://www.sitebuilderreport.com/inspiration/software-engineer-portfolios), [Colorlib developer portfolios 2026](https://colorlib.com/wp/developer-portfolios/). Live screenshot verification of shortlisted sites happens in Phase 3.
