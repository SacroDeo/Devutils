"use client";
import { useState } from "react";
import { ToolLayout } from "../ToolLayout";
import { convertCase } from "@/lib/utils/text";
import { CopyButton } from "../CopyButton";

const MODES = [
  { key: "upper", label: "UPPER" },
  { key: "lower", label: "lower" },
  { key: "title", label: "Title Case" },
  { key: "camel", label: "camelCase" },
  { key: "snake", label: "snake_case" },
  { key: "kebab", label: "kebab-case" },
  { key: "pascal", label: "PascalCase" },
];

export default function CaseConverter() {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState("camel");
  const output = convertCase(input, mode);

  return (
    <ToolLayout title="Case Converter" description="Convert text between camelCase, snake_case, UPPER, Title Case and more."
      output={output} onReset={() => setInput("")}
      example="hello world → helloWorld / hello_world / HELLO WORLD">
      <textarea rows={4} value={input} onChange={e => setInput(e.target.value)}
        placeholder="Enter text to convert…"
        className="w-full rounded-lg border bg-zinc-50 dark:bg-zinc-900 p-3 text-sm font-mono resize-y focus:border-accent transition-colors" />
      <div className="flex flex-wrap gap-2">
        {MODES.map(m => (
          <button key={m.key} onClick={() => setMode(m.key)}
            className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-colors ${mode === m.key ? "border-accent text-accent bg-accent/5" : "hover:border-accent hover:text-accent"}`}>
            {m.label}
          </button>
        ))}
      </div>
      {input && (
        <div className="flex items-start gap-2 rounded-lg border bg-zinc-50 dark:bg-zinc-900 p-3">
          <p className="flex-1 text-sm font-mono break-all">{output}</p>
          <CopyButton text={output} />
        </div>
      )}
    </ToolLayout>
  );
}