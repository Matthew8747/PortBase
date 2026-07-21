# TODO.md: things only Matt can do

> Ordered by what unblocks the most. Everything not on this list is either done or is Claude's job.
> Last updated: 2026-07-21 (docs v9)

---

## 0. Where it is right now

Live at **https://www.mattpearson.dev**, deployed from `github.com/Matthew8747/PortBase`.

Done already: domain bought and attached, DNS through Cloudflare, Resend key and both addresses set in Vercel.

**Deploys are now automatic** (connected 2026-07-21). A push to `main` builds Production; any other branch builds a Preview. Verified end to end, not assumed. Before this, the project was CLI-linked with no Git integration, so merged PRs silently deployed nothing, which is why the live site sat on the pre-imagery build showing empty placeholder plates.

Two things worth tidying:

- **`www` vs the bare domain.** Vercel is serving `www.mattpearson.dev` as production, but the site's own canonical URL is set to `mattpearson.dev`, so metadata and the sitemap point at the bare domain while visitors sit on `www`. Pick one. Cleaner is the bare domain: in Vercel → Domains, set `mattpearson.dev` as primary and let `www` redirect to it. If you'd rather keep `www`, add `NEXT_PUBLIC_SITE_URL=https://www.mattpearson.dev` to the environment variables instead.
- **Cloudflare is proxying.** That's why a failing API call came back as a Cloudflare `502` in plain text rather than the app's own JSON error. The form now handles that properly, but if you see odd behaviour on dynamic routes, check that Cloudflare's SSL mode is **Full (strict)**.

---

## 1. Before sharing the link with anyone

### ~~Buy the domain~~ Done
`mattpearson.dev` is bought and attached. See the `www` note above.

### Set up the email address
`matt@mattpearson.dev`. Two options, both free:

- **Zoho Mail free tier**, a real 5GB mailbox on your domain. Send and receive properly. Recommended.
- **Cloudflare Email Routing**, which forwards to your Gmail. Zero setup, but replies come from your Gmail address unless you configure send-as.

No server, no hosting cost either way.

### Verify the domain in Resend (the one thing still blocking the form)

The API key and both addresses are set, and the key works. The only thing failing is that Resend won't send from `mattpearson.dev` until you prove you own it:

> `403: The mattpearson.dev domain is not verified. Please, add and verify your domain on https://resend.com/domains`

