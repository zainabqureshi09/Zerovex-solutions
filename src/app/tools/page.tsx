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
  Mail,
  User,
  Search,
  Tag,
  PenTool,
  Briefcase,
  Code,
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
      staggerChildren: 0.08,
    },
  },
  viewport: { once: true },
};

const categories = [
  { name: "All", icon: null },
  { name: "AI Tools", icon: Sparkles },
  { name: "Developer Tools", icon: Code },
  { name: "Business Tools", icon: Briefcase },
  { name: "Writing Tools", icon: PenTool },
  { name: "Generators", icon: Zap },
];

const tools = [
  {
    name: "AI Prompt Generator",
    description: "Generate powerful prompts for ChatGPT and AI tools.",
    icon: Sparkles,
    href: "/tools/ai-prompt-generator",
    category: "AI Tools",
  },
  {
    name: "Startup Name Generator",
    description: "Generate creative startup and brand names.",
    icon: Rocket,
    href: "/tools/startup-name-generator",
    category: "Business Tools",
  },
  {
    name: "Website Idea Generator",
    description: "Generate unique website and SaaS ideas.",
    icon: Lightbulb,
    href: "/tools/website-idea-generator",
    category: "Generators",
  },
  {
    name: "Business Idea Generator",
    description: "Generate innovative business concepts and strategies.",
    icon: Briefcase,
    href: "/tools/business-idea-generator",
    category: "Business Tools",
  },
  {
    name: "Password Generator",
    description: "Generate strong and secure passwords.",
    icon: Lock,
    href: "/tools/password-generator",
    category: "Developer Tools",
  },
  {
    name: "Text Summarizer",
    description: "Summarize long text into short summaries.",
    icon: FileText,
    href: "/tools/text-summarizer",
    category: "Writing Tools",
  },
  {
    name: "AI Bio Generator",
    description: "Generate professional bios for social media and websites.",
    icon: User,
    href: "/tools/ai-bio-generator",
    category: "Writing Tools",
  },
  {
    name: "AI Email Generator",
    description: "Generate professional emails for any situation.",
    icon: Mail,
    href: "/tools/ai-email-generator",
    category: "Writing Tools",
  },
  {
    name: "AI Blog Title Generator",
    description: "Generate catchy and SEO-friendly blog titles.",
    icon: PenTool,
    href: "/tools/ai-blog-title-generator",
    category: "Writing Tools",
  },
  {
    name: "AI Product Description Generator",
    description: "Generate compelling product descriptions.",
    icon: Tag,
    href: "/tools/ai-product-description-generator",
    category: "AI Tools",
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
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTools = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || tool.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

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

      {/* Features Bar */}
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

      {/* Tools Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Search Bar */}
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            className="mx-auto mb-8 max-w-xl"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white pl-12 pr-5 py-3.5 text-black placeholder-gray-500 transition-colors focus:border-dark-red focus:outline-none focus:ring-2 focus:ring-dark-red/20 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500"
              />
            </div>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            className="mb-12 flex flex-wrap items-center justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.name
                    ? "bg-dark-red text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {category.icon && <category.icon className="h-4 w-4" />}
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Tools Grid */}
          {filteredTools.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={staggerContainer.viewport}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
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
                <Search className="h-8 w-8 text-gray-400 dark:text-gray-500" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                No tools found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try a different search term or category.
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
