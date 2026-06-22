# Site Architecture

> Page list, navigation, and section breakdown. Drives the Efecto mockups (Phase 3) and the Next.js build (Phase 4). Quiz is the centerpiece; everything supports getting to a booked call.

## Navigation

**Top nav:** Logo (Sam Hutch Design) · Work · About · FAQ · **Take the Quiz** (primary button)
**Footer:** quick links · email · LinkedIn · "Book a call" CTA · region note.

Keep nav minimal — the quiz and "book a call" are the two actions that matter.

## Pages & routes

| Route | Page | Purpose |
|---|---|---|
| `/` | Home | Hook + quiz entry + proof; route to quiz or work |
| `/quiz` | Quiz | The 5-question flow (can also live inline on `/`) |
| `/quiz/result` | Result + Character Sheet | Tailored result, takeaway, book-a-call (dynamic by answers) |
| `/work` | Work index | Case study cards (NBA Top Shot, Doodles, Alexa "coming soon") |
| `/work/[slug]` | Case study | Single case study (story-driven, not a gallery) |
| `/about` | About | Origin story + brand voice ([[story]]) |
| `/faq` | FAQ / How I work | Objection handling ([[faq-objections]]) |
| `/contact` or `/book` | Book a call | Cal.com/Calendly embed |

## Home page sections (top → bottom)

1. **Hero** — bold positioning line ([[positioning]]) + sub + primary CTA "Take the Quiz" (teases the character-sheet takeaway). Secondary: "See the work."
2. **Quiz entry / teaser** — "Not sure what you need? Find out in 5 questions." Start button. (Quiz can launch inline or route to `/quiz`.)
3. **Proof strip** — recognizable names/logos (NBA Top Shot, Doodles, Amazon Alexa) for instant credibility.
4. **What I do** — three offers at a glance (Website / Product / Strategy) → link to services.
5. **Selected work** — 2–3 case study cards → `/work`.
6. **Why me** — the four pillars ([[positioning]]), in Sam's voice with a touch of play.
7. **Mini About** — one-paragraph story hook ("known this since I was ten…") → `/about`.
8. **FAQ teaser** — top 3 objections → `/faq`.
9. **Final CTA** — "Every quest needs a guide. Book a free call." + quiz restart.

## Quiz flow (see [[quiz-spec]])

Start screen → Q1–Q5 (one per screen, progress via microcopy, animated transitions) → Result page with: tailored headline + diagnosis, matched proof point, matched offer (region-based price for Website), **Character Sheet** takeaway (shareable image), single **book-a-call** CTA.

## Case study template (story-driven)

Hero (name, role, one-line outcome) → Context/challenge → **The thinking** (strategy, flows, simplifying complexity — the differentiator) → Selected visuals → Outcome/impact (e.g., 70k+ users) → Next-project + book-a-call CTA. Emphasize *thinking over screens* ([[proof-points]]).

## Visual direction (starting point — refine in Efecto)

- **Feel:** premium, confident, modern, with playful/whimsical accents (game-raised). Function-first clarity; generous whitespace; strong type.
- **Motion:** purposeful, smooth (Framer Motion later) — quiz transitions, subtle hover/feedback. Cf. cmd+zest.
- **Character sheet / takeaway:** trading-card / RPG character-sheet styling — the most expressive, "nerdy-fun" surface.
- **Mobile-first**, fast, accessible.
- Palette/type: TBD in Efecto — explore one confident accent color + a refined neutral base; a display face for headlines with personality.

## Related
[[positioning]] · [[story]] · [[quiz-spec]] · [[proof-points]] · [[services-offer]] · [[faq-objections]] · [[audience]]
