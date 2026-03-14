"use client";
import { useState } from "react";
import { ToolLayout } from "../ToolLayout";
import { hashText } from "@/lib/utils/hash";
import { CopyButton } from "../CopyButton";

type Algo = "SHA-1" | "SHA-256" | "SHA-512";

export default function HashGenerator() {
  const [input, setInput] = useState("");
  const [algo, setAlgo] = useState<Algo>("SHA-256");
  const [hash, setHash] = useState("");

  async function generate() {
    if (!input.trim()) return;
    const result = await hashText(input, algo);
    setHash(result);
  }

  function reset() {
    setInput("");
    setHash("");
  }

  return (
    <ToolLayout
      title="Hash Generator"
      description="Generate SHA-1, SHA-256, or SHA-512 hashes from any text."
      output={hash}
      onReset={reset}
      example="SHA-256('hello') = 2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824"
    >
      <textarea
        rows={4}
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Text to hash…"
        className="w-full rounded-lg border bg-zinc-50 dark:bg-zinc-900 p-3 text-xs font-mono resize-y focus:border-accent transition-colors"
      />

      <div className="flex gap-2 flex-wrap">
        {(["SHA-1", "SHA-256", "SHA-512"] as Algo[]).map(a => (
          <button key={a} onClick={() => setAlgo(a)}
            className={`px-3 py-1.5 rounded-lg border text-xs font-mono transition-colors ${
              algo === a
                ? "border-accent text-accent bg-accent/5"
                : "border-light-border dark:border-cosmos-border hover:border-accent hover:text-accent text-light-sub dark:text-cosmos-sub"
            }`}>
            {a}
          </button>
        ))}
        <button
          onClick={generate}
          disabled={!input.trim()}
          className="px-4 py-1.5 rounded-lg bg-accent text-white text-xs font-semibold hover:bg-accentGlow transition-colors disabled:opacity-40 disabled:cursor-not-allowed">
          Hash
        </button>
      </div>

      {hash && (
        <div className="flex items-start gap-2 rounded-lg border border-light-border dark:border-cosmos-border bg-zinc-50 dark:bg-zinc-900 p-3">
          <p className="flex-1 text-xs font-mono break-all text-light-sub dark:text-cosmos-sub">{hash}</p>
          <CopyButton text={hash} />
        </div>
      )}
    </ToolLayout>
  );
}