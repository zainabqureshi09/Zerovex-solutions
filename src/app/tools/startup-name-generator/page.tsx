"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Copy,
  Check,
  RotateCcw,
  ArrowLeft,
  Zap,
  Building2,
  Palette,
  Globe,
  Info,
  ExternalLink,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";

// ─── Constants ─────────────────────────────────────────────────────

const INDUSTRIES = [
  "Tech",
  "AI",
  "SaaS",
  "Finance",
  "Ecommerce",
  "Marketing",
  "Healthcare",
  "Education",
  "Other",
];

const NAME_STYLES = [
  { id: "Modern", label: "Modern", icon: Zap },
  { id: "Tech", label: "Tech", icon: Building2 },
  { id: "Creative", label: "Creative", icon: Palette },
  { id: "Brandable", label: "Brandable", icon: Sparkles },
];

const PREFIXES: Record<string, string[]> = {
  Modern: ["Neo", "Nex", "Zen", "Vibe", "Pure", "Flux", "Core", "Vivid", "Aura", "Luma"],
  Tech: ["Tech", "Code", "Data", "Bit", "Byte", "Cloud", "Stack", "Logic", "Net", "Sync"],
  Creative: ["Arti", "Crea", "Pixel", "Muse", "Bloom", "Prism", "Nova", "Pulse", "Drift", "Spark"],
  Brandable: ["Vel", "Zen", "Nov", "Ori", "Axi", "Lux", "Evo", "Ara", "Syn", "Veo"],
};

const SUFFIXES: Record<string, string[]> = {
  Modern: ["ify", "ora", "iva", "ara", "eon", "ix", "ux", "ex", "iq", "ly"],
  Tech: ["Tech", "Labs", "Hub", "Stack", "Ops", "IO", "Sys", "Net", "API", "Bot"],
  Creative: ["Studio", "Craft", "Forge", "Hive", "Works", "Lab", "House", "Wave", "Edge", "Shift"],
  Brandable: ["ix", "ex", "on", "ar", "ix", "um", "ia", "or", "eo", "ax"],
};

const BRANDABLE_ROOTS = [
  "Nexora", "Syntra", "Vantico", "Zenvate", "Klyra", "Orbis", "Prismo",
  "Tenzor", "Quivra", "Elaris", "Cryonix", "Zyphor", "Aureli", "Novant",
  "Lumexa", "Velora", "Oryzon", "Trivex", "Exaltia", "Fervex", "Glacian",
  "Ignova", "Jovara", "Kinetix", "Meridia", "Optivus", "Pyraxis", "Solun",
  "Trovex", "Umbria", "Vexora", "Xenith", "Zylora", "Aethon", "Blazera",
  "Corvex", "Drovio", "Elyzon", "Fynix", "Gryphor", "Helixar", "Invera",
  "Jovexa", "Kryon", "Lyrion", "Moxara", "Nymble", "Ozvara", "Pryzma",
];

const TLDS = [".com", ".io", ".ai"];

// ─── Name Generation ───────────────────────────────────────────────

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

function generateNames(
  keyword: string,
  style: string,
  _industry: string
): { name: string; domains: string[] }[] {
  const results: { name: string; domains: string[] }[] = [];
  const kw = capitalize(keyword.trim());
  const prefixes = PREFIXES[style] || PREFIXES.Modern;
  const suffixes = SUFFIXES[style] || SUFFIXES.Modern;
  const kwLower = keyword.trim().toLowerCase();

  const seen = new Set<string>();

  function add(name: string) {
    const clean = name.replace(/\s+/g, "");
    if (seen.has(clean) || clean.length < 3) return;
    seen.add(clean);
    const domains = TLDS.map((tld) => `${clean.toLowerCase()}${tld}`);
    results.push({ name: clean, domains });
  }

  // A) Prefix + keyword
  const shuffledPrefixes = [...prefixes].sort(() => Math.random() - 0.5);
  for (let i = 0; i < Math.min(5, shuffledPrefixes.length); i++) {
    add(shuffledPrefixes[i] + kw);
  }

  // B) Keyword + suffix
  const shuffledSuffixes = [...suffixes].sort(() => Math.random() - 0.5);
  for (let i = 0; i < Math.min(5, shuffledSuffixes.length); i++) {
    add(kw + shuffledSuffixes[i]);
  }

  // C) Portmanteau — merge keyword with random brandable root
  for (let i = 0; i < 5; i++) {
    const root = BRANDABLE_ROOTS[Math.floor(Math.random() * BRANDABLE_ROOTS.length)];
    // Take first half of root + keyword, or keyword + first half of root
    const halfRoot = root.substring(0, Math.ceil(root.length / 2));
    const halfKw = kw.substring(0, Math.ceil(kw.length / 2));
    if (Math.random() > 0.5) {
      add(halfRoot + kw.substring(Math.floor(kw.length / 3)));
    } else {
      add(kw.substring(0, Math.ceil(kw.length * 0.6)) + halfRoot.substring(2));
    }
  }

  // D) Random brandable names (standalone, unrelated to keyword)
  const shuffledRoots = [...BRANDABLE_ROOTS].sort(() => Math.random() - 0.5);
  for (let i = 0; i < 5; i++) {
    add(shuffledRoots[i]);
  }

  return results;
}

