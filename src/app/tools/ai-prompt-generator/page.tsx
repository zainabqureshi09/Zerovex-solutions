"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Copy, Check, ArrowLeft } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const promptTemplates = {
  Marketing: {
    templates: [
      "Create a comprehensive marketing strategy for {task}. Include target audience analysis, key messaging, channel selection, and a 30-day action plan with measurable KPIs.",
      "Write a compelling marketing campaign for {task}. Focus on unique value propositions, customer pain points, and conversion-optimized copy for multiple channels.",
      "Develop a social media content calendar for {task}. Include post ideas, optimal posting times, hashtag strategies, and engagement tactics for each platform.",
    ],
  },
  Programming: {
    templates: [
      "Act as an expert software developer. Help me with {task}. Provide clean, well-commented code following best practices, along with explanations of your approach and any potential edge cases.",
      "Review and improve this code for {task}. Identify bugs, performance bottlenecks, security vulnerabilities, and suggest refactoring opportunities with before/after examples.",
      "Create a detailed technical implementation plan for {task}. Include architecture decisions, technology stack recommendations, file structure, and step-by-step development guide.",
    ],
  },
  Business: {
    templates: [
      "Develop a comprehensive business plan for {task}. Include executive summary, market analysis, competitive positioning, revenue model, and actionable growth strategies.",
      "Create a detailed project proposal for {task}. Outline objectives, scope, timeline, resource requirements, budget estimates, risk assessment, and success metrics.",
      "Analyze and provide strategic recommendations for {task}. Include SWOT analysis, market opportunities, potential challenges, and a prioritized action roadmap.",
    ],
  },
  "Content Writing": {
    templates: [
      "Write engaging, SEO-optimized content about {task}. Include a compelling headline, structured sections with subheadings, relevant examples, data points, and a strong call-to-action.",
      "Create a comprehensive blog post about {task}. Target a specific audience, maintain a professional yet conversational tone, include actionable insights, and optimize for readability.",
      "Develop thought leadership content on {task}. Present unique perspectives, support arguments with industry trends and research, and establish credibility through expert-level analysis.",
    ],
  },
};

type PromptType = keyof typeof promptTemplates;

export default function PromptGeneratorPage() {
  const [task, setTask] = useState("");
  const [promptType, setPromptType] = useState<PromptType>("Marketing");
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePrompt = () => {
    if (!task.trim()) return;

    setIsGenerating(true);
    
    // Simulate brief generation delay for UX
    setTimeout(() => {
      const templates = promptTemplates[promptType].templates;
      const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
      const result = randomTemplate.replace(/{task}/g, task);
      setGeneratedPrompt(result);
      setIsGenerating(false);
    }, 600);
  };

  const copyToClipboard = async () => {
    if (!generatedPrompt) return;

    try {
      await navigator.clipboard.writeText(generatedPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = generatedPrompt;
      document.body.appendChild(textArea);
      textArea.select();
      (document as any).execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      generatePrompt();
    }
  };

  return (
    <div className="bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero */}
      <section className="bg-black text-white">
        <div className="container-custom section-padding">
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.animate}
            className="mx-auto max-w-3xl text-center"
          >
            <Link
              href="/tools"
              className="mb-6 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Tools
            </Link>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-dark-red/50 bg-dark-red/10 px-4 py-2 text-sm font-medium text-gray-300">
              <Sparkles className="h-4 w-4" />
              Free AI Tool
            </div>
            <h1 className="heading-xl mb-6">AI Prompt Generator</h1>
            <p className="text-body text-gray-400">
              Generate high-quality prompts for ChatGPT and other AI tools. Get professional results every time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tool Interface */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            {/* Input Card */}
            <motion.div
              initial={fadeInUp.initial}
              animate={fadeInUp.animate}
              transition={{ delay: 0.1 }}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="space-y-5">
                {/* Task Input */}
                <div>
                  <label
                    htmlFor="task-input"
                    className="mb-2 block text-sm font-semibold text-black dark:text-white"
                  >
                    What do you want the AI to do?
                  </label>
                  <textarea
                    id="task-input"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="e.g., Create a landing page for a fitness app, Write a Python script to scrape data, Develop a content strategy for a tech blog..."
                    rows={3}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-500 transition-all focus:border-dark-red focus:outline-none focus:ring-2 focus:ring-dark-red/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                  />
                </div>

                {/* Prompt Type Dropdown */}
                <div>
                  <label
                    htmlFor="prompt-type"
                    className="mb-2 block text-sm font-semibold text-black dark:text-white"
                  >
                    Prompt Type
                  </label>
                  <select
                    id="prompt-type"
                    value={promptType}
                    onChange={(e) => setPromptType(e.target.value as PromptType)}
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-black transition-all focus:border-dark-red focus:outline-none focus:ring-2 focus:ring-dark-red/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  >
                    {Object.keys(promptTemplates).map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Generate Button */}
                <button
                  onClick={generatePrompt}
                  disabled={!task.trim() || isGenerating}
                  className="w-full rounded-lg bg-dark-red px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-dark-red-light hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-dark-red"
                >
                  {isGenerating ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="h-5 w-5 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Generating...
                    </span>
                  ) : (
                    "Generate Prompt"
                  )}
                </button>
              </div>
            </motion.div>

            {/* Output Card */}
            {generatedPrompt && (
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="mt-6 rounded-xl border border-gray-200 bg-white p-6 shadow-lg dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-black dark:text-white">
                    Generated Prompt
                  </h3>
                  <button
                    onClick={copyToClipboard}
                    className="inline-flex items-center gap-2 rounded-lg bg-dark-red px-4 py-2 text-xs font-semibold text-white transition-all duration-200 hover:bg-dark-red-light hover:shadow-md"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Copy Prompt
                      </>
                    )}
                  </button>
                </div>
                <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
                  <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    {generatedPrompt}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Tips Section */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900"
            >
              <h3 className="mb-4 text-lg font-semibold text-black dark:text-white">
                Tips for Better Results
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-dark-red text-xs font-bold text-white">
                    1
                  </span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Be specific about your goals and desired outcome
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-dark-red text-xs font-bold text-white">
                    2
                  </span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Include context like target audience, tone, and format
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-dark-red text-xs font-bold text-white">
                    3
                  </span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Select the prompt type that best matches your use case
                  </p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-dark-red text-xs font-bold text-white">
                    4
                  </span>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Generate multiple times to get different variations
                  </p>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
