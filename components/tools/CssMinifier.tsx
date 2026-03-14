"use client";
import { useState } from "react";
import { ToolLayout } from "../ToolLayout";
import { minifyCSS } from "@/lib/utils/minifiers";

export default function CssMinifier() {
  const [input, setInput] = useState("");
  const output = minifyCSS(input);
  const saving = input.length ? Math.round((1 - output.length / input.length) * 100) : 0;

  return (
    <ToolLayout
      title="CSS Minifier"
      description="Removes extra whitespace and comments from CSS. This tool is intended for quick cleanup and learning purposes — not a replacement for production build tools such as PostCSS or Vite."
      output={output}
      onReset={() => setInput("")}
      example={`This tool removes whitespace and comments only.\nFor production use, consider a dedicated build tool such as PostCSS, Vite, or a CDN-level minifier.\n\nInput:  body { color: red; }\nOutput: body{color:red}`}
    >
      <textarea
        rows={6}
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Paste CSS here…"
        className="w-full rounded-lg border bg-zinc-50 dark:bg-zinc-900 p-3 text-xs font-mono resize-y focus:border-accent transition-colors"
      />
      {input && (
        <>
          <p className="text-xs font-mono text-accent">
            Saved {saving}% ({input.length - output.length} chars)
          </p>
          <textarea
            rows={6}
            readOnly
            value={output}
            className="w-full rounded-lg border bg-zinc-50 dark:bg-zinc-900 p-3 text-xs font-mono resize-y"
          />
        </>
      )}
    </ToolLayout>
  );
}