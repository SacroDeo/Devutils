import type { Metadata } from "next";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Privacy() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="font-display text-4xl font-extrabold mb-4">Privacy Policy</h1>
      <div className="text-sm text-zinc-600 dark:text-zinc-300 space-y-4">
        <p><strong>All tools run client-side.</strong> No data you enter is transmitted to any server.</p>
        <p>We do not collect personal information, use tracking cookies, or display ads.</p>
        <p>Basic anonymized analytics (page views) may be collected via Vercel Analytics. No personally identifiable information is stored.</p>
      </div>
    </div>
  );
}