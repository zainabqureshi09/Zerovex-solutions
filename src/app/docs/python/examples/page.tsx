import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Python Examples",
  description: "Practical Python projects including a calculator, number guessing game, password generator, and file operations",
};

export default function PythonExamples() {
  return (
    <DocLayout title="Python Examples">
      <div className="animate-in fade-in duration-500">
        <Breadcrumbs />

        <div className="mb-6">
          <span className="language-badge bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">Python</span>
        </div>

        <h1 className="doc-heading">Python Examples</h1>

        <p className="doc-paragraph">
          Now that you understand Python fundamentals, it is time to put that knowledge into
          practice. This page features complete, runnable projects that combine concepts like
          variables, loops, conditions, and functions into real-world applications. Study each
          example, run the code, and modify it to deepen your understanding.
        </p>

        <h2 className="doc-subheading">Project 1: Command-Line Calculator</h2>

        <p className="doc-paragraph">
          A simple calculator that supports addition, subtraction, multiplication, and division.
          It demonstrates functions, user input handling, error handling with
          <code>try/except</code>, and a continuous loop until the user chooses to exit.
        </p>

        <CodeBlock
          language="python"
          title="calculator.py"
          code={`def add(x, y):
    """Return the sum of two numbers."""
    return x + y

def subtract(x, y):
    """Return the difference of two numbers."""
    return x - y

def multiply(x, y):
    """Return the product of two numbers."""
    return x * y

def divide(x, y):
    """Return the quotient of two numbers with division-by-zero check."""
    if y == 0:
        return "Error: Cannot divide by zero"
    return x / y

def calculator():
    operations = {
        "1": ("Add", add),
        "2": ("Subtract", subtract),
        "3": ("Multiply", multiply),
        "4": ("Divide", divide),
    }

    print("=== Simple Calculator ===")

    while True:
        print("\\nSelect operation:")
        for key, (name, _) in operations.items():
            print(f"  {key}. {name}")
        print("  5. Quit")

        choice = input("Enter choice (1-5): ").strip()

        if choice == "5":
            print("Goodbye!")
            break

        if choice not in operations:
            print("Invalid choice. Try again.")
            continue

        try:
            num1 = float(input("Enter first number: "))
            num2 = float(input("Enter second number: "))
        except ValueError:
            print("Invalid input. Please enter numbers only.")
            continue

        _, func = operations[choice]
        result = func(num1, num2)
        symbol = {"1": "+", "2": "-", "3": "*", "4": "/"}[choice]
        print(f"Result: {num1} {symbol} {num2} = {result}")

# Run the calculator
# calculator()  # Uncomment to run`}
        />

        <h2 className="doc-subheading">Project 2: Number Guessing Game</h2>

        <p className="doc-paragraph">
          The computer picks a random number and the player tries to guess it. After each guess, the
          program provides hints (&quot;too high&quot; or &quot;too low&quot;). This project uses
          the <code>random</code> module, while loops, and input validation.
        </p>

        <CodeBlock
          language="python"
          title="guessing_game.py"
          code={`import random

def number_guessing_game():
    """A number guessing game with hints and score tracking."""
    print("=== Number Guessing Game ===")
    print("I'm thinking of a number between 1 and 100.")
    print("Try to guess it in as few attempts as possible!\\n")

    total_wins = 0
    total_games = 0

    while True:
        secret = random.randint(1, 100)
        attempts = 0
        max_attempts = 10
        guessed = False

        print(f"New game started! You have {max_attempts} attempts.")

        while attempts < max_attempts:
            try:
                guess = int(
                    input(f"Attempt {attempts + 1}/{max_attempts}: ")
                )
            except ValueError:
                print("Please enter a valid number.")
                continue

            attempts += 1

            if guess < 1 or guess > 100:
                print("Number must be between 1 and 100.")
                attempts -= 1
                continue

            if guess == secret:
                print(f"\\nCongratulations! You guessed it in {attempts} attempts!")
                guessed = True
                total_wins += 1
                break
            elif guess < secret:
                print("Too low! Try a higher number.")
            else:
                print("Too high! Try a lower number.")

        if not guessed:
            print(f"\\nGame over! The number was {secret}.")

        total_games += 1
        win_rate = (total_wins / total_games) * 100
        print(f"Stats: {total_wins}/{total_games} wins ({win_rate:.0f}%)")

        play_again = input("\\nPlay again? (yes/no): ").strip().lower()
        if play_again not in ("yes", "y"):
            print("Thanks for playing!")
            break

# Run the game
# number_guessing_game()  # Uncomment to run`}
        />

        <h2 className="doc-subheading">Project 3: Password Generator</h2>

        <p className="doc-paragraph">
          Generate secure, random passwords with customizable length and character types. This
          example uses the <code>random</code> and <code>string</code> modules, list comprehensions,
          and input validation.
        </p>

        <CodeBlock
          language="python"
          title="password_generator.py"
          code={`import random
import string

def generate_password(length=12, use_upper=True, use_digits=True, use_special=True):
    \"\"\"
    Generate a random password with specified criteria.

    Args:
        length: Length of the password (minimum 4)
        use_upper: Include uppercase letters
        use_digits: Include numbers
        use_special: Include special characters

    Returns:
        str: Generated password
    \"\"\"
    length = max(length, 4)  # Minimum 4 characters

    # Build character pool
    chars = string.ascii_lowercase
    if use_upper:
        chars += string.ascii_uppercase
    if use_digits:
        chars += string.digits
    if use_special:
        chars += string.punctuation

    # Ensure at least one of each selected type
    password = [random.choice(string.ascii_lowercase)]
    if use_upper:
        password.append(random.choice(string.ascii_uppercase))
    if use_digits:
        password.append(random.choice(string.digits))
    if use_special:
        password.append(random.choice(string.punctuation))

    # Fill remaining length with random choices
    remaining = length - len(password)
    password.extend(random.choice(chars) for _ in range(remaining))

    # Shuffle to randomize positions
    random.shuffle(password)
    return "".join(password)

def password_generator_cli():
    print("=== Password Generator ===")

    try:
        length = int(input("Password length (default 16): ") or "16")
    except ValueError:
        print("Invalid length. Using default of 16.")
        length = 16

    use_upper = input("Include uppercase? (Y/n): ").lower() != "n"
    use_digits = input("Include digits? (Y/n): ").lower() != "n"
    use_special = input("Include symbols? (Y/n): ").lower() != "n"

    print("\\nGenerated passwords:")
    for i in range(3):
        pwd = generate_password(length, use_upper, use_digits, use_special)
        print(f"  {i + 1}. {pwd}")

# Generate passwords programmatically
# strong = generate_password(20)
# pin = generate_password(6, use_upper=False, use_special=False)
# print(f"Strong: {strong}")
# print(f"PIN-like: {pin}")

# Run CLI
# password_generator_cli()  # Uncomment to run`}
        />

        <h2 className="doc-subheading">Project 4: File Operations Manager</h2>

        <p className="doc-paragraph">
          A utility that demonstrates reading, writing, and managing files in Python. It covers
          opening files in different modes, reading line by line, appending data, and checking file
          properties using the <code>os</code> module.
        </p>

        <CodeBlock
          language="python"
          title="file_operations.py"
          code={`import os

def write_file(filepath, content):
    \"\"\"Write content to a file (overwrites if exists).\"\"\"
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Written to {filepath}")

def read_file(filepath):
    \"\"\"Read and return the entire content of a file.\"\"\"
    if not os.path.exists(filepath):
        print(f"Error: {filepath} not found.")
        return None
    with open(filepath, "r", encoding="utf-8") as f:
        return f.read()

def append_to_file(filepath, content):
    \"\"\"Append content to an existing file.\"\"\"
    with open(filepath, "a", encoding="utf-8") as f:
        f.write(content + "\\n")
    print(f"Appended to {filepath}")

def read_lines(filepath):
    \"\"\"Read a file line by line and return as a list.\"\"\"
    with open(filepath, "r", encoding="utf-8") as f:
        return [line.strip() for line in f if line.strip()]

def get_file_info(filepath):
    \"\"\"Display information about a file.\"\"\"
    if not os.path.exists(filepath):
        print(f"Error: {filepath} not found.")
        return
    size = os.path.getsize(filepath)
    print(f"File: {filepath}")
    print(f"Size: {size} bytes")
    print(f"Exists: {os.path.exists(filepath)}")

def count_words(filepath):
    \"\"\"Count words, lines, and characters in a text file.\"\"\"
    content = read_file(filepath)
    if content is None:
        return
    lines = content.count("\\n") + 1
    words = len(content.split())
    chars = len(content)
    print(f"\\nFile Statistics:")
    print(f"  Lines: {lines}")
    print(f"  Words: {words}")
    print(f"  Characters: {chars}")

# Example usage
def demo_file_operations():
    filepath = "sample.txt"

    # Write
    write_file(filepath, "Hello, World!\\nThis is a sample file.\\nPython file operations demo.")

    # Read
    content = read_file(filepath)
    print(f"\\nContent:\\n{content}")

    # Append
    append_to_file(filepath, "This line was appended.")

    # Read lines
    lines = read_lines(filepath)
    print(f"\\nLines ({len(lines)}):")
    for i, line in enumerate(lines, 1):
        print(f"  {i}. {line}")

    # File info
    print()
    get_file_info(filepath)

    # Word count
    count_words(filepath)

    # Cleanup
    os.remove(filepath)
    print(f"\\nCleaned up {filepath}")

# Run demo
# demo_file_operations()  # Uncomment to run`}
        />

        <h2 className="doc-subheading">Project 5: Contact Book</h2>

        <p className="doc-paragraph">
          A contact management system that combines dictionaries, functions, and a menu-driven
          interface. It supports adding, searching, updating, deleting, and listing contacts,
          making it a great exercise in data management with Python.
        </p>

        <CodeBlock
          language="python"
          title="contact_book.py"
          code={`class ContactBook:
    \"\"\"A simple contact book using dictionaries.\"\"\"

    def __init__(self):
        self.contacts = {}

    def add_contact(self, name, phone, email=""):
        if name in self.contacts:
            print(f"Contact '{name}' already exists.")
            return
        self.contacts[name] = {"phone": phone, "email": email}
        print(f"Added: {name}")

    def search_contact(self, name):
        if name in self.contacts:
            info = self.contacts[name]
            print(f"\\nName:  {name}")
            print(f"Phone: {info['phone']}")
            print(f"Email: {info['email']}")
        else:
            print(f"Contact '{name}' not found.")

    def update_contact(self, name, phone=None, email=None):
        if name not in self.contacts:
            print(f"Contact '{name}' not found.")
            return
        if phone:
            self.contacts[name]["phone"] = phone
        if email:
            self.contacts[name]["email"] = email
        print(f"Updated: {name}")

    def delete_contact(self, name):
        if name in self.contacts:
            del self.contacts[name]
            print(f"Deleted: {name}")
        else:
            print(f"Contact '{name}' not found.")

    def list_contacts(self):
        if not self.contacts:
            print("No contacts found.")
            return
        print(f"\\n{'Name':<15} {'Phone':<15} {'Email'}")
        print("-" * 50)
        for name, info in sorted(self.contacts.items()):
            print(f"{name:<15} {info['phone']:<15} {info['email']}")

    def count(self):
        return len(self.contacts)


def contact_book_app():
    book = ContactBook()
    print("=== Contact Book ===")

    menu = {
        "1": ("Add Contact", lambda: _add(book)),
        "2": ("Search Contact", lambda: _search(book)),
        "3": ("Update Contact", lambda: _update(book)),
        "4": ("Delete Contact", lambda: _delete(book)),
        "5": ("List All Contacts", lambda: book.list_contacts()),
        "6": ("Exit", lambda: None),
    }

    while True:
        print(f"\\nContacts: {book.count()}")
        print("Menu:")
        for key, (name, _) in menu.items():
            print(f"  {key}. {name}")

        choice = input("\\nChoose (1-6): ").strip()

        if choice == "6":
            print("Goodbye!")
            break

        action = menu.get(choice)
        if action:
            action[1]()
        else:
            print("Invalid choice.")


def _add(book):
    name = input("Name: ").strip()
    phone = input("Phone: ").strip()
    email = input("Email (optional): ").strip()
    book.add_contact(name, phone, email)


def _search(book):
    name = input("Search name: ").strip()
    book.search_contact(name)


def _update(book):
    name = input("Contact name: ").strip()
    phone = input("New phone (or Enter to skip): ").strip()
    email = input("New email (or Enter to skip): ").strip()
    book.update_contact(name, phone or None, email or None)


def _delete(book):
    name = input("Delete name: ").strip()
    book.delete_contact(name)


# Run the app
# contact_book_app()  # Uncomment to run`}
        />

        <h2 className="doc-subheading">Next Steps</h2>

        <p className="doc-paragraph">
          You have completed the Python track. You now understand variables, syntax, conditions,
          loops, functions, and have seen practical examples that combine these concepts. The next
          step is to start learning JavaScript to expand your programming toolkit.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="doc-card">
            <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">Practice More Python</h3>
            <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
              Build your own projects: a to-do list app, a weather fetcher using APIs, or a text-based adventure game.
            </p>
          </div>
          <div className="doc-card">
            <h3 className="font-semibold text-docs-foreground dark:text-docs-foreground-dark mb-2">Learn JavaScript</h3>
            <p className="text-sm text-docs-muted-foreground dark:text-docs-muted-foreground-dark">
              JavaScript is the language of the web. Learn how it compares to Python and start building interactive websites.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center p-6 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
          <Link
            href="/docs/python/functions"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-dark-red text-dark-red hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous: Functions
          </Link>
          <Link
            href="/docs/javascript/introduction"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-red text-white hover:bg-dark-red-light transition-colors"
          >
            Next: JavaScript Introduction
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </DocLayout>
  );
}
