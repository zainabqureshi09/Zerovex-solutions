"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Copy,
  Check,
  RotateCcw,
  Trash2,
  ArrowLeft,
  Code2,
  Megaphone,
  Palette,
  Briefcase,
  PenLine,
  Image as ImageIcon,
  Zap,
  Wand2,
  Lightbulb,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";

// ─── Constants ─────────────────────────────────────────────────────

const PROMPT_CATEGORIES = [
  { id: "Coding", label: "Coding", icon: Code2 },
  { id: "Marketing", label: "Marketing", icon: Megaphone },
  { id: "Website Design", label: "Web Design", icon: Palette },
  { id: "Business", label: "Business", icon: Briefcase },
  { id: "Content Writing", label: "Writing", icon: PenLine },
  { id: "Image Generation", label: "Image Gen", icon: ImageIcon },
];

const AI_TOOLS = [
  "ChatGPT",
  "Claude",
  "Gemini",
  "Midjourney",
  "DALL-E",
  "Stable Diffusion",
  "Copilot",
  "Llama",
  "Mistral",
  "Other",
];

const TONE_OPTIONS = [
  "Professional",
  "Casual",
  "Academic",
  "Creative",
  "Technical",
  "Persuasive",
  "Friendly",
  "Authoritative",
];

const GOAL_OPTIONS = [
  "Generate a comprehensive response",
  "Get actionable steps",
  "Produce creative output",
  "Analyze and provide insights",
  "Write production-ready code",
  "Create marketing materials",
  "Design visual assets",
  "Draft content or copy",
];

interface ExamplePrompt {
  category: string;
  task: string;
  aiTool: string;
  tone: string;
  goal: string;
}

const EXAMPLE_PROMPTS: ExamplePrompt[] = [
  {
    category: "Coding",
    task: "Build a REST API with Node.js and Express for a task management app with user authentication",
    aiTool: "ChatGPT",
    tone: "Technical",
    goal: "Write production-ready code",
  },
  {
    category: "Marketing",
    task: "Create a 30-day social media campaign for a new fitness app targeting busy professionals",
    aiTool: "Claude",
    tone: "Persuasive",
    goal: "Create marketing materials",
  },
  {
    category: "Website Design",
    task: "Design a modern SaaS dashboard with dark theme for analytics and data visualization",
    aiTool: "ChatGPT",
    tone: "Creative",
    goal: "Design visual assets",
  },
  {
    category: "Business",
    task: "Develop a go-to-market strategy for an AI-powered customer support platform",
    aiTool: "Gemini",
    tone: "Professional",
    goal: "Generate a comprehensive response",
  },
  {
    category: "Content Writing",
    task: "Write a comprehensive blog post about the future of AI in software development",
    aiTool: "Claude",
    tone: "Academic",
    goal: "Draft content or copy",
  },
  {
    category: "Image Generation",
    task: "A futuristic cityscape at sunset with flying cars and neon lights, cyberpunk aesthetic",
    aiTool: "Midjourney",
    tone: "Creative",
    goal: "Design visual assets",
  },
];

// ─── Animation Variants ────────────────────────────────────────────

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.3, ease: "easeOut" },
};

// ─── Loading Skeleton ──────────────────────────────────────────────

