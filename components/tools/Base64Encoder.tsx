"use client";
import { useState } from "react";
import { ToolLayout } from "../ToolLayout";
import { encodeBase64 } from "@/lib/utils/base64";
import { CopyButton } from "../CopyButton";

export default function Base64Encoder() {
  const [input, setInput] = useState("");
  const output = encodeBase64(input);

  return (
    <ToolLayout title="Base64 Encoder" description="Encode any text string to Base64 format."
      output={output} onReset={() => setInput("")} example="Hello, World! → SGVsbG8sIFdvcmxkIQ==">
      <textarea rows={4} value={input} onChange={e => setInput(e.target.value)}
        placeholder="Text to encode…"
        className="w-full rounded-lg border bg-zinc-50 dark:bg-zinc-900 p-3 text-xs font-mono resize-y focus:border-accent transition-colors" />
      {input && (
        <div className="rounded-lg border bg-zinc-50 dark:bg-zinc-900 p-3">
          <div className="flex justify-between items-start gap-2">
            <p className="text-xs font-mono break-all text-zinc-600 dark:text-zinc-300">{output}</p>
            <CopyButton text={output} />
          </div>
        </div>
      )}
    </ToolLayout>
  );
}