# TODO.md — things only Matt can do

> Ordered by what unblocks the most. Everything not on this list is either done or is Claude's job.
> Last updated: 2026-07-21 (docs v6)

---

## 0. Where it is right now

Deployed to Vercel, project `portbase` under `matt-pearson-projects`. **It is not public** — Deployment Protection is on, so the URL bounces to Vercel SSO and only you (logged into Vercel) can see it.

- Live (needs your Vercel login): https://portbase-h1p1ttzor-matt-pearson-projects.vercel.app
- Code: https://github.com/Matthew8747/PortBase

To make it public later: Vercel → Project → Settings → Deployment Protection → turn off. **Do the domain and the old-CV takedown below first.**

---

## 1. Before sharing the link with anyone

### Buy the domain — ~£8/yr
`mattpearson.dev` was available at $9.99/yr as of 2026-07-20. Buy from Vercel (simplest — it wires itself up), Cloudflare, or Porkbun.

Then in Vercel: **Project → Settings → Domains → Add** `mattpearson.dev`. Vercel issues the certificate automatically.

Then set `NEXT_PUBLIC_SITE_URL=https://mattpearson.dev` in Vercel's environment variables, so metadata, the sitemap and robots.txt point at the real address.

### Set up the email address
`matt@mattpearson.dev`. Two options, both free:

- **Zoho Mail free tier** — a real 5GB mailbox on your domain. Send and receive properly. Recommended.
- **Cloudflare Email Routing** — forwards to your Gmail. Zero setup, but replies come from your Gmail address unless you configure send-as.

No server, no hosting cost either way.

### Wire up the CV request form
1. Sign up at [resend.com](https://resend.com) — free tier is far more than enough.
2. Verify `mattpearson.dev` as a sending domain (Resend gives you DNS records to paste).
3. In Vercel → Settings → Environment Variables, add:
   - `RESEND_API_KEY` — from Resend
   - `CV_REQUEST_TO` — the inbox where requests should land
   - `CV_REQUEST_FROM` — e.g. `CV requests <cv@mattpearson.dev>`
4. Redeploy, then submit the form yourself to check it arrives.

**Until this is done** the form tells visitors it isn't connected and points them at LinkedIn. Requests are still logged in Vercel's function logs, so nothing is lost — but you'd have to go looking.

### Take down the old CV
`matthew8747.github.io` currently serves a PDF containing **your phone number, your address and your referees' email addresses**. That's the most urgent item on this list regardless of anything else. Delete the file from that repository, or archive the repository.

---

## 2. Content I need from you

### Real project imagery
Every case study currently shows a hatched placeholder plate. Three screenshots would change the weight of the site more than any other single thing:

- **Restart Lab** — the optimisation study screen (there are already some in `docs/assets/screens/` in that repo)
- **BUBC** — the homepage
- **Bike Fit** — a pipeline diagram or an anonymised figure

Drop them in `public/work/` as `restart-lab.png`, `bubc.png`, `bike-fit.png` and say the word — wiring them in is ten minutes.

### The remaining coursework
Still outstanding from the interview. Cyber security (the HAR analysis), Digital Business Innovation (Spotify), Entrepreneurship (the AI security training brand), plus anything from years one and two worth mining. Upload to GitHub or drop the files in the repo.

### Barnett Art
A live link and a screenshot or two. It's currently the only client project without either, which makes it the weakest card on `/work`.

### Bike fit — ethics check
Confirm what you're allowed to publish from the study. Any figures, any numbers, any participant data at all? The case study currently describes the method and says nothing about results, which is safe but not as strong as it could be.

### The photo
`1725137655982.jfif` is sitting in the repo root, unused and untracked. If you want a photo on `/about`, convert it to `.jpg` or `.webp` and put it in `public/`. If not, delete it. The design doesn't depend on one either way.

---

## 3. Decisions still open

- **Hero ink density** — currently **Bloom**. The alternatives, Veil and Filament, are in `docs/concepts.html`. One-line change in `app/page.tsx` if you prefer another.
- **The display typeface.** Everything currently uses a system serif stack (Iowan Old Style → Palatino → Georgia). It looks good, loads instantly, and costs nothing. Switching to Fraunces or Newsreader would be more distinctive but adds a webfont. Worth seeing specimens side by side before deciding.
- **Restart Lab's demo speed.** It's slow. Worth an afternoon on the Numba kernel before a recruiter clicks through, or worth leaving and letting the case study's honesty do the work.

---

## 4. After launch

- Update your LinkedIn to point at the new domain.
- Point `matthew8747.github.io` at the new site with a redirect, so the old URL isn't a dead end.
- Watch the first few CV requests to make sure delivery is reliable.
- Revisit the blog question once — and only once — you have three pieces you'd defend.

---

## Not on this list, because it's done

Site scaffolded and building clean · all nine routes live · design system implemented from `docs/SYSTEM.md` · volumetric ink and helix ported and verified · three case studies written · about, CV and work pages populated · CV request form with validation, honeypot and rate limiting · sitemap, robots, structured data, per-page metadata · 404 and thanks pages designed · privacy grep confirms no phone, address, referees or raw email anywhere in the build.
