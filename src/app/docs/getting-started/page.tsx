import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import { TableOfContents } from "@/components/docs/TableOfContents";
import { ArticleRating } from "@/components/docs/ArticleRating";
import { RelatedArticles } from "@/components/docs/RelatedArticles";
import { EditOnGitHub } from "@/components/docs/EditOnGitHub";
import { ShortcutsGuide } from "@/components/docs/ShortcutsGuide";
import { VersionSelector } from "@/components/docs/VersionSelector";
import Link from "next/link";
import { 
  ArrowRight, 
  Zap, 
  Layers, 
  Terminal, 
  Settings, 
  Shield, 
  Cpu, 
  Globe, 
  Box, 
  Database, 
  ChevronRight,
  Sparkles,
  Rocket
} from "lucide-react";

export const metadata = {
  title: "Getting Started",
  description: "Professional quick start guide to Zerovex - The premium documentation platform.",
};

const tocItems = [
  { id: "introduction", text: "Introduction", level: 2 },
  { id: "learn", text: "What You Will Learn", level: 2 },
  { id: "prerequisites", text: "Prerequisites", level: 2 },
  { id: "installation", text: "Installation", level: 2 },
  { id: "structure", text: "Project Structure", level: 2 },
  { id: "architecture", text: "Platform Architecture", level: 2 },
  { id: "first-project", text: "Creating Your First Project", level: 2 },
  { id: "api-integrations", text: "API Integrations", level: 2 },
  { id: "deployment", text: "Deployment", level: 2 },
  { id: "next-steps", text: "Next Steps", level: 2 },
];

const relatedArticles = [
  {
    title: "Platform Architecture",
    href: "/docs/api-reference",
    category: "Technical",
  },
  {
    title: "Security Features",
    href: "/docs/getting-started",
    category: "Security",
  },
  {
    title: "Deployment Guide",
    href: "/docs/changelog",
    category: "Operations",
  },
];

