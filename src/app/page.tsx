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
  CheckCircle,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Star,
  ExternalLink,
  Code2,
  PenTool,
  Cpu,
  Bot,
  Sparkles,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

const staggerContainer = {
  whileInView: {
    transition: {
      staggerChildren: 0.15,
    },
  },
  viewport: { once: true, margin: "-50px" },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

// Services Data
const services = [
  {
    icon: Brain,
    title: "AI Automation",
    description:
      "Intelligent automation systems that eliminate repetitive tasks and supercharge your business operations.",
    features: ["Process Automation", "Machine Learning", "Smart Workflows"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Stunning, high-performance websites that captivate users and drive conversions.",
    features: ["Modern Stack", "Responsive Design", "SEO Optimized"],
  },
  {
    icon: Layers,
    title: "SaaS Development",
    description:
      "Scalable cloud platforms designed for growth, efficiency, and seamless user experiences.",
    features: ["Cloud Native", "Multi-tenant", "API First"],
  },
  {
    icon: Settings,
    title: "Custom Software",
    description:
      "Bespoke software solutions engineered to solve your unique business challenges.",
    features: ["Tailored Solutions", "Enterprise Grade", "Future-proof"],
  },
];

// Stats Data
const stats = [
  { value: 50, suffix: "+", label: "Projects Delivered", icon: TrendingUp },
  { value: 10, suffix: "+", label: "Automation Systems", icon: Bot },
  { value: 100, suffix: "%", label: "Client Satisfaction", icon: Star },
  { value: 24, suffix: "/7", label: "Support Available", icon: Shield },
];

// Why Choose Us Data
const reasons = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Rapid development cycles with weekly deliverables and transparent progress tracking.",
  },
  {
    icon: Brain,
    title: "AI-Powered",
    description: "Cutting-edge AI integration that gives your business a competitive advantage.",
  },
  {
    icon: Shield,
    title: "Enterprise Quality",
    description: "Production-grade code with rigorous testing, security, and performance standards.",
  },
  {
    icon: Users,
    title: "Startup Friendly",
    description: "Flexible pricing and scalable solutions designed for growing businesses.",
  },
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
  {
    title: "AI Data Intelligence",
    category: "AI",
    description: "Machine learning system for predictive business analytics.",
    tags: ["AI", "ML", "Data Science"],
    gradient: "from-black via-red-950/40 to-black",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop",
  },
  {
    title: "E-Commerce Automation",
    category: "Automation",
    description: "End-to-end automation for inventory and order management.",
    tags: ["Automation", "API", "E-Commerce"],
    gradient: "from-gray-950 via-red-900/50 to-black",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
  },
  {
    title: "Client Portal System",
    category: "SaaS",
    description: "Centralized client management with automated reporting.",
    tags: ["React", "SaaS", "Dashboard"],
    gradient: "from-black via-gray-900 to-red-950/40",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
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
  {
    quote: "Working with Zerovex was a game-changer. Their AI solutions gave us a significant competitive advantage.",
    author: "David Park",
    role: "Director, ScaleUp Labs",
    rating: 5,
  },
  {
    quote: "From concept to launch, the experience was seamless. They truly understand what modern businesses need.",
    author: "Lisa Thompson",
    role: "VP Operations, GlobalTech",
    rating: 5,
  },
];

// AI Tools Categories
const aiToolCategories = [
  {
    icon: PenTool,
    name: "AI Writing",
    count: 12,
    description: "Content generation & copywriting",
  },
  {
    icon: Code2,
    name: "AI Coding",
    count: 15,
    description: "Code assistance & generation",
  },
  {
    icon: Bot,
    name: "Automation",
    count: 10,
    description: "Workflow & task automation",
  },
  {
    icon: Sparkles,
    name: "AI Design",
    count: 8,
    description: "Visual & UI generation",
  },
];

const categories = ["All", "AI", "Web", "SaaS", "Automation"];

type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  gradient: string;
  image: string;
};

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  rating: number;
};

// Animated Counter Component
function AnimatedCounter({ target, suffix, duration = 2 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, target, duration]);

  return (
    <div ref={ref}>
      <span className="text-5xl md:text-6xl font-bold text-black dark:text-white">
        {count}{suffix}
      </span>
    </div>
  );
}

// Project Card Component
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -12 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-sm transition-all duration-500 hover:shadow-2xl dark:from-gray-900 dark:to-gray-950"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute right-4 top-4 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md border border-white/20">
          {project.category}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:scale-105"
          >
            View Project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-xl dark:bg-gray-900">
      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-1 w-16 bg-gradient-to-r from-dark-red to-red-600" />
      
      {/* Stars */}
      <div className="mb-6 flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-dark-red text-dark-red" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-dark-red/10 to-dark-red/20 text-lg font-bold text-dark-red">
          {testimonial.author.split(" ").map(n => n[0]).join("")}
        </div>
        <div>
          <div className="font-semibold text-black dark:text-white">{testimonial.author}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</div>
        </div>
      </div>
    </div>
  );
}

