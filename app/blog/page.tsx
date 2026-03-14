import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog – DevUtils",
  description: "Guides and articles on developer tools, security, and web development.",
};

const posts = [
  {
    slug: "json-format-guide",
    title: "JSON Formatting Guide",
    description: "Learn how to format and validate JSON correctly with examples.",
    category: "Developer",
    readTime: "3 min read",
  },
  {
    slug: "password-security-guide",
    title: "Password Security Guide",
    description: "Learn how to create and manage strong passwords using entropy.",
    category: "Security",
    readTime: "4 min read",
  },
  {
    slug: "base64-explained",
    title: "Base64 Explained",
    description: "Understand what Base64 encoding is and when to use it.",
    category: "Developer",
    readTime: "3 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-xs font-mono text-accent uppercase tracking-widest mb-3">Blog</p>
        <h1 className="font-display text-5xl font-bold text-light-text dark:text-cosmos-text mb-4">
          Guides & Articles
        </h1>
        <p className="text-light-sub dark:text-cosmos-sub text-lg">
          Deep dives into developer tools, security practices, and web fundamentals.
        </p>
      </div>

      <div className="space-y-4">
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`}
            className="group block p-6 rounded-2xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card hover:border-accent transition-all duration-200">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs font-mono text-light-sub dark:text-cosmos-sub">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="font-display text-xl font-bold text-light-text dark:text-cosmos-text group-hover:text-accent transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-light-sub dark:text-cosmos-sub text-sm leading-relaxed">
                  {post.description}
                </p>
              </div>
              <span className="text-light-sub dark:text-cosmos-sub group-hover:text-accent transition-colors text-xl mt-1">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}