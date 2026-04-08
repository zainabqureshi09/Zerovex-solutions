'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import {
  Target,
  Eye,
  Heart,
  Award,
  Globe,
  Zap,
  Users,
  TrendingUp,
  ArrowUpRight,
  CheckCircle2,
  Star,
} from 'lucide-react';

const stats = [
  { value: '150+', label: 'Projects Delivered', icon: TrendingUp },
  { value: '50+', label: 'Global Clients', icon: Globe },
  { value: '5+', label: 'Years of Excellence', icon: Award },
  { value: '99%', label: 'Client Satisfaction', icon: Star },
];

const values = [
  {
    icon: Target,
    title: 'Mission-Driven',
    description: 'We empower businesses through innovative technology solutions that drive measurable growth and operational efficiency.',
  },
  {
    icon: Eye,
    title: 'Visionary Thinking',
    description: 'We anticipate future trends and build solutions that are not just current, but future-proof and scalable.',
  },
  {
    icon: Heart,
    title: 'Client-Centric',
    description: 'Every solution is tailored to our clients unique needs, with transparent communication and dedicated support.',
  },
  {
    icon: Zap,
    title: 'Innovation First',
    description: 'We leverage cutting-edge technologies and methodologies to deliver solutions that exceed expectations.',
  },
];

const milestones = [
  { year: '2021', title: 'Company Founded', description: 'Zerovex Solutions was established with a vision to democratize AI and automation for businesses of all sizes.' },
  { year: '2022', title: 'First 50 Clients', description: 'Rapidly grew our client base delivering web applications and automation solutions across multiple industries.' },
  { year: '2023', title: 'AI Division Launch', description: 'Expanded into AI/ML services, building custom machine learning models and intelligent automation systems.' },
  { year: '2024', title: 'Global Expansion', description: 'Opened operations to serve international clients with offices in Silicon Valley and remote teams worldwide.' },
  { year: '2025', title: '150+ Projects Milestone', description: 'Reached a significant milestone with over 150 successful projects and 99% client satisfaction rate.' },
  { year: '2026', title: 'Industry Recognition', description: 'Recognized as a leading digital agency for innovation in AI automation and modern web development.' },
];