// ─── Name Card ─────────────────────────────────────────────────────

function NameCard({
  item,
  index,
  copied,
  onCopy,
}: {
  item: { name: string; domains: string[] };
  index: number;
  copied: boolean;
  onCopy: () => void;
}) {
  const [activeTld, setActiveTld] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, delay: index * 0.04, ease: "easeOut" }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-5 transition-all duration-300 hover:border-dark-red/40 hover:shadow-lg hover:shadow-dark-red/10"
    >
      {/* Glow accent */}
      <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-dark-red/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Name */}
      <h3 className="mb-1 text-xl font-bold tracking-tight text-white">
        {item.name}
      </h3>

      {/* Domain */}
      <div className="mb-4 flex items-center gap-2">
        <div className="relative flex items-center rounded-lg bg-gray-800">
          {TLDS.map((tld, i) => (
            <button
              key={tld}
              onClick={() => setActiveTld(i)}
              className={`px-2.5 py-1 text-[10px] font-semibold transition-all ${
                i === activeTld
                  ? "rounded bg-dark-red text-white"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              {tld}
            </button>
          ))}
        </div>
        <span className="text-xs text-gray-500">
          {item.domains[activeTld]}
        </span>
        <ExternalLink className="h-3 w-3 text-gray-600" />
      </div>

      {/* Copy Button */}
      <button
        onClick={onCopy}
        className={`flex w-full items-center justify-center gap-2 rounded-lg px-3 py-2.5 text-xs font-semibold transition-all duration-200 ${
          copied
            ? "bg-green-900/30 text-green-400"
            : "bg-gray-800 text-gray-400 hover:bg-dark-red/20 hover:text-dark-red"
        }`}
      >
        {copied ? (
          <>
            <Check className="h-3.5 w-3.5" />
            Copied
          </>
        ) : (
          <>
            <Copy className="h-3.5 w-3.5" />
            Copy Name
          </>
        )}
      </button>
    </motion.div>
  );
}

// ─── Loading Skeleton ──────────────────────────────────────────────

function SkeletonCard() {
  return (
    <div className="animate-pulse overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-5">
      <div className="mb-3 h-6 w-2/3 rounded bg-gray-800" />
      <div className="mb-4 h-4 w-1/2 rounded bg-gray-800/60" />
      <div className="h-9 w-full rounded bg-gray-800/40" />
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────

export default function StartupNameGeneratorPage() {
  const [keyword, setKeyword] = useState("");
  const [industry, setIndustry] = useState("Tech");
  const [style, setStyle] = useState("Modern");
  const [results, setResults] = useState<{ name: string; domains: string[] }[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedName, setCopiedName] = useState<string | null>(null);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleGenerate = useCallback(() => {
    if (!keyword.trim()) return;
    setIsGenerating(true);
    setResults([]);
    setHasGenerated(true);

    // Simulate realistic delay
    setTimeout(() => {
      const names = generateNames(keyword, style, industry);
      setResults(names);
      setIsGenerating(false);
    }, 1200);
  }, [keyword, style, industry]);

  const handleRegenerate = useCallback(() => {
    if (!keyword.trim()) return;
    setIsGenerating(true);
    setResults([]);

    setTimeout(() => {
      const names = generateNames(keyword, style, industry);
      setResults(names);
      setIsGenerating(false);
    }, 1000);
  }, [keyword, style, industry]);

  const copyName = async (name: string) => {
    try {
      await navigator.clipboard.writeText(name);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = name;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopiedName(name);
    setTimeout(() => setCopiedName(null), 2000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handleGenerate();
    }
  };

  const canGenerate = keyword.trim().length >= 2;

  return (
    <div className="bg-white transition-colors duration-300 dark:bg-black" onKeyDown={handleKeyDown}>
      {/* ==================== HERO ==================== */}
      <section className="relative overflow-hidden bg-black text-white">
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
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl text-center"
          >
            <Link
              href="/tools"
              className="mb-6 inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Tools
            </Link>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-dark-red/50 bg-dark-red/10 px-5 py-2.5 text-sm font-semibold text-gray-300 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" />
              Free Tool — No Sign-Up Required
            </div>

            <h1 className="heading-xl mb-6">
              Startup Name <span className="text-gradient">Generator</span>
            </h1>

            <p className="text-xl leading-relaxed text-gray-400 md:text-2xl">
              Generate unique, brandable startup names instantly. Perfect for tech companies, SaaS platforms, and AI ventures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== TOOL INTERFACE ==================== */}
      <section className="section-padding bg-gray-50 dark:bg-gray-950">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            {/* Input Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="space-y-6">
                {/* Keyword Input */}
                <div>
                  <label
                    htmlFor="keyword"
                    className="mb-2 block text-sm font-semibold text-black dark:text-white"
                  >
                    <Lightbulb className="mr-1.5 inline h-4 w-4 text-dark-red" />
                    Keyword / Startup Idea
                  </label>
                  <input
                    id="keyword"
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleGenerate();
                    }}
                    placeholder="e.g., Cloud, Automate, Finance, Health..."
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm text-black placeholder-gray-400 transition-all focus:border-dark-red focus:outline-none focus:ring-2 focus:ring-dark-red/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                  />
                </div>

                {/* Industry + Style Row */}
                <div className="grid gap-4 md:grid-cols-2">
                  {/* Industry */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-black dark:text-white">
                      <Building2 className="mr-1.5 inline h-4 w-4 text-dark-red" />
                      Industry
                    </label>
                    <select
                      value={industry}
                      onChange={(e) => setIndustry(e.target.value)}
                      className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3.5 pr-10 text-sm text-black transition-all focus:border-dark-red focus:outline-none focus:ring-2 focus:ring-dark-red/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    >
                      {INDUSTRIES.map((ind) => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </select>
                  </div>

                  {/* Style */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-black dark:text-white">
                      <Palette className="mr-1.5 inline h-4 w-4 text-dark-red" />
                      Name Style
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {NAME_STYLES.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => setStyle(s.id)}
                          className={`flex items-center justify-center rounded-lg px-2 py-2.5 text-xs font-semibold transition-all duration-200 ${
                            style === s.id
                              ? "bg-dark-red text-white shadow-md shadow-dark-red/20"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                          }`}
                        >
                          <s.icon className="mr-1 h-3.5 w-3.5" />
                          <span className="hidden sm:inline">{s.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Generate Button */}
                <div className="flex gap-3 pt-2">
                  <button
                    onClick={handleGenerate}
                    disabled={!canGenerate || isGenerating}
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
                        Generate Names
                      </>
                    )}
                  </button>
                </div>

                <p className="text-center text-xs text-gray-500 dark:text-gray-500">
                  Press <kbd className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium dark:bg-gray-800">Ctrl</kbd> + <kbd className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] font-medium dark:bg-gray-800">Enter</kbd> to generate
                </p>
              </div>
            </motion.div>

            {/* ==================== RESULTS ==================== */}
            <AnimatePresence mode="wait">
              {(isGenerating || results.length > 0) && (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 16 }}
                  transition={{ duration: 0.4 }}
                  className="mt-10"
                >
                  {/* Results Header */}
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h2 className="text-xl font-bold text-black dark:text-white">
                        Generated Names
                      </h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {isGenerating ? "Creating unique names..." : `${results.length} names generated for "${keyword}"`}
                      </p>
                    </div>
                    {results.length > 0 && (
                      <button
                        onClick={handleRegenerate}
                        disabled={isGenerating}
                        className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:border-dark-red hover:text-dark-red disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-dark-red dark:hover:text-dark-red"
                      >
                        <RotateCcw className={`h-4 w-4 ${isGenerating ? "animate-spin" : ""}`} />
                        Generate Similar
                      </button>
                    )}
                  </div>

                  {/* Results Grid */}
                  {isGenerating ? (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <SkeletonCard key={i} />
                      ))}
                    </div>
                  ) : (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {results.map((item, i) => (
                        <NameCard
                          key={item.name}
                          item={item}
                          index={i}
                          copied={copiedName === item.name}
                          onCopy={() => copyName(item.name)}
                        />
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* ==================== SEO / INFO SECTION ==================== */}
            {!hasGenerated && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-16"
              >
                <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 dark:border-gray-800 dark:from-gray-900 dark:to-gray-950">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-dark-red/10 text-dark-red">
                      <Info className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-3 text-lg font-bold text-black dark:text-white">
                        What is a Startup Name Generator?
                      </h3>
                      <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
                        A Startup Name Generator is a free tool that helps entrepreneurs, founders, and creators brainstorm unique, brandable business names. By combining your keyword with prefixes, suffixes, portmanteau techniques, and creative word blends, it generates dozens of naming options in seconds.
                      </p>
                      <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
                        Entrepreneurs use tools like this during the early stages of building a company — whether it&apos;s a SaaS platform, AI startup, ecommerce brand, or tech venture. A strong, memorable name is the foundation of your brand identity, and this tool helps you discover options you might never have thought of.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {[".com Domains", ".io Domains", ".ai Domains", "Brandable", "Tech-Focused", "Free Tool"].map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ==================== TIPS ==================== */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 dark:border-gray-800 dark:from-gray-900 dark:to-gray-950"
            >
              <h3 className="mb-6 text-lg font-bold text-black dark:text-white">
                Tips for Choosing a Startup Name
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    num: "1",
                    title: "Keep it Short",
                    desc: "Aim for 2-3 syllables. Shorter names are easier to remember and type.",
                  },
                  {
                    num: "2",
                    title: "Check Availability",
                    desc: "Verify domain and trademark availability before committing to a name.",
                  },
                  {
                    num: "3",
                    title: "Make it Pronounceable",
                    desc: "If people can&apos;t say it, they won&apos;t share it. Say it out loud.",
                  },
                  {
                    num: "4",
                    title: "Think Long-Term",
                    desc: "Choose a name that scales with your vision, not just your MVP.",
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
