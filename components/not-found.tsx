import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 – Page Not Found",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="relative mb-8">
        <div className="absolute inset-0 blur-3xl bg-accent/20 rounded-full animate-pulse" />
        <p className="relative font-display text-9xl font-bold text-accent opacity-20 select-none">
          404
        </p>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg width="64" height="64" fill="none" stroke="currentColor" strokeWidth="1.5"
            className="text-accent animate-float">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6" />
          </svg>
        </div>
      </div>

      <h1 className="font-display text-3xl font-bold text-light-text dark:text-cosmos-text mb-3">
        Page not found
      </h1>
      <p className="text-light-sub dark:text-cosmos-sub text-base max-w-sm mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="flex gap-3 flex-wrap justify-center">
        <Link href="/"
          className="px-6 py-3 rounded-2xl bg-accent text-white font-semibold hover:bg-accentGlow transition-all duration-200 hover:scale-105">
          Go Home
        </Link>
        <Link href="/tools"
          className="px-6 py-3 rounded-2xl border border-light-border dark:border-cosmos-border font-semibold hover:border-accent hover:text-accent transition-colors text-light-text dark:text-cosmos-text">
          Browse Tools
        </Link>
      </div>
    </div>
  );
}