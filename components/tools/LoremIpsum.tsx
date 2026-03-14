"use client";
import { useState } from "react";
import { ToolLayout } from "../ToolLayout";
import { generateLorem } from "@/lib/utils/text";
import { CopyButton } from "../CopyButton";

export default function LoremIpsum() {
  const [paragraphs, setParagraphs] = useState(2);
  const [words, setWords] = useState(50);
  const output = generateLorem(paragraphs, words);

  return (
    <ToolLayout title="Lorem Ipsum Generator" description="Generate placeholder lorem ipsum text by paragraphs and word count."
      output={output} onReset={() => { setParagraphs(2); setWords(50); }}>
      <div className="flex gap-4 flex-wrap text-xs font-mono">
        <label className="flex items-center gap-2">
          Paragraphs:
          <input type="number" min={1} max={10} value={paragraphs} onChange={e => setParagraphs(Number(e.target.value))}
            className="w-16 rounded-lg border bg-zinc-50 dark:bg-zinc-900 p-2 focus:border-accent transition-colors" />
        </label>
        <label className="flex items-center gap-2">
          Words each:
          <input type="number" min={10} max={200} value={words} onChange={e => setWords(Number(e.target.value))}
            className="w-20 rounded-lg border bg-zinc-50 dark:bg-zinc-900 p-2 focus:border-accent transition-colors" />
        </label>
      </div>
      <div className="rounded-lg border bg-zinc-50 dark:bg-zinc-900 p-4">
        <div className="flex justify-end mb-2"><CopyButton text={output} /></div>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 whitespace-pre-wrap leading-relaxed">{output}</p>
      </div>
    </ToolLayout>
  );
}