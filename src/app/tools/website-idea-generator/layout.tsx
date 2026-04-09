import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Idea Generator – Generate Creative Website Concepts | Zerovex Tools",
  description: "Free Website Idea Generator tool. Generate unique, creative website ideas for blogs, SaaS, marketplaces, AI tools, directories, ecommerce, and portfolios. Perfect for developers and entrepreneurs.",
  keywords: [
    "website idea generator",
    "startup ideas",
    "SaaS ideas",
    "blog ideas",
    "website concepts",
    "web project ideas",
    "entrepreneur ideas",
    "developer projects",
    "creative website ideas",
    "online business ideas",
  ],
  openGraph: {
    title: "Website Idea Generator – Free Tool | Zerovex Solutions",
    description: "Generate creative website ideas instantly. Perfect for developers, entrepreneurs, and creators looking for their next project.",
    type: "website",
    url: "https://zerovexsolutions.site/tools/website-idea-generator",
  },
  alternates: {
    canonical: "https://zerovexsolutions.site/tools/website-idea-generator",
  },
};

export default function WebsiteIdeaGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