// Projects Grid Component
function ProjectGrid({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Filter Buttons */}
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
              activeCategory === category
                ? "bg-dark-red text-white shadow-lg shadow-dark-red/30"
                : "bg-white text-gray-700 shadow-sm hover:bg-gray-50 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title + activeCategory} project={project} index={index} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Testimonials Carousel Component
function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;
  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const next = () => setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  return (
    <div>
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {testimonials.slice(currentIndex, currentIndex + visibleCount).map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-300 text-gray-700 transition-all duration-300 hover:border-dark-red hover:bg-dark-red hover:text-white disabled:cursor-not-allowed disabled:opacity-30 dark:border-gray-700 dark:text-gray-300"
          aria-label="Previous testimonials"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        <div className="flex gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? "w-10 bg-dark-red" : "w-2.5 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
              }`}
              aria-label={`Go to testimonial group ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={currentIndex >= maxIndex}
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-300 text-gray-700 transition-all duration-300 hover:border-dark-red hover:bg-dark-red hover:text-white disabled:cursor-not-allowed disabled:opacity-30 dark:border-gray-700 dark:text-gray-300"
          aria-label="Next testimonials"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}

// Main Homepage Component
export default function Home() {
  return (
    <div className="bg-white transition-colors duration-300 dark:bg-black">
      {/* ==================== PREMIUM HERO SECTION ==================== */}
      <section className="relative min-h-screen bg-gradient-to-b from-white via-gray-50 to-white dark:from-black dark:via-gray-950 dark:to-black">
        {/* Animated Background Effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* Animated Grid Lines - Light Mode */}
          <div className="absolute inset-0 opacity-[0.03] dark:opacity-0">
            <motion.div
              animate={{ backgroundPosition: ["0px 0px", "100px 100px"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                backgroundSize: "100px 100px",
              }}
            />
          </div>
          
          {/* Animated Grid Lines - Dark Mode */}
          <div className="absolute inset-0 opacity-0 dark:opacity-[0.04]">
            <motion.div
              animate={{ backgroundPosition: ["0px 0px", "100px 100px"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                backgroundSize: "100px 100px",
              }}
            />
          </div>

          {/* Glowing Orbs - Light Mode */}
          <div className="dark:hidden">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.25, 0.15] 
              }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute -right-40 -top-40 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-red-500/30 to-red-600/20 blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.2, 0.1] 
              }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-red-600/20 to-red-500/15 blur-3xl"
            />
          </div>

          {/* Glowing Orbs - Dark Mode */}
          <div className="hidden dark:block">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3] 
              }}
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              className="absolute -right-40 -top-40 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-dark-red/40 to-red-700/30 blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2] 
              }}
              transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 2 }}
              className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-dark-red/30 to-red-600/20 blur-3xl"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="container-custom relative z-10 py-16 md:py-20 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mx-auto lg:mx-0 mb-6 inline-flex items-center gap-3 rounded-full border border-red-500/30 dark:border-red-400/50 bg-red-50 dark:bg-red-950/30 px-5 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300 backdrop-blur-sm"
              >
                <div className="h-2 w-2 rounded-full bg-red-500 dark:bg-red-400 animate-pulse" />
                AI & Software Innovation
              </motion.div>

              {/* Main Headline with Typing Animation */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <h1 className="heading-xl mb-6 leading-[1.05] text-black dark:text-white">
                  Build Powerful{" "}
                  <motion.span
                    className="inline-block bg-gradient-to-r from-red-600 via-red-500 to-red-600 dark:from-red-400 dark:via-red-500 dark:to-red-400 bg-clip-text text-transparent"
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                    style={{ backgroundSize: "200% 100%" }}
                  >
                    AI & Automation
                  </motion.span>
                  <br />
                  Solutions
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mx-auto lg:mx-0 mb-10 max-w-xl text-lg leading-relaxed text-gray-600 dark:text-gray-400 md:text-xl"
              >
                We design and develop intelligent systems that transform how businesses operate, scale, and succeed.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-500 dark:from-red-500 dark:to-red-400 text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/50 dark:hover:shadow-red-400/50 hover:scale-105"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 dark:from-red-400 dark:to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center gap-2">
                    Start a Project
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-white/5 text-gray-900 dark:text-white font-semibold text-lg backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-red-500 dark:hover:border-red-400 hover:shadow-xl hover:scale-105"
                >
                  <span className="relative flex items-center gap-2">
                    Contact Us
                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 opacity-0 group-hover:opacity-100" />
                  </span>
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-600 dark:text-gray-400"
              >
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-red-500" />
                  <span>Enterprise Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-red-500" />
                  <span>AI-Powered</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-red-500" />
                  <span>Cloud Native</span>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-red-500/10 to-red-600/5 dark:from-red-500/20 dark:to-red-600/10 border border-red-500/20 dark:border-red-400/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Brain className="h-24 w-24 mx-auto text-red-500 dark:text-red-400 mb-4" />
                    <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">AI & Automation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-black dark:to-transparent pointer-events-none" />
      </section>

      {/* ==================== HERO VIDEO SECTION ==================== */}
      <section className="relative w-full overflow-hidden bg-black">
        <div className="relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto max-h-[600px] object-cover"
          >
            <source src="/heroSec.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay gradient for smooth transition */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-black pointer-events-none" />
        </div>
      </section>

      {/* ==================== TRUST / STATS SECTION ==================== */}
      <section className="relative z-20 bg-transparent dark:bg-black">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-10 shadow-xl dark:border-gray-800 dark:from-gray-900 dark:to-gray-950 md:p-14"
          >
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-dark-red/10 text-dark-red">
                    <stat.icon className="h-7 w-7" />
                  </div>
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  <div className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section className="section-padding bg-white dark:bg-black">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <h2 className="heading-lg mb-6 text-black dark:text-white">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-400">
              Modern software and AI-powered solutions that automate processes and accelerate growth.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid gap-6 md:grid-cols-2 lg:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="service-card group"
              >
                <div className="flex flex-col gap-6">
                  {/* Icon */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100 text-dark-red transition-all duration-500 group-hover:from-dark-red group-hover:to-dark-red-dark group-hover:text-white dark:from-red-950/30 dark:to-red-900/20">
                    <service.icon className="h-8 w-8" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="mb-3 text-2xl font-bold text-black dark:text-white">
                      {service.title}
                    </h3>
                    <p className="mb-4 leading-relaxed text-gray-600 dark:text-gray-400">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link href="/services" className="btn-primary inline-flex">
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ==================== WHY CHOOSE US SECTION ==================== */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50 dark:from-black dark:to-gray-950">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <h2 className="heading-lg mb-6 text-black dark:text-white">
              Why Choose <span className="text-gradient">Zerovex</span>
            </h2>
            <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-400">
              Businesses trust us for modern, scalable solutions that deliver real results.
            </p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid gap-6 md:grid-cols-2 lg:gap-8"
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-500 hover:border-dark-red/30 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
              >
                {/* Left Accent */}
                <div className="absolute bottom-0 left-0 top-0 w-1 bg-gradient-to-b from-dark-red to-red-600 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="flex gap-6">
                  {/* Icon */}
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-50 to-red-100 text-dark-red transition-all duration-500 group-hover:from-dark-red group-hover:to-dark-red-dark group-hover:text-white dark:from-red-950/30 dark:to-red-900/20">
                    <reason.icon className="h-8 w-8" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                      {reason.title}
                    </h3>
                    <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-gray-200 pt-12 dark:border-gray-800"
          >
            {[
              { text: "Senior Engineers on Every Project" },
              { text: "Weekly Progress Updates" },
              { text: "Post-Launch Support" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <CheckCircle className="h-6 w-6 text-dark-red" />
                <span className="text-sm font-semibold">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ==================== FEATURED PROJECTS SECTION ==================== */}
      <section className="section-padding bg-gray-50 dark:bg-gray-950">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <h2 className="heading-lg mb-6 text-black dark:text-white">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-400">
              Digital solutions and platforms built by Zerovex Solutions.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <ProjectGrid projects={projects} />

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12 text-center"
          >
            <Link href="/projects" className="btn-primary inline-flex">
              View All Projects
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ==================== AI TOOLS HUB SECTION ==================== */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-dark-red/50 bg-dark-red/10 px-5 py-2 text-sm font-semibold text-gray-300">
                <Sparkles className="h-4 w-4" />
                Coming Soon
              </div>
              
              <h2 className="heading-lg mb-6">
                Free <span className="text-gradient">AI Tools</span> Hub
              </h2>
              
              <p className="mb-8 text-xl leading-relaxed text-gray-400">
                Explore 50+ free AI tools for developers, startups, and businesses. From writing to coding, automation to design.
              </p>

              <Link href="/tools" className="btn-primary group">
                Explore Tools
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>

            {/* Tool Categories Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              {aiToolCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="glass-card rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-black/50 p-6 backdrop-blur-sm"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-dark-red/20 text-dark-red">
                    <category.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">{category.name}</h3>
                  <p className="mb-3 text-sm text-gray-400">{category.description}</p>
                  <div className="text-xs font-semibold text-dark-red">
                    {category.count}+ Tools
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== TESTIMONIALS SECTION ==================== */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black">
        <div className="container-custom">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <h2 className="heading-lg mb-6 text-black dark:text-white">
              What Clients <span className="text-gradient">Say</span>
            </h2>
            <p className="text-xl leading-relaxed text-gray-600 dark:text-gray-400">
              Trusted by businesses worldwide for AI and software excellence.
            </p>
          </motion.div>

          {/* Testimonials */}
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* ==================== FINAL CTA SECTION ==================== */}
      <section className="relative overflow-hidden bg-black py-24 text-white md:py-32 lg:py-40">
        {/* Background Effects */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
          <div className="absolute -right-40 -top-40 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-dark-red/30 to-transparent blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-dark-red/20 to-transparent blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h2 className="heading-lg mb-6">
              Ready to Build Something{" "}
              <span className="text-gradient">Powerful</span>?
            </h2>
            
            <p className="mx-auto mb-10 max-w-2xl text-xl leading-relaxed text-gray-400 md:text-2xl">
              Let&apos;s transform your vision into reality with cutting-edge AI and software solutions.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary group">
                Start Your Project
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link href="/contact" className="btn-secondary-white">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
