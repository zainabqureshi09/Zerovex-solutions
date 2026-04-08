import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: {
    default: "Zerovex Solutions | AI Automation & Software Development",
    template: "%s | Zerovex Solutions",
  },
  description: "Transform your business with AI automation, custom software development, and scalable SaaS solutions. Building tomorrow's technology today.",
  keywords: ["AI automation", "software development", "SaaS development", "web development", "business automation"],
  authors: [{ name: "Zerovex Solutions" }],
  creator: "Zerovex Solutions",
  publisher: "Zerovex Solutions",
  metadataBase: new URL("https://zerovexsolutions.site"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zerovexsolutions.site",
    title: "Zerovex Solutions | AI Automation & Software Development",
    description: "Transform your business with AI automation, custom software development, and scalable SaaS solutions.",
    siteName: "Zerovex Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zerovex Solutions | AI Automation & Software Development",
    description: "Transform your business with AI automation, custom software development, and scalable SaaS solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col transition-colors duration-300">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
