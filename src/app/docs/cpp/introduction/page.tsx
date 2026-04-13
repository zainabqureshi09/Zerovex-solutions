import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "C++ Introduction",
  description: "Getting started with C++ programming - Learn about one of the most powerful systems programming languages",
};

export default function CppIntroduction() {
  return (
    <DocLayout title="C++ Introduction">
      <div className="animate-in fade-in duration-500">
        <div className="mb-6">
          <span className="language-badge bg-blue-600/10 text-blue-600 dark:text-blue-400">
            C++
          </span>
        </div>

        <h1 className="doc-heading">Introduction to C++</h1>

        <p className="doc-paragraph">
          C++ is a powerful, high-performance programming language created by Bjarne Stroustrup in 1979.
          It extends the C language with object-oriented features, making it one of the most versatile
          and widely-used programming languages in the world.
        </p>

        <h2 className="doc-subheading">Why Learn C++?</h2>

        <ul className="doc-list">
          <li>Exceptional performance and efficiency for resource-intensive applications</li>
          <li>Full control over system resources and memory management</li>
          <li>Used in game development, operating systems, and embedded systems</li>
          <li>Foundation for understanding computer science concepts</li>
          <li>Large standard library and decades of proven libraries</li>
          <li>Cross-platform compatibility</li>
        </ul>

        <h2 className="doc-subheading">Your First C++ Program</h2>

        <p className="doc-paragraph">
          Let&apos;s start with the classic &quot;Hello, World!&quot; program. This example demonstrates
          C++&apos;s basic structure and syntax:
        </p>

        <CodeBlock
          language="cpp"
          title="hello.cpp"
          code={`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`}
        />

        <p className="doc-paragraph">
          When you compile and run this program, it will display:
        </p>

        <CodeBlock
          language="text"
          code={`Hello, World!`}
        />

        <h2 className="doc-subheading">C++ Features</h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="doc-card">
            <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">Object-Oriented</h3>
            <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
              Supports classes, inheritance, polymorphism, and encapsulation.
            </p>
          </div>
          <div className="doc-card">
            <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">High Performance</h3>
            <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
              Compiled language with minimal runtime overhead.
            </p>
          </div>
          <div className="doc-card">
            <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">Memory Control</h3>
            <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
              Direct memory manipulation with pointers and manual management.
            </p>
          </div>
          <div className="doc-card">
            <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">Rich Standard Library</h3>
            <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
              STL provides containers, algorithms, and iterators.
            </p>
          </div>
        </div>

        <h2 className="doc-subheading">C++ Use Cases</h2>

        <p className="doc-paragraph">
          C++ is used in many critical areas of software development:
        </p>

        <ul className="doc-list">
          <li><strong>Game Development:</strong> Unreal Engine, AAA game engines</li>
          <li><strong>Operating Systems:</strong> Windows, Linux kernel components</li>
          <li><strong>Browsers:</strong> Chrome, Firefox rendering engines</li>
          <li><strong>Databases:</strong> MySQL, MongoDB</li>
          <li><strong>Embedded Systems:</strong> IoT devices, automotive systems</li>
          <li><strong>Financial Systems:</strong> High-frequency trading platforms</li>
        </ul>

        <div className="mt-8 p-6 rounded-lg bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">Ready to continue?</h3>
          <p className="text-docs-muted-foreground dark:text-docs-muted-foreground-dark mb-4">
            Now that you know what C++ is, let&apos;s learn about C++ syntax.
          </p>
          <Link
            href="/docs/cpp/syntax"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            Next: C++ Syntax
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </DocLayout>
  );
}
