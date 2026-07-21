# UX.md — Phase 5: audience journeys

> Status: proposed 2026-07-21. Six readers, one page order. Target: each reader reaches a decision in 60–90 seconds.

## The constraint

Every one of these people lands on `/` and scrolls. The page order is fixed, so it has to serve all six without being redesigned for any one of them. The test for each: **what do they need by second 60, and does the scroll deliver it in that order?**

---

## 1. Graduate recruiter (screening, ~30 seconds, often on a phone)

Wants: is he a real candidate, is he available, can I get a CV.

| Second | Sees | Gets |
|---|---|---|
| 0–5 | Name, "Software with judgement" | A person, not a template |
| 5–15 | Status chip in header reach: open to 2027 graduate roles | Availability — the single fact that decides whether to continue |
| 15–30 | Three project rows with plain-English descriptions | Evidence exists |
| Action | Request CV | Conversion |

**Design consequences:** the Request CV button is in the header on every page and never scrolls away on mobile. The status line appears before any project detail. Project descriptions lead with what the thing *does*, never with the stack.

**Failure mode to avoid:** a recruiter who cannot find the CV in ten seconds leaves. Hence one filled button, one job.

---

## 2. Engineering manager (evaluating, 2–5 minutes)

Wants: can he actually build things, or has he only done coursework.

Path: Home → Restart Lab case study → GitHub.
Needs to hit, in order: a real system with real constraints; decisions with reasons; awareness of trade-offs; evidence of shipping to other people.

**Design consequences:** the case-study spine puts *what I chose* second and *what it cost* fourth — the two sections a manager reads. BUBC leads with "editors publish in five minutes" and "£10/year" because operational constraints are what separate a student project from delivered software. The Kontron entry says what he owned (the Jenkins test runner bridging dev-ops and dev), not what the product did.

**Failure mode to avoid:** claiming more than the evidence supports. Restart Lab is framed as early-stage on purpose — an EM who spots inflation stops trusting everything else on the page.

---

## 3. CTO / senior technical leader (skimming, ~90 seconds)

Wants: judgement and taste, at a glance.

Reads almost nothing. Forms a view from: the quality of the site itself, one paragraph of the Restart Lab summary, and the honest close of a case study.

**Design consequences:** the site is the artefact — performance, accessibility, and typography are the argument. The "what I'd change" section exists mainly for this reader; it signals someone who evaluates their own work.

---

## 4. Founder (hiring for range, 1–2 minutes)

Wants: will he pick things up and own them.

Path: Home → About → Experience.
Needs: breadth (embedded → enterprise SaaS → ML/RL → client web → sports analytics), and evidence of self-direction.

**Design consequences:** Experience sits directly after Work, so range is visible before the reader has to choose a link. About carries rowing, Peru and the client work — signals of drive that a CV bullet flattens.

---

## 5. Designer / design-leaning reviewer (30 seconds, brutal)

Wants: does this person have taste.

Judges: type, spacing, motion restraint, whether the accents have a system.

**Design consequences:** two accents with named jobs (cobalt acts, rubric marks), one identity moment per page, motion under 250ms, no decorative mono. The ink plate is the one deliberate flourish — everything around it stays quiet. This reader is why "01 — FEATURED" had to die.

---

## 6. Potential client (Barnett Art / BUBC referral, 1 minute)

Wants: can he build me something and will he still be around.

Path: Home → BUBC case study → contact.
Needs: proof he has delivered for a real client with non-technical editors, and a sense of cost.

**Design consequences:** BUBC's case study names the running cost and the editor experience. Client work is labelled *Client work* in the row eyebrow, so it is identifiable without reading.

---

## Cross-cutting rules

**The 60-second guarantee.** Anyone landing on `/` reaches: who he is (0–5s), whether he's available (5–15s), what he's built (15–45s), and how to contact him (45–60s). Nothing may be inserted that pushes contact past 90 seconds.

**Mobile is the recruiter's device.** Everything above is verified at 375px first. The ink plate is hidden below 560px — decoration never outranks content on a phone.

**Accessibility is part of the journey, not a milestone.** Keyboard path through the whole page, visible focus at every stop, `prefers-reduced-motion` honoured for helix and ink, AA contrast on both grounds. A blind recruiter using a screen reader hits the same four beats in the same order, because the DOM order is the visual order.

**One conversion.** Request CV is the only filled button anywhere. GitHub and LinkedIn are underlined links. Nothing competes.

**Honesty as UX.** Restart Lab's early-stage framing, the bike-fit note that Bath's labs built the rig, the exact grade rather than "excellent results" — each one costs a little polish and buys the thing every reader on this list is actually testing for.