export default function GettingStartedPage() {
  return (
    <DocLayout title="Getting Started">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Hero Section */}
        <div className="relative mt-8 mb-12 overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10 bg-gradient-to-br from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black p-8 md:p-12">
          {/* Decorative background orb */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-dark-red/5 blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900/50 w-fit">
                <Sparkles className="h-3.5 w-3.5 text-dark-red" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-dark-red">Developer Hub</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4 tracking-tight" style={{ fontFamily: "var(--font-serif)" }}>
                Start Building with <span className="text-gradient">Zerovex</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Welcome to the official Zerovex documentation. This guide will help you set up your developer environment and build high-performance applications with our AI-driven platform.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <VersionSelector />
              <ShortcutsGuide />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_250px] gap-12">
          {/* Main Content */}
          <div className="space-y-16">
            
            {/* 1. Introduction */}
            <section id="introduction">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-dark-red text-white">
                  <Globe className="h-5 w-5" />
                </div>
                <h2 className="text-3xl font-bold text-black dark:text-white">Introduction</h2>
              </div>
              <p className="doc-paragraph text-lg leading-relaxed">
                Zerovex is a high-performance documentation and application platform designed for modern engineering teams. 
                Our infrastructure provides the building blocks for creating immersive, developer-friendly documentation 
                while offering powerful AI integrations that bridge the gap between static content and interactive learning.
              </p>
            </section>

            {/* 2. What You Will Learn */}
            <section id="learn">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-8">What You Will Learn</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { title: "Environment Setup", desc: "Configuring your workspace for Zerovex development." },
                  { title: "Core Architecture", desc: "Understanding the modular design of the platform." },
                  { title: "Project Creation", desc: "Initiating and managing your first Zerovex project." },
                  { title: "Deployment Flow", desc: "Automating your release pipeline for production." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/5 transition-hover hover:border-dark-red/20">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-dark-red/10 text-dark-red">
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-black dark:text-white text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 3. Prerequisites */}
            <section id="prerequisites">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Prerequisites</h2>
              <p className="doc-paragraph">
                Before initiating your first project, ensure your local environment meets the following specifications:
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black dark:text-white text-sm mb-1">Node.js Runtime</h4>
                    <p className="text-xs text-gray-500">v18.0 or higher required for full compatibility.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black dark:text-white text-sm mb-1">Package Manager</h4>
                    <p className="text-xs text-gray-500">npm, yarn, or pnpm (pnpm recommended).</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600">
                    <Terminal className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black dark:text-white text-sm mb-1">Modern Browser</h4>
                    <p className="text-xs text-gray-500">Chromium-based or Firefox for advanced CSS.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600">
                    <Box className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black dark:text-white text-sm mb-1">Code Editor</h4>
                    <p className="text-xs text-gray-500">VS Code with TypeScript support.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. Installation */}
            <section id="installation">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Installation</h2>
              <p className="doc-paragraph">
                The easiest way to get started is by using the Zerovex CLI to bootstrap your project. Run the following command in your terminal:
              </p>

              <CodeBlock
                language="bash"
                title="terminal"
                code={`# Initialize a new Zerovex project
npx zerovex-cli@latest init my-project

# Navigate to project directory
cd my-project

# Install dependencies
pnpm install

# Start the development server
pnpm dev`}
              />
              
              <div className="mt-6 p-4 rounded-xl border border-blue-100 dark:border-blue-900/30 bg-blue-50/30 dark:bg-blue-950/10">
                <p className="text-xs text-blue-700 dark:text-blue-400 leading-relaxed">
                  <strong>Pro Tip:</strong> Using <code className="inline-code text-blue-800 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/30">pnpm</code> is recommended for faster installations and better disk space management in large-scale documentation projects.
                </p>
              </div>
            </section>

            {/* 5. Project Structure */}
            <section id="structure">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Project Structure</h2>
              <p className="doc-paragraph">
                Zerovex follows a clean, modular file structure optimized for Next.js 15+ and TypeScript.
              </p>

              <CodeBlock
                language="text"
                title="Project Structure"
                code={`my-project/
├── src/
│   ├── app/            # App Router (Pages & API)
│   ├── components/     # UI & Documentation Components
│   ├── lib/            # Utility functions & Shared logic
│   └── styles/         # Global & Component styles
├── public/             # Static assets (Images, Fonts)
├── next.config.ts      # Platform configuration
├── tailwind.config.ts  # Design system configuration
└── package.json        # Dependencies & Scripts`}
              />
            </section>

            {/* 6. Platform Architecture */}
            <section id="architecture">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Platform Architecture</h2>
              <p className="doc-paragraph">
                Zerovex is built on a hybrid architecture that combines Static Site Generation (SSG) with 
                dynamic AI capabilities. This ensures ultra-fast page loads while maintaining high interactivity.
              </p>
              <div className="grid gap-6 mt-8">
                <div className="flex gap-6 p-6 rounded-2xl border border-gray-100 dark:border-white/5 bg-white dark:bg-white/5 transition-all hover:shadow-lg">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-900 text-white dark:bg-white dark:text-black">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black dark:text-white mb-2">Core Engine</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      Powered by Next.js and React 19, the core engine handles routing, state management, and component rendering with optimized server components.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6 p-6 rounded-2xl border border-gray-100 dark:border-white/5 bg-white dark:bg-white/5 transition-all hover:shadow-lg">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-dark-red text-white">
                    <Settings className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-black dark:text-white mb-2">Integration Layer</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      Connects your documentation to external APIs, databases, and AI models through a secure, server-side integration layer.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 7. Creating Your First Project */}
            <section id="first-project">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Creating Your First Project</h2>
              <p className="doc-paragraph mb-8">
                Follow these three simple steps to launch your first Zerovex project:
              </p>
              
              <div className="space-y-4">
                {[
                  { step: "01", title: "Initialize Workspace", desc: "Run the initialization command to generate the core platform files and project structure." },
                  { step: "02", title: "Configure Design", desc: "Open tailwind.config.ts to customize the primary brand colors and typography to match your vision." },
                  { step: "03", title: "Launch Preview", desc: "Execute npm run dev to start the local development server and view your project in real-time." }
                ].map((item, i) => (
                  <div key={i} className="group flex items-center gap-6 p-6 rounded-2xl border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/5 transition-all hover:border-dark-red/20">
                    <div className="text-4xl font-bold text-dark-red/10 group-hover:text-dark-red/20 transition-colors" style={{ fontFamily: "var(--font-serif)" }}>
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-black dark:text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 8. API Integrations */}
            <section id="api-integrations">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">API Integrations</h2>
              <p className="doc-paragraph">
                Extend your documentation with live data from external sources. Zerovex supports native integration with REST and GraphQL APIs.
              </p>
              
              <CodeBlock
                language="typescript"
                title="lib/api.ts"
                code={`// Example: Fetching live data for your docs
export async function getProjectStats() {
  const response = await fetch('https://api.zerovex.com/v1/stats', {
    headers: {
      'Authorization': \`Bearer \${process.env.API_KEY}\`
    }
  });
  return response.json();
}`}
              />
            </section>

            {/* 9. Deployment */}
            <section id="deployment">
              <h2 className="text-2xl font-bold text-black dark:text-white mb-6">Deployment</h2>
              <p className="doc-paragraph">
                Zerovex is optimized for serverless and edge environments. We recommend deploying on platforms like Vercel or Netlify for the best performance.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl border border-gray-100 dark:border-white/5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black text-white dark:bg-white dark:text-black mb-4">
                    <Rocket className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-black dark:text-white mb-2">Vercel Deployment</h4>
                  <p className="text-xs text-gray-500 mb-4">Optimized for Next.js. Deploy with one click from GitHub.</p>
                  <Link href="#" className="text-xs font-bold text-dark-red flex items-center gap-1">
                    Read Deployment Guide <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
                <div className="p-6 rounded-2xl border border-gray-100 dark:border-white/5 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-black">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white mb-4">
                    <Database className="h-5 w-5" />
                  </div>
                  <h4 className="font-bold text-black dark:text-white mb-2">Docker Support</h4>
                  <p className="text-xs text-gray-500 mb-4">Containerize your Zerovex docs for any cloud environment.</p>
                  <Link href="#" className="text-xs font-bold text-dark-red flex items-center gap-1">
                    View Dockerfile <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </section>

            {/* 10. Next Steps */}
            <section id="next-steps">
              <div className="p-10 rounded-3xl bg-black text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-dark-red/20 blur-3xl rounded-full"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-serif)" }}>Next Steps</h2>
                  <p className="text-gray-400 mb-8 leading-relaxed max-w-xl">
                    Congratulations! You've successfully initialized your Zerovex workspace. 
                    Now explore our advanced features to build truly exceptional documentation.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Link 
                      href="/docs/api-reference" 
                      className="group flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-dark-red/20 text-dark-red">
                          <Code className="h-5 w-5" />
                        </div>
                        <span className="font-bold text-sm">API Reference</span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors" />
                    </Link>
                    <Link 
                      href="/docs/changelog" 
                      className="group flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/20 text-green-500">
                          <Rocket className="h-5 w-5" />
                        </div>
                        <span className="font-bold text-sm">Changelog</span>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors" />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Edit on GitHub */}
            <EditOnGitHub filePath="src/app/docs/getting-started/page.tsx" />

            {/* Article Rating */}
            <ArticleRating articleId="getting-started" />

            {/* Related Articles */}
            <RelatedArticles articles={relatedArticles} currentPath="/docs/getting-started" />
          </div>

          {/* Sidebar - Table of Contents */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={tocItems} />
            </div>
          </div>
        </div>
      </div>
    </DocLayout>
  );
}
