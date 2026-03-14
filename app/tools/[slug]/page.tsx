import { tools } from "@/lib/tools";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

function ToolSkeleton() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-pulse">
      <div className="h-4 w-24 bg-light-surface dark:bg-cosmos-surface rounded mb-8" />
      <div className="h-10 w-64 bg-light-surface dark:bg-cosmos-surface rounded mb-3" />
      <div className="h-4 w-96 bg-light-surface dark:bg-cosmos-surface rounded mb-8" />
      <div className="rounded-2xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card p-6 space-y-4">
        <div className="h-32 bg-light-surface dark:bg-cosmos-surface rounded-xl" />
        <div className="h-10 w-24 bg-light-surface dark:bg-cosmos-surface rounded-xl" />
      </div>
    </div>
  );
}

const toolComponents: Record<string, React.ComponentType> = {
  "json-formatter": dynamic(() => import("@/components/tools/JsonFormatter"), { loading: ToolSkeleton }),
  "json-validator": dynamic(() => import("@/components/tools/JsonValidator"), { loading: ToolSkeleton }),
  "base64-encoder": dynamic(() => import("@/components/tools/Base64Encoder"), { loading: ToolSkeleton }),
  "base64-decoder": dynamic(() => import("@/components/tools/Base64Decoder"), { loading: ToolSkeleton }),
  "uuid-generator": dynamic(() => import("@/components/tools/UuidGenerator"), { loading: ToolSkeleton }),
  "jwt-decoder": dynamic(() => import("@/components/tools/JwtDecoder"), { loading: ToolSkeleton }),
  "regex-tester": dynamic(() => import("@/components/tools/RegexTester"), { loading: ToolSkeleton }),
  "password-generator": dynamic(() => import("@/components/tools/PasswordGenerator"), { loading: ToolSkeleton }),
  "password-entropy": dynamic(() => import("@/components/tools/PasswordEntropy"), { loading: ToolSkeleton }),
  "hash-generator": dynamic(() => import("@/components/tools/HashGenerator"), { loading: ToolSkeleton }),
  "html-minifier": dynamic(() => import("@/components/tools/HtmlMinifier"), { loading: ToolSkeleton }),
  "css-minifier": dynamic(() => import("@/components/tools/CssMinifier"), { loading: ToolSkeleton }),
  "js-minifier": dynamic(() => import("@/components/tools/JsMinifier"), { loading: ToolSkeleton }),
  "slug-generator": dynamic(() => import("@/components/tools/SlugGenerator"), { loading: ToolSkeleton }),
  "word-counter": dynamic(() => import("@/components/tools/WordCounter"), { loading: ToolSkeleton }),
  "text-diff": dynamic(() => import("@/components/tools/TextDiff"), { loading: ToolSkeleton }),
  "case-converter": dynamic(() => import("@/components/tools/CaseConverter"), { loading: ToolSkeleton }),
  "lorem-ipsum-generator": dynamic(() => import("@/components/tools/LoremIpsum"), { loading: ToolSkeleton }),
};

export function generateStaticParams() {
  return tools.map(t => ({ slug: t.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const tool = tools.find(t => t.slug === slug);
  if (!tool) return {};
  return { title: tool.name, description: tool.description };
}

export default async function ToolPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const tool = tools.find(t => t.slug === slug);
  if (!tool) notFound();

  const Component = toolComponents[slug];
  if (!Component) notFound();

  return <Component />;
}