import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const caseStudies = [
  {
    slug: "nba-top-shot",
    name: "NBA Top Shot",
    tagline: "Making digital collecting feel real",
    description:
      "An unfamiliar, technical product made as joyful and intuitive as the real-world thing.",
    bg: "bg-primary",
    text: "text-primary-foreground",
  },
  {
    slug: "doodles",
    name: "Doodles",
    tagline: "Order from chaos — 70k+ users",
    description:
      "Took control of a complex design system mid-build for CAMP × Doodles Chicago.",
    bg: "bg-accent",
    text: "text-accent-foreground",
  },
  {
    slug: "amazon-alexa",
    name: "Amazon Alexa",
    tagline: "A prototype that sold a product",
    description:
      "An internal prototype so convincing it helped sell Alexa Skills into existence.",
    bg: "bg-foreground",
    text: "text-background",
    comingSoon: true,
  },
];

const pillars = [
  {
    icon: "🎯",
    title: "Strategy is built in, not bolted on",
    body: "I start with goals, users, and trade-offs — you leave with a direction, not just deliverables.",
  },
  {
    icon: "🧩",
    title: "I simplify complexity",
    body: "Advanced tech, tangled flows, many stakeholders — I cut to what users actually care about.",
  },
  {
    icon: "✦",
    title: "Senior craft, end to end",
    body: "From strategy through polished UI and design systems — one accountable partner, no lost handoffs.",
  },
  {
    icon: "🎮",
    title: "Function first, with a sense of play",
    body: "Raised on games — I design for flow, feedback, and a little whimsy. It works first; it's a pleasure second.",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        {/* Hero */}
        <section className="flex flex-col items-center gap-8 px-8 md:px-16 pt-28 pb-24 bg-background">
          <div className="flex items-center gap-2 px-4 py-1.5 bg-secondary rounded-full">
            <span className="text-xs font-semibold text-secondary-foreground uppercase tracking-widest">
              ✦ Product Design &amp; Strategy
            </span>
          </div>
          <div className="flex flex-col items-center gap-6 max-w-4xl text-center">
            <h1 className="text-6xl md:text-7xl font-black text-foreground leading-none tracking-tight">
              I make complex, ambitious products feel{" "}
              <span className="text-primary">obvious</span>.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Senior product design, UX, and strategy — the thinking of a
              product lead and the craft of a designer, in one partner. Raised
              on games, so I sweat the flow and the fun.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <Link
              href="/quiz"
              className="flex items-center gap-2.5 bg-primary text-primary-foreground px-7 py-4 rounded-2xl font-bold text-base hover:opacity-90 transition-opacity shadow-lg"
            >
              Find what you need — 5 questions →
            </Link>
            <Link
              href="/work"
              className="flex items-center gap-2 border-2 border-border bg-card text-foreground px-7 py-4 rounded-2xl font-semibold text-base hover:border-primary transition-colors"
            >
              See the work
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            Takes 60 seconds · Get a personalized design character sheet at the end
          </p>
        </section>

        {/* Proof strip */}
        <section className="flex flex-wrap items-center justify-center gap-8 md:gap-12 px-8 md:px-16 py-10 bg-muted border-y border-border">
          <span className="text-sm font-medium text-muted-foreground">
            Trusted on work for
          </span>
          {["NBA Top Shot", "Doodles", "Amazon Alexa"].map((name) => (
            <span key={name} className="text-xl font-bold text-foreground opacity-60">
              {name}
            </span>
          ))}
        </section>

        {/* Three ways in */}
        <section className="flex flex-col items-center gap-14 px-8 md:px-16 py-24 bg-background">
          <div className="flex flex-col items-center gap-3 max-w-2xl text-center">
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">
              How I can help
            </span>
            <h2 className="text-5xl font-black text-foreground tracking-tight">
              Three ways in
            </h2>
            <p className="text-lg text-muted-foreground">
              Not sure which is you? The quiz figures it out.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
            <div className="flex flex-col gap-5 p-9 bg-card rounded-2xl border border-border">
              <div className="flex items-center justify-center w-14 h-14 bg-secondary rounded-2xl text-2xl">
                🌐
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                A website that earns trust
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                For small businesses and brands. Designed in Figma, built and
                launched in Framer — credible, fast, and yours.
              </p>
              <span className="text-sm font-semibold text-primary">
                Marketing Website — packaged
              </span>
            </div>
            <div className="flex flex-col gap-5 p-9 bg-card rounded-2xl border-2 border-primary shadow-xl">
              <div className="flex items-center justify-center w-14 h-14 bg-primary rounded-2xl text-2xl">
                📦
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                A product made obvious
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                For startups and teams. Strategy, UX, UI, and prototypes that
                cut through complexity — handed off ready for your engineers.
              </p>
              <span className="text-sm font-semibold text-primary">
                Product Design — bespoke
              </span>
            </div>
            <div className="flex flex-col gap-5 p-9 bg-card rounded-2xl border border-border">
              <div className="flex items-center justify-center w-14 h-14 bg-secondary rounded-2xl text-2xl">
                🧭
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Clarity before you build
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                For founders with an idea. Find the right thing to build — who
                it&apos;s for, what it does, and why — before spending on
                engineering.
              </p>
              <span className="text-sm font-semibold text-primary">
                Product Strategy — bespoke
              </span>
            </div>
          </div>
        </section>

        {/* Selected work */}
        <section className="flex flex-col items-center gap-14 px-8 md:px-16 py-24 bg-muted">
          <div className="flex items-end justify-between w-full max-w-6xl">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold text-primary uppercase tracking-widest">
                Selected work
              </span>
              <h2 className="text-5xl font-black text-foreground tracking-tight">
                Thinking, not just screens
              </h2>
            </div>
            <Link
              href="/work"
              className="text-base font-semibold text-primary hover:opacity-70 transition-opacity"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
            {caseStudies.map((cs) => (
              <div key={cs.slug} className="flex flex-col gap-4">
                <div className={`relative flex flex-col justify-end h-72 p-7 rounded-2xl ${cs.bg}`}>
                  {cs.comingSoon && (
                    <span className="absolute top-5 left-5 px-3 py-1 bg-accent rounded-full text-accent-foreground text-xs font-bold">
                      Coming soon
                    </span>
                  )}
                  <span className={`text-3xl font-black ${cs.text}`}>
                    {cs.name}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-xl font-bold text-foreground">{cs.tagline}</h3>
                  <p className="text-sm text-muted-foreground">{cs.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why me */}
        <section className="flex flex-col md:flex-row gap-16 px-8 md:px-16 py-24 bg-background items-center">
          <div className="flex flex-col gap-5 max-w-md">
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">
              Why me
            </span>
            <h2 className="text-5xl font-black text-foreground tracking-tight leading-tight">
              I&apos;ve known this since I was ten.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I grew up next to a game developer, so I learned early that the
              best products are systems you play with — not just look at.
              Function first, aesthetics close behind. I&apos;m happiest taking
              something tangled and making it feel inevitable.
            </p>
            <Link
              href="/about"
              className="text-base font-semibold text-primary hover:opacity-70 transition-opacity"
            >
              Read my story →
            </Link>
          </div>
          <div className="flex flex-col gap-4 flex-1">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="flex items-start gap-4 p-6 bg-card rounded-2xl border border-border"
              >
                <span className="text-2xl mt-0.5">{p.icon}</span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="flex flex-col items-center gap-8 px-8 md:px-16 py-24 bg-foreground">
          <div className="flex items-center gap-2 px-4 py-1.5 bg-primary rounded-full">
            <span className="text-xs font-semibold text-primary-foreground uppercase tracking-widest">
              ⚔ Begin your quest
            </span>
          </div>
          <h2 className="text-6xl font-black text-background text-center tracking-tight max-w-3xl leading-none">
            Every quest needs a guide.
          </h2>
          <p className="text-xl text-background/70 text-center max-w-xl">
            Take the 5-question quiz to see exactly how I&apos;d help — and get
            your design character sheet to keep.
          </p>
          <Link
            href="/quiz"
            className="flex items-center gap-2.5 bg-accent text-accent-foreground px-8 py-4 rounded-2xl font-bold text-base hover:opacity-90 transition-opacity shadow-xl"
          >
            Take the Quiz →
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
