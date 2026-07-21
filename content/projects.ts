/**
 * Project content. Facts trace to docs/PROFILE.md and the repositories themselves.
 *
 * Honesty rules carried over from PROFILE.md:
 *  - Restart Lab's numbers come from the study committed at
 *    optimization_studies/england-vs-argentina/study.json. Report them with the limits
 *    that bound them: one fixture, 24 trials, absolutes only as good as the simulator.
 *  - The bike-fit rig was built by Bath's Lovelace and IMPACT labs, not by Matt. His work was the
 *    experiment design, running every session, the data pipeline and the analysis.
 *  - Kontron code and screenshots are off limits. The work is described, never shown.
 *  - Barnett Art's repository is private client work. The case study says so rather than
 *    quietly omitting a source link.
 */

export type Figure =
  | {
      kind: "image";
      src: string;
      width: number;
      height: number;
      alt: string;
      caption?: string;
    }
  | { kind: "diagram"; name: "bike-fit-pipeline"; caption?: string };

export type CaseSection = {
  heading: string;
  body: string[];
  figure?: Figure;
};

export type Project = {
  slug: string;
  title: string;
  kind: string;
  kindDetail: string;
  summary: string;
  tech: string[];
  links?: { label: string; href: string }[];
  /** Shown in the meta grid when the source cannot be linked. */
  sourceNote?: string;
  /** Lead image, used both for the home row and at the top of the case study. */
  figure: Figure;
  sections: CaseSection[];
};

