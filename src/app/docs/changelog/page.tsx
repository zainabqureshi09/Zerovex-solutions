import { DocLayout } from "@/components/docs/DocLayout";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import { Calendar, GitBranch, Check, Sparkles, Bug, Zap, Shield } from "lucide-react";

export const metadata = {
  title: "Changelog",
  description: "Latest updates and release notes for Zerovex Documentation",
};

interface Change {
  type: "feature" | "fix" | "improvement" | "security";
  description: string;
}

interface Release {
  version: string;
  date: string;
  changes: Change[];
}

const releases: Release[] = [
  {
    version: "v2.0.0",
    date: "2026-04-13",
    changes: [
      { type: "feature", description: "AI Chat Assistant for instant documentation help" },
      { type: "feature", description: "Interactive code playgrounds with live execution" },
      { type: "feature", description: "Smart search with fuzzy matching and AI enhancement" },
      { type: "feature", description: "Article rating and feedback system" },
      { type: "feature", description: "Table of contents with scroll spy" },
      { type: "improvement", description: "Complete redesign with dark red color scheme" },
      { type: "improvement", description: "Migrated to Next.js 15 App Router" },
      { type: "security", description: "Enhanced security headers and CSP" },
    ],
  },
  {
    version: "v1.5.0",
    date: "2026-03-28",
    changes: [
      { type: "feature", description: "Added Python comprehensive documentation" },
      { type: "feature", description: "JavaScript beginner guide" },
      { type: "feature", description: "HTML & CSS reference sections" },
      { type: "improvement", description: "Improved sidebar navigation" },
      { type: "fix", description: "Fixed code block rendering on mobile" },
      { type: "fix", description: "Resolved search dialog keyboard conflicts" },
    ],
  },
  {
    version: "v1.4.0",
    date: "2026-03-15",
    changes: [
      { type: "feature", description: "Dark mode support" },
      { type: "feature", description: "Syntax highlighting for 6+ languages" },
      { type: "improvement", description: "Faster page load times with static generation" },
      { type: "improvement", description: "Better mobile responsiveness" },
      { type: "fix", description: "Fixed broken internal links" },
    ],
  },
  {
    version: "v1.3.0",
    date: "2026-03-01",
    changes: [
      { type: "feature", description: "Command palette search (Cmd+K)" },
      { type: "feature", description: "Version selector for documentation" },
      { type: "improvement", description: "Refactored component architecture" },
      { type: "fix", description: "Fixed theme persistence in localStorage" },
    ],
  },
  {
    version: "v1.2.0",
    date: "2026-02-15",
    changes: [
      { type: "feature", description: "C++ documentation added" },
      { type: "feature", description: "Java programming guide" },
      { type: "improvement", description: "Better code examples with copy buttons" },
      { type: "improvement", description: "Enhanced SEO metadata" },
    ],
  },
  {
    version: "v1.1.0",
    date: "2026-02-01",
    changes: [
      { type: "feature", description: "Breadcrumb navigation" },
      { type: "feature", description: "Edit on GitHub integration" },
      { type: "improvement", description: "Improved typography and spacing" },
      { type: "fix", description: "Fixed scroll position on navigation" },
    ],
  },
  {
    version: "v1.0.0",
    date: "2026-01-15",
    changes: [
      { type: "feature", description: "Initial release" },
      { type: "feature", description: "Basic documentation structure" },
      { type: "feature", description: "Python and JavaScript guides" },
      { type: "feature", description: "Sidebar navigation" },
    ],
  },
];

function ChangeTypeIcon({ type }: { type: Change["type"] }) {
  switch (type) {
    case "feature":
      return <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />;
    case "fix":
      return <Bug className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />;
    case "improvement":
      return <Zap className="h-4 w-4 text-green-600 dark:text-green-400" />;
    case "security":
      return <Shield className="h-4 w-4 text-red-600 dark:text-red-400" />;
  }
}

function ChangeTypeLabel({ type }: { type: Change["type"] }) {
  const labels = {
    feature: "Feature",
    fix: "Fix",
    improvement: "Improvement",
    security: "Security",
  };

  const colors = {
    feature: "text-blue-600 dark:text-blue-400",
    fix: "text-yellow-600 dark:text-yellow-400",
    improvement: "text-green-600 dark:text-green-400",
    security: "text-red-600 dark:text-red-400",
  };

  return (
    <span className={`text-xs font-semibold uppercase ${colors[type]}`}>
      {labels[type]}
    </span>
  );
}

export default function ChangelogPage() {
  return (
    <DocLayout title="Changelog">
      <div className="animate-in fade-in duration-500">
        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <GitBranch className="h-8 w-8 text-dark-red" />
            <h1 className="text-4xl font-bold text-docs-foreground dark:text-docs-foreground-dark">
              Changelog
            </h1>
          </div>
          <p className="text-lg text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
            All notable changes to Zerovex Documentation platform
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-docs-border dark:bg-docs-border-dark" />

          <div className="space-y-8">
            {releases.map((release, index) => (
              <div key={release.version} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-4 w-4 h-4 rounded-full bg-dark-red border-4 border-white dark:border-black transform -translate-x-1/2 z-10">
                  {index === 0 && <Check className="h-3 w-3 text-white absolute inset-0 m-auto" />}
                </div>

                {/* Release Card */}
                <div className="ml-12 p-6 rounded-xl border border-docs-border dark:border-docs-border-dark bg-white dark:bg-black">
                  {/* Version Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <h2 className="text-2xl font-bold text-docs-foreground dark:text-docs-foreground-dark">
                        {release.version}
                      </h2>
                      {index === 0 && (
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-dark-red text-white">
                          Latest
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={release.date}>
                        {new Date(release.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                  </div>

                  {/* Changes List */}
                  <ul className="space-y-3">
                    {release.changes.map((change, changeIndex) => (
                      <li key={changeIndex} className="flex items-start gap-3">
                        <ChangeTypeIcon type={change.type} />
                        <div className="flex-1">
                          <ChangeTypeLabel type={change.type} />
                          <p className="text-docs-foreground dark:text-docs-foreground-dark mt-0.5">
                            {change.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 p-6 rounded-lg bg-docs-muted dark:bg-docs-muted-dark border border-docs-border dark:border-docs-border-dark">
          <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">
            Looking for older versions?
          </h3>
          <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark mb-4">
            Check our GitHub repository for complete version history and release tags.
          </p>
          <a
            href="https://github.com/zerovex/zerovex/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-red text-white hover:bg-dark-red-light transition-colors text-sm font-medium"
          >
            View GitHub Releases
          </a>
        </div>
      </div>
    </DocLayout>
  );
}
