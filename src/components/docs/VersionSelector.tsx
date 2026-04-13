"use client";

import { useState } from "react";
import { GitBranch, Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface Version {
  version: string;
  label: string;
  stable: boolean;
}

interface VersionSelectorProps {
  versions?: Version[];
  currentVersion?: string;
}

const defaultVersions: Version[] = [
  { version: "latest", label: "Latest (v2.0)", stable: true },
  { version: "v1.0", label: "v1.0", stable: true },
  { version: "v0.9", label: "v0.9 (Legacy)", stable: false },
];

export function VersionSelector({ versions = defaultVersions, currentVersion = "latest" }: VersionSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVersion, setSelectedVersion] = useState(currentVersion);

  const currentVersionData = versions.find((v) => v.version === selectedVersion);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-docs-border dark:border-docs-border-dark bg-white dark:bg-black hover:border-dark-red dark:hover:border-dark-red-light transition-colors text-sm"
      >
        <GitBranch className="h-4 w-4 text-docs-muted-foreground dark:text-docs-muted-foreground-dark" />
        <span className="text-docs-foreground dark:text-docs-foreground-dark font-medium">
          {currentVersionData?.label || "Select Version"}
        </span>
        <ChevronDown className="h-4 w-4 text-docs-muted-foreground dark:text-docs-muted-foreground-dark" />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-black border border-docs-border dark:border-docs-border-dark rounded-lg shadow-lg z-50 overflow-hidden">
            <div className="p-2 space-y-1">
              {versions.map((version) => (
                <button
                  key={version.version}
                  onClick={() => {
                    setSelectedVersion(version.version);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2 rounded-md text-left transition-colors",
                    selectedVersion === version.version
                      ? "bg-red-50 dark:bg-red-950/20 text-dark-red dark:text-dark-red-light"
                      : "hover:bg-docs-muted dark:hover:bg-docs-muted-dark text-docs-foreground dark:text-docs-foreground-dark"
                  )}
                >
                  <div>
                    <div className="text-sm font-medium">{version.label}</div>
                    {!version.stable && (
                      <div className="text-xs text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
                        Legacy version
                      </div>
                    )}
                  </div>
                  {selectedVersion === version.version && (
                    <Check className="h-4 w-4 text-dark-red dark:text-dark-red-light" />
                  )}
                </button>
              ))}
            </div>
            <div className="px-3 py-2 bg-docs-muted dark:bg-docs-muted-dark border-t border-docs-border dark:border-docs-border-dark">
              <p className="text-xs text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
                Looking for older versions? Check the{" "}
                <a href="/docs/changelog" className="text-dark-red dark:text-dark-red-light hover:underline">
                  changelog
                </a>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
