"use client";

import { ReactNode, useState } from "react";
import { DocsSidebar } from "./DocsSidebar";
import { SearchDialog } from "./SearchDialog";
import { AIChatAssistant } from "./AIChatAssistant";
import { Menu, X, Search } from "lucide-react";

interface DocLayoutProps {
  children: ReactNode;
  title: string;
}

export function DocLayout({ children, title }: DocLayoutProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--color-docs-background)] dark:bg-[var(--color-docs-background-dark)]">
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      <AIChatAssistant />

      {/* Docs Navbar */}
      <header className="sticky top-0 z-50 border-b border-[var(--color-docs-border)] dark:border-[var(--color-docs-border-dark)] bg-white dark:bg-black">
        <div className="flex items-center justify-between px-6 py-3">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-[var(--color-docs-muted-foreground)] dark:text-[var(--color-docs-muted-foreground-dark)] hover:bg-[var(--color-docs-sidebar-hover)] dark:hover:bg-[var(--color-docs-sidebar-hover-dark)]"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-semibold text-[var(--color-docs-foreground)] dark:text-[var(--color-docs-foreground-dark)]">
                Zerovex Docs
              </h1>
            </div>
          </div>

          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-docs-muted)] dark:bg-[var(--color-docs-muted-dark)] border border-[var(--color-docs-border)] dark:border-[var(--color-docs-border-dark)] text-[var(--color-docs-muted-foreground)] dark:text-[var(--color-docs-muted-foreground-dark)] hover:border-[var(--color-docs-accent)] dark:hover:border-[var(--color-docs-accent-dark)] transition-colors flex-1 max-w-md"
          >
            <Search className="h-4 w-4" />
            <span className="text-sm">Search documentation...</span>
            <kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-[var(--color-docs-border)] dark:border-[var(--color-docs-border-dark)] bg-white dark:bg-black px-1.5 font-mono text-[10px] font-medium text-[var(--color-docs-muted-foreground)] dark:text-[var(--color-docs-muted-foreground-dark)] ml-auto">
              ⌘K
            </kbd>
          </button>
        </div>
      </header>

      <div className="flex relative">
        {/* Mobile Sidebar Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div className="fixed inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
            <div className="fixed left-0 top-[57px] bottom-0 w-[280px] bg-white dark:bg-black border-r border-[var(--color-docs-border)] dark:border-[var(--color-docs-border-dark)] overflow-y-auto z-50">
              <DocsSidebar />
            </div>
          </div>
        )}

        {/* Desktop Sidebar */}
        <div className="hidden lg:block flex-shrink-0">
          <DocsSidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <div className="max-w-4xl mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
