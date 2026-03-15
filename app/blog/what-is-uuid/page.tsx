import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What is a UUID and How to Generate One – Free UUID Generator",
  description: "Learn what a UUID is, the difference between UUID v1 v4 v5, how to generate UUIDs in JavaScript, Python, and online for free.",
  openGraph: { title: "What is a UUID and How to Generate One", description: "Learn what UUIDs are and how to generate them in any language.", type: "article" },
};

export default function WhatIsUUID() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full">Developer</span>
          <span className="text-xs font-mono text-light-sub dark:text-cosmos-sub">4 min read</span>
        </div>
        <h1 className="font-display text-5xl font-bold text-light-text dark:text-cosmos-text leading-tight mb-4">
          What is a UUID and How to Generate One
        </h1>
        <p className="text-lg text-light-sub dark:text-cosmos-sub leading-relaxed">
          UUIDs are everywhere in modern software — database IDs, API keys, session tokens. Here is exactly what they are and how to generate them.
        </p>
      </div>

      <div className="rounded-2xl border border-accent/20 bg-accent/5 p-5 mb-10 flex items-start gap-4">
        <span className="text-2xl">🔑</span>
        <div>
          <p className="font-semibold text-light-text dark:text-cosmos-text text-sm mb-1">Generate a UUID instantly</p>
          <p className="text-sm text-light-sub dark:text-cosmos-sub">
            Use our free <Link href="/tools/uuid-generator" className="text-accent hover:underline font-medium">UUID Generator</Link> — generates cryptographically random v4 UUIDs instantly.
          </p>
        </div>
      </div>

      <div className="space-y-10 text-light-text dark:text-cosmos-text">
        <section>
          <h2 className="font-display text-2xl font-bold mb-3">What is a UUID?</h2>
          <p className="text-light-sub dark:text-cosmos-sub leading-relaxed mb-4">
            A UUID (Universally Unique Identifier) is a 128-bit label used to uniquely identify information in computer systems. It is represented as 32 hexadecimal digits displayed in 5 groups separated by hyphens.
          </p>
          <pre className="bg-light-surface dark:bg-cosmos-surface border border-light-border dark:border-cosmos-border rounded-2xl p-5 text-sm font-mono text-light-sub dark:text-cosmos-sub overflow-auto">
{`550e8400-e29b-41d4-a716-446655440000
xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx

Where:
M = version number
N = variant`}
          </pre>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">UUID versions explained</h2>
          <div className="grid grid-cols-1 gap-3">
            {[
              { v: "v1", title: "Time-based", desc: "Generated from current timestamp and MAC address. Reveals when and where it was created." },
              { v: "v3", title: "Name-based (MD5)", desc: "Generated from a namespace and name using MD5 hashing. Same input always produces same UUID." },
              { v: "v4", title: "Random (most common)", desc: "Generated from random numbers. Most widely used. Virtually impossible to predict or collide." },
              { v: "v5", title: "Name-based (SHA-1)", desc: "Like v3 but uses SHA-1 hashing. More secure than v3." },
            ].map(item => (
              <div key={item.v} className="flex gap-4 p-4 rounded-xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card">
                <span className="text-accent font-mono font-bold text-sm flex-shrink-0 mt-0.5">{item.v}</span>
                <div>
                  <p className="font-semibold text-light-text dark:text-cosmos-text text-sm mb-0.5">{item.title}</p>
                  <p className="text-xs text-light-sub dark:text-cosmos-sub">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">Generate UUID in JavaScript</h2>
          <pre className="bg-light-surface dark:bg-cosmos-surface border border-light-border dark:border-cosmos-border rounded-2xl p-5 text-sm font-mono text-light-sub dark:text-cosmos-sub overflow-auto">
{`// Modern browsers and Node.js 14.17+
crypto.randomUUID()
// "550e8400-e29b-41d4-a716-446655440000"

// Using uuid npm package
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"`}
          </pre>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">Generate UUID in Python</h2>
          <pre className="bg-light-surface dark:bg-cosmos-surface border border-light-border dark:border-cosmos-border rounded-2xl p-5 text-sm font-mono text-light-sub dark:text-cosmos-sub overflow-auto">
{`import uuid

# Generate v4 UUID
str(uuid.uuid4())
# "550e8400-e29b-41d4-a716-446655440000"

# Generate v1 UUID
str(uuid.uuid1())`}
          </pre>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">When to use UUIDs</h2>
          <ul className="space-y-2 text-light-sub dark:text-cosmos-sub">
            {[
              "Database primary keys — no need for auto-increment",
              "API resource identifiers — /users/550e8400-e29b-41d4-a716-446655440000",
              "Session tokens and request IDs",
              "File names for uploaded files",
              "Distributed systems where IDs must be unique across machines",
            ].map(item => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card p-6">
          <h2 className="font-display text-xl font-bold mb-4 text-light-text dark:text-cosmos-text">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/tools/uuid-generator", label: "UUID Generator", desc: "Generate v4 UUIDs instantly" },
              { href: "/tools/hash-generator", label: "Hash Generator", desc: "Generate SHA hashes" },
              { href: "/tools/password-generator", label: "Password Generator", desc: "Generate secure passwords" },
              { href: "/tools/jwt-decoder", label: "JWT Decoder", desc: "Decode JWT tokens" },
            ].map(t => (
              <Link key={t.href} href={t.href} className="flex items-center gap-3 p-3 rounded-xl border border-light-border dark:border-cosmos-border hover:border-accent transition-colors group">
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