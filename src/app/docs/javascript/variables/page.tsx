import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "JavaScript Variables",
  description: "Learn about variables, data types, and type conversion in JavaScript",
};

export default function JavaScriptVariables() {
  return (
    <DocLayout title="JavaScript Variables">
      <div className="animate-in fade-in duration-500">
        <Breadcrumbs />
        <div className="mb-6">
          <span className="language-badge bg-yellow-400/10 text-yellow-500">JavaScript</span>
        </div>
        <h1 className="doc-heading">JavaScript Variables & Data Types</h1>
        
        <p className="doc-paragraph">
          Variables are containers for storing data values. JavaScript has three ways to declare variables:
          var (old), let (modern), and const (constant).
        </p>

        <h2 className="doc-subheading">Declaring Variables</h2>

        <CodeBlock
          language="javascript"
          title="variables.js"
          code={`// Modern JavaScript (ES6+)
let name = "John";           // Can be reassigned
const age = 25;              // Cannot be reassigned
var oldWay = "avoid this";   // Old way, function-scoped

// Good practice: use const by default, let when needed
const PI = 3.14159;
let temperature = 20;
temperature = 25;            // OK
// PI = 3;                   // Error! Cannot reassign const

// Multiple declarations
const firstName = "John", lastName = "Doe";
let x = 1, y = 2, z = 3;`}
        />

        <h2 className="doc-subheading">Data Types</h2>

        <CodeBlock
          language="javascript"
          title="data_types.js"
          code={`// Primitive Types
const name = "Alice";              // String
const age = 30;                    // Number
const isStudent = true;            // Boolean
const nothing = null;              // Null
let address;                       // Undefined
const symbol = Symbol("id");       // Symbol (ES6)

// Check types with typeof
console.log(typeof name);          // "string"
console.log(typeof age);           // "number"
console.log(typeof isStudent);     // "boolean"
console.log(typeof nothing);       // "object" (JavaScript quirk!)
console.log(typeof address);       // "undefined"

// Reference Types
const person = {                   // Object
  name: "Alice",
  age: 30
};

const colors = ["red", "green"];   // Array
const greet = function() {};       // Function`}
        />

        <h2 className="doc-subheading">Strings</h2>

        <CodeBlock
          language="javascript"
          title="strings.js"
          code={`// String creation
const single = 'Single quotes';
const double = "Double quotes";
const backtick = \`Backtick (template literal)\`;

// Template literals (modern JS)
const name = "Alice";
const greeting = \`Hello, \${name}!\`;
console.log(greeting);             // "Hello, Alice!"

// Multi-line strings
const message = \`
  This is a
  multi-line string
\`;

// String methods
const text = "Hello, World!";
console.log(text.length);          // 13
console.log(text.toUpperCase());   // "HELLO, WORLD!"
console.log(text.toLowerCase());   // "hello, world!"
console.log(text.includes("World")); // true
console.log(text.split(", "));     // ["Hello", "World!"]`}
        />

        <h2 className="doc-subheading">Numbers & Math</h2>

        <CodeBlock
          language="javascript"
          title="numbers.js"
          code={`// Numbers (all are floating-point)
const integer = 42;
const decimal = 3.14;
const negative = -10;

// Math operations
console.log(10 + 5);               // 15
console.log(10 - 5);               // 5
console.log(10 * 5);               // 50
console.log(10 / 5);               // 2
console.log(10 % 3);               // 1 (remainder)
console.log(2 ** 3);               // 8 (exponent)

// Math object
console.log(Math.PI);              // 3.14159...
console.log(Math.round(4.7));      // 5
console.log(Math.floor(4.9));      // 4
console.log(Math.ceil(4.1));       // 5
console.log(Math.random());        // Random 0-1

// Type conversion
const numStr = "42";
const num = Number(numStr);        // 42
const str = String(42);            // "42"
console.log(parseInt("3.14"));     // 3
console.log(parseFloat("3.14"));   // 3.14`}
        />

        <h2 className="doc-subheading">Arrays</h2>

        <CodeBlock
          language="javascript"
          title="arrays.js"
          code={`// Creating arrays
const fruits = ["apple", "banana", "cherry"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 42, true, null];

// Accessing elements (0-indexed)
console.log(fruits[0]);            // "apple"
console.log(fruits.length);        // 3

// Array methods
fruits.push("date");               // Add to end
fruits.pop();                      // Remove from end
fruits.unshift("apricot");         // Add to start
fruits.shift();                    // Remove from start

// Useful methods
const nums = [1, 2, 3, 4, 5];
console.log(nums.includes(3));     // true
console.log(nums.indexOf(3));      // 2
console.log(nums.join(", "));      // "1, 2, 3, 4, 5"
console.log(nums.slice(1, 3));     // [2, 3]
console.log(nums.map(n => n * 2)); // [2, 4, 6, 8, 10]
console.log(nums.filter(n => n > 3)); // [4, 5]`}
        />

        <h2 className="doc-subheading">Objects</h2>

        <CodeBlock
          language="javascript"
          title="objects.js"
          code={`// Object literal
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
  // Nested object
  address: {
    street: "123 Main St",
    city: "New York"
  },
  // Method
  greet() {
    return \`Hello, I'm \${this.firstName}\`;
  }
};

// Accessing properties
console.log(person.firstName);           // "John"
console.log(person["lastName"]);         // "Doe"
console.log(person.address.city);        // "New York"
console.log(person.greet());             // "Hello, I'm John"

// Modifying objects
person.age = 31;
person.email = "john@example.com";
delete person.isStudent;

// Object methods
console.log(Object.keys(person));    // Array of keys
console.log(Object.values(person));  // Array of values
console.log(Object.entries(person)); // Array of [key, value] pairs`}
        />

        <h2 className="doc-subheading">Type Conversion & Coercion</h2>

        <CodeBlock
          language="javascript"
          title="type_conversion.js"
          code={`// Explicit conversion
const num = Number("42");            // String to number
const str = String(42);              // Number to string
const bool = Boolean(1);             // true

// Truthy and Falsy values
// Falsy: false, 0, "", null, undefined, NaN
console.log(Boolean(0));             // false
console.log(Boolean("hello"));       // true
console.log(Boolean([]));            // true (even empty array!)

// Implicit conversion (coercion)
console.log("5" + 3);                // "53" (string concatenation)
console.log("5" - 3);                // 2 (numeric subtraction)
console.log("5" * 2);                // 10 (numeric multiplication)
console.log(5 == "5");               // true (loose equality)
console.log(5 === "5");              // false (strict equality)

// Best practice: use strict equality
if (typeof value === "string") {
  console.log("It's a string!");
}`}
        />

        <div className="mt-8 flex justify-between items-center p-6 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
          <Link href="/docs/javascript/introduction" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-dark-red text-dark-red hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Previous: Introduction
          </Link>
          <Link href="/docs/javascript/conditions" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-red text-white hover:bg-dark-red-light transition-colors">
            Next: Conditions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </DocLayout>
  );
}
