"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

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

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <nav className="container-custom flex items-center justify-between py-2.5 md:py-3">
          <Link href="/" className="flex flex-col items-center">
            <img src="/logogency.png" alt="Zerovex Solutions" className="h-6 w-auto sm:h-7 md:h-7 lg:h-8" />
            <span className="mt-0.5 text-[9px] font-medium tracking-[0.2em] uppercase text-black" style={{ fontFamily: "var(--font-serif)" }}>Solutions</span>
          </Link>
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-gray-700">
                {link.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:block">
            <Link href="/contact" className="inline-flex items-center justify-center rounded bg-dark-red px-5 py-2.5 text-sm font-medium text-white">
              Get Started
            </Link>
          </div>
        </nav>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white transition-colors duration-300 dark:border-gray-800 dark:bg-black">
      <nav className="container-custom flex items-center justify-between py-2.5 md:py-3">
        {/* Logo */}
        <Link href="/" className="flex flex-col items-center">
          <img src="/logogency.png" alt="Zerovex Solutions" className="h-6 w-auto sm:h-7 md:h-7 lg:h-8" />
          <span className="mt-0.5 text-[9px] font-medium tracking-[0.2em] uppercase text-black dark:text-white" style={{ fontFamily: "var(--font-serif)" }}>Solutions</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-dark-red"
                  : "text-gray-700 hover:text-dark-red dark:text-gray-300 dark:hover:text-dark-red"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 text-gray-700 transition-all hover:bg-gray-100 hover:text-dark-red dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-dark-red"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded bg-dark-red px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-dark-red-light"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded p-2 text-gray-700 hover:text-dark-red lg:hidden dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white transition-colors dark:border-gray-800 dark:bg-black lg:hidden">
          <div className="container-custom space-y-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded px-4 py-3 text-base font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-red-50 text-dark-red dark:bg-dark-red/10"
                    : "text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-900"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block rounded bg-dark-red px-5 py-3 text-center text-base font-medium text-white"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
