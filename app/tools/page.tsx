"use client";
import { useState } from "react";
import { tools, categories } from "@/lib/tools";
import { ToolCard } from "@/components/ToolCard";
import { SearchBar } from "@/components/SearchBar";

export default function ToolsPage() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const allCategories = ["All", ...categories];

  const filtered = tools.filter(t => {
    const matchesQuery =
      !query ||
      t.name.toLowerCase().includes(query.toLowerCase()) ||
      t.description.toLowerCase().includes(query.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || t.category === activeCategory;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-4xl font-extrabold mb-2 text-light-text dark:text-cosmos-text">
          All Tools
        </h1>
        <p className="text-light-sub dark:text-cosmos-sub text-sm mb-6">
          {tools.length} tools · pick a category or search
        </p>
        <SearchBar value={query} onChange={v => { setQuery(v); setActiveCategory("All"); }} />
      </div>

      {/* Category tabs */}
      {!query && (
        <div className="flex flex-wrap gap-2 mb-8">
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all border ${
                activeCategory === cat
                  ? "bg-accent text-white border-accent"
                  : "border-light-border dark:border-cosmos-border text-light-sub dark:text-cosmos-sub hover:border-accent hover:text-accent"
              }`}
            >
              {cat}
              <span className={`ml-2 text-xs font-mono px-1.5 py-0.5 rounded-full ${
                activeCategory === cat
                  ? "bg-white/20 text-white"
                  : "bg-light-surface dark:bg-cosmos-surface text-light-sub dark:text-cosmos-sub"
              }`}>
                {cat === "All" ? tools.length : tools.filter(t => t.category === cat).length}
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Tools grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(t => (
            <ToolCard key={t.slug} {...t} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-4xl mb-4">🔍</p>
          <p className="text-light-text dark:text-cosmos-text font-semibold mb-2">No tools found</p>
          <p className="text-light-sub dark:text-cosmos-sub text-sm">
            No results for "{query}" — try a different keyword
          </p>
        </div>
      )}

    </div>
  );
}