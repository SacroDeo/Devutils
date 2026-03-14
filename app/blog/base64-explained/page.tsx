import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Base64 Explained – What It Is, How It Works & When to Use It",
  description:
    "Learn what Base64 encoding is, how it works under the hood, common use cases like data URIs and JWTs, and how to encode and decode Base64 for free.",
  openGraph: {
    title: "Base64 Explained",
    description: "What Base64 encoding is, how it works, and when to use it.",
    type: "article",
  },
};

export default function Base64Explained() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full">Developer</span>
          <span className="text-xs font-mono text-light-sub dark:text-cosmos-sub">5 min read</span>
        </div>
        <h1 className="font-display text-5xl font-bold text-light-text dark:text-cosmos-text leading-tight mb-4">
          Base64 Explained
        </h1>
        <p className="text-lg text-light-sub dark:text-cosmos-sub leading-relaxed">
          Base64 shows up everywhere — in JWTs, email attachments, image embeds, and API responses. Here is exactly what it is, how it works, and when you should and should not use it.
        </p>
      </div>

      <div className="rounded-2xl border border-accent/20 bg-accent/5 p-5 mb-10 flex items-start gap-4">
        <span className="text-2xl">🔄</span>
        <div>
          <p className="font-semibold text-light-text dark:text-cosmos-text text-sm mb-1">Encode or decode Base64 instantly</p>
          <p className="text-sm text-light-sub dark:text-cosmos-sub">
            Use our free{" "}
            <Link href="/tools/base64-encoder" className="text-accent hover:underline font-medium">
              Base64 Encoder
            </Link>{" "}
            and{" "}
            <Link href="/tools/base64-decoder" className="text-accent hover:underline font-medium">
              Base64 Decoder
            </Link>{" "}
            — runs entirely in your browser.
          </p>
        </div>
      </div>

      <div className="space-y-10 text-light-text dark:text-cosmos-text">

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">What is Base64?</h2>
          <p className="text-light-sub dark:text-cosmos-sub leading-relaxed mb-4">
            Base64 is a binary-to-text encoding scheme that converts binary data into a string of 64 printable ASCII characters. It was designed to safely transmit binary data over channels that only handle text — like email or HTTP headers.
          </p>
          <p className="text-light-sub dark:text-cosmos-sub leading-relaxed">
            The 64 characters used are: A–Z, a–z, 0–9, and the symbols <code className="font-mono text-accent">+</code> and <code className="font-mono text-accent">/</code>. The <code className="font-mono text-accent">=</code> character is used for padding.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">How Base64 Encoding Works</h2>
          <p className="text-light-sub dark:text-cosmos-sub leading-relaxed mb-4">
            Base64 takes every 3 bytes (24 bits) of binary data and splits them into four 6-bit groups. Each 6-bit group maps to one of the 64 characters in the Base64 alphabet.
          </p>
          <pre className="bg-light-surface dark:bg-cosmos-surface border border-light-border dark:border-cosmos-border rounded-2xl p-5 text-sm font-mono text-light-sub dark:text-cosmos-sub overflow-auto">
{`Text:    M        a        n
ASCII:   77       97       110
Binary:  01001101 01100001 01101110

Split into 6-bit groups:
         010011  010110  000101  101110

Base64:  T       W       F       u

Result:  "Man" → "TWFu"`}
          </pre>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">Quick Examples</h2>
          <div className="space-y-3">
            {[
              { input: "Hello", output: "SGVsbG8=" },
              { input: "Hello, World!", output: "SGVsbG8sIFdvcmxkIQ==" },
              { input: "DevUtils", output: "RGV2VXRpbHM=" },
              { input: "1", output: "MQ==" },
              { input: "abc", output: "YWJj" },
            ].map(ex => (
              <div key={ex.input} className="flex items-center gap-3 p-3 rounded-xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card">
                <code className="font-mono text-sm text-light-text dark:text-cosmos-text flex-1">{ex.input}</code>
                <span className="text-accent font-mono text-xs">→</span>
                <code className="font-mono text-sm text-accent flex-1">{ex.output}</code>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">Common Use Cases</h2>
          <div className="space-y-3">
            {[
              {
                title: "Data URIs (inline images)",
                desc: "Embed images directly in HTML or CSS without a separate HTTP request.",
                example: `<img src="data:image/png;base64,iVBORw0KGgo..." />`,
              },
              {
                title: "JWT Tokens",
                desc: "JWT headers and payloads are Base64URL encoded (a URL-safe variant).",
                example: `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyIn0.xxx`,
              },
              {
                title: "Email Attachments (MIME)",
                desc: "Email protocols transfer binary attachments as Base64 encoded text.",
                example: `Content-Transfer-Encoding: base64`,
              },
              {
                title: "API Authentication",
                desc: "HTTP Basic Auth encodes credentials as Base64 in the Authorization header.",
                example: `Authorization: Basic dXNlcjpwYXNzd29yZA==`,
              },
            ].map(u => (
              <div key={u.title} className="p-4 rounded-xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card">
                <p className="font-semibold text-light-text dark:text-cosmos-text text-sm mb-1">{u.title}</p>
                <p className="text-xs text-light-sub dark:text-cosmos-sub mb-2">{u.desc}</p>
                <code className="text-xs font-mono text-accent break-all">{u.example}</code>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">Base64 in JavaScript</h2>
          <pre className="bg-light-surface dark:bg-cosmos-surface border border-light-border dark:border-cosmos-border rounded-2xl p-5 text-sm font-mono text-light-sub dark:text-cosmos-sub overflow-auto">
{`// Encode
btoa("Hello, World!")
// → "SGVsbG8sIFdvcmxkIQ=="

// Decode
atob("SGVsbG8sIFdvcmxkIQ==")
// → "Hello, World!"

// For Unicode support:
btoa(unescape(encodeURIComponent("héllo")))
decodeURIComponent(escape(atob(encoded)))`}
          </pre>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">Base64 vs Base64URL</h2>
          <p className="text-light-sub dark:text-cosmos-sub leading-relaxed mb-4">
            Standard Base64 uses <code className="font-mono text-accent">+</code> and <code className="font-mono text-accent">/</code> which are special characters in URLs. Base64URL replaces them with <code className="font-mono text-accent">-</code> and <code className="font-mono text-accent">_</code> and omits padding — making it safe to use in URLs and JWT tokens.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card">
              <p className="text-xs font-mono text-accent mb-2">Standard Base64</p>
              <code className="text-xs font-mono text-light-sub dark:text-cosmos-sub">SGVs+bG8/IFdvcmxkIQ==</code>
            </div>
            <div className="p-4 rounded-xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card">
              <p className="text-xs font-mono text-accent mb-2">Base64URL</p>
              <code className="text-xs font-mono text-light-sub dark:text-cosmos-sub">SGVs-bG8_IFdvcmxkIQ</code>
            </div>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">When NOT to Use Base64</h2>
          <ul className="space-y-2 text-light-sub dark:text-cosmos-sub">
            {[
              "Don't use Base64 as encryption — it provides zero security",
              "Avoid for large files — it increases size by ~33%",
              "Don't store passwords in Base64 — use bcrypt or Argon2",
              "Avoid inlining large images — hurts page load performance",
            ].map(w => (
              <li key={w} className="flex items-start gap-2">
                <span className="text-red-400 mt-1 flex-shrink-0">✗</span>
                <span>{w}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card p-6">
          <h2 className="font-display text-xl font-bold mb-4 text-light-text dark:text-cosmos-text">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/tools/base64-encoder", label: "Base64 Encoder", desc: "Encode text to Base64" },
              { href: "/tools/base64-decoder", label: "Base64 Decoder", desc: "Decode Base64 strings" },
              { href: "/tools/jwt-decoder", label: "JWT Decoder", desc: "Decode JWT tokens" },
              { href: "/tools/hash-generator", label: "Hash Generator", desc: "Generate SHA hashes" },
            ].map(t => (
              <Link key={t.href} href={t.href}
                className="flex items-center gap-3 p-3 rounded-xl border border-light-border dark:border-cosmos-border hover:border-accent transition-colors group">
                <div>
                  <p className="text-sm font-semibold text-light-text dark:text-cosmos-text group-hover:text-accent transition-colors">{t.label}</p>
                  <p className="text-xs text-light-sub dark:text-cosmos-sub">{t.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </article>
  );
}