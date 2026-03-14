import Link from "next/link";

interface ToolCardProps {
  name: string;
  description: string;
  slug: string;
  icon: string;
}

export function ToolCard({ name, description, slug, icon }: ToolCardProps) {
  return (
    <Link href={`/tools/${slug}`}
      className="group block p-5 rounded-2xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card hover:border-accent dark:hover:border-accent transition-all duration-200 hover:cosmos-glow">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-light-surface dark:bg-cosmos-surface border border-light-border dark:border-cosmos-border flex items-center justify-center text-lg flex-shrink-0 group-hover:border-accent transition-colors">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-base text-light-text dark:text-cosmos-text group-hover:text-accent transition-colors mb-1">
            {name}
          </h3>
          <p className="text-sm text-light-sub dark:text-cosmos-sub leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}