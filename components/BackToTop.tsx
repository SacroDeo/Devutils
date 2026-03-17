"use client";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function check() { setVisible(window.scrollY > 400); }
    window.addEventListener("scroll", check);
    return () => window.removeEventListener("scroll", check);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center shadow-lg hover:bg-accentGlow transition-all duration-200 hover:scale-110"
      aria-label="Back to top"
    >
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M8 12V4M4 8l4-4 4 4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}