'use client';

import Link from 'next/link';
import {
  Code,
  Smartphone,
  Palette,
  Brain,
  Workflow,
  Monitor,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Zap,
  Layers,
  Shield,
  Clock,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';

const services = [
  {
    id: 'web-development',
    icon: Monitor,
    title: 'Website Development',
    description: 'We craft premium, high-converting websites that captivate your audience and drive measurable business results. From landing pages to complex multi-page sites, we deliver excellence.',
    features: [
      'Custom responsive design',
      'SEO optimization',
      'Performance optimization',
      'CMS integration',
      'Analytics setup',
      'A/B testing ready',
    ],
    gradient: 'from-[#ff1f3d] to-[#ff3d57]',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'WordPress', 'Sanity'],
  },
  {
    id: 'web-applications',
    icon: Code,
    title: 'Web Application Development',
    description: 'Scalable, secure, and performant web applications built with cutting-edge technologies. We transform complex business requirements into elegant digital solutions.',
    features: [
      'Custom web applications',
      'API development',
      'Database architecture',
      'Real-time functionality',
      'Authentication & security',
      'Scalable infrastructure',
    ],
    gradient: 'from-[#2563eb] to-[#3b82f6]',
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'MongoDB', 'GraphQL'],
  },
  {
    id: 'mobile-apps',
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile experiences that users love. We build apps that are fast, intuitive, and designed for maximum engagement.',
    features: [
      'iOS & Android development',
      'Cross-platform solutions',
      'UI/UX design',
      'App store optimization',
      'Push notifications',
      'Offline functionality',
    ],
    gradient: 'from-[#8b5cf6] to-[#a78bfa]',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Expo'],
  },
  {
    id: 'graphic-design',
    icon: Palette,
    title: 'Brand Design & Identity',
    description: 'Compelling visual identities that communicate your brand story and resonate with your target audience. We create designs that leave lasting impressions.',
    features: [
      'Brand identity design',
      'Logo creation',
      'Marketing materials',
      'Social media graphics',
      'Brand guidelines',
      'Visual strategy',
    ],
    gradient: 'from-[#10b981] to-[#34d399]',
    technologies: ['Figma', 'Adobe Creative Suite', 'Sketch', 'Illustrator', 'Photoshop', 'After Effects'],
  },
  {
    id: 'ai-automation',
    icon: Brain,
    title: 'AI Solutions & Automation',
    description: 'Intelligent automation solutions powered by artificial intelligence. Streamline operations, reduce costs, and unlock new capabilities with AI-driven innovation.',
    features: [
      'Chatbot development',
      'Machine learning models',
      'Natural language processing',
      'Computer vision',
      'Predictive analytics',
      'Process automation',
    ],
    gradient: 'from-[#f59e0b] to-[#fbbf24]',
    technologies: ['OpenAI', 'TensorFlow', 'PyTorch', 'LangChain', 'Python', 'Hugging Face'],
  },
  {
    id: 'process-automation',
    icon: Workflow,
    title: 'Business Process Automation',
    description: 'Streamline your operations with custom workflow automation. We eliminate manual tasks, reduce errors, and accelerate your business processes.',
    features: [
      'Workflow analysis',
      'Custom automation scripts',
      'Integration development',
      'Data pipeline automation',
      'Reporting dashboards',
      'Process monitoring',
    ],
    gradient: 'from-[#ec4899] to-[#f472b6]',
    technologies: ['Zapier', 'Make', 'n8n', 'Airtable', 'Custom APIs', 'Webhooks'],
  },
];

const processSteps = [
  { step: '01', title: 'Discovery', description: 'Understanding your vision, goals, and requirements through in-depth consultation.' },
  { step: '02', title: 'Strategy', description: 'Crafting a detailed roadmap with clear milestones and deliverables.' },
  { step: '03', title: 'Design', description: 'Creating intuitive, beautiful user experiences through iterative prototyping.' },
  { step: '04', title: 'Development', description: 'Building robust, scalable solutions with clean, maintainable code.' },
  { step: '05', title: 'Launch', description: 'Deploying and optimizing for peak performance with ongoing support.' },
];

