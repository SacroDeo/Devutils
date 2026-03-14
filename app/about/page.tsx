import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About – DevUtils",
  description: "DevUtils is a free, client-side developer utilities website built with Next.js and Tailwind CSS.",
};

const stats = [
  { n: "18+", label: "Free Tools" },
  { n: "4", label: "Categories" },
  { n: "3", label: "Blog Guides" },
];

const values = [
  {
    icon: "⚡",
    title: "Fast by default",
    desc: "Every tool loads instantly. No waiting for servers, no spinners, no latency. Your browser does all the work.",
  },
  {
    icon: "🔒",
    title: "Private by design",
    desc: "Nothing you type is ever sent anywhere. All processing happens locally in your browser using JavaScript.",
  },
  {
    icon: "🆓",
    title: "Free forever",
    desc: "No paywalls, no premium tiers, no sign-up required. Every tool is fully accessible to everyone.",
  },
  {
    icon: "🛠️",
    title: "Built for developers",
    desc: "Designed by developers who use these tools daily. Every detail — from copy buttons to keyboard shortcuts — is thought through.",
  },
];

const stack = [
  { name: "Next.js 15", desc: "App Router framework" },
  { name: "Tailwind CSS", desc: "Utility-first styling" },
  { name: "TypeScript", desc: "Type-safe codebase" },
  { name: "Vercel", desc: "Edge deployment" },
];

export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">

      <div className="mb-14">
        <p className="text-xs font-mono text-accent uppercase tracking-widest mb-3">About</p>
        <h1 className="font-display text-5xl font-bold text-light-text dark:text-cosmos-text leading-tight mb-5">
          Built for developers<br />who value their time
        </h1>
        <p className="text-light-sub dark:text-cosmos-sub text-lg leading-relaxed">
          DevUtils is a collection of fast, free, browser-based utilities for developers. Every tool runs 100% client-side — your data never leaves your device, ever.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-14">
        {stats.map(s => (
          <div key={s.label} className="rounded-2xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card p-6 text-center">
            <p className="font-display text-4xl font-bold text-accent mb-1">{s.n}</p>
            <p className="text-sm text-light-sub dark:text-cosmos-sub font-mono">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Values */}
      <div className="mb-14">
        <h2 className="font-display text-2xl font-bold text-light-text dark:text-cosmos-text mb-6">
          Our principles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map(v => (
            <div key={v.title} className="p-5 rounded-2xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card">
              <span className="text-2xl mb-3 block">{v.icon}</span>
              <h3 className="font-display font-bold text-light-text dark:text-cosmos-text mb-2">{v.title}</h3>
              <p className="text-sm text-light-sub dark:text-cosmos-sub leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tech stack */}
      <div className="mb-14">
        <h2 className="font-display text-2xl font-bold text-light-text dark:text-cosmos-text mb-6">
          Tech stack
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stack.map(s => (
            <div key={s.name} className="p-4 rounded-xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card text-center">
              <p className="font-semibold text-light-text dark:text-cosmos-text text-sm mb-1">{s.name}</p>
              <p className="text-xs text-light-sub dark:text-cosmos-sub">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-accent/20 bg-accent/5 p-8 text-center">
        <h2 className="font-display text-2xl font-bold text-light-text dark:text-cosmos-text mb-3">
          Start using DevUtils
        </h2>
        <p className="text-light-sub dark:text-cosmos-sub text-sm mb-6 max-w-sm mx-auto">
          Browse all tools or read our guides to get the most out of DevUtils.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link href="/tools"
            className="px-6 py-3 rounded-2xl bg-accent text-white font-semibold text-sm hover:bg-accentGlow transition-colors">
            Browse Tools
          </Link>
          <Link href="/blog"
            className="px-6 py-3 rounded-2xl border border-light-border dark:border-cosmos-border text-sm font-semibold hover:border-accent hover:text-accent transition-colors text-light-text dark:text-cosmos-text">
            Read Blog
          </Link>
        </div>
      </div>

    </div>
  );
}