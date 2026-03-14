import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JSON Formatting Guide – How to Format & Validate JSON",
  description:
    "Learn what JSON is, how to format it correctly, common syntax errors, and how to validate JSON with real examples. Includes a free online JSON formatter tool.",
  openGraph: {
    title: "JSON Formatting Guide",
    description: "Learn how to format and validate JSON with examples and best practices.",
    type: "article",
  },
};

export default function JsonFormatGuide() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full">Developer</span>
          <span className="text-xs font-mono text-light-sub dark:text-cosmos-sub">5 min read</span>
        </div>
        <h1 className="font-display text-5xl font-bold text-light-text dark:text-cosmos-text leading-tight mb-4">
          JSON Formatting Guide
        </h1>
        <p className="text-lg text-light-sub dark:text-cosmos-sub leading-relaxed">
          JSON is the universal language of data exchange on the web. This guide covers everything you need to know — from basic syntax to common mistakes and how to fix them.
        </p>
      </div>

      <div className="rounded-2xl border border-accent/20 bg-accent/5 p-5 mb-10 flex items-start gap-4">
        <span className="text-2xl">⚡</span>
        <div>
          <p className="font-semibold text-light-text dark:text-cosmos-text text-sm mb-1">Try it instantly</p>
          <p className="text-sm text-light-sub dark:text-cosmos-sub">
            Use our free{" "}
            <Link href="/tools/json-formatter" className="text-accent hover:underline font-medium">
              JSON Formatter
            </Link>{" "}
            and{" "}
            <Link href="/tools/json-validator" className="text-accent hover:underline font-medium">
              JSON Validator
            </Link>{" "}
            — no sign-up, runs entirely in your browser.
          </p>
        </div>
      </div>

      <div className="prose-content space-y-10 text-light-text dark:text-cosmos-text">

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">What is JSON?</h2>
          <p className="text-light-sub dark:text-cosmos-sub leading-relaxed mb-4">
            JSON (JavaScript Object Notation) is a lightweight, text-based data format used to store and exchange structured data. Despite its name, JSON is language-independent and is supported by virtually every programming language.
          </p>
          <p className="text-light-sub dark:text-cosmos-sub leading-relaxed">
            It was created by Douglas Crockford in the early 2000s and has since become the dominant format for REST APIs, configuration files, and data storage.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">JSON Syntax Rules</h2>
          <p className="text-light-sub dark:text-cosmos-sub leading-relaxed mb-4">
            JSON has strict syntax rules. Violating any one of them will cause a parse error:
          </p>
          <ul className="space-y-2 text-light-sub dark:text-cosmos-sub">
            {[
              "Keys must be strings wrapped in double quotes",
              "String values must use double quotes, not single quotes",
              "No trailing commas after the last item",
              "No comments are allowed in standard JSON",
              "Numbers cannot have leading zeros",
              "true, false, and null are lowercase keywords",
            ].map(r => (
              <li key={r} className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">Valid JSON Example</h2>
          <pre className="bg-light-surface dark:bg-cosmos-surface border border-light-border dark:border-cosmos-border rounded-2xl p-5 text-sm font-mono overflow-auto text-light-text dark:text-cosmos-text">
{`{
  "name": "DevUtils",
  "version": 2,
  "active": true,
  "tags": ["developer", "tools", "free"],
  "author": {
    "name": "Dev Team",
    "email": "hello@devutils.app"
  },
  "metadata": null
}`}
          </pre>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">Common JSON Errors</h2>
          <div className="space-y-4">
            {[
              {
                title: "Trailing comma",
                wrong: `{ "name": "Dev", "version": 1, }`,
                right: `{ "name": "Dev", "version": 1 }`,
              },
              {
                title: "Single quotes",
                wrong: `{ 'name': 'Dev' }`,
                right: `{ "name": "Dev" }`,
              },
              {
                title: "Unquoted key",
                wrong: `{ name: "Dev" }`,
                right: `{ "name": "Dev" }`,
              },
            ].map(e => (
              <div key={e.title} className="rounded-xl border border-light-border dark:border-cosmos-border overflow-hidden">
                <div className="px-4 py-2 bg-light-surface dark:bg-cosmos-surface border-b border-light-border dark:border-cosmos-border">
                  <p className="text-xs font-mono font-bold text-light-text dark:text-cosmos-text">{e.title}</p>
                </div>
                <div className="grid grid-cols-2 divide-x divide-light-border dark:divide-cosmos-border">
                  <div className="p-4">
                    <p className="text-xs font-mono text-red-400 mb-2">✗ Wrong</p>
                    <code className="text-xs font-mono text-light-sub dark:text-cosmos-sub">{e.wrong}</code>
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-mono text-accent mb-2">✓ Correct</p>
                    <code className="text-xs font-mono text-light-sub dark:text-cosmos-sub">{e.right}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">JSON Data Types</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { type: "String", example: `"hello world"` },
              { type: "Number", example: `42 or 3.14` },
              { type: "Boolean", example: `true or false` },
              { type: "Null", example: `null` },
              { type: "Array", example: `[1, 2, 3]` },
              { type: "Object", example: `{ "key": "value" }` },
            ].map(d => (
              <div key={d.type} className="p-4 rounded-xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card">
                <p className="text-xs font-mono text-accent mb-1">{d.type}</p>
                <code className="text-sm font-mono text-light-sub dark:text-cosmos-sub">{d.example}</code>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">How to Format JSON in Different Languages</h2>
          <div className="space-y-4">
            {[
              { lang: "JavaScript", code: `JSON.stringify(data, null, 2);` },
              { lang: "Python", code: `import json\njson.dumps(data, indent=2)` },
              { lang: "Go", code: `json.MarshalIndent(data, "", "  ")` },
            ].map(l => (
              <div key={l.lang}>
                <p className="text-xs font-mono text-accent uppercase tracking-widest mb-2">{l.lang}</p>
                <pre className="bg-light-surface dark:bg-cosmos-surface border border-light-border dark:border-cosmos-border rounded-xl p-4 text-sm font-mono text-light-sub dark:text-cosmos-sub overflow-auto">
                  {l.code}
                </pre>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">JSON vs Other Formats</h2>
          <div className="overflow-auto rounded-xl border border-light-border dark:border-cosmos-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-light-border dark:border-cosmos-border bg-light-surface dark:bg-cosmos-surface">
                  <th className="text-left px-4 py-3 font-mono text-xs text-accent">Format</th>
                  <th className="text-left px-4 py-3 font-mono text-xs text-accent">Readable</th>
                  <th className="text-left px-4 py-3 font-mono text-xs text-accent">Comments</th>
                  <th className="text-left px-4 py-3 font-mono text-xs text-accent">Best For</th>
                </tr>
              </thead>
              <tbody className="text-light-sub dark:text-cosmos-sub divide-y divide-light-border dark:divide-cosmos-border">
                {[
                  { f: "JSON", r: "✓", c: "✗", b: "APIs, data exchange" },
                  { f: "YAML", r: "✓✓", c: "✓", b: "Config files" },
                  { f: "XML", r: "~", c: "✓", b: "Legacy systems" },
                  { f: "TOML", r: "✓✓", c: "✓", b: "App config" },
                ].map(row => (
                  <tr key={row.f}>
                    <td className="px-4 py-3 font-mono font-bold text-light-text dark:text-cosmos-text">{row.f}</td>
                    <td className="px-4 py-3">{row.r}</td>
                    <td className="px-4 py-3">{row.c}</td>
                    <td className="px-4 py-3">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-2xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card p-6">
          <h2 className="font-display text-xl font-bold mb-4 text-light-text dark:text-cosmos-text">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/tools/json-formatter", label: "JSON Formatter", desc: "Prettify JSON instantly" },
              { href: "/tools/json-validator", label: "JSON Validator", desc: "Check JSON syntax" },
              { href: "/tools/jwt-decoder", label: "JWT Decoder", desc: "Decode JWT tokens" },
              { href: "/tools/base64-decoder", label: "Base64 Decoder", desc: "Decode Base64 strings" },
            ].map(t => (
              <Link key={t.href} href={t.href}
                className="flex items-center gap-3 p-3 rounded-xl border border-light-border dark:border-cosmos-border hover:border-accent transition-colors group">
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