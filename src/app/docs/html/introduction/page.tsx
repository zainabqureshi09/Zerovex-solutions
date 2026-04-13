import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "HTML Introduction",
  description: "Getting started with HTML - The structure of web pages",
};

export default function HTMLIntroduction() {
  return (
    <DocLayout title="HTML Introduction">
      <div className="animate-in fade-in duration-500">
        <Breadcrumbs />
        <div className="mb-6"><span className="language-badge bg-orange-500/10 text-orange-500">HTML</span></div>
        <h1 className="doc-heading">Introduction to HTML</h1>
        <p className="doc-paragraph">HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of a web page using a series of elements.</p>

        <h2 className="doc-subheading">What is HTML?</h2>
        <p className="doc-paragraph">HTML elements tell the browser how to display the content. Elements label pieces of content such as &quot;this is a heading&quot;, &quot;this is a paragraph&quot;, &quot;this is a link&quot;, etc.</p>

        <h2 className="doc-subheading">Your First HTML Page</h2>
        <CodeBlock language="html" title="index.html" code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Web Page</title>
</head>
<body>
    <h1>Welcome to HTML!</h1>
    <p>This is my first web page.</p>
    <a href="https://example.com">Visit Example</a>
</body>
</html>`} />

        <h2 className="doc-subheading">HTML Document Structure</h2>
        <CodeBlock language="html" title="structure.html" code={`<!-- DOCTYPE declaration -->
<!DOCTYPE html>

<!-- Root element -->
<html lang="en">
  <!-- Head: metadata, title, links -->
  <head>
    <meta charset="UTF-8">
    <meta name="description" content="My website">
    <title>Page Title</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  
  <!-- Body: visible content -->
  <body>
    <header>Site header</header>
    <nav>Navigation menu</nav>
    <main>Main content area</main>
    <footer>Site footer</footer>
  </body>
</html>`} />

        <h2 className="doc-subheading">Common HTML Elements</h2>
        <CodeBlock language="html" title="elements.html" code={`<!-- Headings -->
<h1>Main Heading</h1>
<h2>Subheading</h2>
<h3>Section Heading</h3>

<!-- Paragraphs and text formatting -->
<p>This is a paragraph with <strong>bold</strong> and <em>italic</em> text.</p>

<!-- Lists -->
<ul>
  <li>Unordered item</li>
  <li>Another item</li>
</ul>

<ol>
  <li>First item</li>
  <li>Second item</li>
</ol>

<!-- Links and images -->
<a href="https://example.com">Visit Example</a>
<img src="image.jpg" alt="Description of image">`} />

        <h2 className="doc-subheading">HTML Semantic Elements</h2>
        <p className="doc-paragraph">HTML5 introduced semantic elements that clearly describe their meaning:</p>
        <CodeBlock language="html" title="semantic.html" code={`<header>
  <h1>Website Title</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </nav>
</header>

<main>
  <article>
    <h2>Blog Post Title</h2>
    <p>Post content here...</p>
  </article>
  
  <aside>
    <h3>Related Links</h3>
    <ul>
      <li><a href="#">Link 1</a></li>
    </ul>
  </aside>
</main>

<footer>
  <p>&copy; 2026 My Website</p>
</footer>`} />

        <h2 className="doc-subheading">HTML Forms</h2>
        <CodeBlock language="html" title="form.html" code={`<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <label for="message">Message:</label>
  <textarea id="message" name="message" rows="5"></textarea>
  
  <button type="submit">Send Message</button>
</form>`} />

        <div className="mt-8 flex justify-between items-center p-6 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
          <Link href="/docs/javascript/examples" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-dark-red text-dark-red hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"><ArrowLeft className="h-4 w-4" /> Previous: JavaScript</Link>
          <Link href="/docs/html/elements" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-red text-white hover:bg-dark-red-light transition-colors">Next: Elements <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </DocLayout>
  );
}
