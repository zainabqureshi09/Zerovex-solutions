"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Copy,
  Check,
  RotateCcw,
  ArrowLeft,
  Lightbulb,
  Bookmark,
  BookmarkCheck,
  Info,
  ChevronDown,
  Zap,
  Globe,
  ShoppingCart,
  Briefcase,
  FileText,
  Layers,
  Bot,
  ListFilter,
  X,
} from "lucide-react";
import Link from "next/link";

// ─── Constants ─────────────────────────────────────────────────────

const WEBSITE_TYPES = [
  { id: "Blog", label: "Blog", icon: FileText },
  { id: "SaaS", label: "SaaS", icon: Layers },
  { id: "Marketplace", label: "Marketplace", icon: ShoppingCart },
  { id: "AI Tool", label: "AI Tool", icon: Bot },
  { id: "Directory", label: "Directory", icon: ListFilter },
  { id: "Ecommerce", label: "Ecommerce", icon: ShoppingCart },
  { id: "Portfolio", label: "Portfolio", icon: Briefcase },
];

const DIFFICULTY_OPTIONS = ["Beginner", "Intermediate", "Advanced"];

const IDEA_TEMPLATES: Record<string, ((kw: string) => { title: string; description: string; features: string[] })[]> = {
  Blog: [
    (kw) => ({
      title: `${kw} Insights Hub`,
      description: `A comprehensive blog covering the latest trends, tools, and best practices in ${kw.toLowerCase()}.`,
      features: ["Weekly industry news", "Expert interviews", "Tutorials & guides", "Newsletter subscription", "Resource library"],
    }),
    (kw) => ({
      title: `The ${kw} Review`,
      description: `In-depth reviews and comparisons of ${kw.toLowerCase()} products, services, and platforms.`,
      features: ["Product reviews", "Comparison tables", "User ratings", "Buying guides", "Top 10 rankings"],
    }),
    (kw) => ({
      title: `${kw} Academy Blog`,
      description: `Educational content that helps beginners and professionals master ${kw.toLowerCase()}.`,
      features: ["Step-by-step tutorials", "Case studies", "Cheat sheets", "Video embeds", "Progressive learning paths"],
    }),
    (kw) => ({
      title: `${kw} Trends`,
      description: `Data-driven analysis of emerging trends and market shifts in the ${kw.toLowerCase()} space.`,
      features: ["Market analysis", "Trend reports", "Infographics", "Expert predictions", "Quarterly updates"],
    }),
    (kw) => ({
      title: `${kw} Founder Stories`,
      description: `Inspiring stories and lessons from entrepreneurs building in the ${kw.toLowerCase()} industry.`,
      features: ["Founder interviews", "Startup journeys", "Lessons learned", "Funding stories", "Growth strategies"],
    }),
  ],
  SaaS: [
    (kw) => ({
      title: `${kw}Flow`,
      description: `A SaaS platform that streamlines ${kw.toLowerCase()} workflows with automation and smart tools.`,
      features: ["Automated workflows", "Team collaboration", "Analytics dashboard", "API integrations", "Custom templates"],
    }),
    (kw) => ({
      title: `${kw}Stack`,
      description: `All-in-one SaaS solution for managing ${kw.toLowerCase()} operations from a single dashboard.`,
      features: ["Unified dashboard", "Role-based access", "Real-time sync", "Export & reports", "Multi-tenant support"],
    }),
    (kw) => ({
      title: `Smart${kw}`,
      description: `AI-powered SaaS platform that optimizes ${kw.toLowerCase()} processes using machine learning.`,
      features: ["AI recommendations", "Predictive analytics", "Smart automation", "Custom models", "Data pipelines"],
    }),
    (kw) => ({
      title: `${kw}OS`,
      description: `Operating system for ${kw.toLowerCase()} teams — manage projects, clients, and data in one place.`,
      features: ["Project management", "CRM integration", "Document sharing", "Time tracking", "Invoicing"],
    }),
    (kw) => ({
      title: `${kw}Sync`,
      description: `Cloud-based SaaS for synchronizing ${kw.toLowerCase()} data across teams and platforms.`,
      features: ["Cross-platform sync", "Version control", "Conflict resolution", "Audit logs", "Backup & restore"],
    }),
  ],
  Marketplace: [
    (kw) => ({
      title: `${kw}Connect`,
      description: `A marketplace connecting ${kw.toLowerCase()} professionals with clients and businesses worldwide.`,
      features: ["Profile listings", "Booking system", "Secure payments", "Reviews & ratings", "Messaging platform"],
    }),
    (kw) => ({
      title: `${kw}Hub Marketplace`,
      description: `Buy and sell ${kw.toLowerCase()} services, templates, and digital products in one platform.`,
      features: ["Digital storefront", "Escrow payments", "Seller dashboard", "Search filters", "Commission system"],
    }),
    (kw) => ({
      title: `${kw}Gigs`,
      description: `Freelance marketplace focused on ${kw.toLowerCase()} projects, contracts, and consulting work.`,
      features: ["Job postings", "Proposal system", "Milestone payments", "Dispute resolution", "Portfolio showcase"],
    }),
    (kw) => ({
      title: `${kw}Exchange`,
      description: `Peer-to-peer marketplace for trading ${kw.toLowerCase()} resources, tools, and expertise.`,
      features: ["Peer listings", "Rating system", "Instant matching", "Escrow service", "Subscription tiers"],
    }),
    (kw) => ({
      title: `${kw}Deals`,
      description: `Discounts and deals marketplace for ${kw.toLowerCase()} products, courses, and services.`,
      features: ["Deal listings", "Flash sales", "Coupon codes", "Deal alerts", "Vendor onboarding"],
    }),
  ],
  "AI Tool": [
    (kw) => ({
      title: `AI ${kw} Assistant`,
      description: `An AI-powered tool that helps users with ${kw.toLowerCase()} tasks through intelligent automation.`,
      features: ["Natural language input", "Smart suggestions", "Batch processing", "Export results", "Custom prompts"],
    }),
    (kw) => ({
      title: `${kw}AI Studio`,
      description: `Creative AI platform that generates ${kw.toLowerCase()} content, designs, and solutions.`,
      features: ["Content generation", "Design tools", "Template library", "Collaboration mode", "Version history"],
    }),
    (kw) => ({
      title: `Smart${kw} AI`,
      description: `AI tool that analyzes ${kw.toLowerCase()} data and provides actionable insights automatically.`,
      features: ["Data analysis", "Automated reports", "Pattern detection", "Custom dashboards", "Alert system"],
    }),
    (kw) => ({
      title: `${kw}Bot`,
      description: `Conversational AI chatbot specialized in ${kw.toLowerCase()} support and guidance.`,
      features: ["Chat interface", "Knowledge base", "Multi-language", "Analytics", "Human handoff"],
    }),
    (kw) => ({
      title: `${kw}Gen AI`,
      description: `Generative AI tool for creating ${kw.toLowerCase()} assets, copy, and visual content.`,
      features: ["Text generation", "Image creation", "Style transfer", "Batch mode", "Download options"],
    }),
  ],
  Directory: [
    (kw) => ({
      title: `${kw} Directory`,
      description: `The most comprehensive directory of ${kw.toLowerCase()} tools, companies, and resources.`,
      features: ["Searchable listings", "Category filters", "User submissions", "Verified badges", "Newsletter updates"],
    }),
    (kw) => ({
      title: `Top ${kw} Tools`,
      description: `Curated directory of the best ${kw.toLowerCase()} tools ranked and reviewed by experts.`,
      features: ["Expert reviews", "Comparison charts", "User ratings", "Weekly updates", "Featured listings"],
    }),
    (kw) => ({
      title: `${kw} Finder`,
      description: `Smart directory that helps users discover and compare ${kw.toLowerCase()} solutions quickly.`,
      features: ["Smart search", "Filter system", "Side-by-side compare", "Save lists", "Email alerts"],
    }),
    (kw) => ({
      title: `${kw} Ecosystem`,
      description: `Complete map of the ${kw.toLowerCase()} ecosystem — startups, tools, investors, and events.`,
      features: ["Interactive map", "Company profiles", "Funding data", "Event calendar", "Community forum"],
    }),
    (kw) => ({
      title: `${kw} Stack`,
      description: `Curated tech stack directory for ${kw.toLowerCase()} projects with recommendations.`,
      features: ["Stack builder", "Tool recommendations", "Compatibility checker", "Open source focus", "User contributions"],
    }),
  ],
  Ecommerce: [
    (kw) => ({
      title: `${kw}Shop`,
      description: `An ecommerce store specializing in premium ${kw.toLowerCase()} products and accessories.`,
      features: ["Product catalog", "Shopping cart", "Secure checkout", "Wishlist", "Loyalty program"],
    }),
    (kw) => ({
      title: `${kw} Essentials`,
      description: `Subscription-based ecommerce delivering curated ${kw.toLowerCase()} essentials monthly.`,
      features: ["Subscription boxes", "Personalized picks", "Flexible plans", "Gift options", "Review system"],
    }),
    (kw) => ({
      title: `${kw} Boutique`,
      description: `Luxury ecommerce featuring handpicked ${kw.toLowerCase()} products from top brands.`,
      features: ["Curated collections", "Premium packaging", "Limited editions", "VIP membership", "Style quizzes"],
    }),
    (kw) => ({
      title: `${kw} Depot`,
      description: `One-stop ecommerce warehouse for all ${kw.toLowerCase()} supplies, kits, and gear.`,
      features: ["Bulk pricing", "Kit builder", "Fast shipping", "Inventory alerts", "Business accounts"],
    }),
    (kw) => ({
      title: `${kw} Crate`,
      description: `Discovery-based ecommerce where users find exciting new ${kw.toLowerCase()} products weekly.`,
      features: ["Weekly drops", "Surprise crates", "Ratings system", "Referral rewards", "Limited quantities"],
    }),
  ],
  Portfolio: [
    (kw) => ({
      title: `${kw} Showcase`,
      description: `A stunning portfolio platform for ${kw.toLowerCase()} professionals to display their work.`,
      features: ["Project galleries", "Case studies", "Client testimonials", "Contact forms", "Custom domains"],
    }),
    (kw) => ({
      title: `${kw} Portfolio Pro`,
      description: `Professional portfolio builder designed specifically for ${kw.toLowerCase()} experts.`,
      features: ["Drag & drop builder", "Analytics", "SEO optimization", "Blog section", "Resume builder"],
    }),
    (kw) => ({
      title: `${kw} Folio`,
      description: `Minimal and elegant portfolio template for ${kw.toLowerCase()} creators and developers.`,
      features: ["Clean templates", "Dark mode", "Project tagging", "Media embeds", "Social links"],
    }),
    (kw) => ({
      title: `${kw} Work`,
      description: `Interactive portfolio platform showcasing ${kw.toLowerCase()} projects with live demos.`,
      features: ["Live previews", "Code snippets", "Tech stack display", "GitHub integration", "Visitor analytics"],
    }),
    (kw) => ({
      title: `${kw} Creative`,
      description: `Visual-first portfolio site for ${kw.toLowerCase()} designers, artists, and creators.`,
      features: ["Full-screen galleries", "Masonry layout", "Lightbox viewer", "Social sharing", "Download options"],
    }),
  ],
};

