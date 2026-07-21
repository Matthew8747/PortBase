# PROFILES.md — GitHub profile README and LinkedIn copy

> Written 2026-07-21. Facts trace to `docs/PROFILE.md`. Paste-ready.
>
> ⚠️ **Privacy note on the current GitHub README.** It carries a `mailto:` badge exposing
> `matthew164798@gmail.com` in plain text on a public page, which scrapers harvest. That
> breaks the rule in PROFILE.md ("never public: raw email address"). The replacement below
> routes people to LinkedIn and the site's request form instead. Your call, but the site has
> been built around not publishing an address and the README currently undoes that.

---

## 1. GitHub profile README

Paste into `github.com/Matthew8747/Matthew8747` → `README.md`, replacing everything.

**Why it is shaped this way.** A recruiter opening a GitHub profile is asking one question:
has this person built anything real. Badge walls answer a different question, the one about
which logos you recognise, and every student profile answers it identically. Streak and
top-language widgets are worse: they reward volume, and a hiring manager reads "top language:
Jupyter Notebook" as coursework. Four lines of outcome do more work than forty badges.

```markdown
# Matt Pearson

Final-year MComp Computer Science and AI at the University of Bath. First class in all three
years so far. Open to 2027 graduate roles in software engineering, and to anything where the
hard part is deciding what the data actually supports.

Written up properly, with the reasoning and the trade-offs, at **[mattpearson.dev](https://mattpearson.dev)**.

### Selected work

- **[Restart Lab](https://github.com/Matthew8747/Set-Piece-Sim)** — A set-piece simulator that
  won't call a routine a winner unless it beats an equal-budget random search first. On the
  study committed to the repo, the optimised corner reaches 6.66% mean xG against a 1.04%
  baseline, with non-overlapping 95% intervals. [Live demo](https://set-piece-sim-frontend.vercel.app/).
- **Barnett Art** — Production storefront and portfolio for a working painter. Stripe hosted
  checkout, Postgres, atomic stock so an original can't sell twice, and one environment
  variable that flips the whole site between selling and taking enquiries. Private repo, client
  work. [Live site](https://barnett-art.vercel.app).
- **[BUBC](https://github.com/Matthew8747/BUBC)** — The University of Bath Boat Club website,
  built for a committee that turns over every year. Editors publish a race report in under five
  minutes; it runs for about ten pounds a year. [Live site](https://bubc.co.uk).
- **[Bike fit study](https://github.com/Matthew8747/Bikefit-Data-Pipeline)** — My dissertation,
  graded 82%. Fifty-one participants across three sessions each. I designed the protocol, ran
  every session, and built the pipeline that reconciles six instrument streams onto one timeline.

### Background

Placement year at Kontron on their device management product, across development and QA:
Angular and TypeScript features, fifty-plus documented defects, and a Jenkins test runner that
finally got dev-ops and the dev team running the same suite. Before that, embedded systems at
Secure Thingz.

Python, TypeScript, Java and C. React, Next.js, Angular and Astro on the front. PyTorch and
scikit-learn for the modelling. Postgres, Docker, Jenkins and AWS around the edges.

Rowing takes the rest of the week: British Rowing Performance Development Academy, medals at
the Senior British Championships and at BUCS. This year I was elected Performance Sport Officer
on the Students' Union Sports Executive, representing every performance athlete at the
university.

### Contact

[LinkedIn](https://linkedin.com/in/matthewpearson274) · [mattpearson.dev](https://mattpearson.dev)
```

### Things deliberately left out

| Left out | Why |
|---|---|
| Tech-stack badge wall | Every student profile has one. It says what you have installed, not what you have done. |
| Streak and top-language widgets | Reward commit volume. "Top language: Jupyter Notebook" reads as coursework to a hiring manager. |
| Emoji section headers | The site's whole argument is restraint. The README should not contradict it. |
| `mailto:` badge | Publishes a scrapeable address. LinkedIn and the site's form do the same job. |
| "Passionate about turning theory into real-world applications" | True of every applicant, so it distinguishes nobody. The four project lines make the same claim with evidence. |

---

## 2. LinkedIn "About" section

Around 140 words. LinkedIn already shows the education and role history underneath, so this
does not repeat them; it says what the work has in common.

```
Final-year MComp Computer Science and AI student at the University of Bath, first class in
all three years, looking for 2027 graduate roles.

I spent my placement year at Kontron building and testing their device management product,
where the most useful thing I shipped was not a feature but a Jenkins test runner that got
dev-ops and the development team running the same suite.

The thread through my own projects is refusing to overstate a result. My set-piece simulator
will not report a routine as an improvement unless it beats an equal-budget random search
first. My dissertation, graded 82%, spent most of its engineering effort on reconciling six
instrument streams onto one clock, because nothing downstream means anything until that
is right.

I also build and run websites for real clients. Outside that I row in Bath's first boat, and
this year I was elected Performance Sport Officer on the Students' Union Sports Executive,
representing performance athletes across every sport at the university.

Work and case studies: mattpearson.dev
```

### Headline

LinkedIn headlines are searched on. Lead with the terms a recruiter filters by, then the
differentiator.

```
Computer Science & AI MComp @ University of Bath | Software Engineering | Seeking 2027 Graduate Roles
```

An alternative, if you would rather sound like a builder than a candidate:

```
Final-year CS & AI at Bath | I build software that tells the truth about its own results
```

The first will surface in more recruiter searches. The second is more memorable to a human
who lands on the profile. The first is the safer default for a graduate job hunt.
