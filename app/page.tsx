"use client";
import Link from "next/link";
import { tools, categories } from "@/lib/tools";
import { ToolCard } from "@/components/ToolCard";
import { useEffect, useRef, useState } from "react";

// ─── Animated counter ──────────────────────────────────────────────────────
function AnimatedNumber({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const step = Math.ceil(target / 40);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(start);
        }, 30);
        observer.disconnect();
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{count}</span>;
}

// ─── Marquee ───────────────────────────────────────────────────────────────
function Marquee() {
  const items = [
    "JSON Formatter","Base64 Encoder","UUID Generator","JWT Decoder",
    "Password Generator","Hash Generator","Regex Tester","Text Diff",
    "Case Converter","Slug Generator","Word Counter","HTML Minifier",
    "CSS Minifier","JS Minifier","Lorem Ipsum","Base64 Decoder",
    "JSON Validator","Password Entropy",
  ];
  return (
    <div className="relative overflow-hidden py-3 border-y border-light-border dark:border-cosmos-border">
      {/* fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 z-10 bg-gradient-to-r from-light-bg dark:from-cosmos-bg to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 z-10 bg-gradient-to-l from-light-bg dark:from-cosmos-bg to-transparent" />
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 text-xs font-mono uppercase tracking-widest text-light-sub dark:text-cosmos-sub flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-accent inline-block opacity-60" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Grid noise background ─────────────────────────────────────────────────
function GridBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #A78BFA 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}

// ─── Floating terminal card ────────────────────────────────────────────────
function TerminalCard() {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card shadow-2xl shadow-accent/5 font-mono text-sm">
      {/* title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-light-border dark:border-cosmos-border bg-light-bg/50 dark:bg-[#080820]/50">
        <span className="w-3 h-3 rounded-full bg-red-400/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
        <span className="w-3 h-3 rounded-full bg-green-400/70" />
        <span className="ml-3 text-xs text-light-sub dark:text-cosmos-sub tracking-wide">devutils — json formatter</span>
      </div>
      {/* content */}
      <div className="p-5 space-y-1 text-xs leading-relaxed">
        <div><span className="text-accent/60">// paste your JSON</span></div>
        <div className="mt-2">
          <span className="text-indigo-400">{"{"}</span>
        </div>
        <div className="pl-4"><span className="text-violet-400">"name"</span><span className="text-light-sub dark:text-cosmos-sub">: </span><span className="text-emerald-400">"devutils"</span><span className="text-light-sub dark:text-cosmos-sub">,</span></div>
        <div className="pl-4"><span className="text-violet-400">"version"</span><span className="text-light-sub dark:text-cosmos-sub">: </span><span className="text-amber-400">1.0</span><span className="text-light-sub dark:text-cosmos-sub">,</span></div>
        <div className="pl-4"><span className="text-violet-400">"tools"</span><span className="text-light-sub dark:text-cosmos-sub">: </span><span className="text-amber-400">18</span><span className="text-light-sub dark:text-cosmos-sub">,</span></div>
        <div className="pl-4"><span className="text-violet-400">"free"</span><span className="text-light-sub dark:text-cosmos-sub">: </span><span className="text-emerald-400">true</span></div>
        <div><span className="text-indigo-400">{"}"}</span></div>
        <div className="flex items-center gap-2 pt-2 border-t border-light-border dark:border-cosmos-border mt-3">
          <span className="text-emerald-400">✓</span>
          <span className="text-light-sub dark:text-cosmos-sub">Valid JSON · 4 keys · formatted in 0ms</span>
        </div>
      </div>
    </div>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────
export default function Home() {
  const featured = tools.slice(0, 6);

  return (
    <div className="relative">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <GridBg />

        {/* ambient glow orbs — subtle in light mode, vivid in dark */}
        <div className="absolute -top-32 left-1/3 w-[600px] h-[600px] rounded-full blur-[120px]
          bg-violet-500/5 dark:bg-violet-600/15 pointer-events-none" />
        <div className="absolute top-1/2 -right-32 w-[400px] h-[400px] rounded-full blur-[100px]
          bg-indigo-500/5 dark:bg-indigo-500/10 pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — copy */}
            <div>
              {/* pill badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                border border-accent/20 bg-accent/5 text-xs font-mono text-accent mb-8 tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-50" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                18 tools · 100% free · runs in your browser
              </div>

              <h1 className="font-display font-bold leading-[1.05] tracking-tight mb-6">
                <span className="block text-5xl sm:text-6xl xl:text-7xl text-light-text dark:text-cosmos-text">
                  The dev toolkit
                </span>
                <span className="block text-5xl sm:text-6xl xl:text-7xl animate-gradient-text mt-1">
                  that stays out
                </span>
                <span className="block text-5xl sm:text-6xl xl:text-7xl text-light-text dark:text-cosmos-text">
                  of your way.
                </span>
              </h1>

              <p className="text-light-sub dark:text-cosmos-sub text-lg max-w-md leading-relaxed mb-10">
                Format, encode, generate, and inspect — every tool instant, private, and free.
                No sign-up. No server. No nonsense.
              </p>

              <div className="flex gap-3 flex-wrap">
                <Link href="/tools"
                  className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                    bg-accent text-white font-semibold text-sm overflow-hidden
                    hover:bg-accentGlow transition-all duration-200 hover:scale-[1.03] hover:shadow-lg hover:shadow-accent/25">
                  <span>Browse All Tools</span>
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">→</span>
                </Link>
                <Link href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl
                    border border-light-border dark:border-cosmos-border
                    text-sm font-semibold text-light-text dark:text-cosmos-text
                    hover:border-accent/50 hover:text-accent transition-all duration-200">
                  Learn More
                </Link>
              </div>

              {/* inline stats */}
              <div className="flex items-center gap-8 mt-10 pt-8 border-t border-light-border dark:border-cosmos-border">
                {[
                  { n: tools.length, label: "Free tools" },
                  { n: categories.length, label: "Categories" },
                  { n: 0, label: "Data sent", prefix: "", suffix: "kb" },
                ].map((s, i) => (
                  <div key={i}>
                    <p className="font-display text-2xl font-bold text-accent tabular-nums">
                      {s.prefix ?? ""}<AnimatedNumber target={s.n} />{s.suffix ?? ""}
                    </p>
                    <p className="text-xs font-mono text-light-sub dark:text-cosmos-sub mt-0.5 tracking-wide">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — terminal mockup */}
            <div className="hidden lg:block relative">
              {/* decorative ring */}
              <div className="absolute -inset-4 rounded-3xl border border-accent/10 dark:border-accent/5" />
              <div className="absolute -inset-8 rounded-3xl border border-accent/5 dark:border-accent/[0.03]" />
              <TerminalCard />
              {/* floating chips */}
              <div className="absolute -top-4 -right-4 px-3 py-1.5 rounded-lg border border-emerald-500/20 bg-emerald-500/5 text-xs font-mono text-emerald-400">
                ✓ Valid JSON
              </div>
              <div className="absolute -bottom-4 -left-4 px-3 py-1.5 rounded-lg border border-accent/20 bg-accent/5 text-xs font-mono text-accent">
                0ms · instant
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ────────────────────────────────────────────────────────── */}
      <Marquee />

      {/* ── FEATURES ──────────────────────────────────────────────────────── */}
      <section className="relative max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-3">Why DevUtils</p>
          <h2 className="font-display text-4xl font-bold text-light-text dark:text-cosmos-text">
            Built different.
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              icon: "⚡",
              title: "Instant results",
              desc: "Every tool responds as you type. No submit buttons, no loading spinners, no waiting.",
              glow: "from-amber-500/10 to-transparent",
              border: "hover:border-amber-400/30",
              tag: "< 1ms",
            },
            {
              icon: "🔒",
              title: "Zero data sent",
              desc: "100% client-side. Your data never touches our servers — because we don't have any.",
              glow: "from-emerald-500/10 to-transparent",
              border: "hover:border-emerald-400/30",
              tag: "0kb uploaded",
            },
            {
              icon: "🧰",
              title: "18 tools, one tab",
              desc: "Stop juggling tabs. Every utility you need lives here, organized and fast.",
              glow: "from-violet-500/10 to-transparent",
              border: "hover:border-violet-400/30",
              tag: "18 tools",
            },
          ].map(f => (
            <div key={f.title}
              className={`group relative p-7 rounded-2xl border border-light-border dark:border-cosmos-border
                bg-light-card dark:bg-cosmos-card overflow-hidden transition-all duration-300 ${f.border}
                hover:shadow-xl hover:-translate-y-1`}>
              {/* background glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${f.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <span className="text-3xl">{f.icon}</span>
                  <span className="text-xs font-mono px-2 py-1 rounded border border-light-border dark:border-cosmos-border text-light-sub dark:text-cosmos-sub">
                    {f.tag}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-light-text dark:text-cosmos-text mb-2">{f.title}</h3>
                <p className="text-sm text-light-sub dark:text-cosmos-sub leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── POPULAR TOOLS ─────────────────────────────────────────────────── */}
      <section className="relative max-w-6xl mx-auto px-6 pb-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-2">Tools</p>
            <h2 className="font-display text-4xl font-bold text-light-text dark:text-cosmos-text">Popular picks</h2>
          </div>
          <Link href="/tools"
            className="text-sm font-mono text-accent hover:text-accentGlow transition-colors flex items-center gap-1 group pb-1">
            All {tools.length} tools
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map(t => <ToolCard key={t.slug} {...t} />)}
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="relative rounded-3xl overflow-hidden border border-accent/20">
          {/* layered bg */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-accent/5 to-transparent dark:from-accent/15 dark:via-accent/5 dark:to-transparent" />
          <div className="absolute inset-0" style={{
            backgroundImage: "radial-gradient(circle at 70% 50%, rgba(124,58,237,0.15) 0%, transparent 60%)",
          }} />
          <GridBg />

          <div className="relative z-10 text-center py-16 px-8">
            <p className="text-xs font-mono tracking-[0.2em] uppercase text-accent mb-4">get started</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-light-text dark:text-cosmos-text mb-4 leading-tight">
              Your browser is the<br />only tool you need.
            </h2>
            <p className="text-light-sub dark:text-cosmos-sub text-base mb-8 max-w-sm mx-auto">
              No account. No install. Just open a tool and start working.
            </p>
            <Link href="/tools"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-semibold
                hover:bg-accentGlow transition-all duration-200 hover:scale-[1.03]
                shadow-lg shadow-accent/20 hover:shadow-accent/40">
              Open the toolkit →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}