// ─── Generation Engine ─────────────────────────────────────────────

interface WebsiteIdea {
  id: string;
  title: string;
  type: string;
  description: string;
  features: string[];
}

function generateIdeas(
  keyword: string,
  selectedType: string,
  difficulty: string
): WebsiteIdea[] {
  const ideas: WebsiteIdea[] = [];
  const kw = keyword.trim();
  let idCounter = 0;

  function addIdea(type: string, templateFn: (kw: string) => { title: string; description: string; features: string[] }) {
    const result = templateFn(kw);
    ideas.push({
      id: `idea-${idCounter++}`,
      title: result.title,
      type,
      description: result.description,
      features: result.features,
    });
  }

  // If user selected a specific type, generate 4 ideas of that type
  if (selectedType !== "All") {
    const templates = IDEA_TEMPLATES[selectedType] || [];
    const shuffled = [...templates].sort(() => Math.random() - 0.5);
    shuffled.forEach((fn) => addIdea(selectedType, fn));
  } else {
    // Generate from all types (mix)
    const types = Object.keys(IDEA_TEMPLATES);
    types.forEach((type) => {
      const templates = IDEA_TEMPLATES[type];
      const fn = templates[Math.floor(Math.random() * templates.length)];
      addIdea(type, fn);
    });
  }

  return ideas;
}

