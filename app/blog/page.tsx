import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog – DevUtils",
  description: "Guides and articles on developer tools, security, and web development.",
};

const posts = [
  { slug: "json-format-guide", title: "JSON Formatting Guide", description: "Learn how to format and validate JSON correctly with examples.", category: "Developer", readTime: "3 min read" },
  { slug: "password-security-guide", title: "Password Security Guide", description: "Learn how to create and manage strong passwords using entropy.", category: "Security", readTime: "4 min read" },
  { slug: "base64-explained", title: "Base64 Explained", description: "Understand what Base64 encoding is and when to use it.", category: "Developer", readTime: "3 min read" },
  { slug: "how-to-format-json-javascript", title: "How to Format JSON in JavaScript", description: "Format and prettify JSON in JavaScript using JSON.stringify with examples.", category: "Developer", readTime: "4 min read" },
  { slug: "what-is-uuid", title: "What is a UUID and How to Generate One", description: "Learn what UUIDs are, the difference between v1 v4 v5, and how to generate them.", category: "Developer", readTime: "4 min read" },
  { slug: "sha256-vs-sha512", title: "SHA-256 vs SHA-512 – Which Should You Use?", description: "Compare SHA-256 and SHA-512 hashing algorithms and learn when to use each.", category: "Security", readTime: "5 min read" },
  { slug: "what-is-regex", title: "What is Regex – Regular Expressions Explained", description: "Learn regex syntax, common patterns, and how to test regular expressions.", category: "Developer", readTime: "6 min read" },
  { slug: "what-is-a-slug", title: "What is a URL Slug and Why Does It Matter for SEO", description: "Learn what URL slugs are and best practices for SEO-friendly slugs.", category: "Web", readTime: "4 min read" },
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
                  <span className="text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full">{post.category}</span>
                  <span className="text-xs font-mono text-light-sub dark:text-cosmos-sub">{post.readTime}</span>
                </div>
                <h2 className="font-display text-xl font-bold text-light-text dark:text-cosmos-text group-hover:text-accent transition-colors mb-2">{post.title}</h2>
                <p className="text-light-sub dark:text-cosmos-sub text-sm leading-relaxed">{post.description}</p>
              </div>
              <span className="text-light-sub dark:text-cosmos-sub group-hover:text-accent transition-colors text-xl mt-1">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}