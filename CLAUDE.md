# PortBase — Matt Pearson's portfolio (mattpearson.dev)

## Context protocol (read this first, every session)

0. Resuming in a fresh chat? `docs/HANDOFF.md` holds the paste-in prompt and the resume protocol.
1. Read `docs/PLAN.md` → `docs/PROFILE.md` → `docs/DESIGN.md` → `docs/SYSTEM.md` → `docs/IA.md` → `docs/UX.md` → `docs/PROGRESS.md` before doing ANY work. They are the single source of truth.
2. Personal facts about Matt come ONLY from `docs/PROFILE.md`. If a fact isn't there, say "not in docs — need Matt to confirm" and ask. NEVER invent biography, projects, metrics, or dates.
3. After any meaningful work: update `docs/PROGRESS.md` (log + next actions) and bump the docs version stamp at the top of `docs/PROGRESS.md`.

## Canary protocol (hallucination smoke test — Matt's request)

End EVERY response in this project with the exact line:

`⟡ Matt Pearson · docs v{N} · {current phase}`

where `{N}` is the version stamp read from `docs/PROGRESS.md` line 2, and `{current phase}` matches PLAN.md status.

- Footer missing → instructions weren't loaded → Matt should start a fresh chat.
- Version number wrong/stale → context degraded → re-read docs before continuing.
- This proves instruction+docs loading, not truthfulness — the real guard is rule 2 above (facts only from PROFILE.md).

## Craft standard (non-negotiable)

Every visible element gets deliberate design — headers, buttons, chips, captions, footers, empty states. Nothing ships looking default. Concretely:

- Before building any new component: brainstorm 2–3 treatments, pick with reason. No first-draft-is-final components.
- Every component defines ALL states: rest, hover, focus-visible, active, disabled where relevant. Keyboard focus always visible.
- Every colour use has a named job (see DESIGN.md colour roles). No colour "for the sake of it".
- Motion is purposeful and small: 150–250ms, cubic-bezier(.2,.7,.2,1); `prefers-reduced-motion` always respected.
- Banned (full list in DESIGN.md anti-patterns): default shadcn look without restyle, gradient blobs, glassmorphism, Instrument Serif, typing effects, skill bars, particles, emoji headers, badge walls.
- Quality bar for every element: "would Stripe ship it?"

## Locked design decisions (2026-07-20)

- Direction: Editorial Precision → synthesis of Concept A (Paper) × B (Studio). See `docs/DESIGN.md` + `docs/concepts.html`.
- Accents: two, blue + red (cobalt = interactive/action; rubric red = markers/achievement/emphasis), hues refinable.
- Hero motion: Studio's (clean stagger + underline sweep, ~800ms, then silence).
- Signature motif: "the thread" — a hairline line that draws down the page with scroll, nodes at section boundaries. Colours run through the page via this system, never arbitrarily.
- Stack (prelim, PLAN.md Phase 7): Next.js App Router + TS strict + Tailwind v4 + shadcn/Radix (restyled) + Motion + MDX + Resend + Vercel.

## Working rules

- Windows machine, PowerShell primary; repo = this folder.
- Don't commit/push without Matt's ask.
- Site is NOT being built yet — planning phases per PLAN.md. Don't scaffold the app until Phase 9 sign-off.
- Privacy: never put Matt's phone, address, references, or raw email in public files. CV is gated by request flow.
