import type { Metadata } from "next";
import Link from "next/link";
import { tools, categories } from "@/lib/tools";
import { ToolCard } from "@/components/ToolCard";

export const metadata: Metadata = {
  title: "DevUtils – Free Developer Utilities",
  description: "20+ free, client-side developer tools. JSON, Base64, UUID, JWT, Regex, Password, Minifiers and more.",
};

export default function Home() {
  const featured = tools.slice(0, 6);

  return (
    <div className="nebula-bg dark:nebula-bg light-nebula">
      {/* Hero */}
      <section className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 text-center overflow-hidden">
        <div className="star-bg absolute inset-0 opacity-60 dark:opacity-100" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 text-sm font-mono text-accent mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Free · No sign-up · Runs in browser
          </div>

          <h1 className="font-display text-6xl sm:text-7xl font-bold leading-none mb-6 text-light-text dark:text-cosmos-text tracking-tight">
            Tools built<br />
            <span className="text-accent glow-text">for developers</span>
          </h1>

          <p className="text-light-sub dark:text-cosmos-sub text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Fast, free utilities that run entirely in your browser. No sign-up, no tracking, no nonsense.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/tools"
              className="px-8 py-3.5 rounded-2xl bg-accent text-white font-semibold text-base hover:bg-accentGlow transition-colors">
              Browse All Tools
            </Link>
            <Link href="/about"
              className="px-8 py-3.5 rounded-2xl border border-light-border dark:border-cosmos-border text-base font-semibold hover:border-accent hover:text-accent transition-colors text-light-text dark:text-cosmos-text">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-light-border dark:border-cosmos-border">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-2 gap-4 text-center">
          {[
            { n: `${tools.length}`, label: "Tools" },
            { n: `${categories.length}`, label: "Categories" },
          ].map(s => (
            <div key={s.label}>
              <p className="font-display text-4xl font-bold text-accent mb-1">{s.n}</p>
              <p className="text-sm text-light-sub dark:text-cosmos-sub font-mono">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured tools */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-display text-3xl font-bold text-light-text dark:text-cosmos-text">
            Popular Tools
          </h2>
          <Link href="/tools" className="text-sm font-mono text-accent hover:underline">
            View all {tools.length} →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map(t => <ToolCard key={t.slug} {...t} />)}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="rounded-3xl border border-accent/20 bg-accent/5 p-10 text-center">
          <h2 className="font-display text-3xl font-bold text-light-text dark:text-cosmos-text mb-3">
            Built for developers, by developers
          </h2>
          <p className="text-light-sub dark:text-cosmos-sub text-base mb-6 max-w-md mx-auto">
            Fast, free utilities built for developers. No account needed, works instantly.
          </p>
          <Link href="/tools"
            className="inline-block px-8 py-3.5 rounded-2xl bg-accent text-white font-semibold hover:bg-accentGlow transition-colors">
            Start Using Tools
          </Link>
        </div>
      </section>
    </div>
  );
}