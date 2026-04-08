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
  Diamond,
  Crown,
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
    gradient: 'from-[#d4a853] to-[#1e40af]',
    metrics: '40% Efficiency Gain',
  },
  {
    title: 'CloudSync SaaS Platform',
    category: 'SaaS',
    description: 'Multi-tenant cloud platform with subscription management and analytics.',
    gradient: 'from-[#1e40af] to-[#7c3aed]',
    metrics: '10K+ Users',
  },
  {
    title: 'Trading Web Application',
    category: 'Web App',
    description: 'High-performance trading platform with real-time market data.',
    gradient: 'from-[#7c3aed] to-[#d4a853]',
    metrics: '<50ms Latency',
  },
  {
    title: 'Business Portal',
    category: 'Website',
    description: 'Modern business website with CMS and lead generation features.',
    gradient: 'from-[#d4a853] to-[#1e40af]',
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
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-[var(--bg-primary)]">
      {/* Luxury background pattern */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(212,168,83,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(212,168,83,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,83,0.03)_0%,transparent_70%)]" />
      </div>

      {/* ===================== LUXURY HERO ===================== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Sophisticated background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.15, 0.08] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-[#d4a853]/15 rounded-full blur-[160px]"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.06, 0.12, 0.06] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
            className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-[#1e40af]/12 rounded-full blur-[160px]"
          />
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 12 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7c3aed]/10 rounded-full blur-[140px]"
          />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,transparent,var(--bg-primary))]" />
        </div>

        {/* Content */}
        <motion.div
          style={{ y: heroY }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center py-40"
        >
          {/* Luxury Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[var(--gold-accent)]/30 bg-[var(--gold-accent)]/5 mb-10 backdrop-blur-sm"
          >
            <Diamond size={12} className="text-[var(--gold-accent)]" />
            <span className="text-xs font-semibold text-[var(--gold-accent)] uppercase tracking-[0.15em]">Premium Digital Agency</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="mb-8"
          >
            <span className="block text-[var(--text-primary)]">Automating Your Business.</span>
            <span className="block text-gradient-premium">Empowering Your Growth.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            We craft AI automation, SaaS platforms, and premium digital experiences that transform how businesses operate and scale globally.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-20"
          >
            <Link href="/contact" className="btn-primary group">
              Get Started
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link href="/contact" className="btn-secondary group">
              <Calendar size={18} />
              Book Consultation
            </Link>
          </motion.div>

          {/* Trust indicators - Luxury version */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-x-16 gap-y-6"
          >
            {[
              { value: '150+', label: 'Projects Delivered' },
              { value: '50+', label: 'Global Clients' },
              { value: '99%', label: 'Client Satisfaction' },
              { value: '5+', label: 'Years Excellence' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-3xl font-bold text-gradient-gold mb-1">{stat.value}</div>
                <div className="text-xs text-[var(--text-tertiary)] uppercase tracking-wider group-hover:text-[var(--gold-accent)] transition-colors">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Luxury scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-7 h-12 rounded-full border border-[var(--gold-accent)]/30 flex items-start justify-center p-2 backdrop-blur-sm">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[var(--gold-accent)] rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* ===================== CLIENTS ===================== */}
      <section className="py-20 border-t border-b border-[var(--border-color)] bg-[var(--bg-secondary)]/30">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs text-[var(--text-muted)] uppercase tracking-[0.2em] mb-12">
            Trusted by Innovative Companies Worldwide
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {clients.map((client, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center h-16 rounded-xl border border-[var(--border-color)] bg-[var(--surface-card)] hover:border-[var(--gold-accent)]/30 transition-all duration-300 cursor-default backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2.5 px-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--gold-accent)]/20 to-[var(--primary)]/20 flex items-center justify-center">
                      <span className="text-[11px] font-bold text-gradient">{client.initials}</span>
                    </div>
                    <span className="text-xs font-medium text-[var(--text-tertiary)] hidden sm:block">{client.name}</span>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-[var(--gold-accent)]/10 text-[var(--gold-accent)] border border-[var(--gold-accent)]/25 mb-6">
              <Zap size={14} />
              Our Services
            </span>
            <h2 className="mb-5">
              <span className="text-[var(--text-primary)]">What We </span>
              <span className="text-gradient-gold">Do</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              End-to-end solutions that transform how you operate and grow.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <Link href={service.href} className="group card-premium block">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--gold-accent)]/15 to-[var(--primary)]/15 flex items-center justify-center mb-5 group-hover:from-[var(--gold-accent)]/25 group-hover:to-[var(--primary)]/25 transition-all duration-400">
                    <service.icon size={24} className="text-[var(--gold-accent)]" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 group-hover:text-[var(--gold-accent)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <div className="flex items-center text-[var(--gold-accent)] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Learn more <ChevronRight size={16} className="ml-1" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== PROJECTS ===================== */}
      <section className="py-28 bg-[var(--bg-secondary)]/30">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-[var(--primary)]/10 text-[var(--primary-light)] border border-[var(--primary)]/25 mb-6">
              <TrendingUp size={14} />
              Portfolio
            </span>
            <h2 className="mb-5">
              <span className="text-[var(--text-primary)]">Featured </span>
              <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              Real results for real businesses.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {projects.map((project, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <Link href="/projects" className="group card-premium block overflow-hidden">
                  <div className={`h-56 bg-gradient-to-br ${project.gradient} relative overflow-hidden mb-6`}>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                      <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="opacity-0 group-hover:opacity-100 transition-all duration-400 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-sm font-semibold"
                      >
                        View Project <ArrowUpRight size={16} />
                      </motion.span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--gold-accent)]">{project.category}</span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[var(--gold-accent)]/10 text-[var(--gold-accent)] border border-[var(--gold-accent)]/25">{project.metrics}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--gold-accent)] transition-colors">{project.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{project.description}</p>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-14">
            <Link href="/projects" className="btn-secondary group">
              View All Projects
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ===================== PROCESS ===================== */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-[var(--primary)]/10 text-[var(--primary-light)] border border-[var(--primary)]/25 mb-6">
              <Layers size={14} />
              Our Process
            </span>
            <h2 className="mb-5">
              <span className="text-[var(--text-primary)]">How We </span>
              <span className="text-gradient-gold">Work</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              A proven methodology refined over hundreds of projects.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {processSteps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="relative card-premium text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--gold-accent)] to-[var(--primary)] flex items-center justify-center mx-auto mb-5 shadow-lg">
                    <step.icon size={24} className="text-white" />
                  </div>
                  <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[var(--gold-accent)]/20 flex items-center justify-center border border-[var(--gold-accent)]/30">
                    <span className="text-xs font-bold text-[var(--gold-accent)]">{step.step}</span>
                  </div>
                  <h3 className="text-base font-semibold text-[var(--text-primary)] mb-3">{step.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.description}</p>
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2">
                      <ChevronRight size={20} className="text-[var(--gold-accent)]/40" />
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY CHOOSE ===================== */}
      <section className="py-28 bg-[var(--bg-secondary)]/30">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-[var(--gold-accent)]/10 text-[var(--gold-accent)] border border-[var(--gold-accent)]/25 mb-6">
              <Crown size={14} />
              Why Zerovex
            </span>
            <h2 className="mb-5">
              <span className="text-[var(--text-primary)]">Built for </span>
              <span className="text-gradient-gold">Excellence</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              Technical expertise and creative vision that exceed expectations.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {whyChoose.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="group card-premium">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[var(--gold-accent)]/15 to-[var(--primary)]/15 flex items-center justify-center mb-5 group-hover:from-[var(--gold-accent)]/25 group-hover:to-[var(--primary)]/25 transition-all duration-400">
                    <item.icon size={24} className="text-[var(--gold-accent)]" />
                  </div>
                  <h3 className="text-base font-semibold text-[var(--text-primary)] mb-3">{item.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">{item.description}</p>
                  <div className="pt-5 border-t border-[var(--border-color)]">
                    <div className="text-2xl font-bold text-gradient-gold mb-1">{item.stat}</div>
                    <div className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">{item.statLabel}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-[var(--gold-accent)]/10 text-[var(--gold-accent)] border border-[var(--gold-accent)]/25 mb-6">
              <Star size={14} />
              Testimonials
            </span>
            <h2 className="mb-5">
              <span className="text-[var(--text-primary)]">Client </span>
              <span className="text-gradient-gold">Stories</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              Hear from businesses we've helped transform.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {testimonials.map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card-premium flex flex-col h-full">
                  <div className="flex gap-1.5 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={16} className="text-[var(--gold-accent)] fill-[var(--gold-accent)]" />
                    ))}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 flex-grow italic">"{t.content}"</p>
                  <div className="flex items-center gap-4 pt-5 border-t border-[var(--border-color)]">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--gold-accent)] to-[var(--primary)] flex items-center justify-center text-white text-sm font-bold shrink-0 shadow-lg">
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
      <section className="py-28 bg-[var(--bg-secondary)]/30">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-20">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-[var(--primary)]/10 text-[var(--primary-light)] border border-[var(--primary)]/25 mb-6">
              <Users size={14} />
              Our Team
            </span>
            <h2 className="mb-5">
              <span className="text-[var(--text-primary)]">Meet the </span>
              <span className="text-gradient">Experts</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
              Talented professionals driving innovation and delivering results.
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-7">
            {teamMembers.map((member, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <Link href="/team" className="group card-premium block text-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--gold-accent)] to-[var(--primary)] flex items-center justify-center text-white font-bold text-xl mx-auto mb-5 shadow-xl group-hover:shadow-[0_0_40px_rgba(212,168,83,0.3)] transition-all duration-500">
                    {member.avatar}
                  </div>
                  <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--gold-accent)] transition-colors">{member.name}</h3>
                  <p className="text-xs text-[var(--text-tertiary)] mb-5">{member.role}</p>
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[var(--border-color)] group-hover:border-[var(--gold-accent)]/40 group-hover:bg-[var(--gold-accent)]/10 transition-all duration-300">
                    <ExternalLink size={16} className="text-[var(--gold-accent)] opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-14">
            <Link href="/team" className="btn-secondary group">
              Meet Full Team
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="relative card-premium overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--gold-accent)] to-transparent" />
              {/* Subtle glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-40 bg-[var(--gold-accent)]/5 blur-[80px] pointer-events-none" />

              <div className="relative z-10 px-10 py-20 md:px-20 md:py-24 text-center">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-[var(--gold-accent)]/10 text-[var(--gold-accent)] border border-[var(--gold-accent)]/25 mb-8">
                  <Rocket size={14} />
                  Get Started
                </span>

                <h2 className="mb-6">
                  <span className="text-[var(--text-primary)]">Ready to Automate </span>
                  <span className="text-gradient-gold">Your Business?</span>
                </h2>

                <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-12">
                  Let's discuss your project and explore how we can help you achieve your goals.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                  <Link href="/contact" className="btn-primary group">
                    Get Started Today
                    <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <Link href="/contact" className="btn-secondary group">
                    <MessageSquare size={18} />
                    Contact Sales
                  </Link>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-10 border-t border-[var(--border-color)]">
                  {[
                    { icon: CheckCircle2, text: 'Free Consultation' },
                    { icon: Shield, text: 'NDA Protected' },
                    { icon: Zap, text: 'Fast Turnaround' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <item.icon size={16} className="text-[var(--gold-accent)]" />
                      <span className="text-sm text-[var(--text-secondary)] font-medium">{item.text}</span>
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
