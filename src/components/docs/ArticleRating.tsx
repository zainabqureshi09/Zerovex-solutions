"use client";

import { useState } from "react";
import { Star, ThumbsUp, ThumbsDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface ArticleRatingProps {
  articleId: string;
  className?: string;
}

export function ArticleRating({ articleId, className }: ArticleRatingProps) {
  const [rating, setRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<"helpful" | "not-helpful" | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (value: number) => {
    setRating(value);
    setSubmitted(true);
    // In production, send to analytics backend
    console.log(`Rating for ${articleId}: ${value} stars`);
  };

  const handleFeedback = (type: "helpful" | "not-helpful") => {
    setFeedback(type);
    setSubmitted(true);
    // In production, send to analytics backend
    console.log(`Feedback for ${articleId}: ${type}`);
  };

  if (submitted) {
    return (
      <div className={cn("p-4 rounded-lg bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800", className)}>
        <p className="text-sm text-green-800 dark:text-green-200 font-medium">
          ✓ Thank you for your feedback!
        </p>
      </div>
    );
  }

  return (
    <div className={cn("space-y-3", className)}>
      <h4 className="text-sm font-semibold text-docs-foreground dark:text-docs-foreground-dark">
        Was this page helpful?
      </h4>
      
      {/* Thumbs Up/Down */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleFeedback("helpful")}
          className="flex items-center gap-2 px-3 py-2 rounded-lg border border-docs-border dark:border-docs-border-dark hover:border-green-500 dark:hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-950/20 transition-colors text-docs-foreground dark:text-docs-foreground-dark"
        >
          <ThumbsUp className="h-4 w-4" />
          <span className="text-sm">Yes</span>
        </button>
        <button
          onClick={() => handleFeedback("not-helpful")}
          className="flex items-center gap-2 px-3 py-2 rounded-lg border border-docs-border dark:border-docs-border-dark hover:border-red-500 dark:hover:border-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors text-docs-foreground dark:text-docs-foreground-dark"
        >
          <ThumbsDown className="h-4 w-4" />
          <span className="text-sm">No</span>
        </button>
      </div>

      {/* Star Rating */}
      <div className="pt-3 border-t border-docs-border dark:border-docs-border-dark">
        <p className="text-xs text-docs-muted-foreground dark:text-docs-muted-foreground-dark mb-2">
          Rate this article
        </p>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => handleRating(star)}
              className="p-1 hover:scale-110 transition-transform"
            >
              <Star
                className={cn(
                  "h-5 w-5",
                  rating && rating >= star
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-docs-muted-foreground dark:text-docs-muted-foreground-dark"
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
