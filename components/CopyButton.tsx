"use client";
import { useState } from "react";

export function CopyButton({ text, className = "" }: { text: string; className?: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button onClick={copy}
      className={`px-4 py-2 text-sm font-mono rounded-xl border transition-all ${copied
        ? "border-accent text-accent bg-accent/10"
        : "border-light-border dark:border-cosmos-border text-light-sub dark:text-cosmos-sub hover:border-accent hover:text-accent"
      } ${className}`}>
      {copied ? "✓ Copied" : "Copy"}
    </button>
  );
}