import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Format JSON in JavaScript – Free Online Tool",
  description: "Learn how to format and prettify JSON in JavaScript using JSON.stringify, online tools, and best practices for readable JSON output.",
  openGraph: { title: "How to Format JSON in JavaScript", description: "Learn how to format JSON in JavaScript with examples and a free online tool.", type: "article" },
};

export default function HowToFormatJSON() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full">Developer</span>
          <span className="text-xs font-mono text-light-sub dark:text-cosmos-sub">4 min read</span>
        </div>
        <h1 className="font-display text-5xl font-bold text-light-text dark:text-cosmos-text leading-tight mb-4">
          How to Format JSON in JavaScript
        </h1>
        <p className="text-lg text-light-sub dark:text-cosmos-sub leading-relaxed">
          Unformatted JSON is hard to read and debug. Here is how to format JSON properly in JavaScript and online tools that make it instant.
        </p>
      </div>

      <div className="rounded-2xl border border-accent/20 bg-accent/5 p-5 mb-10 flex items-start gap-4">
        <span className="text-2xl">⚡</span>
        <div>
          <p className="font-semibold text-light-text dark:text-cosmos-text text-sm mb-1">Format JSON instantly</p>
          <p className="text-sm text-light-sub dark:text-cosmos-sub">
            Use our free <Link href="/tools/json-formatter" className="text-accent hover:underline font-medium">JSON Formatter</Link> — paste your JSON and get a formatted output in one click.
          </p>
        </div>
      </div>

      <div className="space-y-10 text-light-text dark:text-cosmos-text">
        <section>
          <h2 className="font-display text-2xl font-bold mb-3">Using JSON.stringify in JavaScript</h2>
          <p className="text-light-sub dark:text-cosmos-sub leading-relaxed mb-4">
            The built-in <code className="font-mono text-accent">JSON.stringify()</code> method converts a JavaScript object to a JSON string. The third parameter controls indentation.
          </p>
          <pre className="bg-light-surface dark:bg-cosmos-surface border border-light-border dark:border-cosmos-border rounded-2xl p-5 text-sm font-mono text-light-sub dark:text-cosmos-sub overflow-auto">
{`const data = { name: "DevUtils", version: 2, active: true };

// Unformatted
JSON.stringify(data);
// {"name":"DevUtils","version":2,"active":true}

// Formatted with 2 spaces
JSON.stringify(data, null, 2);
// {
//   "name": "DevUtils",
//   "version": 2,
//   "active": true
// }`}
          </pre>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">Format JSON with 4 spaces</h2>
          <pre className="bg-light-surface dark:bg-cosmos-surface border border-light-border dark:border-cosmos-border rounded-2xl p-5 text-sm font-mono text-light-sub dark:text-cosmos-sub overflow-auto">
{`JSON.stringify(data, null, 4);`}
          </pre>
          <p className="text-light-sub dark:text-cosmos-sub leading-relaxed mt-3">
            Change the third argument to any number to control indentation. Most style guides recommend 2 or 4 spaces.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">Format JSON using tabs</h2>
          <pre className="bg-light-surface dark:bg-cosmos-surface border border-light-border dark:border-cosmos-border rounded-2xl p-5 text-sm font-mono text-light-sub dark:text-cosmos-sub overflow-auto">
{`JSON.stringify(data, null, "\t");`}
          </pre>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">Parse and format a JSON string</h2>
          <p className="text-light-sub dark:text-cosmos-sub leading-relaxed mb-4">
            If you have a JSON string and want to format it, parse it first then stringify it back.
          </p>
          <pre className="bg-light-surface dark:bg-cosmos-surface border border-light-border dark:border-cosmos-border rounded-2xl p-5 text-sm font-mono text-light-sub dark:text-cosmos-sub overflow-auto">
{`const jsonString = '{"name":"DevUtils","version":2}';
const parsed = JSON.parse(jsonString);
const formatted = JSON.stringify(parsed, null, 2);
console.log(formatted);`}
          </pre>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">Format JSON in Node.js</h2>
          <pre className="bg-light-surface dark:bg-cosmos-surface border border-light-border dark:border-cosmos-border rounded-2xl p-5 text-sm font-mono text-light-sub dark:text-cosmos-sub overflow-auto">
{`const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
fs.writeFileSync('data-formatted.json', JSON.stringify(data, null, 2));`}
          </pre>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">Common formatting mistakes</h2>
          <div className="space-y-3">
            {[
              { mistake: "Trailing commas", fix: "JSON does not allow trailing commas — remove them before formatting" },
              { mistake: "Single quotes", fix: "JSON requires double quotes for all keys and string values" },
              { mistake: "Undefined values", fix: "JSON.stringify removes keys with undefined values silently" },
            ].map(item => (
              <div key={item.mistake} className="p-4 rounded-xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card">
                <p className="font-semibold text-sm text-light-text dark:text-cosmos-text mb-1">{item.mistake}</p>
                <p className="text-xs text-light-sub dark:text-cosmos-sub">{item.fix}</p>
              </div>
            ))}
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