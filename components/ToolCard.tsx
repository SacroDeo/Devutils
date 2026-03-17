import Link from "next/link";
import {
  Braces, CheckCircle, ArrowRightCircle, ArrowLeftCircle,
  Key, Lock, SearchCode, Shield, BarChart, Hash,
  Code, Paintbrush, Zap, Link as LinkIcon, FileText,
  GitCompare, Type, AlignLeft
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "braces": <Braces size={18} />,
  "check-circle": <CheckCircle size={18} />,
  "arrow-right-circle": <ArrowRightCircle size={18} />,
  "arrow-left-circle": <ArrowLeftCircle size={18} />,
  "key": <Key size={18} />,
  "lock": <Lock size={18} />,
  "search-code": <SearchCode size={18} />,
  "shield": <Shield size={18} />,
  "bar-chart": <BarChart size={18} />,
  "hash": <Hash size={18} />,
  "code": <Code size={18} />,
  "paintbrush": <Paintbrush size={18} />,
  "zap": <Zap size={18} />,
  "link": <LinkIcon size={18} />,
  "file-text": <FileText size={18} />,
  "git-compare": <GitCompare size={18} />,
  "type": <Type size={18} />,
  "align-left": <AlignLeft size={18} />,
};

interface ToolCardProps {
  name: string;
  description: string;
  slug: string;
  icon: string;
}

export function ToolCard({ name, description, slug, icon }: ToolCardProps) {
  return (
    <Link href={`/tools/${slug}`}
      className="gradient-border group block p-5 rounded-2xl border border-light-border dark:border-cosmos-border bg-light-card dark:bg-cosmos-card hover:shadow-lg hover:shadow-accent/5 transition-all duration-200">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-light-surface dark:bg-cosmos-surface border border-light-border dark:border-cosmos-border flex items-center justify-center text-accent flex-shrink-0 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-200">
          {iconMap[icon] ?? <Code size={18} />}
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