'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sun, Moon, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isDark, setIsDark] = useState(true);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.setProperty('--bg-primary', '#0a0a0a');
      document.documentElement.style.setProperty('--bg-secondary', '#0f0f0f');
      document.documentElement.style.setProperty('--text-primary', '#ffffff');
      document.documentElement.style.setProperty('--text-secondary', 'rgba(255,255,255,0.6)');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.style.setProperty('--bg-primary', '#ffffff');
      document.documentElement.style.setProperty('--bg-secondary', '#f8f9fa');
      document.documentElement.style.setProperty('--text-primary', '#0a0a0a');
      document.documentElement.style.setProperty('--text-secondary', 'rgba(0,0,0,0.5)');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Top Accent Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#ff1f3d]/50 to-transparent" />

      {/* Main Navbar */}
      <div className="relative">
        {/* Background Layer */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isScrolled
              ? isDark 
                ? 'bg-[#0a0a0a]/90 backdrop-blur-2xl' 
                : 'bg-white/90 backdrop-blur-2xl'
              : 'bg-transparent'
          }`}
        />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <Link 
              href="/" 
              className="group flex items-center gap-3.5 shrink-0 focus-ring rounded-2xl p-1 -m-1"
              aria-label="Zerovex Solutions Home"
            >
              {/* Icon */}
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative z-10 w-11 h-11 bg-gradient-to-br from-[#ff1f3d] via-[#ff1f3d] to-[#ff3d57] rounded-2xl flex items-center justify-center shadow-[0_4px_20px_rgba(255,31,61,0.3)]"
                >
                  <span className="text-white font-bold text-xl font-[var(--space-grotesk)]">Z</span>
                </motion.div>
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff1f3d] to-[#ff3d57] rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
              </div>

              {/* Brand Text */}
              <div className="flex flex-col">
                <span className={`${isDark ? 'text-white' : 'text-[#0a0a0a]'} font-bold text-[17px] leading-tight font-[var(--space-grotesk)] tracking-tight`}>
                  Zerovex
                </span>
                <span className={`${isDark ? 'text-white/30' : 'text-black/30'} text-[10px] font-semibold leading-tight tracking-[0.2em] uppercase`}>
                  Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center" aria-label="Main navigation">
              <div className="relative flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    onMouseLeave={() => setHoveredLink(null)}
                    className={`relative z-10 px-2 py-2 text-[15px] font-medium transition-all duration-300 ${
                      pathname === link.href
                        ? isDark ? 'text-white' : 'text-[#0a0a0a]'
                        : isDark ? 'text-white/60 hover:text-white' : 'text-black/60 hover:text-black'
                    }`}
                  >
                    {link.name}
                    
                    {/* Active Background Pill */}
                    {pathname === link.href && (
                      <motion.div
                        layoutId="activeNav"
                        className={`absolute inset-0 -inset-x-1 rounded-full border transition-colors duration-300 ${
                          isDark 
                            ? 'bg-white/[0.08] border-white/[0.06]' 
                            : 'bg-black/[0.04] border-black/[0.06]'
                        }`}
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                    
                    {/* Active Dot Indicator */}
                    {pathname === link.href && (
                      <motion.div
                        layoutId="activeDot"
                        className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#ff1f3d] rounded-full shadow-[0_0_8px_rgba(255,31,61,0.6)]"
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}
                    
                    {/* Hover Underline */}
                    <span className={`absolute bottom-0 left-1/2 h-px bg-gradient-to-r from-[#ff1f3d] to-[#ff3d57] transition-all duration-300 ${
                      pathname === link.href 
                        ? 'w-0' 
                        : hoveredLink === link.href 
                          ? 'w-6 -translate-x-1/2' 
                          : 'w-0 -translate-x-1/2'
                    }`} />
                  </Link>
                ))}
              </div>
            </nav>

            {/* Right Side Controls */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`hidden lg:flex w-10 h-10 items-center justify-center rounded-full transition-all duration-300 ${
                  isDark 
                    ? 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10' 
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
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Moon size={18} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Sun size={18} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              {/* Premium CTA Button */}
              <Link 
                href="/contact" 
                className="group relative hidden lg:inline-flex items-center overflow-hidden rounded-full transition-all duration-500 hover:-translate-y-1 active:translate-y-0"
              >
                {/* Outer Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#ff1f3d] to-[#ff3d57] rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                
                {/* Button Container */}
                <div className="relative flex items-center gap-3 pl-5 pr-2 py-2 rounded-full">
                  {/* Background with gradient border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff1f3d] to-[#ff3d57] rounded-full" />
                  <div className={`absolute inset-[1.5px] rounded-full transition-colors duration-300 ${
                    isDark ? 'bg-[#0a0a0a] group-hover:bg-[#0f0f0f]' : 'bg-white group-hover:bg-gray-50'
                  }`} />
                  
                  {/* Centered Text */}
                  <span className="relative z-10 text-white font-semibold text-[14px] flex-1 text-center">
                    Start Project
                  </span>
                  
                  {/* Icon Circle */}
                  <div className="relative z-10 w-9 h-9 bg-gradient-to-br from-[#ff1f3d] to-[#ff3d57] rounded-full flex items-center justify-center shadow-[0_4px_16px_rgba(255,31,61,0.4)] group-hover:shadow-[0_6px_24px_rgba(255,31,61,0.5)] transition-shadow duration-300">
                    <motion.div
                      animate={{ scale: 1 }}
                      whileHover={{ scale: 1.15, rotate: 45 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <ArrowUpRight size={16} className="text-white" />
                    </motion.div>
                  </div>
                </div>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden relative w-11 h-11 flex items-center justify-center rounded-2xl transition-all duration-200 ${
                  isDark 
                    ? 'bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10' 
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
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <X size={20} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0, scale: 0.8 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: -90, opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Menu size={20} />
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden"
          >
            {/* Background */}
            <div className={`absolute inset-0 top-20 backdrop-blur-2xl ${isDark ? 'bg-[#0a0a0a]/95' : 'bg-white/95'}`} />
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-6 py-8">
              <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`group flex items-center gap-4 px-5 py-4 rounded-2xl text-base font-medium transition-all duration-200 ${
                        pathname === link.href
                          ? isDark ? 'bg-white/10 text-white border border-white/10' : 'bg-black/5 text-black border border-black/10'
                          : isDark ? 'text-white/60 hover:text-white hover:bg-white/5' : 'text-black/60 hover:text-black hover:bg-black/5'
                      }`}
                    >
                      {/* Active Indicator */}
                      {pathname === link.href && (
                        <div className="w-1 h-6 bg-[#ff1f3d] rounded-full" />
                      )}
                      {link.name}
                      <ArrowUpRight size={16} className="ml-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-[#ff1f3d]" />
                    </Link>
                  </motion.div>
                ))}

                {/* Theme Toggle Mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.06, duration: 0.4 }}
                >
                  <button
                    onClick={toggleTheme}
                    className={`group flex items-center gap-4 px-5 py-4 rounded-2xl text-base font-medium w-full transition-all duration-200 ${
                      isDark ? 'text-white/60 hover:text-white hover:bg-white/5' : 'text-black/60 hover:text-black hover:bg-black/5'
                    }`}
                  >
                    {isDark ? <Sun size={18} /> : <Moon size={18} />}
                    {isDark ? 'Light Mode' : 'Dark Mode'}
                  </button>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (navLinks.length + 1) * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="pt-6 mt-2"
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group relative flex items-center justify-center gap-3 w-full bg-gradient-to-r from-[#ff1f3d] to-[#ff3d57] text-white px-6 py-4.5 rounded-2xl font-semibold overflow-hidden hover:shadow-[0_12px_40px_rgba(255,31,61,0.4)] transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ff3d57] to-[#ff5777] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Sparkles size={18} className="relative z-10" />
                    <span className="relative z-10">Start a Project</span>
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
