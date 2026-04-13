import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "HTML Elements",
  description: "Explore common HTML elements and learn how to structure web page content effectively.",
};

export default function TopicPage() {
  return (
    <DocLayout title="HTML Elements">
      <div className="animate-in fade-in duration-500">
        <Breadcrumbs />
        <div className="mb-6">
          <span className="language-badge bg-orange-500/10 text-orange-500">HTML</span>
        </div>
        <h1 className="doc-heading">HTML Elements</h1>
        <p className="doc-text">
          HTML elements are the building blocks of web pages. Each element consists of an opening tag,
          content, and a closing tag. Some elements are self-closing (void elements) and do not contain content.
        </p>

        <h2 className="doc-heading-secondary">Block-Level Elements</h2>
        <p className="doc-text">
          Block-level elements always start on a new line and take up the full width available.
          They stack vertically by default.
        </p>
        <CodeBlock
          title="Block-Level Elements"
          language="html"
          code={`<!-- Headings -->
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>

<!-- Paragraph -->
<p>This is a paragraph. It takes up the full width.</p>

<!-- Division (generic container) -->
<div class="container">
    <p>Div elements group content together.</p>
    <p>They create logical sections.</p>
</div>

<!-- Horizontal rule -->
<hr>

<!-- Preformatted text -->
<pre>
    This text preserves
    whitespace and line breaks.
</pre>

<!-- Blockquote -->
<blockquote cite="https://example.com">
    <p>This is a quoted section from another source.</p>
</blockquote>`}
        />

        <h2 className="doc-heading-secondary">Inline Elements</h2>
        <p className="doc-text">
          Inline elements do not start on a new line and only take up as much width as necessary.
          They flow within the content.
        </p>
        <CodeBlock
          title="Inline Elements"
          language="html"
          code={`<!-- Text formatting -->
<p>This is <strong>bold text</strong> and this is <em>italic text</em>.</p>
<p>This is <span style="color: red;">red text</span> inline.</p>
<p>This text has a <a href="/page">link</a> in it.</p>

<!-- Code and preformatted -->
<p>Use the <code>console.log()</code> function to debug.</p>
<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy.</p>
<p>The output was <samp>Error 404</samp>.</p>

<!-- Abbreviations and citations -->
<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
<p>My favorite book is <cite>The Great Gatsby</cite>.</p>

<!-- Subscript and superscript -->
<p>H<sub>2</sub>O is the chemical formula for water.</p>
<p>E = mc<sup>2</sup> is Einstein's equation.</p>`}
        />

        <h2 className="doc-heading-secondary">Tables</h2>
        <p className="doc-text">
          Tables organize data in rows and columns. They are ideal for displaying structured information
          like schedules, comparisons, and financial data.
        </p>
        <CodeBlock
          title="HTML Tables"
          language="html"
          code={`<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>John</td>
            <td>28</td>
            <td>New York</td>
        </tr>
        <tr>
            <td>Jane</td>
            <td>32</td>
            <td>London</td>
        </tr>
        <tr>
            <td>Mike</td>
            <td>25</td>
            <td>Tokyo</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="3">Total: 3 records</td>
        </tr>
    </tfoot>
</table>`}
        />

        <h2 className="doc-heading-secondary">Forms and Inputs</h2>
        <p className="doc-text">
          Forms collect user input. HTML provides a wide variety of input types for different data collection needs.
        </p>
        <CodeBlock
          title="Form Elements"
          language="html"
          code={`<form action="/submit" method="POST">
    <!-- Text input -->
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>

    <!-- Email input -->
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" placeholder="user@example.com">

    <!-- Password input -->
    <label for="password">Password:</label>
    <input type="password" id="password" name="password" minlength="8">

    <!-- Number input -->
    <label for="age">Age:</label>
    <input type="number" id="age" name="age" min="1" max="120">

    <!-- Select dropdown -->
    <label for="country">Country:</label>
    <select id="country" name="country">
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
    </select>

    <!-- Textarea -->
    <label for="message">Message:</label>
    <textarea id="message" name="message" rows="4"></textarea>

    <!-- Checkbox -->
    <input type="checkbox" id="agree" name="agree">
    <label for="agree">I agree to the terms</label>

    <!-- Radio buttons -->
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label>

    <button type="submit">Submit</button>
</form>`}
        />

        <h2 className="doc-heading-secondary">Media Elements</h2>
        <p className="doc-text">
          HTML5 introduced native support for audio and video, eliminating the need for third-party plugins.
        </p>
        <CodeBlock
          title="Audio and Video"
          language="html"
          code={`<!-- Video -->
<video width="640" height="360" controls poster="thumbnail.jpg">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    Your browser does not support the video tag.
</video>

<!-- Audio -->
<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    Your browser does not support the audio tag.
</audio>

<!-- Embedded YouTube video (iframe) -->
<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    title="Video Player"
    frameborder="0"
    allowfullscreen>
</iframe>

<!-- Progress and meter -->
<progress value="70" max="100">70%</progress>
<meter value="0.6">60%</meter>`}
        />

        <div className="mt-12 pt-6 border-t border-border/50 flex items-center justify-between">
          <Link
            href="/docs/html/introduction"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>HTML Introduction</span>
          </Link>
          <Link
            href="/docs/html/attributes"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>HTML Attributes</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </DocLayout>
  );
}
