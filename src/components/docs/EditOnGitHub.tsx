"use client";

import Link from "next/link";
import { ExternalLink, Github, Edit3 } from "lucide-react";

interface EditOnGitHubProps {
  filePath: string;
  repoUrl?: string;
  className?: string;
}

export function EditOnGitHub({ filePath, repoUrl = "https://github.com/zerovex/zerovex", className }: EditOnGitHubProps) {
  const editUrl = `${repoUrl}/edit/main/${filePath}`;
  const viewUrl = `${repoUrl}/blob/main/${filePath}`;

  return (
    <div className={className}>
      <div className="flex items-center gap-3 text-sm">
        <a
          href={editUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 rounded-lg border border-docs-border dark:border-docs-border-dark hover:border-dark-red dark:hover:border-dark-red-light hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors text-docs-foreground dark:text-docs-foreground-dark"
        >
          <Edit3 className="h-4 w-4" />
          <span>Edit this page</span>
          <ExternalLink className="h-3 w-3 opacity-50" />
        </a>
        <a
          href={viewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3 py-2 rounded-lg border border-docs-border dark:border-docs-border-dark hover:border-dark-red dark:hover:border-dark-red-light hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors text-docs-foreground dark:text-docs-foreground-dark"
        >
          <Github className="h-4 w-4" />
          <span>View on GitHub</span>
          <ExternalLink className="h-3 w-3 opacity-50" />
        </a>
      </div>
    </div>
  );
}
