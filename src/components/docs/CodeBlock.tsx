"use client";

import { useEffect, useRef } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-java";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
}

const languageMap: Record<string, string> = {
  python: "python",
  javascript: "javascript",
  js: "javascript",
  html: "markup",
  css: "css",
  java: "java",
  cpp: "cpp",
  "c++": "cpp",
};

export function CodeBlock({ code, language, title }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  const prismLanguage = languageMap[language.toLowerCase()] || "javascript";

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-lg border border-docs-code-border dark:border-docs-code-border-dark overflow-hidden mb-6">
      {title && (
        <div className="bg-docs-muted dark:bg-docs-muted-dark px-4 py-2 border-b border-docs-code-border dark:border-docs-code-border-dark flex items-center justify-between">
          <span className="text-sm font-medium text-docs-muted-foreground dark:text-docs-muted-foreground-dark">{title}</span>
          <span className="text-xs uppercase tracking-wide text-docs-muted-foreground dark:text-docs-muted-foreground-dark font-mono">
            {language}
          </span>
        </div>
      )}
      <div className="relative group">
        <pre className="bg-docs-code-bg dark:bg-docs-code-bg-dark p-4 overflow-x-auto m-0">
          <code ref={codeRef} className={`language-${prismLanguage} text-sm text-docs-foreground dark:text-docs-foreground-dark`}>
            {code}
          </code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded-md bg-docs-muted/80 dark:bg-docs-muted-dark/80 hover:bg-docs-muted dark:hover:bg-docs-muted-dark opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-docs-muted-foreground dark:text-docs-muted-foreground-dark" />
          )}
        </button>
      </div>
    </div>
  );
}
