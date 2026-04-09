import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Startup Name Generator – Generate Brandable Business Names | Zerovex Tools",
  description: "Free Startup Name Generator tool. Generate 20+ unique, brandable startup names instantly. Perfect for tech companies, SaaS, AI startups, ecommerce, and more. Includes .com, .io, .ai domain suggestions.",
  keywords: [
    "startup name generator",
    "business name generator",
    "brand name ideas",
    "company name generator",
    "brandable names",
    "startup branding",
    "tech startup names",
    "SaaS name ideas",
    "AI startup names",
    "free name generator",
  ],
  openGraph: {
    title: "Startup Name Generator – Free Tool | Zerovex Solutions",
    description: "Generate unique, brandable startup names instantly. Free tool with domain suggestions for .com, .io, and .ai.",
    type: "website",
    url: "https://zerovexsolutions.site/tools/startup-name-generator",
  },
  alternates: {
    canonical: "https://zerovexsolutions.site/tools/startup-name-generator",
  },
};

export default function StartupNameGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
