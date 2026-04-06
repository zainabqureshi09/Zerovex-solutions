'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Code,
  Brain,
  Workflow,
  Monitor,
  ChevronRight,
  Zap,
  Shield,
  Rocket,
  Layers,
  Cpu,
  Star,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  TrendingUp,
  Users,
  Award,
  Globe,
  Sparkles,
  Target,
  Search,
  PenTool,
  Terminal,
  Cloud,
  ArrowRightCircle,
  PlayCircle,
  MessageSquare,
  Calendar,
  ExternalLink,
} from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

// Services Data
const services = [
  {
    icon: Brain,
    title: 'AI Automation',
    description: 'Intelligent automation solutions that eliminate repetitive tasks and scale your operations 24/7.',
    href: '/services#ai-automation',
    color: 'from-[#2563EB] to-[#3B82F6]',
    bgColor: 'bg-[#2563EB]/10',
  },
  {
    icon: Code,
    title: 'Web Application Development',
    description: 'Scalable, secure web applications built with modern frameworks and cloud-native architecture.',
    href: '/services#web-applications',
    color: 'from-[#22C55E] to-[#4ADE80]',
    bgColor: 'bg-[#22C55E]/10',
  },
  {
    icon: Cloud,
    title: 'SaaS Development',
    description: 'End-to-end SaaS platforms with multi-tenancy, subscription billing, and enterprise-grade security.',
    href: '/services#saas-development',
    color: 'from-[#8B5CF6] to-[#A78BFA]',
    bgColor: 'bg-[#8B5CF6]/10',
  },
  {
    icon: Terminal,
    title: 'API Integration',
    description: 'Seamless third-party integrations and custom API development for connected ecosystems.',
    href: '/services#api-integration',
    color: 'from-[#F59E0B] to-[#FBBF24]',
    bgColor: 'bg-[#F59E0B]/10',
  },
  {
    icon: Workflow,
    title: 'Business Process Automation',
    description: 'Streamline workflows, reduce manual effort, and optimize operations with intelligent automation.',
    href: '/services#process-automation',
    color: 'from-[#EC4899] to-[#F472B6]',
    bgColor: 'bg-[#EC4899]/10',
  },
  {
    icon: Monitor,
    title: 'Web Development',
    description: 'Premium, high-converting websites that captivate audiences and drive measurable results.',
    href: '/services#web-development',
    color: 'from-[#06B6D4] to-[#22D3EE]',
    bgColor: 'bg-[#06B6D4]/10',
  },
];

// Clients Data
const clients = [
  { name: 'TechCorp', initials: 'TC' },
  { name: 'DataFlow', initials: 'DF' },
  { name: 'CloudSync', initials: 'CS' },
  { name: 'AI Labs', initials: 'AI' },
  { name: 'NetScale', initials: 'NS' },
  { name: 'Quantum', initials: 'QT' },
];

// Portfolio Items
const portfolioItems = [
  {
    title: 'AI Automation Dashboard',
    category: 'AI & Automation',
    description: 'Real-time analytics and workflow management for enterprise AI operations.',
    gradient: 'from-[#2563EB] to-[#3B82F6]',
    metrics: '40% Efficiency Gain',
  },
  {
    title: 'CloudSync SaaS Platform',
    category: 'SaaS Development',
    description: 'Multi-tenant cloud platform with subscription management and analytics.',
    gradient: 'from-[#22C55E] to-[#4ADE80]',
    metrics: '10K+ Active Users',
  },
  {
    title: 'Trading Web Application',
    category: 'Web Application',
    description: 'High-performance trading platform with real-time market data and execution.',
    gradient: 'from-[#8B5CF6] to-[#A78BFA]',
    metrics: '<50ms Latency',
  },
  {
    title: 'Business Portal',
    category: 'Web Development',
    description: 'Modern business website with CMS integration and lead generation features.',
    gradient: 'from-[#F59E0B] to-[#FBBF24]',
    metrics: '340% More Leads',
  },
];

// Process Steps
const processSteps = [
  { 
    step: '01', 
    title: 'Discovery', 
    description: 'We analyze your business needs, technical requirements, and growth objectives.',
    icon: Search,
  },
  { 
    step: '02', 
    title: 'Planning', 
    description: 'Strategic roadmap with clear milestones, timelines, and deliverables.',
    icon: PenTool,
  },
  { 
    step: '03', 
    title: 'Development', 
    description: 'Agile development with continuous feedback and transparent communication.',
    icon: Code,
  },
  { 
    step: '04', 
    title: 'Deployment', 
    description: 'Seamless launch with monitoring, optimization, and ongoing support.',
    icon: Rocket,
  },
];