export default function ServicesPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#ff1f3d]/15 rounded-full blur-[140px]"
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.12, 0.2, 0.12] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#2563eb]/10 rounded-full blur-[140px]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, var(--bg-secondary) 70%)' }}></div>
        </div>

        <div className="container-custom mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <span className="badge-accent mb-8 inline-flex">
              <Zap className="text-[#ff1f3d]" size={16} />
              What We Do Best
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 font-[var(--space-grotesk)]">
              Our <span className="text-gradient">Services</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Comprehensive digital solutions designed to transform your business
              and accelerate your growth in the digital landscape.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto space-y-32">
          {services.map((service, index) => (
            <FadeIn key={service.id}>
              <div
                id={service.id}
                className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-5 mb-7">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                      <service.icon size={30} className="text-white" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-[var(--space-grotesk)]">{service.title}</h2>
                  </div>
                  <p className="text-lg leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid sm:grid-cols-2 gap-5 mb-10">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 size={20} className="text-[#ff1f3d] shrink-0" />
                        <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-10">
                    <h4 className="text-sm font-semibold mb-4 uppercase tracking-wider" style={{ color: 'var(--text-tertiary)' }}>Technologies</h4>
                    <div className="flex flex-wrap gap-2.5">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 rounded-xl glass-subtle text-sm" style={{ color: 'var(--text-secondary)' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link href="/contact" className="btn-primary inline-flex items-center gap-2.5 group">
                    Get Started <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>

                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`relative h-96 rounded-3xl bg-gradient-to-br ${service.gradient} overflow-hidden shadow-2xl`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>

                    {/* Floating Elements */}
                    <div className="absolute top-8 left-8 glass rounded-xl px-5 py-3 flex items-center gap-2.5">
                      <Shield size={18} className="text-[#ff1f3d]" />
                      <span className="text-white text-sm font-medium">Secure</span>
                    </div>
                    <div className="absolute bottom-8 right-8 glass rounded-xl px-5 py-3 flex items-center gap-2.5">
                      <Zap size={18} className="text-[#f59e0b]" />
                      <span className="text-white text-sm font-medium">Fast</span>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass rounded-2xl px-8 py-5">
                      <Layers size={36} className="text-white mb-2 mx-auto" />
                      <span className="text-white text-sm font-medium">Scalable</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-custom mx-auto">
          <FadeIn className="text-center mb-20">
            <span className="badge-accent mb-6 inline-flex">
              <Layers size={16} />
              Our Process
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-[var(--space-grotesk)]">
              How We <span className="text-gradient">Work</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              A proven methodology refined over hundreds of successful projects.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="card-premium text-center relative group">
                  <div className="w-18 h-18 rounded-full bg-gradient-to-br from-[#ff1f3d] to-[#ff3d57] flex items-center justify-center text-white font-bold mx-auto mb-5 shadow-lg group-hover:shadow-[0_0_30px_rgba(225,29,72,0.4)] transition-shadow duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 font-[var(--space-grotesk)]">{step.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>{step.description}</p>

                  {/* Arrow (except last) */}
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-[#ff1f3d]/30" size={20} />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <FadeIn>
            <div className="glass-strong rounded-[32px] p-14 md:p-20 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#ff1f3d] to-transparent"></div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 font-[var(--space-grotesk)]">
                Ready to <span className="text-gradient">Start</span>?
              </h2>
              <p className="text-lg max-w-2xl mx-auto mb-12" style={{ color: 'var(--text-secondary)' }}>
                Let's discuss your project and explore how our services can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
                <Link href="/contact" className="btn-primary text-base px-12 py-5 flex items-center gap-2.5 group">
                  Start Your Project <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link href="/projects" className="btn-secondary text-base px-12 py-5">
                  View Our Work
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
