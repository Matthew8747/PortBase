# SYSTEM.md — Phase 6: design system

> Status: proposed 2026-07-21. Values are implemented and running in `docs/concepts.html`; this is the written specification. Companion: DESIGN.md (direction), IA.md, UX.md.

## 1. Colour

Two accents, each with a job. If a colour appears without a job listed here, it is a bug.

| Token | Light | Dark | Job |
|---|---|---|---|
| `--void` | `#0A0907` | `#0A0907` | The hero ground. Near-black so suspended light has somewhere to fall off into |
| `--ground` | `#F7F6F2` | `#16150F` | Page background. Warm neutral — the warmth lives here so everything else can be precise |
| `--white` | `#FFFFFF` | `#1F1D16` | Raised surfaces: work section, cards, status chip |
| `--band` | `#17150F` | `#0E0D09` | The About band — a deliberate dark interruption in the scroll |
| `--ink` | `#1B1913` | `#ECE9E2` | Text, wordmark, primary button at rest |
| `--quiet` | `#57534A` | `#B5AFA2` | Body copy inside sections |
| `--muted` | `#6E6A61` | `#9B968A` | Labels, captions, tech strings |
| `--hair` | `#E5E2DA` | `#2F2C24` | 1px rules and borders |
| `--cobalt` | `#2A46D4` | `#8B9CF4` | **Action.** Links, buttons on hover, focus rings, hover reveals |
| `--rubric` | `#C23A18` | `#E8683F` | **Marks.** Eyebrow ticks, work-kind labels, status graduation, the live seat mark, key results |

**Rules**
- Cobalt never decorates; rubric never becomes interactive.
- The two meet exactly once per page — the hero underline sweep. A second meeting dilutes it to a colour scheme.
- Semantic colours (form errors, success) are separate from both accents and are drawn from the same warm neutral family.
- Contrast: all text combinations meet WCAG AA on their own ground. Cobalt on `--ground` = 7.4:1; rubric on `--ground` = 5.1:1 — both pass for body text; rubric is never used below 12px.

## 2. Typography

Three roles, no more. The v3 failure was a fourth voice (decorative uppercase mono) with no job.

| Role | Stack | Used for |
|---|---|---|
| Display | **Bricolage Grotesque** (variable: `opsz`, `wght`) | Name, headings, project titles, pull-quotes. Weight and optical size come from `--display-wght` / `--display-opsz`, never from ad-hoc values |
| Body | `-apple-system, 'Segoe UI Variable Text', 'Segoe UI', system-ui, sans-serif` | All running text, navigation, buttons, labels |
| Data | `'Cascadia Code', 'SF Mono', Consolas, monospace` | Tech stacks, dates, status lines. **Only where the content is genuinely code or data** |

