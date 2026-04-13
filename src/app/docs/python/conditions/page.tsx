import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Python Conditions",
  description: "Learn about if/else/elif statements and conditional logic in Python",
};

export default function PythonConditions() {
  return (
    <DocLayout title="Python Conditions">
      <div className="animate-in fade-in duration-500">
        <Breadcrumbs />
        
        <div className="mb-6">
          <span className="language-badge bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">Python</span>
        </div>

        <h1 className="doc-heading">Python Conditions</h1>
        
        <p className="doc-paragraph">
          Conditional statements allow you to execute different blocks of code based on certain conditions.
          Python supports if, elif (else if), and else statements for decision-making.
        </p>

        <h2 className="doc-subheading">The if Statement</h2>

        <p className="doc-paragraph">
          The basic if statement checks a condition and executes code if the condition is True:
        </p>

        <CodeBlock
          language="python"
          title="if_statement.py"
          code={`age = 18

if age >= 18:
    print("You are an adult")
    print("You can vote")
    
# Multiple conditions
temperature = 25

if temperature > 30:
    print("It's hot outside!")
    
if temperature > 20:
    print("It's warm outside!")`}
        />

        <h2 className="doc-subheading">if-else Statements</h2>

        <CodeBlock
          language="python"
          title="if_else.py"
          code={`age = 16

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")

# Checking even or odd
number = 7

if number % 2 == 0:
    print(f"{number} is even")
else:
    print(f"{number} is odd")`}
        />

        <h2 className="doc-subheading">if-elif-else Chain</h2>

        <p className="doc-paragraph">
          Use elif to check multiple conditions in sequence:
        </p>

        <CodeBlock
          language="python"
          title="if_elif_else.py"
          code={`score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Your grade is: {grade}")

# Time of day example
hour = 14

if hour < 12:
    print("Good morning!")
elif hour < 18:
    print("Good afternoon!")
else:
    print("Good evening!")`}
        />

        <h2 className="doc-subheading">Comparison Operators</h2>

        <CodeBlock
          language="python"
          title="comparisons.py"
          code={`# Equal to
if x == 5:
    print("x equals 5")

# Not equal to
if x != 5:
    print("x is not 5")

# Greater than / Less than
if x > 5:
    print("x is greater than 5")

if x < 5:
    print("x is less than 5")

# Greater/Less than or equal
if x >= 5:
    print("x is at least 5")

if x <= 5:
    print("x is at most 5")`}
        />

        <h2 className="doc-subheading">Logical Operators</h2>

        <CodeBlock
          language="python"
          title="logical_operators.py"
          code={`age = 25
has_id = True

# AND - both conditions must be true
if age >= 18 and has_id:
    print("You can enter the club")

# OR - at least one condition must be true
is_weekend = True
is_holiday = False

if is_weekend or is_holiday:
    print("No work today!")

# NOT - reverses the condition
is_raining = False

if not is_raining:
    print("No need for an umbrella")

# Combining operators
temperature = 75
is_sunny = True

if temperature > 70 and is_sunny:
    print("Perfect day for a picnic!")`}
        />

        <h2 className="doc-subheading">Nested Conditions</h2>

        <CodeBlock
          language="python"
          title="nested_conditions.py"
          code={`age = 20
is_student = True

if age >= 18:
    if is_student:
        print("Student discount: 20% off")
    else:
        print("Regular adult price")
else:
    print("Child pricing applies")

# Grade calculator
score = 88
extra_credit = 5

if score >= 90:
    if extra_credit > 0:
        print("Excellent! Plus extra credit bonus")
    else:
        print("Excellent work!")
elif score >= 80:
    print("Good job! Keep it up")
else:
    print("Keep practicing, you'll improve")`}
        />

        <h2 className="doc-subheading">Ternary Operator</h2>

        <CodeBlock
          language="python"
          title="ternary.py"
          code={`# Short if-else (ternary operator)
age = 20
status = "adult" if age >= 18 else "minor"
print(f"You are a {status}")

# Another example
temperature = 15
weather = "cold" if temperature < 20 else "warm"
print(f"It's {weather} today")`}
        />

        <div className="mt-8 flex justify-between items-center p-6 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
          <Link
            href="/docs/python/variables"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-dark-red text-dark-red hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous: Variables
          </Link>
          <Link
            href="/docs/python/loops"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-red text-white hover:bg-dark-red-light transition-colors"
          >
            Next: Loops
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </DocLayout>
  );
}