// ─── Idea Card ─────────────────────────────────────────────────────

function IdeaCard({
  idea,
  index,
  copied,
  saved,
  onCopy,
  onSave,
}: {
  idea: WebsiteIdea;
  index: number;
  copied: boolean;
  saved: boolean;
  onCopy: () => void;
  onSave: () => void;
}) {
  const TypeIcon = WEBSITE_TYPES.find((t) => t.id === idea.type)?.icon || Globe;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-6 transition-all duration-300 hover:border-dark-red/40 hover:shadow-lg hover:shadow-dark-red/10"
    >
      {/* Glow accent */}
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-dark-red/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Type badge */}
      <div className="mb-3 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-dark-red/10 px-3 py-1 text-xs font-semibold text-dark-red">
          <TypeIcon className="h-3 w-3" />
          {idea.type}
        </span>
      </div>

      {/* Title */}
      <h3 className="mb-2 text-lg font-bold tracking-tight text-white">
        {idea.title}
      </h3>

      {/* Description */}
      <p className="mb-4 text-sm leading-relaxed text-gray-400">
        {idea.description}
      </p>

      {/* Features */}
      <div className="mb-5">
        <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
          Key Features
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {idea.features.map((f) => (
            <span
              key={f}
              className="rounded bg-gray-800 px-2.5 py-1 text-xs text-gray-400"
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={onCopy}
          className={`flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-200 ${
            copied
              ? "bg-green-900/30 text-green-400"
              : "bg-gray-800 text-gray-400 hover:bg-dark-red/20 hover:text-dark-red"
          }`}
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          {copied ? "Copied" : "Copy"}
        </button>
        <button
          onClick={onSave}
          className={`flex items-center justify-center rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-200 ${
            saved
              ? "bg-dark-red/20 text-dark-red"
              : "bg-gray-800 text-gray-400 hover:bg-dark-red/20 hover:text-dark-red"
          }`}
        >
          {saved ? (
            <BookmarkCheck className="h-3.5 w-3.5" />
          ) : (
            <Bookmark className="h-3.5 w-3.5" />
          )}
        </button>
      </div>
    </motion.div>
  );
}

// ─── Skeleton Card ─────────────────────────────────────────────────

function SkeletonCard() {
  return (
    <div className="animate-pulse overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 p-6">
      <div className="mb-3 h-5 w-20 rounded-full bg-gray-800" />
      <div className="mb-2 h-6 w-3/4 rounded bg-gray-800" />
      <div className="mb-4 h-4 w-full rounded bg-gray-800/60" />
      <div className="mb-5 flex gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-6 w-16 rounded bg-gray-800/40" />
        ))}
      </div>
      <div className="h-9 w-full rounded bg-gray-800/30" />
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────

