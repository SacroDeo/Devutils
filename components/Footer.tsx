import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-light-border dark:border-cosmos-border mt-20 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold font-mono">
                D/
              </div>
              <span className="font-display font-bold text-light-text dark:text-cosmos-text">
                Dev<span className="text-accent">Utils</span>
              </span>
            </div>
            <p className="text-sm text-light-sub dark:text-cosmos-sub max-w-xs">
              Free developer utilities. Every tool runs entirely in your browser — no data ever leaves your device.
            </p>
          </div>
          <div className="flex gap-12 text-sm">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-light-text dark:text-cosmos-text text-xs uppercase tracking-wider mb-1">Tools</p>
              <Link href="/tools" className="text-light-sub dark:text-cosmos-sub hover:text-accent transition-colors">All Tools</Link>
              <Link href="/tools/json-formatter" className="text-light-sub dark:text-cosmos-sub hover:text-accent transition-colors">JSON Formatter</Link>
              <Link href="/tools/password-generator" className="text-light-sub dark:text-cosmos-sub hover:text-accent transition-colors">Password Generator</Link>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-light-text dark:text-cosmos-text text-xs uppercase tracking-wider mb-1">Site</p>
              <Link href="/about" className="text-light-sub dark:text-cosmos-sub hover:text-accent transition-colors">About</Link>
              <Link href="/privacy" className="text-light-sub dark:text-cosmos-sub hover:text-accent transition-colors">Privacy</Link>
              <Link href="/contact" className="text-light-sub dark:text-cosmos-sub hover:text-accent transition-colors">Contact</Link>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-light-border dark:border-cosmos-border flex flex-col sm:flex-row justify-between gap-2 text-xs text-light-sub dark:text-cosmos-sub">
        <p>© {new Date().getFullYear()} DevUtils. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}