const technologies = [
  'Next.js', 'React', 'TypeScript', 'Node.js', 'Python',
  'PostgreSQL', 'MongoDB', 'AWS', 'Firebase', 'Docker',
  'OpenAI', 'TensorFlow', 'Tailwind CSS', 'GraphQL', 'Redis',
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-24 px-4 sm:px-6">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.2, 0.12] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 right-1/4 w-[clamp(400px,50vw,600px)] h-[clamp(400px,50vw,600px)] bg-[#2563EB]/15 rounded-full blur-[clamp(100px,15vw,140px)]"
          />
          <motion.div
            animate={{ scale: [1.08, 1, 1.08], opacity: [0.1, 0.16, 0.1] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            className="absolute bottom-1/4 left-1/4 w-[clamp(350px,45vw,500px)] h-[clamp(350px,45vw,500px)] bg-[#EAB308]/10 rounded-full blur-[clamp(100px,15vw,140px)]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--bg-primary)_75%)]"></div>
        </div>

        <div className="container-custom mx-auto px-4 sm:px-6 relative z-10 text-center">
          <FadeIn>
            <span className="badge-accent mb-8 inline-flex">
              <Globe className="text-[#2563EB]" size={16} />
              About Zerovex
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-[var(--font-display)]" style={{ color: 'var(--text-primary)' }}>
              Building the <span className="text-gradient">Future</span> of Digital
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
              We are a premium digital agency specializing in AI automation, custom software development,
              and transformative digital experiences for forward-thinking businesses worldwide.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#2563EB]/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon size={24} className="text-[#2563EB]" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2 font-[var(--font-display)]">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 sm:py-24 lg:py-28">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <FadeIn>
              <div>
                <span className="badge-gold mb-6 inline-flex">
                  <Star size={14} />
                  Our Story
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-[var(--font-display)]" style={{ color: 'var(--text-primary)' }}>
                  From Vision to <span className="text-gradient-gold">Reality</span>
                </h2>
                <div className="space-y-4 text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <p>
                    Zerovex Solutions was born from a simple yet powerful idea: every business deserves access to world-class technology solutions. Founded in 2021, we set out to bridge the gap between cutting-edge technology and practical business needs.
                  </p>
                  <p>
                    Our founders, seasoned veterans from Silicon Valley's top tech companies, recognized that AI and automation were no longer luxuries for enterprises only—they were necessities for any business looking to compete in the modern digital landscape.
                  </p>
                  <p>
                    Today, we serve clients globally from our Silicon Valley headquarters, delivering transformative solutions that have generated over $50M in combined value for our clients through efficiency gains and revenue growth.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Visual */}
            <FadeIn delay={0.2}>
              <div className="relative h-80 lg:h-96 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2563EB] to-[#EAB308]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-3xl backdrop-blur-sm bg-white/10 flex items-center justify-center mx-auto mb-4">
                      <Globe size={48} className="text-white" />
                    </div>
                    <p className="text-white font-semibold text-lg">Global Reach</p>
                    <p className="text-white/70 text-sm">50+ Countries Served</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 sm:py-24 lg:py-28" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-custom mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="badge-accent mb-6 inline-flex">
              <Heart size={14} />
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-[var(--font-display)]" style={{ color: 'var(--text-primary)' }}>
              What <span className="text-gradient">Drives</span> Us
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Core principles that guide every decision we make and every solution we build.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <FadeIn key={index} delay={index * 0.08}>
                <div className="group p-6 rounded-2xl border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--surface-card)' }}>
                  <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-4 group-hover:bg-[#2563EB]/15 transition-colors">
                    <value.icon size={24} className="text-[#2563EB]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 font-[var(--font-display)]" style={{ color: 'var(--text-primary)' }}>
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed flex-grow" style={{ color: 'var(--text-secondary)' }}>
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 sm:py-24 lg:py-28">
        <div className="container-custom mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="badge-gold mb-6 inline-flex">
              <TrendingUp size={14} />
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-[var(--font-display)]" style={{ color: 'var(--text-primary)' }}>
              Milestones & <span className="text-gradient-gold">Growth</span>
            </h2>
          </FadeIn>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#2563EB] via-[#EAB308] to-[#2563EB] hidden md:block" />

            {milestones.map((milestone, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className={`relative flex flex-col md:flex-row items-start gap-6 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#2563EB] border-4 shadow-[0_0_12px_rgba(37,99,235,0.5)]" style={{ borderColor: 'var(--bg-primary)' }} />

                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'} pl-12 md:pl-0`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#2563EB]/10 text-[#2563EB] border border-[#2563EB]/20 mb-3">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 font-[var(--font-display)]" style={{ color: 'var(--text-primary)' }}>
                      {milestone.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {milestone.description}
                    </p>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block flex-1" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 px-4 sm:px-6 sm:py-24 lg:py-28" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-custom mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="badge-accent mb-6 inline-flex">
              <Zap size={14} />
              Tech Stack
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-[var(--font-display)]" style={{ color: 'var(--text-primary)' }}>
              Technologies We <span className="text-gradient">Master</span>
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              We work with industry-leading technologies to deliver best-in-class solutions.
            </p>
          </FadeIn>

          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {technologies.map((tech, index) => (
              <FadeIn key={index} delay={index * 0.04}>
                <div className="px-5 py-3 rounded-xl border transition-all duration-300 hover:border-[#2563EB]/40 hover:-translate-y-1" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--surface-card)' }}>
                  <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{tech}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 sm:py-24 lg:py-28">
        <div className="container-custom mx-auto">
          <FadeIn>
            <div className="rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden" style={{ backgroundColor: 'var(--surface-elevated)', border: '1px solid var(--border-color)' }}>
              {/* Gold Top Accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#EAB308] to-transparent"></div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-[var(--font-display)]" style={{ color: 'var(--text-primary)' }}>
                Ready to <span className="text-gradient-gold">Transform</span> Your Business?
              </h2>
              <p className="text-base max-w-2xl mx-auto mb-10" style={{ color: 'var(--text-secondary)' }}>
                Let's discuss how our expertise can help you achieve your digital transformation goals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary text-sm px-8 py-4 group">
                  Start Your Project
                  <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link href="/services" className="btn-secondary text-sm px-8 py-4">
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
