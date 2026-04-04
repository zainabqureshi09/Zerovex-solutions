'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ExternalLink, Filter } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

const categories = ['All', 'Web Development', 'Web Applications', 'Mobile Apps', 'Design', 'AI & Automation'];

const projects = [
  {
    title: 'FinTech Dashboard',
    category: 'Web Applications',
    description: 'Real-time analytics platform for financial data visualization with interactive charts and AI-powered insights.',
    gradient: 'from-[#ff1f3d] to-[#ff3d57]',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    metrics: { users: '10K+', performance: '99.9%', growth: '+250%' },
  },
  {
    title: 'LuxeShop E-Commerce',
    category: 'Web Development',
    description: 'Premium shopping experience with AI-powered product recommendations and seamless checkout flow.',
    gradient: 'from-[#2563eb] to-[#3b82f6]',
    technologies: ['Next.js', 'Stripe', 'Sanity CMS', 'Tailwind'],
    metrics: { users: '50K+', performance: '98%', growth: '+340%' },
  },
  {
    title: 'FitTrack Pro',
    category: 'Mobile Apps',
    description: 'Cross-platform wellness tracker with IoT device integration and personalized health insights.',
    gradient: 'from-[#8b5cf6] to-[#a78bfa]',
    technologies: ['React Native', 'Firebase', 'HealthKit', 'ML Kit'],
    metrics: { users: '100K+', performance: '4.8★', growth: '+180%' },
  },
  {
    title: 'NovaTech Branding',
    category: 'Design',
    description: 'Complete visual identity system for a technology startup including logo, guidelines, and marketing assets.',
    gradient: 'from-[#10b981] to-[#34d399]',
    technologies: ['Figma', 'Illustrator', 'Photoshop', 'After Effects'],
    metrics: { users: 'Full Brand', performance: '100%', growth: '+200%' },
  },
  {
    title: 'SmartAssist AI',
    category: 'AI & Automation',
    description: 'Intelligent customer service chatbot handling 10K+ daily interactions with 95% satisfaction rate.',
    gradient: 'from-[#f59e0b] to-[#fbbf24]',
    technologies: ['OpenAI', 'LangChain', 'Python', 'FastAPI'],
    metrics: { users: '10K/day', performance: '95%', growth: '+400%' },
  },
  {
    title: 'StockFlow Inventory',
    category: 'Web Applications',
    description: 'Automated supply chain management system with real-time tracking and predictive analytics.',
    gradient: 'from-[#ec4899] to-[#f472b6]',
    technologies: ['Next.js', 'GraphQL', 'MongoDB', 'Redis'],
    metrics: { users: '5K+', performance: '99.5%', growth: '+150%' },
  },
  {
    title: 'HealthFirst Portal',
    category: 'Web Development',
    description: 'Healthcare patient portal with appointment scheduling, telemedicine, and medical records management.',
    gradient: 'from-[#06b6d4] to-[#22d3ee]',
    technologies: ['React', 'Express', 'MySQL', 'WebRTC'],
    metrics: { users: '25K+', performance: '99.9%', growth: '+280%' },
  },
  {
    title: 'RideConnect App',
    category: 'Mobile Apps',
    description: 'On-demand transportation app with real-time tracking, dynamic pricing, and driver matching algorithm.',
    gradient: 'from-[#f97316] to-[#fb923c]',
    technologies: ['Flutter', 'Google Maps', 'Stripe', 'Firebase'],
    metrics: { users: '75K+', performance: '4.7★', growth: '+320%' },
  },
  {
    title: 'AutoFlow BPA',
    category: 'AI & Automation',
    description: 'Business process automation platform eliminating 200+ hours of manual work monthly for enterprise clients.',
    gradient: 'from-[#6366f1] to-[#818cf8]',
    technologies: ['n8n', 'Python', 'Airtable', 'Custom APIs'],
    metrics: { users: '500+', performance: '99%', growth: '+500%' },
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-[#2563eb]/15 rounded-full blur-[140px]"
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.12, 0.2, 0.12] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] bg-[#ff1f3d]/10 rounded-full blur-[140px]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050507_70%)]"></div>
        </div>

        <div className="container-custom mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <span className="badge-accent mb-8 inline-flex">
              <ExternalLink className="text-[#ff1f3d]" size={16} />
              Our Portfolio
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 font-[var(--space-grotesk)]">
              Featured <span className="text-gradient">Projects</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              A showcase of our most impactful digital transformations and creative
              solutions that drove real business results.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-10 sticky top-[80px] z-40 backdrop-blur-xl border-y" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
        <div className="container-custom mx-auto px-6">
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            <Filter size={18} style={{ color: 'var(--text-tertiary)' }} className="shrink-0" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#ff1f3d] text-white shadow-[0_4px_20px_rgba(225,29,72,0.3)]'
                    : 'glass-subtle hover:text-white hover:border-[#ff1f3d]/30'
                }`}
                style={activeCategory !== category ? { color: 'var(--text-secondary)' } : {}}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <FadeIn key={project.title} delay={index * 0.05}>
                  <div className="group card-premium overflow-hidden block">
                    {/* Image Placeholder */}
                    <div className={`h-60 bg-gradient-to-br ${project.gradient} relative overflow-hidden rounded-xl mb-6`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>

                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white text-sm font-medium flex items-center gap-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          View Details <ArrowUpRight size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Content */}
                    <span className="text-[#ff1f3d] text-xs font-bold uppercase tracking-wider mb-3 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-[#ff1f3d] transition-colors duration-300 font-[var(--space-grotesk)]">
                      {project.title}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)' }} className="text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-lg text-xs"
                          style={{ backgroundColor: 'var(--bg-tertiary)', color: 'var(--text-secondary)' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 pt-5 border-t" style={{ borderColor: 'var(--border-color)' }}>
                      <div className="text-center">
                        <div className="text-[#ff1f3d] font-bold text-sm mb-1">{project.metrics.users}</div>
                        <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>Users</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#ff1f3d] font-bold text-sm mb-1">{project.metrics.performance}</div>
                        <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>Uptime</div>
                      </div>
                      <div className="text-center">
                        <div className="text-[#ff1f3d] font-bold text-sm mb-1">{project.metrics.growth}</div>
                        <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>Growth</div>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-tertiary)' }}>
        <div className="container-custom mx-auto">
          <FadeIn>
            <div className="glass-strong rounded-[32px] p-14 md:p-20 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#ff1f3d] to-transparent"></div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 font-[var(--space-grotesk)]">
                Ready to Be Our Next <span className="text-gradient">Success Story</span>?
              </h2>
              <p className="text-lg max-w-2xl mx-auto mb-12" style={{ color: 'var(--text-secondary)' }}>
                Let's discuss your project and create something extraordinary together.
              </p>
              <Link href="/contact" className="btn-primary text-base px-12 py-5 inline-flex items-center gap-2.5 group">
                Start Your Project <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
