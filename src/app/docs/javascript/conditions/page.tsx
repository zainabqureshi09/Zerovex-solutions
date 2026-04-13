import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = { title: "JavaScript Conditions", description: "Learn if/else, switch, and ternary operators in JavaScript" };

export default function JavaScriptConditions() {
  return (
    <DocLayout title="JavaScript Conditions">
      <div className="animate-in fade-in duration-500">
        <Breadcrumbs />
        <div className="mb-6"><span className="language-badge bg-yellow-400/10 text-yellow-500">JavaScript</span></div>
        <h1 className="doc-heading">JavaScript Conditions</h1>
        <p className="doc-paragraph">Conditional statements let you execute different code blocks based on conditions.</p>

        <h2 className="doc-subheading">if-else Statements</h2>
        <CodeBlock language="javascript" title="if_else.js" code={`const age = 18;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// else-if chain
const score = 85;
let grade;

if (score >= 90) grade = "A";
else if (score >= 80) grade = "B";
else if (score >= 70) grade = "C";
else if (score >= 60) grade = "D";
else grade = "F";

console.log(\`Your grade: \${grade}\`);`} />

        <h2 className="doc-subheading">Comparison & Logical Operators</h2>
        <CodeBlock language="javascript" title="operators.js" code={`// Comparison operators
console.log(5 === 5);     // true (strict equality)
console.log(5 !== 3);     // true (strict inequality)
console.log(5 > 3);       // true
console.log(5 <= 5);      // true

// Logical operators
const isAdult = true;
const hasTicket = true;

if (isAdult && hasTicket) {
  console.log("Entry allowed");
}

const isWeekend = false;
const isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("No work today!");
}

// NOT operator
const isRaining = false;
if (!isRaining) {
  console.log("Leave the umbrella at home");
}`} />

        <h2 className="doc-subheading">Switch Statement</h2>
        <CodeBlock language="javascript" title="switch.js" code={`const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of work week");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend!");
    break;
  default:
    console.log("Midweek grind");
}

// Switch with expressions
const score = 85;
switch (true) {
  case score >= 90:
    console.log("A grade");
    break;
  case score >= 80:
    console.log("B grade");
    break;
  default:
    console.log("Keep studying!");
}`} />

        <h2 className="doc-subheading">Ternary Operator</h2>
        <CodeBlock language="javascript" title="ternary.js" code={`// Basic ternary: condition ? trueValue : falseValue
const age = 20;
const status = age >= 18 ? "adult" : "minor";
console.log(status);  // "adult"

// Multiple conditions
const score = 75;
const result = score >= 90 ? "Excellent" : score >= 70 ? "Good" : "Needs improvement";
console.log(result);  // "Good"

// Replace simple if-else
const isMember = true;
const price = isMember ? 8 : 10;
console.log(\`Ticket price: $\${price}\`);`} />

        <h2 className="doc-subheading">Truthy & Falsy</h2>
        <CodeBlock language="javascript" title="truthy_falsy.js" code={`// Falsy values: false, 0, "", null, undefined, NaN
const values = [false, 0, "", null, undefined, NaN];

values.forEach(val => {
  if (val) {
    console.log("Truthy");
  } else {
    console.log("Falsy");  // All will print this
  }
});

// Practical example
const user = { name: "Alice", email: "alice@example.com" };

if (user && user.email) {
  console.log(\`Sending email to \${user.email}\`);
}

// Default values with || (OR)
const username = "";
const displayName = username || "Guest";
console.log(displayName);  // "Guest"

// Modern approach with ?? (nullish coalescing)
const count = 0;
const result = count ?? 10;  // 0 (only replaces null/undefined)
console.log(result);`} />

        <h2 className="doc-subheading">Optional Chaining</h2>
        <CodeBlock language="javascript" title="optional_chaining.js" code={`const user = {
  profile: {
    name: "Alice",
    address: { city: "New York" }
  }
};

// Old way (unsafe)
// const city = user.profile && user.profile.address && user.profile.address.city;

// Modern way with optional chaining
const city = user?.profile?.address?.city;
console.log(city);  // "New York"

// Safe function calls
const result = user?.getRole?.() ?? "guest";
console.log(result);`} />

        <div className="mt-8 flex justify-between items-center p-6 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
          <Link href="/docs/javascript/variables" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-dark-red text-dark-red hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"><ArrowLeft className="h-4 w-4" /> Previous: Variables</Link>
          <Link href="/docs/javascript/loops" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-red text-white hover:bg-dark-red-light transition-colors">Next: Loops <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </DocLayout>
  );
}
