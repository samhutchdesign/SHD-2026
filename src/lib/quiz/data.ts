export type Track = "website" | "product" | "strategy";

export interface Answer {
  label: string;
  icon: string;
  scores: Partial<Record<Track, number>>;
}

export interface Question {
  id: string;
  question: string;
  answers: Answer[];
}

export interface CharacterClass {
  name: string;
  icon: string;
  tagline: string;
  quest: string;
  firstMove: string;
  proofPoint: string;
  stats: { label: string; value: number }[];
}

export interface Result {
  track: Track;
  headline: string;
  diagnosis: string;
  offer: string;
  cta: string;
  proofPoint: { title: string; story: string };
  classes: Record<string, CharacterClass>;
  defaultClass: string;
}

export const questions: Question[] = [
  {
    id: "q1",
    question: "What are you building?",
    answers: [
      {
        label: "A new website for my business or brand",
        icon: "🌐",
        scores: { website: 3 },
      },
      {
        label: "A product or app (new or existing)",
        icon: "📦",
        scores: { product: 3 },
      },
      {
        label: "I have an idea but I'm not sure what to build yet",
        icon: "💡",
        scores: { strategy: 3 },
      },
      {
        label: "Something complex / advanced and hard to explain",
        icon: "🔮",
        scores: { product: 2, strategy: 1 },
      },
    ],
  },
  {
    id: "q2",
    question: "Where are you in the journey?",
    answers: [
      {
        label: "Just an idea / very early",
        icon: "🌱",
        scores: { strategy: 2, product: 1 },
      },
      {
        label: "Designing or building it now",
        icon: "🔧",
        scores: { product: 2, website: 1 },
      },
      {
        label: "It's live but not working well",
        icon: "📉",
        scores: { product: 2, website: 1 },
      },
      {
        label: "I need to refresh / level up what I have",
        icon: "✨",
        scores: { website: 2, product: 1 },
      },
    ],
  },
  {
    id: "q3",
    question: "What's the biggest thing in your way?",
    answers: [
      {
        label: "I'm not sure what to prioritize or build",
        icon: "🧭",
        scores: { strategy: 3 },
      },
      {
        label: "It looks dated and doesn't feel credible",
        icon: "✨",
        scores: { website: 3 },
      },
      {
        label: "It's confusing or hard to use",
        icon: "🧩",
        scores: { product: 3 },
      },
      {
        label: "It's not converting or growing",
        icon: "📈",
        scores: { website: 1, product: 2 },
      },
    ],
  },
  {
    id: "q4",
    question: "Who's it for / what's the context?",
    answers: [
      {
        label: "Just me — solo founder or small business",
        icon: "🧑",
        scores: { website: 2, strategy: 1 },
      },
      {
        label: "A startup with a small team",
        icon: "🚀",
        scores: { product: 2, strategy: 1 },
      },
      {
        label: "A funded company or bigger product",
        icon: "🏢",
        scores: { product: 3 },
      },
      {
        label: "Not sure yet",
        icon: "🤷",
        scores: { strategy: 2 },
      },
    ],
  },
  {
    id: "q5",
    question: "When do you want to move?",
    answers: [
      { label: "Just exploring for now", icon: "👀", scores: {} },
      { label: "In the next 1–3 months", icon: "📅", scores: {} },
      { label: "As soon as possible", icon: "⚡", scores: {} },
      { label: "I have a deadline or launch date", icon: "🎯", scores: { product: 1 } },
    ],
  },
];