Fix: [resend.com/domains](https://resend.com/domains) → Add Domain → `mattpearson.dev` → paste the DKIM and SPF records it gives you into your DNS → click Verify. Takes about ten minutes, most of it waiting for DNS.

Until then the form now falls back to Resend's shared sender (`onboarding@resend.dev`) so requests still reach you. **Caveat worth knowing:** that shared sender only delivers to the address that owns the Resend account. If `CV_REQUEST_TO` is that same address you're covered; if it isn't, requests will still fail until the domain is verified. Either way nothing is lost, because every request is written to the function logs.

**Note on `RESEND_API_KEY`:** you created it as a *Sensitive* variable in Vercel. That's the right call for a secret, but it does mean `vercel env pull` can't fetch it for local development. It returns the literal string `[SENSITIVE]`, which will make the form fail locally with "API key is invalid". For local testing, paste the key into `.env.local` by hand.

### Take down the old CV
`matthew8747.github.io` currently serves a PDF containing **your phone number, your address and your referees' email addresses**. That's the most urgent item on this list regardless of anything else. Delete the file from that repository, or archive the repository.

---

## 2. Content I need from you

### ~~Real project imagery~~ Done
Your screenshots are in and cropped for the slots they sit in. Restart Lab, BUBC and Barnett Art all show real work now, and the bike fit study has a drawn pipeline figure instead of a placeholder.

### The photo
`public/matt.jpg` currently holds the holiday shot, cropped to 4:5 and desaturated slightly. **To swap in the new one: save it over `public/matt.jpg`.** Same filename, nothing else to change. Portrait orientation crops best; anything roughly 4:5 or taller works.

### The remaining coursework
Still outstanding from the interview. Cyber security (the HAR analysis), Digital Business Innovation (Spotify), Entrepreneurship (the AI security training brand), plus anything from years one and two worth mining. Upload to GitHub or drop the files in the repo.

### NY Racing
`nascar-visibility-analysis` is currently a scaffold: a README and three empty folders. It stays an experience entry until there are deliverables. Send them when they exist and it becomes a card.

---

## 3. Where I need a decision from you

Answered 2026-07-21. Only two remain.

### ~~a. Bike fit ethics~~ Answered
Key points are publishable, but the study is going to a paper over the coming months. The case study now says exactly that and reports method only. **Still needed, when you're ready:** the two or three findings you're happy to put in public ahead of publication. Send them and I'll add a results section.

### ~~b. Naming the Barnett Art client~~ Answered
Anna Barnett is named on the home row, in the case study and in the summary.

### ~~c. Barnett Art's canonical URL~~ Answered
Staying on the Vercel link. Tell me when a domain lands.

### ~~d. Which Restart Lab baseline to headline~~ My call, made
I lead with the library baseline, because it is the number the shipped study actually records (6.66% vs 1.04%, non-overlapping intervals). The sentence then says the routine also had to clear an equal-budget random search before any of it counted. That way the concrete figure is one I can point at in `study.json`, and the harder gate is still the last thing a reader is left with. Change it if you'd rather lead with the random-search framing.

### ~~e. The Society Matchmaker number~~ Resolved from your files
The 150% was unsourced, so I read the group's Deliverable 4 report in `YR2/Systems project`. The real result is better and defensible: **engagement ratio 36% against the SU site's 15%**, n=18 after two compromised samples were removed, paired single-tailed t-tests, Cohen's d 0.77 to 1.48, p from .008 down to <.001. That is what the site now says (the GitHub README doesn't list this project). "150%" was a remembered version of the 36/15 ratio.

### f. Barnett Art figures — flagging before I finish, as you asked
The case study states **101 Vitest tests** and the security posture as **0 critical, 0 high, 2 medium open**. Both come from that repo's own `docs/FEATURES.md` and `docs/SECURITY-AUDIT.md` as they stood today. You believe they're still current. If you ship anything there, re-check those two numbers, because they're the kind of specific claim an interviewer will test.

### ~~g. The GitHub email badge~~ Answered
Dropping it. `docs/PROFILES.md` has the replacement README with no `mailto:`.

---

## 4. Decisions still open

- **Hero ink density**, currently **Bloom**. The alternatives, Veil and Filament, are in `docs/concepts.html`. One-line change in `app/page.tsx` if you prefer another.
- **The display typeface.** Everything currently uses a system serif stack (Iowan Old Style → Palatino → Georgia). It looks good, loads instantly, and costs nothing. Switching to Fraunces or Newsreader would be more distinctive but adds a webfont. **Newsreader is already in the repo** at `assets/newsreader-regular.ttf`, shipped for the Open Graph cards — open any OG image (e.g. `mattpearson.dev/opengraph-image`) to see it set large before deciding.
- **Restart Lab's demo speed.** It's slow. Worth an afternoon on the Numba kernel before a recruiter clicks through, or worth leaving and letting the case study's honesty do the work.

---

## 5. After launch

- Replace the GitHub profile README with the version in `docs/PROFILES.md`.
- Update your LinkedIn headline and About section, both drafted in `docs/PROFILES.md`.
- Update your LinkedIn to point at the new domain.
- Point `matthew8747.github.io` at the new site with a redirect, so the old URL isn't a dead end.
- Watch the first few CV requests to make sure delivery is reliable.
- Revisit the blog question once, and only once, you have three pieces you'd defend.

---

## Not on this list, because it's done

Site scaffolded and building clean · all nine routes live · design system implemented from `docs/SYSTEM.md` · volumetric ink and helix ported and verified · three case studies written · about, CV and work pages populated · CV request form with validation, honeypot and rate limiting · sitemap, robots, structured data, per-page metadata · 404 and thanks pages designed · privacy grep confirms no phone, address, referees or raw email anywhere in the build.
