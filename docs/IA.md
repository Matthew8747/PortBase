# IA.md — Phase 4: Information architecture

> Status: proposed 2026-07-21, awaiting sign-off. Companion docs: PLAN.md (phases), UX.md (journeys), SYSTEM.md (tokens).

## Principle

This is a portfolio and a CV, not a content platform. Every page must earn its place by answering a question a hiring reader actually asks. Pages that exist "because portfolios have them" are cut. Nine candidate pages were considered; five ship.

## Sitemap (v1 — launch)

```
/                        Home — the pitch, in one scroll
/work                    Index of everything, tiered
/work/restart-lab        Case study
/work/bubc               Case study
/work/bike-fit           Case study
/about                   The person: story, education, rowing, Peru
/cv                      Web CV (sanitised) + request-full-CV flow
/thanks                  Post-submission confirmation (no nav dead-end)
404                      Designed, not default
```

Total: 5 real pages + 3 case studies + 2 utility pages.

## Page-by-page

### `/` Home
**Question answered:** who is this and is he any good?
Sections in scroll order: hero (name + one line + ink plate) → selected work (3 flagship rows) → experience (3 roles) → about (short, ink band) → CV & contact. Ends at the conversion point. No section exists that doesn't move a reader toward "I'd interview him."

### `/work`
**Question answered:** what else has he built?
The three flagships at the top as full rows, then a quieter grid of the supporting projects (NLP pipeline, Space Invaders RL, tumour detection, Society Matchmaker, AI experiments, Barnett Art, Argonauts). Supporting projects link out to GitHub rather than to case studies — honest about which work carries depth.

### `/work/[slug]` — case studies
**Question answered:** how does he think?
Fixed spine so all three read consistently and can be skimmed in any order:
1. **What it had to do** — the problem and the constraints, in plain terms
2. **What I chose** — decisions and the alternatives rejected
3. **How it works** — architecture or method, one diagram
4. **What it cost** — time, money, performance, trade-offs
5. **What I'd change** — the honest close
Each opens with a one-paragraph summary so a reader who stops after 30 seconds still gets the point.

### `/about`
**Question answered:** would I want to work with him?
Long-form: the route into computing, the placement year, rowing at national level and what training twelve times a week alongside a degree actually teaches, Peru, languages. Education and grades live here as a clean table.

### `/cv`
**Question answered:** can I see the paperwork?
Sanitised web version — education, grades, experience, skills — plus the request form for the full PDF. **No phone, no address, no referees, no raw email anywhere on the page.** Form fields: name, organisation, email, one-line reason. Submission emails Matt via Resend; he sends the PDF himself.

### `/thanks`
Confirms receipt, sets expectation ("I'll reply within a day or two"), offers links onward to work. Prevents the dead-end that a bare form success message creates.

### `404`
Designed to the same standard as everything else, per the craft rule. One line, one route back.

## Rejected pages, with reasons

| Page | Verdict |
|---|---|
| **Blog / Writing** | Cut. An empty or stale blog costs more credibility than no blog. Case studies are the writing samples. Revisit only if Matt writes three pieces he'd defend. |
| **Uses** | Cut. A senior-developer trope; a student listing their keyboard reads as imitation. |
| **Now** | Cut. Maintenance debt with a decay date. The status line on Home ("Open to 2027 graduate roles") does the job. |
| **Speaking** | Cut — nothing to list. Reconsider if a talk happens. |
| **Open Source** | Cut. Nothing with traction; GitHub link is sufficient and honest. |
| **Lab / Experiments** | Cut as a page. The AI experiments become one card in `/work`; Restart Lab already carries the experimental register. |
| **Contact (standalone)** | Merged into `/cv`. Two pages competing for one action splits the conversion. |

## Navigation

- Header: Work · Experience · About · **Request CV** (the only filled button on the page).
- "Experience" scrolls to the Home section rather than routing to a page — the content is three roles, not a page's worth.
- Footer repeats the site links, adds GitHub and LinkedIn, and carries the colophon.
- No hamburger on mobile for four items: the nav collapses to the Request CV button, with the rest reachable from the footer. Fewer moving parts, nothing hidden behind an icon.

## URL and metadata rules

- Lowercase, hyphenated, no dates in slugs (`/work/bike-fit`, not `/work/2026-bike-fit-study`).
- Every page: unique title, description, and OG image generated from the page title in the site's own type.
- `Person` structured data on Home; `CreativeWork` on case studies.

## Deferred to v2

Project filtering, an RSS feed, case-study cross-linking, a photography or reading page. All are additions that only make sense once traffic and content justify them.
