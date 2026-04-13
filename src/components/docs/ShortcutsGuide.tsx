"use client";

import { useEffect, useState } from "react";
import { Keyboard, X } from "lucide-react";

interface ShortcutsGuideProps {
  className?: string;
}

interface Shortcut {
  keys: string[];
  description: string;
}

const shortcuts: Shortcut[] = [
  { keys: ["⌘", "K"], description: "Open search dialog" },
  { keys: ["ESC"], description: "Close dialog" },
  { keys: ["↑", "↓"], description: "Navigate search results" },
  { keys: ["Enter"], description: "Select search result" },
  { keys: ["⌘", "B"], description: "Toggle sidebar" },
  { keys: ["⌘", "T"], description: "Toggle theme" },
];

export function ShortcutsGuide({ className }: ShortcutsGuideProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "/") {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg border border-docs-border dark:border-docs-border-dark hover:border-dark-red dark:hover:border-dark-red-light transition-colors text-docs-foreground dark:text-docs-foreground-dark ${className}`}
        title="Keyboard shortcuts (⌘/)"
      >
        <Keyboard className="h-4 w-4" />
        <span className="text-sm">Shortcuts</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setIsOpen(false)}>
      <div
        className="w-full max-w-2xl bg-white dark:bg-black border border-docs-border dark:border-docs-border-dark rounded-xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-docs-border dark:border-docs-border-dark">
          <div className="flex items-center gap-3">
            <Keyboard className="h-6 w-6 text-dark-red" />
            <h2 className="text-xl font-semibold text-docs-foreground dark:text-docs-foreground-dark">
              Keyboard Shortcuts
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-docs-muted dark:hover:bg-docs-muted-dark transition-colors text-docs-muted-foreground dark:text-docs-muted-foreground-dark"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Shortcuts List */}
        <div className="p-6 space-y-4">
          {shortcuts.map((shortcut, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-docs-foreground dark:text-docs-foreground-dark">
                {shortcut.description}
              </span>
              <div className="flex items-center gap-1">
                {shortcut.keys.map((key, keyIndex) => (
                  <span key={keyIndex}>
                    <kbd className="px-3 py-1.5 bg-docs-muted dark:bg-docs-muted-dark border border-docs-border dark:border-docs-border-dark rounded-md text-sm font-mono font-semibold text-docs-foreground dark:text-docs-foreground-dark">
                      {key}
                    </kbd>
                    {keyIndex < shortcut.keys.length - 1 && <span className="mx-1">+</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-docs-muted dark:bg-docs-muted-dark border-t border-docs-border dark:border-docs-border-dark">
          <p className="text-xs text-docs-muted-foreground dark:text-docs-muted-foreground-dark text-center">
            Press <kbd className="px-2 py-0.5 bg-white dark:bg-black border border-docs-border dark:border-docs-border-dark rounded">⌘</kbd> + <kbd className="px-2 py-0.5 bg-white dark:bg-black border border-docs-border dark:border-docs-border-dark rounded">/</kbd> to open this guide
          </p>
        </div>
      </div>
    </div>
  );
}
