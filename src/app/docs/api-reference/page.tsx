import { DocLayout } from "@/components/docs/DocLayout";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import { TableOfContents } from "@/components/docs/TableOfContents";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { CodePlayground } from "@/components/docs/CodePlayground";
import { InteractiveDiagram } from "@/components/docs/InteractiveDiagram";
import { ArticleRating } from "@/components/docs/ArticleRating";
import { RelatedArticles } from "@/components/docs/RelatedArticles";
import { EditOnGitHub } from "@/components/docs/EditOnGitHub";
import Link from "next/link";
import { ArrowRight, Globe, Search, MessageSquare, Zap, Shield, Code } from "lucide-react";

export const metadata = {
  title: "API Reference",
  description: "Complete API reference for Zerovex Documentation platform",
};

const tocItems = [
  { id: "overview", text: "Overview", level: 2 },
  { id: "architecture", text: "Architecture", level: 2 },
  { id: "endpoints", text: "API Endpoints", level: 2 },
  { id: "search-api", text: "Search API", level: 2 },
  { id: "ai-api", text: "AI Assistant API", level: 2 },
  { id: "authentication", text: "Authentication", level: 2 },
  { id: "examples", text: "Interactive Examples", level: 2 },
  { id: "sdks", text: "SDKs & Libraries", level: 2 },
];

export default function APIReferencePage() {
  return (
    <DocLayout title="API Reference">
      <div className="animate-in fade-in duration-500">
        <Breadcrumbs />

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Code className="h-8 w-8 text-dark-red" />
            <h1 className="text-4xl font-bold text-docs-foreground dark:text-docs-foreground-dark">
              API Reference
            </h1>
          </div>
          <p className="text-lg text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
            Complete reference for integrating with Zerovex Documentation
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_250px] gap-8">
          <div className="space-y-12">
            {/* Overview */}
            <section id="overview">
              <h2 className="doc-heading">Overview</h2>
              <p className="doc-paragraph">
                Zerovex Documentation provides a comprehensive set of APIs for searching content,
                accessing AI assistance, and managing documentation programmatically.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <div className="doc-card">
                  <Globe className="h-6 w-6 text-dark-red mb-2" />
                  <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-1">
                    RESTful API
                  </h3>
                  <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
                    Standard HTTP methods and JSON responses
                  </p>
                </div>
                <div className="doc-card">
                  <Shield className="h-6 w-6 text-dark-red mb-2" />
                  <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-1">
                    Secure
                  </h3>
                  <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
                    API key authentication with rate limiting
                  </p>
                </div>
              </div>
            </section>

            {/* Architecture Diagram */}
            <section id="architecture">
              <h2 className="doc-heading">Architecture</h2>
              <InteractiveDiagram
                title="System Architecture"
                nodes={[
                  { id: "client", label: "Your App", x: 50, y: 50, color: "#8B0000" },
                  { id: "api", label: "API Gateway", x: 300, y: 50, color: "#dc2626" },
                  { id: "search", label: "Search Engine", x: 550, y: 20, color: "#f97316" },
                  { id: "ai", label: "AI Service", x: 550, y: 100, color: "#3b82f6" },
                  { id: "docs", label: "Docs DB", x: 300, y: 180, color: "#10b981" },
                  { id: "cache", label: "Cache", x: 50, y: 180, color: "#6366f1" },
                ]}
                edges={[
                  { from: "client", to: "api", label: "HTTPS" },
                  { from: "api", to: "search", label: "Query" },
                  { from: "api", to: "ai", label: "Prompt" },
                  { from: "api", to: "docs", label: "Fetch" },
                  { from: "docs", to: "cache", label: "Store" },
                ]}
              />
            </section>

            {/* API Endpoints */}
            <section id="endpoints">
              <h2 className="doc-heading">API Endpoints</h2>

              <div className="space-y-6">
                {/* Search Endpoint */}
                <div className="p-6 rounded-lg border border-docs-border dark:border-docs-border-dark">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-sm font-semibold">
                      GET
                    </span>
                    <code className="text-docs-foreground dark:text-docs-foreground-dark font-mono">
                      /api/v1/search
                    </code>
                  </div>
                  <p className="text-docs-muted-foreground dark:text-docs-muted-foreground-dark mb-4">
                    Search across all documentation content
                  </p>

                  <CodeBlock
                    language="bash"
                    title="Request"
                    code={`curl -X GET "https://api.zerovexsolutions.site/v1/search?q=python+variables" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                  />

                  <CodeBlock
                    language="json"
                    title="Response"
                    code={`{
  "results": [
    {
      "title": "Python Variables",
      "href": "/docs/python/variables",
      "score": 0.95,
      "excerpt": "Variables in Python are used to store..."
    }
  ],
  "total": 1,
  "query": "python variables"
}`}
                  />
                </div>

                {/* AI Chat Endpoint */}
                <div className="p-6 rounded-lg border border-docs-border dark:border-docs-border-dark">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-sm font-semibold">
                      POST
                    </span>
                    <code className="text-docs-foreground dark:text-docs-foreground-dark font-mono">
                      /api/v1/ai/chat
                    </code>
                  </div>
                  <p className="text-docs-muted-foreground dark:text-docs-muted-foreground-dark mb-4">
                    Chat with AI assistant trained on documentation
                  </p>

                  <CodeBlock
                    language="json"
                    title="Request Body"
                    code={`{
  "messages": [
    {
      "role": "user",
      "content": "How do I create variables in Python?"
    }
  ],
  "context": "/docs/python/variables"
}`}
                  />
                </div>
              </div>
            </section>

            {/* Search API */}
            <section id="search-api">
              <h2 className="doc-heading">Search API</h2>
              <p className="doc-paragraph">
                Our search API uses fuzzy matching to find relevant documentation pages.
                It supports natural language queries and returns ranked results.
              </p>

              <CodeBlock
                language="javascript"
                title="JavaScript Example"
                code={`// Search documentation
const response = await fetch('/api/v1/search', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
  },
  params: {
    q: 'how to use python variables',
    limit: 10,
    category: 'python'
  }
});

