import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is a URL Slug and Why Does It Matter for SEO",
  description: "Learn what a URL slug is, how to create SEO-friendly slugs, best practices, and how to generate slugs automatically for free.",
  openGraph: { title: "What is a URL Slug and Why Does It Matter", description: "Learn what URL slugs are and how to create SEO-friendly ones.", type: "article" },
};

export default function WhatIsSlug() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full">Web</span>
          <span className="text-xs font-mono text-light-sub dark:text-cosmos-sub">4 min read</span>
        </div>
        <h1 className="font-display text-5xl font-bold text-light-text dark:text-cosmos-text leading-tight mb-4">
          What is a URL Slug and Why Does It Matter for SEO
        </h1>
        <p className="text-lg text-light-sub dark:text-cosmos-sub leading-relaxed">
          URL slugs are the human-readable part of a web address. Getting them right impacts your SEO, click-through rates, and user experience.
        </p>
      </div>

      <div className="rounded-2xl border border-accent/20 bg-accent/5 p-5 mb-10 flex items-start gap-4">
        <span className="text-2xl">🔗</span>
        <div>
          <p className="font-semibold text-light-text dark:text-cosmos-text text-sm mb-1">Generate slugs instantly</p>
          <p className="text-sm text-light-sub dark:text-cosmos-sub">
            Use our free <Link href="/tools/slug-generator" className="text-accent hover:underline font-medium">Slug Generator</Link> — converts any text to a URL-safe slug instantly.
          </p>
        </div>
      </div>

      <div className="space-y-10 text-light-text dark:text-cosmos-text">
        <section>
          <h2 className="font-display text-2xl font-bold mb-3">What is a URL slug?</h2>
          <p className="text-light-sub dark:text-cosmos-sub leading-relaxed mb-4">
            A slug is the part of a URL that identifies a specific page in a human-readable format. It comes after the domain name and any subdirectories.
          </p>
          <div className="p-4 rounded-xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card font-mono text-sm">
            <p className="text-light-sub dark:text-cosmos-sub">https://devutilsonline.in/blog/<span className="text-accent font-bold">what-is-a-url-slug</span></p>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">Good vs bad slugs</h2>
          <div className="space-y-3">
            {[
              { good: "what-is-a-url-slug", bad: "What Is A URL Slug?", reason: "Lowercase, hyphens, no special chars" },
              { good: "json-formatter-online", bad: "post?id=12345", reason: "Descriptive, keyword-rich" },
              { good: "password-security-guide", bad: "page1/article/2024/03/14", reason: "Short and meaningful" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-light-border dark:border-cosmos-border overflow-hidden">
                <div className="grid grid-cols-2 divide-x divide-light-border dark:divide-cosmos-border">
                  <div className="p-3">
                    <p className="text-xs font-mono text-accent mb-1">✓ Good</p>
                    <code className="text-xs font-mono text-light-sub dark:text-cosmos-sub">{item.good}</code>
                  </div>
                  <div className="p-3">
                    <p className="text-xs font-mono text-red-400 mb-1">✗ Bad</p>
                    <code className="text-xs font-mono text-light-sub dark:text-cosmos-sub">{item.bad}</code>
                  </div>
                </div>
                <div className="px-3 py-2 bg-light-surface dark:bg-cosmos-surface border-t border-light-border dark:border-cosmos-border">
                  <p className="text-xs text-light-sub dark:text-cosmos-sub">{item.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">Slug best practices</h2>
          <ul className="space-y-2 text-light-sub dark:text-cosmos-sub">
            {[
              "Use lowercase letters only",
              "Replace spaces with hyphens",
              "Remove special characters and punctuation",
              "Keep it short — under 5 words ideally",
              "Include your target keyword",
              "Never use underscores — use hyphens instead",
              "Avoid stop words like 'the', 'a', 'and'",
            ].map(item => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">Generate slugs in JavaScript</h2>
          <pre className="bg-light-surface dark:bg-cosmos-surface border border-light-border dark:border-cosmos-border rounded-2xl p-5 text-sm font-mono text-light-sub dark:text-cosmos-sub overflow-auto">
{`function generateSlug(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\\w\\s-]/g, '')
    .replace(/[\\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

generateSlug("What is a URL Slug?")
// "what-is-a-url-slug"`}
          </pre>
        </section>

        <section className="rounded-2xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card p-6">
          <h2 className="font-display text-xl font-bold mb-4 text-light-text dark:text-cosmos-text">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/tools/slug-generator", label: "Slug Generator", desc: "Convert text to URL slugs" },
              { href: "/tools/case-converter", label: "Case Converter", desc: "Convert text between cases" },
              { href: "/tools/word-counter", label: "Word Counter", desc: "Count words and characters" },
              { href: "/tools/html-minifier", label: "HTML Minifier", desc: "Minify HTML code" },
            ].map(t => (
              <Link key={t.href} href={t.href} className="flex items-center gap-3 p-3 rounded-xl border border-light-border dark:border-cosmos-border hover:border-accent transition-colors group">
                <div>
                  <p className="text-sm font-semibold text-light-text dark:text-cosmos-text group-hover:text-accent transition-colors">{t.label}</p>
                  <p className="text-xs text-light-sub dark:text-cosmos-sub">{t.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}