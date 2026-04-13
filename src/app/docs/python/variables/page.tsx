import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Python Variables",
  description: "Learn about Python variables and data types",
};

export default function PythonVariables() {
  return (
    <DocLayout title="Python Variables">
      <div className="animate-in fade-in duration-500">
        <div className="mb-6">
          <span className="language-badge bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
            Python
          </span>
        </div>

        <h1 className="doc-heading">Python Variables</h1>

        <p className="doc-paragraph">
          Variables in Python are used to store data values. Python is dynamically typed,
          so you don&apos;t need to declare the type of a variable.
        </p>

        <h2 className="doc-subheading">Creating Variables</h2>

        <CodeBlock
          language="python"
          title="variables.py"
          code={`# Variables are created when you assign a value to them
x = 5
y = "Hello, Python!"
pi = 3.14
is_active = True

print(x)
print(y)`}
        />

        <h2 className="doc-subheading">Data Types</h2>

        <CodeBlock
          language="python"
          title="data_types.py"
          code={`# String
name = str("Alice")

# Integer
age = int(25)

# Float
height = float(5.7)

# List
fruits = list(["apple", "banana", "cherry"])

# Dictionary
person = dict({"name": "Alice", "age": 25})

print(type(name))  # <class 'str'>
print(type(age))   # <class 'int'>`}
        />

        <div className="mt-8 flex justify-between items-center p-6 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
          <Link
            href="/docs/python/syntax"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-dark-red text-dark-red hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous: Syntax
          </Link>
          <Link
            href="/docs/python/conditions"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-red text-white hover:bg-dark-red-light transition-colors"
          >
            Next: Conditions
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </DocLayout>
  );
}