export default function WebsiteIdeaGeneratorPage() {
  const [keyword, setKeyword] = useState("");
  const [websiteType, setWebsiteType] = useState("All");
  const [difficulty, setDifficulty] = useState("Intermediate");
  const [ideas, setIdeas] = useState<WebsiteIdea[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());
  const [hasGenerated, setHasGenerated] = useState(false);

  const activeFilter = websiteType;

  const filteredIdeas = useMemo(() => {
    if (activeFilter === "All") return ideas;
    return ideas.filter((idea) => idea.type === activeFilter);
  }, [ideas, activeFilter]);

  const handleGenerate = useCallback(() => {
    if (!keyword.trim()) return;
    setIsGenerating(true);
    setIdeas([]);
    setHasGenerated(true);
    setCopiedId(null);

    setTimeout(() => {
      const newIdeas = generateIdeas(keyword, websiteType === "All" ? "All" : websiteType, difficulty);
      setIdeas(newIdeas);
      setIsGenerating(false);
    }, 1500);
  }, [keyword, websiteType, difficulty]);

  const handleRegenerate = useCallback(() => {
    if (!keyword.trim()) return;
    setIsGenerating(true);
    setIdeas([]);

    setTimeout(() => {
      const newIdeas = generateIdeas(keyword, websiteType === "All" ? "All" : websiteType, difficulty);
      setIdeas(newIdeas);
      setIsGenerating(false);
    }, 1200);
  }, [keyword, websiteType, difficulty]);

  const handleGenerateSimilar = useCallback((type: string) => {
    setIsGenerating(true);

    setTimeout(() => {
      const templates = IDEA_TEMPLATES[type];
      if (!templates) return;
      const fn = templates[Math.floor(Math.random() * templates.length)];
      const newIdea: WebsiteIdea = {
        id: `idea-similar-${Date.now()}`,
        title: fn(keyword.trim()).title,
        type,
        description: fn(keyword.trim()).description,
        features: fn(keyword.trim()).features,
      };
      setIdeas((prev) => [...prev, newIdea]);
      setIsGenerating(false);
    }, 800);
  }, [keyword]);

  const copyIdea = (idea: WebsiteIdea) => {
    const text = `${idea.title}\n\n${idea.description}\n\nFeatures: ${idea.features.join(", ")}`;
    navigator.clipboard.writeText(text).catch(() => {});
    setCopiedId(idea.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleSave = (id: string) => {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
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
              <Globe className="h-4 w-4" />
              Free Tool — Instant Ideas
            </div>

            <h1 className="heading-xl mb-6">
              Website Idea <span className="text-gradient">Generator</span>
            </h1>

            <p className="text-xl leading-relaxed text-gray-400 md:text-2xl">
              Generate creative website ideas for your next project, startup, or online business.
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500">
              Enter a niche or keyword and instantly discover unique website concepts you can build.
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
                    Keyword / Niche
                  </label>
                  <input
                    id="keyword"
                    type="text"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleGenerate();
                    }}
                    placeholder="e.g., Fitness, Crypto, Cooking, Travel..."
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm text-black placeholder-gray-400 transition-all focus:border-dark-red focus:outline-none focus:ring-2 focus:ring-dark-red/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                  />
                </div>

                {/* Website Type + Difficulty Row */}
                <div className="grid gap-4 md:grid-cols-2">
                  {/* Website Type */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-black dark:text-white">
                      <Globe className="mr-1.5 inline h-4 w-4 text-dark-red" />
                      Website Type
                    </label>
                    <div className="grid grid-cols-4 gap-1.5 sm:grid-cols-4">
                      {WEBSITE_TYPES.map((type) => (
                        <button
                          key={type.id}
                          onClick={() => setWebsiteType(type.id)}
                          className={`flex flex-col items-center justify-center rounded-lg px-1.5 py-2.5 text-center transition-all duration-200 ${
                            websiteType === type.id
                              ? "bg-dark-red text-white shadow-md shadow-dark-red/20"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                          }`}
                          title={type.label}
                        >
                          <type.icon className="h-4 w-4" />
                          <span className="mt-1 text-[10px] font-medium leading-tight">
                            {type.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Difficulty */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-black dark:text-white">
                      <Zap className="mr-1.5 inline h-4 w-4 text-dark-red" />
                      Difficulty
                    </label>
                    <div className="flex gap-2">
                      {DIFFICULTY_OPTIONS.map((level) => (
                        <button
                          key={level}
                          onClick={() => setDifficulty(level)}
                          className={`flex-1 rounded-lg px-3 py-2.5 text-xs font-semibold transition-all duration-200 ${
                            difficulty === level
                              ? "bg-dark-red text-white shadow-md shadow-dark-red/20"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                          }`}
                        >
                          {level}
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
                        Generate Website Ideas
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
              {(isGenerating || ideas.length > 0) && (
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
                        Generated Ideas
                      </h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {isGenerating
                          ? "Creating unique website ideas..."
                          : `${ideas.length} ideas generated for "${keyword}"`}
                      </p>
                    </div>
                    {ideas.length > 0 && (
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

                  {/* Filter Tabs */}
                  {ideas.length > 0 && (
                    <div className="mb-6 flex flex-wrap gap-2">
                      <button
                        onClick={() => setWebsiteType("All")}
                        className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                          activeFilter === "All"
                            ? "bg-dark-red text-white shadow-md shadow-dark-red/20"
                            : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                        }`}
                      >
                        All ({ideas.length})
                      </button>
                      {Array.from(new Set(ideas.map((i) => i.type))).map((type) => {
                        const count = ideas.filter((i) => i.type === type).length;
                        return (
                          <button
                            key={type}
                            onClick={() => setWebsiteType(type)}
                            className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                              activeFilter === type
                                ? "bg-dark-red text-white shadow-md shadow-dark-red/20"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
                            }`}
                          >
                            {type} ({count})
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* Results Grid */}
                  {isGenerating ? (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <SkeletonCard key={i} />
                      ))}
                    </div>
                  ) : filteredIdeas.length > 0 ? (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {filteredIdeas.map((idea, i) => (
                        <IdeaCard
                          key={idea.id}
                          idea={idea}
                          index={i}
                          copied={copiedId === idea.id}
                          saved={savedIds.has(idea.id)}
                          onCopy={() => copyIdea(idea)}
                          onSave={() => toggleSave(idea.id)}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-xl border border-gray-800 bg-gray-900/50 py-16 text-center">
                      <p className="text-gray-500">No ideas match the selected filter. Try a different type.</p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* ==================== SEO SECTION ==================== */}
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
                        What is a Website Idea Generator?
                      </h3>
                      <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
                        A Website Idea Generator is a free brainstorming tool that helps developers, entrepreneurs, and creators discover creative website concepts instantly. By entering a niche or keyword, the tool generates unique combinations of website types — blogs, SaaS platforms, marketplaces, directories, AI tools, ecommerce stores, and portfolios — each with suggested features and descriptions.
                      </p>
                      <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
                        Idea generators are especially useful for overcoming creative blocks. Whether you&apos;re looking for your next side project, a startup concept to pitch, or a portfolio piece for your resume, this tool provides structured, actionable ideas that you can start building immediately.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {["Blogs", "SaaS", "Marketplaces", "AI Tools", "Directories", "Ecommerce", "Portfolios"].map((tag) => (
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
                How to Use Your Website Ideas
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    num: "1",
                    title: "Pick a Specific Niche",
                    desc: "The more specific your keyword, the more unique and actionable the ideas will be.",
                  },
                  {
                    num: "2",
                    title: "Filter by Type",
                    desc: "Use category filters to focus on blog ideas, SaaS concepts, or AI tools specifically.",
                  },
                  {
                    num: "3",
                    title: "Save Favorites",
                    desc: "Bookmark ideas you like and come back later to compare and combine the best ones.",
                  },
                  {
                    num: "4",
                    title: "Start Small, Iterate",
                    desc: "Pick one idea, build an MVP, and refine based on real user feedback.",
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
