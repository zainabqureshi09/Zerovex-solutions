import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free AI Tools Hub - Zerovex Solutions",
  description: "Free AI-powered tools for developers, startups, and businesses. Generate prompts, names, ideas, passwords, emails, and more.",
  keywords: ["AI tools", "free tools", "prompt generator", "startup name generator", "password generator", "text summarizer", "AI email generator", "blog title generator"],
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
