# Quiz Specification (Phase 2)

> The 5-question quiz: questions, scoring, result variants, and the personalized takeaway. Built on the research-backed conversion principles (see bottom). All copy is in Sam's voice — drafts to refine in design (Phase 3) and build (Phase 4).

## Goal of the quiz

Sort each visitor toward the right **track** and **offer** in ≤5 questions, give them a memorable personalized **takeaway** (a "Design Recipe"), and drive them to **book a discovery call**. Every question must change the result — no filler.

## The three result tracks

| Track | Visitor | Maps to offer ([[services-offer]]) | Hero proof point |
|---|---|---|---|
| **A — Website** | Small business / brand needs a site | Marketing Website (packaged, built in Framer) | A brand/web build |
| **B — Product** | Startup/team building or fixing an app | Product Design Sprint / Engagement (bespoke) | NBA Top Shot / Doodles |
| **C — Strategy** | Has an idea/complexity but unsure what to build | Product Strategy (then → B) | Amazon Alexa |

Scoring: each answer adds weight to one or more tracks. The highest total at the end selects the result. Q1 is the strongest signal; later questions refine and break ties.

---

## The start screen (do not skip — 65% who start, finish)

**Headline:** "Not sure what you need? Let's find out in 5 questions."
**Sub:** "Answer honestly and I'll show you exactly how I'd help — plus a little something to take with you." *(teases the takeaway)*
**Button:** "Start →"
**Microcopy under button:** "Takes about 60 seconds."

---

## Q1 — What are you building? *(the easy, fun opener; strongest track signal)*

> Progress jumps visibly after this answer (~to 25%).

- **A new website for my business or brand** → Track A +3
- **A product or app** (new or existing) → Track B +3
- **I have an idea but I'm not sure what to build yet** → Track C +3
- **Something complex / advanced and hard to explain** → Track B +2, Track C +1

## Q2 — Where are you in the journey?

- **Just an idea / very early** → C +2, B +1
- **Designing or building it now** → B +2, A +1
- **It's live but not working well** → B +2, A +1
- **I need to refresh / level up what I have** → A +2, B +1

## Q3 — What's the biggest thing in your way? *(maps to a pain → result framing)*

- **I'm not sure what to prioritize or build** → C +3
- **It looks dated / doesn't feel credible** → A +3
- **It's confusing or hard to use** → B +3
- **It's not converting / not growing** → A +1, B +2

## Q4 — Who's it for / what's the context?

- **Just me — solo founder / small business** → A +2, C +1
- **A startup with a small team** → B +2, C +1
- **A funded company / bigger product** → B +3
- **Not sure yet** → C +2

## Q5 — When do you want to move? *(urgency; informs CTA tone, light track weight)*

- **Exploring for now** → (no track weight; CTA = "let's talk through it")
- **In the next 1–3 months** → (CTA = "let's scope it")
- **As soon as possible** → (CTA = "let's get started")
- **I have a deadline / launch date** → B +1 (CTA = "let's make your date")

*Tie-break order if totals are equal: C > B > A only when Q3 = "not sure what to build"; otherwise B > A > C. (Refine in build.)*

---

## Result pages (one per track)

Each result has: a tailored **headline**, a one-line **diagnosis** (mirrors their answers), the **most relevant proof point**, the **matched offer**, the **takeaway card**, and **one CTA: book a call** (value prop restated).

### Result A — "You need a website that earns trust."
- **Diagnosis:** "You've got a business to be proud of — your site should make people feel that in five seconds."
- **Proof point:** a brand/web build (placeholder until selected).
- **Offer:** Marketing Website package — designed in Figma, built and launched in Framer. *(From $X — confirm.)*
- **CTA:** "Book a free call — I'll tell you exactly what your site needs."

### Result B — "You need to make a complex product feel obvious."
- **Diagnosis:** "There's a lot going on under the hood. My job is to cut through it to what your users actually care about."
- **Proof point:** NBA Top Shot or Doodles (whichever matches their context).
- **Offer:** Product Design Sprint / Engagement — strategy, UX/UI, prototype, dev-ready handoff to your team. *(Bespoke.)*
- **CTA:** "Book a free call — let's map your product together."

### Result C — "You need clarity before you build."
- **Diagnosis:** "The most expensive thing you can do is build the wrong thing. Let's find the right thing first."
- **Proof point:** Amazon Alexa (a prototype that sold a product into existence).
- **Offer:** Product Strategy → leads into the Product engagement. *(Bespoke.)*
- **CTA:** "Book a free call — let's get to the core of your idea."

---

## The takeaway: "Your Design Recipe" *(the cmd+zest-style keepsake)*

A personalized, shareable card generated from their answers. Demonstrates Sam's strategic thinking *and* gives them something to keep / bring to the call.

**Card structure:**
- **Title:** "Your Design Recipe" + a playful named "type" based on track + key answers (e.g., *"The Untangler,"* *"The First Impression,"* *"The Pathfinder"*).
- **Your goal:** one line restating what they're building (from Q1/Q3).
- **The first move I'd make:** one specific, generous strategic tip tailored to their track + pain — real value, not a teaser.
- **Why it matters:** one line tying it to their business outcome.
- **A proof point:** the matched case study, one line.
- **Footer CTA:** "Want the rest? Book a free call." + share button.

**Example named types (draft, ~9 combos like cmd+zest):**
- Track A + "dated" → **"The First Impression"**
- Track B + "confusing" → **"The Untangler"**
- Track C + "not sure what to build" → **"The Pathfinder"**
- Track B + "not converting" → **"The Flow Fixer"**
- Track C + "complex/advanced" → **"The Simplifier"**
- (fill remaining combos in build)

**Format decision (recommended):** a shareable **image card** (downloadable / social-ready), generated client-side. Falls back to an on-screen card. Confirm in Phase 3 design.

---

## Conversion principles applied (from research)

- **5 questions only** — each one changes the result; no filler. ✅
- **Strong start screen** — teases takeaway, sets a 60-second expectation. ✅
- **Easy opener (Q1), early progress jump** (~25%). ✅
- **Progress via microcopy** ("just two left") — A/B test against a bar in build.
- **Takeaway teased up front** so the reward earns completion. ✅
- **One CTA per result** (book a call), value restated. ✅
- **Analytics events** (PostHog): `quiz_started`, `question_answered` (id+answer+running track), `quiz_completed` (result track + type), `takeaway_viewed`, `takeaway_shared`, `book_call_clicked`, `booking_completed`. Target 60–80% completion.
- **A/B test order (post-launch):** result CTA → result copy → question order.

## Open items
- Confirm marketing-website package price for Result A.
- Pick the ~9 takeaway "types" and write each one's "first move" tip.
- Select/screenshot a web build to feature in Result A (until then, placeholder).

## Related
[[positioning]] · [[audience]] · [[proof-points]] · [[services-offer]] · [[faq-objections]] · [[story]]
