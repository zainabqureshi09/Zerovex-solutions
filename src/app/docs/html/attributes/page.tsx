import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "HTML Attributes",
  description: "Learn about HTML attributes and how they provide additional information about elements.",
};

export default function TopicPage() {
  return (
    <DocLayout title="HTML Attributes">
      <div className="animate-in fade-in duration-500">
        <Breadcrumbs />
        <div className="mb-6">
          <span className="language-badge bg-orange-500/10 text-orange-500">HTML</span>
        </div>
        <h1 className="doc-heading">HTML Attributes</h1>
        <p className="doc-text">
          Attributes provide additional information about HTML elements. They are always specified in the
          opening tag and usually come in name/value pairs like <code>name="value"</code>.
        </p>

        <h2 className="doc-heading-secondary">Common Global Attributes</h2>
        <p className="doc-text">
          Global attributes can be used on any HTML element. The most common ones include
          <code>id</code>, <code>class</code>, <code>style</code>, and <code>title</code>.
        </p>
        <CodeBlock
          title="Global Attributes"
          language="html"
          code={`<!-- id: Unique identifier for an element -->
<div id="header">This div has a unique ID</div>

<!-- class: Groups elements for CSS/JS -->
<p class="highlight important">Styled paragraph</p>
<p class="highlight">Another styled paragraph</p>

<!-- style: Inline CSS styles -->
<h1 style="color: blue; font-size: 24px;">Styled heading</h1>

<!-- title: Tooltip on hover -->
<abbr title="HyperText Markup Language">HTML</abbr>

<!-- lang: Language of content -->
<p lang="en">English text</p>
<p lang="fr">Texte en francais</p>

<!-- tabindex: Tab order -->
<input type="text" tabindex="1">
<button tabindex="2">Click me</button>`}
        />

        <h2 className="doc-heading-secondary">Data Attributes</h2>
        <p className="doc-text">
          Data attributes (<code>data-*</code>) allow you to store custom data on HTML elements.
          This data can be accessed by JavaScript for dynamic behavior.
        </p>
        <CodeBlock
          title="Data Attributes"
          language="html"
          code={`<!-- Storing custom data -->
<div
    data-product-id="12345"
    data-price="29.99"
    data-category="electronics"
    data-in-stock="true">
    Product Information
</div>

<!-- Accessing data in JavaScript -->
<script>
const product = document.querySelector('[data-product-id]');
console.log(product.dataset.productId);  // "12345"
console.log(product.dataset.price);      // "29.99"
console.log(product.dataset.category);   // "electronics"
console.log(product.dataset.inStock);    // "true"
</script>

<!-- Practical example: Modal trigger -->
<button
    data-modal="signup"
    data-theme="dark"
    class="btn-open">
    Sign Up
</button>`}
        />

        <h2 className="doc-heading-secondary">Boolean Attributes</h2>
        <p className="doc-text">
          Boolean attributes do not require a value. Their presence alone indicates true,
          and their absence indicates false.
        </p>
        <CodeBlock
          title="Boolean Attributes"
          language="html"
          code={`<!-- disabled: Makes input non-interactive -->
<input type="text" disabled>
<button disabled>Submit</button>

<!-- required: Form validation -->
<input type="email" required>

<!-- readonly: Cannot be modified -->
<input type="text" value="Cannot change" readonly>

<!-- checked: Pre-select checkbox/radio -->
<input type="checkbox" checked>
<input type="radio" name="plan" value="pro" checked>

<!-- selected: Pre-select option -->
<select>
    <option>Choose...</option>
    <option selected>Option 1</option>
    <option>Option 2</option>
</select>

<!-- autofocus: Auto-focus on page load -->
<input type="text" autofocus>

<!-- hidden: Element not displayed -->
<div hidden>This content is hidden</div>`}
        />

        <h2 className="doc-heading-secondary">Link and Media Attributes</h2>
        <p className="doc-text">
          Links and media elements have specific attributes that control their behavior and appearance.
        </p>
        <CodeBlock
          title="Link and Media Attributes"
          language="html"
          code={`<!-- Link attributes -->
<a href="https://example.com"
   target="_blank"
   rel="noopener noreferrer"
   title="Visit Example"
   download="report.pdf">
    Download Report
</a>

<!-- Image attributes -->
<img src="photo.jpg"
     alt="A beautiful sunset"
     width="800"
     height="600"
     loading="lazy">

<!-- Video attributes -->
<video src="movie.mp4"
       controls
       autoplay
       muted
       loop
       playsinline
       poster="preview.jpg">
</video>

<!-- Audio attributes -->
<audio src="song.mp3" controls preload="metadata"></audio>

<!-- Iframe attributes -->
<iframe src="https://example.com"
        width="100%"
        height="400"
        frameborder="0"
        allow="camera; microphone"
        sandbox="allow-scripts">
</iframe>`}
        />

        <h2 className="doc-heading-secondary">Form Input Attributes</h2>
        <p className="doc-text">
          Input elements support many attributes that control validation, behavior, and user experience.
        </p>
        <CodeBlock
          title="Input Attributes"
          language="html"
          code={`<!-- Text constraints -->
<input type="text"
       placeholder="Enter your name"
       maxlength="50"
       minlength="2"
       required
       autocomplete="name">

<!-- Number constraints -->
<input type="number"
       min="0"
       max="100"
       step="5"
       value="25">

<!-- Pattern validation -->
<input type="text"
       pattern="[A-Za-z]{3,}"
       title="Three or more letters only">

<input type="tel"
       pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
       placeholder="123-456-7890">

<!-- Date and time -->
<input type="date" min="2024-01-01" max="2024-12-31">
<input type="time" min="09:00" max="17:00">
<input type="range" min="0" max="100" step="10">

<!-- File input -->
<input type="file"
       accept="image/*,.pdf"
       multiple>

<!-- Search input with datalist -->
<input type="search" list="suggestions" placeholder="Search...">
<datalist id="suggestions">
    <option value="JavaScript">
    <option value="Python">
    <option value="C++">
</datalist>`}
        />

        <h2 className="doc-heading-secondary">ARIA Attributes for Accessibility</h2>
        <p className="doc-text">
          ARIA (Accessible Rich Internet Applications) attributes improve web accessibility for users
          who rely on assistive technologies like screen readers.
        </p>
        <CodeBlock
          title="ARIA Attributes"
          language="html"
          code={`<!-- Roles and labels -->
<nav role="navigation" aria-label="Main menu">
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
    </ul>
</nav>

<!-- Describing elements -->
<button aria-describedby="help-text">Submit</button>
<p id="help-text">Clicking this will submit your form.</p>

<!-- Live regions for dynamic content -->
<div aria-live="polite" aria-atomic="true">
    <span id="notification">Message sent!</span>
</div>

<!-- Expanding/collapsing -->
<button aria-expanded="false" aria-controls="details">
    Show Details
</button>
<div id="details" hidden>Hidden details here...</div>

<!-- Required and invalid states -->
<input aria-required="true" aria-invalid="true" aria-describedby="error-msg">
<span id="error-msg" role="alert">This field is required</span>

<!-- Hidden from screen readers -->
<span aria-hidden="true">★</span>`}
        />

        <div className="mt-12 pt-6 border-t border-border/50 flex items-center justify-between">
          <Link
            href="/docs/html/elements"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>HTML Elements</span>
          </Link>
          <Link
            href="/docs/css/introduction"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>CSS Introduction</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </DocLayout>
  );
}
