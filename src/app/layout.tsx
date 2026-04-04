import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";
import { ThemeProvider } from "@/context/ThemeContext";

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
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
  colorScheme: "dark light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://zerovexsolutions.site"),
  title: {
    default: "Zerovex Solutions | Premium Digital Agency & Technology Partner",
    template: "%s | Zerovex Solutions",
  },
  description:
    "Zerovex Solutions is a premium digital agency specializing in custom web development, mobile app development, AI automation, UI/UX design, and business process automation. We build powerful digital experiences that drive measurable growth for modern businesses.",
  keywords: [
    "web development agency",
    "custom software development",
    "mobile app development",
    "AI automation services",
    "UI/UX design agency",
    "business process automation",
    "digital transformation",
    "technology consulting",
    "Zerovex Solutions",
    "premium digital agency",
  ],
  authors: [{ name: "Zerovex Solutions", url: "https://zerovexsolutions.site" }],
  creator: "Zerovex Solutions",
  publisher: "Zerovex Solutions",
  alternates: {
    canonical: "https://zerovexsolutions.site",
  },
  category: "Technology",
  classification: "Digital Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zerovexsolutions.site",
    siteName: "Zerovex Solutions",
    title: "Zerovex Solutions | Premium Digital Agency & Technology Partner",
    description:
      "Premium digital agency specializing in custom web development, mobile apps, AI automation, and UI/UX design. Building powerful digital experiences.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zerovex Solutions - Premium Digital Agency",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zerovex Solutions | Premium Digital Agency",
    description:
      "Premium digital agency specializing in web development, mobile apps, AI automation, and UI/UX design.",
    creator: "@zerovexsolutions",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Zerovex Solutions",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased transition-colors duration-500" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <ThemeProvider>
          <StructuredData />
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
