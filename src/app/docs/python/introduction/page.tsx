import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Python Introduction",
  description: "Getting started with Python programming - Learn why Python is one of the most popular programming languages",
};

export default function PythonIntroduction() {
  return (
    <DocLayout title="Python Introduction">
      <div className="animate-in fade-in duration-500">
        <div className="mb-6">
          <span className="language-badge bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
            Python
          </span>
        </div>

        <h1 className="doc-heading">Introduction to Python</h1>

        <p className="doc-paragraph">
          Python is a popular, high-level programming language known for its simple syntax and
          readability. Created by Guido van Rossum and first released in 1991, Python has become
          one of the most widely used programming languages in the world.
        </p>

        <h2 className="doc-subheading">Why Learn Python?</h2>

        <ul className="doc-list">
          <li>Easy to learn and read, making it perfect for beginners</li>
          <li>Versatile: used in web development, data science, AI, automation, and more</li>
          <li>Large community and extensive library ecosystem</li>
          <li>Cross-platform: runs on Windows, macOS, and Linux</li>
          <li>In high demand in the job market</li>
        </ul>

        <h2 className="doc-subheading">Your First Python Program</h2>

        <p className="doc-paragraph">
          Let&apos;s start with the classic &quot;Hello, World!&quot; program. This simple example demonstrates
          Python&apos;s clean and readable syntax:
        </p>

        <CodeBlock
          language="python"
          title="hello.py"
          code={`# This is your first Python program
print("Hello, World!")

# You can also print variables
message = "Welcome to Python!"
print(message)`}
        />

        <p className="doc-paragraph">
          When you run this program, it will display:
        </p>

        <CodeBlock
          language="python"
          code={`Hello, World!
Welcome to Python!`}
        />

        <h2 className="doc-subheading">Python Features</h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="doc-card">
            <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">Interpreted Language</h3>
            <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
              Python code is executed line by line, making debugging easier.
            </p>
          </div>
          <div className="doc-card">
            <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">Dynamic Typing</h3>
            <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
              No need to declare variable types; Python figures it out automatically.
            </p>
          </div>
          <div className="doc-card">
            <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">Object-Oriented</h3>
            <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
              Supports classes, objects, inheritance, and other OOP concepts.
            </p>
          </div>
          <div className="doc-card">
            <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">Rich Libraries</h3>
            <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
              Extensive standard library and thousands of third-party packages.
            </p>
          </div>
        </div>

        <h2 className="doc-subheading">Python Use Cases</h2>

        <p className="doc-paragraph">
          Python is used in many different areas of software development:
        </p>

        <ul className="doc-list">
          <li><strong>Web Development:</strong> Django, Flask, FastAPI</li>
          <li><strong>Data Science:</strong> Pandas, NumPy, Matplotlib</li>
          <li><strong>Machine Learning:</strong> TensorFlow, PyTorch, scikit-learn</li>
          <li><strong>Automation:</strong> Scripts for task automation</li>
          <li><strong>Game Development:</strong> Pygame</li>
          <li><strong>Desktop Applications:</strong> Tkinter, PyQt</li>
        </ul>

        <div className="mt-8 p-6 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
          <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">Ready to continue?</h3>
          <p className="text-docs-muted-foreground dark:text-docs-muted-foreground-dark mb-4">
            Now that you know what Python is, let&apos;s learn about Python syntax.
          </p>
          <Link
            href="/docs/python/syntax"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-red text-white hover:bg-dark-red-light transition-colors"
          >
            Next: Python Syntax
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </DocLayout>
  );
}
