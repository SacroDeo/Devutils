"use client";
import { useState } from "react";
import { ToolLayout } from "../ToolLayout";
import { formatJSON } from "@/lib/utils/json";
import Link from "next/link";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handle(val: string) {
    setInput(val);
    const { result, error } = formatJSON(val);
    setOutput(result);
    setError(error);
  }

  function reset() { setInput(""); setOutput(""); setError(null); }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-2">
        <Link href="/tools" className="text-xs font-mono text-light-sub dark:text-cosmos-sub hover:text-accent transition-colors">
          ← All Tools
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="font-display text-4xl font-bold text-light-text dark:text-cosmos-text mb-3">
          JSON Formatter
        </h1>
        <p className="text-light-sub dark:text-cosmos-sub text-base">
          Prettify and format JSON with proper indentation.
        </p>
      </div>

      {/* Tool */}
      <div className="rounded-2xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card p-6 space-y-5 mb-10">
        <textarea
          rows={6}
          value={input}
          onChange={e => handle(e.target.value)}
          placeholder='{"key": "value"}'
          className="w-full rounded-lg border border-light-border dark:border-cosmos-border bg-light-surface dark:bg-cosmos-surface p-3 text-sm font-mono resize-y focus:border-accent transition-colors text-light-text dark:text-cosmos-text"
        />
        {error && <p className="text-red-400 text-xs font-mono">{error}</p>}
        {output && (
          <pre className="w-full rounded-lg border border-light-border dark:border-cosmos-border bg-light-surface dark:bg-cosmos-surface p-3 text-sm font-mono overflow-auto max-h-80 whitespace-pre-wrap text-light-text dark:text-cosmos-text">
            {output}
          </pre>
        )}
        <div className="flex gap-2">
          {output && (
            <button
              onClick={() => navigator.clipboard.writeText(output)}
              className="px-4 py-2 text-sm font-mono rounded-xl border border-light-border dark:border-cosmos-border hover:border-accent hover:text-accent transition-colors text-light-sub dark:text-cosmos-sub">
              Copy
            </button>
          )}
          <button
            onClick={reset}
            className="px-4 py-2 text-sm font-mono rounded-xl border border-light-border dark:border-cosmos-border hover:border-red-400 hover:text-red-400 transition-colors text-light-sub dark:text-cosmos-sub">
            Reset
          </button>
        </div>
      </div>

      {/* SEO Content */}
      <div className="space-y-10 text-light-text dark:text-cosmos-text">

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">Free JSON Formatter Online</h2>
          <p className="text-light-sub dark:text-cosmos-sub leading-relaxed">
            This tool helps you format and beautify JSON data instantly. It fixes indentation and makes JSON readable for developers.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-4">How to use</h2>
          <div className="space-y-3">
            {[
              { step: "01", text: "Paste your JSON into the input box above" },
              { step: "02", text: "The formatter automatically prettifies it as you type" },
              { step: "03", text: "Click Copy to copy the formatted result" },
            ].map(s => (
              <div key={s.step} className="flex gap-4 p-4 rounded-xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card">
                <span className="text-accent font-mono font-bold text-sm flex-shrink-0">{s.step}</span>
                <p className="text-sm text-light-sub dark:text-cosmos-sub">{s.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-4">Example</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-light-border dark:border-cosmos-border overflow-hidden">
              <div className="px-4 py-2 bg-light-surface dark:bg-cosmos-surface border-b border-light-border dark:border-cosmos-border">
                <p className="text-xs font-mono text-red-400">Input (unformatted)</p>
              </div>
              <pre className="p-4 text-xs font-mono text-light-sub dark:text-cosmos-sub overflow-auto">
                {`{"name":"DevUtils","version":2,"active":true}`}
              </pre>
            </div>
            <div className="rounded-xl border border-light-border dark:border-cosmos-border overflow-hidden">
              <div className="px-4 py-2 bg-light-surface dark:bg-cosmos-surface border-b border-light-border dark:border-cosmos-border">
                <p className="text-xs font-mono text-accent">Output (formatted)</p>
              </div>
              <pre className="p-4 text-xs font-mono text-light-sub dark:text-cosmos-sub overflow-auto">
{`{
  "name": "DevUtils",
  "version": 2,
  "active": true
}`}
              </pre>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-3">
            {[
              {
                q: "What is JSON formatting?",
                a: "JSON formatting is the process of adding proper indentation and line breaks to JSON data to make it human-readable. Unformatted JSON is valid but hard to read and debug.",
              },
              {
                q: "Is this tool free?",
                a: "Yes — completely free. No account required, no usage limits, no hidden costs.",
              },
              {
                q: "Does it store my data?",
                a: "No. This tool runs entirely in your browser. Your JSON data is never sent to any server and is not stored anywhere.",
              },
            ].map(faq => (
              <div key={faq.q} className="p-5 rounded-xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card">
                <p className="font-semibold text-light-text dark:text-cosmos-text text-sm mb-2">{faq.q}</p>
                <p className="text-sm text-light-sub dark:text-cosmos-sub leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card p-6">
          <h2 className="font-display text-xl font-bold mb-4 text-light-text dark:text-cosmos-text">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/tools/json-validator", label: "JSON Validator", desc: "Validate JSON syntax and structure" },
              { href: "/tools/base64-encoder", label: "Base64 Encoder", desc: "Encode text or data to Base64" },
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
    </div>
  );
}