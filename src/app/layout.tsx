import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--space-grotesk",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: {
    default: "Zerovex Solutions | Building Powerful Digital Experiences",
    template: "%s | Zerovex Solutions",
  },
  description:
    "Zerovex Solutions is a premium technology agency specializing in web development, mobile apps, AI automation, and digital design. Building powerful digital experiences for modern businesses.",
  keywords: [
    "web development",
    "mobile app development",
    "AI automation",
    "graphic design",
    "business automation",
    "digital agency",
    "Zerovex Solutions",
  ],
  authors: [{ name: "Zerovex Solutions" }],
  creator: "Zerovex Solutions",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zerovexsolutions.site",
    title: "Zerovex Solutions | Building Powerful Digital Experiences",
    description:
      "Premium technology agency specializing in web development, mobile apps, AI automation, and digital design.",
    siteName: "Zerovex Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zerovex Solutions | Building Powerful Digital Experiences",
    description:
      "Premium technology agency specializing in web development, mobile apps, AI automation, and digital design.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#0a0a0a] text-white antialiased">
        <Navbar />
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
