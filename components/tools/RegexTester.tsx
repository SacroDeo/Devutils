"use client";
import { useState } from "react";
import { ToolLayout } from "../ToolLayout";
import { testRegex } from "@/lib/utils/regex";

export default function RegexTester() {
  const [pattern, setPattern] = useState("");
  const [flags, setFlags] = useState("g");
  const [input, setInput] = useState("");

  const result = pattern && input ? testRegex(pattern, flags, input) : null;

  return (
    <ToolLayout title="Regex Tester" description="Test regular expressions with live match highlighting."
      onReset={() => { setPattern(""); setFlags("g"); setInput(""); }}
      example={`Pattern: \\d+ | Input: abc 123 def 456 | Matches: 123, 456`}>
      <div className="flex gap-2">
        <div className="flex-1">
          <label className="text-xs font-mono text-zinc-400 block mb-1">Pattern</label>
          <input value={pattern} onChange={e => setPattern(e.target.value)} placeholder="\d+"
            className="w-full rounded-lg border bg-zinc-50 dark:bg-zinc-900 p-2 text-xs font-mono focus:border-accent transition-colors" />
        </div>
        <div className="w-24">
          <label className="text-xs font-mono text-zinc-400 block mb-1">Flags</label>
          <input value={flags} onChange={e => setFlags(e.target.value)} placeholder="gi"
            className="w-full rounded-lg border bg-zinc-50 dark:bg-zinc-900 p-2 text-xs font-mono focus:border-accent transition-colors" />
        </div>
      </div>
      <textarea rows={4} value={input} onChange={e => setInput(e.target.value)}
        placeholder="Test string…"
        className="w-full rounded-lg border bg-zinc-50 dark:bg-zinc-900 p-3 text-xs font-mono resize-y focus:border-accent transition-colors" />
      {result && (
        <div className={`rounded-lg p-3 border text-xs font-mono ${result.error ? "border-red-400/30 text-red-400" : "border-accent/30"}`}>
          {result.error
            ? `Error: ${result.error}`
            : result.count === 0
              ? "No matches found"
              : `${result.count} match(es): ${result.matches.join(", ")}`}
        </div>
      )}
    </ToolLayout>
  );
}