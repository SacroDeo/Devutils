import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is Regex – Regular Expressions Explained for Beginners",
  description: "Learn what regular expressions are, how regex syntax works, common patterns, and how to test regex online for free with examples.",
  openGraph: { title: "What is Regex – Regular Expressions Explained", description: "Learn regex syntax, common patterns and how to test them online.", type: "article" },
};

export default function WhatIsRegex() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full">Developer</span>
          <span className="text-xs font-mono text-light-sub dark:text-cosmos-sub">6 min read</span>
        </div>
        <h1 className="font-display text-5xl font-bold text-light-text dark:text-cosmos-text leading-tight mb-4">
          What is Regex — Regular Expressions Explained
        </h1>
        <p className="text-lg text-light-sub dark:text-cosmos-sub leading-relaxed">
          Regular expressions look intimidating but they are one of the most powerful tools a developer can learn. Here is everything you need to know.
        </p>
      </div>

      <div className="rounded-2xl border border-accent/20 bg-accent/5 p-5 mb-10 flex items-start gap-4">
        <span className="text-2xl">.*</span>
        <div>
          <p className="font-semibold text-light-text dark:text-cosmos-text text-sm mb-1">Test regex patterns instantly</p>
          <p className="text-sm text-light-sub dark:text-cosmos-sub">
            Use our free <Link href="/tools/regex-tester" className="text-accent hover:underline font-medium">Regex Tester</Link> — live match highlighting as you type.
          </p>
        </div>
      </div>

      <div className="space-y-10 text-light-text dark:text-cosmos-text">
        <section>
          <h2 className="font-display text-2xl font-bold mb-3">What is a regular expression?</h2>
          <p className="text-light-sub dark:text-cosmos-sub leading-relaxed">
            A regular expression (regex) is a sequence of characters that defines a search pattern. It is used to match, find, replace, or validate strings in text.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">Basic regex syntax</h2>
          <div className="space-y-2">
            {[
              { pattern: ".", desc: "Match any single character except newline" },
              { pattern: "*", desc: "Match 0 or more of the preceding character" },
              { pattern: "+", desc: "Match 1 or more of the preceding character" },
              { pattern: "?", desc: "Match 0 or 1 of the preceding character" },
              { pattern: "^", desc: "Match start of string" },
              { pattern: "$", desc: "Match end of string" },
              { pattern: "\\d", desc: "Match any digit (0-9)" },
              { pattern: "\\w", desc: "Match any word character (a-z, A-Z, 0-9, _)" },
              { pattern: "\\s", desc: "Match any whitespace character" },
              { pattern: "[abc]", desc: "Match any character in the set" },
              { pattern: "[^abc]", desc: "Match any character NOT in the set" },
            ].map(item => (
              <div key={item.pattern} className="flex items-center gap-4 p-3 rounded-xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card">
                <code className="font-mono text-accent text-sm w-20 flex-shrink-0">{item.pattern}</code>
                <p className="text-sm text-light-sub dark:text-cosmos-sub">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">Common regex patterns</h2>
          <div className="space-y-3">
            {[
              { label: "Email validation", pattern: `^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$` },
              { label: "Phone number (US)", pattern: `^\\+?1?[-.\\s]?\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$` },
              { label: "URL", pattern: `https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}` },
              { label: "Digits only", pattern: `^\\d+$` },
              { label: "Alphanumeric", pattern: `^[a-zA-Z0-9]+$` },
              { label: "Strong password", pattern: `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$` },
            ].map(item => (
              <div key={item.label} className="p-4 rounded-xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card">
                <p className="text-xs font-mono text-accent mb-2">{item.label}</p>
                <code className="text-xs font-mono text-light-sub dark:text-cosmos-sub break-all">{item.pattern}</code>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">Regex in JavaScript</h2>
          <pre className="bg-light-surface dark:bg-cosmos-surface border border-light-border dark:border-cosmos-border rounded-2xl p-5 text-sm font-mono text-light-sub dark:text-cosmos-sub overflow-auto">
{`// Test if string matches pattern
/^\\d+$/.test("12345")  // true
/^\\d+$/.test("abc")    // false

// Find matches
"hello world".match(/\\w+/g)
// ["hello", "world"]

// Replace
"hello world".replace(/world/, "regex")
// "hello regex"`}
          </pre>
        </section>

        <section className="rounded-2xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card p-6">
          <h2 className="font-display text-xl font-bold mb-4 text-light-text dark:text-cosmos-text">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/tools/regex-tester", label: "Regex Tester", desc: "Test patterns with live matching" },
              { href: "/tools/json-validator", label: "JSON Validator", desc: "Validate JSON syntax" },
              { href: "/tools/slug-generator", label: "Slug Generator", desc: "Convert text to URL slugs" },
              { href: "/tools/case-converter", label: "Case Converter", desc: "Convert text between cases" },
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