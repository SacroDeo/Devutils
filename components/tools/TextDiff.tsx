"use client";
import { useState } from "react";
import { ToolLayout } from "../ToolLayout";
import { diffText } from "@/lib/utils/text";

export default function TextDiff() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const diff = a || b ? diffText(a, b) : null;

  return (
    <ToolLayout title="Text Diff" description="Compare two blocks of text line-by-line and highlight differences."
      onReset={() => { setA(""); setB(""); }}
      example="Paste different versions of text in each panel.">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-mono text-zinc-400 block mb-1">Original</label>
          <textarea rows={8} value={a} onChange={e => setA(e.target.value)}
            className="w-full rounded-lg border bg-zinc-50 dark:bg-zinc-900 p-3 text-xs font-mono resize-y focus:border-accent transition-colors" />
        </div>
        <div>
          <label className="text-xs font-mono text-zinc-400 block mb-1">Modified</label>
          <textarea rows={8} value={b} onChange={e => setB(e.target.value)}
            className="w-full rounded-lg border bg-zinc-50 dark:bg-zinc-900 p-3 text-xs font-mono resize-y focus:border-accent transition-colors" />
        </div>
      </div>
      {diff && (
        <div className="rounded-lg border overflow-hidden font-mono text-xs">
          {diff.map((line, i) => (
            <div key={i} className={`px-3 py-1 ${line.type === "added" ? "bg-accent/10 text-accent" : line.type === "removed" ? "bg-red-500/10 text-red-400" : "text-zinc-500 dark:text-zinc-400"}`}>
              <span className="mr-2 select-none">{line.type === "added" ? "+" : line.type === "removed" ? "−" : " "}</span>
              {line.text}
            </div>
          ))}
        </div>
      )}
    </ToolLayout>
  );
}