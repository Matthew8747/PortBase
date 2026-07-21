# HANDOFF.md — start a new chat from here

> When a chat gets long, open a fresh one in this folder and paste the prompt below.
> Everything needed to continue lives in the docs. Nothing important lives only in a chat.

---

## The prompt — copy everything between the lines

---

You are resuming work on PortBase — Matt Pearson's portfolio site at `mattpearson.dev`. The site is **built and running**; we are now fine-tuning it and rewriting Matt's CV.

Before doing anything else, read these and tell me the docs version number you find:

1. `CLAUDE.md` — working rules, craft standard, canary protocol
2. `docs/PROGRESS.md` — decision log, session log, next actions **(read this first if short on time)**
3. `docs/PROFILE.md` — every fact about Matt. **Facts come only from here. If something isn't in it, say "not in docs — need Matt to confirm" and ask. Never invent biography, projects, metrics or dates.**
4. `docs/TODO.md` — what's waiting on Matt
5. `docs/SYSTEM.md` — design tokens, type, colour jobs, motion, components
6. `docs/IA.md` and `docs/UX.md` — sitemap and audience journeys
7. `docs/DESIGN.md` — locked direction and the anti-pattern list

Then get the site running and look at it:

```bash
npm install
npm run dev        # http://localhost:3000
```

Then tell me briefly: the current phase, the next action, and anything in TODO.md that's blocking you.

**Where things live**

- `content/site.ts` and `content/projects.ts` — all copy and facts. Edit here, not in pages.
- `app/` — routes. `components/` — `volumetric-ink` and `helix` are the signature pieces.
- `app/globals.css` — the whole design system, organised by section.
- `docs/concepts.html` — the approved design prototype; open it in a browser.

**Rules for the session**

- Every visible element gets deliberate design; all states defined (rest, hover, focus-visible, active, disabled).
- Two accents only, each with a named job: cobalt = action, rubric red = marks. No colour without a job.
- Never publish Matt's phone number, address, referees, or a raw email address.
- Respect the banned list in `docs/DESIGN.md`.
- Verify changes by actually looking at the running site, not just by building.
- Don't commit or push unless I ask.
- End every response with: `⟡ Matt Pearson · docs v{N} · {current phase}`

---

## Why the canary line exists

Every response must end with `⟡ Matt Pearson · docs v{N} · {phase}`, where `{N}` is the `docs-version:` on line 2 of `docs/PROGRESS.md`.

- **Line missing** → the instructions never loaded. Start a fresh chat.
- **Version stale or wrong** → context has degraded. Tell it to re-read the docs.

This proves the docs were loaded. It does **not** prove the answer is true. The real guard is the rule that facts come only from `PROFILE.md`, and that anything missing gets asked about rather than filled in.

## When to start a fresh chat

- Replies contradict the docs, or repeat work already logged in `PROGRESS.md`
- The canary line goes missing or the version goes stale
- A long visual iteration has finished and the next task is unrelated
- Roughly: at the end of any phase

## Before you close a long chat

Ask it to update `docs/PROGRESS.md` — session log, decision log, next actions — and bump `docs-version`. That file is the memory. If it isn't written down there, it did not happen.

## File map

| File | Holds |
|---|---|
| `CLAUDE.md` | Rules that apply to every session |
| `docs/PLAN.md` | Phases 0–9 and their status |
| `docs/PROFILE.md` | Facts about Matt — the only source |
| `docs/PROGRESS.md` | Log, decisions, open items, next actions |
| `docs/TODO.md` | Manual tasks only Matt can do |
| `docs/SYSTEM.md` | The design system |
| `docs/IA.md` / `docs/UX.md` | Sitemap / audience journeys |
| `docs/DESIGN.md` | Direction, research, anti-patterns |
| `docs/concepts.html` | The approved prototype |
