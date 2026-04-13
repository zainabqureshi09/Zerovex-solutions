import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "JavaScript Introduction",
  description: "Getting started with JavaScript - The language of the web",
};

export default function JavaScriptIntroduction() {
  return (
    <DocLayout title="JavaScript Introduction">
      <div className="animate-in fade-in duration-500">
        <div className="mb-6">
          <span className="language-badge bg-yellow-400/10 text-yellow-500">
            JavaScript
          </span>
        </div>

        <h1 className="doc-heading">Introduction to JavaScript</h1>

        <p className="doc-paragraph">
          JavaScript is a versatile, high-level programming language that powers the web.
          Created by Brendan Eich in just 10 days in 1995, JavaScript has become one of the
          most important programming languages in the world.
        </p>

        <h2 className="doc-subheading">Why Learn JavaScript?</h2>

        <ul className="doc-list">
          <li>Runs in every web browser - no installation needed</li>
          <li>Full-stack development: frontend, backend (Node.js), mobile apps</li>
          <li>Huge ecosystem of frameworks: React, Vue, Angular, Next.js</li>
          <li>Essential for web development careers</li>
          <li>Active community and extensive package ecosystem (npm)</li>
        </ul>

        <h2 className="doc-subheading">Your First JavaScript Program</h2>

        <p className="doc-paragraph">
          JavaScript can run directly in your browser&apos;s console or in a Node.js environment:
        </p>

        <CodeBlock
          language="javascript"
          title="hello.js"
          code={`// This is your first JavaScript program
console.log("Hello, World!");

// You can also use variables
const message = "Welcome to JavaScript!";
console.log(message);

// Modern JavaScript with template literals
const name = "Developer";
console.log(\`Nice to meet you, \${name}!\`);`}
        />

        <h2 className="doc-subheading">JavaScript Features</h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="doc-card">
            <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">Dynamic Typing</h3>
            <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
              Variable types are determined at runtime automatically.
            </p>
          </div>
          <div className="doc-card">
            <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">First-Class Functions</h3>
            <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
              Functions are treated as values and can be passed around.
            </p>
          </div>
          <div className="doc-card">
            <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">Event-Driven</h3>
            <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
              Supports asynchronous programming with callbacks, promises, and async/await.
            </p>
          </div>
          <div className="doc-card">
            <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">Multi-Paradigm</h3>
            <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
              Supports functional, object-oriented, and imperative programming.
            </p>
          </div>
        </div>

        <h2 className="doc-subheading">JavaScript Use Cases</h2>

        <p className="doc-paragraph">
          JavaScript is incredibly versatile and used in many areas:
        </p>

        <ul className="doc-list">
          <li><strong>Frontend Development:</strong> React, Vue, Angular, Svelte</li>
          <li><strong>Backend Development:</strong> Node.js, Express, Fastify</li>
          <li><strong>Mobile Apps:</strong> React Native, Ionic, NativeScript</li>
          <li><strong>Desktop Apps:</strong> Electron, Tauri</li>
          <li><strong>Game Development:</strong> Phaser, Babylon.js</li>
          <li><strong>Machine Learning:</strong> TensorFlow.js, ML5.js</li>
        </ul>

        <div className="mt-8 p-6 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
          <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">Ready to continue?</h3>
          <p className="text-docs-muted-foreground dark:text-docs-muted-foreground-dark mb-4">
            Now that you know what JavaScript is, let&apos;s learn about JavaScript syntax.
          </p>
          <Link
            href="/docs/javascript/syntax"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-red text-white hover:bg-dark-red-light transition-colors"
          >
            Next: JavaScript Syntax
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </DocLayout>
  );
}
