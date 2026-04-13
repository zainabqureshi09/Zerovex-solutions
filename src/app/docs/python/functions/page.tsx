import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Python Functions",
  description: "Learn about defining functions, parameters, return values, *args/**kwargs, lambda functions, and scope in Python",
};

export default function PythonFunctions() {
  return (
    <DocLayout title="Python Functions">
      <div className="animate-in fade-in duration-500">
        <Breadcrumbs />

        <div className="mb-6">
          <span className="language-badge bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">Python</span>
        </div>

        <h1 className="doc-heading">Python Functions</h1>

        <p className="doc-paragraph">
          Functions are reusable blocks of organized code that perform a specific task. They help
          break complex programs into smaller, modular, and manageable pieces. Python uses the
          <code>def</code> keyword to define functions, and supports a rich set of features including
          default parameters, variable-length arguments, lambda expressions, and more.
        </p>

        <h2 className="doc-subheading">Defining and Calling Functions</h2>

        <p className="doc-paragraph">
          A function is defined using the <code>def</code> keyword, followed by the function name,
          parentheses for parameters, and a colon. The function body is indented below it. Use the
          <code>return</code> statement to send a value back to the caller.
        </p>

        <CodeBlock
          language="python"
          title="defining_functions.py"
          code={`# Basic function definition
def greet():
    print("Hello, welcome to Python!")

# Calling the function
greet()  # Output: Hello, welcome to Python!

# Function with parameters
def greet_person(name):
    print(f"Hello, {name}!")

greet_person("Alice")
greet_person("Bob")

# Function with return value
def add(a, b):
    return a + b

result = add(5, 3)
print(f"5 + 3 = {result}")  # Output: 5 + 3 = 8

# Multiple return values
def get_user_info():
    name = "Alice"
    age = 30
    city = "New York"
    return name, age, city

user_name, user_age, user_city = get_user_info()
print(f"{user_name}, {user_age}, lives in {user_city}")`}
        />

        <h2 className="doc-subheading">Default Parameters</h2>

        <p className="doc-paragraph">
          You can assign default values to parameters. If the caller does not provide a value for
          that parameter, the default is used. Default parameters must come after non-default
          parameters in the function definition.
        </p>

        <CodeBlock
          language="python"
          title="default_parameters.py"
          code={`# Function with default parameter
def greet(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet("Alice")                   # Hello, Alice!
greet("Bob", "Good morning")     # Good morning, Bob!
greet("Charlie", "Hey")          # Hey, Charlie!

# Multiple default parameters
def create_profile(name, age=25, city="Unknown", language="Python"):
    return {
        "name": name,
        "age": age,
        "city": city,
        "language": language,
    }

profile1 = create_profile("Alice")
print(profile1)

profile2 = create_profile("Bob", city="London", age=32)
print(profile2)

# Important: defaults are evaluated once at definition time
def add_item(item, items=None):
    if items is None:
        items = []
    items.append(item)
    return items

print(add_item("apple"))   # ['apple']
print(add_item("banana"))  # ['banana'] - fresh list each time`}
        />

        <h2 className="doc-subheading">Keyword Arguments</h2>

        <p className="doc-paragraph">
          Functions can be called using keyword arguments in the form <code>kwarg=value</code>.
          This allows you to pass arguments in any order and improves code readability, especially
          for functions with many parameters.
        </p>

        <CodeBlock
          language="python"
          title="keyword_arguments.py"
          code={`def describe_pet(animal, name, age, color):
    print(f"{name} is a {age}-year-old {color} {animal}.")

# Positional arguments (order matters)
describe_pet("dog", "Buddy", 3, "golden")

# Keyword arguments (order doesn't matter)
describe_pet(name="Buddy", animal="dog", color="golden", age=3)

# Mix of positional and keyword
describe_pet("cat", color="black", age=2, name="Whiskers")

# Practical example: formatting text
def format_text(text, uppercase=False, reverse=False, strip=False):
    if strip:
        text = text.strip()
    if reverse:
        text = text[::-1]
    if uppercase:
        text = text.upper()
    return text

result = format_text("  Hello World  ", uppercase=True, strip=True)
print(result)  # "HELLO WORLD"

result2 = format_text("Python", reverse=True)
print(result2)  # "nohtyP"

# Calculating order total with optional discounts
def calculate_total(price, tax_rate=0.08, discount=0):
    subtotal = price - discount
    tax = subtotal * tax_rate
    return round(subtotal + tax, 2)

print(calculate_total(100))                  # 108.0
print(calculate_total(100, discount=20))     # 86.4`}
        />

        <h2 className="doc-subheading">*args and **kwargs</h2>

        <p className="doc-paragraph">
          Python allows functions to accept a variable number of arguments. Use <code>*args</code>
          for positional arguments (collected as a tuple) and <code>**kwargs</code> for keyword
          arguments (collected as a dictionary).
        </p>

        <CodeBlock
          language="python"
          title="args_kwargs.py"
          code={`# *args - variable positional arguments
def total(*args):
    return sum(args)

print(total(1, 2, 3))          # 6
print(total(10, 20, 30, 40))   # 100
print(total(5))                # 5

# **kwargs - variable keyword arguments
def build_profile(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

build_profile(name="Alice", age=30, job="Engineer")

# Combining both
def create_order(item, *args, **kwargs):
    print(f"Item: {item}")
    print(f"Extras: {args}")
    print(f"Options: {kwargs}")

create_order("pizza", "cheese", "olives", size="large", delivery=True)

# Unpacking arguments
def multiply(a, b, c):
    return a * b * c

numbers = (2, 3, 4)
print(multiply(*numbers))  # Unpack tuple: 24

options = {"a": 5, "b": 6, "c": 7}
print(multiply(**options))  # Unpack dict: 210

# Real-world example: string formatter
def format_string(template, *args, **kwargs):
    result = template
    for i, arg in enumerate(args):
        result = result.replace(f"{{{i}}}", str(arg))
    for key, value in kwargs.items():
        result = result.replace(f"{{{key}}}", str(value))
    return result

msg = format_string("Hello {0}, you are {age} years old", "Alice", age=30)
print(msg)  # Hello Alice, you are 30 years old`}
        />

        <h2 className="doc-subheading">Lambda Functions</h2>

        <p className="doc-paragraph">
          Lambda functions are small anonymous functions defined with the <code>lambda</code>
          keyword. They can take any number of arguments but can only have one expression. They are
          most commonly used with functions like <code>map()</code>, <code>filter()</code>, and
          <code>sorted()</code>.
        </p>

        <CodeBlock
          language="python"
          title="lambda_functions.py"
          code={`# Basic lambda
square = lambda x: x ** 2
print(square(5))  # 25

# Lambda with multiple arguments
add = lambda a, b: a + b
print(add(3, 7))  # 10

# Lambda with sorted() - sort by second element
pairs = [(1, "one"), (3, "three"), (2, "two"), (4, "four")]
pairs.sort(key=lambda x: x[1])
print(pairs)  # Sorted alphabetically by word

# Lambda with filter()
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [2, 4, 6, 8, 10]

# Lambda with map()
words = ["hello", "world", "python"]
lengths = list(map(lambda w: len(w), words))
print(lengths)  # [5, 5, 6]

# Lambda with sorted() - sort students by grade descending
students = [
    {"name": "Alice", "grade": 92},
    {"name": "Bob", "grade": 85},
    {"name": "Charlie", "grade": 97},
]
top_students = sorted(students, key=lambda s: s["grade"], reverse=True)
for s in top_students:
    print(f"{s['name']}: {s['grade']}")

# Conditional lambda
classify = lambda x: "even" if x % 2 == 0 else "odd"
print(classify(4))  # even
print(classify(7))  # odd`}
        />

        <h2 className="doc-subheading">Variable Scope: Local, Global, and Nonlocal</h2>

        <p className="doc-paragraph">
          Scope determines where a variable is accessible. Python follows the LEGB rule:
          <strong>Local</strong> (inside function), <strong>Enclosing</strong> (nested functions),
          <strong>Global</strong> (module level), and <strong>Built-in</strong> (Python built-ins).
        </p>

        <CodeBlock
          language="python"
          title="variable_scope.py"
          code={`# Global vs Local scope
message = "Global"  # Global variable

def show_message():
    message = "Local"  # Local variable
    print(f"Inside function: {message}")

show_message()          # Inside function: Local
print(f"Outside: {message}")  # Outside: Global

# Modifying global variable with 'global' keyword
counter = 0

def increment():
    global counter
    counter += 1

increment()
increment()
print(f"Counter: {counter}")  # Counter: 2

# Enclosing scope with 'nonlocal'
def outer():
    count = 0

    def inner():
        nonlocal count
        count += 1
        return count

    return inner

counter_fn = outer()
print(counter_fn())  # 1
print(counter_fn())  # 2
print(counter_fn())  # 3

# Scope resolution example
x = "global"

def level1():
    x = "enclosing"

    def level2():
        x = "local"
        print(f"level2: {x}")

    level2()
    print(f"level1: {x}")

level1()
print(f"module: {x}")
# Output:
# level2: local
# level1: enclosing
# module: global`}
        />

        <h2 className="doc-subheading">Docstrings and Function Annotations</h2>

        <p className="doc-paragraph">
          Docstrings provide built-in documentation for functions. Type hints (function annotations)
          specify expected parameter and return types, improving code clarity and enabling static
          type checking with tools like <code>mypy</code>.
        </p>

        <CodeBlock
          language="python"
          title="docstrings_and_annotations.py"
          code={`# Function with docstring
def calculate_bmi(weight, height):
    \"\"\"
    Calculate Body Mass Index (BMI).

    Args:
        weight: Weight in kilograms
        height: Height in meters

    Returns:
        float: The calculated BMI value

    Example:
        >>> calculate_bmi(70, 1.75)
        22.86
    \"\"\"
    return round(weight / (height ** 2), 2)

print(calculate_bmi(70, 1.75))
print(calculate_bmi.__doc__)  # Print the docstring

# Type-annotated function
def greet(name: str, times: int = 1) -> str:
    \"\"\"Greet a person multiple times.\"\"\"
    return f"Hello {name}! " * times

result = greet("Alice", 2)
print(result)

# Annotated function with complex types
from typing import List, Dict, Optional

def filter_students(
    students: List[Dict[str, str]],
    min_grade: float = 0.0,
    max_grade: Optional[float] = None,
) -> List[Dict[str, str]]:
    \"\"\"Filter students by grade range.\"\"\"
    result = students
    if max_grade is not None:
        result = [s for s in result if min_grade <= float(s["grade"]) <= max_grade]
    else:
        result = [s for s in result if float(s["grade"]) >= min_grade]
    return result

# View function annotations
print(greet.__annotations__)
print(calculate_bmi.__annotations__)`}
        />

        <div className="mt-8 flex justify-between items-center p-6 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
          <Link
            href="/docs/python/loops"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-dark-red text-dark-red hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous: Loops
          </Link>
          <Link
            href="/docs/python/examples"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-red text-white hover:bg-dark-red-light transition-colors"
          >
            Next: Examples
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </DocLayout>
  );
}
