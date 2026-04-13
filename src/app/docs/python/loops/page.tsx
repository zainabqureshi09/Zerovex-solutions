import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Python Loops",
  description: "Learn about for loops, while loops, loop control statements, and iteration techniques in Python",
};

export default function PythonLoops() {
  return (
    <DocLayout title="Python Loops">
      <div className="animate-in fade-in duration-500">
        <Breadcrumbs />

        <div className="mb-6">
          <span className="language-badge bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">Python</span>
        </div>

        <h1 className="doc-heading">Python Loops</h1>

        <p className="doc-paragraph">
          Loops are fundamental programming constructs that allow you to execute a block of code
          repeatedly. Python provides two primary loop types: <code>for</code> loops for iterating
          over sequences, and <code>while</code> loops for repeating code as long as a condition
          remains true. Mastering loops is essential for writing efficient and concise Python code.
        </p>

        <h2 className="doc-subheading">The for Loop</h2>

        <p className="doc-paragraph">
          The <code>for</code> loop iterates over items in a sequence (like a list, tuple, string,
          or range) in the order they appear. Unlike many other languages, Python&apos;s for loop
          works more like a foreach loop, making it intuitive and readable.
        </p>

        <CodeBlock
          language="python"
          title="for_loop_basics.py"
          code={`# Iterating over a list
fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(f"I love {fruit}")

# Iterating over a string
word = "Python"

for letter in word:
    print(letter)

# Iterating over a tuple
coordinates = (10, 20, 30)

for coord in coordinates:
    print(f"Coordinate: {coord}")`}
        />

        <h2 className="doc-subheading">The range() Function</h2>

        <p className="doc-paragraph">
          The <code>range()</code> function generates a sequence of numbers and is commonly used
          with for loops. It accepts up to three arguments: <code>start</code>, <code>stop</code>,
          and <code>step</code>.
        </p>

        <CodeBlock
          language="python"
          title="range_function.py"
          code={`# Basic range: 0 to 4
for i in range(5):
    print(i)  # Output: 0, 1, 2, 3, 4

# Range with start and stop
for i in range(2, 6):
    print(i)  # Output: 2, 3, 4, 5

# Range with step (count by 2s)
for i in range(0, 10, 2):
    print(i)  # Output: 0, 2, 4, 6, 8

# Counting backwards
for i in range(5, 0, -1):
    print(i)  # Output: 5, 4, 3, 2, 1

# Sum of numbers from 1 to 100
total = 0
for num in range(1, 101):
    total += num
print(f"Sum of 1 to 100: {total}")  # Output: 5050`}
        />

        <h2 className="doc-subheading">The while Loop</h2>

        <p className="doc-paragraph">
          The <code>while</code> loop continues executing its block as long as the given condition
          evaluates to <code>True</code>. It is useful when you do not know in advance how many
          iterations you will need.
        </p>

        <CodeBlock
          language="python"
          title="while_loop.py"
          code={`# Basic while loop
count = 0

while count < 5:
    print(f"Count is {count}")
    count += 1

# User input simulation
secret_number = 7
guess = 0

while guess != secret_number:
    guess = int(input("Guess a number (1-10): "))
    if guess != secret_number:
        print("Try again!")

print("Correct! You found the secret number.")

# Countdown timer
import time

countdown = 5

while countdown > 0:
    print(f"{countdown}...")
    countdown -= 1
    # time.sleep(1)  # Uncomment to actually wait 1 second

print("Blast off!")`}
        />

        <h2 className="doc-subheading">Loop Control: break, continue, and pass</h2>

        <p className="doc-paragraph">
          Python provides three keywords to control loop flow: <code>break</code> exits the loop
          entirely, <code>continue</code> skips to the next iteration, and <code>pass</code> is a
          null operation used as a placeholder.
        </p>

        <CodeBlock
          language="python"
          title="loop_control.py"
          code={`# break - exit the loop early
for num in range(1, 20):
    if num == 10:
        print("Found 10, stopping.")
        break
    print(num)

# continue - skip the current iteration
for num in range(1, 11):
    if num % 2 == 0:
        continue  # Skip even numbers
    print(f"Odd number: {num}")

# pass - placeholder for future code
for num in range(5):
    if num == 3:
        pass  # TODO: add logic here later
    else:
        print(num)

# Combined example: find first divisible by 7
for i in range(1, 50):
    if i % 3 == 0:
        continue  # Skip multiples of 3
    if i % 7 == 0:
        print(f"First number not divisible by 3 but divisible by 7: {i}")
        break`}
        />

        <h2 className="doc-subheading">The enumerate() Function</h2>

        <p className="doc-paragraph">
          When you need both the index and the value during iteration, use <code>enumerate()</code>.
          It returns pairs of (index, value) and eliminates the need for manual counter variables.
        </p>

        <CodeBlock
          language="python"
          title="enumerate.py"
          code={`# Basic enumerate
colors = ["red", "green", "blue", "yellow"]

for index, color in enumerate(colors):
    print(f"{index}: {color}")

# Start counting from 1 instead of 0
students = ["Alice", "Bob", "Charlie"]

for rank, name in enumerate(students, start=1):
    print(f"Student #{rank}: {name}")

# Finding index of a specific item
items = ["apple", "banana", "orange", "grape"]

for idx, item in enumerate(items):
    if item == "orange":
        print(f"Found 'orange' at index {idx}")
        break

# Creating a dictionary from a list
menu = ["coffee", "tea", "juice", "water"]
menu_dict = {i: drink for i, drink in enumerate(menu, start=1)}
print(menu_dict)  # {1: 'coffee', 2: 'tea', 3: 'juice', 4: 'water'}`}
        />

        <h2 className="doc-subheading">Nested Loops</h2>

        <p className="doc-paragraph">
          You can place one loop inside another to work with multi-dimensional data. The inner loop
          completes all its iterations for each single iteration of the outer loop.
        </p>

        <CodeBlock
          language="python"
          title="nested_loops.py"
          code={`# Multiplication table
for i in range(1, 4):
    for j in range(1, 4):
        print(f"{i} x {j} = {i * j}")
    print("---")

# Pattern printing: right triangle
rows = 5

for i in range(1, rows + 1):
    print("* " * i)

# Processing a 2D grid
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

for row in matrix:
    for value in row:
        print(value, end=" ")
    print()

# Nested loop with break
for i in range(3):
    for j in range(3):
        if i == j:
            print(f"Diagonal at ({i}, {j}) = {matrix[i][j]}")`}
        />

        <h2 className="doc-subheading">Looping Over Dictionaries</h2>

        <p className="doc-paragraph">
          Dictionaries can be iterated in several ways: by keys, by values, or by key-value pairs
          using the <code>.items()</code> method.
        </p>

        <CodeBlock
          language="python"
          title="looping_dictionaries.py"
          code={`student_scores = {
    "Alice": 95,
    "Bob": 82,
    "Charlie": 78,
    "Diana": 91,
}

# Iterate over key-value pairs
for name, score in student_scores.items():
    grade = "A" if score >= 90 else "B" if score >= 80 else "C"
    print(f"{name}: {score} ({grade})")

# Iterate over keys only
for name in student_scores:
    print(f"Processing {name}...")

# Iterate over values only
total = sum(student_scores.values())
average = total / len(student_scores)
print(f"Class average: {average:.1f}")

# Dictionary comprehension with loop
passed = {name: score for name, score in student_scores.items() if score >= 80}
print(f"Passed students: {passed}")`}
        />

        <h2 className="doc-subheading">List Comprehensions</h2>

        <p className="doc-paragraph">
          List comprehensions provide a concise way to create lists from existing iterables. They
          combine a loop and optional condition into a single, readable line.
        </p>

        <CodeBlock
          language="python"
          title="list_comprehensions.py"
          code={`# Squares of numbers 1-10
squares = [x ** 2 for x in range(1, 11)]
print(squares)

# Filter even numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = [n for n in numbers if n % 2 == 0]
print(evens)

# Transform strings
words = ["hello", "world", "python"]
upper_words = [w.upper() for w in words]
print(upper_words)

# Nested comprehension: flatten a matrix
matrix = [[1, 2], [3, 4], [5, 6]]
flat = [val for row in matrix for val in row]
print(flat)  # [1, 2, 3, 4, 5, 6]

# Conditional expression in comprehension
labels = ["even" if x % 2 == 0 else "odd" for x in range(1, 6)]
print(labels)  # ['odd', 'even', 'odd', 'even', 'odd']`}
        />

        <div className="mt-8 flex justify-between items-center p-6 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
          <Link
            href="/docs/python/conditions"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-dark-red text-dark-red hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous: Conditions
          </Link>
          <Link
            href="/docs/python/functions"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-red text-white hover:bg-dark-red-light transition-colors"
          >
            Next: Functions
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </DocLayout>
  );
}
