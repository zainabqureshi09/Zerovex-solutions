import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Python Syntax",
  description: "Learn Python syntax basics including comments, indentation, and basic structure",
};

export default function PythonSyntax() {
  return (
    <DocLayout title="Python Syntax">
      <div className="animate-in fade-in duration-500">
        <div className="mb-6">
          <span className="language-badge bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
            Python
          </span>
        </div>

        <h1 className="doc-heading">Python Syntax</h1>

        <p className="doc-paragraph">
          Python syntax is known for its simplicity and readability. One of the most distinctive
          features is its use of indentation to define code blocks instead of curly braces.
        </p>

        <h2 className="doc-subheading">Comments in Python</h2>

        <p className="doc-paragraph">
          Comments are essential for documenting your code. Python uses the <code className="inline-code">#</code> symbol for single-line comments.
        </p>

        <CodeBlock
          language="python"
          title="comments.py"
          code={`# This is a single-line comment

"""
This is a multi-line comment
(or docstring) that spans multiple lines
"""

name = "Python"  # Inline comment
print(name)`}
        />

        <h2 className="doc-subheading">Indentation</h2>

        <p className="doc-paragraph">
          Python uses indentation (typically 4 spaces) to define code blocks. This is mandatory,
          not just for style.
        </p>

        <CodeBlock
          language="python"
          title="indentation.py"
          code={`if True:
    print("This is inside the if block")
    print("So is this")
    
print("This is outside the if block")

# Wrong indentation will cause an error:
# if True:
# print("This will cause an IndentationError")`}
        />

        <h2 className="doc-subheading">Variables and Data Types</h2>

        <p className="doc-paragraph">
          Python is dynamically typed, so you don&apos;t need to declare variable types explicitly.
        </p>

        <CodeBlock
          language="python"
          title="variables.py"
          code={`# String
name = "Alice"

# Integer
age = 25

# Float
height = 5.7

# Boolean
is_student = True

# List
fruits = ["apple", "banana", "cherry"]

print(f"{name} is {age} years old")`}
        />

        <h2 className="doc-subheading">Basic Input/Output</h2>

        <CodeBlock
          language="python"
          title="input_output.py"
          code={`# Output
print("Hello, Python!")

# Input
name = input("What is your name? ")
print(f"Nice to meet you, {name}!")`}
        />

        <div className="mt-8 flex justify-between items-center p-6 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
          <Link
            href="/docs/python/introduction"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-dark-red text-dark-red hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous: Introduction
          </Link>
          <Link
            href="/docs/python/variables"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-red text-white hover:bg-dark-red-light transition-colors"
          >
            Next: Variables
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </DocLayout>
  );
}
