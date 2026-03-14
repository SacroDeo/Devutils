"use client";
import { CopyButton } from "./CopyButton";
import Link from "next/link";

interface ToolLayoutProps {
  title: string;
  description: string;
  example?: string;
  children: React.ReactNode;
  output?: string;
  onReset?: () => void;
}

export function ToolLayout({ title, description, example, children, output, onReset }: ToolLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="mb-2">
        <Link href="/tools" className="text-xs font-mono text-light-sub dark:text-cosmos-sub hover:text-accent transition-colors">
          ← All Tools
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="font-display text-4xl font-bold text-light-text dark:text-cosmos-text mb-3">
          {title}
        </h1>
        <p className="text-light-sub dark:text-cosmos-sub text-base">{description}</p>
      </div>

      <div className="rounded-2xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card p-6 space-y-5">
        {children}
        <div className="flex gap-2 flex-wrap pt-1">
          {output !== undefined && output !== "" && <CopyButton text={output} />}
          {onReset && (
            <button onClick={onReset}
              className="px-4 py-2 text-sm font-mono rounded-xl border border-light-border dark:border-cosmos-border hover:border-red-400 hover:text-red-400 transition-colors text-light-sub dark:text-cosmos-sub">
              Reset
            </button>
          )}
        </div>
      </div>

      {example && (
        <div className="mt-6 rounded-2xl border border-dashed border-light-border dark:border-cosmos-muted p-5">
          <p className="text-xs font-mono text-accent uppercase tracking-widest mb-3">Example</p>
          <pre className="text-sm font-mono text-light-sub dark:text-cosmos-sub whitespace-pre-wrap break-all leading-relaxed">
            {example}
          </pre>
        </div>
      )}
    </div>
  );
}