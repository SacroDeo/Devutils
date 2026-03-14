"use client";
import { useState } from "react";
import { ToolLayout } from "../ToolLayout";
import { minifyHTML } from "@/lib/utils/minifiers";

export default function HtmlMinifier() {
  const [input, setInput] = useState("");
  const output = minifyHTML(input);
  const saving = input.length ? Math.round((1 - output.length / input.length) * 100) : 0;

  return (
    <ToolLayout
      title="HTML Minifier"
      description="Removes extra whitespace and comments from HTML. This tool is intended for quick cleanup and learning purposes — not a replacement for production build tools such as Vite or Webpack."
      output={output}
      onReset={() => setInput("")}
      example={`This tool removes whitespace and comments only.\nFor production use, consider a dedicated build tool such as Vite, Webpack, or a CDN-level minifier.\n\nInput:  <div>  <p> Hello </p>  </div>\nOutput: <div><p> Hello </p></div>`}
    >
      <textarea
        rows={6}
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Paste HTML here…"
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