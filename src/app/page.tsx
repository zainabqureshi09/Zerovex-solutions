'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
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

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.12, 0.2, 0.12],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-[20%] left-[15%] w-[clamp(400px,50vw,700px)] h-[clamp(400px,50vw,700px)] bg-[#ff1f3d]/15 rounded-full blur-[clamp(100px,15vw,160px)]"
          />
          <motion.div
            animate={{
              scale: [1.08, 1, 1.08],
              opacity: [0.1, 0.16, 0.1],
            }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            className="absolute bottom-[20%] right-[15%] w-[clamp(350px,45vw,600px)] h-[clamp(350px,45vw,600px)] bg-[#2563eb]/10 rounded-full blur-[clamp(100px,15vw,160px)]"
          />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:clamp(60px,8vw,100px)_clamp(60px,8vw,100px)]"></div>

          {/* Radial Gradient Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0a0a0a_75%)]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-[clamp(800px,85vw,1200px)] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/8 mb-8"
          >
            <span className="w-1.5 h-1.5 bg-[#ff1f3d] rounded-full animate-pulse"></span>
            <span className="text-white/90 text-xs sm:text-sm font-medium">Innovation-Driven Digital Agency</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[clamp(2.75rem,7vw,6rem)] font-bold leading-[1.05] tracking-tight mb-8 font-[var(--space-grotesk)]"
          >
            Building{' '}
            <span className="text-gradient">Powerful</span>
            <br className="hidden sm:block" /> Digital Experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base sm:text-lg text-white/60 max-w-[clamp(500px,60vw,700px)] mx-auto mb-10 leading-relaxed"
          >
            We partner with forward-thinking businesses to design, develop, and scale
            exceptional digital products that drive measurable growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/contact" className="btn-primary text-sm px-8 py-4 group">
              Start a Project
              <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link href="/services" className="btn-secondary text-sm px-8 py-4">
              Explore Services
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 pt-10 border-t border-white/5"
          >
            {[
              { value: '150+', label: 'Projects Delivered' },
              { value: '50+', label: 'Happy Clients' },
              { value: '99%', label: 'Client Satisfaction' },
              { value: '5+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2 font-[var(--space-grotesk)]">{stat.value}</div>
                <div className="text-white/50 text-xs sm:text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/10 flex items-start justify-center p-1.5">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-1.5 bg-[#ff1f3d] rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section className="section-padding relative">
        <div className="container-custom mx-auto">
          <FadeIn className="text-center mb-20">
            <span className="badge-accent mb-6">
              <Zap size={16} />
              What We Do Best
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-[var(--space-grotesk)]">
              Comprehensive Digital <span className="text-gradient">Solutions</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              From concept to launch, we deliver end-to-end digital services that transform your vision into reality.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Link
                  href={service.href}
                  className="group card-premium h-full block relative overflow-hidden"
                >
                  {/* Hover Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <service.icon size={30} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#ff1f3d] transition-colors duration-300 font-[var(--space-grotesk)]">
                      {service.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <div className="flex items-center text-[#ff1f3d] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      Learn more <ChevronRight size={16} className="ml-1.5" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE SECTION ===== */}
      <section className="section-padding relative bg-[#030305]">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#ff1f3d]/5 rounded-full blur-[180px]"></div>

        <div className="container-custom mx-auto relative z-10">
          <FadeIn className="text-center mb-20">
            <span className="badge-accent mb-6">
              <Award size={16} />
              Why Zerovex
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-[var(--space-grotesk)]">
              Built for <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We combine technical expertise with creative vision to deliver solutions that exceed expectations.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="group relative card-premium">
                  <div className="w-14 h-14 rounded-2xl bg-[#ff1f3d]/10 flex items-center justify-center mb-6 group-hover:bg-[#ff1f3d]/15 transition-colors duration-300">
                    <item.icon size={26} className="text-[#ff1f3d]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 font-[var(--space-grotesk)]">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PORTFOLIO SECTION ===== */}
      <section className="section-padding relative">
        <div className="container-custom mx-auto">
          <FadeIn className="text-center mb-20">
            <span className="badge-accent mb-6">
              <TrendingUp size={16} />
              Our Work
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-[var(--space-grotesk)]">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              A showcase of our most impactful digital transformations and creative solutions.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <Link
                  href="/projects"
                  className="group relative card-premium overflow-hidden block"
                >
                  {/* Image Placeholder with Gradient */}
                  <div className={`h-56 bg-gradient-to-br ${item.gradient} relative overflow-hidden rounded-xl mb-6`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full text-white text-sm font-medium flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        View Project <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <span className="text-[#ff1f3d] text-xs font-bold uppercase tracking-wider mb-3 block">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-semibold mb-3 group-hover:text-[#ff1f3d] transition-colors duration-300 font-[var(--space-grotesk)]">
                    {item.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed">
                    {item.description}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="text-center mt-14">
            <Link href="/projects" className="btn-secondary inline-flex items-center gap-2.5 group">
              View All Projects 
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ===== PROCESS SECTION ===== */}
      <section className="section-padding relative bg-[#030305]">
        <div className="container-custom mx-auto">
          <FadeIn className="text-center mb-20">
            <span className="badge-accent mb-6">
              <Layers size={16} />
              Our Process
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-[var(--space-grotesk)]">
              How We <span className="text-gradient">Work</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              A proven methodology refined over hundreds of successful projects.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="relative card-premium text-center group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff1f3d] to-[#ff3d57] flex items-center justify-center text-white font-bold mx-auto mb-5 shadow-lg group-hover:shadow-[0_030px_rgba(225,29,72,0.4)] transition-shadow duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 font-[var(--space-grotesk)]">{step.title}</h3>
                  <p className="text-white/50 text-sm">{step.description}</p>

                  {/* Arrow (except last) */}
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-[#ff1f3d]/40" size={20} />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="section-padding relative">
        <div className="container-custom mx-auto">
          <FadeIn className="text-center mb-20">
            <span className="badge-accent mb-6">
              <Star size={16} />
              Testimonials
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-[var(--space-grotesk)]">
              Client <span className="text-gradient">Success</span> Stories
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Hear from the businesses we've helped transform through innovative digital solutions.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="card-premium h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={18} className="text-[#ff1f3d] fill-[#ff1f3d]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-white/70 leading-relaxed mb-6 flex-grow">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ff1f3d] to-[#2563eb] flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold font-[var(--space-grotesk)]">{testimonial.name}</div>
                      <div className="text-white/50 text-sm">{testimonial.role}</div>
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
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#ff1f3d]/15 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#2563eb]/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="container-custom mx-auto relative z-10">
          <FadeIn>
            <div className="glass-strong rounded-[32px] p-14 md:p-24 text-center relative overflow-hidden">
              {/* Inner Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#ff1f3d] to-transparent"></div>

              <span className="badge-accent mb-8">
                <Rocket size={16} />
                Ready to Start?
              </span>
              
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 font-[var(--space-grotesk)]">
                Let's Build Something{' '}
                <span className="text-gradient">Extraordinary</span>
              </h2>
              
              <p className="text-white/60 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
                Partner with Zerovex Solutions and experience the difference. 
                Let's discuss your project and explore how we can help you achieve your goals.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Link href="/contact" className="btn-primary text-base px-12 py-5 flex items-center gap-2.5 group">
                  Start Your Project
                  <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link href="/services" className="btn-secondary text-base px-12 py-5">
                  Explore Services
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
