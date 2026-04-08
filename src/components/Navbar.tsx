'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sun, Moon, Sparkles, Diamond } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleThemeHandler = () => {
    toggleTheme();
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Luxury Top Accent Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--gold-accent)]/60 to-transparent" />

      {/* Main Navbar */}
      <div className="relative">
        {/* Background Layer */}
        <div
          className={`absolute inset-0 transition-all duration-700 ${
            isScrolled
              ? isDark
                ? 'bg-[#030712]/95 backdrop-blur-3xl border-b border-[var(--border-color)]'
                : 'bg-white/95 backdrop-blur-3xl border-b border-[var(--border-color)]'
              : 'bg-transparent'
          }`}
        />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-8 lg:px-10">
          <div className="flex items-center justify-between h-24">

            {/* Logo */}
            <Link
              href="/"
              className="group flex items-center gap-4 shrink-0 focus-ring rounded-2xl p-2 -m-2"
              aria-label="Zerovex Solutions Home"
            >
              <motion.div
                whileHover={{ scale: 1.08, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-12 h-12"
              >
                <Image
                  src="/logogency.png"
                  alt="Zerovex Solutions"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* Brand Text */}
              <div className="flex flex-col">
                <span className={`${isDark ? 'text-white' : 'text-[#030712]'} font-bold text-[18px] leading-tight font-[var(--font-display)] tracking-tight`}>
                  Zerovex
                </span>
                <span className={`${isDark ? 'text-[var(--gold-accent)]/60' : 'text-[var(--gold-accent)]'} text-[10px] font-bold leading-tight tracking-[0.25em] uppercase`}>
                  Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center" aria-label="Main navigation">
              <div className="relative flex items-center gap-10">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={`relative z-10 px-3 py-2.5 text-[15px] font-medium transition-all duration-400 ${
                      pathname === link.href
                        ? isDark ? 'text-[var(--gold-accent)]' : 'text-[var(--gold-accent)]'
                        : isDark ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'
                    }`}
                  >
                    {link.name}

                    {/* Active Background Pill */}
                    {pathname === link.href && (
                      <motion.div
                        layoutId="activeNav"
                        className={`absolute inset-0 -inset-x-2 rounded-full border transition-colors duration-400 ${
                          isDark
                            ? 'bg-[var(--gold-accent)]/[0.08] border-[var(--gold-accent)]/[0.15]'
                            : 'bg-[var(--gold-accent)]/[0.06] border-[var(--gold-accent)]/[0.12]'
                        }`}
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}

                    {/* Active Dot Indicator */}
                    {pathname === link.href && (
                      <motion.div
                        layoutId="activeDot"
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-[var(--gold-accent)] rounded-full shadow-[0_0_12px_rgba(212,168,83,0.8)]"
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}

                    {/* Hover Underline */}
                    <span className={`absolute bottom-0 left-1/2 h-px bg-gradient-to-r from-[var(--gold-accent)] to-[var(--primary-light)] transition-all duration-400 ${
                      pathname === link.href
                        ? 'w-0'
                        : hoveredLink === link.href
                          ? 'w-8 -translate-x-1/2'
                          : 'w-0 -translate-x-1/2'
                    }`} />
                  </Link>
                ))}
              </div>
            </nav>

            {/* Right Side Controls */}
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleThemeHandler}
                className={`hidden lg:flex w-11 h-11 items-center justify-center rounded-full transition-all duration-400 ${
                  isDark
                    ? 'bg-[var(--gold-accent)]/5 border border-[var(--gold-accent)]/15 text-[var(--gold-accent)]/80 hover:text-[var(--gold-accent)] hover:bg-[var(--gold-accent)]/10'
                    : 'bg-black/5 border border-black/10 text-black/70 hover:text-black hover:bg-black/10'
                }`}
                aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              >
                <AnimatePresence mode="wait">
                  {isDark ? (
                    <motion.div
                      key="moon"
                      initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Moon size={18} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Sun size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              {/* Get Quote Button - Luxury Version */}
              <Link
                href="/contact"
                className="group relative hidden lg:inline-flex items-center overflow-hidden rounded-full transition-all duration-600 hover:-translate-y-1.5 active:translate-y-0"
              >
                {/* Outer Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[var(--gold-accent)] to-[var(--primary)] rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-600" />

                {/* Button Container */}
                <div className="relative flex items-center gap-4 pl-6 pr-2.5 py-2.5 rounded-full">
                  {/* Background with gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--gold-accent)] to-[var(--primary)] rounded-full" />
                  <div className={`absolute inset-[2px] rounded-full transition-colors duration-400 ${
                    isDark ? 'bg-[#030712] group-hover:bg-[#0a0f1a]' : 'bg-white group-hover:bg-gray-50'
                  }`} />

                  {/* Centered Text */}
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[var(--gold-accent)] to-[var(--primary)] font-bold text-[14px] flex-1 text-center uppercase tracking-wider">
                    Get Quote
                  </span>

                  {/* Icon Circle */}
                  <div className="relative z-10 w-10 h-10 bg-gradient-to-br from-[var(--gold-accent)] to-[var(--primary)] rounded-full flex items-center justify-center shadow-[0_6px_20px_rgba(212,168,83,0.5)] group-hover:shadow-[0_8px_28px_rgba(212,168,83,0.6)] transition-all duration-400">
                    <motion.div
                      animate={{ scale: 1 }}
                      whileHover={{ scale: 1.2, rotate: 45 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <ArrowUpRight size={18} className="text-white" />
                    </motion.div>
                  </div>
                </div>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden relative min-w-[48px] min-h-[48px] w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 ${
                  isDark
                    ? 'bg-[var(--gold-accent)]/5 border border-[var(--gold-accent)]/15 text-[var(--gold-accent)]/80 hover:text-[var(--gold-accent)] hover:bg-[var(--gold-accent)]/10'
                    : 'bg-black/5 border border-black/10 text-black/70 hover:text-black hover:bg-black/10'
                }`}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 90, opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <X size={22} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Menu size={22} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden"
          >
            {/* Background */}
            <div className={`absolute inset-0 top-24 backdrop-blur-3xl ${isDark ? 'bg-[#030712]/98' : 'bg-white/98'}`} />
            <div className="h-px bg-gradient-to-r from-transparent via-[var(--gold-accent)]/30 to-transparent" />

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-6 sm:px-8 py-8 sm:py-10">
              <nav className="flex flex-col gap-3" aria-label="Mobile navigation">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`group flex items-center gap-5 px-6 py-5 rounded-2xl text-base font-medium transition-all duration-300 ${
                        pathname === link.href
                          ? isDark ? 'bg-[var(--gold-accent)]/10 text-[var(--gold-accent)] border border-[var(--gold-accent)]/20' : 'bg-[var(--gold-accent)]/5 text-[var(--gold-accent)] border border-[var(--gold-accent)]/15'
                          : isDark ? 'text-white/70 hover:text-white hover:bg-white/5' : 'text-black/70 hover:text-black hover:bg-black/5'
                      }`}
                    >
                      {/* Active Indicator */}
                      {pathname === link.href && (
                        <div className="w-1.5 h-7 bg-[var(--gold-accent)] rounded-full" />
                      )}
                      {link.name}
                      <ArrowUpRight size={18} className="ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[var(--gold-accent)]" />
                    </Link>
                  </motion.div>
                ))}

                {/* Theme Toggle Mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.07, duration: 0.5 }}
                >
                  <button
                    onClick={toggleThemeHandler}
                    className={`group flex items-center gap-5 px-6 py-5 rounded-2xl text-base font-medium w-full transition-all duration-300 ${
                      isDark ? 'text-white/70 hover:text-white hover:bg-white/5' : 'text-black/70 hover:text-black hover:bg-black/5'
                    }`}
                  >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                    {isDark ? 'Light Mode' : 'Dark Mode'}
                  </button>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (navLinks.length + 1) * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="pt-6 sm:pt-8 mt-3"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group relative flex items-center justify-center gap-4 w-full min-h-[56px] bg-gradient-to-r from-[var(--gold-accent)] to-[var(--primary)] text-white px-8 py-4 rounded-2xl font-bold text-base overflow-hidden hover:shadow-[0_16px_48px_rgba(212,168,83,0.5)] transition-all duration-400"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--gold-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Diamond size={20} className="relative z-10" />
                    <span className="relative z-10">Get Quote</span>
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
