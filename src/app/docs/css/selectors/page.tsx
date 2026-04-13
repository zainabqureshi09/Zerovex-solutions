import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = { title: "CSS Selectors", description: "Learn CSS selectors and how to target HTML elements" };

export default function CSSSelectors() {
  return (
    <DocLayout title="CSS Selectors">
      <div className="animate-in fade-in duration-500">
        <Breadcrumbs />
        <div className="mb-6"><span className="language-badge bg-blue-500/10 text-blue-500">CSS</span></div>
        <h1 className="doc-heading">CSS Selectors</h1>
        <p className="doc-paragraph">CSS selectors are used to select HTML elements you want to style. Understanding selectors is fundamental to mastering CSS.</p>

        <h2 className="doc-subheading">Basic Selectors</h2>
        <CodeBlock language="css" title="basic.css" code={`/* Element selector */
p {
  color: blue;
  font-size: 16px;
}

/* Class selector */
.button {
  background-color: #8B0000;
  color: white;
  padding: 10px 20px;
}

/* ID selector */
#header {
  font-size: 24px;
  font-weight: bold;
}

/* Universal selector */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}`} />

        <h2 className="doc-subheading">Combinator Selectors</h2>
        <CodeBlock language="css" title="combinators.css" code={`/* Descendant selector (space) */
nav a {
  color: #333;
}

/* Child selector (>) */
ul > li {
  list-style: none;
}

/* Adjacent sibling (+) */
h1 + p {
  font-size: 18px;
}

/* General sibling (~) */
h2 ~ p {
  color: gray;
}`} />

        <h2 className="doc-subheading">Attribute Selectors</h2>
        <CodeBlock language="css" title="attributes.css" code={`/* Has attribute */
a[href] {
  color: red;
}

/* Exact value */
input[type="text"] {
  border: 1px solid #ccc;
}

/* Contains value */
a[href*="example.com"] {
  color: blue;
}

/* Starts with */
a[href^="https"] {
  font-weight: bold;
}

/* Ends with */
a[href$=".pdf"] {
  color: red;
}`} />

        <h2 className="doc-subheading">Pseudo-classes</h2>
        <CodeBlock language="css" title="pseudo_classes.css" code={`/* Hover state */
button:hover {
  background-color: #a30000;
}

/* Focus state */
input:focus {
  border-color: #8B0000;
  outline: none;
}

/* First child */
li:first-child {
  font-weight: bold;
}

/* Last child */
li:last-child {
  border-bottom: none;
}

/* Nth child */
tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:nth-child(odd) {
  background-color: #ffffff;
}`} />

        <h2 className="doc-subheading">Pseudo-elements</h2>
        <CodeBlock language="css" title="pseudo_elements.css" code={`/* First line */
p::first-line {
  font-weight: bold;
  font-size: 1.2em;
}

/* First letter */
p::first-letter {
  font-size: 2em;
  float: left;
}

/* Before and after */
.quote::before {
  content: """;
}

.quote::after {
  content: """;
}

/* Selection */
::selection {
  background-color: #8B0000;
  color: white;
}`} />

        <div className="mt-8 flex justify-between items-center p-6 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
          <Link href="/docs/css/introduction" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-dark-red text-dark-red hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"><ArrowLeft className="h-4 w-4" /> Previous: Introduction</Link>
          <Link href="/docs/css/properties" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-red text-white hover:bg-dark-red-light transition-colors">Next: Properties <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </DocLayout>
  );
}
