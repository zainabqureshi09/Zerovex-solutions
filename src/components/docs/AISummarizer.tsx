"use client";

import { useState } from "react";
import { Sparkles, Loader2, FileText, Lightbulb } from "lucide-react";

interface AISummarizerProps {
  content?: string;
  className?: string;
}

export function AISummarizer({ content, className }: AISummarizerProps) {
  const [summary, setSummary] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasSummarized, setHasSummarized] = useState(false);

  const generateSummary = async () => {
    setIsLoading(true);
    
    // Simulate AI summarization (in production, call OpenAI API)
    setTimeout(() => {
      const mockSummary = `This page covers key concepts and practical examples. You'll learn step-by-step with code examples and interactive exercises. The content is structured for beginners but includes advanced topics for experienced developers.`;
      setSummary(mockSummary);
      setIsLoading(false);
      setHasSummarized(true);
    }, 1500);
  };

  if (hasSummarized && summary) {
    return (
      <div className={className}>
        <div className="p-4 rounded-lg bg-gradient-to-r from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/10 border border-red-200 dark:border-red-800">
          <div className="flex items-start gap-3 mb-3">
            <Lightbulb className="h-5 w-5 text-dark-red mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">
                AI Summary
              </h4>
              <p className="text-sm text-docs-foreground dark:text-docs-foreground-dark leading-relaxed">
                {summary}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <button
        onClick={generateSummary}
        disabled={isLoading}
        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border-2 border-dashed border-docs-border dark:border-docs-border-dark hover:border-dark-red dark:hover:border-dark-red-light hover:bg-red-50 dark:hover:bg-red-950/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-docs-foreground dark:text-docs-foreground-dark"
      >
        {isLoading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin text-dark-red" />
            <span className="text-sm font-medium">Generating summary...</span>
          </>
        ) : (
          <>
            <Sparkles className="h-5 w-5 text-dark-red" />
            <span className="text-sm font-medium">AI Summarize this page</span>
          </>
        )}
      </button>
    </div>
  );
}
