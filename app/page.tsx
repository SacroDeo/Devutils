"use client";
import Link from "next/link";
import { tools, categories } from "@/lib/tools";
import { ToolCard } from "@/components/ToolCard";
import { useEffect, useRef, useState } from "react";

function AnimatedNumber({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const step = Math.ceil(target / 30);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(start);
        }, 40);
        observer.disconnect();
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <p ref={ref} className="font-display text-5xl font-bold text-accent mb-1">{count}</p>;
}

function Marquee() {
  const items = [
    "JSON Formatter", "Base64 Encoder", "UUID Generator", "JWT Decoder",
    "Password Generator", "Hash Generator", "Regex Tester", "Text Diff",
    "Case Converter", "Slug Generator", "Word Counter", "HTML Minifier",
    "CSS Minifier", "JS Minifier", "Lorem Ipsum", "Base64 Decoder",
    "JSON Validator", "Password Entropy",
  ];

  return (
    <div className="relative overflow-hidden py-4 border-y border-light-border dark:border-cosmos-border">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-6 text-sm font-mono text-light-sub dark:text-cosmos-sub flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const featured = tools.slice(0, 6);

  return (
    <div>
      {/* Hero */}
      <section className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 text-center overflow-hidden">
        {/* Animated orbs */}
        <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full opacity-10 dark:opacity-20 blur-3xl bg-violet-600 animate-pulse pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-64 h-64 rounded-full opacity-10 dark:opacity-15 blur-3xl bg-indigo-500 animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-0 left-1/2 w-80 h-80 rounded-full opacity-5 dark:opacity-10 blur-3xl bg-accent animate-pulse pointer-events-none" style={{ animationDelay: "2s" }} />

        {/* Star dots */}
        <div className="star-bg absolute inset-0 opacity-60 dark:opacity-100 pointer-events-none" />

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
              className="px-8 py-3.5 rounded-2xl bg-accent text-white font-semibold text-base hover:bg-accentGlow transition-all duration-200 hover:scale-105">
              Browse All Tools
            </Link>
            <Link href="/about"
              className="px-8 py-3.5 rounded-2xl border border-light-border dark:border-cosmos-border text-base font-semibold hover:border-accent hover:text-accent transition-colors text-light-text dark:text-cosmos-text">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <Marquee />

      {/* Stats */}
      <section className="border-b border-light-border dark:border-cosmos-border">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 gap-4 text-center">
          {[
            { n: tools.length, label: "Free Tools" },
            { n: categories.length, label: "Categories" },
          ].map(s => (
            <div key={s.label} className="p-6 rounded-2xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card">
              <AnimatedNumber target={s.n} />
              <p className="text-sm text-light-sub dark:text-cosmos-sub font-mono">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-light-text dark:text-cosmos-text mb-3">
            Why developers choose DevUtils
          </h2>
          <p className="text-light-sub dark:text-cosmos-sub text-base max-w-lg mx-auto">
            Built with one goal — get out of your way and let you work.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: (
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              ),
              title: "Instant results",
              desc: "Every tool responds as you type. No submit buttons, no loading spinners, no waiting.",
            },
            {
              icon: (
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              ),
              title: "Private by design",
              desc: "Everything runs in your browser. Your data never touches a server. Ever.",
            },
            {
              icon: (
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                </svg>
              ),
              title: "18 tools, one place",
              desc: "Stop switching between 10 different sites. Everything you need is right here.",
            },
          ].map(f => (
            <div key={f.title}
              className="p-6 rounded-2xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card hover:border-accent transition-all duration-200 group">
              <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-200">
                {f.icon}
              </div>
              <h3 className="font-display font-bold text-light-text dark:text-cosmos-text mb-2">{f.title}</h3>
              <p className="text-sm text-light-sub dark:text-cosmos-sub leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured tools */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
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
        <div className="relative rounded-3xl border border-accent/20 bg-accent/5 p-10 text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-accent/10 blur-3xl rounded-full pointer-events-none" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl font-bold text-light-text dark:text-cosmos-text mb-3">
              Built for developers, by developers
            </h2>
            <p className="text-light-sub dark:text-cosmos-sub text-base mb-6 max-w-md mx-auto">
              Fast, free utilities built for developers. No account needed, works instantly.
            </p>
            <Link href="/tools"
              className="inline-block px-8 py-3.5 rounded-2xl bg-accent text-white font-semibold hover:bg-accentGlow transition-all duration-200 hover:scale-105">
              Start Using Tools
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}