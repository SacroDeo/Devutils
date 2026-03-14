"use client";
import { useState } from "react";
import { ToolLayout } from "../ToolLayout";
import { generateUUID } from "@/lib/utils/uuid";
import { CopyButton } from "../CopyButton";

export default function UuidGenerator() {
  const [uuids, setUuids] = useState<string[]>([generateUUID()]);
  const [count, setCount] = useState(1);

  function generate() {
    setUuids(Array.from({ length: count }, generateUUID));
  }

  return (
    <ToolLayout title="UUID Generator" description="Generate version 4 UUIDs using the browser's cryptographic random source."
      onReset={() => setUuids([generateUUID()])} example="e.g. 550e8400-e29b-41d4-a716-446655440000">
      <div className="flex gap-2 items-center">
        <label className="text-xs font-mono text-zinc-500">Count:</label>
        <input type="number" min={1} max={20} value={count} onChange={e => setCount(Number(e.target.value))}
          className="w-20 rounded-lg border bg-zinc-50 dark:bg-zinc-900 p-2 text-xs font-mono focus:border-accent transition-colors" />
        <button onClick={generate}
          className="px-4 py-2 rounded-lg bg-accent text-black text-xs font-semibold hover:bg-accent/90 transition-colors">
          Generate
        </button>
      </div>
      <div className="space-y-2">
        {uuids.map((u, i) => (
          <div key={i} className="flex items-center justify-between rounded-lg border bg-zinc-50 dark:bg-zinc-900 px-3 py-2">
            <span className="text-xs font-mono text-zinc-700 dark:text-zinc-200">{u}</span>
            <CopyButton text={u} />
          </div>
        ))}
      </div>
    </ToolLayout>
  );
}