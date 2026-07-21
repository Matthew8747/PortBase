/**
 * Single source of truth for site-wide facts.
 * Every value here traces to docs/PROFILE.md. Do not add facts that aren't in that file.
 * Privacy rule: no phone, no address, no referees, no raw email address.
 */

export const site = {
  name: "Matt Pearson",
  formalName: "Matthew Pearson",
  role: "Computer Science & AI, University of Bath",
  tagline: "Software with judgement.",
  status: "Open to 2027 graduate roles",
  location: "Bath, UK",
  relocation: "happy to move for the right team",

  // Update to https://mattpearson.dev once the domain is bought (see docs/TODO.md)
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://mattpearson.dev",

  links: {
    github: "https://github.com/Matthew8747",
    linkedin: "https://www.linkedin.com/in/matthewpearson274",
  },

  description:
    "Final-year Computer Science and AI student at the University of Bath. Three first-class years, " +
    "a placement year shipping enterprise software, and projects built to tell the truth about their own results.",
} as const;

export type ExperienceEntry = {
  when: string;
  role: string;
  org: string;
  note: string;
};

/** From PROFILE.md — Experience table. */
export const experience: ExperienceEntry[] = [
  {
    when: "2024 — 2025",
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
      "Building the visibility model behind NASCAR sponsorship ROI: a full Cup Series season of race results " +
      "joined to Reddit, YouTube and news exposure, then tested for what actually moves together.",
  },
  {
    when: "2023 — 2025",
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
      "Microcontrollers and IoT security in Cambridge — where the interest in systems that have to be " +
      "trustworthy started.",
  },
];

/** From PROFILE.md — Identity and Skills. */
export const education = {
  degree: "MComp Computer Science and Artificial Intelligence",
  institution: "University of Bath",
  detail: "Integrated masters with placement year. Final year 2026/27.",
  results: [
    "First class in all three years of study",
    "82% dissertation",
    "A*A*A* at A-level in Maths, Computer Science and Physics, plus an A* EPQ",
    "Henry Pearson-Gates award for outstanding A-level studies",
    "UKMT gold at every level; British Physics Olympiad silver",
  ],
};

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

/** Coursework paragraphs — from PROFILE.md. More to be added once Matt uploads the rest. */
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
    note: "Analysed the security of a live transaction by working through its HAR files.",
  },
  {
    module: "Digital Business Innovation",
    note: "Studied which of Spotify's innovations actually drove its growth.",
  },
  {
    module: "Entrepreneurship",
    note: "Developed a brand concept for AI security training aimed at financial services staff.",
  },
];
