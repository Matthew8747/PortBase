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
 *  - OneGuard was a five-person group project. Nothing on record splits the report by author,
 *    so it is written in the first person plural and claims nothing for Matt alone.
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
  /** Overrides the default solo-developer line in the meta grid. Set it on anything with a team. */
  role?: string;
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
      "A set-piece simulator built so its own results can be checked. It plays a corner out thousands of " +
      "times, scores every chance with an expected-goals model trained on real matches, and will not call a " +
      "routine a winner until it has beaten a random search of the same size.",
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
            "question the data was too sparse to answer directly, without manufacturing confidence the " +
            "evidence could not support.",
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
            "nothing it proposes counts unless it beats a random search on the same budget. Optimisers are " +
            "good at finding noise and reporting it as a result, so the baseline is not optional anywhere in " +
            "the pipeline.",
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
            "instead of before it. The live demo works, but it is slower than it should be.",
          "On results, the machinery does the job it was built for. The study committed to the repository, " +
            "England attacking an Argentine zonal six-two, puts its best confirmed routine at 6.66% mean xG " +
            "per corner against a library baseline of 1.04%, over 400 confirmation simulations. The 95% " +
            "intervals do not overlap, and the winning routine stays the winner under every ±10% perturbation " +
            "of player attributes. It also had to out-run an equal-budget random search before any of that " +
            "counted, which is the harder of the two gates.",
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
          "Stripe's hosted checkout. I did not write a card form of my own, so card details never reach the " +
            "server and the site stays in the lightest PCI bracket available. Writing my own payment form " +
            "would have bought a slightly smoother handoff in exchange for handling other people's card " +
            "numbers, which is not a trade worth making for a one-person gallery.",
          "The obvious alternative was a hosted platform. Squarespace or Shopify would have been running in a " +
            "weekend, and for many artists that is the right answer. It would have meant a monthly fee, a " +
            "shared template and a storefront she rents rather than owns, and she wanted the site to be hers.",
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
            "and a gitleaks secret scan. The same lint and secret scan run before a commit is allowed and the " +
            "type check runs before a push, so most problems are caught locally and CI is the second line " +
            "rather than the first.",
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
          "And the gaps, which are listed in the repository's own README rather than left to be discovered. " +
            "Images " +
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
            "year, and a site that needs a developer to update it tends to go stale within a season or two.",
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

/**
 * A second tier: work that earned a case study but is not one of the four the site leads with.
 * These never appear on the home page. On /work they sit under the featured rows as a study
 * list, so the ranking is visible without anything being hidden.
 */
