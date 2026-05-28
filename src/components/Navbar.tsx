"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, Github } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import MagneticButton from "./ui/MagneticButton";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Tools", href: "/tools" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-xl">
      <nav className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center">
          <Image src="/logogency.png" alt="Zerovex Solutions" width={100} height={28} className="h-6 w-auto" priority />
          <span className="mt-0.5 text-[8px] font-bold tracking-[0.3em] uppercase text-white/50">Solutions</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-bold uppercase tracking-widest transition-all ${
                pathname === link.href
                  ? "text-red-500"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* GitHub / Status Indicator */}
          <div className="hidden items-center gap-4 border-l border-white/10 pl-6 xl:flex">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-tighter text-green-500/80">Live GitHub</span>
            </div>
            <a href="https://github.com/zerovex" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors hover:text-white">
              <Github className="h-4 w-4" />
            </a>
          </div>

          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2 text-xs font-bold text-black transition-transform hover:scale-105"
                >
                  GET STARTED
                </Link>
              </MagneticButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded p-2 text-gray-400 hover:text-white lg:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute left-0 top-full w-full border-b border-white/5 bg-black/95 backdrop-blur-2xl lg:hidden">
          <div className="container-custom space-y-1 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-lg px-4 py-4 text-sm font-bold uppercase tracking-widest transition-colors ${
                  pathname === link.href
                    ? "bg-red-500/10 text-red-500"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