// Why Choose Data
const whyChoose = [
  {
    icon: Zap,
    title: 'Fast Development',
    description: 'Rapid delivery without compromising quality through agile methodologies.',
    stat: '2x',
    statLabel: 'Faster Delivery',
  },
  {
    icon: Cpu,
    title: 'Modern Technologies',
    description: 'Cutting-edge tech stack optimized for performance and scalability.',
    stat: '15+',
    statLabel: 'Technologies',
  },
  {
    icon: Layers,
    title: 'Scalable Systems',
    description: 'Future-proof architecture designed to grow with your business needs.',
    stat: '100K+',
    statLabel: 'Users Supported',
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Intelligent automation that reduces costs and maximizes operational efficiency.',
    stat: '60%',
    statLabel: 'Cost Reduction',
  },
];

// Testimonials Data
const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO',
    company: 'TechVenture',
    content: 'Zerovex transformed our entire digital infrastructure. Their AI automation solution saved us over 200 hours per month in manual processes.',
    rating: 5,
    avatar: 'SC',
  },
  {
    name: 'Marcus Johnson',
    role: 'CTO',
    company: 'DataFlow Inc',
    content: 'The SaaS platform they built handles 10x our previous traffic with better performance. Exceptional technical expertise and delivery.',
    rating: 5,
    avatar: 'MJ',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Founder',
    company: 'StyleHouse',
    content: 'Our conversion rate increased by 340% within the first quarter. The attention to UX detail and performance optimization was outstanding.',
    rating: 5,
    avatar: 'ER',
  },
];

