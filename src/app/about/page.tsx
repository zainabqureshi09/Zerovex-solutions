'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Globe,
  Zap,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

const values = [
  {
    icon: Target,
    title: 'Excellence First',
    description: 'We pursue the highest standards in everything we do, from code quality to client communication.',
  },
  {
    icon: Eye,
    title: 'Innovation Driven',
    description: 'We stay at the forefront of technology to deliver cutting-edge solutions that give you a competitive edge.',
  },
  {
    icon: Heart,
    title: 'Client Obsession',
    description: 'Your success is our success. We go above and beyond to exceed expectations at every touchpoint.',
  },
  {
    icon: Users,
    title: 'Collaborative Spirit',
    description: 'The best results come from true partnership. We work closely with you as an extension of your team.',
  },
  {
    icon: Award,
    title: 'Quality Assurance',
    description: 'Every project undergoes rigorous testing and review to ensure flawless delivery.',
  },
  {
    icon: Globe,
    title: 'Global Perspective',
    description: 'We design for diverse audiences, ensuring your digital products resonate across cultures and markets.',
  },
];

const stats = [
  { value: '150+', label: 'Projects Completed' },
  { value: '50+', label: 'Happy Clients' },
  { value: '25+', label: 'Team Members' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '5+', label: 'Years of Experience' },
  { value: '15+', label: 'Technologies' },
];

const teamMembers = [
  { name: 'Alex Rivera', role: 'Founder & CEO', gradient: 'from-[#2563EB] to-[#3B82F6]' },
  { name: 'Sarah Chen', role: 'CTO', gradient: 'from-[#2563eb] to-[#3b82f6]' },
  { name: 'Marcus Johnson', role: 'Lead Designer', gradient: 'from-[#8b5cf6] to-[#a78bfa]' },
  { name: 'Elena Rodriguez', role: 'Head of Engineering', gradient: 'from-[#10b981] to-[#34d399]' },
];

