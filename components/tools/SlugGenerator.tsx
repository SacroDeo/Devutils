"use client";
import { useState } from "react";
import { ToolLayout } from "../ToolLayout";
import { generateSlug } from "@/lib/utils/minifiers";
import { CopyButton } from "../CopyButton";

export default function SlugGenerator() {
  const [input, setInput] = useState("");
  const output = generateSlug(input);

  return (
    <ToolLayout title="Slug Generator" description="Convert any text to a URL-safe slug."
      output={output} onReset={() => setInput("")}
      example="Hello World! → hello-world">
      <input value={input} onChange={e => setInput(e.target.value)}
        placeholder="Enter text to slugify…"
        className="w-full rounded-lg border bg-zinc-50 dark:bg-zinc-900 p-3 text-sm font-mono focus:border-accent transition-colors" />
      {input && (
        <div className="flex items-center gap-2 rounded-lg border bg-zinc-50 dark:bg-zinc-900 px-3 py-2">
          <span className="flex-1 text-sm font-mono text-accent">{output}</span>
          <CopyButton text={output} />
        </div>
      )}
    </ToolLayout>
  );
}