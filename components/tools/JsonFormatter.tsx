"use client";
import { useState } from "react";
import { ToolLayout } from "../ToolLayout";
import { formatJSON } from "@/lib/utils/json";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handle(val: string) {
    setInput(val);
    const { result, error } = formatJSON(val);
    setOutput(result);
    setError(error);
  }

  function reset() { setInput(""); setOutput(""); setError(null); }

  return (
    <ToolLayout title="JSON Formatter" description="Paste JSON to prettify and format it with proper indentation."
      output={output} onReset={reset} example={`{"name":"DevUtils","version":1,"active":true}`}>
      <textarea rows={6} value={input} onChange={e => handle(e.target.value)}
        placeholder='{"key": "value"}'
        className="w-full rounded-lg border bg-zinc-50 dark:bg-zinc-900 p-3 text-xs font-mono resize-y focus:border-accent transition-colors" />
      {error && <p className="text-red-400 text-xs font-mono">{error}</p>}
      {output && (
        <pre className="w-full rounded-lg border bg-zinc-50 dark:bg-zinc-900 p-3 text-xs font-mono overflow-auto max-h-80 whitespace-pre-wrap">{output}</pre>
      )}
    </ToolLayout>
  );
}