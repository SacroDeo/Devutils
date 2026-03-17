"use client";
import { RefObject } from "react";

export function SearchBar({
  value,
  onChange,
  inputRef,
}: {
  value: string;
  onChange: (v: string) => void;
  inputRef?: RefObject<HTMLInputElement>;
}) {
  return (
    <div className="relative">
      <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-light-sub dark:text-cosmos-sub"
        width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="7" cy="7" r="5"/><path d="M12 12l3 3"/>
      </svg>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search tools… (press / to focus)"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full pl-11 pr-4 py-3 rounded-2xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card text-base text-light-text dark:text-cosmos-text placeholder:text-light-sub dark:placeholder:text-cosmos-sub focus:border-accent transition-colors"
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-light-sub dark:text-cosmos-sub hover:text-accent transition-colors">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l4 4M10 6l-4 4" strokeLinecap="round"/>
          </svg>
        </button>
      )}
    </div>
  );
}