"use client";

import { useState, useRef } from "react";
import { Play, RotateCcw, Copy, Check, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodePlaygroundProps {
  initialCode?: string;
  language?: string;
  className?: string;
}

export function CodePlayground({
  initialCode = `console.log("Hello, Zerovex!");`,
  language = "javascript",
  className,
}: CodePlaygroundProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState<string>("");
  const [isRunning, setIsRunning] = useState(false);
  const [copied, setCopied] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const runCode = async () => {
    setIsRunning(true);
    setOutput("");

    try {
      // Capture console.log output
      const logs: string[] = [];
      const originalLog = console.log;
      
      console.log = (...args) => {
        logs.push(args.map(String).join(" "));
        originalLog(...args);
      };

      // Execute code safely in eval (for demo purposes)
      // In production, use a sandboxed environment
      eval(code);

      console.log = originalLog;
      setOutput(logs.join("\n") || "Code executed successfully (no output)");
    } catch (error: any) {
      setOutput(`Error: ${error.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput("");
  };

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn("rounded-lg border border-docs-border dark:border-docs-border-dark overflow-hidden", className)}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-docs-muted dark:bg-docs-muted-dark border-b border-docs-border dark:border-docs-border-dark">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-docs-muted-foreground dark:text-docs-muted-foreground-dark" />
          <span className="text-sm font-medium text-docs-foreground dark:text-docs-foreground-dark">
            Interactive Playground
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={copyCode}
            className="p-2 rounded hover:bg-docs-hover dark:hover:bg-docs-hover-dark transition-colors"
            title="Copy code"
          >
            {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4 text-docs-muted-foreground dark:text-docs-muted-foreground-dark" />}
          </button>
          <button
            onClick={resetCode}
            className="p-2 rounded hover:bg-docs-hover dark:hover:bg-docs-hover-dark transition-colors"
            title="Reset code"
          >
            <RotateCcw className="h-4 w-4 text-docs-muted-foreground dark:text-docs-muted-foreground-dark" />
          </button>
          <button
            onClick={runCode}
            disabled={isRunning}
            className="flex items-center gap-2 px-3 py-1.5 rounded bg-dark-red hover:bg-dark-red-light disabled:opacity-50 text-white text-sm font-medium transition-colors"
          >
            <Play className="h-3 w-3" />
            {isRunning ? "Running..." : "Run"}
          </button>
        </div>
      </div>

      {/* Code Editor */}
      <div className="grid md:grid-cols-2 gap-0">
        <div className="border-r border-docs-border dark:border-docs-border-dark">
          <textarea
            ref={textareaRef}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full h-64 p-4 font-mono text-sm bg-docs-code-bg dark:bg-docs-code-bg-dark text-docs-foreground dark:text-docs-foreground-dark resize-none focus:outline-none"
            spellCheck={false}
            placeholder="Write your code here..."
          />
        </div>

        {/* Output */}
        <div className="bg-black dark:bg-gray-950">
          <div className="px-4 py-2 border-b border-gray-800">
            <span className="text-xs font-medium text-gray-400 uppercase">Output</span>
          </div>
          <pre className="p-4 h-64 overflow-auto font-mono text-sm text-green-400">
            {output || "Click 'Run' to execute the code..."}
          </pre>
        </div>
      </div>
    </div>
  );
}
