"use client";
import { useState } from "react";
import { ToolLayout } from "../ToolLayout";
import { minifyJS } from "@/lib/utils/minifiers";

export default function JsMinifier() {
  const [input, setInput] = useState("");
  const output = minifyJS(input);
  const saving = input.length ? Math.round((1 - output.length / input.length) * 100) : 0;

  return (
    <ToolLayout
      title="JS Minifier"
      description="Removes extra whitespace and comments from JavaScript. This tool is intended for quick cleanup and learning purposes — not a replacement for production build tools such as esbuild, Terser, or Webpack."
      output={output}
      onReset={() => setInput("")}
      example={`This tool removes whitespace and comments only. It does not perform tree-shaking, dead code elimination, or variable mangling.\nFor production use, consider esbuild, Terser, or Webpack.\n\nInput:  // comment\n        const x = 1;\nOutput: const x=1;`}
    >
      <textarea
        rows={6}
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Paste JavaScript here…"
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