export const results: Record<Track, Result> = {
  website: {
    track: "website",
    headline: "You need a website that earns trust.",
    diagnosis:
      "You've got a business to be proud of — your site should make people feel that in five seconds.",
    offer: "Marketing Website — designed in Figma, built and launched in Framer.",
    cta: "Book a free call — I'll tell you what your site needs",
    proofPoint: {
      title: "Doodles",
      story:
        "I took control of a complex brand build mid-flight and shipped an experience 70,000+ people loved.",
    },
    classes: {
      dated: {
        name: "The Bard",
        icon: "🎵",
        tagline: "Your story is great — but the crowd decides in five seconds.",
        quest: "Launch a website that makes your business look as credible as it really is.",
        firstMove: "A hero section that says who you help and shows social proof — above the fold, before the scroll.",
        proofPoint: "Like Doodles — every pixel in service of the story.",
        stats: [
          { label: "Charisma", value: 18 },
          { label: "Clarity", value: 14 },
          { label: "Craft", value: 16 },
        ],
      },
      converting: {
        name: "The Ranger",
        icon: "🏹",
        tagline: "A beautiful site that misses the target is just scenery.",
        quest: "Turn your website into a lead machine with one clear path to action.",
        firstMove: "One primary CTA per page, aimed at a single outcome — remove everything competing with it.",
        proofPoint: "Like Doodles — designed for the outcome, not the award.",
        stats: [
          { label: "Precision", value: 18 },
          { label: "Focus", value: 16 },
          { label: "Craft", value: 14 },
        ],
      },
    },
    defaultClass: "dated",
  },
  product: {
    track: "product",
    headline: "You need to make a complex product feel obvious.",
    diagnosis:
      "There's a lot going on under the hood. My job is to cut through it to what your users actually care about.",
    offer: "Product Design Sprint / Engagement — strategy, UX/UI, prototype, dev-ready handoff.",
    cta: "Book a free call — let's map your product together",
    proofPoint: {
      title: "NBA Top Shot",
      story:
        "I took a technical, unfamiliar concept and made it feel as intuitive and joyful as the real-world thing.",
    },
    classes: {
      confusing: {
        name: "The Wizard",
        icon: "🧙",
        tagline: "You've mastered a complex system. Your users need a simpler spellbook.",
        quest: "Turn a powerful but confusing product into something users understand on the first try.",
        firstMove: "Cut the first-time user's choices down to one obvious next step — hide everything else behind it.",
        proofPoint: "Like NBA Top Shot — complex tech made joyful.",
        stats: [
          { label: "Intelligence", value: 18 },
          { label: "Clarity", value: 16 },
          { label: "Craft", value: 15 },
        ],
      },
      converting: {
        name: "The Rogue",
        icon: "🗡️",
        tagline: "Every extra step is a trap. Find the shortest path to value.",
        quest: "Identify and eliminate the friction killing your conversion.",
        firstMove: "Map the critical flow end-to-end and remove one step this week.",
        proofPoint: "Like NBA Top Shot — every screen earned its place.",
        stats: [
          { label: "Agility", value: 18 },
          { label: "Precision", value: 16 },
          { label: "Cunning", value: 17 },
        ],
      },
      advanced: {
        name: "The Artificer",
        icon: "⚙️",
        tagline: "Advanced tech only impresses if people can actually use it.",
        quest: "Make your sophisticated product feel inevitable, not intimidating.",
        firstMove: "Hide the machinery. Surface the one outcome users care about on screen one.",
        proofPoint: "Like Amazon Alexa — a prototype that made the complex feel obvious.",
        stats: [
          { label: "Intelligence", value: 17 },
          { label: "Craft", value: 18 },
          { label: "Vision", value: 16 },
        ],
      },
    },
    defaultClass: "confusing",
  },
  strategy: {
    track: "strategy",
    headline: "You need clarity before you build.",
    diagnosis:
      "The most expensive thing you can do is build the wrong thing. Let's find the right thing first.",
    offer: "Product Strategy — define what to build, for whom, and why, before spending on engineering.",
    cta: "Book a free call — let's get to the core of your idea",
    proofPoint: {
      title: "Amazon Alexa",
      story:
        "I built a prototype so convincing it helped sell Alexa Skills into existence. Design as a strategic tool.",
    },
    classes: {
      unsure: {
        name: "The Cleric",
        icon: "✝️",
        tagline: "Before the journey, you need a direction worth walking.",
        quest: "Define who your product is for and the single job it does — in one sentence.",
        firstMove: "Write a one-sentence product definition: '[Product] helps [who] do [what] so they can [outcome].' If you can't, that's the work.",
        proofPoint: "Like Amazon Alexa — clarity before a single line of code.",
        stats: [
          { label: "Wisdom", value: 18 },
          { label: "Vision", value: 16 },
          { label: "Clarity", value: 17 },
        ],
      },
      complex: {
        name: "The Druid",
        icon: "🌿",
        tagline: "You see a tangled ecosystem. Let's find its natural shape.",
        quest: "Map the whole system, then find the core loop everything orbits.",
        firstMove: "Draw every user type and every action they take. Circle the one that makes everything else make sense.",
        proofPoint: "Like Amazon Alexa — the whole ecosystem, made to feel inevitable.",
        stats: [
          { label: "Wisdom", value: 17 },
          { label: "Systems", value: 18 },
          { label: "Vision", value: 16 },
        ],
      },
      early: {
        name: "The Sorcerer",
        icon: "🔮",
        tagline: "Raw potential, untamed. Let's shape it into something people can hold.",
        quest: "Turn your idea into one testable user story and put it in front of someone this week.",
        firstMove: "Write the one scenario where your idea works perfectly. Who's the person, what's the moment, what do they do?",
        proofPoint: "Like Amazon Alexa — a rough idea, made real enough to sell.",
        stats: [
          { label: "Charisma", value: 17 },
          { label: "Vision", value: 18 },
          { label: "Potential", value: 20 },
        ],
      },
    },
    defaultClass: "unsure",
  },
};

export function scoreAnswers(answers: Record<string, number>): Track {
  const totals: Record<Track, number> = { website: 0, product: 0, strategy: 0 };

  questions.forEach((q) => {
    const answerIndex = answers[q.id];
    if (answerIndex === undefined) return;
    const answer = q.answers[answerIndex];
    if (!answer) return;
    (Object.entries(answer.scores) as [Track, number][]).forEach(([track, score]) => {
      totals[track] += score;
    });
  });

  const sorted = (Object.entries(totals) as [Track, number][]).sort(
    (a, b) => b[1] - a[1]
  );
  return sorted[0][0];
}

export function pickClass(track: Track, answers: Record<string, number>): CharacterClass {
  const result = results[track];
  const q3Answer = answers["q3"];

  if (track === "website") {
    if (q3Answer === 3) return result.classes.converting;
    return result.classes.dated;
  }
  if (track === "product") {
    if (q3Answer === 2) return result.classes.confusing;
    if (q3Answer === 3) return result.classes.converting;
    if (q3Answer === 0) return result.classes.advanced;
    return result.classes.confusing;
  }
  if (track === "strategy") {
    if (q3Answer === 0) return result.classes.unsure;
    if (q3Answer === 3) return result.classes.complex;
    const q2Answer = answers["q2"];
    if (q2Answer === 0) return result.classes.early;
    return result.classes.unsure;
  }
  return result.classes[result.defaultClass];
}
