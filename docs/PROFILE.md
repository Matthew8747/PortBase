# PROFILE.md — Source of truth about Matt Pearson

> Every future chat/session should read this before writing site content. Update when facts change.
> Last updated: 2026-11-06 (research project topic drafted; Performance Sport Officer knowledge exchange; the two final-year taught modules — all Matt's own, 2026-11-06)

## Identity

- **Display name:** Matt Pearson (formal docs: Matthew Pearson)
- **Age 22.** Bath, UK. Willing to relocate abroad.
- **Final-year MComp Computer Science & AI** (integrated masters with placement), University of Bath. Graduating 2027 (switched years 3↔4 after late masters transfer; 3 years study + placement done, 1 year left).
- **1st class in all 3 years. Dissertation: 82%.** Third-year dissertation (the bike-fit study). Predicted First Class Honours.
- **Module marks (Matt, 2026-10-14):** Maths for Computation 90%, Discrete Maths & Databases 82%, Machine Learning 81%, AI 2 79%, Data Structures & Algorithms 79%, Visual Computing 77%.
- **Final year (2026/27, Master's level):** Research Project (40 credits), Advanced Computer Vision, HCI (reading module).
- **HCI (reading module) — weekly five-minute presentations** (Matt, 2026-11-06; decks verified against `Desktop/HCI Reading`, 2026-11-06). A few papers read in depth each week, then presented to the reading group. Running theme: what wearables can detect and what can be done with it.
  - **Presentation 1** — wearable stress versus sleep detection. Deck *"Does your watch read your stress or the…"* (title truncated on disk); figures cite Siepe 2025 and Meegahapola 2022 and 2026.
  - **Presentation 2** — *"Can a watch stop a nightmare"*: nightmare detection and management from wearable signals, four papers. The recent one Matt referred to.
  - **Presentation 3** — in preparation (papers, script and slides on disk, no feedback yet).
  - ⚠️ Tutor feedback on presentation 1 exists on disk (new research topic; the open methodological question is large sample versus small sample with long-term assessment). **Context only — tutor feedback never goes on the site.**
- **Advanced Computer Vision — group coursework, in progress** (Matt, 2026-11-06; verified against `Desktop/Computer Vision/CW1`, 2026-11-06). PyTorch, 32×32 images, 100 fine classes and 20 coarse classes, 576-dimension backbone embeddings.
  - **Ownership — CONFIRMED by Matt, 2026-11-06:** he is coding **tasks 1, 5 and 7**, and **the whole group does the analysis and write-up together afterwards**. His words: *"yeah those are the ones i am coding, and we are all doing analysis after"*. ⚠️ **Claim nothing about tasks 2, 3, 4, 6 or 8 as his.**
  - **Task 1 — the 100-class fine-grained classifier**, and the harness is the part worth describing. Every run writes `config.json`, `history.csv`, `best.pth` and `summary.json` into `runs/task1/<run-name>/`; `sweep.py` runs hyperparameter sweeps, `summarise_runs.py` compares runs, `self_check.py` checks the setup. The point is one config change per experiment and runs that stay comparable.
  - **Task 5 — few-shot** (verified from the coursework Readme, 2026-11-06): a separate `data/few_shot` split with support sets of size **1, 5 and 10** per class. Graded on the backbone's 576-d embedding, not on a classifier head.
  - **Task 7 — the task 1 backbone as a plain feature extractor** (verified from `task_7.py`, which imports `task_1` and returns `model.backbone`). Same 576-d embedding interface as task 5, so the two are the comparison: a backbone trained to classify versus one trained for the few-shot setting.
  - **What the other five tasks cover** (coursework scope, *not* Matt's work): coarse 20-class classification, joint fine-plus-coarse heads, triplet metric learning at several margins, one report figure, accuracy reported to JSON.
  - ⚠️ As of 2026-11-06 the task files for 2–7 are still starter stubs on disk — **only task 1 is built so far.** Tasks 5 and 7 are his to write, not yet written.
  - ⚠️ **No grade and no results. Describe the module and the harness, never a number.**
- **Research project — topic now drafted** (Matt, 2026-11-06, from his own proposal doc *"Project proposal: sensing rowing stroke timing from the erg"*). Supersedes the 2026-10-14 "not confirmed" note.
  - **The question:** two ways of sensing rowing technique on an ergometer **with nothing worn by the rower** — sensors built into the machine, versus **Iris**, Bath's in-house markerless motion-capture system. Both validated against **marker-based motion capture** recorded on the same clock, which is used only as the reference.
  - **The machine:** four load cells under the seat (total force = suspension; corner split = centre of pressure / rock-over), left and right foot-stretcher force, seat and handle position sensors. ~8–11 analogue channels, wired into the mocap system's analogue inputs so everything shares one clock.
  - **Why it is a comparison, not a sensor check:** the machine feels forces a camera cannot see (suspension, connection at the catch); the camera separates trunk from arms, which the machine cannot. Which events each wins, and whether fusing them helps, is the research question.
  - **Study 1:** can each approach detect stroke events (catch, finish, suspension, rock-over, sequencing) accurately enough for coaching, against thresholds **fixed before data collection**; and can each detect deliberate technique faults coaches look for (rushing the slide, shooting the slide).
  - **Study 2:** coaches and rowers — which measures mean something to them, how those compare with what rowers feel, and how they should be displayed.
  - **Stretch:** repeat on an RP3. On-water rowing is written up as future work.
  - **Status (proposal, 5 Nov 2026):** direction to be confirmed with his supervisor (Eamonn); Iris details and the marker-based reference still to confirm with the technicians. ⚠️ **No data, no ethics approval, no results.** Anything public must say "proposal stage" and claim nothing more.
- A-levels: Maths, CS, Physics, EPQ — A\*A\*A\* + A\* (Henry Pearson-Gates award for outstanding A-level studies). UKMT gold (all levels), BPhO silver.
- Languages: English; some French and German.
- Full driving licence.

## Positioning (the pitch)

Top-tier final-year CS+AI student targeting **2026/27 graduate roles**: software engineering, product-leaning roles, and **finance is a real option** (compensation-driven). Big tech ideal; open to non-tech companies. Prefers employment security over freelance. Long-term: management/product leadership (strong people skills). Wants variety, not repetitive work.

**Differentiators to sell:**
1. Perfect academic record at a top CS course + real industry year (Kontron).
2. Product sense unusual for a grad — runs real client sites, designs honest analytics tools, does user research.
3. Elite-athlete discipline: British Championships + BUCS medals, made Bath first boat in first season sweeping, 12+ sessions/week alongside study/work. Left British Rowing Performance Development Academy to row for uni squad.
4. Self-sufficiency: solo month travelling Peru. ⚠️ **Off the public site from 2026-11-06** — Matt flagged it as not worth having there. Still true, still usable in conversation; just not site copy.
5. Team sport beyond rowing (Matt, 2026-11-06): **football for over fifteen years, captained his local team, social secretary for the computer science team at Bath.** One clause on the site at most — it is a signal, not a hobbies list.
5. Breadth: embedded (Secure Thingz) → enterprise SaaS (Kontron) → ML/RL research → full-stack client work → sports analytics.

**Tone rule:** confident, natural, evidence-led. No buzzwords, no exaggeration. Sport woven in quietly — signals, not a personality section. **Updated 2026-11-06:** the site's hobbies block (Peru, hiking, guitar, badminton, languages) is deleted and stays deleted. What survives is rowing, and one clause of football.

## Experience

| Role | Org | When | Notes |
|---|---|---|---|
| Software Engineer (placement) | Kontron (formerly Bsquare), Trowbridge | Aug 2024–Aug 2025 | Device Management product: health monitoring, remote access, diagnostics, package deployment. Dev (TypeScript/Angular, bug fixes → full features) + QA lead work (50+ bugs documented). Built Jenkins-driven parameterised test runner bridging dev-ops and dev teams: **tag-based selection of suites and priority tiers**; Matt wrote a few UI and a few API tests on it; the suite kept being developed after he left. QA's manual regression pass took ~two weeks. ⚠️ **Never claim the regression now runs unattended because of him** — "became the base for automating it" is the ceiling (Matt, 2026-10-14). **Can describe publicly; code + screenshots off limits.** |
| Extern — NY Racing (NASCAR) sponsorship analytics | Extern programme | 2026, in progress | Sponsorship ROI analysis: dataset build from 36 Cup Series races (Kaggle/Racing Reference) + Reddit (PRAW) + YouTube Data API + news tracking → unified dataset → EDA, correlation testing (finish position vs exposure), visibility scoring model, publication-quality viz. Finance-relevant story. |
| Work experience | Secure Thingz, Cambridge | Jun–Jul 2022 | Embedded systems, microcontrollers, IoT security. |
| **Performance Sport Officer** | SU Sport, University of Bath | 2026–27 (confirmed by Matt) | **Elected** position on the Students' Union Sports Executive Committee, added 2026-07-21. Official remit (source: thesubath.com/sport/exec): liaises with and represents performance athletes in exec meetings; sits on the **Blues Committee**; promotes performance athletes; encourages student engagement at **BUCS** events; works with the sports department to bring the SU perspective into performance sport; leads club showcase events (e.g. double headers). Exec is 8 roles: Chair, 2× Treasurer, 2× Media & Marketing, Events Coordinator, Welfare & Inclusivity, Performance Sport, Recreational Coordinator. **In the role (Matt, 2026-11-06):** setting up a **knowledge exchange between the main performance squads** — a place where squads share what has been working for them, and a route to reach out to other clubs. ⚠️ **In progress; no outcomes recorded. Nothing else about Matt's own achievements in the role is on record — do not invent any.** |
| **SUmmit — elected Open Place** | The SU, University of Bath | 2026–27 | Elected by cross-campus ballot (Matt, 2026-10-14). SUmmit (thesubath.com/voice/summit): "a committee of student leaders brought together to shape the political direction of The SU"; democratically sets SU **Standpoints** and holds the SU Officers to account; meets ~4×/year. Nothing yet recorded about Matt's own contributions — do not invent any. |
| Student Ambassador + peer mentor | University of Bath | Mar 2023–Feb 2025 | Tours, virtual presentations, mentoring first-years. |
| Freelance (via "Pearson Digital" LinkedIn shell) | Clients: Barnett Art, BUBC | May 2026–present | Paid work. See projects. BUBC: eight committee members with no coding background publish race reports (Matt). Barnett Art: live, checkout built, **no sale processed yet** (Matt, July). Carogail (July 2026): informal web advice only; Matt dropped it from the CV. |

## Projects — tiers agreed 2026-07-20

### Flagship case studies (deep pages)
1. **Restart Lab** (repo `Set-Piece-Sim`, live: https://set-piece-sim-frontend.vercel.app/) — set-piece simulator: deterministic physics engine, xG model trained on StatsBomb World Cup/Euros open data, optimiser vs mandatory random-search baseline, SHAP explanations, "honesty banner" that refuses to declare winners without statistical backing. Case study angle = *building trustworthy analytics tooling* (the honesty machinery IS the story), engineering depth, product thinking. Solo project.
   - **Results, verified 2026-07-21** from `optimization_studies/england-vs-argentina/study.json` (England attacking Argentina `zonal_six_two`, engine `sim/0.5.0`): best confirmed routine **6.66% mean xG** (95% CI 6.61–6.71) vs **library baseline 1.04%** (CI 0.78–1.30), 400 confirm sims, 24 trials, NSGA-II sampler. Non-overlapping intervals; winner stable under ±10% attribute perturbation. **Bounds that must ship with the number:** one fixture, 24 trials, absolutes only as good as the simulator. Supersedes the earlier "results are thin" framing, which was stale.
   - Demo is still slow. Numba throughput kernel exists and is verified to 1e-9 against the NumPy reference.
2. **BUBC website** (repo `BUBC`, live: https://bubc-web.vercel.app/, cutover to bubc.co.uk) — Astro 6 + Tailwind v4 + Sanity CMS + Vercel. Targets: Lighthouse ≥95 all categories, WCAG 2.2 AA, editor publishes in <5 min, ~£10/yr running cost. Real client, real editors, built to outlive the committee. Directly proves the web craft this portfolio claims.
3. **Barnett Art** (repo `BarnettArt`, **private**, live: https://barnett-art.vercel.app) — **promoted from card to flagship 2026-07-21** after reading the repo. Production e-commerce + portfolio platform for painter Anna Barnett. Next.js 16 App Router + TS, Tailwind v4, Neon Postgres + Drizzle (migrations in git), **Stripe hosted Checkout (PCI SAQ-A, card data never on the server)**, server-side pricing in integer pence, signed HttpOnly cart via server actions (works without JS), signature-verified webhook with atomic stock decrement + `processed_events` idempotency ledger, Upstash Redis rate limiting, S3/CloudFront via Terraform (interface built, **not yet switched on**), Resend order mail, `COMMERCE_MODE=checkout|inquiry` flips the whole site with one env var. Content pipeline: HEIC→WebP, auto-rotate, **strips all EXIF including GPS**, extracts per-artwork accent colour (with a ≥4.5:1 contrast clamp), writes gallery manifest, one idempotent seed. CI: Prettier, ESLint, tsc, **101 Vitest tests**, npm audit gate, gitleaks; husky pre-commit lint+secret-scan and pre-push typecheck. OWASP Top-10 mapping in `docs/SECURITY-AUDIT.md`: 0 critical, 0 high, 2 medium open.
   - **Honest gaps (from the repo's own "Known limitations"):** no admin UI (artist edits data files + runs 2 scripts), placeholder listing data, local-disk media adapter, flat placeholder shipping (£6.95 / free over £150), storefront is `force-dynamic`, CSP still allows `unsafe-inline` scripts, legal pages are unreviewed drafts, 2 moderate dev-only transitive advisories.
   - **Source cannot be linked** (private client repo). Site says so rather than omitting.
4. **Bike fit dissertation (82%)** (repo `Bikefit-Data-Pipeline`) — crossover study, ~51 participants × 3 sessions: does professional bike fitting change physiology/biomechanics/comfort, and does it differ by sex. COSMED breath-by-breath, Qualisys + Theia3D markerless mocap, EMG+IMU, Moxy, pressure/strain, 1–2GB session streams. **Role honesty:** platform hardware/software custom-built by Bath Lovelace + IMPACT labs — NOT by Matt. Matt's role: experiment design, running all experiments, data collection, building the entire processing pipeline, analysis. Check ethics constraints before publishing data visuals.
   - **Findings (Matt, 2026-10-14, from the dissertation conclusion).** 51 cyclists, before/after a standardised IBFI level-4 fit, feature-level fusion pipeline, lag-aware. (1) Small but consistent ventilation-led efficiency signature: **VCO2 and left-calf sEMG survived FDR correction, q<.05**; VO2/kg, tidal volume, energy expenditure, HR, right-calf SmO2 trending the same way. (2) H2 (larger saddle-pressure/gluteal changes in females) **not supported**; clearest sex interaction was perceptual: **end-trial RPE −0.58 in males, +0.5 in females** (significance of the interaction not stated — Matt "thinks" significant; confirm before calling it significant). (3) Sex-specific random forests weighted **neuromuscular features above metabolic, mechanical and subjective** ones: **62.5% (F) / 55.1% (M)** of total importance. (4) Twelve Δ-score correlations |rs| ≥ 0.35; ΔVE tracked ΔRPE at 19 min while neither tracked bike power. Implication: male-calibrated fitting formulae capture only part of the female response. Sensor sampling ranges from <1 Hz to 1259 Hz.
   - **Publication:** Matt is finishing the paper for journal submission (Oct 2026). Findings now appear on the **private CV**; the website stays method-only until Matt approves them for public use.

### Cards (one-liner + link)
- **NLP-pipeline** — IMDb sentiment classification: naive Bayes written from scratch, plus three hand-written vectorisers (BoW, TF-IDF, PPMI). Lemmatisation, custom stop words, n-grams and min-df are all CLI flags. **Best config reaches 85.1% accuracy on a held-out test set** (verified in the repo README, 2026-07-21). 2000 pos + 2000 neg, 60/20/20 split.
- **Space-Invaders-project-** — RL coursework: building + comparing RL methods on Atari Space Invaders; second coursework researching intrinsic RL.
- **TumorDetection** — YOLOv10 brain-tumour detection + Gradio UI. Arc note: links back to EPQ on computer-aided diagnosis.
- **NY Racing externship** — ✅ **complete, verified 2026-08-09** against the now-public repo
  `Matthew8747/nascar-sponsorship-visibility`. Second-tier case study at `/work/nascar-visibility`.
  180 rows (5 primary sponsors × 36 races of 2024), 0 nulls, 540 merged values reconciled row by row.
  Four sources: Kaggle race results, Google News RSS with source-tier weighting, Reddit via PullPush
  (official API and RSS both failed first), YouTube Data API filtered to a per-race publish window.
  Composite 0–100 score on **published, unfitted** weights (performance 40 / media 30 / social 20 /
  events 10) because per-race correlations were too weak for a regression. **Results:** FedEx highest
  raw visibility 1,211; Busch Light best efficiency 76.9 pts/$M vs FedEx 65.4. Recommendation: FedEx
  all-round, Busch Light value play. Ranking order held under 4 weightings; efficiency moved ≤1 place
  across the cost range; season-level directional correlations r = 0.53–0.94. Reddit matched 35% of
  sponsor-race rows and news 46%, filled with 0 as a measurement.
  **Bounds that must ship with it:** costs are industry *estimates*, not contracts; visibility is proxies;
  one season; validation is directional, not causal. ⚠️ The repo README says the "NY Racing" scenario is
  the externship framing — keep the site's wording no stronger than the README's.
- **Society Matchmaker** — 8-person team (CM20314 Experimental Systems Project), user research led by Matt, Random Forest recommender. **Verified 2026-07-21 against the group's Deliverable 4 report:** controlled study, n=18 after removing 2 compromised samples, paired single-tailed t-tests at 95% confidence. Our system's engagement ratio **36%** vs the SU site's **15%**. System 2 (three recommendations) beat System 1 (one at a time) p=.008, d=0.77; both beat the plain list p<.001, d=1.29 and 1.48. **The old '150% engagement increase' claim was unsourced** — it was a remembered version of the 36/15 ratio. Use the measured figures.
- **AI experiments** (grouped single card) — DinoNEAT (NEAT on Chrome dino), GoL forest-fire simulator, boids/migration simulation.
- **Argonauts** — Unity 2D platformer (dash, wall-jump, enemy AI); Unreal hackathon follow-up (grappling platformer). Optional card. **A-level project, 68/70; C#; playable at matthew8747.github.io/ArgonautsGame/** (Matt, 2026-10-14).
- **OneGuard** (Entrepreneurship CM32027) — deepfake-awareness training venture, 5 people. Matt led market research: interviews with staff at banks, hedge funds and consultancies, **survey of 35 people**; findings moved the product from consumers to businesses (Matt, 2026-10-14).
- **Morse code transceiver** (Systems Architecture, group coursework) — two Arduinos over I2C in C++, interrupt-driven input, **10 channels** plus broadcast (Matt, 2026-10-14).

### Hidden
- FootballAnalysis (empty), old portfolio fork (matthew8747.github.io), Kontron code (NDA), `Arcade-Learning-Environment` (a fork, not his work), `art-site` (superseded by the `BarnettArt` build). *(`nascar-visibility-analysis` was listed here as a scaffold on 2026-07-21; it shipped and moved to Cards on 2026-08-09.)*

### Coursework paragraph material (Phase 8)
Verified 2026-07-21 by reading the actual coursework in `Desktop/YR3`, `Desktop/YR2`, `Desktop/coursework/YR1`:
- **RL** — Space Invaders on the Arcade Learning Environment + a second piece on intrinsic motivation.
- **NLP** — IMDb sentiment, naive Bayes from scratch, three hand-written vectorisers, best config 85.1%.
- **Cyber security (CM22014, "Payment Card Exercise")** — a real Argos card purchase captured and analysed: **49 unique domains, 766 requests**, grouped into six categories, traced from `/basket-api` through `/checkout-api-v2/.../payments` to the Akamai bot-manager telemetry. Group comparative exercise across ~50 sites followed.
- **Digital Business Innovation** — ⚠️ **CORRECTION: this is RED BULL, not Spotify.** `RedBullGrp18.pdf`, "Energising Innovation: Red Bull's Digital and Strategic Evolution". The earlier Spotify note was wrong and had reached the live site.
- **Entrepreneurship (CM32027)** — ⚠️ **CORRECTION: "Human versus AI Generated Detection Training"**, a 5-person venture (CW1 report: problem, solution, low- and high-fidelity prototypes, feedback; CW2: Dragon's Den pitch). Not "AI-security training for financial workers".

Years 1 and 2 folders reviewed; nothing beyond the Systems Project worth a site entry.

## Skills

- **Languages:** Python, TypeScript/JavaScript, Java, C, C++ (Arduino), C# (Unity), SQL, Bash, HTML/CSS
- **Frameworks/tools:** Angular, React/Next.js (this project), Astro, Node.js, PyTorch, scikit-learn, Tailwind, Sanity, Jenkins, Docker, AWS, Cloudflare, Git, Unity, MySQL/MongoDB/SQLite, Jest/Vitest/Selenium/pytest, GitHub Actions, Linux, Terraform, pandas, NumPy, Numba, SHAP, Stripe
- **Methods:** Agile/Scrum, TDD, CI/CD, OOP/FP
- **Certs:** Carbon literacy (MMU), Google Digital Marketing fundamentals, IKEEP Intrapreneurial Training. (Considered cyber-security certs; cost-prohibitive for now.)

## Privacy + contact rules

- **Never public:** phone, home address, references, raw email address.
- **CV:** gated — "request CV" flow; Matt sends manually. Public CV page = sanitised version (no phone/address/refs). Old public PDF exposes all three — replace/remove eventually.
- Public links: LinkedIn (linkedin.com/in/matthewpearson274), GitHub (Matthew8747). No X/Twitter.
- Contact: form (not mailto).

## Brand decisions

- Brand = **Matt Pearson**, not Pearson Digital. Pearson Digital stays as LinkedIn company shell for client work only; zero design investment. (pearson.digital domain taken; Pearson plc collision.)
- **Domain: mattpearson.dev — available, $9.99/yr via Vercel** (checked 2026-07-20). mattpearson.uk also free (~£10/yr, Cloudflare/Porkbun). .com/.co.uk taken. Not yet purchased — Matt's call; site ships on vercel.app subdomain until then.
- **Email plan:** matt@mattpearson.dev. No server needed: Cloudflare Email Routing (free, receive→Gmail) or Zoho Mail free tier (real 5GB mailbox) / iCloud+ (~£1/mo) for clean sending.

## Assets

- LinkedIn headshot in repo root: `1725137655982.jfif` (convert to jpg/webp; alt photo available on request). Photo optional for v1.
- Restart Lab screenshots in its repo `docs/assets/screens/`.
