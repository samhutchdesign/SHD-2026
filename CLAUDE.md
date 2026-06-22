# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

**SHD 2026** — a dynamic personal website for **Sam Hutch Design**, a freelance UX/product design & strategy practice. The centerpiece is a short (max 5-question) quiz that tailors which services/experience a visitor sees and ends in a personalized takeaway + a book-a-call CTA. Inspiration: SOUR's cmd+zest.

## Source of truth: `notes/`

All strategy, positioning, audience, offers, and copy direction live in `notes/*.md`. **Read these before writing site copy, quiz questions, or result content** — they define the voice, the two audience tracks, the offers, and the objection-handling. Start with `notes/positioning.md` and `notes/story.md` for voice.

## Positioning guardrails (don't violate)

- **Lead premium** (product design & strategy), don't lead with "I build websites" — website work is welcomed but routed to a simpler offer, never the headline.
- **Voice:** confident, plain, first-person, playful where it earns it (game-design lens). Function first, aesthetics close behind. Show the thinking, not just screens.
- **Featured case studies:** NBA Top Shot, Doodles (Amazon Alexa = "coming soon"). CryptoKitties is intentionally excluded.

## Conversion rules for the quiz (research-backed)

- Keep it to **5 questions**; cut anything that doesn't change the result track.
- Open easy/fun; signal early progress; tease the takeaway up front.
- One clear CTA per result (book a call); restate value at the CTA step.
- Instrument with PostHog events (`quiz_started`, `question_answered`, `quiz_completed`, `book_call_clicked`, `booking_completed`) + Vercel Web Analytics. Target 60–80% completion.

## Planned stack

Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion, deployed on Vercel. Quiz is a client-side state machine (no backend initially). Booking via Cal.com/Calendly embed. Chosen on merit for this project — **do not** mirror the Rea project's stack.

## Workflow

Clean commit + clean message after every meaningful change, then push to GitHub (the user wants an always-revertible remote history).

## Status

Phase 1 (positioning & research) drafted in `notes/`. Phases 2–5 not yet started. The full plan lives outside the repo at `~/.claude/plans/problem-share-my-skillset-transient-prism.md`.