export const featured: Project[] = [
  {
    slug: "restart-lab",
    title: "Restart Lab",
    kind: "Featured",
    kindDetail: "simulation and optimisation",
    summary:
      "A set-piece simulator that refuses to lie. It plays a corner out thousands of times, scores every " +
      "chance with a real expected-goals model, and won't call a routine a winner unless it beats random " +
      "search first.",
    tech: ["Python", "StatsBomb xG", "optimisation", "SHAP"],
    links: [
      { label: "Live demo", href: "https://set-piece-sim-frontend.vercel.app/" },
      { label: "Source", href: "https://github.com/Matthew8747/Set-Piece-Sim" },
    ],
    figure: {
      kind: "image",
      src: "/work/restart-lab.webp",
      width: 1200,
      height: 750,
      alt: "The Restart Lab optimisation study screen, showing a convergence curve against the random baseline, plain-language SHAP findings, and the parallel-coordinates cloud of every trial.",
      caption: "An optimisation study: convergence against the baseline, SHAP findings, every trial plotted.",
    },
    sections: [
      {
        heading: "What it had to do",
        body: [
          "Football clubs spend a great deal of time on set pieces and have very little evidence about which " +
            "routines actually work. The obvious approach, counting what happened in past matches, runs out of " +
            "data almost immediately, because any specific routine against any specific defence has been tried " +
            "a handful of times at most.",
          "So the problem was not really about football. It was about building a tool that could answer a " +
            "question the data was too sparse to answer directly, without quietly inventing confidence it " +
            "hadn't earned.",
        ],
      },
      {
        heading: "What I chose",
        body: [
          "Simulation over statistics. A deterministic physics engine flies the ball with real spin, drag and " +
            "bounce, moves every attacker and defender, and resolves the delivery into a shot, a clearance or a " +
            "scramble. That turns a handful of real attempts into thousands of synthetic ones.",
          "Every simulated chance is then graded by an expected-goals model trained on StatsBomb's open World " +
            "Cup and Euros data, so the scoring is anchored to real football and not to my own judgement.",
          "The decision I care most about is the last one. An optimiser searches for better routines, but " +
            "nothing it proposes counts unless it beats a random search baseline. Optimisers are very good at " +
            "finding noise and presenting it as insight. Making the baseline mandatory was the only way to " +
            "stop the tool flattering itself.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "Three steps, one loop. Simulate the set piece, measure each chance with the xG model and report it " +
            "with confidence intervals, then search the space of deliveries, runs and timings across thousands " +
            "of trials.",
          "Two consoles sit on top. The Scenario Workbench builds a set piece from real squads and compares two " +
            "routines under common random numbers, so the comparison isn't polluted by luck. Optimization " +
            "Studies reads a completed search: convergence against the baseline, a parallel-coordinates view of " +
            "every trial, and a SHAP explanation of what separated the winners.",
          "Results are reproducible on purpose. Every stored result carries the engine build id, and the same " +
            "scenario and seed produce a byte-identical outcome whatever the batch size, so a stale result is " +
            "detectable instead of silently wrong.",
        ],
      },
      {
        heading: "What it cost",
        body: [
          "Speed, first. The engine is slower than I want it to be, and the throughput kernel, a Numba port of " +
            "the inner loop checked to 1e-9 against the readable NumPy reference, arrived after the platform " +
            "instead of before it. The live demo works. It is not brisk.",
          "On results, the machinery does the job it was built for. The study committed to the repository, " +
            "England attacking an Argentine zonal six-two, puts its best confirmed routine at 6.66% mean xG " +
            "per corner against a library baseline of 1.04%, over 400 confirmation simulations. The 95% " +
            "intervals do not overlap, and the winning routine stays the winner under every ±10% perturbation " +
            "of player attributes. It also had to out-run an equal-budget random search before any of that " +
            "counted, which is the gate that matters more and the one most tools skip.",
          "That is one fixture and twenty-four trials. The absolute numbers are worth precisely as much as the " +
            "simulator that produced them, which is why the interface reports an interval and never a single " +
            "figure, and why the banner still refuses to crown anything outside the conditions it was tested in.",
        ],
      },
      {
        heading: "What I'd change",
        body: [
          "I would build the throughput kernel first. Almost every limitation downstream traces back to how " +
            "fast a single simulation runs: how many trials a study can afford, how tight the confidence " +
            "intervals get, how much of the space the optimiser can explore. I optimised the interesting part " +
            "before the boring part, and the boring part turned out to set the ceiling.",
        ],
      },
    ],
  },
  {
    slug: "barnett-art",
    title: "Barnett Art",
    kind: "Client work",
    kindDetail: "storefront and portfolio for a painter",
    summary:
      "Anna Barnett needed to sell original work online and add new pieces without me. It takes card " +
      "payments through Stripe, cannot sell the same original twice, and switches between a shop and an " +
      "enquiry site on one environment variable.",
    tech: ["Next.js 16", "Postgres", "Drizzle", "Stripe", "Terraform"],
    links: [{ label: "Live site", href: "https://barnett-art.vercel.app" }],
    sourceNote: "Private repository, client work.",
    figure: {
      kind: "image",
      src: "/work/barnett-art.webp",
      width: 1518,
      height: 949,
      alt: "The Barnett Art home page: the artist's name set large in a serif on warm paper, with a landscape painting framed alongside it.",
      caption: "The home page. Paintings are the only image on the site, so they carry all of the colour.",
    },
    sections: [
      {
        heading: "What it had to do",
        body: [
          "Two jobs that usually fight each other. A portfolio has to treat the paintings as work worth " +
            "looking at, with room around them and nothing competing for attention. A shop has to take money " +
            "reliably, know what is still in stock, and never sell the same original twice.",
          "The harder constraint was not on the page. Anna had to be able to photograph a new piece and get " +
            "it online without me, and she was not certain she wanted to run a card checkout at all. She " +
            "might prefer enquiries. Whatever I built had to work both ways without a rewrite when she decided.",
        ],
      },
      {
        heading: "What I chose",
        body: [
          "Stripe's hosted checkout. I did not write a card form of my own, so card details never touch the " +
            "which keeps the whole thing inside the lightest PCI bracket there is. Writing my own payment form " +
            "would have bought a slightly smoother handoff in exchange for handling other people's card numbers, " +
            "which is not a trade I would make for a one-person gallery.",
          "I turned down the obvious alternative too. Squarespace or Shopify would have been running in a " +
            "weekend, and she would have paid monthly for a template thousands of other artists also use, " +
            "on a platform she rents. She owns this one.",
          "Prices live in Postgres as integer pence and the total is computed on the server. The browser is " +
            "never asked what something costs, because anything the browser sends can be edited.",
          "The undecided question became a setting. COMMERCE_MODE flips the entire site between card checkout " +
            "and enquire-to-buy, one variable, no code change and no data migration. It cost about a day to " +
            "build and it meant her decision stopped being a deadline.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "A signed, HttpOnly cart cookie holds the basket and the checkout runs through server actions, so " +
            "the shop still works with JavaScript switched off. Stripe's webhook is verified against the raw " +
            "request bytes before anything in the database moves. Fulfilment then runs in one transaction that " +
            "marks the order paid and decrements stock at the same moment, so an original flips to sold the " +
            "instant payment succeeds and a second buyer cannot slip through behind it. Stripe retries " +
            "deliveries, so a ledger of processed event ids makes a repeat delivery do nothing.",
          "Adding a painting is a photograph and one command. The import script converts HEIC to WebP, rotates " +
            "it the right way up, strips every EXIF field including the GPS coordinates of the artist's house, " +
            "pulls an accent colour out of the image, and writes the gallery manifest. A single idempotent " +
            "seed pushes the result into Postgres.",
          "Every pull request runs Prettier, ESLint, a full TypeScript check, 101 unit tests, an npm audit gate " +
            "and a gitleaks secret scan. The same lint and secret scan run before a commit is allowed, and the " +
            "type check runs before a push, so CI confirms what my machine already knew " +
            "and rarely finds anything new.",
        ],
        figure: {
          kind: "image",
          src: "/work/barnett-art-architecture.webp",
          width: 1800,
          height: 1125,
          alt: "Architecture diagram of the Barnett Art platform: a visitor reaching a Next.js app on Vercel, which branches into a checkout path through Stripe and an enquiry path through Resend, over Neon Postgres, Upstash Redis and S3, with CI and the content pipeline underneath.",
          caption: "One codebase, two commerce modes. The green and rust paths are the same site under a different setting.",
        },
      },
      {
        heading: "What it cost",
        body: [
          "The storefront renders on every request instead of once at build time, because stock has to be " +
            "true at the moment somebody looks at it. That is the right call for a shop selling one-of-one items and it " +
            "gives up the caching a static gallery would have had.",
          "Pulling an accent colour from each painting turned out to need a guard. Extracted colours are often " +
            "far too pale to sit on paper as text, so anything used as text is pushed darker until it clears " +
            "4.5:1. The accent gets to be the painting's colour right up until the point where it would stop " +
            "being readable.",
          "And the gaps, which are written down in the repository and not left for somebody to find. Images " +
            "still run through the local disk adapter, with the S3 path built but not switched on. Shipping is " +
            "a flat placeholder waiting on her real rules. The privacy and terms pages are sound drafts that " +
            "have not been through a solicitor. The script policy still allows inline scripts, which wants a " +
            "per-request nonce.",
        ],
      },
      {
        heading: "What I'd change",
        body: [
          "The admin interface should have come before the payment plumbing. Editing a few data files and " +
            "running two commands is self-service if you are a developer. She is a painter. I built the part " +
            "that carried the interesting risk, and the result is a shop with careful money handling that she " +
            "still has to ask me to restock.",
        ],
      },
    ],
  },
  {
    slug: "bubc",
    title: "BUBC",
    kind: "Client work",
    kindDetail: "University of Bath Boat Club",
    summary:
      "A club website rebuilt to outlive the committee that commissioned it. Editors publish a race report in " +
      "five minutes, it targets 95+ on Lighthouse, and it runs for about ten pounds a year.",
    tech: ["Astro", "Sanity", "Vercel", "Tailwind", "WCAG 2.2 AA"],
    links: [
      { label: "Live site", href: "https://bubc.co.uk" },
      { label: "Source", href: "https://github.com/Matthew8747/BUBC" },
    ],
    figure: {
      kind: "image",
      src: "/work/bubc.webp",
      width: 1440,
      height: 900,
      alt: "The BUBC home page: a wide photograph of an eight passing under Pulteney Bridge, the club name set over it in a serif, and a band of club statistics below.",
      caption: "The home page. Photography does the recruiting; the type stays out of its way.",
    },
    sections: [
      {
        heading: "What it had to do",
        body: [
          "Recruit rowers, keep alumni interested, and give sponsors something credible to look at. But the real " +
            "constraint was organisational rather than technical. A university club's committee turns over every " +
            "year, and any site that needs a developer to update it dies quietly about fourteen months after launch.",
          "So the brief I set was that a non-developer should be able to publish a race report in under five " +
            "minutes, and the running cost should be small enough that nobody is ever tempted to cancel it.",
        ],
      },
      {
        heading: "What I chose",
        body: [
          "Astro with static output, content in Sanity, hosted on Vercel. One repository, two applications, no " +
            "server to maintain.",
          "The alternative I rejected was a conventional CMS like WordPress. It would have been faster to stand " +
            "up and would have handed the next committee a database, a hosting bill, and a security surface. " +
            "Static output means the worst thing that can happen to the site is that it stops being updated. It " +
            "cannot go down or get compromised in the usual ways.",
          "Editors work in Sanity Studio. Publishing fires a webhook at a Vercel deploy hook, and the whole site " +
            "rebuilds in around a minute.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "Astro pulls every page from Sanity's GROQ API at build time and writes static HTML and CSS. Vercel " +
            "serves it from the edge and rebuilds on push or on publish. Forms go to Formspree and the newsletter " +
            "to Buttondown, both env-gated, so neither is a hard dependency.",
        ],
        figure: {
          kind: "image",
          src: "/work/bubc-architecture.webp",
          width: 1280,
          height: 720,
          alt: "Architecture diagram: GitHub pushes to Vercel which builds a static bundle served from a CDN, with Sanity firing a deploy hook when an editor publishes.",
          caption: "Two things can trigger a build: a developer pushing, or an editor pressing publish.",
        },
      },
      {
        heading: "What it cost",
        body: [
          "Roughly ten pounds a year, which is the domain. Everything else sits inside free tiers, by design.",
          "The trade-off is that content changes require a rebuild, so nothing appears instantly, and that " +
            "genuinely dynamic features like a members' area, live race scoring or a shop are off the table. For " +
            "this club that was the right exchange, and we link out for those instead.",
        ],
      },
      {
        heading: "What I'd change",
        body: [
          "I would write the editor documentation before building the schema rather than after. Designing the " +
            "content model around what I could build, then explaining it to editors, produced a couple of " +
            "fields that make sense to a developer and to nobody else.",
        ],
      },
    ],
  },
  {
    slug: "bike-fit",
    title: "The Bike Fit Study",
    kind: "Research",
    kindDetail: "final-year dissertation",
    summary:
      "Fifty-one riders, three sessions each, asking whether a professional bike fit actually changes what the " +
      "body does, and whether it differs between men and women. I designed the protocol, ran every session, " +
      "and built the pipeline from raw sensor stream to finding.",
    tech: ["Experiment design", "Python", "COSMED", "Qualisys & Theia3D", "EMG"],
    links: [{ label: "Pipeline source", href: "https://github.com/Matthew8747/Bikefit-Data-Pipeline" }],
    figure: {
      kind: "diagram",
      name: "bike-fit-pipeline",
      caption: "Six instruments, six clocks, six sampling rates. Everything has to land on one timeline first.",
    },
    sections: [
      {
        heading: "What it had to do",
        body: [
          "Professional bike fitting is a large industry built on a fairly small evidence base, and almost none " +
            "of that evidence addresses whether the effects differ by sex. The study asked a narrow version of " +
            "the question. After a professional fit, does anything measurable change in physiology, " +
            "biomechanics, muscle activation or comfort, and does it change differently for women than for men?",
          "It earned 82%, and I am working the study up into a paper over the coming months. The findings " +
            "stay off this page until that is done, so what follows is the method and what it cost to run.",
        ],
      },
      {
        heading: "What I chose",
        body: [
          "A crossover design. Every participant rides both their own self-selected fit and a professionally " +
            "adjusted one, so each rider is their own control, which matters enormously when you have around " +
            "fifty people and enormous variation between them.",
          "Three sessions each. Screening, anthropometrics, self-selected fit and a ramp test to establish FTP. " +
            "Then a twenty-minute trial at 95% of FTP on the self-selected fit. Then the same trial on the " +
            "professional fit, with perceived exertion recorded at four, nine, fourteen and nineteen minutes.",
          "To be clear about credit: the measurement platform was custom built by Bath's Lovelace and IMPACT " +
            "labs. I did not build the rig. My work was the experiment design, running every session, and " +
            "everything that happened to the data afterwards.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "Each session produces breath-by-breath metabolic data from a COSMED cart, markerless motion capture " +
            "through Qualisys and Theia3D, EMG and IMU traces, muscle oxygenation from Moxy sensors, plus " +
            "pressure, strain and respiration streams. A single session's raw JSON runs to one or two gigabytes.",
          "The pipeline reconciles all of it. Different instruments, different clocks, different sampling rates " +
            "and different file formats have to be aligned to a common timeline before any of it means " +
            "anything. That synchronisation problem was the real engineering work, and it is where most of the " +
            "time went.",
        ],
      },
      {
        heading: "What it cost",
        body: [
          "Time, mostly in the lab. Fifty-one participants across three sessions each is over 150 sessions, " +
            "every one of which had to be run in person and to the same protocol.",
          "The recurring cost was data integrity. Instruments drop frames, sensors come loose, and participants " +
            "cannot always hold the target power. The protocol steps power down by 5% when that happens, which " +
            "then has to be modelled rather than ignored. A meaningful share of the pipeline exists to catch " +
            "and handle those cases, not to compute anything.",
        ],
      },
      {
        heading: "What I'd change",
        body: [
          "I would validate the synchronisation between instruments on day one with a deliberate test session, " +
            "instead of discovering alignment problems while processing real participants. Some of that data " +
            "was harder to rescue than it needed to be.",
        ],
      },
    ],
  },
];

