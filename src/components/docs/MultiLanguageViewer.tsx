"use client";

import { useState } from "react";
import { CodeBlock } from "./CodeBlock";
import { cn } from "@/lib/utils";
import { ChevronDown, Code } from "lucide-react";

interface LanguageExample {
  language: string;
  label: string;
  icon: string;
  code: string;
  title?: string;
}

interface MultiLanguageViewerProps {
  examples?: LanguageExample[];
  className?: string;
}

const defaultExamples: LanguageExample[] = [
  {
    language: "python",
    label: "Python",
    icon: "🐍",
    title: "hello.py",
    code: `# Python Example
def greet(name):
    return f"Hello, {name}!"

print(greet("World"))`,
  },
  {
    language: "javascript",
    label: "JavaScript",
    icon: "JS",
    title: "hello.js",
    code: `// JavaScript Example
function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet("World"));`,
  },
  {
    language: "java",
    label: "Java",
    icon: "☕",
    title: "Hello.java",
    code: `// Java Example
public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
  },
  {
    language: "cpp",
    label: "C++",
    icon: "C++",
    title: "hello.cpp",
    code: `// C++ Example
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
  },
];

export function MultiLanguageViewer({ examples = defaultExamples, className }: MultiLanguageViewerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const activeExample = examples[activeIndex];

  return (
    <div className={cn("rounded-lg border border-docs-border dark:border-docs-border-dark overflow-hidden", className)}>
      {/* Language Selector Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-docs-muted dark:bg-docs-muted-dark border-b border-docs-border dark:border-docs-border-dark">
        <div className="flex items-center gap-2">
          <Code className="h-4 w-4 text-docs-muted-foreground dark:text-docs-muted-foreground-dark" />
          <span className="text-sm font-medium text-docs-foreground dark:text-docs-foreground-dark">
            Multi-Language Examples
          </span>
        </div>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white dark:bg-black border border-docs-border dark:border-docs-border-dark hover:border-dark-red dark:hover:border-dark-red-light transition-colors text-sm"
          >
            <span className="text-lg">{activeExample.icon}</span>
            <span className="text-docs-foreground dark:text-docs-foreground-dark font-medium">
              {activeExample.label}
            </span>
            <ChevronDown className="h-4 w-4 text-docs-muted-foreground dark:text-docs-muted-foreground-dark" />
          </button>

          {isOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
              <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-black border border-docs-border dark:border-docs-border-dark rounded-lg shadow-lg z-50 overflow-hidden">
                {examples.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveIndex(index);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 text-left transition-colors",
                      activeIndex === index
                        ? "bg-red-50 dark:bg-red-950/20 text-dark-red dark:text-dark-red-light"
                        : "hover:bg-docs-muted dark:hover:bg-docs-muted-dark text-docs-foreground dark:text-docs-foreground-dark"
                    )}
                  >
                    <span className="text-lg">{example.icon}</span>
                    <span className="text-sm font-medium">{example.label}</span>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Language Tabs */}
      <div className="flex overflow-x-auto border-b border-docs-border dark:border-docs-border-dark bg-white dark:bg-black">
        {examples.map((example, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "flex items-center gap-2 px-4 py-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
              activeIndex === index
                ? "border-dark-red dark:border-dark-red-light text-dark-red dark:text-dark-red-light"
                : "border-transparent text-docs-muted-foreground dark:text-docs-muted-foreground-dark hover:text-docs-foreground dark:hover:text-docs-foreground-dark"
            )}
          >
            <span className="text-base">{example.icon}</span>
            <span>{example.label}</span>
          </button>
        ))}
      </div>

      {/* Code Block */}
      <div className="p-4">
        <CodeBlock
          language={activeExample.language}
          title={activeExample.title}
          code={activeExample.code}
        />
      </div>

      {/* Footer */}
      <div className="px-4 py-3 bg-docs-muted dark:bg-docs-muted-dark border-t border-docs-border dark:border-docs-border-dark">
        <p className="text-xs text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
          💡 Same concept implemented in {examples.length} different programming languages
        </p>
      </div>
    </div>
  );
}
