import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Password Security Guide – How to Create Strong Passwords",
  description:
    "Learn what makes a password strong, how entropy works, best practices for password management, and how to generate secure passwords for free.",
  openGraph: {
    title: "Password Security Guide",
    description: "Learn entropy, password strength, and best practices for secure passwords.",
    type: "article",
  },
};

export default function PasswordSecurityGuide() {
  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full">Security</span>
          <span className="text-xs font-mono text-light-sub dark:text-cosmos-sub">6 min read</span>
        </div>
        <h1 className="font-display text-5xl font-bold text-light-text dark:text-cosmos-text leading-tight mb-4">
          Password Security Guide
        </h1>
        <p className="text-lg text-light-sub dark:text-cosmos-sub leading-relaxed">
          Most passwords are weak. Learn what makes a password truly secure, how entropy is calculated, and how to protect your accounts without memorizing random strings.
        </p>
      </div>

      <div className="rounded-2xl border border-accent/20 bg-accent/5 p-5 mb-10 flex items-start gap-4">
        <span className="text-2xl">🛡️</span>
        <div>
          <p className="font-semibold text-light-text dark:text-cosmos-text text-sm mb-1">Generate a secure password now</p>
          <p className="text-sm text-light-sub dark:text-cosmos-sub">
            Use our free{" "}
            <Link href="/tools/password-generator" className="text-accent hover:underline font-medium">
              Password Generator
            </Link>{" "}
            or check your existing password with the{" "}
            <Link href="/tools/password-entropy" className="text-accent hover:underline font-medium">
              Password Entropy Checker
            </Link>.
          </p>
        </div>
      </div>

      <div className="space-y-10 text-light-text dark:text-cosmos-text">

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">Why Most Passwords Fail</h2>
          <p className="text-light-sub dark:text-cosmos-sub leading-relaxed mb-4">
            The most common passwords used worldwide are still things like "123456", "password", and "qwerty". Even "clever" substitutions like "P@ssw0rd" are trivially broken by modern cracking tools that use rule-based dictionaries.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "Time to crack 'password'", value: "Instant" },
              { label: "Time to crack 'P@ssw0rd'", value: "< 1 second" },
              { label: "Time to crack 16-char random", value: "Centuries" },
              { label: "Passwords reused on avg", value: "14 sites" },
            ].map(s => (
              <div key={s.label} className="p-4 rounded-xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card">
                <p className="text-xl font-display font-bold text-accent mb-1">{s.value}</p>
                <p className="text-xs text-light-sub dark:text-cosmos-sub">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">What is Password Entropy?</h2>
          <p className="text-light-sub dark:text-cosmos-sub leading-relaxed mb-4">
            Entropy measures how unpredictable a password is, expressed in bits. The higher the entropy, the longer it takes to crack by brute force. It is calculated as:
          </p>
          <pre className="bg-light-surface dark:bg-cosmos-surface border border-light-border dark:border-cosmos-border rounded-2xl p-5 text-sm font-mono text-light-sub dark:text-cosmos-sub overflow-auto mb-4">
{`Entropy = length × log₂(pool_size)

Where pool_size is:
  26  — lowercase only
  52  — lower + uppercase
  62  — lower + upper + digits
  94  — all printable ASCII`}
          </pre>
          <p className="text-light-sub dark:text-cosmos-sub leading-relaxed">
            A 16-character password using all character types has ~105 bits of entropy — effectively uncrackable with current technology.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">Entropy Strength Levels</h2>
          <div className="space-y-3">
            {[
              { label: "Very Weak", bits: "< 28 bits", example: "abc123", color: "bg-red-500" },
              { label: "Weak", bits: "28–35 bits", example: "Tr0ub4dor", color: "bg-orange-500" },
              { label: "Fair", bits: "36–59 bits", example: "H7#mK9@nP2", color: "bg-yellow-500" },
              { label: "Strong", bits: "60–127 bits", example: "X#9kL$mZ2qR7nW!v", color: "bg-accent" },
              { label: "Very Strong", bits: "128+ bits", example: "32+ char random", color: "bg-green-500" },
            ].map(s => (
              <div key={s.label} className="flex items-center gap-4 p-4 rounded-xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card">
                <div className={`w-2 h-10 rounded-full ${s.color} flex-shrink-0`} />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-light-text dark:text-cosmos-text">{s.label}</p>
                    <span className="text-xs font-mono text-light-sub dark:text-cosmos-sub">{s.bits}</span>
                  </div>
                  <code className="text-xs font-mono text-light-sub dark:text-cosmos-sub">{s.example}</code>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">Password Best Practices</h2>
          <div className="space-y-3">
            {[
              { tip: "Use at least 16 characters", detail: "Length is the single biggest factor in password strength." },
              { tip: "Use all character types", detail: "Mix uppercase, lowercase, digits, and symbols to maximize pool size." },
              { tip: "Never reuse passwords", detail: "If one site leaks, attackers try the same password everywhere." },
              { tip: "Use a password manager", detail: "Tools like Bitwarden or 1Password generate and store unique passwords." },
              { tip: "Enable 2FA everywhere", detail: "Even a weak password becomes much harder to exploit with 2FA." },
              { tip: "Avoid dictionary words", detail: "Even with substitutions, dictionary-based passwords are cracked quickly." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-4 rounded-xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card">
                <span className="text-accent font-mono font-bold text-sm flex-shrink-0 mt-0.5">0{i + 1}</span>
                <div>
                  <p className="font-semibold text-light-text dark:text-cosmos-text text-sm mb-0.5">{item.tip}</p>
                  <p className="text-xs text-light-sub dark:text-cosmos-sub">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold mb-3">Passphrase vs Random Password</h2>
          <p className="text-light-sub dark:text-cosmos-sub leading-relaxed mb-4">
            A passphrase like "correct-horse-battery-staple" (4 random words) has ~44 bits of entropy and is far easier to remember than a random string of the same entropy. For passwords you need to type regularly, passphrases are an excellent choice.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 rounded-xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card">
              <p className="text-xs font-mono text-accent mb-2">Passphrase</p>
              <code className="text-sm font-mono text-light-sub dark:text-cosmos-sub">correct-horse-battery-staple</code>
              <p className="text-xs text-light-sub dark:text-cosmos-sub mt-2">~44 bits · memorable</p>
            </div>
            <div className="p-4 rounded-xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card">
              <p className="text-xs font-mono text-accent mb-2">Random</p>
              <code className="text-sm font-mono text-light-sub dark:text-cosmos-sub">X#9kL$mZ2qR7</code>
              <p className="text-xs text-light-sub dark:text-cosmos-sub mt-2">~79 bits · stronger</p>
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card p-6">
          <h2 className="font-display text-xl font-bold mb-4 text-light-text dark:text-cosmos-text">Related Tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { href: "/tools/password-generator", label: "Password Generator", desc: "Generate secure passwords" },
              { href: "/tools/password-entropy", label: "Entropy Checker", desc: "Test your password strength" },
              { href: "/tools/hash-generator", label: "Hash Generator", desc: "SHA-256 & more" },
              { href: "/tools/uuid-generator", label: "UUID Generator", desc: "Generate unique IDs" },
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