export type SupportingProject = {
  title: string;
  note: string;
  href?: string;
  tech: string;
};

export const supporting: SupportingProject[] = [
  {
    title: "IMDb sentiment pipeline",
    note:
      "Naive Bayes written from scratch, not imported, sitting behind three vectorisers I also wrote: " +
      "bag of words, TF-IDF and PPMI. Lemmatisation, stop-word strategy, n-gram size and minimum document " +
      "frequency are all command-line flags, so the comparison between configurations is one command rather " +
      "than one edit. The best of them reaches 85.1% on a held-out test set.",
    href: "https://github.com/Matthew8747/NLP-pipeline",
    tech: "Python · scikit-learn · NLTK",
  },
  {
    title: "Space Invaders reinforcement learning",
    note:
      "Coursework building and comparing reinforcement learning methods on Atari Space Invaders, run against " +
      "the Arcade Learning Environment. A second piece followed it into intrinsic motivation, where the agent " +
      "generates its own reward signal because the game's own is too sparse to learn from.",
    href: "https://github.com/Matthew8747/Space-Invaders-project-",
    tech: "Python · RL",
  },
  {
    title: "Brain tumour detection",
    note:
      "YOLOv10 fine-tuned on annotated MRI scans and wrapped in a Gradio interface, so a prediction can be " +
      "inspected scan by scan instead of collapsing into a single accuracy number. It is the direct descendant " +
      "of the EPQ I wrote on computer-aided diagnosis, five years earlier and with considerably worse tools.",
    href: "https://github.com/Matthew8747/TumorDetection",
    tech: "PyTorch · YOLOv10 · Gradio",
  },
  {
    title: "Society Matchmaker",
    note:
      "An eight-person team project on student society engagement. I ran the user research and built the " +
      "random forest recommender it produced. Engagement rose 150% against the system it replaced.",
    tech: "Python · random forest · user research",
  },
  {
    title: "Agent experiments",
    note:
      "A NEAT agent that teaches itself the Chrome dinosaur game by evolving its own network topology, and a " +
      "pair of cellular automata in Processing: Conway's Game of Life, then a forest fire model built on the " +
      "same grid mechanics with drought, wind and regrowth added.",
    href: "https://github.com/Matthew8747/DinoNEAT",
    tech: "Python · NEAT · Processing",
  },
  {
    title: "Argonauts",
    note:
      "A 2D platformer in Unity with dashing, wall-jumping and enemy AI. The follow-up was a grappling " +
      "traversal game built in Unreal over a hackathon weekend.",
    href: "https://github.com/Matthew8747/ArgonautsGame",
    tech: "Unity · C#",
  },
];

export function projectBySlug(slug: string): Project | undefined {
  return featured.find((p) => p.slug === slug);
}
