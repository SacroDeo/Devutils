import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SHA-256 vs SHA-512 – Which Should You Use?",
  description: "Learn the difference between SHA-256 and SHA-512, which is faster, which is more secure, and when to use each hashing algorithm.",
  openGraph: { title: "SHA-256 vs SHA-512 – Which Should You Use?", description: "Compare SHA-256 and SHA-512 hashing algorithms with examples.", type: "article" },
};

export default function SHA256vsSHA512() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full">Security</span>
          <span className="text-xs font-mono text-light-sub dark:text-cosmos-sub">5 min read</span>
        </div>
        <h1 className="font-display text-5xl font-bold text-light-text dark:text-cosmos-text leading-tight mb-4">
          SHA-256 vs SHA-512 — Which Should You Use?
        </h1>
        <p className="text-lg text-light-sub dark:text-cosmos-sub leading-relaxed">
          Both SHA-256 and SHA-512 are secure hashing algorithms but they have different use cases, performance characteristics, and output sizes.
        </p>
      </div>

      <div className="rounded-2xl border border-accent/20 bg-accent/5 p-5 mb-10 flex items-start gap-4">
        <span className="text-2xl">#</span>
        <div>
          <p className="font-semibold text-light-text dark:text-cosmos-text text-sm mb-1">Generate hashes instantly</p>
          <p className="text-sm text-light-sub dark:text-cosmos-sub">
            Use our free <Link href="/tools/hash-generator" className="text-accent hover:underline font-medium">Hash Generator</Link> — supports SHA-1, SHA-256, and SHA-512.
          </p>
        </div>
      </div>

      <div className="space-y-10 text-light-text dark:text-cosmos-text">
        <section>
          <h2 className="font-display text-2xl font-bold mb-3">Quick Comparison</h2>
          <div className="overflow-auto rounded-xl border border-light-border dark:border-cosmos-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-light-border dark:border-cosmos-border bg-light-surface dark:bg-cosmos-surface">
                  <th className="text-left px-4 py-3 font-mono text-xs text-accent">Property</th>
                  <th className="text-left px-4 py-3 font-mono text-xs text-accent">SHA-256</th>
                  <th className="text-left px-4 py-3 font-mono text-xs text-accent">SHA-512</th>
                </tr>
              </thead>
              <tbody className="text-light-sub dark:text-cosmos-sub divide-y divide-light-border dark:divide-cosmos-border">
                {[
                  { prop: "Output size", s256: "256 bits (64 hex chars)", s512: "512 bits (128 hex chars)" },
                  { prop: "Speed (32-bit)", s256: "Faster", s512: "Slower" },
                  { prop: "Speed (64-bit)", s256: "Fast", s512: "Faster than SHA-256" },
                  { prop: "Security", s256: "Very secure", s512: "Slightly more secure" },
                  { prop: "Common use", s256: "TLS, Bitcoin, general", s512: "Password hashing, signatures" },
                ].map(row => (
                  <tr key={row.prop}>
                    <td className="px-4 py-3 font-semibold text-light-text dark:text-cosmos-text">{row.prop}</td>
                    <td className="px-4 py-3">{row.s256}</td>
                    <td className="px-4 py-3">{row.s512}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">SHA-256 example output</h2>
          <pre className="bg-light-surface dark:bg-cosmos-surface border border-light-border dark:border-cosmos-border rounded-2xl p-5 text-sm font-mono text-light-sub dark:text-cosmos-sub overflow-auto break-all">
{`SHA-256("hello") =
2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824`}
          </pre>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">SHA-512 example output</h2>
          <pre className="bg-light-surface dark:bg-cosmos-surface border border-light-border dark:border-cosmos-border rounded-2xl p-5 text-sm font-mono text-light-sub dark:text-cosmos-sub overflow-auto break-all">
{`SHA-512("hello") =
9b71d224bd62f3785d96d46ad3ea3d73319bfbc2890caadae2dff72519673ca72323c3d99ba5c11d7c7acc6e14b8c5da0c4663475c2e5c3adef46f73bcdec043`}
          </pre>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">When to use SHA-256</h2>
          <ul className="space-y-2 text-light-sub dark:text-cosmos-sub">
            {[
              "SSL/TLS certificates",
              "Blockchain and cryptocurrency",
              "File integrity verification",
              "Digital signatures",
              "General purpose hashing on 32-bit systems",
            ].map(item => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">When to use SHA-512</h2>
          <ul className="space-y-2 text-light-sub dark:text-cosmos-sub">
            {[
              "Password hashing (combined with salt)",
              "High security digital signatures",
              "64-bit systems where speed matters",
              "When longer hash output is required",
            ].map(item => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-accent mt-1">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">Important — never use SHA for passwords alone</h2>
          <p className="text-light-sub dark:text-cosmos-sub leading-relaxed">
            Neither SHA-256 nor SHA-512 should be used alone for password hashing. They are too fast — attackers can compute billions of hashes per second. Use <code className="font-mono text-accent">bcrypt</code>, <code className="font-mono text-accent">Argon2</code>, or <code className="font-mono text-accent">scrypt</code> for passwords instead.
          </p>
        </section>

        <section className="rounded-2xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card p-6">
          <h2 className="font-display text-xl font-bold mb-4 text-light-text dark:text-cosmos-text">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/tools/hash-generator", label: "Hash Generator", desc: "Generate SHA-256 & SHA-512" },
              { href: "/tools/password-generator", label: "Password Generator", desc: "Generate secure passwords" },
              { href: "/tools/base64-encoder", label: "Base64 Encoder", desc: "Encode text to Base64" },
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