function PromptSkeleton() {
  return (
    <div className="space-y-3 animate-pulse">
      <div className="h-4 rounded bg-gray-200 dark:bg-gray-700" style={{ width: "90%" }} />
      <div className="h-4 rounded bg-gray-200 dark:bg-gray-700" style={{ width: "95%" }} />
      <div className="h-4 rounded bg-gray-200 dark:bg-gray-700" style={{ width: "80%" }} />
      <div className="h-4 rounded bg-gray-200 dark:bg-gray-700" style={{ width: "88%" }} />
      <div className="h-4 rounded bg-gray-200 dark:bg-gray-700" style={{ width: "60%" }} />
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────

export default function PromptGeneratorPage() {
  // Form state
  const [promptType, setPromptType] = useState("Coding");
  const [aiTool, setAiTool] = useState("ChatGPT");
  const [task, setTask] = useState("");
  const [tone, setTone] = useState("Professional");
  const [goal, setGoal] = useState("Generate a comprehensive response");

  // Output state
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [source, setSource] = useState<"ai" | "template" | null>(null);

  // UI state
  const [showExamples, setShowExamples] = useState(false);

  // ─── Handlers ──────────────────────────────────────────────────

  const generatePrompt = useCallback(async () => {
    if (!task.trim()) {
      setError("Please describe what you want the AI to do.");
      return;
    }

    setIsGenerating(true);
    setError("");
    setCopied(false);
    setSource(null);

    try {
      const res = await fetch("/api/generate-prompt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          promptType,
          aiTool,
          task: task.trim(),
          tone,
          goal,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        setError(err.error || "Failed to generate prompt.");
        setGeneratedPrompt("");
        return;
      }

      const data = await res.json();
      setGeneratedPrompt(data.prompt);
      setSource(data.source || "template");
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsGenerating(false);
    }
  }, [promptType, aiTool, task, tone, goal]);

  const copyToClipboard = async () => {
    if (!generatedPrompt) return;
    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = generatedPrompt;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const regenerate = () => {
    if (task.trim()) generatePrompt();
  };

  const clearAll = () => {
    setTask("");
    setGeneratedPrompt("");
    setError("");
    setCopied(false);
    setSource(null);
  };

  const loadExample = (example: ExamplePrompt) => {
    setPromptType(example.category);
    setTask(example.task);
    setAiTool(example.aiTool);
    setTone(example.tone);
    setGoal(example.goal);
    setGeneratedPrompt("");
    setError("");
    setShowExamples(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      generatePrompt();
    }
  };

  // ─── Render ────────────────────────────────────────────────────

  return (
    <div className="bg-white transition-colors duration-300 dark:bg-black" onKeyDown={handleKeyDown}>
      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden bg-black text-white">
        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
          <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-dark-red/25 to-transparent blur-3xl" />
          <div className="absolute -left-40 -bottom-40 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-dark-red/15 to-transparent blur-3xl" />
        </div>

        <div className="container-custom relative z-10 section-padding">
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            className="mx-auto max-w-3xl text-center"
          >
            {/* Back Link */}
            <Link
              href="/tools"
              className="mb-6 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Tools
            </Link>

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-dark-red/50 bg-dark-red/10 px-5 py-2.5 text-sm font-semibold text-gray-300 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              Free AI Tool — No Sign-Up Required
            </div>

            {/* Title */}
            <h1 className="heading-xl mb-6">
              AI Prompt <span className="text-gradient">Generator</span>
            </h1>

            <p className="text-xl leading-relaxed text-gray-400 md:text-2xl">
              Craft powerful prompts for ChatGPT, Claude, Midjourney, and 50+ AI tools. Get professional results in seconds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== CATEGORY TABS ==================== */}
      <section className="bg-black pb-8 pt-4">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {PROMPT_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setPromptType(cat.id)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  promptType === cat.id
                    ? "bg-dark-red text-white shadow-lg shadow-dark-red/30"
                    : "bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white border border-gray-800"
                }`}
              >
                <cat.icon className="h-4 w-4" />
                {cat.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== TOOL INTERFACE ==================== */}
      <section className="section-padding bg-gray-50 dark:bg-gray-950">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            {/* Input Card */}
            <motion.div
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ delay: 0.3 }}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="space-y-6">
                {/* Row 1: AI Tool + Tone */}
                <div className="grid gap-4 md:grid-cols-2">
                  {/* AI Tool */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-black dark:text-white">
                      <Zap className="mr-1.5 inline h-4 w-4 text-dark-red" />
                      AI Tool
                    </label>
                    <div className="relative">
                      <select
                        value={aiTool}
                        onChange={(e) => setAiTool(e.target.value)}
                        className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3.5 pr-10 text-sm text-black transition-all focus:border-dark-red focus:outline-none focus:ring-2 focus:ring-dark-red/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                      >
                        {AI_TOOLS.map((tool) => (
                          <option key={tool} value={tool}>{tool}</option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>

                  {/* Tone */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-black dark:text-white">
                      <Wand2 className="mr-1.5 inline h-4 w-4 text-dark-red" />
                      Tone / Style
                    </label>
                    <div className="relative">
                      <select
                        value={tone}
                        onChange={(e) => setTone(e.target.value)}
                        className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3.5 pr-10 text-sm text-black transition-all focus:border-dark-red focus:outline-none focus:ring-2 focus:ring-dark-red/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                      >
                        {TONE_OPTIONS.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Row 2: Task Description */}
                <div>
                  <label htmlFor="task-input" className="mb-2 block text-sm font-semibold text-black dark:text-white">
                    <Lightbulb className="mr-1.5 inline h-4 w-4 text-dark-red" />
                    Describe Your Task
                  </label>
                  <textarea
                    id="task-input"
                    value={task}
                    onChange={(e) => { setTask(e.target.value); setError(""); }}
                    placeholder="e.g., Create a landing page for a fitness app, Write a Python script to scrape data, Develop a content strategy for a tech blog..."
                    rows={4}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm leading-relaxed text-black placeholder-gray-400 transition-all focus:border-dark-red focus:outline-none focus:ring-2 focus:ring-dark-red/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                  />
                  <p className="mt-1.5 text-xs text-gray-500 dark:text-gray-500">
                    Press <kbd className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-medium dark:bg-gray-800">Ctrl</kbd> + <kbd className="rounded bg-gray-100 px-1.5 py-0.5 text-xs font-medium dark:bg-gray-800">Enter</kbd> to generate
                  </p>
                </div>

                {/* Row 3: Goal */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-black dark:text-white">
                    Target Outcome
                  </label>
                  <div className="relative">
                    <select
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3.5 pr-10 text-sm text-black transition-all focus:border-dark-red focus:outline-none focus:ring-2 focus:ring-dark-red/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    >
                      {GOAL_OPTIONS.map((g) => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={generatePrompt}
                    disabled={!task.trim() || isGenerating}
                    className="btn-primary flex-1 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isGenerating ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Generating...
                      </span>
                    ) : (
                      <>
                        <Sparkles className="h-5 w-5" />
                        Generate Prompt
                      </>
                    )}
                  </button>
                  <button
                    onClick={clearAll}
                    disabled={isGenerating}
                    className="rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-gray-600 transition-all hover:border-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-700"
                    title="Clear"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mt-4 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-400"
                >
                  {error}
                </motion.div>
              )}
            </AnimatePresence>

            {/* ==================== OUTPUT ==================== */}
            <AnimatePresence mode="wait">
              {(isGenerating || generatedPrompt) && (
                <motion.div
                  key="output"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900"
                >
                  {/* Header */}
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <h3 className="text-base font-bold text-black dark:text-white">
                        Generated Prompt
                      </h3>
                      {source && (
                        <span className={`rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
                          source === "ai"
                            ? "bg-dark-red/10 text-dark-red"
                            : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                        }`}>
                          {source === "ai" ? "AI Generated" : "Template"}
                        </span>
                      )}
                    </div>

                    {generatedPrompt && (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={regenerate}
                          disabled={isGenerating}
                          className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-gray-600 transition-all hover:bg-gray-100 hover:text-dark-red disabled:cursor-not-allowed disabled:opacity-50 dark:text-gray-400 dark:hover:bg-gray-800"
                          title="Regenerate"
                        >
                          <RotateCcw className={`h-3.5 w-3.5 ${isGenerating ? "animate-spin" : ""}`} />
                          Regenerate
                        </button>
                        <button
                          onClick={copyToClipboard}
                          className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-200 ${
                            copied
                              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                              : "bg-dark-red text-white hover:bg-dark-red-light"
                          }`}
                        >
                          {copied ? (
                            <>
                              <Check className="h-3.5 w-3.5" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="h-3.5 w-3.5" />
                              Copy
                            </>
                          )}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="rounded-xl border border-gray-100 bg-gray-50/80 p-5 dark:border-gray-800 dark:bg-gray-800/50">
                    {isGenerating ? (
                      <PromptSkeleton />
                    ) : (
                      <motion.p
                        variants={scaleIn}
                        initial="initial"
                        animate="animate"
                        className="whitespace-pre-wrap text-sm leading-relaxed text-gray-700 dark:text-gray-300"
                      >
                        {generatedPrompt}
                      </motion.p>
                    )}
                  </div>

                  {/* Word Count */}
                  {!isGenerating && generatedPrompt && (
                    <div className="mt-3 flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                      <span>{generatedPrompt.split(/\s+/).length} words</span>
                      <span>{generatedPrompt.length} characters</span>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* ==================== EXAMPLES ==================== */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
              <button
                onClick={() => setShowExamples(!showExamples)}
                className="group flex w-full items-center justify-between rounded-xl border border-gray-200 bg-white px-6 py-4 text-left transition-all hover:border-dark-red/30 hover:shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                <span className="text-sm font-semibold text-black dark:text-white">
                  <Sparkles className="mr-2 inline h-4 w-4 text-dark-red" />
                  Example Prompts — Try These
                </span>
                {showExamples ? (
                  <ChevronUp className="h-5 w-5 text-gray-400 transition-transform group-hover:text-dark-red" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 transition-transform group-hover:text-dark-red" />
                )}
              </button>

              <AnimatePresence>
                {showExamples && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-3 pt-4 md:grid-cols-2">
                      {EXAMPLE_PROMPTS.map((example, i) => {
                        const CatIcon = PROMPT_CATEGORIES.find((c) => c.id === example.category)?.icon || Code2;
                        return (
                          <motion.button
                            key={i}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            onClick={() => loadExample(example)}
                            className="group rounded-xl border border-gray-200 bg-white p-4 text-left transition-all duration-300 hover:border-dark-red/30 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
                          >
                            <div className="mb-2 flex items-center gap-2">
                              <CatIcon className="h-4 w-4 text-dark-red" />
                              <span className="text-xs font-semibold text-dark-red">{example.category}</span>
                              <span className="text-xs text-gray-400">· {example.aiTool}</span>
                            </div>
                            <p className="line-clamp-2 text-xs leading-relaxed text-gray-600 dark:text-gray-400">
                              {example.task}
                            </p>
                          </motion.button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* ==================== TIPS ==================== */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-10 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 dark:border-gray-800 dark:from-gray-900 dark:to-gray-950"
            >
              <h3 className="mb-6 text-lg font-bold text-black dark:text-white">
                Pro Tips for Better Results
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    num: "1",
                    title: "Be Specific",
                    desc: "Include concrete details about your goals, audience, and desired format.",
                  },
                  {
                    num: "2",
                    title: "Set the Context",
                    desc: "Tell the AI its role (e.g., 'senior developer', 'marketing expert') for better results.",
                  },
                  {
                    num: "3",
                    title: "Define Constraints",
                    desc: "Specify word count, style guidelines, or technical requirements.",
                  },
                  {
                    num: "4",
                    title: "Iterate & Refine",
                    desc: "Use Regenerate to get variations. Combine the best parts of each.",
                  },
                ].map((tip) => (
                  <div key={tip.num} className="flex gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-dark-red text-xs font-bold text-white">
                      {tip.num}
                    </div>
                    <div>
                      <h4 className="mb-1 text-sm font-semibold text-black dark:text-white">{tip.title}</h4>
                      <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-400">{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