const milestones = [
  { year: '2020', title: 'Foundation', description: 'Zerovex Solutions founded with a vision to transform digital experiences.' },
  { year: '2021', title: 'First Major Client', description: 'Secured our first enterprise client and expanded the team to 10 members.' },
  { year: '2022', title: 'Service Expansion', description: 'Launched AI automation and mobile app development services.' },
  { year: '2023', title: 'Global Reach', description: 'Expanded to serve clients across North America, Europe, and Asia.' },
  { year: '2024', title: '150+ Projects', description: 'Reached a milestone of 150+ successfully delivered projects.' },
  { year: '2025', title: 'Innovation Leader', description: 'Recognized as a leading innovator in AI-driven digital solutions.' },
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-24 px-4 sm:px-6">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#2563EB]/15 rounded-full blur-[140px]"
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.12, 0.2, 0.12] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#2563eb]/10 rounded-full blur-[140px]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, var(--bg-primary) 70%)' }}></div>
        </div>

        <div className="container-custom mx-auto px-4 sm:px-6 relative z-10 text-center">
          <FadeIn>
            <span className="badge-accent mb-8 inline-flex">
              <Users className="text-[#2563EB]" size={16} />
              About Zerovex
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-[var(--font-display)]">
              We Build the <span className="text-gradient">Future</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Zerovex Solutions is a premium technology agency dedicated to transforming
              businesses through innovative digital solutions. We combine technical expertise
              with creative vision to deliver exceptional results.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding px-4 sm:px-6">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <FadeIn>
              <div>
                <span className="badge-accent mb-6 inline-block">
                  Our Mission
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-[var(--font-display)]">
                  Empowering Businesses Through <span className="text-gradient">Innovation</span>
                </h2>
                <p className="text-base sm:text-lg leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                  We believe that technology should be an enabler, not a barrier. Our mission is to
                  make cutting-edge digital solutions accessible to businesses of all sizes, helping
                  them compete and thrive in the modern economy.
                </p>
                <p className="text-base sm:text-lg leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
                  Every project we undertake is guided by a single principle: deliver measurable
                  value that exceeds expectations. From startups to enterprises, we partner with
                  visionary organizations ready to embrace digital transformation.
                </p>
                <div className="space-y-5">
                  {[
                    'Human-centered design approach',
                    'Agile development methodology',
                    'Transparent communication',
                    'Long-term partnership mindset',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 size={22} className="text-[#2563EB] shrink-0" />
                      <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="h-64 sm:h-80 lg:h-[450px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#2563EB]/15 via-[#2563eb]/15 to-[#8b5cf6]/15 overflow-hidden relative">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="glass-strong rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center">
                      <Zap size={48} className="text-[#2563EB] mx-auto mb-4" />
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 font-[var(--font-display)]">Innovation First</h3>
                      <p style={{ color: 'var(--text-secondary)' }}>Pushing boundaries since 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding px-4 sm:px-6" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-custom mx-auto">
          <FadeIn className="text-center mb-12 sm:mb-16">
            <span className="badge-accent mb-6 inline-block">
              <TrendingUp size={16} />
              Our Impact
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 font-[var(--font-display)]">
              Impact in <span className="text-gradient">Numbers</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="card-premium text-center p-6 sm:p-8">
                  <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2 sm:mb-3 font-[var(--font-display)]">
                    {stat.value}
                  </div>
                  <div style={{ color: 'var(--text-tertiary)' }} className="text-sm font-medium">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding px-4 sm:px-6">
        <div className="container-custom mx-auto">
          <FadeIn className="text-center mb-12 sm:mb-16 lg:mb-20">
            <span className="badge-accent mb-6 inline-block">
              <Heart size={16} />
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 font-[var(--font-display)]">
              What Drives <span className="text-gradient">Us</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)' }} className="text-base sm:text-lg max-w-2xl mx-auto">
              Our core values shape every decision we make and every solution we deliver.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="card-premium h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#2563EB]/10 flex items-center justify-center mb-6">
                    <value.icon size={26} className="text-[#2563EB]" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 font-[var(--font-display)]">{value.title}</h3>
                  <p style={{ color: 'var(--text-tertiary)' }} className="leading-relaxed">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding px-4 sm:px-6" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-custom mx-auto">
          <FadeIn className="text-center mb-12 sm:mb-16 lg:mb-20">
            <span className="badge-accent mb-6 inline-block">
              <Users size={16} />
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 font-[var(--font-display)]">
              Meet the <span className="text-gradient">Experts</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)' }} className="text-base sm:text-lg max-w-2xl mx-auto">
              A talented team of designers, engineers, and strategists passionate about innovation.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {teamMembers.map((member, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="group card-premium overflow-hidden text-center">
                  {/* Avatar */}
                  <div className={`h-40 sm:h-52 bg-gradient-to-br ${member.gradient} relative rounded-2xl mb-4 sm:mb-6`}>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-2xl sm:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="text-lg font-semibold mb-1 font-[var(--font-display)]">{member.name}</h3>
                  <p style={{ color: 'var(--text-tertiary)' }} className="text-sm">{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding px-4 sm:px-6">
        <div className="container-custom mx-auto">
          <FadeIn className="text-center mb-12 sm:mb-16 lg:mb-20">
            <span className="badge-accent mb-6 inline-block">
              <Award size={16} />
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 font-[var(--font-display)]">
              Company <span className="text-gradient">Milestones</span>
            </h2>
          </FadeIn>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#2563EB]/30 to-transparent hidden lg:block"></div>

            <div className="space-y-8 sm:space-y-12">
              {milestones.map((milestone, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className={`flex flex-col lg:flex-row items-center gap-6 sm:gap-10 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="flex-1 text-center lg:text-left w-full">
                      <div className="card-premium">
                        <span className="text-[#2563EB] text-3xl sm:text-4xl lg:text-5xl font-bold opacity-30 font-[var(--font-display)]">{milestone.year}</span>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mt-2 sm:mt-3 mb-2 sm:mb-3 font-[var(--font-display)]">{milestone.title}</h3>
                        <p style={{ color: 'var(--text-tertiary)' }}>{milestone.description}</p>
                      </div>
                    </div>

                    <div className="relative z-10 w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#2563EB] to-[#3B82F6] flex items-center justify-center shadow-[0_0_40px_rgba(37,99,235,0.4)] shrink-0">
                      <span className="text-xs sm:text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{milestone.year}</span>
                    </div>

                    <div className="flex-1 hidden lg:block"></div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding px-4 sm:px-6" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-custom mx-auto">
          <FadeIn>
            <div className="glass-strong rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 md:p-14 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#2563EB] to-transparent"></div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 font-[var(--font-display)]">
                Want to <span className="text-gradient">Join</span> Our Journey?
              </h2>
              <p style={{ color: 'var(--text-secondary)' }} className="text-base sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-12">
                Partner with us and experience the Zerovex difference. Let's build something extraordinary together.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Link href="/contact" className="btn-primary text-base px-12 py-5 flex items-center gap-2.5 group">
                  Start Your Project <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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


