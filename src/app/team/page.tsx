'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { Users, ArrowRight, ArrowUpRight, Link as LinkIcon, User, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Alex Rivera',
    role: 'Founder & CEO',
    bio: 'Visionary leader with 15+ years in digital transformation. Passionate about building innovative teams and delivering exceptional client experiences.',
    gradient: 'from-[#2563EB] to-[#3B82F6]',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Sarah Chen',
    role: 'Chief Technology Officer',
    bio: 'Full-stack architect specializing in scalable systems. Former senior engineer at top tech companies with expertise in modern web technologies.',
    gradient: 'from-[#2563eb] to-[#3b82f6]',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Marcus Johnson',
    role: 'Lead UI/UX Designer',
    bio: 'Award-winning designer creating intuitive digital experiences. Expert in design systems, user research, and interaction design.',
    gradient: 'from-[#8b5cf6] to-[#a78bfa]',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Elena Rodriguez',
    role: 'Head of Engineering',
    bio: 'Engineering leader with deep expertise in cloud architecture and DevOps. Drives technical excellence and team growth.',
    gradient: 'from-[#10b981] to-[#34d399]',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'David Kim',
    role: 'Senior Frontend Developer',
    bio: 'React and Next.js specialist building performant web applications. Passionate about accessibility and modern CSS techniques.',
    gradient: 'from-[#f59e0b] to-[#fbbf24]',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Maya Patel',
    role: 'AI/ML Engineer',
    bio: 'Machine learning expert developing intelligent automation solutions. Specializes in NLP, computer vision, and predictive analytics.',
    gradient: 'from-[#ec4899] to-[#f472b6]',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'James Wilson',
    role: 'Backend Architect',
    bio: 'Database and API specialist building robust backend systems. Expert in Node.js, Python, and cloud infrastructure.',
    gradient: 'from-[#06b6d4] to-[#22d3ee]',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
  {
    name: 'Lisa Thompson',
    role: 'Project Manager',
    bio: 'Agile certified PM ensuring seamless project delivery. Expert in client communication, timeline management, and quality assurance.',
    gradient: 'from-[#f97316] to-[#fb923c]',
    social: { linkedin: '#', twitter: '#', github: '#' }
  },
];

const stats = [
  { value: '25+', label: 'Team Members' },
  { value: '8', label: 'Countries Represented' },
  { value: '150+', label: 'Years Combined Experience' },
  { value: '12', label: 'Industry Awards' },
];

export default function TeamPage() {
  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 px-4 sm:px-6">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.12, 0.2, 0.12] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-1/4 w-[clamp(400px,50vw,600px)] h-[clamp(400px,50vw,600px)] bg-[#2563EB]/15 rounded-full blur-[clamp(100px,15vw,140px)]"
          />
          <motion.div
            animate={{ scale: [1.08, 1, 1.08], opacity: [0.1, 0.16, 0.1] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            className="absolute bottom-1/4 right-1/4 w-[clamp(350px,45vw,500px)] h-[clamp(350px,45vw,500px)] bg-[#2563eb]/10 rounded-full blur-[clamp(100px,15vw,140px)]"
          />
          <div className="absolute inset-0" style={{ backgroundImage: 'var(--grid-pattern)', backgroundSize: 'clamp(60px,8vw,80px) clamp(60px,8vw,80px)' }}></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--bg-primary)_75%)]"></div>
        </div>

        <div className="container-custom mx-auto px-4 sm:px-6 relative z-10 text-center">
          <FadeIn>
            <span className="badge-accent mb-8 inline-flex">
              <Users className="text-[#2563EB]" size={16} />
              Our People
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-[var(--font-display)]" style={{ color: 'var(--text-primary)' }}>
              Meet the <span className="text-gradient">Experts</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
              A talented team of designers, engineers, and strategists passionate about innovation.
              Together, we build powerful digital experiences that drive measurable results.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center">
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

      {/* Team Grid */}
      <section className="py-20 px-4 sm:px-6 sm:py-24 lg:py-28">
        <div className="container-custom mx-auto">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-[var(--font-display)]" style={{ color: 'var(--text-primary)' }}>
              Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Meet the talented individuals who make Zerovex Solutions a trusted technology partner.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <FadeIn key={index} delay={index * 0.08}>
                <div className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl" style={{ backgroundColor: 'var(--surface-card)', border: '1px solid var(--border-color)' }}>
                  {/* Avatar */}
                  <div className={`relative h-48 bg-gradient-to-br ${member.gradient} overflow-hidden`}>
                    <div className="absolute inset-0" style={{ backgroundImage: 'var(--grid-pattern-subtle)', backgroundSize: '32px 32px', opacity: 0.4 }}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full backdrop-blur-sm flex items-center justify-center text-3xl font-bold border-2" style={{ backgroundColor: 'var(--avatar-bg)', color: 'var(--text-primary)', borderColor: 'var(--avatar-border)' }}>
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-1 font-[var(--font-display)]" style={{ color: 'var(--text-primary)' }}>
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium mb-3" style={{ color: 'var(--text-tertiary)' }}>
                      {member.role}
                    </p>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                      {member.bio}
                    </p>

                    {/* Social Icons */}
                    <div className="flex items-center gap-2 pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
                      <a href={member.social.linkedin} className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110" style={{ backgroundColor: 'var(--surface-hover)', color: 'var(--text-secondary)' }}>
                        <LinkIcon size={14} />
                      </a>
                      <a href={member.social.twitter} className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110" style={{ backgroundColor: 'var(--surface-hover)', color: 'var(--text-secondary)' }}>
                        <User size={14} />
                      </a>
                      <a href={member.social.github} className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110" style={{ backgroundColor: 'var(--surface-hover)', color: 'var(--text-secondary)' }}>
                        <Mail size={14} />
                      </a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 sm:py-24 lg:py-28" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-custom mx-auto">
          <FadeIn>
            <div className="rounded-3xl p-6 sm:p-10 lg:p-16 text-center relative overflow-hidden" style={{ backgroundColor: 'var(--surface-elevated)', border: '1px solid var(--border-color)' }}>
              {/* Inner Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#2563EB] to-transparent"></div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-[var(--font-display)]" style={{ color: 'var(--text-primary)' }}>
                Want to <span className="text-gradient">Join</span> Our Team?
              </h2>
              <p className="text-base max-w-2xl mx-auto mb-10" style={{ color: 'var(--text-secondary)' }}>
                We're always looking for talented individuals who share our passion for innovation.
                Check out our open positions or reach out to us directly.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="btn-primary text-sm px-8 py-4 group">
                  Get In Touch
                  <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link href="/about" className="btn-secondary text-sm px-8 py-4">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}