// Team Data
const teamMembers = [
  {
    name: 'Alex Rivera',
    role: 'Founder & CEO',
    avatar: 'AR',
    linkedin: '#',
  },
  {
    name: 'Sarah Kim',
    role: 'Lead Engineer',
    avatar: 'SK',
    linkedin: '#',
  },
  {
    name: 'David Park',
    role: 'AI Specialist',
    avatar: 'DP',
    linkedin: '#',
  },
  {
    name: 'Lisa Chen',
    role: 'UX Designer',
    avatar: 'LC',
    linkedin: '#',
  },
];

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const heroParallax = useTransform(scrollYProgress, [0, 0.3], [0, -80]);

  return (
    <div ref={containerRef} className="relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* ===== GLOBAL DECORATIVE ELEMENTS ===== */}
      <div className="fixed inset-0 pointer-events-none z-[1] bg-[linear-gradient(rgba(148,163,184,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />

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
            className="absolute -top-[10%] -left-[10%] w-[clamp(500px,65vw,900px)] h-[clamp(500px,65vw,900px)] bg-gradient-to-br from-[#2563EB]/20 via-[#2563EB]/10 to-transparent rounded-full blur-[clamp(120px,18vw,200px)]"
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
            className="absolute -bottom-[15%] -right-[10%] w-[clamp(450px,55vw,750px)] h-[clamp(450px,55vw,750px)] bg-gradient-to-tl from-[#22C55E]/15 via-[#22C55E]/8 to-transparent rounded-full blur-[clamp(120px,18vw,200px)]"
          />

          {/* Accent Orb - Center Right */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.08, 0.14, 0.08],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 7 }}
            className="absolute top-[40%] right-[20%] w-[clamp(300px,35vw,500px)] h-[clamp(300px,35vw,500px)] bg-gradient-to-br from-[#8B5CF6]/12 to-[#F59E0B]/8 rounded-full blur-[clamp(80px,12vw,140px)]"
          />

          {/* Fine Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:clamp(60px,8vw,100px)_clamp(60px,8vw,100px)]" />

          {/* Radial Fade to Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_45%,transparent_0%,var(--bg-primary)_70%)]" />
        </div>

        {/* Floating Decorative Elements */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[20%] left-[8%] hidden lg:block"
        >
          <div className="w-20 h-20 rounded-2xl border border-[#2563EB]/20 bg-[#2563EB]/5 backdrop-blur-sm flex items-center justify-center">
            <Brain size={24} className="text-[#2563EB]/40" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-[30%] right-[10%] hidden lg:block"
        >
          <div className="w-16 h-16 rounded-full border border-[#22C55E]/20 bg-[#22C55E]/5 backdrop-blur-sm flex items-center justify-center">
            <Sparkles size={20} className="text-[#22C55E]/40" />
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
          className="absolute bottom-[25%] left-[12%] hidden lg:block"
        >
          <div className="w-14 h-14 rounded-xl border border-[#8B5CF6]/20 bg-[#8B5CF6]/5 backdrop-blur-sm flex items-center justify-center">
            <Target size={18} className="text-[#8B5CF6]/40" />
          </div>
        </motion.div>

        {/* Hero Content - Clean Semantic Structure */}
        <motion.div
          style={{ y: heroParallax }}
          className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center"
        >
          {/* Announcement Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8"
            style={{ backgroundColor: 'var(--surface-elevated)', borderColor: 'var(--border-hover)', backdropFilter: 'blur(12px)' }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]" />
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase" style={{ color: 'var(--text-primary)' }}>
              AI-Powered Software Solutions
            </span>
          </motion.div>

          {/* Main Headline - Clean h1, no split spans */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8"
          >
            <span style={{ color: 'var(--text-primary)' }}>Ready to </span>
            <span className="text-gradient">Automate Your</span>
            <br />
            <span style={{ color: 'var(--text-primary)' }}>Business?</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            Zerovex Solutions builds custom software and AI automation that transforms how businesses operate and grow.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/contact" className="btn-primary text-sm px-8 py-4 group">
              Get Started
              <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <Link href="/contact" className="btn-secondary text-sm px-8 py-4 group">
              <Calendar size={16} />
              Book a Consultation
            </Link>
          </motion.div>

          {/* Trust Indicators - Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Top divider line */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-80 sm:w-96 lg:w-[500px] h-px bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent" />

            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12 lg:gap-x-16">
              {[
                { value: '150+', label: 'Projects Delivered' },
                { value: '50+', label: 'Happy Clients' },
                { value: '99%', label: 'Satisfaction' },
                { value: '5+', label: 'Years Experience' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-gradient mb-1 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium uppercase tracking-wide" style={{ color: 'var(--text-tertiary)' }}>
                    {stat.label}
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
              className="w-1.5 h-1.5 bg-[#2563EB] rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* ===== TRUSTED CLIENTS SECTION ===== */}
      <section className="section-padding relative" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-custom mx-auto relative z-10">
          <FadeIn className="text-center mb-12">
            <p className="text-sm font-medium uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
              Trusted by innovative companies worldwide
            </p>
          </FadeIn>

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center h-16 rounded-xl border transition-all duration-300 cursor-pointer group"
                  style={{
                    backgroundColor: 'var(--surface-card)',
                    borderColor: 'var(--border-color)',
                  }}
                >
                  <div className="flex items-center gap-2.5 px-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563EB]/20 to-[#22C55E]/20 flex items-center justify-center group-hover:from-[#2563EB]/30 group-hover:to-[#22C55E]/30 transition-all duration-300">
                      <span className="text-xs font-bold text-gradient">{client.initials}</span>
                    </div>
                    <span className="text-sm font-medium hidden sm:block" style={{ color: 'var(--text-tertiary)' }}>
                      {client.name}
                    </span>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="section-padding relative">
        {/* Section Background Glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2563EB]/5 rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#22C55E]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="container-custom mx-auto relative z-10">
          {/* Section Header */}
          <FadeIn className="text-center mb-16">
            <motion.span className="badge-accent inline-flex mb-6">
              <Zap size={14} />
              What We Do
            </motion.span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
              <span style={{ color: 'var(--text-primary)' }}>Comprehensive </span>
              <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              AI automation, custom software, and scalable platforms that transform your business.
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
                    <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-all duration-300`}>
                      <service.icon size={24} className="text-[#2563EB]" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-[#2563EB] transition-colors duration-300 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="leading-relaxed mb-5 text-sm" style={{ color: 'var(--text-tertiary)' }}>
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="flex items-center text-[#2563EB] text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      Learn more
                      <ChevronRight size={14} className="ml-1" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS SECTION ===== */}
      <section className="section-padding relative" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        {/* Background Accents */}
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-custom mx-auto relative z-10">
          {/* Section Header */}
          <FadeIn className="text-center mb-16">
            <span className="badge-green inline-flex mb-6">
              <TrendingUp size={14} />
              Our Work
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
              <span style={{ color: 'var(--text-primary)' }}>Featured </span>
              <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Real solutions delivering measurable impact across industries.
            </p>
          </FadeIn>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {portfolioItems.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Link
                  href="/projects"
                  className="group relative card-premium overflow-hidden block"
                >
                  {/* Project Preview with Gradient */}
                  <div className={`h-52 bg-gradient-to-br ${item.gradient} relative overflow-hidden rounded-2xl mb-6`}>
                    {/* Grid overlay on preview */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:32px_32px] opacity-50" />

                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />

                    {/* Hover Action */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2.5 rounded-full text-white text-sm font-medium flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        View Project
                        <ArrowUpRight size={14} />
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#2563EB] text-[11px] font-bold uppercase tracking-[0.15em]">
                      {item.category}
                    </span>
                    <span className="text-[#22C55E] text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20">
                      {item.metrics}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#2563EB] transition-colors duration-300 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="leading-relaxed text-sm" style={{ color: 'var(--text-tertiary)' }}>
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

      {/* ===== HOW WE WORK SECTION ===== */}
      <section className="section-padding relative">
        {/* Background Glow */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2563EB]/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="container-custom mx-auto relative z-10">
          {/* Section Header */}
          <FadeIn className="text-center mb-16">
            <span className="badge-accent inline-flex mb-6">
              <Layers size={14} />
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
              <span style={{ color: 'var(--text-primary)' }}>How We </span>
              <span className="text-gradient">Work</span>
            </h2>
            <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              A proven methodology refined over hundreds of projects.
            </p>
          </FadeIn>

          {/* Process Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {processSteps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="relative card-premium text-center group h-full">
                  {/* Step Number Circle */}
                  <div className="relative mb-5">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2563EB] to-[#3B82F6] flex items-center justify-center mx-auto shadow-lg group-hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-shadow duration-500 group-hover:scale-110 transition-transform duration-300">
                      <step.icon size={24} className="text-white" />
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#22C55E] flex items-center justify-center text-xs font-bold text-white shadow-md">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 tracking-tight" style={{ color: 'var(--text-primary)' }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-tertiary)' }}>
                    {step.description}
                  </p>

                  {/* Connector Arrow */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
                      <ArrowRightCircle size={20} className="text-[#2563EB]/30" />
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE SECTION ===== */}
      <section className="section-padding relative" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(500px,70vw,1000px)] h-[clamp(500px,70vw,1000px)] bg-[#2563EB]/[0.04] rounded-full blur-[200px] pointer-events-none" />

        <div className="container-custom mx-auto relative z-10">
          {/* Section Header */}
          <FadeIn className="text-center mb-16">
            <span className="badge-accent inline-flex mb-6">
              <Award size={14} />
              Why Zerovex
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
              <span style={{ color: 'var(--text-primary)' }}>Built for </span>
              <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Technical expertise and creative vision that exceed expectations.
            </p>
          </FadeIn>

          {/* Why Choose Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {whyChoose.map((item, index) => (
              <FadeIn key={index} delay={index * 0.08}>
                <div className="group card-premium h-full">
                  {/* Icon Container */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#2563EB]/10 to-[#2563EB]/5 flex items-center justify-center mb-5 group-hover:from-[#2563EB]/15 group-hover:to-[#2563EB]/10 transition-all duration-300 border border-[#2563EB]/10">
                    <item.icon size={24} className="text-[#2563EB]" />
                  </div>

                  <h3 className="text-lg font-semibold mb-2 tracking-tight" style={{ color: 'var(--text-primary)' }}>
                    {item.title}
                  </h3>
                  <p className="leading-relaxed mb-5 text-sm" style={{ color: 'var(--text-tertiary)' }}>
                    {item.description}
                  </p>

                  {/* Stat */}
                  <div className="pt-5 border-t" style={{ borderColor: 'var(--border-color)' }}>
                    <div className="text-2xl font-bold text-gradient mb-0.5">
                      {item.stat}
                    </div>
                    <div className="text-xs font-medium uppercase tracking-wide" style={{ color: 'var(--text-tertiary)' }}>
                      {item.statLabel}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="section-padding relative">
        {/* Background Accents */}
        <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-[#2563EB]/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-[#8B5CF6]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container-custom mx-auto relative z-10">
          {/* Section Header */}
          <FadeIn className="text-center mb-16">
            <span className="badge-accent inline-flex mb-6">
              <Star size={14} />
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
              <span style={{ color: 'var(--text-primary)' }}>Client </span>
              <span className="text-gradient">Success</span>{' '}
              <span style={{ color: 'var(--text-primary)' }}>Stories</span>
            </h2>
            <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Hear from businesses we've helped transform through innovative solutions.
            </p>
          </FadeIn>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="card-premium h-full flex flex-col relative">
                  {/* Decorative Quote Mark */}
                  <div className="absolute top-6 right-6 text-[#2563EB]/10 text-7xl font-serif leading-none select-none pointer-events-none">"</div>

                  {/* Stars */}
                  <div className="flex gap-1.5 mb-7">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={18} className="text-[#2563EB] fill-[#2563EB]" />
                    ))}
                  </div>

                  {/* Quote Content */}
                  <p className="leading-relaxed mb-8 flex-grow text-base" style={{ color: 'var(--text-secondary)' }}>
                    "{testimonial.content}"
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 pt-7 border-t" style={{ borderColor: 'var(--border-color)' }}>
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#2563EB] to-[#22C55E] flex items-center justify-center text-white font-extrabold text-lg shrink-0 shadow-md">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                        {testimonial.name}
                      </div>
                      <div className="text-sm font-medium" style={{ color: 'var(--text-tertiary)' }}>
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM SECTION ===== */}
      <section className="section-padding relative" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-custom mx-auto relative z-10">
          {/* Section Header */}
          <FadeIn className="text-center mb-16">
            <span className="badge-accent inline-flex mb-6">
              <Users size={14} />
              Our Team
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
              <span style={{ color: 'var(--text-primary)' }}>Meet the </span>
              <span className="text-gradient">Experts</span>
            </h2>
            <p className="text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Talented professionals driving innovation and delivering results.
            </p>
          </FadeIn>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {teamMembers.map((member, index) => (
              <FadeIn key={index} delay={index * 0.08}>
                <Link href="/team" className="group card-premium text-center block">
                  {/* Avatar */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#2563EB] to-[#22C55E] flex items-center justify-center text-white font-bold text-2xl mx-auto mb-5 shadow-lg group-hover:shadow-[0_0_40px_rgba(37,99,235,0.3)] transition-shadow duration-500 group-hover:scale-105 transition-transform duration-300">
                    {member.avatar}
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-[#2563EB] transition-colors duration-300 tracking-tight" style={{ color: 'var(--text-primary)' }}>
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium mb-5" style={{ color: 'var(--text-tertiary)' }}>
                    {member.role}
                  </p>

                  {/* LinkedIn Icon */}
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 group-hover:bg-[#2563EB]/10 group-hover:border-[#2563EB]/30" style={{ backgroundColor: 'var(--surface-card)', borderColor: 'var(--border-color)' }}>
                    <ExternalLink size={16} className="text-[#2563EB] opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* View Full Team CTA */}
          <FadeIn className="text-center mt-16">
            <Link href="/team" className="btn-secondary inline-flex items-center gap-3 group text-base px-10 py-5">
              Meet Full Team
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="section-padding relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[clamp(300px,40vw,600px)] h-[clamp(300px,40vw,600px)] bg-[#2563EB]/12 rounded-full blur-[140px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[clamp(250px,35vw,500px)] h-[clamp(250px,35vw,500px)] bg-[#22C55E]/8 rounded-full blur-[140px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(400px,50vw,800px)] h-[clamp(400px,50vw,800px)] bg-[#8B5CF6]/5 rounded-full blur-[160px]" />
        </div>

        <div className="container-custom mx-auto relative z-10">
          <FadeIn>
            <div className="glass-strong rounded-[clamp(28px,4vw,40px)] p-10 sm:p-16 md:p-20 lg:p-28 text-center relative overflow-hidden border" style={{ borderColor: 'var(--border-hover)' }}>
              {/* Top Border Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/60 to-transparent" />

              {/* Inner glow effects */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[200px] bg-[#2563EB]/5 blur-[80px] pointer-events-none" />

              {/* Badge */}
              <span className="badge-accent inline-flex mb-8 relative z-10">
                <Rocket size={14} />
                Ready to Start?
              </span>

              {/* Headline */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight relative z-10">
                <span style={{ color: 'var(--text-primary)' }}>Ready to </span>
                <span className="text-gradient">Automate</span>{' '}
                <span style={{ color: 'var(--text-primary)' }}>Your Business?</span>
              </h2>

              {/* Description */}
              <p className="text-base md:text-lg max-w-xl mx-auto mb-12 leading-relaxed relative z-10" style={{ color: 'var(--text-secondary)' }}>
                Let's discuss your project and explore how we can help you achieve your goals.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                <Link href="/contact" className="btn-primary text-sm px-10 py-4 flex items-center gap-2 group shadow-xl">
                  Get Started
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
                <Link href="/contact" className="btn-secondary text-sm px-10 py-4 flex items-center gap-2 group">
                  <MessageSquare size={16} />
                  Contact Sales
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t relative z-10" style={{ borderColor: 'var(--border-color)' }}>
                {[
                  { icon: CheckCircle2, text: 'Free Consultation' },
                  { icon: Shield, text: 'NDA Protected' },
                  { icon: Zap, text: 'Fast Turnaround' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <item.icon size={16} className="text-[#22C55E]" />
                    <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
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