const results = await response.json();
console.log(results);`}
              />
            </section>

            {/* AI API */}
            <section id="ai-api">
              <h2 className="doc-heading">AI Assistant API</h2>
              <p className="doc-paragraph">
                Get intelligent answers from our AI assistant trained on all documentation content.
                Supports streaming responses for real-time output.
              </p>

              <CodeBlock
                language="python"
                title="Python Example"
                code={`import requests

response = requests.post(
    'https://api.zerovexsolutions.site/v1/ai/chat',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    json={
        'messages': [
            {'role': 'user', 'content': 'Explain Python decorators'}
        ],
        'stream': True
    }
)

for line in response.iter_lines():
    if line:
        print(line.decode())`}
              />
            </section>

            {/* Authentication */}
            <section id="authentication">
              <h2 className="doc-heading">Authentication</h2>
              <p className="doc-paragraph">
                All API requests require authentication using an API key. Include it in the
                Authorization header as a Bearer token.
              </p>

              <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800">
                <p className="text-sm text-yellow-800 dark:text-yellow-200">
                  <strong>⚠️ Security Note:</strong> Never expose your API key in client-side code.
                  Use environment variables and server-side requests.
                </p>
              </div>

              <CodeBlock
                language="bash"
                title="Get API Key"
                code={`# Generate a new API key
curl -X POST "https://api.zerovexsolutions.site/v1/keys" \\
  -H "Authorization: Bearer YOUR_ACCOUNT_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{"name": "My Integration", "permissions": ["read"]}'`}
              />
            </section>

            {/* Interactive Examples */}
            <section id="examples">
              <h2 className="doc-heading">Interactive Examples</h2>
              <p className="doc-paragraph">
                Try the API directly in your browser:
              </p>

              <CodePlayground
                initialCode={`// Simulated API call to search documentation
async function searchDocs(query) {
  console.log("Searching for:", query);
  
  // In production, replace with actual API call
  const mockResults = [
    { title: "Python Introduction", score: 0.95 },
    { title: "Python Variables", score: 0.88 },
    { title: "Python Syntax", score: 0.75 }
  ];
  
  const filtered = mockResults.filter(
    r => r.title.toLowerCase().includes(query.toLowerCase())
  );
  
  console.log("Results:", filtered);
  return filtered;
}

// Try it!
searchDocs("python");`}
                language="javascript"
              />
            </section>

            {/* SDKs */}
            <section id="sdks">
              <h2 className="doc-heading">SDKs & Libraries</h2>
              <p className="doc-paragraph">
                Official SDKs are available for popular languages:
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-6">
                <div className="doc-card">
                  <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">
                    JavaScript/TypeScript
                  </h3>
                  <CodeBlock
                    language="bash"
                    code={`npm install @zerovex/docs-sdk`}
                  />
                </div>
                <div className="doc-card">
                  <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">
                    Python
                  </h3>
                  <CodeBlock
                    language="bash"
                    code={`pip install zerovex-docs`}
                  />
                </div>
                <div className="doc-card">
                  <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">
                    cURL
                  </h3>
                  <CodeBlock
                    language="bash"
                    code={`# Built-in, no install needed`}
                  />
                </div>
              </div>
            </section>

            {/* Feedback and Related */}
            <ArticleRating articleId="api-reference" />
            <RelatedArticles
              articles={[
                { title: "Getting Started", href: "/docs/getting-started", category: "Guide" },
                { title: "Authentication Guide", href: "/docs/auth", category: "Tutorial" },
                { title: "Best Practices", href: "/docs/best-practices", category: "Guide" },
              ]}
              currentPath="/docs/api-reference"
            />
            <EditOnGitHub filePath="src/app/docs/api-reference/page.tsx" />
          </div>

          {/* Sidebar */}
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
