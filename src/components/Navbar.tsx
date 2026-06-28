"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Github, ChevronDown, Sparkles, Terminal } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import MagneticButton from "./ui/MagneticButton";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme, mounted } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "py-3 bg-black/75 backdrop-blur-2xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)]" 
          : "py-5 bg-transparent border-b border-white/0"
      }`}
    >
      <nav className="container-custom flex items-center justify-between">
        {/* Logo and Taglines */}
        <div className="flex flex-col items-start group">
          <Link href="/" className="flex flex-col items-start transition-transform duration-300 hover:scale-[1.02]">
            <div className="flex items-center gap-1.5">
              <Image
                src="/logogency.png"
                alt="Zerovex Solutions"
                width={120}
                height={32}
                className="h-6 sm:h-8 w-auto filter drop-shadow-[0_0_8px_rgba(239,68,68,0.3)]"
                style={{ width: "auto" }}
                priority
              />
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse mt-1" />
            </div>
            <span className="mt-0.5 text-[6px] sm:text-[8px] font-black tracking-[0.4em] uppercase text-white/40 group-hover:text-red-500/80 transition-colors duration-300">
              Solutions
            </span>
          </Link>
          <a
            href="https://www.idnglobalassociates.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-0.5 text-[5px] sm:text-[7px] font-semibold uppercase text-white/30 hover:text-white/60 transition-colors duration-300 tracking-wider"
          >
            A venture of idn global associates
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            
            if (link.name === "Services") {
              return (
                <div
                  key="services"
                  className="relative py-2"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href="/services"
                    className={`flex items-center gap-1 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                      isActive || pathname.startsWith("/tools") || pathname.startsWith("/internships")
                        ? "text-red-500"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    {link.name}
                    <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                  </Link>

                  {/* Premium Dropdown with Framer Motion */}
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute left-0 top-full mt-2 w-48 rounded-xl bg-black/95 backdrop-blur-2xl p-2 shadow-[0_10px_40px_rgba(0,0,0,0.9)] border border-white/10"
                      >
                        <Link
                          href="/tools"
                          onClick={() => setServicesOpen(false)}
                          className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs font-semibold text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200"
                        >
                          <Terminal className="h-3.5 w-3.5 text-red-500" />
                          Free AI Tools
                        </Link>
                        <Link
                          href="/internships"
                          onClick={() => setServicesOpen(false)}
                          className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-xs font-semibold text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200"
                        >
                          <Sparkles className="h-3.5 w-3.5 text-red-500" />
                          Remote Internships
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative py-2 text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 text-white/70 hover:text-white"
              >
                {link.name}
                {isActive && (
                  <motion.span 
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-6">
          {/* GitHub Status Indicator */}
          <div className="hidden items-center gap-4 border-l border-white/10 pl-6 xl:flex">
            <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 border border-green-500/20">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span className="text-[9px] font-black uppercase tracking-widest text-green-400">
                Live GitHub
              </span>
            </div>
            <a
              href="https://github.com/zerovex"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 transition-colors duration-300 hover:text-white"
              aria-label="GitHub Repository"
            >
              <Github className="h-4.5 w-4.5 hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-white/60 transition-all duration-300 hover:bg-white/5 hover:text-white hover:rotate-12"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            {/* Premium CTA Button */}
            <div className="hidden lg:block">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="relative inline-flex items-center justify-center rounded-xl bg-white px-6 py-2.5 text-xs font-black uppercase tracking-widest text-black transition-all duration-300 hover:bg-red-500 hover:text-white hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                >
                  GET STARTED
                </Link>
              </MagneticButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-xl p-2.5 text-white/60 hover:text-white bg-white/5 hover:bg-white/10 lg:hidden border border-white/5 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu with Premium Slide Down & Fade Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 top-full w-full border-b border-white/10 bg-black/95 backdrop-blur-2xl lg:hidden overflow-hidden shadow-2xl"
          >
            <div className="container-custom space-y-2 py-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-xl px-4 py-3.5 text-sm font-bold uppercase tracking-[0.15em] transition-all duration-200 ${
                      isActive
                        ? "bg-red-500/10 text-red-500 border-l-2 border-red-500"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <div className="h-px bg-white/5 my-4" />

              {/* Sub-items for mobile services */}
              <Link
                href="/tools"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white/50 hover:bg-white/5 hover:text-white transition-all duration-200 pl-8"
              >
                <Terminal className="h-3.5 w-3.5 text-red-500" />
                Free AI Tools
              </Link>
              <Link
                href="/internships"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white/50 hover:bg-white/5 hover:text-white transition-all duration-200 pl-8"
              >
                <Sparkles className="h-3.5 w-3.5 text-red-500" />
                Remote Internships
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
