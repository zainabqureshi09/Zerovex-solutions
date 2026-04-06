'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
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
  MessageSquare,
  Calendar,
  ExternalLink,
} from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

// Services
const services = [
  {
    icon: Brain,
    title: 'AI Automation',
    description: 'Intelligent systems that eliminate repetitive tasks and scale operations 24/7.',
    href: '/services#ai-automation',
  },
  {
    icon: Terminal,
    title: 'Web Applications',
    description: 'Scalable, secure applications built with modern frameworks and cloud architecture.',
    href: '/services#web-applications',
  },
  {
    icon: Cloud,
    title: 'SaaS Development',
    description: 'End-to-end platforms with multi-tenancy, billing, and enterprise security.',
    href: '/services#saas-development',
  },
  {
    icon: Workflow,
    title: 'API Integration',
    description: 'Seamless third-party integrations and custom API development.',
    href: '/services#api-integration',
  },
  {
    icon: Monitor,
    title: 'Business Systems',
    description: 'Custom automation that streamlines workflows and reduces manual effort.',
    href: '/services#process-automation',
  },
  {
    icon: Sparkles,
    title: 'Web Development',
    description: 'High-converting websites that captivate audiences and drive results.',
    href: '/services#web-development',
  },
];

// Clients
const clients = [
  { name: 'TechCorp', initials: 'TC' },
  { name: 'DataFlow', initials: 'DF' },
  { name: 'CloudSync', initials: 'CS' },
  { name: 'AI Labs', initials: 'AI' },
  { name: 'NetScale', initials: 'NS' },
  { name: 'Quantum', initials: 'QT' },
];

// Projects
const projects = [
  {
    title: 'AI Automation Dashboard',
    category: 'AI & Automation',
    description: 'Real-time analytics and workflow management for enterprise operations.',
    gradient: 'from-[#2563EB] to-[#3B82F6]',
    metrics: '40% Efficiency Gain',
  },
  {
    title: 'CloudSync SaaS Platform',
    category: 'SaaS',
    description: 'Multi-tenant cloud platform with subscription management and analytics.',
    gradient: 'from-[#22C55E] to-[#4ADE80]',
    metrics: '10K+ Users',
  },
  {
    title: 'Trading Web Application',
    category: 'Web App',
    description: 'High-performance trading platform with real-time market data.',
    gradient: 'from-[#8B5CF6] to-[#A78BFA]',
    metrics: '<50ms Latency',
  },
  {
    title: 'Business Portal',
    category: 'Website',
    description: 'Modern business website with CMS and lead generation features.',
    gradient: 'from-[#F59E0B] to-[#FBBF24]',
    metrics: '340% More Leads',
  },
];

// Process
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
    icon: Cpu,
  },
  {
    step: '04',
    title: 'Deployment',
    description: 'Seamless launch with monitoring, optimization, and ongoing support.',
    icon: Rocket,
  },
];

// Why Choose
const whyChoose = [
  {
    icon: Zap,
    title: 'Fast Development',
    description: 'Rapid delivery through agile methodologies without compromising quality.',
    stat: '2x',
    statLabel: 'Faster Delivery',
  },
  {
    icon: Cpu,
    title: 'Modern Stack',
    description: 'Cutting-edge technologies optimized for performance and scalability.',
    stat: '15+',
    statLabel: 'Technologies',
  },
  {
    icon: Layers,
    title: 'Scalable Systems',
    description: 'Architecture designed to grow seamlessly with your business needs.',
    stat: '100K+',
    statLabel: 'Users Supported',
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Intelligent automation that reduces costs and maximizes efficiency.',
    stat: '60%',
    statLabel: 'Cost Reduction',
  },
];

// Testimonials
const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO',
    company: 'TechVenture',
    content: 'Zerovex transformed our entire digital infrastructure. Their AI automation saved us over 200 hours per month.',
    rating: 5,
    avatar: 'SC',
  },
  {
    name: 'Marcus Johnson',
    role: 'CTO',
    company: 'DataFlow Inc',
    content: 'The SaaS platform handles 10x our previous traffic with better performance. Exceptional technical expertise.',
    rating: 5,
    avatar: 'MJ',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Founder',
    company: 'StyleHouse',
    content: 'Our conversion rate increased by 340% within the first quarter. Outstanding attention to detail.',
    rating: 5,
    avatar: 'ER',
  },
];

