"use client";

import { useState, useEffect } from "react";
import { ListTree } from "lucide-react";
import { cn } from "@/lib/utils";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  items?: TOCItem[];
  className?: string;
}

export function TableOfContents({ items, className }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (!items || items.length === 0) {
      // Auto-extract headings from the page
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: "-80px 0px -80% 0px" }
      );

      const headings = document.querySelectorAll("h2[id], h3[id]");
      headings.forEach((heading) => observer.observe(heading));

      return () => observer.disconnect();
    }
  }, [items]);

  // If no items provided, extract from page
  const tocItems = items || [];

  if (tocItems.length === 0) {
    return null;
  }

  return (
    <nav className={cn("space-y-1", className)}>
      <div className="flex items-center gap-2 mb-3 px-3">
        <ListTree className="h-4 w-4 text-docs-muted-foreground dark:text-docs-muted-foreground-dark" />
        <h4 className="text-sm font-semibold text-docs-foreground dark:text-docs-foreground-dark uppercase tracking-wide">
          On This Page
        </h4>
      </div>
      <ul className="space-y-0.5">
        {tocItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "block py-1.5 text-sm transition-colors border-l-2",
                item.level === 2 ? "pl-3" : "pl-6",
                activeId === item.id
                  ? "border-dark-red dark:border-dark-red-light text-dark-red dark:text-dark-red-light font-medium"
                  : "border-transparent text-docs-muted-foreground dark:text-docs-muted-foreground-dark hover:text-docs-foreground dark:hover:text-docs-foreground-dark hover:border-docs-border dark:hover:border-docs-border-dark"
              )}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(item.id);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                  setActiveId(item.id);
                }
              }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
