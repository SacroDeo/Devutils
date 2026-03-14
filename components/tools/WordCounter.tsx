"use client";
import { useState } from "react";
import { ToolLayout } from "../ToolLayout";
import { countWords } from "@/lib/utils/text";

export default function WordCounter() {
  const [input, setInput] = useState("");
  const stats = countWords(input);

  const readTimeDisplay = stats.words === 0
    ? "—"
    : stats.readingTime < 1
    ? "< 1 min"
    : `${stats.readingTime} min`;

  const items = [
    { label: "Words", value: stats.words },
    { label: "Characters", value: stats.chars },
    { label: "No Spaces", value: stats.charsNoSpace },
    { label: "Sentences", value: stats.sentences },
    { label: "Paragraphs", value: stats.paragraphs },
    { label: "Read Time", value: readTimeDisplay },
  ];

  return (
    <ToolLayout
      title="Word Counter"
      description="Count words, characters, sentences, and estimated reading time."
      onReset={() => setInput("")}
      example="Paste any text and see live statistics."
    >
      <textarea
        rows={8}
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Start typing or paste text here…"
        className="w-full rounded-lg border bg-zinc-50 dark:bg-zinc-900 p-3 text-sm font-mono resize-y focus:border-accent transition-colors"
      />
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {items.map(({ label, value }) => (
          <div key={label} className="rounded-xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card p-3 text-center">
            <p className="text-lg font-bold font-display text-light-text dark:text-cosmos-text">{value}</p>
            <p className="text-xs text-light-sub dark:text-cosmos-sub font-mono">{label}</p>
          </div>
        ))}
      </div>
    </ToolLayout>
  );
}