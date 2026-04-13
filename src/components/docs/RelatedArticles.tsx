"use client";

import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";

interface RelatedArticle {
  title: string;
  href: string;
  category: string;
  icon?: string;
}

interface RelatedArticlesProps {
  articles?: RelatedArticle[];
  currentPath?: string;
  className?: string;
}

const defaultArticles: RelatedArticle[] = [
  {
    title: "Getting Started Guide",
    href: "/docs/getting-started",
    category: "Guide",
  },
  {
    title: "API Reference",
    href: "/docs/api-reference",
    category: "Reference",
  },
  {
    title: "Best Practices",
    href: "/docs/best-practices",
    category: "Guide",
  },
];

export function RelatedArticles({ articles = defaultArticles, currentPath, className }: RelatedArticlesProps) {
  // Filter out current article
  const filteredArticles = articles.filter((article) => article.href !== currentPath);

  return (
    <div className={className}>
      <h3 className="text-lg font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-4">
        Related Articles
      </h3>
      <div className="grid gap-3">
        {filteredArticles.map((article) => (
          <Link
            key={article.href}
            href={article.href}
            className="group flex items-start gap-3 p-4 rounded-lg border border-docs-border dark:border-docs-border-dark hover:border-dark-red dark:hover:border-dark-red-light bg-white dark:bg-black hover:bg-red-50 dark:hover:bg-red-950/20 transition-all"
          >
            <FileText className="h-5 w-5 text-docs-muted-foreground dark:text-docs-muted-foreground-dark mt-0.5 group-hover:text-dark-red dark:group-hover:text-dark-red-light transition-colors" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-docs-foreground dark:text-docs-foreground-dark group-hover:text-dark-red dark:group-hover:text-dark-red-light transition-colors">
                {article.title}
              </p>
              <span className="text-xs text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
                {article.category}
              </span>
            </div>
            <ArrowRight className="h-4 w-4 text-docs-muted-foreground dark:text-docs-muted-foreground-dark opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
          </Link>
        ))}
      </div>
    </div>
  );
}
