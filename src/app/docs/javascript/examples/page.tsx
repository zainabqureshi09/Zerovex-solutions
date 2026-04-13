import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "JavaScript Examples",
  description: "Practical JavaScript examples covering DOM manipulation, events, fetch API, and async/await.",
};

export default function TopicPage() {
  return (
    <DocLayout title="JavaScript Examples">
      <div className="animate-in fade-in duration-500">
        <Breadcrumbs />
        <div className="mb-6">
          <span className="language-badge bg-yellow-400/10 text-yellow-500">JavaScript</span>
        </div>
        <h1 className="doc-heading">JavaScript Examples</h1>
        <p className="doc-text">
          This page provides practical JavaScript examples that demonstrate real-world usage patterns.
          These examples cover DOM manipulation, event handling, working with the Fetch API, and async/await patterns.
        </p>

        <h2 className="doc-heading-secondary">DOM Manipulation</h2>
        <p className="doc-text">
          The Document Object Model (DOM) allows JavaScript to access and modify all elements of an HTML document.
          Here are common DOM manipulation patterns.
        </p>
        <CodeBlock
          title="DOM Manipulation"
          language="javascript"
          code={`// Selecting elements
const title = document.getElementById("title");
const items = document.querySelectorAll(".item");
const firstBtn = document.querySelector(".btn");

// Modifying content
title.textContent = "New Title";
title.innerHTML = "<strong>Bold Title</strong>";

// Changing styles
title.style.color = "blue";
title.style.fontSize = "2rem";

// Adding/removing classes
title.classList.add("active");
title.classList.remove("hidden");
title.classList.toggle("visible");

// Creating elements
const newDiv = document.createElement("div");
newDiv.className = "card";
newDiv.textContent = "New Card";
document.body.appendChild(newDiv);

// Removing elements
const oldItem = document.querySelector(".old");
oldItem.remove();`}
        />

        <h2 className="doc-heading-secondary">Event Handling</h2>
        <p className="doc-text">
          Events are actions that occur in the browser, such as clicks, key presses, and mouse movements.
          Event listeners allow your code to respond to these actions.
        </p>
        <CodeBlock
          title="Event Handling"
          language="javascript"
          code={`// Click event
const button = document.getElementById("myBtn");
button.addEventListener("click", (e) => {
  console.log("Button clicked!", e.target);
});

// Form submission
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  console.log("Name:", formData.get("name"));
  console.log("Email:", formData.get("email"));
});

// Keyboard events
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("Enter pressed!");
  }
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
    console.log("Save triggered!");
  }
});

// Event delegation
document.querySelector("#list").addEventListener("click", (e) => {
  if (e.target.matches("li")) {
    console.log("Clicked:", e.target.textContent);
  }
});`}
        />

        <h2 className="doc-heading-secondary">Fetch API</h2>
        <p className="doc-text">
          The Fetch API provides a modern interface for making HTTP requests. It returns Promises and is
          the standard way to communicate with web servers in modern JavaScript.
        </p>
        <CodeBlock
          title="Fetch API Examples"
          language="javascript"
          code={`// GET request
fetch("https://api.example.com/users")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error("Error:", error));

// POST request
fetch("https://api.example.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: "John",
    email: "john@example.com"
  })
})
  .then(response => response.json())
  .then(data => console.log("Created:", data))
  .catch(error => console.error("Error:", error));

// Fetch with error handling
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    return await response.json();
  } catch (error) {
    console.error("Fetch failed:", error);
    throw error;
  }
}`}
        />

        <h2 className="doc-heading-secondary">Async/Await</h2>
        <p className="doc-text">
          The <code>async/await</code> syntax provides a cleaner way to work with Promises. It makes
          asynchronous code look and behave more like synchronous code.
        </p>
        <CodeBlock
          title="Async/Await Patterns"
          language="javascript"
          code={`// Basic async/await
async function getUser(id) {
  const response = await fetch(\`/api/users/\${id}\`);
  const user = await response.json();
  return user;
}

getUser(1).then(user => console.log(user));

// Error handling with try/catch
async function loadDashboard() {
  try {
    const user = await fetch("/api/user").then(r => r.json());
    const posts = await fetch("/api/posts").then(r => r.json());
    console.log("Loaded:", user, posts);
  } catch (error) {
    console.error("Failed to load dashboard:", error);
  }
}

// Parallel requests with Promise.all
async function loadAllData() {
  const [users, posts, comments] = await Promise.all([
    fetch("/api/users").then(r => r.json()),
    fetch("/api/posts").then(r => r.json()),
    fetch("/api/comments").then(r => r.json())
  ]);
  return { users, posts, comments };
}`}
        />

        <h2 className="doc-heading-secondary">Local Storage</h2>
        <p className="doc-text">
          Local Storage provides a way to store data in the browser that persists even after the browser
          is closed. It is useful for caching, user preferences, and session management.
        </p>
        <CodeBlock
          title="Local Storage"
          language="javascript"
          code={`// Storing data
localStorage.setItem("username", "john_doe");
localStorage.setItem("theme", "dark");

// Storing objects
const settings = { theme: "dark", fontSize: 16, language: "en" };
localStorage.setItem("settings", JSON.stringify(settings));

// Retrieving data
const username = localStorage.getItem("username");
const savedSettings = JSON.parse(localStorage.getItem("settings"));
console.log(savedSettings); // { theme: "dark", fontSize: 16, language: "en" }

// Removing data
localStorage.removeItem("username");

// Clearing all storage
// localStorage.clear();

// Check if localStorage is available
function isStorageAvailable() {
  try {
    const test = "__storage_test__";
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}`}
        />

        <h2 className="doc-heading-secondary">Complete Example: Todo App</h2>
        <p className="doc-text">
          Putting it all together, here is a complete todo application that uses DOM manipulation,
          events, and local storage.
        </p>
        <CodeBlock
          title="Todo Application"
          language="javascript"
          code={`class TodoApp {
  constructor() {
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];
    this.input = document.getElementById("todoInput");
    this.list = document.getElementById("todoList");
    this.bindEvents();
    this.render();
  }

  bindEvents() {
    document.getElementById("addBtn").addEventListener("click", () => this.add());
    this.input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.add();
    });
  }

  add() {
    const text = this.input.value.trim();
    if (text) {
      this.todos.push({ id: Date.now(), text, completed: false });
      this.input.value = "";
      this.save();
      this.render();
    }
  }

  toggle(id) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) todo.completed = !todo.completed;
    this.save();
    this.render();
  }

  delete(id) {
    this.todos = this.todos.filter(t => t.id !== id);
    this.save();
    this.render();
  }

  save() {
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  render() {
    this.list.innerHTML = this.todos
      .map(todo => \`
        <li class="\${todo.completed ? "completed" : ""}">
          <span onclick="app.toggle(\${todo.id})">\${todo.text}</span>
          <button onclick="app.delete(\${todo.id})">X</button>
        </li>
      \`).join("");
  }
}

const app = new TodoApp();`}
        />

        <div className="mt-12 pt-6 border-t border-border/50 flex items-center justify-between">
          <Link
            href="/docs/javascript/functions"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Functions</span>
          </Link>
          <Link
            href="/docs/html/introduction"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>HTML Introduction</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </DocLayout>
  );
}
