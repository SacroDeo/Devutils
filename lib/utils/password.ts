const CHARS = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  digits: "0123456789",
  symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
};

export function generatePassword(
  length: number,
  opts: { upper: boolean; lower: boolean; digits: boolean; symbols: boolean }
): string {
  let pool = "";
  if (opts.upper) pool += CHARS.upper;
  if (opts.lower) pool += CHARS.lower;
  if (opts.digits) pool += CHARS.digits;
  if (opts.symbols) pool += CHARS.symbols;
  if (!pool) pool = CHARS.lower;
  const arr = new Uint8Array(length);
  crypto.getRandomValues(arr);
  return Array.from(arr).map(b => pool[b % pool.length]).join("");
}

export function checkEntropy(password: string): {
  entropy: number;
  strength: string;
  label: string;
} {
  let pool = 0;
  if (/[a-z]/.test(password)) pool += 26;
  if (/[A-Z]/.test(password)) pool += 26;
  if (/[0-9]/.test(password)) pool += 10;
  if (/[^a-zA-Z0-9]/.test(password)) pool += 32;
  const entropy = password.length * Math.log2(pool || 1);
  const strength =
    entropy < 28 ? "Very Weak"
    : entropy < 36 ? "Weak"
    : entropy < 60 ? "Fair"
    : entropy < 90 ? "Strong"
    : "Very Strong";
  const label =
    entropy < 28 ? "🔴"
    : entropy < 36 ? "🟠"
    : entropy < 60 ? "🟡"
    : entropy < 90 ? "🟢"
    : "✨";
  return { entropy: Math.round(entropy), strength, label };
}