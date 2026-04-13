import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = { title: "JavaScript Loops", description: "Learn for, while, and do-while loops in JavaScript" };

export default function JavaScriptLoops() {
  return (
    <DocLayout title="JavaScript Loops">
      <div className="animate-in fade-in duration-500">
        <Breadcrumbs />
        <div className="mb-6"><span className="language-badge bg-yellow-400/10 text-yellow-500">JavaScript</span></div>
        <h1 className="doc-heading">JavaScript Loops</h1>
        <p className="doc-paragraph">Loops allow you to execute a block of code multiple times. JavaScript provides several types of loops for different use cases.</p>

        <h2 className="doc-subheading">for Loop</h2>
        <CodeBlock language="javascript" title="for_loop.js" code={`// Basic for loop
for (let i = 0; i < 5; i++) {
  console.log(i);  // 0, 1, 2, 3, 4
}

// Array iteration
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Counting backwards
for (let i = 10; i > 0; i -= 2) {
  console.log(i);  // 10, 8, 6, 4, 2
}`} />

        <h2 className="doc-subheading">while Loop</h2>
        <CodeBlock language="javascript" title="while_loop.js" code={`// Basic while loop
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// User input simulation
let input = "";
while (input !== "quit") {
  console.log("Type 'quit' to exit");
  input = "quit";  // Simulated
}
console.log("Exited!");`} />

        <h2 className="doc-subheading">do-while Loop</h2>
        <CodeBlock language="javascript" title="do_while.js" code={`// Executes at least once
let num = 0;
do {
  console.log(num);
  num++;
} while (num < 3);
// Output: 0, 1, 2`} />

        <h2 className="doc-subheading">for...of and for...in</h2>
        <CodeBlock language="javascript" title="modern_loops.js" code={`// for...of (arrays, strings, etc.)
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(color);
}

// for...in (objects)
const person = { name: "Alice", age: 30 };
for (const key in person) {
  console.log(\`\${key}: \${person[key]}\`);
}

// forEach (arrays)
const numbers = [1, 2, 3];
numbers.forEach((num, index) => {
  console.log(\`Index \${index}: \${num}\`);
});`} />

        <h2 className="doc-subheading">Loop Control</h2>
        <CodeBlock language="javascript" title="control.js" code={`// break - exit loop early
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);  // 0, 1, 2, 3, 4
}

// continue - skip iteration
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);  // 1, 3, 5, 7, 9 (odd only)
}

// Nested loops
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(\`\${i} x \${j} = \${i * j}\`);
  }
}`} />

        <div className="mt-8 flex justify-between items-center p-6 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
          <Link href="/docs/javascript/conditions" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-dark-red text-dark-red hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"><ArrowLeft className="h-4 w-4" /> Previous: Conditions</Link>
          <Link href="/docs/javascript/functions" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-red text-white hover:bg-dark-red-light transition-colors">Next: Functions <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </DocLayout>
  );
}
