import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-8 md:px-16 py-5 border-b border-border bg-background sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-2.5">
        <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-xl">
          <span className="text-primary-foreground text-xs font-black">SH</span>
        </div>
        <span className="text-base font-bold text-foreground tracking-tight">
          Sam Hutch Design
        </span>
      </Link>
      <div className="flex items-center gap-6 md:gap-8">
        <Link
          href="/work"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          Work
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          About
        </Link>
        <Link
          href="/faq"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          FAQ
        </Link>
        <Link
          href="/quiz"
          className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Take the Quiz ✦
        </Link>
      </div>
    </nav>
  );
}
