import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free AI Prompt Generator – Zerovex Tools",
  description: "Generate powerful AI prompts for ChatGPT, automation, and content creation. Free tool with no sign-up required.",
  keywords: ["AI prompt generator", "ChatGPT prompts", "AI tools", "prompt templates", "marketing prompts", "programming prompts"],
};

export default function PromptGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
