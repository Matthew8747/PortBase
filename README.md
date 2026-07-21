# mattpearson.dev

Matt Pearson's portfolio. Next.js App Router, TypeScript strict, Tailwind v4, deployed on Vercel.

## Running it

```bash
npm install
cp .env.example .env.local   # optional — the site runs without it
npm run dev                  # http://localhost:3000
```

```bash
npm run build       # production build
npm run typecheck   # tsc --noEmit
npm run lint        # eslint
```

## Where things live

| Path | What it is |
|---|---|
| `app/` | Routes. One folder per page, plus `api/cv-request` for the request form. |
| `components/` | `volumetric-ink` and `helix` are the two signature pieces; the rest is chrome. |
| `content/site.ts` | Every site-wide fact — name, status, experience, education, skills. |
| `content/projects.ts` | Case studies and the supporting project list. |
| `docs/` | Planning: the plan, the design system, the audience journeys, the log. |
| `docs/concepts.html` | The approved design prototype. Open it in a browser. |

**Content is edited in `content/`, not in the pages.** Pages read from those two files so copy changes never require touching layout.

## Facts rule

Every personal fact on this site traces to `docs/PROFILE.md`. If something isn't in there, it doesn't go on the site. See `CLAUDE.md`.

Nothing published here includes a phone number, address, referees, or a raw email address. The CV is sent by hand in response to a request — that's the whole reason `/cv` is a form and not a download.

## Environment

All optional. Without them the CV form tells the visitor it isn't connected and points them at LinkedIn, rather than silently dropping the request. Requests are also logged server-side so none are lost.

See `.env.example`.

## Deploying

Vercel, connected to this repository. Pushes to `main` deploy to production; every branch gets a preview URL.

## Design

The system is written down in `docs/SYSTEM.md`: two accents with named jobs (cobalt acts, rubric marks), a serif display face, an 8px spacing scale, 2px radii, and motion capped at 250ms with `prefers-reduced-motion` honoured throughout.
