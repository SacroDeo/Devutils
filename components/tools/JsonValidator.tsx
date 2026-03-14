"use client";
import { useState } from "react";
import { ToolLayout } from "../ToolLayout";
import { validateJSON } from "@/lib/utils/json";

export default function JsonValidator() {
  const [input, setInput] = useState("");
  const result = input ? validateJSON(input) : null;

  return (
    <ToolLayout title="JSON Validator" description="Check whether your JSON is syntactically valid."
      onReset={() => setInput("")} example={`{"valid": true}`}>
      <textarea rows={6} value={input} onChange={e => setInput(e.target.value)}
        placeholder='Paste JSON here…'
        className="w-full rounded-lg border bg-zinc-50 dark:bg-zinc-900 p-3 text-xs font-mono resize-y focus:border-accent transition-colors" />
      {result && (
        <div className={`rounded-lg px-4 py-3 text-sm font-semibold ${result.valid ? "bg-accent/10 text-accent border border-accent/30" : "bg-red-500/10 text-red-400 border border-red-400/30"}`}>
          {result.valid ? "✓ Valid JSON" : `✗ Invalid: ${result.error}`}
        </div>
      )}
    </ToolLayout>
  );
}