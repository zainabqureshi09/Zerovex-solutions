import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { CodePlayground } from "@/components/docs/CodePlayground";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import { TableOfContents } from "@/components/docs/TableOfContents";
import { ArticleRating } from "@/components/docs/ArticleRating";
import { RelatedArticles } from "@/components/docs/RelatedArticles";
import { EditOnGitHub } from "@/components/docs/EditOnGitHub";
import { AISummarizer } from "@/components/docs/AISummarizer";
import { ShortcutsGuide } from "@/components/docs/ShortcutsGuide";
import { VersionSelector } from "@/components/docs/VersionSelector";
import Link from "next/link";
import { ArrowRight, Zap, BookOpen, Code, Terminal } from "lucide-react";

export const metadata = {
  title: "Getting Started",
  description: "Quick start guide to Zerovex Documentation - Learn how to use the platform",
};

const tocItems = [
  { id: "introduction", text: "Introduction", level: 2 },
  { id: "prerequisites", text: "Prerequisites", level: 2 },
  { id: "installation", text: "Installation", level: 2 },
  { id: "first-steps", text: "First Steps", level: 2 },
  { id: "project-structure", text: "Project Structure", level: 2 },
  { id: "development", text: "Development", level: 2 },
  { id: "try-it-out", text: "Try It Out", level: 2 },
  { id: "next-steps", text: "Next Steps", level: 2 },
];

const relatedArticles = [
  {
    title: "Python Introduction",
    href: "/docs/python/introduction",
    category: "Tutorial",
  },
  {
    title: "JavaScript Basics",
    href: "/docs/javascript/introduction",
    category: "Tutorial",
  },
  {
    title: "Best Practices",
    href: "/docs/best-practices",
    category: "Guide",
  },
];

