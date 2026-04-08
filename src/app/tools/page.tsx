"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Rocket,
  Lightbulb,
  Lock,
  FileText,
  ArrowRight,
  Zap,
} from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true },
};

const tools = [
  {
    name: "AI Prompt Generator",
    description: "Generate powerful prompts for ChatGPT and AI tools.",
    icon: Sparkles,
    href: "/tools/prompt-generator",
    category: "AI",
  },
  {
    name: "Startup Name Generator",
    description: "Generate creative startup and brand names.",
    icon: Rocket,
    href: "/tools/name-generator",
    category: "Branding",
  },
  {
    name: "Website Idea Generator",
    description: "Generate unique website and SaaS ideas.",
    icon: Lightbulb,
    href: "/tools/idea-generator",
    category: "Ideas",
  },
  {
    name: "Password Generator",
    description: "Generate strong and secure passwords.",
    icon: Lock,
    href: "/tools/password-generator",
    category: "Security",
  },
  {
    name: "Text Summarizer",
    description: "Summarize long text into short summaries.",
    icon: FileText,
    href: "/tools/text-summarizer",
    category: "Text",
  },
];

const features = [
  {
    icon: Zap,
    title: "100% Free",
    description: "All tools are completely free with no sign-up required.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Built with modern AI technology for better results.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description: "Your data stays in your browser. Nothing is stored.",
  },
];

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = tools.filter(
    (tool) =>
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero */}
      <section className="bg-black text-white">
        <div className="container-custom section-padding">
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.whileInView}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-dark-red/50 bg-dark-red/10 px-4 py-2 text-sm font-medium text-gray-300">
              <Sparkles className="h-4 w-4" />
              Free AI Tools
            </div>
            <h1 className="heading-xl mb-6">Free AI Tools Hub</h1>
            <p className="text-body text-gray-400">
              Free AI-powered tools to help developers, startups, and businesses work faster and smarter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-gray-200 bg-gray-50 py-8 dark:border-gray-800 dark:bg-gray-950">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={staggerContainer.viewport}
            className="grid gap-6 md:grid-cols-3"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="flex items-center gap-4"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-50 text-dark-red dark:bg-dark-red/10">
                  <feature.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-black dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Search */}
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            className="mx-auto mb-12 max-w-md"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-5 py-3.5 text-black placeholder-gray-500 transition-colors focus:border-dark-red focus:outline-none focus:ring-2 focus:ring-dark-red/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Tools Grid */}
          {filteredTools.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={staggerContainer.viewport}
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filteredTools.map((tool) => (
                <motion.div
                  key={tool.name}
                  variants={fadeInUp}
                  whileHover={{ y: -6 }}
                  className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-dark-red/30 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
                >
                  {/* Top Accent Line */}
                  <div className="absolute left-0 top-0 h-1 w-0 bg-dark-red transition-all duration-300 group-hover:w-full" />

                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-block rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-dark-red dark:bg-dark-red/10">
                      {tool.category}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 text-dark-red transition-all duration-300 group-hover:bg-dark-red group-hover:text-white dark:bg-gray-800">
                    <tool.icon className="h-7 w-7" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-xl font-semibold text-black dark:text-white">
                    {tool.name}
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {tool.description}
                  </p>

                  {/* Button */}
                  <Link
                    href={tool.href}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-dark-red px-5 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-dark-red-light hover:shadow-md"
                  >
                    Open Tool
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              className="py-16 text-center"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                <svg
                  className="h-8 w-8 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                No tools found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try a different search term.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="heading-lg mb-4">Need Custom AI Solutions?</h2>
            <p className="text-body mb-8 text-gray-300">
              Let&apos;s build powerful AI tools and automation tailored specifically for your business.
            </p>
            <Link href="/contact" className="btn-primary inline-flex">
              Get in Touch
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