export const secondary: Project[] = [
  {
    slug: "oneguard",
    title: "OneGuard",
    kind: "Coursework",
    kindDetail: "venture design, University of Bath",
    summary:
      "A five-person venture built for Bath's entrepreneurship unit: training that teaches staff at " +
      "financial firms to tell AI-generated content from human work. The research decided its shape, " +
      "because the public would only take the course for free and employers said they would pay for it.",
    tech: ["Figma", "survey research", "value proposition canvas", "business model canvas"],
    sourceNote: "Group coursework. The report and pitch materials are not public.",
    role:
      "One of five. My share was the market research, the interviews with people working in finance, and the " +
      "regulatory reading. The rest was genuinely shared, so the write-up stays in the plural.",
    figure: {
      kind: "image",
      src: "/work/oneguard.webp",
      width: 1600,
      height: 875,
      alt:
        "A lesson screen from the OneGuard prototype. A quarterly financial summary sits in the middle of " +
        "the page under the question 'Is this report written by a human analyst or AI-generated?', with " +
        "answer buttons below it and a lesson list with completion ticks down the left.",
      caption: "The exercise the course is built around: read the document, commit to an answer, then find out.",
    },
    sections: [
      {
        heading: "What it had to do",
        body: [
          "Telling machine-generated content from human work has become hard enough to be expensive. " +
            "Reports of impersonation scams rose an estimated 148% between April 2024 and March 2025, the " +
            "Federal Trade Commission recorded $2.95bn of losses to impersonation in 2024, and a finance " +
            "worker in Hong Kong transferred around $25m after a video call in which every other participant " +
            "was a deepfake.",
          "The obvious product is a detector, and we ruled that out in the first week. Detection accuracy is " +
            "a moving target: a method is tuned against the models that exist when it is written, the next " +
            "release moves the goalposts, and there is an active research literature on defeating detectors " +
            "deliberately. Teaching people what to look for is slower to deliver and does not expire the " +
            "moment a new model ships.",
          "The unit ran over two assessments. A written business plan in December, then a Dragons' Den style " +
            "pitch to staff and peers in April, which is where the poster below comes from.",
        ],
        figure: {
          kind: "image",
          src: "/work/oneguard-poster.webp",
          width: 1000,
          height: 1415,
          alt:
            "The OneGuard threat-landscape poster. Statistics on AI-enabled fraud sit above a grid of news " +
            "headlines about deepfake and email scams at Toyota, WPP, Arup and a Hong Kong finance firm.",
          caption: "The poster from the final pitch. Every figure on it is sourced in the report behind it.",
        },
      },
      {
        heading: "What we chose",
        body: [
          "A business-to-business platform, which is not where we started. We began by designing for the " +
            "general public and the survey data moved us.",
          "We ran two surveys: twenty-five members of the public and ten managers inside businesses. The " +
            "public were concerned enough, with over 95% at least moderately concerned and 75% saying they " +
            "had already been taken in by something they assumed was genuine, but 68% wanted the course to " +
            "be free. All ten managers said they would provide the training, four definitely and six " +
            "probably, and their willingness to pay was spread evenly from nothing up to £50 a head. The " +
            "concern was general and the budget was corporate, so we followed the budget.",
          "The interviews were my part of this, and they are what turned the pricing from a guess into a " +
            "shape. A managing director told me a low per-head subscription would land where a fixed licence " +
            "would not, because “lock-in contracts can often be a repellant”, while still adding up " +
            "to five figures a year across a large firm.",
          "Finance came first for two reasons. Every manager said practical, industry-specific examples were " +
            "the thing that would make them follow through, and financial firms already carry audit " +
            "obligations that give documented training a second use. I did the regulatory reading behind that " +
            "second point. It was a surface check rather than anything a compliance officer would sign off, " +
            "but it is why the pilot targets finance and not, say, recruitment.",
          "Credibility went into the business model rather than the marketing. Over 90% of both groups said " +
            "an endorsement from a university or another trusted body would make them more likely to use the " +
            "training, so paying academics to verify the material sits in the cost structure as a fixed line.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "Courses hold modules, modules hold lessons, and the assessment at the end of a module stays locked " +
            "until every lesson in it is complete.",
          "The exercise the whole thing turns on is a quick check. A learner is shown a document in a format " +
            "they would actually meet at work, a quarterly summary or a market note, and asked whether a " +
            "person or a model produced it. The answer is marked immediately and explained, with a link back " +
            "to the lesson covering whatever was missed, and it can be retaken. The end-of-module exam uses " +
            "the same questions and withholds all feedback until it is finished.",
          "There are two ways to buy it, because the interviews produced two different asks. A catalogue " +
            "course is priced per seat and bought through the site. A tailored course is scoped and " +
            "negotiated directly, since every manager we spoke to wanted their own scenarios in it.",
          "All ten screens were drawn by hand before anything went into Figma, with the transition written on " +
            "each arrow. Finding out that a flow does not work costs a pencil at that stage.",
        ],
        figure: {
          kind: "image",
          src: "/work/oneguard-lowfi.webp",
          width: 1147,
          height: 797,
          alt:
            "The hand-drawn low-fidelity prototype: ten sketched screens covering login, course list, course " +
            "page, video lesson, real-versus-AI mini-test, assessment, curriculum and enrolment, joined by " +
            "labelled arrows describing each click.",
          caption: "The paper version. Every arrow carries the click that causes it.",
        },
      },
      {
        heading: "What it cost",
        body: [
          "Sample size, and we put that in the report rather than leaving it to be found. Twenty-five and ten " +
            "are small numbers, and every respondent was in the United Kingdom or Singapore, which bounds " +
            "every percentage above.",
          "The prototype is a Figma prototype. It clicks through convincingly, but the marking, the progress " +
            "tracking and the payment are drawn rather than built, so what we tested was the design and not " +
            "the product.",
          "Testing with senior employees changed it twice. They said the white-dominated screens gave the eye " +
            "nothing to hold onto, so we added colour and contrast to separate the sections and took it back " +
            "for a second round. They also told us it worked better on a desktop than on a phone, which suits " +
            "a corporate audience and is still a gap.",
          "The competitor position is a snapshot rather than a moat. We found nobody training people " +
            "specifically to separate human work from machine output inside a single industry. The closest " +
            "were a professional certification at £950 to £1,250, a nonprofit media-literacy programme, and a " +
            "local digital-inclusion charity, and any of the three could move into the space.",
        ],
      },
      {
        heading: "What we'd change",
        body: [
          "Survey the people with the budget first. We shaped the early prototype around a customer who, it " +
            "turned out, would not pay for it, and only found the paying one afterwards. The pivot was cheap " +
            "because nothing had been built yet, which is an argument for asking early rather than a defence " +
            "of the order we did it in.",
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
      "random forest recommender behind it. In a controlled study of eighteen participants our engagement " +
      "ratio came out at 36% against the students' union site's 15%, with the paired tests significant at " +
      "p < .001.",
    tech: "Python · random forest · user research",
  },
  {
    title: "Morse code transceiver",
    note:
      "Systems architecture coursework, and the only hardware on this site. Two Arduinos wired together and " +
      "made to talk: a dot button and a dash button on separate interrupts, a one-second gap to decide where " +
      "a character ends, a lookup decode into letters, and an LCD showing the message as it builds. A " +
      "potentiometer selects one of ten channels and a receiver ignores anything not addressed to its own, " +
      "except channel zero, which reaches every device on the wire.",
    tech: "Arduino · C++ · I²C · interrupts",
  },
  {
    title: "Sudoku solver and dice-game agent",
    note:
      "Two first-year AI courseworks where the algorithm was written rather than imported. The sudoku solver " +
      "treats each square as a variable and the puzzle as a constraint satisfaction problem: propagate after " +
      "every placement, always take the square with the fewest remaining values, and backtrack the moment a " +
      "domain empties. The dice game is a Markov decision process solved by value iteration, sweeping the " +
      "state space until the values stop moving.",
    tech: "Python · constraint satisfaction · value iteration",
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

/** Everything with a case-study page, in the order the site ranks them. */
export const allStudies: Project[] = [...featured, ...secondary];

export function projectBySlug(slug: string): Project | undefined {
  return allStudies.find((p) => p.slug === slug);
}
