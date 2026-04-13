import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { Breadcrumbs } from "@/components/docs/Breadcrumbs";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = { title: "CSS Properties", description: "Common CSS properties for styling web pages" };

export default function CSSProperties() {
  return (
    <DocLayout title="CSS Properties">
      <div className="animate-in fade-in duration-500">
        <Breadcrumbs />
        <div className="mb-6"><span className="language-badge bg-blue-500/10 text-blue-500">CSS</span></div>
        <h1 className="doc-heading">CSS Properties</h1>
        <p className="doc-paragraph">CSS properties control the visual appearance of HTML elements. Let's explore the most commonly used properties.</p>

        <h2 className="doc-subheading">Colors & Backgrounds</h2>
        <CodeBlock language="css" title="colors.css" code={`/* Color properties */
.card {
  color: #333;                    /* Text color */
  background-color: #f5f5f5;      /* Background color */
  background-image: url('bg.jpg'); /* Background image */
  background-size: cover;
  opacity: 0.9;                   /* Transparency */
}

/* Gradient backgrounds */
.hero {
  background: linear-gradient(135deg, #8B0000, #dc2626);
}

/* Border colors */
.button {
  border: 2px solid #8B0000;
  border-radius: 8px;
}`} />

        <h2 className="doc-subheading">Typography</h2>
        <CodeBlock language="css" title="typography.css" code={`/* Font properties */
body {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
  letter-spacing: 0.02em;
}

h1 {
  font-size: clamp(32px, 5vw, 48px);
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

p {
  text-decoration: none;
  text-indent: 2em;
}`} />

        <h2 className="doc-subheading">Box Model</h2>
        <CodeBlock language="css" title="box_model.css" code={`/* Box model properties */
.card {
  /* Content size */
  width: 300px;
  height: 200px;
  min-width: 250px;
  max-width: 100%;
  
  /* Padding (inside) */
  padding: 20px;
  padding-top: 10px;
  padding: 10px 20px;  /* top/bottom left/right */
  
  /* Margin (outside) */
  margin: 20px auto;  /* center horizontally */
  margin-bottom: 30px;
  
  /* Border */
  border: 1px solid #e5e5e5;
}`} />

        <h2 className="doc-subheading">Flexbox Layout</h2>
        <CodeBlock language="css" title="flexbox.css" code={`/* Flexbox container */
.container {
  display: flex;
  justify-content: center;     /* Horizontal alignment */
  align-items: center;         /* Vertical alignment */
  gap: 20px;                   /* Space between items */
  flex-wrap: wrap;             /* Allow wrapping */
}

/* Flexbox items */
.item {
  flex: 1;                     /* Grow to fill space */
  flex: 0 0 300px;            /* Don't grow, don't shrink, 300px base */
  align-self: flex-start;      /* Individual alignment */
}

/* Common patterns */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.grid-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
}`} />

        <h2 className="doc-subheading">CSS Grid</h2>
        <CodeBlock language="css" title="grid.css" code={`/* Grid container */
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  gap: 24px;
}

/* Responsive grid */
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

/* Grid item placement */
.sidebar {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
}

.main {
  grid-column: 2 / 4;
}`} />

        <div className="mt-8 flex justify-between items-center p-6 rounded-lg bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800">
          <Link href="/docs/css/selectors" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-dark-red text-dark-red hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"><ArrowLeft className="h-4 w-4" /> Previous: Selectors</Link>
          <Link href="/docs/getting-started" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-red text-white hover:bg-dark-red-light transition-colors">Next: Getting Started <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </DocLayout>
  );
}
