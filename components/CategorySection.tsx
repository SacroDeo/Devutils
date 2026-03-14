import { ToolCard } from "./ToolCard";
import type { Tool } from "@/lib/tools";

const categoryIcons: Record<string, string> = {
  Developer: "⚙️",
  Security: "🔒",
  Web: "🌐",
  Text: "📝",
  Media: "🎵",
};

export function CategorySection({ category, tools }: { category: string; tools: Tool[] }) {
  if (!tools.length) return null;
  return (
    <section className="mb-12">
      {category && (
        <div className="flex items-center gap-3 mb-5">
          <span className="text-xl">{categoryIcons[category] ?? "🔧"}</span>
          <h2 className="font-display text-xl font-bold text-light-text dark:text-cosmos-text">
            {category}
          </h2>
          <span className="text-xs font-mono text-light-sub dark:text-cosmos-sub bg-light-surface dark:bg-cosmos-surface border border-light-border dark:border-cosmos-border px-2 py-0.5 rounded-full">
            {tools.length}
          </span>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map(t => <ToolCard key={t.slug} {...t} />)}
      </div>
    </section>
  );
}