// Team
const teamMembers = [
  { name: 'Alex Rivera', role: 'Founder & CEO', avatar: 'AR' },
  { name: 'Sarah Kim', role: 'Lead Engineer', avatar: 'SK' },
  { name: 'David Park', role: 'AI Specialist', avatar: 'DP' },
  { name: 'Lisa Chen', role: 'UX Designer', avatar: 'LC' },
];

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-[var(--bg-primary)]">
      {/* Background grid */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(rgba(148,163,184,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* ===================== HERO ===================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.2, 0.12] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-[#2563EB]/20 rounded-full blur-[128px]"
          />
          <motion.div
            animate={{ scale: [1.15, 1, 1.15], opacity: [0.08, 0.15, 0.08] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
            className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[#22C55E]/15 rounded-full blur-[128px]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,transparent,var(--bg-primary))]" />
        </div>

        {/* Content */}
        <motion.div
          style={{ y: heroY }}
          className="relative z-10 max-w-4xl mx-auto px-6 text-center py-40"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2563EB]/20 bg-[#2563EB]/5 mb-8"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#22C55E]" />
            </span>
            <span className="text-xs font-medium text-[#2563EB] uppercase tracking-wider">AI Automation Experts</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
          >
            <span className="text-[var(--text-primary)]">Automate and Scale </span>
            <span className="bg-gradient-to-r from-[#2563EB] to-[#22C55E] bg-clip-text text-transparent">Your Business with AI</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We build powerful automation systems, SaaS platforms, and modern web applications for growing businesses.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#2563EB] text-white font-medium text-sm hover:bg-[#1D4ED8] transition-colors shadow-[0_4px_16px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)]">
              Get Started
              <ArrowUpRight size={16} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--border-color)] text-[var(--text-primary)] font-medium text-sm hover:bg-[var(--surface-hover)] transition-colors">
              <Calendar size={16} />
              Book Consultation
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
          >
            {[
              { value: '150+', label: 'Projects' },
              { value: '50+', label: 'Clients' },
              { value: '99%', label: 'Satisfaction' },
              { value: '5+', label: 'Years' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-[var(--text-primary)]">{stat.value}</div>
                <div className="text-xs text-[var(--text-tertiary)] uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-6 h-10 rounded-full border border-[var(--border-color)] flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="w-1 h-1 bg-[#2563EB] rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* ===================== CLIENTS ===================== */}
      <section className="py-16 border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-sm text-[var(--text-muted)] uppercase tracking-widest mb-10">
            Trusted by innovative companies
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-center justify-center h-14 rounded-lg border border-[var(--border-color)] bg-[var(--surface-card)] hover:border-[#2563EB]/30 transition-colors cursor-default">
                  <div className="flex items-center gap-2 px-3">
                    <div className="w-7 h-7 rounded-md bg-gradient-to-br from-[#2563EB]/20 to-[#22C55E]/20 flex items-center justify-center">
                      <span className="text-[10px] font-bold bg-gradient-to-r from-[#2563EB] to-[#22C55E] bg-clip-text text-transparent">{client.initials}</span>
                    </div>
                    <span className="text-xs font-medium text-[var(--text-tertiary)] hidden sm:block">{client.name}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20 mb-4">
              <Zap size={12} />
              Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 tracking-tight">
              What We Do
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              End-to-end solutions that transform how you operate and grow.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <Link href={service.href} className="group block p-6 rounded-xl border border-[var(--border-color)] bg-[var(--surface-card)] hover:border-[#2563EB]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(37,99,235,0.08)]">
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-4 group-hover:bg-[#2563EB]/15 transition-colors">
                    <service.icon size={20} className="text-[#2563EB]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[#2563EB] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-[#2563EB] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ChevronRight size={14} className="ml-0.5" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PROJECTS ===================== */}
      <section className="py-24 bg-[var(--bg-secondary)]/50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20 mb-4">
              <TrendingUp size={12} />
              Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 tracking-tight">
              Featured Projects
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              Real results for real businesses.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Link href="/projects" className="group block rounded-xl border border-[var(--border-color)] bg-[var(--surface-card)] overflow-hidden hover:border-[#2563EB]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(37,99,235,0.08)]">
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
                        View Project <ArrowUpRight size={14} />
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#2563EB]">{project.category}</span>
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/20">{project.metrics}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[#2563EB] transition-colors">{project.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)]">{project.description}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-12">
            <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--border-color)] text-[var(--text-primary)] font-medium text-sm hover:bg-[var(--surface-hover)] transition-colors">
              View All Projects
              <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ===================== PROCESS ===================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20 mb-4">
              <Layers size={12} />
              Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 tracking-tight">
              How We Work
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              A proven methodology refined over hundreds of projects.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative p-6 rounded-xl border border-[var(--border-color)] bg-[var(--surface-card)] text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#3B82F6] flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <step.icon size={20} className="text-white" />
                  </div>
                  <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#22C55E]/20 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-[#22C55E]">{step.step}</span>
                  </div>
                  <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">{step.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.description}</p>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2">
                      <ChevronRight size={18} className="text-[var(--text-muted)]" />
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE ===================== */}
      <section className="py-24 bg-[var(--bg-secondary)]/50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20 mb-4">
              <Award size={12} />
              Why Zerovex
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 tracking-tight">
              Built for Excellence
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              Technical expertise and creative vision that exceed expectations.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="group p-6 rounded-xl border border-[var(--border-color)] bg-[var(--surface-card)] hover:border-[#2563EB]/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center mb-4 group-hover:bg-[#2563EB]/15 transition-colors">
                    <item.icon size={20} className="text-[#2563EB]" />
                  </div>
                  <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{item.description}</p>
                  <div className="pt-4 border-t border-[var(--border-color)]">
                    <div className="text-xl font-bold bg-gradient-to-r from-[#2563EB] to-[#22C55E] bg-clip-text text-transparent">{item.stat}</div>
                    <div className="text-[11px] font-medium text-[var(--text-tertiary)] uppercase tracking-wider">{item.statLabel}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20 mb-4">
              <Star size={12} />
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 tracking-tight">
              Client Stories
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              Hear from businesses we've helped transform.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="p-6 rounded-xl border border-[var(--border-color)] bg-[var(--surface-card)] flex flex-col h-full">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-[#2563EB] fill-[#2563EB]" />
                    ))}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 flex-grow">"{t.content}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-color)]">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563EB] to-[#22C55E] flex items-center justify-center text-white text-xs font-bold shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[var(--text-primary)]">{t.name}</div>
                      <div className="text-xs text-[var(--text-tertiary)]">{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TEAM ===================== */}
      <section className="py-24 bg-[var(--bg-secondary)]/50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20 mb-4">
              <Users size={12} />
              Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 tracking-tight">
              Meet the Experts
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              Talented professionals driving innovation and delivering results.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <Link href="/team" className="group block p-6 rounded-xl border border-[var(--border-color)] bg-[var(--surface-card)] text-center hover:border-[#2563EB]/40 transition-all duration-300 hover:-translate-y-1">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#2563EB] to-[#22C55E] flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-lg group-hover:shadow-[0_0_32px_rgba(37,99,235,0.2)] transition-shadow">
                    {member.avatar}
                  </div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-1 group-hover:text-[#2563EB] transition-colors">{member.name}</h3>
                  <p className="text-xs text-[var(--text-tertiary)] mb-4">{member.role}</p>
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-[var(--border-color)] group-hover:border-[#2563EB]/30 group-hover:bg-[#2563EB]/10 transition-colors">
                    <ExternalLink size={14} className="text-[#2563EB] opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-12">
            <Link href="/team" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--border-color)] text-[var(--text-primary)] font-medium text-sm hover:bg-[var(--surface-hover)] transition-colors">
              Meet Full Team
              <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="relative rounded-2xl border border-[var(--border-color)] bg-[var(--surface-card)] overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB] to-transparent" />
              {/* Subtle glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-32 bg-[#2563EB]/5 blur-[64px] pointer-events-none" />

              <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20 mb-6">
                  <Rocket size={12} />
                  Get Started
                </span>

                <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4 tracking-tight">
                  Ready to Automate <span className="bg-gradient-to-r from-[#2563EB] to-[#22C55E] bg-clip-text text-transparent">Your Business?</span>
                </h2>

                <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-10">
                  Let's discuss your project and explore how we can help you achieve your goals.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-[#2563EB] text-white font-medium text-sm hover:bg-[#1D4ED8] transition-colors shadow-[0_4px_16px_rgba(37,99,235,0.3)]">
                    Get Started Today
                    <ArrowUpRight size={16} />
                  </Link>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-[var(--border-color)] text-[var(--text-primary)] font-medium text-sm hover:bg-[var(--surface-hover)] transition-colors">
                    <MessageSquare size={16} />
                    Contact Sales
                  </Link>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-6 mt-10 pt-8 border-t border-[var(--border-color)]">
                  {[
                    { icon: CheckCircle2, text: 'Free Consultation' },
                    { icon: Shield, text: 'NDA Protected' },
                    { icon: Zap, text: 'Fast Turnaround' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <item.icon size={14} className="text-[#22C55E]" />
                      <span className="text-sm text-[var(--text-secondary)]">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
