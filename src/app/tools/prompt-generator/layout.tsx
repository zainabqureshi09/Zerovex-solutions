import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Prompt Generator – Generate Powerful Prompts for ChatGPT, Claude & More | Zerovex Tools",
  description: "Free AI Prompt Generator tool. Create professional prompts for ChatGPT, Claude, Gemini, Midjourney, and 50+ AI tools. Supports coding, marketing, web design, business, content writing, and image generation.",
  keywords: [
    "AI prompt generator",
    "ChatGPT prompts",
    "Claude prompts",
    "Midjourney prompts",
    "prompt engineering",
    "AI tools",
    "coding prompts",
    "marketing AI",
    "content generation",
    "prompt templates",
    "free AI tool",
  ],
  openGraph: {
    title: "AI Prompt Generator – Free Tool | Zerovex Solutions",
    description: "Generate powerful, well-structured prompts for ChatGPT, Claude, Midjourney, and more. Free tool with no sign-up required.",
    type: "website",
    url: "https://zerovexsolutions.site/tools/prompt-generator",
  },
  alternates: {
    canonical: "https://zerovexsolutions.site/tools/prompt-generator",
  },
};

export default function PromptGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
