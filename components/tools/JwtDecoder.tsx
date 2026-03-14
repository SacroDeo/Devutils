"use client";
import { useState } from "react";
import { ToolLayout } from "../ToolLayout";
import { decodeJWT } from "@/lib/utils/jwt";

export default function JwtDecoder() {
  const [input, setInput] = useState("");
  const decoded = input.trim() ? decodeJWT(input) : null;

  return (
    <ToolLayout title="JWT Decoder" description="Decode a JSON Web Token and inspect its header and payload."
      onReset={() => setInput("")} example="Paste a JWT like: eyJhbGci...">
      <textarea rows={3} value={input} onChange={e => setInput(e.target.value)}
        placeholder="Paste JWT token here…"
        className="w-full rounded-lg border bg-zinc-50 dark:bg-zinc-900 p-3 text-xs font-mono resize-y focus:border-accent transition-colors" />
      {decoded && (
        decoded.error
          ? <p className="text-red-400 text-xs font-mono">{decoded.error}</p>
          : (
            <div className="space-y-3">
              {[["Header", decoded.header], ["Payload", decoded.payload]].map(([label, obj]) => (
                <div key={label as string}>
                  <p className="text-xs font-mono text-accent uppercase tracking-wider mb-1">{label as string}</p>
                  <pre className="rounded-lg border bg-zinc-50 dark:bg-zinc-900 p-3 text-xs font-mono overflow-auto whitespace-pre-wrap">
                    {JSON.stringify(obj, null, 2)}
                  </pre>
                </div>
              ))}
              <div>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">Signature</p>
                <p className="text-xs font-mono break-all text-zinc-500">{decoded.signature}</p>
              </div>
            </div>
          )
      )}
    </ToolLayout>
  );
}