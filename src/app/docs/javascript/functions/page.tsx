import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "JavaScript Functions",
  description: "Learn about JavaScript functions including declarations, expressions, arrows, parameters, closures, and IIFE.",
};

export default function TopicPage() {
  return (
    <DocLayout title="JavaScript Functions">
      <div className="animate-in fade-in duration-500">
        <Breadcrumbs />
        <div className="mb-6">
          <span className="language-badge bg-yellow-400/10 text-yellow-500">JavaScript</span>
        </div>
        <h1 className="doc-heading">JavaScript Functions</h1>
        <p className="doc-text">
          Functions are reusable blocks of code that perform a specific task. They are one of the fundamental
          building blocks in JavaScript, allowing you to organize code, avoid repetition, and create modular programs.
        </p>

        <h2 className="doc-heading-secondary">Function Declarations</h2>
        <p className="doc-text">
          Function declarations define a named function using the <code>function</code> keyword. They are hoisted,
          meaning they can be called before they are defined in the code.
        </p>
        <CodeBlock
          title="Function Declaration"
          language="javascript"
          code={`function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // "Hello, Alice!"

function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // 8

// Function declarations are hoisted
console.log(sayHi("Bob")); // Works!

function sayHi(name) {
  return "Hi, " + name;
}`}
        />

        <h2 className="doc-heading-secondary">Function Expressions</h2>
        <p className="doc-text">
          Function expressions assign a function to a variable. They are not hoisted, so they must be defined
          before they can be called.
        </p>
        <CodeBlock
          title="Function Expression"
          language="javascript"
          code={`const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(4, 5)); // 20

// Named function expression
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
};

console.log(factorial(5)); // 120`}
        />

        <h2 className="doc-heading-secondary">Arrow Functions</h2>
        <p className="doc-text">
          Arrow functions provide a shorter syntax for writing functions. They do not have their own <code>this</code>
          binding, making them ideal for callbacks and methods where lexical scoping is desired.
        </p>
        <CodeBlock
          title="Arrow Functions"
          language="javascript"
          code={`const square = (x) => x * x;
console.log(square(7)); // 49

// Multiple parameters
const divide = (a, b) => a / b;
console.log(divide(10, 2)); // 5

// Multiple lines require braces
const processUser = (user) => {
  const fullName = user.firstName + " " + user.lastName;
  return fullName.toUpperCase();
};

console.log(processUser({ firstName: "John", lastName: "Doe" }));
// "JOHN DOE"

// No parameters
const getCurrentYear = () => new Date().getFullYear();
console.log(getCurrentYear());`}
        />

        <h2 className="doc-heading-secondary">Parameters and Default Values</h2>
        <p className="doc-text">
          Functions can accept parameters with default values, the rest parameter for variable arguments,
          and destructuring for objects and arrays.
        </p>
        <CodeBlock
          title="Function Parameters"
          language="javascript"
          code={`// Default parameters
function greet(name = "Guest") {
  return "Hello, " + name;
}

console.log(greet()); // "Hello, Guest"
console.log(greet("Sarah")); // "Hello, Sarah"

// Rest parameter
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100

// Object destructuring
function createUser({ name, age, role = "user" }) {
  return { name, age, role };
}

console.log(createUser({ name: "Alex", age: 30 }));
// { name: "Alex", age: 30, role: "user" }`}
        />

        <h2 className="doc-heading-secondary">Closures</h2>
        <p className="doc-text">
          A closure is a function that has access to variables in its outer (enclosing) lexical scope,
          even after the outer function has returned. Closures are powerful for data privacy and function factories.
        </p>
        <CodeBlock
          title="Closures"
          language="javascript"
          code={`function createCounter() {
  let count = 0;

  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2

// Function factory with closure
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15`}
        />

        <h2 className="doc-heading-secondary">IIFE (Immediately Invoked Function Expression)</h2>
        <p className="doc-text">
          An IIFE is a function that runs as soon as it is defined. It is commonly used to create
          private scope and avoid polluting the global namespace.
        </p>
        <CodeBlock
          title="IIFE Examples"
          language="javascript"
          code={`// Basic IIFE
(function() {
  const privateVar = "I am private";
  console.log("IIFE executed immediately");
  console.log(privateVar);
})();

// IIFE with parameters
(function(name) {
  console.log("Hello, " + name);
})("World"); // "Hello, World"

// IIFE returning a value
const result = (function(a, b) {
  return a * b + 10;
})(3, 4);
console.log(result); // 22

// Async IIFE
(async function() {
  const data = await Promise.resolve("loaded");
  console.log(data); // "loaded"
})();`}
        />

        <div className="mt-12 pt-6 border-t border-border/50 flex items-center justify-between">
          <Link
            href="/docs/javascript/loops"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Loops</span>
          </Link>
          <Link
            href="/docs/javascript/examples"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Examples</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </DocLayout>
  );
}
