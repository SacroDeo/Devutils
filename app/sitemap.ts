import { MetadataRoute } from "next";
import { tools } from "@/lib/tools";

const BASE_URL = "https://devutilsonline.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const toolRoutes = tools.map(t => ({
    url: `${BASE_URL}/tools/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogRoutes = [
    "json-format-guide",
    "password-security-guide",
    "base64-explained",
    "how-to-format-json-javascript",
    "what-is-uuid",
    "sha256-vs-sha512",
    "what-is-regex",
    "what-is-a-slug",
  ].map(slug => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const staticRoutes = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE_URL}/tools`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.4 },
    { url: `${BASE_URL}/privacy`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  return [...staticRoutes, ...toolRoutes, ...blogRoutes];
}