import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "JavaScript Syntax",
  description: "Learn the basic syntax and structure of JavaScript programming",
};

export default function JavaScriptSyntax() {
  return (
    <DocLayout title="JavaScript Syntax">
      <div className="animate-in fade-in duration-500">
        <div className="mb-6">
          <span className="language-badge bg-yellow-400/10 text-yellow-500">
            JavaScript
          </span>
        </div>

        <h1 className="doc-heading">JavaScript Syntax Basics</h1>

        <p className="doc-paragraph">
          JavaScript syntax defines how you write and structure JavaScript code.
          Understanding these fundamentals is essential for web development.
        </p>

        <h2 className="doc-subheading">Basic Syntax</h2>

        <p className="doc-paragraph">
          JavaScript is flexible with syntax, but following best practices ensures readable code:
        </p>

        <CodeBlock
          language="javascript"
          title="basics.js"
          code={`// JavaScript is case-sensitive
let name = "JavaScript";
let Name = "Different variable";

// Statements end with semicolons (optional but recommended)
let age = 25;
let price = 19.99;

// Output to console
console.log("Hello, World!");
console.log("Age:", age);`}
        />

        <h2 className="doc-subheading">Comments</h2>

        <p className="doc-paragraph">
          Comments document your code and are ignored during execution:
        </p>

        <CodeBlock
          language="javascript"
          title="comments.js"
          code={`// This is a single-line comment

/*
  This is a multi-line comment
  It can span multiple lines
*/

let x = 10; // Inline comment after code

// Comments help explain complex logic
function calculate(a, b) {
  // Return the sum of two numbers
  return a + b;
}`}
        />

        <h2 className="doc-subheading">Variables</h2>

        <p className="doc-paragraph">
          JavaScript has three ways to declare variables:
        </p>

        <CodeBlock
          language="javascript"
          title="variables.js"
          code={`// let - block-scoped, can be reassigned
let age = 25;
age = 26;  // OK

// const - block-scoped, cannot be reassigned
const PI = 3.14159;
// PI = 3.14;  // ERROR: Assignment to constant!

// var - function-scoped (older way, less preferred)
var name = "JavaScript";

// Modern best practice:
// Use const by default, let when you need to reassign
const greeting = "Hello";
let count = 0;
count++;  // Updating counter`}
        />

        <h2 className="doc-subheading">Data Types</h2>

        <p className="doc-paragraph">
          JavaScript has several fundamental data types:
        </p>

        <CodeBlock
          language="javascript"
          title="datatypes.js"
          code={`// Primitive types
let name = "John";           // String
let age = 25;                // Number
let isStudent = true;        // Boolean
let nothing = null;          // Null
let notDefined;              // Undefined
let symbol = Symbol('id');   // Symbol (ES6)

// Object types
let person = {               // Object
  firstName: "John",
  lastName: "Doe",
  age: 25
};

let colors = ["red", "green", "blue"];  // Array

console.log(typeof name);    // "string"
console.log(typeof age);     // "number"`}
        />

        <h2 className="doc-subheading">Operators</h2>

        <p className="doc-paragraph">
          JavaScript supports various operators for calculations and comparisons:
        </p>

        <CodeBlock
          language="javascript"
          title="operators.js"
          code={`// Arithmetic operators
let sum = 10 + 5;        // Addition: 15
let difference = 10 - 5; // Subtraction: 5
let product = 10 * 5;    // Multiplication: 50
let quotient = 10 / 5;   // Division: 2
let remainder = 10 % 3;  // Modulus: 1
let power = 2 ** 3;      // Exponent: 8

// Comparison operators
let isEqual = (5 === 5);      // Strict equal: true
let notEqual = (5 !== 3);     // Strict not equal: true
let greater = (10 > 5);       // Greater than: true
let lessOrEqual = (5 <= 5);   // Less or equal: true

// Logical operators
let and = (true && false);    // AND: false
let or = (true || false);     // OR: true
let not = !true;              // NOT: false`}
        />

        <h2 className="doc-subheading">Functions</h2>

        <p className="doc-paragraph">
          Functions are reusable blocks of code:
        </p>

        <CodeBlock
          language="javascript"
          title="functions.js"
          code={`// Function declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Arrow function (ES6)
const add = (a, b) => a + b;

// Function with default parameters
const multiply = (a, b = 1) => a * b;

// Calling functions
console.log(greet("World"));     // "Hello, World!"
console.log(add(5, 3));          // 8
console.log(multiply(10));       // 10
console.log(multiply(10, 2));    // 20`}
        />

        <h2 className="doc-subheading">Blocks and Scope</h2>

        <p className="doc-paragraph">
          JavaScript uses curly braces for blocks and has different scoping rules:
        </p>

        <CodeBlock
          language="javascript"
          title="scope.js"
          code={`// Global scope
const globalVar = "I'm global";

function example() {
  // Function scope
  const functionVar = "I'm in a function";
  
  if (true) {
    // Block scope
    const blockVar = "I'm in a block";
    let anotherVar = "Also block-scoped";
    
    console.log(blockVar);  // Works
  }
  
  // console.log(blockVar);  // ERROR: Not accessible!
  console.log(functionVar);  // Works
}

console.log(globalVar);  // Works`}
        />

        <div className="mt-8 p-6 rounded-lg bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800">
          <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">Ready to continue?</h3>
          <p className="text-docs-muted-foreground dark:text-docs-muted-foreground-dark mb-4">
            Now that you understand JavaScript syntax, let&apos;s learn about variables in depth.
          </p>
          <Link
            href="/docs/javascript/variables"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-500 text-white hover:bg-yellow-600 transition-colors"
          >
            Next: Variables
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </DocLayout>
  );
}