export default function GettingStartedPage() {
  return (
    <DocLayout title="Getting Started">
      <div className="animate-in fade-in duration-500">
        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Header with Version Selector */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-8 w-8 text-dark-red" />
              <h1 className="text-4xl font-bold text-docs-foreground dark:text-docs-foreground-dark">
                Getting Started
              </h1>
            </div>
            <p className="text-lg text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
              Quick start guide to using Zerovex Documentation platform
            </p>
          </div>
          <div className="flex items-center gap-2">
            <VersionSelector />
            <ShortcutsGuide />
          </div>
        </div>

        {/* AI Summarizer */}
        <AISummarizer className="mb-8" />

        <div className="grid lg:grid-cols-[1fr_250px] gap-8">
          {/* Main Content */}
          <div className="space-y-8">
            <section id="introduction">
              <h2 className="doc-heading">Introduction</h2>
              <p className="doc-paragraph">
                Welcome to Zerovex Documentation! This comprehensive platform provides interactive guides
                for multiple programming languages. Whether you&apos;re a beginner or experienced developer,
                you&apos;ll find everything you need to learn and grow.
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="doc-card">
                  <BookOpen className="h-6 w-6 text-dark-red mb-2" />
                  <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-1">
                    Comprehensive
                  </h3>
                  <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
                    In-depth guides for 6+ programming languages
                  </p>
                </div>
                <div className="doc-card">
                  <Code className="h-6 w-6 text-dark-red mb-2" />
                  <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-1">
                    Interactive
                  </h3>
                  <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
                    Run code directly in your browser
                  </p>
                </div>
                <div className="doc-card">
                  <Terminal className="h-6 w-6 text-dark-red mb-2" />
                  <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-1">
                    AI-Powered
                  </h3>
                  <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
                    Get instant help from our AI assistant
                  </p>
                </div>
              </div>
            </section>

            <section id="prerequisites">
              <h2 className="doc-heading">Prerequisites</h2>
              <p className="doc-paragraph">
                Before you begin, make sure you have the following:
              </p>
              <ul className="doc-list">
                <li>Basic understanding of programming concepts</li>
                <li>A modern web browser (Chrome, Firefox, Safari, or Edge)</li>
                <li>Node.js 18+ installed (for running examples)</li>
                <li>A code editor (VS Code recommended)</li>
              </ul>
            </section>

            <section id="installation">
              <h2 className="doc-heading">Installation</h2>
              <p className="doc-paragraph">
                No installation required! All examples run directly in your browser through our
                interactive playground. However, if you want to run the code locally:
              </p>

              <CodeBlock
                language="bash"
                title="terminal"
                code={`# Clone the repository
git clone https://github.com/zerovex/zerovex.git

# Navigate to project
cd zerovex

# Install dependencies
npm install

# Start development server
npm run dev`}
              />
            </section>

            <section id="first-steps">
              <h2 className="doc-heading">First Steps</h2>
              <p className="doc-paragraph">
                Let&apos;s write your first program! Use the interactive playground below to experiment
                with code right here in the documentation:
              </p>

              <CodePlayground
                initialCode={`// Welcome to Zerovex Documentation!
// Try editing this code and click "Run"

const greeting = "Hello, Zerovex!";
console.log(greeting);

// Variables and types
const name = "Developer";
const year = 2026;
console.log(\`Welcome, \${name}! (Year: \${year})\`);

// Arrays and loops
const languages = ["Python", "JavaScript", "C++", "Java"];
console.log("\\nAvailable languages:");
languages.forEach((lang, i) => {
  console.log(\`\${i + 1}. \${lang}\`);
});`}
                language="javascript"
              />
            </section>

            <section id="project-structure">
              <h2 className="doc-heading">Platform Features</h2>
              <p className="doc-paragraph">
                Zerovex Documentation includes several powerful features:
              </p>

              <div className="space-y-4 my-6">
                <div className="p-4 rounded-lg border border-docs-border dark:border-docs-border-dark">
                  <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">
                    🔍 Smart Search
                  </h3>
                  <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
                    Press <code className="inline-code">Cmd+K</code> to search across all documentation instantly
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-docs-border dark:border-docs-border-dark">
                  <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">
                    🤖 AI Assistant
                  </h3>
                  <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
                    Click the chat button in the bottom-right corner for instant help
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-docs-border dark:border-docs-border-dark">
                  <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">
                    🎯 Interactive Playgrounds
                  </h3>
                  <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
                    Write and run code without leaving the documentation
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-docs-border dark:border-docs-border-dark">
                  <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">
                    🌙 Dark Mode
                  </h3>
                  <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
                    Toggle between light and dark themes for comfortable reading
                  </p>
                </div>
              </div>
            </section>

            <section id="development">
              <h2 className="doc-heading">Navigation Tips</h2>
              <p className="doc-paragraph">
                Make the most of your learning experience:
              </p>
              <ul className="doc-list">
                <li>Use the sidebar to browse topics by language</li>
                <li>Follow the &quot;Next&quot; buttons for sequential learning</li>
                <li>Bookmark important pages for quick access</li>
                <li>Rate articles to help improve content quality</li>
                <li>Use keyboard shortcuts for faster navigation</li>
              </ul>
            </section>

            <section id="try-it-out">
              <h2 className="doc-heading">Try It Yourself</h2>
              <p className="doc-paragraph">
                Experiment with different programming languages using our playground:
              </p>

              <CodePlayground
                initialCode={`# Python Example
def greet(name):
    return f"Hello, {name}!"

# Call the function
message = greet("Zerovex User")
print(message)

# List comprehension
squares = [x**2 for x in range(10)]
print(f"Squares: {squares}")`}
                language="python"
              />
            </section>

            <section id="next-steps">
              <h2 className="doc-heading">Next Steps</h2>
              <p className="doc-paragraph">
                Now that you&apos;re familiar with the platform, choose a programming language to start learning:
              </p>

              <div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-red-50 to-red-100 dark:from-red-950/20 dark:to-red-900/10 border border-red-200 dark:border-red-800">
                <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-3">
                  Recommended Learning Path
                </h3>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
                    1. Python Introduction → 2. JavaScript Basics → 3. Web Development (HTML/CSS)
                  </p>
                </div>
                <div className="flex gap-3">
                  <Link
                    href="/docs/python/introduction"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-red text-white hover:bg-dark-red-light transition-colors"
                  >
                    Start Python
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/docs/javascript/introduction"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-dark-red text-dark-red hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
                  >
                    Start JavaScript
                  </Link>
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
