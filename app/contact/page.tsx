"use client";
import type { Metadata } from "next";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function update(k: keyof typeof form, v: string) {
    setForm(f => ({ ...f, [k]: v }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xpqylnrd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("done");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass = "w-full px-4 py-3 rounded-xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card text-light-text dark:text-cosmos-text placeholder:text-light-sub dark:placeholder:text-cosmos-sub focus:border-accent transition-colors text-sm";

  return (
    <div className="max-w-xl mx-auto px-6 py-16">
      <div className="mb-10">
        <p className="text-xs font-mono text-accent uppercase tracking-widest mb-3">Contact</p>
        <h1 className="font-display text-5xl font-bold text-light-text dark:text-cosmos-text mb-4">
          Get in touch
        </h1>
        <p className="text-light-sub dark:text-cosmos-sub text-base leading-relaxed">
          Have a suggestion, found a bug, or want a new tool added? Send a message and we will get back to you.
        </p>
      </div>

      {status === "done" ? (
        <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center">
          <p className="text-4xl mb-4">✓</p>
          <h2 className="font-display text-xl font-bold text-light-text dark:text-cosmos-text mb-2">
            Message sent
          </h2>
          <p className="text-light-sub dark:text-cosmos-sub text-sm">
            Thanks for reaching out. We will get back to you soon.
          </p>
          <button onClick={() => setStatus("idle")}
            className="mt-6 px-6 py-2.5 rounded-xl border border-light-border dark:border-cosmos-border text-sm font-medium hover:border-accent hover:text-accent transition-colors text-light-sub dark:text-cosmos-sub">
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-light-sub dark:text-cosmos-sub mb-1.5 uppercase tracking-wider">
                Name
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={e => update("name", e.target.value)}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-light-sub dark:text-cosmos-sub mb-1.5 uppercase tracking-wider">
                Email
              </label>
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={form.email}
                onChange={e => update("email", e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono text-light-sub dark:text-cosmos-sub mb-1.5 uppercase tracking-wider">
              Message
            </label>
            <textarea
              required
              rows={6}
              placeholder="Your message..."
              value={form.message}
              onChange={e => update("message", e.target.value)}
              className={`${inputClass} resize-none`}
            />
          </div>

          {status === "error" && (
            <p className="text-red-400 text-sm font-mono">
              Something went wrong. Please try again or email us directly.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3.5 rounded-2xl bg-accent text-white font-semibold text-base hover:bg-accentGlow transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          <p className="text-xs text-center text-light-sub dark:text-cosmos-sub">
            Or open an issue on{" "}
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
              className="text-accent hover:underline">
              GitHub
            </a>
          </p>
        </form>
      )}
    </div>
  );
}