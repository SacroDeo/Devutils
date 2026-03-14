"use client";
import { useState } from "react";
import { ToolLayout } from "../ToolLayout";
import { checkEntropy } from "@/lib/utils/password";

export default function PasswordEntropy() {
  const [input, setInput] = useState("");
  const result = input ? checkEntropy(input) : null;

  const pct = result ? Math.min(100, (result.entropy / 128) * 100) : 0;
  const barColor = result
    ? result.entropy < 36 ? "bg-red-400" : result.entropy < 60 ? "bg-yellow-400" : "bg-accent"
    : "bg-zinc-200";

  return (
    <ToolLayout title="Password Entropy Checker" description="Measure the strength and entropy bits of any password."
      onReset={() => setInput("")} example="Try: P@ssw0rd vs. X#9kL$mZ2qR7nW!v">
      <input type="text" value={input} onChange={e => setInput(e.target.value)}
        placeholder="Enter a password to check…"
        className="w-full rounded-lg border bg-zinc-50 dark:bg-zinc-900 p-3 text-sm font-mono focus:border-accent transition-colors" />
      {result && (
        <div className="space-y-3">
          <div className="w-full bg-zinc-200 dark:bg-zinc-700 rounded-full h-2">
            <div className={`h-2 rounded-full transition-all ${barColor}`} style={{ width: `${pct}%` }} />
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="rounded-lg border p-3">
              <p className="text-zinc-400 mb-1">Entropy</p>
              <p className="text-lg font-bold">{result.entropy} bits</p>
            </div>
            <div className="rounded-lg border p-3">
              <p className="text-zinc-400 mb-1">Strength</p>
              <p className="text-lg font-bold">{result.label} {result.strength}</p>
            </div>
          </div>
        </div>
      )}
    </ToolLayout>
  );
}