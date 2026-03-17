"use client";
import Link from "next/link";
import { tools, categories } from "@/lib/tools";
import { useEffect, useRef, useState } from "react";

// ─── Animated counter ──────────────────────────────────────────────────────
function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
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
  return <span ref={ref}>{count}{suffix}</span>;
}

// ─── Marquee ───────────────────────────────────────────────────────────────
function Marquee() {
  const items = tools.map(t => t.name);
  return (
    <div className="relative overflow-hidden py-3 border-y border-light-border dark:border-cosmos-border">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10
        bg-gradient-to-r from-light-bg dark:from-[#04040F] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10
        bg-gradient-to-l from-light-bg dark:from-[#04040F] to-transparent" />
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-8 text-[11px] font-mono uppercase tracking-[0.15em] text-light-sub dark:text-cosmos-sub flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-accent inline-block opacity-50" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Dot grid bg ───────────────────────────────────────────────────────────
function DotGrid({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage: "radial-gradient(circle, rgba(167,139,250,0.12) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }} />
  );
}

// ─── Category meta ─────────────────────────────────────────────────────────
const categoryMeta: Record<string, { emoji: string; color: string; glow: string }> = {
  Developer: { emoji: "⌨️", color: "text-violet-400", glow: "rgba(139,92,246,0.15)" },
  Security:  { emoji: "🔐", color: "text-emerald-400", glow: "rgba(52,211,153,0.15)" },
  Web:       { emoji: "🌐", color: "text-blue-400",    glow: "rgba(96,165,250,0.15)" },
  Text:      { emoji: "📝", color: "text-amber-400",   glow: "rgba(251,191,36,0.15)" },
};

// ─── All 18 tools grouped by category ─────────────────────────────────────
function AllToolsGrid() {
  const grouped = categories.map(cat => ({
    name: cat,
    tools: tools.filter(t => t.category === cat),
    meta: categoryMeta[cat] ?? { emoji: "🛠", color: "text-accent", glow: "rgba(167,139,250,0.15)" },
  }));

  return (
    <div className="space-y-12">
      {grouped.map(group => (
        <div key={group.name}>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xl">{group.meta.emoji}</span>
            <h3 className={`font-display font-bold text-base ${group.meta.color}`}>{group.name}</h3>
            <span className="text-[11px] font-mono text-light-sub dark:text-cosmos-sub px-2 py-0.5 rounded-full border border-light-border dark:border-cosmos-border">
              {group.tools.length} tools
            </span>
            <div className="flex-1 h-px bg-light-border dark:bg-cosmos-border" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {group.tools.map(t => (
              <Link key={t.slug} href={`/tools/${t.slug}`}
                className="group relative p-4 rounded-xl border border-light-border dark:border-cosmos-border
                  bg-light-card dark:bg-cosmos-card overflow-hidden
                  hover:border-accent/40 transition-all duration-200 hover:-translate-y-0.5
                  hover:shadow-lg hover:shadow-accent/5">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                  style={{ background: `radial-gradient(ellipse at 50% 0%, ${group.meta.glow}, transparent 70%)` }} />
                <div className="relative z-10">
                  <p className="font-display font-semibold text-sm text-light-text dark:text-cosmos-text mb-1 group-hover:text-accent transition-colors duration-200">
                    {t.name}
                  </p>
                  <p className="text-[11px] text-light-sub dark:text-cosmos-sub leading-snug line-clamp-2">
                    {t.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Live preview cards ────────────────────────────────────────────────────
function LivePreviewStrip() {
  const previews = [
    {
      label: "JSON Formatter",
      slug: "json-formatter",
      content: (
        <div className="font-mono text-[11px] leading-5">
          <span className="text-indigo-400">{"{"}</span><br />
          <span className="pl-3 text-violet-400">"id"</span><span className="text-light-sub dark:text-cosmos-sub">: </span>
          <span className="text-amber-400">42</span><span className="text-light-sub dark:text-cosmos-sub">,</span><br />
          <span className="pl-3 text-violet-400">"name"</span><span className="text-light-sub dark:text-cosmos-sub">: </span>
          <span className="text-emerald-400">"devutils"</span><span className="text-light-sub dark:text-cosmos-sub">,</span><br />
          <span className="pl-3 text-violet-400">"free"</span><span className="text-light-sub dark:text-cosmos-sub">: </span>
          <span className="text-emerald-400">true</span><br />
          <span className="text-indigo-400">{"}"}</span>
          <div className="mt-2 pt-2 border-t border-light-border dark:border-cosmos-border text-emerald-400 text-[10px]">
            ✓ Valid · 3 keys · formatted
          </div>
        </div>
      ),
    },
    {
      label: "Password Generator",
      slug: "password-generator",
      content: (
        <div className="font-mono text-[11px] space-y-2">
          <div className="px-2 py-1.5 rounded bg-light-bg dark:bg-[#080820] border border-light-border dark:border-cosmos-border tracking-widest text-accent text-[10px]">
            Xk#9mP@vL2$nQr
          </div>
          <div className="grid grid-cols-2 gap-1 text-[10px] text-light-sub dark:text-cosmos-sub">
            <span>Entropy: <span className="text-emerald-400">94 bits</span></span>
            <span>Crack: <span className="text-emerald-400">∞ years</span></span>
          </div>
          <div className="w-full h-1 rounded-full bg-light-border dark:bg-cosmos-border overflow-hidden">
            <div className="h-full w-5/6 rounded-full bg-gradient-to-r from-emerald-500 to-green-400" />
          </div>
        </div>
      ),
    },
    {
      label: "Base64 Encoder",
      slug: "base64-encoder",
      content: (
        <div className="font-mono text-[11px] space-y-2">
          <div>
            <div className="text-[10px] text-light-sub dark:text-cosmos-sub mb-1">Input</div>
            <div className="text-light-text dark:text-cosmos-text">Hello, DevUtils!</div>
          </div>
          <div className="h-px bg-light-border dark:bg-cosmos-border" />
          <div>
            <div className="text-[10px] text-light-sub dark:text-cosmos-sub mb-1">Output</div>
            <div className="text-accent break-all text-[10px]">SGVsbG8sIERldlV0aWxzIQ==</div>
          </div>
        </div>
      ),
    },
    {
      label: "UUID Generator",
      slug: "uuid-generator",
      content: (
        <div className="font-mono space-y-1.5">
          {["550e8400-e29b-41d4-a716-446655440000", "6ba7b810-9dad-11d1-80b4-00c04fd430c8"].map((u, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-[10px] text-light-sub dark:text-cosmos-sub w-3">{i + 1}.</span>
              <span className="text-accent/80 text-[10px] break-all">{u}</span>
            </div>
          ))}
          <div className="text-[10px] text-light-sub dark:text-cosmos-sub pt-1.5 border-t border-light-border dark:border-cosmos-border">
            v4 · cryptographically random
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {previews.map(p => (
        <Link key={p.slug} href={`/tools/${p.slug}`}
          className="group relative rounded-2xl border border-light-border dark:border-cosmos-border
            bg-light-card dark:bg-cosmos-card overflow-hidden
            hover:border-accent/40 transition-all duration-300 hover:-translate-y-1
            hover:shadow-xl hover:shadow-accent/10">
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-light-border dark:border-cosmos-border
            bg-light-bg/60 dark:bg-[#080820]/60">
            <span className="w-2 h-2 rounded-full bg-red-400/60" />
            <span className="w-2 h-2 rounded-full bg-yellow-400/60" />
            <span className="w-2 h-2 rounded-full bg-green-400/60" />
            <span className="ml-2 text-[10px] font-mono text-light-sub dark:text-cosmos-sub">{p.label.toLowerCase()}</span>
          </div>
          <div className="p-4 min-h-[100px]">{p.content}</div>
          <div className="px-4 pb-3 text-[10px] font-mono text-accent/70 group-hover:text-accent
            flex items-center gap-1 transition-colors duration-200">
            <span>Open tool</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="relative">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <DotGrid className="opacity-30 dark:opacity-100" />
        <div className="absolute -top-40 left-1/4 w-[700px] h-[700px] rounded-full blur-[140px]
          bg-violet-400/[0.04] dark:bg-violet-600/[0.12] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px]
          bg-indigo-400/[0.03] dark:bg-indigo-500/[0.08] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full py-28 text-center">
          {/* pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
            border border-accent/25 bg-accent/5 text-xs font-mono text-accent mb-10 tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            18 tools · zero sign-up · 100% browser-side
          </div>

          {/* headline */}
          <h1 className="font-display font-bold tracking-tight mb-6 mx-auto max-w-5xl">
            <span className="block text-5xl sm:text-6xl xl:text-8xl text-light-text dark:text-cosmos-text leading-[1.2]">
              Every dev tool
            </span>
            <span className="block text-5xl sm:text-6xl xl:text-8xl animate-gradient-text leading-[1.3] mt-1 pb-4">
              you actually need.
            </span>
          </h1>

          <p className="text-light-sub dark:text-cosmos-sub text-lg sm:text-xl max-w-xl mx-auto mb-12 leading-relaxed">
            Format JSON, generate UUIDs, encode Base64, check passwords — all free,
            all instant, all private. No server ever sees your data.
          </p>

          <div className="flex gap-3 justify-center flex-wrap mb-16">
            <Link href="/tools"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl
                bg-accent text-white font-semibold text-sm
                hover:bg-accentGlow transition-all duration-200 hover:scale-[1.04]
                shadow-lg shadow-accent/20 hover:shadow-accent/35">
              Browse all 18 tools
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
            <Link href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                border border-light-border dark:border-cosmos-border
                text-sm font-semibold text-light-text dark:text-cosmos-text
                hover:border-accent/50 hover:text-accent transition-all duration-200">
              How it works
            </Link>
          </div>

          {/* stats pill */}
          <div className="inline-flex items-center divide-x divide-light-border dark:divide-cosmos-border
            rounded-2xl border border-light-border dark:border-cosmos-border
            bg-light-card/60 dark:bg-cosmos-card/60 backdrop-blur-sm overflow-hidden">
            {[
              { n: 18, label: "Free tools",       suffix: "" },
              { n: 4,  label: "Categories",        suffix: "" },
              { n: 0,  label: "Data ever sent",    suffix: "kb" },
              { n: 0,  label: "Sign-ups required", suffix: "" },
            ].map((s, i) => (
              <div key={i} className="px-6 py-3 text-center">
                <p className="font-display text-xl font-bold text-accent tabular-nums">
                  <AnimatedNumber target={s.n} suffix={s.suffix} />
                </p>
                <p className="text-[10px] font-mono text-light-sub dark:text-cosmos-sub mt-0.5 tracking-wide whitespace-nowrap">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARQUEE ────────────────────────────────────────────────────────── */}
      <Marquee />

      {/* ── LIVE PREVIEW STRIP ────────────────────────────────────────────── */}
      <section className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-accent mb-3">See it in action</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-light-text dark:text-cosmos-text">
            Tools that just work.
          </h2>
          <p className="text-light-sub dark:text-cosmos-sub text-base mt-3 max-w-md mx-auto">
            Click any card to open the real tool — instant, no loading.
          </p>
        </div>
        <LivePreviewStrip />
      </section>

      {/* ── ALL 18 TOOLS ──────────────────────────────────────────────────── */}
      <section className="relative max-w-6xl mx-auto px-6 pb-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-accent mb-2">Complete toolkit</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-light-text dark:text-cosmos-text">
              All 18 tools
            </h2>
          </div>
          <Link href="/tools"
            className="text-sm font-mono text-accent hover:text-accentGlow transition-colors flex items-center gap-1 group">
            Filter & search
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>
        <AllToolsGrid />
      </section>

      {/* ── WHY DEVUTILS ──────────────────────────────────────────────────── */}
      <section className="relative border-y border-light-border dark:border-cosmos-border">
        <DotGrid className="opacity-20 dark:opacity-40" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-14">
            <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-accent mb-3">Why DevUtils</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-light-text dark:text-cosmos-text">Built different.</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: "⚡", title: "Instant results", desc: "Every tool responds as you type. No buttons, no spinners.", tag: "< 1ms", glow: "rgba(251,191,36,0.12)", border: "hover:border-amber-400/30" },
              { icon: "🔒", title: "Zero data sent",  desc: "100% client-side. Your data never leaves your browser. Ever.", tag: "0 kb", glow: "rgba(52,211,153,0.12)", border: "hover:border-emerald-400/30" },
              { icon: "🧰", title: "18 tools, one tab", desc: "Stop juggling sites. Everything you need is right here.", tag: "18 tools", glow: "rgba(167,139,250,0.12)", border: "hover:border-violet-400/30" },
            ].map(f => (
              <div key={f.title}
                className={`group relative p-7 rounded-2xl border border-light-border dark:border-cosmos-border
                  bg-light-card dark:bg-cosmos-card overflow-hidden transition-all duration-300
                  ${f.border} hover:-translate-y-1 hover:shadow-xl`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  style={{ background: `radial-gradient(ellipse at 50% 0%, ${f.glow}, transparent 70%)` }} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <span className="text-3xl">{f.icon}</span>
                    <span className="text-[11px] font-mono px-2 py-1 rounded border border-light-border dark:border-cosmos-border text-light-sub dark:text-cosmos-sub">{f.tag}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-light-text dark:text-cosmos-text mb-2">{f.title}</h3>
                  <p className="text-sm text-light-sub dark:text-cosmos-sub leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="relative rounded-3xl overflow-hidden border border-accent/20">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-indigo-500/5 dark:from-accent/15 dark:via-transparent dark:to-indigo-500/8" />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(124,58,237,0.1) 0%, transparent 60%)" }} />
          <DotGrid className="opacity-20 dark:opacity-50" />
          <div className="relative z-10 text-center py-20 px-8">
            <p className="text-[11px] font-mono tracking-[0.2em] uppercase text-accent mb-5">get started now</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-light-text dark:text-cosmos-text mb-4 leading-tight">
              Your browser is already<br />the only tool you need.
            </h2>
            <p className="text-light-sub dark:text-cosmos-sub text-base mb-10 max-w-sm mx-auto">
              No install. No account. No nonsense. Just open and work.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link href="/tools"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-semibold
                  hover:bg-accentGlow transition-all duration-200 hover:scale-[1.04]
                  shadow-lg shadow-accent/25 hover:shadow-accent/40">
                Open the toolkit →
              </Link>
              <Link href="/blog"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl
                  border border-light-border dark:border-cosmos-border
                  text-sm font-semibold text-light-text dark:text-cosmos-text
                  hover:border-accent/50 hover:text-accent transition-all duration-200">
                Read the blog
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}