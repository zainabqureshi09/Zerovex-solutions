# Zerovex Documentation Platform

A modern, AI-powered documentation platform built with Next.js, featuring comprehensive programming language guides with a sleek dark red, white, and black color scheme.

## 🚀 Features

### Modern UI/UX
- **Clean Developer-Focused Interface**: Inspired by Stripe Docs, Vercel Docs, and GitHub Docs
- **Dark/Light Theme Toggle**: Seamless switching between themes
- **Smooth Animations**: Polished transitions and animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile
- **Sticky Sidebar**: Collapsible navigation sections
- **Command Palette Search**: Press `Cmd+K` or `Ctrl+K` for instant search

### Advanced Navigation
- **Intelligent Search**: Fuzzy search with instant results using Fuse.js
- **Breadcrumb Navigation**: Clear path indicators
- **Auto-generated Table of Contents**: On-page navigation
- **Scroll-based Section Highlighting**: Active section tracking
- **Related Articles**: Suggestions at the bottom of each page

### AI-Powered Features
- **AI Documentation Assistant**: Chat bot trained on documentation
- **Natural Language Search**: Ask questions in plain English
- **Ask-AI Button**: Available on every page
- **Smart Code Suggestions**: Context-aware recommendations

### Developer Experience
- **Code Block Copy Button**: One-click code copying
- **Syntax Highlighting**: Powered by Prism.js
- **Interactive Examples**: Runnable code snippets
- **Language Selector**: Python, JavaScript, HTML, CSS, C++, Java
- **Version Navigation**: Easy switching between versions

### Performance & Architecture
- **Next.js App Router**: Modern React framework
- **Static Generation**: Fast page loads with SSR
- **Fast Search Indexing**: Client-side fuzzy search
- **SEO Optimized**: Meta tags and structured data
- **TypeScript**: Full type safety

## 📁 Documentation Structure

```
src/app/docs/
├── page.tsx                      # Documentation landing page
├── python/
│   ├── introduction/page.tsx     # Python basics
│   ├── syntax/page.tsx           # Python syntax
│   ├── variables/page.tsx        # Variables & types
│   ├── conditions/page.tsx       # If/else statements
│   ├── loops/page.tsx            # For/while loops
│   ├── functions/page.tsx        # Function definitions
│   └── examples/page.tsx         # Practical examples
├── javascript/
│   ├── introduction/page.tsx     # JavaScript basics
│   ├── syntax/page.tsx           # JS syntax
│   └── ... (similar structure)
├── html/
│   └── introduction/page.tsx
├── css/
│   └── introduction/page.tsx
├── cpp/
│   └── ... (C++ documentation)
└── java/
    └── ... (Java documentation)
```

## 🎨 Color Scheme

### Light Mode
- **Background**: White (#FFFFFF)
- **Foreground**: Black (#000000)
- **Accent**: Dark Red (#8B0000)
- **Muted**: Gray (#F5F5F5)
- **Borders**: Light Gray (#E5E5E5)

### Dark Mode
- **Background**: Black (#000000)
- **Foreground**: White (#FFFFFF)
- **Accent**: Red (#A30000)
- **Muted**: Dark Gray (#1A1A1A)
- **Borders**: Dark Gray (#2A2A2A)

## 🛠️ Components

### Core Components
- `DocLayout`: Main documentation layout wrapper
- `DocsSidebar`: Navigation sidebar with collapsible sections
- `SearchDialog`: Command palette search dialog
- `CodeBlock`: Syntax-highlighted code blocks with copy button
- `AIChatAssistant`: AI-powered chat bot

### Usage Examples

#### Creating a New Documentation Page

```tsx
import { DocLayout } from "@/components/docs/DocLayout";
import { CodeBlock } from "@/components/docs/CodeBlock";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Page Title",
  description: "Page description",
};

export default function MyDocPage() {
  return (
    <DocLayout title="Page Title">
      <div className="animate-in fade-in duration-500">
        <div className="mb-6">
          <span className="language-badge bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
            Language
          </span>
        </div>

        <h1 className="doc-heading">Page Heading</h1>
        <p className="doc-paragraph">Content here...</p>

        <CodeBlock
          language="python"
          title="example.py"
          code={`print("Hello, World!")`}
        />
      </div>
    </DocLayout>
  );
}
```

#### Adding a Code Block

```tsx
<CodeBlock
  language="javascript"
  title="my-script.js"
  code={`console.log("Hello!");
const name = "World";
console.log(\`Hello, \${name}!\`);`}
/>
```

## 🔍 Search Functionality

The documentation features a powerful search system:

1. **Keyboard Shortcut**: Press `Cmd+K` or `Ctrl+K` to open search
2. **Fuzzy Matching**: Find results even with typos
3. **Categories**: Results organized by language/topic
4. **Quick Navigation**: Arrow keys to navigate, Enter to select

## 🤖 AI Assistant

The AI Chat Assistant provides:
- Instant answers to documentation questions
- Code examples and explanations
- Context-aware responses based on the current page
- Natural language understanding

### Future Enhancements (Ready to Implement)
- OpenAI API integration
- RAG (Retrieval Augmented Generation) system
- Vector database for semantic search
- Multi-language support
- Code execution sandbox

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000/docs` to see the documentation.

### Build

```bash
npm run build
npm run start
```

## 📝 Adding New Documentation

1. Create a new directory under `src/app/docs/[language]/[topic]/page.tsx`
2. Use the `DocLayout` component as the wrapper
3. Add metadata for SEO
4. Use `CodeBlock` for code examples
5. Update the sidebar navigation in `DocsSidebar.tsx`
6. Update the search index in `SearchDialog.tsx`

## 🎯 Roadmap

### Phase 1: Core Features ✅
- [x] Basic documentation structure
- [x] Sidebar navigation
- [x] Search functionality
- [x] Code syntax highlighting
- [x] Dark/Light theme
- [x] AI Chat Assistant UI

### Phase 2: AI Integration (Next)
- [ ] OpenAI API integration
- [ ] RAG system with vector embeddings
- [ ] Semantic search across documentation
- [ ] Auto-documentation generation
- [ ] Code validation and execution

### Phase 3: Advanced Features
- [ ] MDX support for interactive docs
- [ ] User accounts and progress tracking
- [ ] Bookmarks and annotations
- [ ] Multi-language documentation
- [ ] Version selector
- [ ] GitHub sync automation
- [ ] Documentation analytics dashboard

### Phase 4: Developer Tools
- [ ] Interactive code playground
- [ ] API reference generator
- [ ] Interactive diagrams
- [ ] Team collaboration features
- [ ] Offline mode (PWA)

## 🎨 Customization

### Theme Colors
Edit `src/app/globals.css` to customize colors:

```css
--color-docs-accent: #8B0000;
--color-docs-background: #ffffff;
--color-docs-foreground: #000000;
```

### Sidebar Navigation
Edit `src/components/docs/DocsSidebar.tsx` to add/remove languages and sections.

### Search Index
Update `src/components/docs/SearchDialog.tsx` to add new searchable content.

## 📄 License

This documentation system is part of the Zerovex Solutions project.

## 🤝 Contributing

To add new documentation pages:
1. Create the page file in the appropriate directory
2. Follow the existing component structure
3. Use the provided CSS classes for consistent styling
4. Test in both light and dark modes

## 📧 Support

For issues or questions about the documentation platform, contact the Zerovex Solutions team.

---

**Built with ❤️ using Next.js, TailwindCSS, and TypeScript**
