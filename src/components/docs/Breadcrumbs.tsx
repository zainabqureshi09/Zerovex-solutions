"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const pathname = usePathname();

  // Auto-generate breadcrumbs from path if not provided
  const autoItems: BreadcrumbItem[] = items || generateBreadcrumbs(pathname);

  return (
    <nav className="flex items-center gap-1 text-sm mb-6" aria-label="Breadcrumb">
      <Link
        href="/"
        className="flex items-center gap-1 text-docs-muted-foreground dark:text-docs-muted-foreground-dark hover:text-dark-red dark:hover:text-dark-red-light transition-colors"
      >
        <Home className="h-4 w-4" />
      </Link>
      {autoItems.map((item, index) => (
        <span key={index} className="flex items-center gap-1">
          <ChevronRight className="h-4 w-4 text-docs-muted-foreground dark:text-docs-muted-foreground-dark" />
          {item.href ? (
            <Link
              href={item.href}
              className="text-docs-muted-foreground dark:text-docs-muted-foreground-dark hover:text-dark-red dark:hover:text-dark-red-light transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-docs-foreground dark:text-docs-foreground-dark font-medium">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}

function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const segments = pathname.split("/").filter(Boolean);
  const items: BreadcrumbItem[] = [];

  segments.forEach((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const label = formatSegment(segment);
    items.push({ label, href });
  });

  return items;
}

function formatSegment(segment: string): string {
  // Convert kebab-case to Title Case
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
