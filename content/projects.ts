/**
 * Project content. Facts trace to docs/PROFILE.md and the repositories themselves.
 *
 * Honesty rules carried over from PROFILE.md:
 *  - Restart Lab is early-stage. The case study sells the trustworthy-analytics machinery, not the results.
 *  - The bike-fit rig was built by Bath's Lovelace and IMPACT labs, not by Matt. His work was the
 *    experiment design, running every session, the data pipeline and the analysis.
 *  - Kontron code and screenshots are off limits; the work is described, never shown.
 */

export type CaseSection = {
  heading: string;
  body: string[];
};

export type Project = {
  slug: string;
  title: string;
  kind: string;
  kindDetail: string;
  summary: string;
  tech: string[];
  links?: { label: string; href: string }[];
  /** Placeholder label until real screenshots land — see docs/TODO.md */
  figure: string;
  sections: CaseSection[];
};

export const featured: Project[] = [
  {
    slug: "restart-lab",
    title: "Restart Lab",
    kind: "Featured",
    kindDetail: "simulation & optimisation",
    summary:
      "A set-piece simulator that refuses to lie. It plays a corner out thousands of times, scores every " +
      "chance with a real expected-goals model, and won't call a routine a winner unless it beats random " +
      "search first.",
    tech: ["Python", "StatsBomb xG", "optimisation", "SHAP"],
    links: [
      { label: "Live demo", href: "https://set-piece-sim-frontend.vercel.app/" },
      { label: "Source", href: "https://github.com/Matthew8747/Set-Piece-Sim" },
    ],
    figure: "Optimisation study",
    sections: [
      {
        heading: "What it had to do",
        body: [
          "Football clubs spend a great deal of time on set pieces and have very little evidence about which " +
            "routines actually work. The obvious approach — count what happened in past matches — runs out of " +
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
            "Cup and Euros data, so the scoring is anchored to real football rather than to my own judgement.",
          "The decision I care most about is the last one: an optimiser searches for better routines, but " +
            "nothing it proposes counts unless it beats a random search baseline. Optimisers are very good at " +
            "finding noise and presenting it as insight. Making the baseline mandatory was the only way to " +
            "stop the tool flattering itself.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "Three steps, one loop. Simulate the set piece; measure each chance with the xG model and report it " +
            "with confidence intervals; then search the space of deliveries, runs and timings across thousands " +
            "of trials.",
          "Two consoles sit on top. The Scenario Workbench builds a set piece from real squads and compares two " +
            "routines under common random numbers, so the comparison isn't polluted by luck. Optimization " +
            "Studies reads a completed search: convergence against the baseline, a parallel-coordinates view of " +
            "every trial, and a SHAP explanation of what separated the winners.",
        ],
      },
      {
        heading: "What it cost",
        body: [
          "Speed. The simulator is slower than I would like, and the throughput work — a Numba kernel for the " +
            "inner loop — is still in progress. The live demo is usable but not brisk.",
          "And honestly: the results so far are thin. The platform runs end to end and the machinery is sound, " +
            "but I have not yet found routines that are decisively better in a way I would defend to a coach. " +
            "The honesty banner that refuses to declare a winner without statistical backing spends most of its " +
            "time refusing.",
        ],
      },
      {
        heading: "What I'd change",
        body: [
          "I would build the throughput kernel first. Almost every limitation downstream — how many trials a " +
            "study can afford, how tight the confidence intervals get, how much of the space the optimiser can " +
            "actually explore — traces back to how fast a single simulation runs. I optimised the interesting " +
            "part before the boring part, and the boring part turned out to set the ceiling.",
        ],
      },
    ],
  },
  {
    slug: "bubc",
    title: "BUBC",
    kind: "Client work",
    kindDetail: "Bath University Boat Club",
    summary:
      "A club website rebuilt to outlive the committee that commissioned it. Editors publish a race report in " +
      "five minutes, it targets 95+ on Lighthouse, and it runs for about ten pounds a year.",
    tech: ["Astro", "Sanity", "Vercel", "Tailwind", "WCAG 2.2 AA"],
    links: [
      { label: "Live site", href: "https://bubc-web.vercel.app/" },
      { label: "Source", href: "https://github.com/Matthew8747/BUBC" },
    ],
    figure: "Homepage",
    sections: [
      {
        heading: "What it had to do",
        body: [
          "Recruit rowers, keep alumni interested, and give sponsors something credible to look at. But the real " +
            "constraint was organisational, not technical: a university club's committee turns over every year. " +
            "Any site that needs a developer to update it dies quietly about fourteen months after launch.",
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
            "Static output means the worst thing that can happen to the site is that it stops being updated — " +
            "it cannot go down or get compromised in the usual ways.",
          "Editors work in Sanity Studio. Publishing fires a webhook at a Vercel deploy hook, and the whole site " +
            "rebuilds in around a minute.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "Astro pulls every page from Sanity's GROQ API at build time and writes static HTML and CSS. Vercel " +
            "serves it from the edge and rebuilds on push or on publish. Forms go to Formspree, the newsletter " +
            "to Buttondown — both env-gated, so neither is a hard dependency.",
        ],
      },
      {
        heading: "What it cost",
        body: [
          "Roughly ten pounds a year, which is the domain. Everything else sits inside free tiers, deliberately.",
          "The trade-off is that content changes require a rebuild rather than appearing instantly, and that " +
            "genuinely dynamic features — a members' area, live race scoring, a shop — are off the table. For " +
            "this club that was the right exchange; we link out for those instead.",
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
      "body does — and whether it differs between men and women. I designed the protocol, ran every session, " +
      "and built the pipeline from raw sensor stream to finding.",
    tech: ["Experiment design", "Python", "COSMED", "Qualisys & Theia3D", "EMG"],
    links: [{ label: "Pipeline source", href: "https://github.com/Matthew8747/Bikefit-Data-Pipeline" }],
    figure: "Pipeline figure",
    sections: [
      {
        heading: "What it had to do",
        body: [
          "Professional bike fitting is a large industry built on a fairly small evidence base, and almost none " +
            "of that evidence addresses whether the effects differ by sex. The study asked a narrow version of " +
            "the question: after a professional fit, does anything measurable change in physiology, " +
            "biomechanics, muscle activation or comfort — and does it change differently for women than for men?",
          "It earned 82%.",
        ],
      },
      {
        heading: "What I chose",
        body: [
          "A crossover design. Every participant rides both their own self-selected fit and a professionally " +
            "adjusted one, so each rider is their own control — which matters enormously when you have around " +
            "fifty people and enormous variation between them.",
          "Three sessions each. Screening, anthropometrics, self-selected fit and a ramp test to establish FTP; " +
            "then a twenty-minute trial at 95% of FTP on the self-selected fit; then the same trial on the " +
            "professional fit. Perceived exertion recorded at four, nine, fourteen and nineteen minutes.",
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
          "The recurring cost was data integrity. Instruments drop frames, sensors come loose, participants " +
            "cannot always hold the target power — the protocol steps power down by 5% when that happens, " +
            "which then has to be modelled rather than ignored. A meaningful share of the pipeline exists to " +
            "detect and handle these cases rather than to compute anything.",
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
      "A full sentiment classification pipeline: custom naive Bayes against TF-IDF, with lemmatisation, custom " +
      "stop words, n-grams and minimum document frequency all tunable from the command line.",
    href: "https://github.com/Matthew8747/NLP-pipeline",
    tech: "Python · scikit-learn · NLTK",
  },
  {
    title: "Space Invaders reinforcement learning",
    note:
      "Coursework building and comparing reinforcement learning methods on Atari Space Invaders, with a second " +
      "piece researching intrinsic motivation.",
    href: "https://github.com/Matthew8747/Space-Invaders-project-",
    tech: "Python · RL",
  },
  {
    title: "Brain tumour detection",
    note:
      "A YOLOv10 model fine-tuned on annotated MRI scans, wrapped in a Gradio interface so predictions can be " +
      "inspected image by image. A direct descendant of my EPQ on computer-aided diagnosis.",
    href: "https://github.com/Matthew8747/TumorDetection",
    tech: "PyTorch · YOLOv10 · Gradio",
  },
  {
    title: "Society Matchmaker",
    note:
      "An eight-person team project tackling student society engagement. I led the user research and built the " +
      "random forest recommender behind it; engagement rose 150% against the system it replaced.",
    tech: "Python · random forest · user research",
  },
  {
    title: "Agent experiments",
    note:
      "A NEAT agent that teaches itself the Chrome dinosaur game, Conway's Game of Life extended into a forest " +
      "fire simulator, and a boid flocking model adapted to study migration under environmental stress.",
    href: "https://github.com/Matthew8747/DinoNEAT",
    tech: "Python · NEAT · cellular automata",
  },
  {
    title: "Barnett Art",
    note:
      "A gallery site for an artist's work, built to take enquiries about individual pieces and ready to sell " +
      "directly when that is wanted.",
    tech: "Client work",
  },
  {
    title: "Argonauts",
    note:
      "A 2D platformer with dashing, wall-jumping and enemy AI, built in Unity. The follow-up was a grappling " +
      "traversal game made in Unreal during a hackathon.",
    href: "https://github.com/Matthew8747/ArgonautsGame",
    tech: "Unity · C#",
  },
];

export function projectBySlug(slug: string): Project | undefined {
  return featured.find((p) => p.slug === slug);
}
