"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Globe,
  Layers,
  Settings,
  Shield,
  TrendingUp,
  Star,
  Bot,
  ArrowUpRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "@/components/ui/MagneticButton";
import GlassCard from "@/components/ui/GlassCard";

gsap.registerPlugin(ScrollTrigger);

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const staggerContainer = {
  whileInView: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  viewport: { once: true, margin: "-50px" },
};

// Services Data
const services = [
  {
    icon: Brain,
    title: "AI Automation",
    description: "Intelligent automation systems that eliminate repetitive tasks and supercharge your business operations.",
    features: ["Process Automation", "Machine Learning", "Smart Workflows"],
    color: "from-red-500/20 to-red-600/20",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Stunning, high-performance websites that captivate users and drive conversions.",
    features: ["Modern Stack", "Responsive Design", "SEO Optimized"],
    color: "from-blue-500/20 to-cyan-600/20",
  },
  {
    icon: Layers,
    title: "SaaS Development",
    description: "Scalable cloud platforms designed for growth, efficiency, and seamless user experiences.",
    features: ["Cloud Native", "Multi-tenant", "API First"],
    color: "from-purple-500/20 to-pink-600/20",
  },
  {
    icon: Settings,
    title: "Custom Software",
    description: "Bespoke software solutions engineered to solve your unique business challenges.",
    features: ["Tailored Solutions", "Enterprise Grade", "Future-proof"],
    color: "from-orange-500/20 to-yellow-600/20",
  },
];

// Stats Data
const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered", icon: TrendingUp },
  { value: 10, suffix: "+", label: "Automation Systems", icon: Bot },
  { value: 100, suffix: "%", label: "Client Satisfaction", icon: Star },
  { value: 24, suffix: "/7", label: "Support Available", icon: Shield },
];

// Projects Data
const projects = [
  {
    title: "AI Business Automation",
    category: "AI",
    description: "Intelligent workflow automation reducing manual operations by 80%.",
    tags: ["AI", "Python", "Automation"],
    gradient: "from-red-900/80 via-black to-black",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
  },
  {
    title: "Corporate Platform",
    category: "Web",
    description: "Enterprise-grade web application with real-time collaboration.",
    tags: ["Next.js", "React", "TypeScript"],
    gradient: "from-gray-900 via-gray-800 to-black",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "SaaS Analytics Dashboard",
    category: "SaaS",
    description: "Real-time analytics platform processing millions of events daily.",
    tags: ["SaaS", "Node.js", "PostgreSQL"],
    gradient: "from-red-950/60 via-gray-900 to-black",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
];

// Testimonials Data
const testimonials = [
  {
    quote: "Zerovex transformed our entire operation with AI automation. The efficiency gains were immediate and remarkable.",
    author: "Sarah Chen",
    role: "CEO, TechVentures",
    rating: 5,
  },
  {
    quote: "Exceptional quality and professionalism. They delivered our SaaS platform ahead of schedule with outstanding results.",
    author: "Marcus Johnson",
    role: "Founder, InnovateCo",
    rating: 5,
  },
  {
    quote: "The team's expertise in modern technology is unmatched. Our web application exceeded all expectations.",
    author: "Emily Rodriguez",
    role: "CTO, DataFlow Inc",
    rating: 5,
  },
];

// Animated Counter Component
function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = countRef.current;
    if (!el) return;

    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      onEnter: () => {
        gsap.to({ val: 0 }, {
          val: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: function() {
            setCount(Math.floor(this.targets()[0].val));
          }
        });
      },
      once: true
    });
  }, [target]);

  return (
    <div ref={countRef}>
      <span className="text-5xl md:text-6xl font-bold text-white tracking-tighter">
        {count}{suffix}
      </span>
    </div>
  );
}

export default function Home() {
  const heroRef = useRef(null);
  const heroTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.5
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-transparent text-white">
      {/* ==================== CINEMATIC HERO SECTION ==================== */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm font-semibold backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            Empowering the AI Revolution
          </motion.div>

          <div className="overflow-hidden">
            <h1 className="hero-line heading-xl mb-6 leading-[1.05]">
              Engineering the <br />
              <span className="text-gradient">Future of AI</span>
            </h1>
          </div>

          <div className="overflow-hidden mb-12">
            <p className="hero-line mx-auto max-w-2xl text-lg text-gray-400 md:text-xl leading-relaxed">
              We build high-performance AI automation and custom software solutions for the world&apos;s most ambitious companies.
            </p>
          </div>

          <div className="hero-line flex flex-col items-center justify-center gap-6 sm:flex-row">
            <MagneticButton>
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-bold text-black transition-transform hover:scale-105"
              >
                Launch Your Project
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 text-lg font-bold backdrop-blur-md transition-all hover:bg-white/10"
              >
                View Services
              </Link>
            </MagneticButton>
          </div>
        </div>

        {/* Hero Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </section>

      {/* ==================== BENTO GRID SERVICES ==================== */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="mb-20 text-center">
            <motion.h2 variants={fadeInUp} initial="initial" whileInView="whileInView" className="heading-lg mb-4">
              Our <span className="text-gradient">Core Expertise</span>
            </motion.h2>
            <motion.p variants={fadeInUp} initial="initial" whileInView="whileInView" className="mx-auto max-w-2xl text-gray-400">
              Modern engineering meets futuristic design. We deliver scalable solutions across the digital spectrum.
            </motion.p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <GlassCard className="h-full">
                  <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.color} text-white`}>
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">{service.title}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-gray-400">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span key={feature} className="rounded-full bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-300">
                        {feature}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 3D PROJECT SHOWCASE ==================== */}
      <section className="section-padding bg-black/50">
        <div className="container-custom">
          <div className="flex flex-col items-end justify-between gap-6 mb-16 md:flex-row">
            <div className="max-w-xl">
              <h2 className="heading-lg mb-4">Featured <span className="text-gradient">Creations</span></h2>
              <p className="text-gray-400">A showcase of our most recent engineering triumphs in AI and software architecture.</p>
            </div>
            <MagneticButton>
              <Link href="/projects" className="btn-secondary-white">View All Work</Link>
            </MagneticButton>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="group relative h-[500px] overflow-hidden rounded-3xl border border-white/10"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="mb-4 flex gap-2">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase backdrop-blur-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mb-2 text-2xl font-bold">{project.title}</h3>
                  <p className="text-sm text-gray-400 line-clamp-2">{project.description}</p>
                  <Link href="/projects" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-red-500">
                    Explore Case Study <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== DYNAMIC STATS ==================== */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-xl md:p-20">
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
                    <stat.icon className="h-8 w-8" />
                  </div>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  <p className="mt-2 font-bold uppercase tracking-widest text-gray-500 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FINAL CTA ==================== */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <GlassCard className="py-24 text-center border-red-500/30">
            <h2 className="heading-lg mb-8">
              Ready to <span className="text-gradient">Innovate</span>?
            </h2>
            <p className="mx-auto mb-12 max-w-xl text-lg text-gray-400">
              Join the league of forward-thinking companies building the next generation of AI-driven technology.
            </p>
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <MagneticButton>
                <Link href="/contact" className="btn-primary">
                  Start Your Journey
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link href="/about" className="btn-secondary-white">
                  Learn Our Story
                </Link>
              </MagneticButton>
            </div>
          </GlassCard>
        </div>
        {/* Decorative Light Leak */}
        <div className="absolute -right-1/4 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-red-500/10 blur-[120px]" />
      </section>
    </div>
  );
}
