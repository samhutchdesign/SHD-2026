import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center justify-between gap-4 px-8 md:px-16 py-10 border-t border-border bg-background">
      <div className="flex items-center gap-2.5">
        <div className="flex items-center justify-center w-7 h-7 bg-primary rounded-lg">
          <span className="text-primary-foreground text-xs font-black">SH</span>
        </div>
        <span className="text-sm font-semibold text-foreground">
          Sam Hutch Design © 2026
        </span>
      </div>
      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        <Link href="/work" className="hover:text-foreground transition-colors">
          Work
        </Link>
        <Link href="/about" className="hover:text-foreground transition-colors">
          About
        </Link>
        <Link href="/faq" className="hover:text-foreground transition-colors">
          FAQ
        </Link>
        <a
          href="mailto:hello@samhutch.com"
          className="hover:text-foreground transition-colors"
        >
          hello@samhutch.com
        </a>
        <a
          href="https://linkedin.com/in/samhutchdesign"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-foreground transition-colors"
        >
          LinkedIn ↗
        </a>
      </div>
    </footer>
  );
}
