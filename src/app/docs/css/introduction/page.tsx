import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "CSS Introduction",
  description: "Learn the basics of CSS, the language used to style and layout web pages.",
};

export default function TopicPage() {
  return (
    <DocLayout title="CSS Introduction">
      <div className="animate-in fade-in duration-500">
        <Breadcrumbs />
        <div className="mb-6">
          <span className="language-badge bg-blue-500/10 text-blue-500">CSS</span>
        </div>
        <h1 className="doc-heading">CSS Introduction</h1>
        <p className="doc-text">
          CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a
          document written in HTML. It controls colors, fonts, spacing, positioning, and responsive layouts.
        </p>

        <h2 className="doc-heading-secondary">What is CSS?</h2>
        <p className="doc-text">
          CSS separates content (HTML) from presentation (styling). This separation makes it easier to
          maintain websites, control layouts, and adapt designs for different devices and screen sizes.
        </p>
        <CodeBlock
          title="Basic CSS Syntax"
          language="css"
          code={`/* Selector { property: value; } */
h1 {
    color: blue;
    font-size: 32px;
    text-align: center;
}

p {
    color: #333;
    line-height: 1.6;
    margin-bottom: 16px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}`}
        />

        <h2 className="doc-heading-secondary">Three Ways to Add CSS</h2>
        <p className="doc-text">
          CSS can be applied to HTML in three ways: inline styles, internal stylesheets, and external stylesheets.
          External stylesheets are the recommended approach for production websites.
        </p>
        <CodeBlock
          title="CSS Implementation Methods"
          language="html"
          code={`<!-- 1. Inline CSS (not recommended) -->
<h1 style="color: red; font-size: 24px;">Inline styled heading</h1>

<!-- 2. Internal CSS (in <head>) -->
<head>
    <style>
        h2 {
            color: green;
            font-family: Arial, sans-serif;
        }
        .highlight {
            background-color: yellow;
        }
    </style>
</head>

<!-- 3. External CSS (recommended) -->
<head>
    <link rel="stylesheet" href="styles.css">
</head>`}
        />

        <h2 className="doc-heading-secondary">The CSS Box Model</h2>
        <p className="doc-text">
          Every HTML element is a rectangular box. The CSS Box Model consists of: content, padding, border,
          and margin. Understanding this model is crucial for layout control.
        </p>
        <CodeBlock
          title="Box Model"
          language="css"
          code={`/* Box Model breakdown */
.box {
    /* Content area */
    width: 300px;
    height: 200px;

    /* Space between content and border */
    padding: 20px;

    /* The element border */
    border: 2px solid #333;

    /* Space outside the border */
    margin: 30px;
}

/* Include padding in width/height */
.box-sizing-example {
    box-sizing: border-box;
    width: 300px;
    padding: 20px;
    border: 2px solid #333;
    /* Total width stays 300px */
}

/* Apply globally */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}`}
        />

        <h2 className="doc-heading-secondary">Colors and Backgrounds</h2>
        <p className="doc-text">
          CSS provides multiple ways to specify colors and control background properties for visual design.
        </p>
        <CodeBlock
          title="Colors and Backgrounds"
          language="css"
          code={`/* Color formats */
.color-examples {
    /* Named colors */
    color: red;

    /* Hexadecimal */
    color: #ff0000;
    color: #f00; /* shorthand */

    /* RGB */
    color: rgb(255, 0, 0);

    /* RGBA (with transparency) */
    color: rgba(255, 0, 0, 0.5);

    /* HSL (Hue, Saturation, Lightness) */
    color: hsl(0, 100%, 50%);

    /* HSLA */
    color: hsla(0, 100%, 50%, 0.5);
}

/* Background properties */
.background-example {
    background-color: #f0f0f0;
    background-image: url("pattern.png");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;

    /* Shorthand */
    background: #f0f0f0 url("pattern.png") no-repeat center/cover fixed;
}

/* Gradients */
.gradient-box {
    background: linear-gradient(135deg, #667eea, #764ba2);
    background: radial-gradient(circle, #ff6b6b, #4ecdc4);
}`}
        />

        <h2 className="doc-heading-secondary">Typography and Text</h2>
        <p className="doc-text">
          CSS offers extensive control over text appearance, including fonts, spacing, alignment, and decoration.
        </p>
        <CodeBlock
          title="Typography"
          language="css"
          code={`/* Font properties */
.text-example {
    font-family: "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    font-weight: 400; /* normal, bold, 100-900 */
    font-style: normal; /* normal, italic */
    line-height: 1.5;
    letter-spacing: 0.5px;
    word-spacing: 2px;

    /* Shorthand */
    font: italic bold 16px/1.5 "Helvetica Neue", sans-serif;
}

/* Text styling */
.text-decoration {
    color: #333;
    text-align: left; /* left, center, right, justify */
    text-decoration: none; /* none, underline, line-through */
    text-transform: uppercase; /* uppercase, lowercase, capitalize */
    text-indent: 2em;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* Google Fonts integration */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

body {
    font-family: "Inter", sans-serif;
}`}
        />

        <h2 className="doc-heading-secondary">CSS Units</h2>
        <p className="doc-text">
          CSS supports various units for measuring sizes. Understanding when to use each unit is key
          to creating responsive and accessible designs.
        </p>
        <CodeBlock
          title="CSS Units"
          language="css"
          code={`/* Absolute units */
.absolute {
    width: 300px;       /* Pixels (most common) */
    font-size: 16px;
    border: 1pt solid;  /* Points (print) */
}

/* Relative units */
.relative {
    font-size: 1rem;    /* Root element font size */
    padding: 1.5em;     /* Relative to element font size */
    width: 50%;         /* Percentage of parent */
    font-size: 1.2rem;  /* 1.2 x root font size */
}

/* Viewport units */
.viewport {
    width: 100vw;       /* 100% of viewport width */
    height: 100vh;      /* 100% of viewport height */
    font-size: 5vmin;   /* 5% of smaller viewport dimension */
}

/* Responsive typography */
html {
    font-size: 16px;
}

@media (max-width: 768px) {
    html {
        font-size: 14px;
    }
}

h1 {
    font-size: clamp(1.5rem, 4vw, 3rem);
}`}
        />

        <div className="mt-12 pt-6 border-t border-border/50 flex items-center justify-between">
          <Link
            href="/docs/html/attributes"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>HTML Attributes</span>
          </Link>
          <Link
            href="/docs/css/selectors"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>CSS Selectors</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </DocLayout>
  );
}
