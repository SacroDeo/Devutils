"use client";
import { useState, useEffect } from "react";
import { ToolLayout } from "../ToolLayout";
import { generatePassword, checkEntropy } from "@/lib/utils/password";
import { CopyButton } from "../CopyButton";

function estimateCrackTime(entropy: number): string {
  const guessesPerSecond = 1e12;
  const combinations = Math.pow(2, entropy);
  const seconds = combinations / 2 / guessesPerSecond;

  if (seconds < 1) return "Instant";
  if (seconds < 60) return `${Math.round(seconds)} seconds`;
  if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`;
  if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`;
  if (seconds < 31536000) return `${Math.round(seconds / 86400)} days`;
  if (seconds < 31536000 * 1000) return `${Math.round(seconds / 31536000)} years`;
  if (seconds < 31536000 * 1e6) return `${Math.round(seconds / 31536000 / 1000)} thousand years`;
  if (seconds < 31536000 * 1e9) return `${Math.round(seconds / 31536000 / 1e6)} million years`;
  if (seconds < 31536000 * 1e12) return `${Math.round(seconds / 31536000 / 1e9)} billion years`;
  return "Longer than the universe";
}

function StrengthBar({ entropy }: { entropy: number }) {
  const pct = Math.min(100, (entropy / 128) * 100);
  const color =
    entropy < 28 ? "#ef4444"
    : entropy < 36 ? "#f97316"
    : entropy < 60 ? "#eab308"
    : entropy < 90 ? "#A78BFA"
    : "#22c55e";

  return (
    <div className="w-full bg-light-surface dark:bg-cosmos-surface rounded-full h-2 overflow-hidden">
      <div
        className="h-2 rounded-full transition-all duration-500"
        style={{ width: `${pct}%`, backgroundColor: color }}
      />
    </div>
  );
}

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [opts, setOpts] = useState({
    upper: true,
    lower: true,
    digits: true,
    symbols: false,
  });
  const [password, setPassword] = useState("");

  useEffect(() => {
    setPassword(generatePassword(length, opts));
  }, []);

  function gen() {
    setPassword(generatePassword(length, opts));
  }

  function toggle(k: keyof typeof opts) {
    setOpts(o => ({ ...o, [k]: !o[k] }));
  }

  const result = password ? checkEntropy(password) : null;
  const crackTime = result ? estimateCrackTime(result.entropy) : null;

  const strengthColor =
    !result ? "text-zinc-400"
    : result.entropy < 28 ? "text-red-400"
    : result.entropy < 36 ? "text-orange-400"
    : result.entropy < 60 ? "text-yellow-400"
    : result.entropy < 90 ? "text-accent"
    : "text-green-400";

  return (
    <ToolLayout
      title="Password Generator"
      description="Generate cryptographically random, strong passwords with real-time strength analysis."
      onReset={() => {
        setLength(16);
        setOpts({ upper: true, lower: true, digits: true, symbols: false });
        setPassword(generatePassword(16, { upper: true, lower: true, digits: true, symbols: false }));
      }}
    >
      <div className="space-y-5">

        {/* Length slider */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-light-text dark:text-cosmos-text">
              Length
            </label>
            <span className="text-sm font-mono text-accent font-bold">{length}</span>
          </div>
          <input
            type="range" min={8} max={64} value={length}
            onChange={e => setLength(Number(e.target.value))}
            className="w-full accent-[#A78BFA]"
          />
          <div className="flex justify-between text-xs font-mono text-light-sub dark:text-cosmos-sub">
            <span>8</span>
            <span>64</span>
          </div>
        </div>

        {/* Options */}
        <div className="flex flex-wrap gap-3">
          {(Object.keys(opts) as (keyof typeof opts)[]).map(k => (
            <label key={k}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl border cursor-pointer transition-colors text-sm font-medium select-none ${
                opts[k]
                  ? "border-accent text-accent bg-accent/5"
                  : "border-light-border dark:border-cosmos-border text-light-sub dark:text-cosmos-sub hover:border-accent/50"
              }`}>
              <input
                type="checkbox" checked={opts[k]}
                onChange={() => toggle(k)}
                className="sr-only"
              />
              <span className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${
                opts[k] ? "bg-accent border-accent" : "border-light-border dark:border-cosmos-border"
              }`}>
                {opts[k] && <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>}
              </span>
              {k.charAt(0).toUpperCase() + k.slice(1)}
            </label>
          ))}
        </div>

        {/* Password display */}
        <div className="flex items-center gap-2 rounded-2xl border border-light-border dark:border-cosmos-border bg-light-surface dark:bg-cosmos-surface px-4 py-3">
          <span className="flex-1 text-base font-mono text-light-text dark:text-cosmos-text break-all leading-relaxed">
            {password}
          </span>
          <CopyButton text={password} />
        </div>

        {/* Strength bar */}
        {result && <StrengthBar entropy={result.entropy} />}

        {/* Stats grid */}
        {result && crackTime && (
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card p-4 text-center">
              <p className={`text-lg font-display font-bold mb-1 ${strengthColor}`}>
                {result.strength}
              </p>
              <p className="text-xs font-mono text-light-sub dark:text-cosmos-sub">Strength</p>
            </div>
            <div className="rounded-xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card p-4 text-center">
              <p className="text-lg font-display font-bold text-accent mb-1">
                {result.entropy} bits
              </p>
              <p className="text-xs font-mono text-light-sub dark:text-cosmos-sub">Entropy</p>
            </div>
            <div className="rounded-xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card p-4 text-center">
              <p className="text-lg font-display font-bold text-light-text dark:text-cosmos-text mb-1 text-sm leading-tight">
                {crackTime}
              </p>
              <p className="text-xs font-mono text-light-sub dark:text-cosmos-sub">Crack Time</p>
            </div>
          </div>
        )}

        {/* Generate button */}
        <button onClick={gen}
          className="w-full py-3 rounded-2xl bg-accent text-white font-semibold text-base hover:bg-accentGlow transition-colors">
          Generate New Password
        </button>

      </div>
    </ToolLayout>
  );
}