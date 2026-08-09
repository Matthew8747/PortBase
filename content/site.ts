/**
 * Single source of truth for site-wide facts.
 * Every value here traces to docs/PROFILE.md. Do not add facts that aren't in that file.
 * Privacy rule: no phone, no address, no referees, no raw email address.
 */

export const site = {
  name: "Matt Pearson",
  formalName: "Matthew Pearson",
  role: "Computer Science & AI, University of Bath",
  tagline: "Software engineering and applied AI.",
  status: "Open to 2027 graduate roles",
  location: "Bath, UK",
  relocation: "happy to move for the right team",

  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mattpearson.dev",

  links: {
    github: "https://github.com/Matthew8747",
    linkedin: "https://www.linkedin.com/in/matthewpearson274",
  },

  /**
   * Flip `enabled` to false to run the About page without a portrait.
   * `src` must match the file in `public/` exactly, including case: Vercel serves from a
   * case-sensitive filesystem, so `/PROFILE.jpeg` 404s in production while working locally.
   */
  portrait: {
    src: "/profile.jpeg",
    enabled: true,
    alt: "Matt Pearson.",
  },

  description:
    "Final-year Computer Science and AI student at the University of Bath. Three first-class years, a " +
    "placement year building enterprise software at Kontron, and case studies covering the decisions " +
    "behind each project.",
} as const;

export type ExperienceEntry = {
  when: string;
  role: string;
  org: string;
  note: string;
};

/** From PROFILE.md, Experience table. */
export const experience: ExperienceEntry[] = [
  {
    when: "2024 to 2025",
    role: "Software Engineer",
    org: "Kontron",
    note:
      "A year on the Kontron Device Management product, across development and QA. Shipped Angular and " +
      "TypeScript features from first bug fix to full sets, documented more than fifty defects, and built the " +
      "Jenkins test runner that finally got dev-ops and the dev team running the same suite.",
  },
  {
    when: "2026",
    role: "Sponsorship analytics extern",
    org: "NY Racing",
    note:
      "Built the visibility model behind NASCAR sponsorship value. A full Cup Series season of race results " +
      "joined to Reddit, YouTube and news coverage, scored on published weights, then costed to find which " +
      "sponsor buys the most exposure per dollar. Finished with a written report and a deck presented to " +
      "the team.",
  },
  {
    when: "2026 to 2027",
    role: "Performance Sport Officer",
    org: "SU Sport, University of Bath",
    note:
      "Elected to the Students' Union Sports Executive to represent performance athletes. The seat carries " +
      "their case into exec meetings, sits on the Blues Committee, works with the sports department on how " +
      "performance sport is run, and drives student turnout at BUCS fixtures and showcase events.",
  },
  {
    when: "2023 to 2025",
    role: "Student Ambassador and peer mentor",
    org: "University of Bath",
    note:
      "Led campus tours and virtual open days for the computer science course, and mentored first-year students " +
      "through their first months.",
  },
  {
    when: "2022",
    role: "Work experience, embedded systems",
    org: "Secure Thingz",
    note:
      "Microcontrollers and IoT security in Cambridge, where the interest in systems that have to be " +
      "trustworthy started.",
  },
];

/** From PROFILE.md, Identity and Skills. */
export const education = {
  degree: "MComp Computer Science and Artificial Intelligence",
  institution: "University of Bath",
  detail: "Integrated masters with placement year. Final year 2026/27.",
  results: [
    "First class in all three years of study",
    "82% dissertation",
    "A*A*A* at A-level in Maths, Computer Science and Physics, plus an A* EPQ",
  ],
};

/** From PROFILE.md. Academic results live above; these are the competitive ones. */
export const awards = [
  "Henry Pearson-Gates award for outstanding A-level studies",
  "UKMT gold at every level",
  "British Physics Olympiad silver",
  "Medals at the Senior British Rowing Championships and at BUCS",
  "Rowed in the British Rowing Performance Development Academy",
];

/**
 * The CV's evidence column: one line per piece of work, led by the outcome rather than the
 * stack. Numbers trace to docs/PROFILE.md or to the repository named in the link.
 */
export const cvHighlights: { title: string; note: string; href?: string }[] = [
  {
    title: "Restart Lab",
    note:
      "Set-piece simulator with a mandatory random-search baseline. On the study shipped with the " +
      "repository, the optimised routine reached 6.66% mean xG per corner against a 1.04% baseline, " +
      "with non-overlapping 95% intervals.",
    href: "/work/restart-lab",
  },
  {
    title: "Barnett Art",
    note:
      "Production storefront and portfolio for a working painter. Stripe hosted checkout, Postgres, " +
      "atomic stock so an original cannot sell twice, 101 unit tests and a security audit gating CI.",
    href: "/work/barnett-art",
  },
  {
    title: "BUBC",
    note:
      "Website for the University of Bath Boat Club, built for a committee that changes every year. " +
      "Editors publish a race report in under five minutes and it runs for about ten pounds a year.",
    href: "/work/bubc",
  },
  {
    title: "Bike fit study",
    note:
      "Fifty-one participants across three sessions each. Designed the protocol, ran every session, " +
      "and built the pipeline that reconciled six instrument streams onto one timeline. Graded 82%.",
    href: "/work/bike-fit",
  },
  {
    title: "NASCAR sponsorship visibility",
    note:
      "End-to-end analytics externship: four data sources across a 36-race season, a composite scoring " +
      "model on published weights, and a ranking that held its order under four weightings and the full " +
      "range of cost estimates. Delivered as a report and a presentation.",
    href: "/work/nascar-visibility",
  },
  {
    title: "Society Matchmaker",
    note:
      "Led the user research and built the random forest recommender for an eight-person team project. " +
      "A controlled study of 18 participants put our engagement ratio at 36% against the existing " +
      "students' union site at 15%, with paired t-tests significant at p < .001.",
  },
];

export const skills = {
  languages: ["Python", "TypeScript", "JavaScript", "Java", "C", "SQL"],
  frameworks: [
    "React",
    "Next.js",
    "Angular",
    "Astro",
    "Node.js",
    "PyTorch",
    "scikit-learn",
    "Tailwind CSS",
    "Sanity",
  ],
  tools: ["Git", "Jenkins", "Docker", "AWS", "Cloudflare", "Vercel", "Vitest", "Jest", "Selenium"],
  methods: ["Agile and Scrum", "Test-driven development", "CI/CD"],
};

/** Coursework, from PROFILE.md. More to be added once Matt uploads the rest. */
export const coursework = [
  {
    module: "Reinforcement Learning",
    note:
      "Built and compared reinforcement learning methods on Atari Space Invaders, then researched intrinsic " +
      "motivation as a second piece.",
  },
  {
    module: "Natural Language Processing",
    note: "A full sentiment classification pipeline on IMDb reviews, tuned end to end.",
  },
  {
    module: "Cyber Security",
    note:
      "Made one real card purchase, captured it, and took the whole thing apart. That single checkout " +
      "reached 49 separate domains over 766 requests, which I grouped into six categories and traced from " +
      "the basket call through to the payment endpoint and the bot-detection telemetry riding alongside it.",
  },
  {
    module: "Digital Business Innovation",
    note:
      "Traced Red Bull's route from a Thai tonic to a media company that happens to sell drinks, and " +
      "which of its digital moves actually carried the growth.",
  },
  {
    module: "Entrepreneurship",
    note:
      "OneGuard, a five-person venture selling AI-detection training to financial firms. Problem research, " +
      "two surveys, paper and Figma prototypes, then an investor-style pitch. Written up as a case study.",
  },
];
