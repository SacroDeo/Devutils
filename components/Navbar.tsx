"use client";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/tools", label: "Tools" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
  ];

  useEffect(() => {
    function check() { setScrolled(window.scrollY > 20); }
    window.addEventListener("scroll", check);
    return () => window.removeEventListener("scroll", check);
  }, []);

  function isActive(href: string) {
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? "border-b border-light-border/50 dark:border-cosmos-border/50 bg-light-bg/60 dark:bg-cosmos-bg/60 backdrop-blur-2xl shadow-sm shadow-accent/5"
        : "border-b border-transparent bg-light-bg/80 dark:bg-cosmos-bg/80 backdrop-blur-xl"
    }`}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white text-xs font-bold font-mono shadow-lg shadow-violet-500/20 group-hover:shadow-violet-500/40 transition-shadow">
            D/
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-light-text dark:text-cosmos-text">
            Dev<span className="text-accent">Utils</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className={`text-sm font-medium transition-colors relative ${
                isActive(l.href)
                  ? "text-accent"
                  : "text-light-sub dark:text-cosmos-sub hover:text-accent"
              }`}>
              {l.label}
              {isActive(l.href) && (
                <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-accent rounded-full" />
              )}
            </Link>
          ))}
          <button onClick={toggle} aria-label="Toggle theme"
            className="w-9 h-9 rounded-xl border border-light-border dark:border-cosmos-border flex items-center justify-center text-sm hover:border-accent transition-colors hover:bg-accent/5">
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"
            className="text-light-sub dark:text-cosmos-sub">
            {open
              ? <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round"/>
              : <path d="M3 6h14M3 12h14M3 18h14" strokeLinecap="round"/>
            }
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-light-border/50 dark:border-cosmos-border/50 px-6 py-4 flex flex-col gap-4 bg-light-bg/80 dark:bg-cosmos-surface/80 backdrop-blur-xl">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className={`text-sm font-medium transition-colors ${
                isActive(l.href) ? "text-accent" : "hover:text-accent"
              }`}>
              {l.label}
            </Link>
          ))}
          <button onClick={toggle} className="text-left text-sm text-light-sub dark:text-cosmos-sub">
            {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}
    </header>
  );
}