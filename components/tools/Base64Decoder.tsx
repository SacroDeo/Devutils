"use client";
import { useState } from "react";
import { ToolLayout } from "../ToolLayout";
import { decodeBase64 } from "@/lib/utils/base64";
import { CopyButton } from "../CopyButton";

export default function Base64Decoder() {
  const [input, setInput] = useState("");
  const output = decodeBase64(input);

  return (
    <ToolLayout title="Base64 Decoder" description="Decode a Base64 string back to plain text."
      output={output} onReset={() => setInput("")} example="SGVsbG8sIFdvcmxkIQ== → Hello, World!">
      <textarea rows={4} value={input} onChange={e => setInput(e.target.value)}
        placeholder="Base64 string to decode…"
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