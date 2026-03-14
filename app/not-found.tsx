import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 – Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-8xl font-bold text-accent mb-4">404</p>
      <h1 className="font-display text-3xl font-bold text-light-text dark:text-cosmos-text mb-3">
        Page not found
      </h1>
      <p className="text-light-sub dark:text-cosmos-sub text-base max-w-sm mb-8">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="flex gap-3 flex-wrap justify-center">
        <Link href="/"
          className="px-6 py-3 rounded-2xl bg-accent text-white font-semibold hover:bg-accentGlow transition-colors">
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