'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Code,
  Smartphone,
  Palette,
  Brain,
  Workflow,
  Monitor,
  ChevronRight,
  Zap,
  Shield,
  Rocket,
  Layers,
  Cpu,
  Clock,
  Star,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Award,
  Globe,
  Diamond,
  Sparkles,
  Target,
  PenTool,
  MousePointer2,
} from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

// Services Data
const services = [
  {
    icon: Monitor,
    title: 'Website Development',
    description: 'Premium, high-converting websites that captivate your audience and drive results.',
    href: '/services#web-development',
    color: 'from-[#ff1f3d] to-[#ff3d57]',
  },
  {
    icon: Code,
    title: 'Web Applications',
    description: 'Scalable, secure web applications built with cutting-edge technologies.',
    href: '/services#web-applications',
    color: 'from-[#2563eb] to-[#2563eb]',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile experiences that users love.',
    href: '/services#mobile-apps',
    color: 'from-[#8b5cf6] to-[#a78bfa]',
  },
  {
    icon: Palette,
    title: 'Brand Design',
    description: 'Compelling visual identities that communicate your brand story.',
    href: '/services#graphic-design',
    color: 'from-[#10b981] to-[#34d399]',
  },
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'Intelligent automation solutions powered by artificial intelligence.',
    href: '/services#ai-automation',
    color: 'from-[#f59e0b] to-[#fbbf24]',
  },
  {
    icon: Workflow,
    title: 'Automation',
    description: 'Streamline operations with custom workflow automation.',
    href: '/services#process-automation',
    color: 'from-[#ec4899] to-[#f472b6]',
  },
];

// Why Choose Data
const whyChoose = [
  {
    icon: Shield,
    title: 'Expert Team',
    description: 'Seasoned engineers with deep expertise across the full technology stack.',
  },
  {
    icon: Cpu,
    title: 'Modern Tech',
    description: 'We leverage the latest frameworks and tools for optimal results.',
  },
  {
    icon: Rocket,
    title: 'Fast Delivery',
    description: 'Agile processes ensure rapid development without compromising quality.',
  },
  {
    icon: Layers,
    title: 'Scalable Systems',
    description: 'Future-proof systems designed to grow with your business needs.',
  },
  {
    icon: Zap,
    title: 'AI-Powered',
    description: 'AI-driven solutions that maximize efficiency and minimize overhead.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Dedicated support team available around the clock for your needs.',
  },
];

// Portfolio Data
const portfolioItems = [
  {
    title: 'FinTech Dashboard',
    category: 'Web Application',
    description: 'Real-time analytics platform for financial data visualization.',
    gradient: 'from-[#ff1f3d] to-[#ff3d57]',
  },
  {
    title: 'LuxeShop E-Commerce',
    category: 'Website Development',
    description: 'Premium shopping experience with AI-powered recommendations.',
    gradient: 'from-[#2563eb] to-[#3b82f6]',
  },
  {
    title: 'FitTrack Pro',
    category: 'Mobile Application',
    description: 'Cross-platform wellness tracker with IoT device integration.',
    gradient: 'from-[#8b5cf6] to-[#a78bfa]',
  },
  {
    title: 'NovaTech Branding',
    category: 'Brand Design',
    description: 'Complete visual identity system for a technology startup.',
    gradient: 'from-[#10b981] to-[#34d399]',
  },
  {
    title: 'SmartAssist AI',
    category: 'AI Automation',
    description: 'Intelligent chatbot handling 10K+ daily customer interactions.',
    gradient: 'from-[#f59e0b] to-[#fbbf24]',
  },
  {
    title: 'StockFlow Inventory',
    category: 'Process Automation',
    description: 'Automated supply chain management for retail operations.',
    gradient: 'from-[#ec4899] to-[#f472b6]',
  },
];

// Process Steps
const processSteps = [
  { step: '01', title: 'Discovery', description: 'Understanding your vision, goals, and requirements.' },
  { step: '02', title: 'Strategy', description: 'Crafting a detailed roadmap for success.' },
  { step: '03', title: 'Design', description: 'Creating intuitive, beautiful user experiences.' },
  { step: '04', title: 'Development', description: 'Building robust, scalable solutions.' },
  { step: '05', title: 'Launch', description: 'Deploying and optimizing for peak performance.' },
];

