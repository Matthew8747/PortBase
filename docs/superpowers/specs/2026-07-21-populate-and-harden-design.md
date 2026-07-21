# Populate and harden — design

> Approved by Matt 2026-07-21. Companion docs: PLAN.md (phases), PROFILE.md (facts),
> SYSTEM.md (tokens), IA.md, UX.md. This spec covers the pass that takes the site from
> "built and honest but empty" to "sendable with a graduate application".

## Why this pass exists

The site shipped with every project figure as a hatched placeholder, one flagship
described in a single line despite being the strongest thing in the portfolio, and a
case study whose text contradicts its own evidence. None of that is a bug. All of it
costs credibility with the six readers in UX.md.

Matt's brief, verbatim: populate it, make sure it does not look AI generated, make him
sound professional, make him unrejectable.

## Scope

Nine workstreams, in dependency order.

### 1. Icon and logo

The site has no mark. Next.js is serving the default favicon.

The mark derives from the helix, which is already the site's signature motif, rather
than being invented separately. Reduced to its single most legible instant: the moment
the cobalt strand and the rubric strand cross. Two strokes, so it survives 16px.

SYSTEM.md already says the two accents meet exactly once per page. The icon is that
meeting, which gives the mark a job in the same system rather than a decorative one.

- `app/icon.svg` — the mark, served as the favicon by the App Router.
- `app/apple-icon.png` — 180×180, generated from the same geometry.
- The existing `app/favicon.ico` is Next's default and gets replaced.

Ground is `--void #0A0907` so the mark holds on both light and dark browser chrome.

### 2. Imagery

`public/work/` receives processed assets. Every image is cropped for the size it is
actually displayed at, not dropped in raw.

| Slot | Source | Treatment |
|---|---|---|
| Restart Lab | Matt's optimisation-study capture | Crop the sidebar, keep convergence + search space |
| BUBC | `content/photos/bubc/02-home-hero-desktop.png` | Already 1440×900, resize only |
| Barnett Art | `content/photos/barnettArt/…151945.png` | Hero, resize only |
| Barnett architecture | `content/photos/barnettArt/architecture.png` | Case-study figure, 3200×2000 |
| Bike fit | none exists | Author a pipeline diagram in the site's palette |

The bike-fit diagram shows instrument streams reconciling onto a common timeline. It
depicts method, not participant data, so it sits outside the unresolved ethics
question.

**Frame change.** SYSTEM.md §7 specifies a 4:3 hatched project frame. Real screenshots
are 16:10. The frame becomes per-image aspect with the hairline border retained; the
hatch survives only as the ground behind an image that has not loaded, and as the
placeholder where no artwork exists.

### 3. Barnett Art, promoted to flagship

Currently one line on `/work`. The repository is a production e-commerce platform:
Next.js 16, Neon Postgres with Drizzle migrations in git, Stripe hosted Checkout with
signature-verified webhooks, atomic stock decrement, an idempotency ledger, Upstash
rate limiting, S3/CloudFront through Terraform, 101 Vitest tests, gitleaks in CI, and
an OWASP Top 10 audit with the open findings written down.

New `/work/barnett-art` on the standard five-part spine, plus a fourth row on Home.

The repository is private. The page says so rather than quietly omitting a source link.

The honest section draws on the project's own `Known limitations`: media still on the
local-disk adapter, placeholder shipping figures, no admin UI, `unsafe-inline` still in
the script CSP, legal pages pending review.

### 4. Restart Lab, corrected

The shipped study `optimization_studies/england-vs-argentina/study.json` records a
confirmed routine at 6.66% mean xG (95% CI 6.61–6.71) against a library baseline of
1.04% (CI 0.78–1.30), over 400 confirm simulations, holding under ±10% attribute
perturbation. The case study currently says no routine is decisively better.

The text reports the separation, then the limits that bound it: one fixture, 24 trials,
and absolute numbers that are only as trustworthy as the simulator producing them. The
speed honesty stays.

### 5. Supporting projects

Each card is rewritten from its actual repository rather than from memory. The
`Arcade-Learning-Environment` fork stays hidden.

### 6. `/cv` rebuilt

Recruiter-scan order: status, education with grades, experience, selected work with
outcomes, skills, awards. A print stylesheet so the sanitised page prints as a clean
one-pager. No phone, no address, no referees, no raw email, in the page or in print.

### 7. Open Graph images

`opengraph-image.tsx` per route via `ImageResponse`. Satori cannot use system fonts, so
one serif file is embedded for OG rendering only. This does not pre-empt the open
display-face decision in TODO.md.

### 8. Copy pass

Grep-driven rather than impressionistic. Targets: the not-X-but-Y construction,
rhetorical triads, uniform two-sentence paragraphs, hedge stacking, and crutch words
(`deliberately` and `genuinely` are already over-used). Paragraph cadence gets varied so
the prose stops breathing in lockstep.

### 9. Photo slot

A 4:5 portrait frame on `/about`, hairline border, gated by a single flag in
`content/site.ts`. Matt is taking a replacement shot; the slot works with whatever
lands and breaks nothing if the flag stays false.

## Out of scope

Display typeface selection, Restart Lab demo performance, the bike-fit ethics decision,
and the `www` versus bare-domain choice all stay in `docs/TODO.md` as Matt's calls.

## Risks

**Four home rows push the contact point later in the scroll**, against the 60-second
guarantee in UX.md. Request CV is in the header on every page so the conversion stays in
reach, but scroll depth gets measured after building rather than assumed.

**Images add weight.** Every one is sized for its slot and lazy below the fold.
Lighthouse gets re-run rather than trusted.

## Definition of done

`next build`, `tsc --noEmit` and `eslint` all clean. Every route renders. The privacy
grep across source and build output still returns nothing for phone, address, referees
or either raw email address. Scroll depth to the CV section measured and recorded.
