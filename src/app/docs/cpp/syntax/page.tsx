import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "C++ Syntax",
  description: "Learn the basic syntax and structure of C++ programming",
};

export default function CppSyntax() {
  return (
    <DocLayout title="C++ Syntax">
      <div className="animate-in fade-in duration-500">
        <div className="mb-6">
          <span className="language-badge bg-blue-600/10 text-blue-600 dark:text-blue-400">
            C++
          </span>
        </div>

        <h1 className="doc-heading">C++ Syntax Basics</h1>

        <p className="doc-paragraph">
          Understanding C++ syntax is essential for writing correct and efficient programs.
          Let&apos;s explore the fundamental building blocks of C++ code.
        </p>

        <h2 className="doc-subheading">Basic Program Structure</h2>

        <p className="doc-paragraph">
          Every C++ program follows a specific structure:
        </p>

        <CodeBlock
          language="cpp"
          title="structure.cpp"
          code={`#include <iostream>    // Preprocessor directive
using namespace std;   // Standard namespace

int main() {           // Main function - entry point
    // Your code here
    cout << "Hello!" << endl;
    return 0;          // Return success
}`}
        />

        <h2 className="doc-subheading">Comments</h2>

        <p className="doc-paragraph">
          Comments are ignored by the compiler but help document your code:
        </p>

        <CodeBlock
          language="cpp"
          title="comments.cpp"
          code={`// This is a single-line comment

/*
   This is a multi-line comment
   It can span multiple lines
*/

int x = 5; // Comment after code`}
        />

        <h2 className="doc-subheading">Statements and Semicolons</h2>

        <p className="doc-paragraph">
          In C++, every statement must end with a semicolon (;). This is a fundamental
          syntax rule that differs from some other languages:
        </p>

        <CodeBlock
          language="cpp"
          title="statements.cpp"
          code={`#include <iostream>
using namespace std;

int main() {
    int age = 25;           // Variable declaration
    double price = 19.99;   // Double precision
    char grade = 'A';       // Character
    bool passed = true;     // Boolean
    
    cout << age << endl;
    cout << price << endl;
    
    return 0;
}`}
        />

        <h2 className="doc-subheading">Blocks and Braces</h2>

        <p className="doc-paragraph">
          Code blocks are defined using curly braces {}. They group multiple
          statements together:
        </p>

        <CodeBlock
          language="cpp"
          title="blocks.cpp"
          code={`#include <iostream>
using namespace std;

int main() {
    // This is a code block
    int x = 10;
    int y = 20;
    int sum = x + y;
    
    if (sum > 15) {
        // Nested code block
        cout << "Sum is greater than 15" << endl;
    }
    
    return 0;
}`}
        />

        <h2 className="doc-subheading">Whitespace</h2>

        <p className="doc-paragraph">
          C++ ignores whitespace (spaces, tabs, newlines) for compilation, but proper
          formatting makes code readable:
        </p>

        <CodeBlock
          language="cpp"
          title="whitespace.cpp"
          code={`// These are equivalent:
int x=5;
int x = 5;  // More readable

// Good formatting:
if (age >= 18) {
    cout << "Adult" << endl;
}

// Compiles but hard to read:
if (age>=18){cout<<"Adult"<<endl;}`}
        />

        <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">Ready to continue?</h3>
          <p className="text-docs-muted-foreground dark:text-docs-muted-foreground-dark mb-4">
            Now that you understand C++ syntax, let&apos;s learn about variables.
          </p>
          <Link
            href="/docs/cpp/variables"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Next: Variables
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </DocLayout>
  );
}