// Testimonials Data
const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, TechVenture',
    content: 'Zerovex transformed our digital presence completely. The team delivered beyond our expectations with incredible attention to detail.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'CTO, DataFlow Inc',
    content: 'Working with Zerovex was a game-changer. Their AI automation solutions saved us over 200 hours per month in manual processes.',
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'Founder, StyleHouse',
    content: 'The website they built for us is absolutely stunning. Our conversion rate increased by 340% within the first quarter.',
    rating: 5,
  },
];

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const heroParallax = useTransform(scrollYProgress, [0, 0.3], [0, -80]);

  return (
    <div ref={containerRef} className="relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* ===== GLOBAL DECORATIVE ELEMENTS ===== */}
      {/* Fixed grid overlay across entire page */}
      <div className="fixed inset-0 pointer-events-none z-[1] bg-[linear-gradient(rgba(255,255,255,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.008)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Layers */}
        <div className="absolute inset-0">
          {/* Primary Gradient Orb - Top Left */}
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.15, 0.25, 0.15],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-[10%] -left-[10%] w-[clamp(500px,65vw,900px)] h-[clamp(500px,65vw,900px)] bg-gradient-to-br from-[#ff1f3d]/20 via-[#ff1f3d]/10 to-transparent rounded-full blur-[clamp(120px,18vw,200px)]"
          />

          {/* Secondary Gradient Orb - Bottom Right */}
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.12, 0.2, 0.12],
              x: [0, -40, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
            className="absolute -bottom-[15%] -right-[10%] w-[clamp(450px,55vw,750px)] h-[clamp(450px,55vw,750px)] bg-gradient-to-tl from-[#2563eb]/15 via-[#8b5cf6]/8 to-transparent rounded-full blur-[clamp(120px,18vw,200px)]"
          />

          {/* Accent Orb - Center Right */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.08, 0.14, 0.08],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 7 }}
            className="absolute top-[40%] right-[20%] w-[clamp(300px,35vw,500px)] h-[clamp(300px,35vw,500px)] bg-gradient-to-br from-[#10b981]/12 to-[#f59e0b]/8 rounded-full blur-[clamp(80px,12vw,140px)]"
          />

          {/* Fine Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:clamp(60px,8vw,100px)_clamp(60px,8vw,100px)]" />

          {/* Radial Fade to Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,transparent_0%,var(--bg-primary)_70%)]" />
        </div>

        {/* Floating Decorative Elements */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[20%] left-[8%] hidden lg:block"
        >
          <div className="w-20 h-20 rounded-2xl border border-[#ff1f3d]/20 bg-[#ff1f3d]/5 backdrop-blur-sm flex items-center justify-center">
            <Diamond size={24} className="text-[#ff1f3d]/40" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-[30%] right-[10%] hidden lg:block"
        >
          <div className="w-16 h-16 rounded-full border border-[#2563eb]/20 bg-[#2563eb]/5 backdrop-blur-sm flex items-center justify-center">
            <Sparkles size={20} className="text-[#2563eb]/40" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
          className="absolute bottom-[25%] left-[12%] hidden lg:block"
        >
          <div className="w-14 h-14 rounded-xl border border-[#8b5cf6]/20 bg-[#8b5cf6]/5 backdrop-blur-sm flex items-center justify-center">
            <Target size={18} className="text-[#8b5cf6]/40" />
          </div>
        </motion.div>

        {/* Hero Content */}
        <motion.div style={{ y: heroParallax }} className="relative z-10 text-center max-w-[clamp(900px,90vw,1400px)] mx-auto px-6 py-32">
          {/* Announcement Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border mb-10"
            style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--border-hover)', backdropFilter: 'blur(12px)' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff1f3d] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ff1f3d]" />
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase" style={{ color: 'var(--text-primary)' }}>
              Innovation-Driven Digital Agency
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,8.5vw,7.5rem)] font-extrabold leading-[0.95] tracking-[-0.035em] mb-10 font-[var(--space-grotesk)]"
          >
            <span className="block" style={{ color: 'var(--text-primary)' }}>Building</span>
            <span className="block text-gradient">Powerful</span>
            <span className="block" style={{ color: 'var(--text-primary)' }}>Digital Experiences</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl md:text-2xl max-w-[clamp(550px,65vw,800px)] mx-auto mb-14 leading-relaxed font-light"
            style={{ color: 'var(--text-secondary)' }}
          >
            We partner with forward-thinking businesses to design, develop, and scale
            exceptional digital products that drive <span className="font-medium" style={{ color: 'var(--text-primary)' }}>measurable growth</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20"
          >
            <Link href="/contact" className="btn-primary text-base px-10 py-5 group shadow-lg">
              Start a Project
              <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <Link href="/services" className="btn-secondary text-base px-10 py-5 group">
              Explore Services
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Top border gradient */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-[clamp(300px,60vw,800px)] h-px bg-gradient-to-r from-transparent via-[#ff1f3d]/40 to-transparent" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
              {[
                { value: '150+', label: 'Projects Delivered', icon: Rocket },
                { value: '50+', label: 'Happy Clients', icon: Users },
                { value: '99%', label: 'Client Satisfaction', icon: Award },
                { value: '5+', label: 'Years Experience', icon: Globe },
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gradient mb-3 font-[var(--space-grotesk)] tracking-tight">
                    {stat.value}
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <stat.icon size={14} className="text-[#ff1f3d]/60" />
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-7 h-12 rounded-full border-2 flex items-start justify-center p-2" style={{ borderColor: 'var(--border-hover)' }}>
            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1.5 h-1.5 bg-[#ff1f3d] rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="section-padding relative">
        {/* Section Background Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff1f3d]/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563eb]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="container-custom mx-auto relative z-10">
          {/* Section Header */}
          <FadeIn className="text-center mb-20 lg:mb-28">
            <motion.span className="badge-accent mb-8">
              <Zap size={16} />
              What We Do Best
            </motion.span>
            <h2 className="text-[clamp(2.5rem,5.5vw,5rem)] font-extrabold mb-8 font-[var(--space-grotesk)] tracking-tight leading-[1.05]">
              <span style={{ color: 'var(--text-primary)' }}>Comprehensive Digital</span>{' '}
              <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              From concept to launch, we deliver end-to-end digital services that transform your vision into reality.
            </p>
          </FadeIn>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 0.08}>
                <Link
                  href={service.href}
                  className="group card-premium h-full block relative overflow-hidden"
                >
                  {/* Hover Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500`} />

                  {/* Top border highlight on hover */}
                  <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-[72px] h-[72px] rounded-[20px] bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                      <service.icon size={32} className="text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-[#ff1f3d] transition-colors duration-300 font-[var(--space-grotesk)] tracking-tight">
                      {service.title}
                    </h3>
                    <p className="leading-relaxed mb-6 text-base" style={{ color: 'var(--text-tertiary)' }}>
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="flex items-center text-[#ff1f3d] text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      Learn more
                      <ChevronRight size={16} className="ml-1.5" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE SECTION ===== */}
      <section className="section-padding relative" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(500px,70vw,1000px)] h-[clamp(500px,70vw,1000px)] bg-[#ff1f3d]/[0.04] rounded-full blur-[200px] pointer-events-none" />

        <div className="container-custom mx-auto relative z-10">
          {/* Section Header */}
          <FadeIn className="text-center mb-20 lg:mb-28">
            <span className="badge-accent mb-8">
              <Award size={16} />
              Why Zerovex
            </span>
            <h2 className="text-[clamp(2.5rem,5.5vw,5rem)] font-extrabold mb-8 font-[var(--space-grotesk)] tracking-tight leading-[1.05]">
              <span style={{ color: 'var(--text-primary)' }}>Built for</span>{' '}
              <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              We combine technical expertise with creative vision to deliver solutions that exceed expectations.
            </p>
          </FadeIn>

          {/* Why Choose Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyChoose.map((item, index) => (
              <FadeIn key={index} delay={index * 0.08}>
                <div className="group card-premium h-full">
                  {/* Icon Container */}
                  <div className="w-[64px] h-[64px] rounded-[18px] bg-gradient-to-br from-[#ff1f3d]/10 to-[#ff1f3d]/5 flex items-center justify-center mb-7 group-hover:from-[#ff1f3d]/15 group-hover:to-[#ff1f3d]/10 transition-all duration-300 border border-[#ff1f3d]/10">
                    <item.icon size={28} className="text-[#ff1f3d]" />
                  </div>

                  <h3 className="text-xl font-bold mb-4 font-[var(--space-grotesk)] tracking-tight" style={{ color: 'var(--text-primary)' }}>
                    {item.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO SECTION ===== */}
      <section className="section-padding relative">
        {/* Background Accents */}
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#8b5cf6]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-custom mx-auto relative z-10">
          {/* Section Header */}
          <FadeIn className="text-center mb-20 lg:mb-28">
            <span className="badge-accent mb-8">
              <TrendingUp size={16} />
              Our Work
            </span>
            <h2 className="text-[clamp(2.5rem,5.5vw,5rem)] font-extrabold mb-8 font-[var(--space-grotesk)] tracking-tight leading-[1.05]">
              <span style={{ color: 'var(--text-primary)' }}>Featured</span>{' '}
              <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              A showcase of our most impactful digital transformations and creative solutions.
            </p>
          </FadeIn>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {portfolioItems.map((item, index) => (
              <FadeIn key={index} delay={index * 0.08}>
                <Link
                  href="/projects"
                  className="group relative card-premium overflow-hidden block"
                >
                  {/* Project Preview with Gradient */}
                  <div className={`h-60 bg-gradient-to-br ${item.gradient} relative overflow-hidden rounded-2xl mb-7`}>
                    {/* Grid overlay on preview */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50" />

                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />

                    {/* Hover Action */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full text-white text-sm font-bold flex items-center gap-2.5 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                        View Project
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <span className="text-[#ff1f3d] text-[11px] font-extrabold uppercase tracking-[0.15em] mb-4 block">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#ff1f3d] transition-colors duration-300 font-[var(--space-grotesk)] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
                    {item.description}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* View All CTA */}
          <FadeIn className="text-center mt-16">
            <Link href="/projects" className="btn-secondary inline-flex items-center gap-3 group text-base px-10 py-5">
              View All Projects
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section className="section-padding relative" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        {/* Background Glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2563eb]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container-custom mx-auto relative z-10">
          {/* Section Header */}
          <FadeIn className="text-center mb-20 lg:mb-28">
            <span className="badge-accent mb-8">
              <Layers size={16} />
              Our Process
            </span>
            <h2 className="text-[clamp(2.5rem,5.5vw,5rem)] font-extrabold mb-8 font-[var(--space-grotesk)] tracking-tight leading-[1.05]">
              <span style={{ color: 'var(--text-primary)' }}>How We</span>{' '}
              <span className="text-gradient">Work</span>
            </h2>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              A proven methodology refined over hundreds of successful projects.
            </p>
          </FadeIn>

          {/* Process Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-5">
            {processSteps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="relative card-premium text-center group h-full">
                  {/* Step Number Circle */}
                  <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[#ff1f3d] to-[#ff3d57] flex items-center justify-center text-white font-extrabold text-xl mx-auto mb-6 shadow-lg group-hover:shadow-[0_0_40px_rgba(255,31,61,0.4)] transition-shadow duration-500 group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>

                  <h3 className="text-xl font-bold mb-3 font-[var(--space-grotesk)] tracking-tight" style={{ color: 'var(--text-primary)' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
                    {step.description}
                  </p>

                  {/* Connector Arrow (hidden on mobile, shown on lg) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                      <ArrowRight size={20} className="text-[#ff1f3d]/30" />
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="section-padding relative">
        {/* Background Accents */}
        <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-[#ff1f3d]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-[#8b5cf6]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-custom mx-auto relative z-10">
          {/* Section Header */}
          <FadeIn className="text-center mb-20 lg:mb-28">
            <span className="badge-accent mb-8">
              <Star size={16} />
              Testimonials
            </span>
            <h2 className="text-[clamp(2.5rem,5.5vw,5rem)] font-extrabold mb-8 font-[var(--space-grotesk)] tracking-tight leading-[1.05]">
              <span style={{ color: 'var(--text-primary)' }}>Client</span>{' '}
              <span className="text-gradient">Success</span>{' '}
              <span style={{ color: 'var(--text-primary)' }}>Stories</span>
            </h2>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Hear from the businesses we've helped transform through innovative digital solutions.
            </p>
          </FadeIn>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="card-premium h-full flex flex-col relative">
                  {/* Decorative Quote Mark */}
                  <div className="absolute top-6 right-6 text-[#ff1f3d]/10 text-7xl font-serif leading-none select-none pointer-events-none">"</div>

                  {/* Stars */}
                  <div className="flex gap-1.5 mb-7">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={18} className="text-[#ff1f3d] fill-[#ff1f3d]" />
                    ))}
                  </div>

                  {/* Quote Content */}
                  <p className="leading-relaxed mb-8 flex-grow text-base" style={{ color: 'var(--text-secondary)' }}>
                    "{testimonial.content}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-7 border-t" style={{ borderColor: 'var(--border-color)' }}>
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ff1f3d] to-[#2563eb] flex items-center justify-center text-white font-extrabold text-lg shrink-0 shadow-md">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold font-[var(--space-grotesk)] tracking-tight" style={{ color: 'var(--text-primary)' }}>
                        {testimonial.name}
                      </div>
                      <div className="text-sm font-medium" style={{ color: 'var(--text-tertiary)' }}>
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[clamp(300px,40vw,600px)] h-[clamp(300px,40vw,600px)] bg-[#ff1f3d]/12 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[clamp(250px,35vw,500px)] h-[clamp(250px,35vw,500px)] bg-[#2563eb]/8 rounded-full blur-[140px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(400px,50vw,800px)] h-[clamp(400px,50vw,800px)] bg-[#8b5cf6]/5 rounded-full blur-[160px]" />
        </div>

        <div className="container-custom mx-auto relative z-10">
          <FadeIn>
            <div className="glass-strong rounded-[clamp(28px,4vw,40px)] p-10 sm:p-16 md:p-20 lg:p-28 text-center relative overflow-hidden border" style={{ borderColor: 'var(--border-hover)' }}>
              {/* Top Border Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff1f3d]/60 to-transparent" />

              {/* Inner glow effects */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[200px] bg-[#ff1f3d]/5 blur-[80px] pointer-events-none" />

              {/* Badge */}
              <span className="badge-accent mb-10 relative z-10">
                <Rocket size={16} />
                Ready to Start?
              </span>

              {/* Headline */}
              <h2 className="text-[clamp(2.5rem,5.5vw,5rem)] font-extrabold mb-8 font-[var(--space-grotesk)] tracking-tight leading-[1.05] relative z-10">
                <span style={{ color: 'var(--text-primary)' }}>Let's Build Something</span>{' '}
                <span className="text-gradient">Extraordinary</span>
              </h2>

              {/* Description */}
              <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-14 leading-relaxed relative z-10" style={{ color: 'var(--text-secondary)' }}>
                Partner with Zerovex Solutions and experience the difference.
                Let's discuss your project and explore how we can help you achieve your goals.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 relative z-10">
                <Link href="/contact" className="btn-primary text-base px-14 py-6 flex items-center gap-3 group shadow-xl">
                  Start Your Project
                  <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
                <Link href="/services" className="btn-secondary text-base px-14 py-6 flex items-center gap-3 group">
                  View Our Services
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-8 mt-14 pt-10 border-t relative z-10" style={{ borderColor: 'var(--border-color)' }}>
                {[
                  { icon: CheckCircle2, text: 'Free Consultation' },
                  { icon: Shield, text: 'NDA Protected' },
                  { icon: Clock, text: 'Fast Turnaround' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <item.icon size={18} className="text-[#10b981]" />
                    <span className="text-sm font-semibold" style={{ color: 'var(--text-secondary)' }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