**Production faces — DECIDED 2026-11-06, direction B "Lab notebook"** (Matt's pick from `docs/type-concepts.html`):

| Role | Face | Loaded as |
|---|---|---|
| Display | Bricolage Grotesque | `next/font/google`, variable, `axes: ["opsz"]` |
| Body | Archivo | `next/font/google`, weights 400/500/600 |
| Mono | Spline Sans Mono | `next/font/google`, weights 400/500 |

All three are self-hosted by `next/font` in `app/layout.tsx` — no third-party request at runtime, no layout shift. This replaces the system-font stand-in, which rendered the site in Palatino Linotype on Windows, Iowan Old Style on macOS and Georgia on Android.

Two consequences worth knowing before editing type:

- **The mono does real work.** Every eyebrow, chip, caption, status and date is Spline Sans Mono. Only headings and running prose use the other two. The site is about measurement, so labelling reads as instrument output.
- **Bricolage ships roman only.** There is no italic. Every `font-style: italic` on the display face was removed on 2026-11-06 because the browser was synthesising a shear. Emphasis now comes from family, colour or weight — never from a fake italic. Do not reintroduce one.

**Scale** (fluid where marked)
| Step | Size | Use |
|---|---|---|
| Display XL | `clamp(56px, 8.5vw, 108px)` / 0.96 / -0.03em | Hero name |
| Display L | `clamp(30px, 4.2vw, 44px)` / 1.1 / -0.025em | Section headings |
| Display M | `clamp(28px, 3.6vw, 40px)` / 1.1 / -0.025em | Project titles |
| Display S | 21px / 1.2 / -0.015em | Role titles |
| Body L | 16.5px / 1.62 | Section intros |
| Body | 16px / 1.68 | Descriptions |
| Body S | 14–15px / 1.6 | Notes, footer |
| Label | 12.5–13px / 1.4 | Kind labels, status |
| Section label | 11px / 1 / +0.18em, uppercase | Section eyebrows |
| Data | 11.5px / 1.6 / -0.01em | Tech strings |

**Rules**
- Measure caps at 46–52 characters for descriptions, 32 for footer notes.
- `text-wrap: balance` on every heading.
- Letter-spacing tightens as size grows (-0.03em at display, 0 at body, +0.18em at uppercase labels only).
- Uppercase is permitted for section eyebrows in the body face. Uppercase mono as a label is banned — that was the tell.

## 3. Space

An 8px base with a named scale. No arbitrary values.

`--s1:4 · --s2:8 · --s3:12 · --s4:16 · --s5:24 · --s6:32 · --s7:48 · --s8:64 · --s9:96 · --s10:128`

- Section padding: `--s10` vertical desktop, `--s9` mobile.
- Gutter: `--s7` desktop, `--s5` mobile; the left gutter widens to 150px on desktop to make room for the helix.
- Gaps between sibling elements use flex/grid `gap`, never margins — margins collapse and double silently.

## 4. Layout

- Content max width 1080px; prose max 52ch; case-study body 680px.
- Work rows: `1fr 400px`, alternating to `400px 1fr`. Single column below 900px, and the flip is undone so text always precedes its image in DOM order.
- Breakpoints: 560 (hide ink plate) · 700 (mobile padding, nav collapses) · 900 (work rows stack) · 980 (hero stacks) · 1080 (helix hides, gutter narrows).
- Every wide element (tables, diagrams, code) gets its own `overflow-x: auto`; the body never scrolls sideways.

## 5. Shape and elevation

- Radius: **2px** everywhere. Rounded corners were the softest, most default thing on v3; sharpening them did more for the "not templated" goal than any other single change.
- Borders do the work shadows usually do: 1px `--hair` at rest, deepening to 22% ink on hover.
- One shadow token, used only on hover: `0 20px 44px -20px rgba(27,25,19,.3)`. Nothing is elevated at rest.

## 6. Motion

| Property | Value |
|---|---|
| Easing | `cubic-bezier(.2, .7, .2, 1)` — everywhere, no exceptions |
| Micro (colour, border) | 150–250ms |
| Hero sequence | 3 elements, 140ms stagger, 700ms each, underline at +700ms. Under 1.5s total, then silence |
| Press | 100ms, 1px |

**Rules**
- Motion communicates state or position. Ambient movement is limited to the ink plate and the helix, both of which encode something (identity; scroll position).
- **There are no scroll reveals. REMOVED 2026-11-07** — a 20px fade-up on every block is the single clearest tell that a page was generated, it delays the reader for nothing, and it made printing and in-page anchors fight the IntersectionObserver. The hero plays once; after that the page is simply there. Do not reintroduce `components/reveal.tsx` or a `.reveal` class.
- `prefers-reduced-motion: reduce` → helix renders complete and static, ink renders a single settled frame. Nothing is hidden from a reader who disables motion.

## 7. Components

**Button — primary (the only filled button on the site).** Rest: ink fill, ground text, 2px radius. Hover: fills cobalt, shadow blooms. Active: 1px press, shadow drops. Focus: 2px cobalt ring at 3px offset. Disabled: desaturated, never hidden. **No arrow glyph** — see §11.
Rationale: the button *becomes* the action colour on engagement — the colour system doing the work rather than a separate hover style.

**Link — underlined.** Two-layer underline: `currentColor` at 28% at rest, cobalt sweeping left-to-right over it on hover (300ms). Focus ring matches the button.

**Nav link.** No underline at rest; cobalt rule sweeps in on hover. Active page marked with a 4px rubric square in the left margin — the same mark as section eyebrows, so the marking language is consistent.

**Header.** 78px at rest, transparent. Compresses to 60px with a hairline and backdrop blur past 90px of scroll. The wordmark never changes size — the page moves, the identity doesn't.

**Work row.** Full-width, alternating. Hover: title turns cobalt, image lifts 6px, border deepens. Focusable as a whole with an 8px offset ring. The colour change is the affordance; there is no arrow.

**Status chip.** White surface, hairline border, mono, sentence case. Marked with a 10×1px rubric graduation, not a dot — a glowing dot is the stock "live" signal, a graduation belongs to the ruler that runs along the section edges. Not a tinted pill, nothing pulses.

**Project frame.** 4:3, hatched ground at 2.8% opacity so a placeholder reads as a plate awaiting artwork rather than an empty box.

**Section eyebrow.** 4px rubric square, uppercase body-face label, then a hairline that runs to a 120px maximum — a rule that stops, rather than a full-width divider.

## 8. The signature elements

**The helix.** Two 1.4px strands, cobalt and rubric, sine waves of amplitude 13px and wavelength 540px offset by π, in the left gutter.

- **Always visible.** A ghost track at 24% opacity runs the full page height, so the motif reads at the top of the page and not only after scrolling. The lit strand draws over it with scroll progress.
- **Weaves while moving.** The wave phase drifts with scroll delta — the strands visibly cross while you move and rest when you stop.
- **Survives both grounds.** Stroke colour comes from an SVG `linearGradient` in user space: lifted values (`#8B9CF4` / `#E8683F`) down the dark hero, standard ink (`#2A46D4` / `#C23A18`) below it, with the handover over 70px at the hero's lower edge.
- **Rungs** bridge the strands every half-wavelength at 13% opacity, starting below the hero — they mark section boundaries and the hero has none.
- Hidden below 1080px; renders complete and static under reduced motion.

**The volumetric ink (hero).** Full-bleed canvas on `--void #0A0907`. The two inks are suspended in a dark medium rather than printed on paper — which is what fixes flatness. Four things create the depth:

1. **Layers at distance.** 4–6 ribbon sheets; far layers are wide and dim, near layers tight and bright (alpha `0.10 + 0.52·depth²`), composited with `lighter` so the inks add light the way projection does.
2. **Two-stage bloom.** A wide halo at `min(W,H)·0.055` blur, then a tight glow at 32% of that. Radii are fractions of the frame, never fixed pixels, so the effect is identical at any canvas size.
3. **A core pass.** The unblurred shape drawn twice on top. Without it the frame is uniform haze — measured: mean 67 / max 93 / 0% bright pixels before the core pass, mean 29 / max 191 / 6% bright after. Contrast range *is* the depth.
4. **Grain and vignette.** A 140px noise tile at 38% gives the medium texture; a three-stop radial vignette drops the edges to 93% void.

Rendered to an offscreen canvas at 0.5 scale and composited up. Three densities: **Bloom** (mounted), **Veil**, **Filament**. Paused by IntersectionObserver off-screen; one settled frame under reduced motion. A left-to-right scrim keeps the type side dark so the headline never fights the ink.

## 9. Accessibility floor

- WCAG 2.2 AA, verified in both themes.
- Visible focus on every interactive element; focus order matches visual order.
- Skip link to main content as the first focusable element.
- Touch targets ≥ 44px.
- Canvas and SVG decoration marked `aria-hidden`; nothing decorative is announced.
- Headings form a single logical outline; no level skipped for styling.
- The site must be fully usable, and read in the intended order, with CSS and JavaScript disabled.

## 10. Dark mode

Tokens flip; components never change. The band section inverts to the *darkest* value rather than lightening, so the scroll rhythm survives. Both accents lift in lightness (cobalt `#8B9CF4`, rubric `#E8683F`) to hold contrast on ink. Dark mode is designed second and deliberately — it is not an inversion.

## 11. Patterns this site does not use

Culled 2026-11-07, after judging them on their own in `docs/type-concepts.html`. These are not matters of taste that a later session can reopen on a whim: each one is a mark of a page assembled from a template rather than designed, and the site reads as more confident without all of them.

| Culled | Why | What carries the job now |
|---|---|---|
| Scroll-reveal on every block | The clearest generated-page tell there is, and it withholds content the reader asked for | Nothing. The page is there when it loads |
| The `SCROLL` cue under the hero | Tells a reader how to use a web page | The hero's bottom edge and the fold itself |
| Pulsing status dots | The stock "live!" signal, borrowed from dashboards | A 10×1px rubric graduation off the ruler system |
| Trailing `→` on links and buttons | Decoration standing in for an affordance | Underline sweep on links; fill and shadow on buttons; colour change on work rows |
| Noun-phrase headings with a full stop | "The work, in detail." — a tic, not a sentence | The same heading without the stop. Full sentences keep theirs |

The hero sequence stays: it is one deliberate entrance, under 1.5s, and then the page is silent.
