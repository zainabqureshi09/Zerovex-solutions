"use client";

import { useState } from "react";
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
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  whileInView: {
    transition: {
      staggerChildren: 0.12,
    },
  },
  viewport: { once: true },
};

const services = [
  {
    icon: Brain,
    title: "AI Automation",
    description:
      "We build intelligent automation systems that reduce manual work and improve business efficiency.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern, responsive, and high-performance websites built with the latest technologies.",
  },
  {
    icon: Layers,
    title: "SaaS Development",
    description:
      "Custom SaaS platforms designed to scale your business and manage operations efficiently.",
  },
  {
    icon: Settings,
    title: "Business Automation",
    description:
      "Automation tools and systems that streamline workflows and improve productivity.",
  },
];

const reasons = [
  {
    icon: Zap,
    title: "Modern Technology",
    description: "We use the latest technologies to deliver high-quality software and automation solutions.",
  },
  {
    icon: Brain,
    title: "AI Expertise",
    description: "Intelligent automation systems powered by AI to optimize your business processes.",
  },
  {
    icon: TrendingUp,
    title: "Fast Development",
    description: "Rapid project delivery without compromising quality.",
  },
  {
    icon: Users,
    title: "Global Clients",
    description: "Trusted by businesses across multiple industries and countries.",
  },
];

const projects = [
  {
    title: "AI Business Automation System",
    category: "AI",
    description:
      "Automation system designed to streamline business workflows and reduce manual tasks.",
    tags: ["AI", "Python", "Automation"],
    gradient: "from-gray-800 to-black",
  },
  {
    title: "Modern Corporate Website",
    category: "Web",
    description:
      "High-performance responsive website built for a growing business.",
    tags: ["Next.js", "React", "Tailwind"],
    gradient: "from-gray-700 to-gray-900",
  },
  {
    title: "SaaS Management Platform",
    category: "SaaS",
    description:
      "Custom SaaS platform built for managing clients, data, and operations.",
    tags: ["SaaS", "Node.js", "PostgreSQL"],
    gradient: "from-gray-800 to-gray-950",
  },
  {
    title: "AI Data Processing Tool",
    category: "AI",
    description:
      "Tool that uses AI to analyze and process large datasets efficiently.",
    tags: ["AI", "Data", "Machine Learning"],
    gradient: "from-gray-900 to-black",
  },
  {
    title: "E-Commerce Automation Platform",
    category: "Automation",
    description:
      "End-to-end e-commerce solution with automated inventory and order management.",
    tags: ["Automation", "E-Commerce", "API"],
    gradient: "from-gray-700 to-gray-800",
  },
  {
    title: "Client Portal Dashboard",
    category: "SaaS",
    description:
      "Centralized dashboard for client management, reporting, and communication.",
    tags: ["React", "SaaS", "Dashboard"],
    gradient: "from-gray-800 to-gray-900",
  },
];

const testimonials = [
  {
    quote: "Zerovex Solutions transformed our business processes with their AI automation system. Highly recommended!",
    author: "John Smith",
    role: "CEO, TechCorp",
  },
  {
    quote: "The team delivered our SaaS platform on time with excellent quality. Professional and reliable.",
    author: "Maria Lopez",
    role: "Founder, InnovateX",
  },
  {
    quote: "Working with Zerovex was a pleasure. Their expertise in modern software development is unmatched.",
    author: "Ahmed Khan",
    role: "CTO, GlobalBiz",
  },
  {
    quote: "Outstanding work on our web application. The attention to detail and user experience was exceptional.",
    author: "Sarah Chen",
    role: "Director, DataFlow Inc",
  },
  {
    quote: "Zerovex helped us automate our entire workflow. The efficiency gains were immediate and significant.",
    author: "David Park",
    role: "Operations Manager, ScaleUp",
  },
];

const categories = ["All", "AI", "Web", "SaaS", "Automation"];

type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  gradient: string;
};

type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

function ProjectGrid({ projects }: { projects: Project[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Filter Buttons */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
              activeCategory === category
                ? "bg-dark-red text-white shadow-md"
                : "bg-white text-gray-700 shadow-sm hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
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
          transition={{ duration: 0.3 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:border-dark-red/30 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
            >
              {/* Project Image / Thumbnail */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} p-6`}>
                {/* Category Badge */}
                <div className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                  {project.category}
                </div>

                {/* Abstract Visual */}
                <div className="flex h-full items-center justify-center">
                  <div className="grid grid-cols-3 gap-2 opacity-30">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded bg-white/20"
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 text-sm font-medium text-dark-red transition-colors hover:text-dark-red-dark"
                >
                  View Project
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const visibleCount = typeof window !== "undefined" && window.innerWidth >= 1024 ? 3 : 1;
  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div>
      {/* Testimonials Grid with Animation */}
      <div className="overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction * 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {testimonials.slice(currentIndex, currentIndex + visibleCount).map((testimonial, index) => (
              <motion.div
                key={testimonial.author + index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-dark-red/30 hover:shadow-md"
              >
                {/* Top Accent Line */}
                <div className="absolute left-0 top-0 h-1 w-12 bg-dark-red" />

                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-dark-red text-dark-red" />
                  ))}
                </div>

                <blockquote className="mb-6 text-base leading-relaxed text-gray-700">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200 text-lg font-semibold text-dark-red">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-black">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          disabled={currentIndex === 0}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition-all hover:border-dark-red hover:bg-dark-red hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Previous testimonials"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentIndex ? 1 : -1);
                setCurrentIndex(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? "w-8 bg-dark-red" : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial group ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={next}
          disabled={currentIndex >= maxIndex}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition-all hover:border-dark-red hover:bg-dark-red hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
          aria-label="Next testimonials"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black text-white">
        {/* Subtle Background Elements */}
        <div className="pointer-events-none absolute inset-0">
          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
          {/* Gradient Orb */}
          <div className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-dark-red/20 to-transparent blur-3xl" />
          {/* Subtle Red Accent */}
          <div className="absolute bottom-0 left-0 h-1 w-32 bg-dark-red" />
        </div>

        <div className="container-custom relative z-10 py-20 md:py-28 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-dark-red/50 bg-dark-red/10 px-4 py-2 text-sm font-medium text-gray-300"
              >
                <div className="h-2 w-2 rounded-full bg-dark-red" />
                AI & Software Innovation
              </motion.div>

              <h1 className="heading-xl mb-6 leading-tight">
                AI Automation & Modern Software Solutions for Growing Businesses
              </h1>
              
              <p className="text-body mb-10 max-w-xl text-gray-400">
                We build intelligent automation systems, modern websites, and powerful software that help businesses grow faster.
              </p>
              
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="btn-primary group"
                >
                  Start a Project
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/contact"
                  className="btn-secondary-white"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main Visual Container */}
                <div className="relative rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-8 shadow-2xl">
                  {/* Abstract Tech Visual */}
                  <div className="relative aspect-square">
                    {/* Central Circle */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-dark-red to-dark-red-dark shadow-lg shadow-dark-red/30"
                    >
                      <div className="flex h-full w-full items-center justify-center">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white">Z</div>
                          <div className="mt-1 text-xs text-gray-400">Zerovex</div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Orbiting Elements */}
                    {[
                      { angle: 0, icon: "AI", delay: 0.5 },
                      { angle: 60, icon: "Web", delay: 0.6 },
                      { angle: 120, icon: "SaaS", delay: 0.7 },
                      { angle: 180, icon: "Auto", delay: 0.8 },
                      { angle: 240, icon: "Cloud", delay: 0.9 },
                      { angle: 300, icon: "Data", delay: 1.0 },
                    ].map((item, index) => {
                      const angle = (item.angle * Math.PI) / 180;
                      const radius = 120;
                      const x = Math.cos(angle) * radius;
                      const y = Math.sin(angle) * radius;
                      
                      return (
                        <motion.div
                          key={item.angle}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: item.delay }}
                          className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-lg border border-gray-700 bg-gray-800/80 backdrop-blur-sm"
                          style={{
                            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                          }}
                        >
                          <div className="flex h-full w-full items-center justify-center text-xs font-medium text-gray-300">
                            {item.icon}
                          </div>
                        </motion.div>
                      );
                    })}

                    {/* Connection Lines */}
                    <svg className="absolute inset-0 h-full w-full opacity-20">
                      {[0, 60, 120, 180, 240, 300].map((angle) => {
                        const rad = (angle * Math.PI) / 180;
                        const radius = 120;
                        const x = Math.cos(rad) * radius;
                        const y = Math.sin(rad) * radius;
                        
                        return (
                          <line
                            key={angle}
                            x1="50%"
                            y1="50%"
                            x2={`calc(50% + ${x}px)`}
                            y2={`calc(50% + ${y}px)`}
                            stroke="#8B0000"
                            strokeWidth="1"
                          />
                        );
                      })}
                    </svg>
                  </div>
                </div>

                {/* Floating Stats Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="absolute -bottom-6 -left-6 rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 shadow-xl"
                >
                  <div className="text-2xl font-bold text-white">150+</div>
                  <div className="text-xs text-gray-400">Projects Delivered</div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                  className="absolute -right-6 -top-6 rounded-lg border border-dark-red/30 bg-dark-red/10 px-4 py-3 shadow-xl backdrop-blur-sm"
                >
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-xs text-gray-400">Client Satisfaction</div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-16 grid grid-cols-2 gap-8 border-t border-gray-800 pt-12 md:grid-cols-4"
          >
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "50+", label: "Global Clients" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="mb-2 text-3xl font-bold text-white md:text-4xl">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white transition-colors dark:bg-black">
        <div className="container-custom">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <h2 className="heading-lg mb-4 text-black dark:text-white">Our Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We provide modern software and AI-powered solutions that help businesses automate processes and grow faster.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-dark-red/30 hover:shadow-lg"
              >
                {/* Top Accent Line */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-dark-red transition-all duration-300 group-hover:w-full" />

                <div className="flex gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-red-50 text-dark-red transition-colors duration-300 group-hover:bg-dark-red group-hover:text-white">
                      <service.icon className="h-7 w-7" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="mb-3 text-xl font-semibold text-black">
                      {service.title}
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
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

      {/* Why Choose Zerovex */}
      <section className="relative section-padding overflow-hidden bg-white transition-colors dark:bg-black">
        {/* Subtle Background Pattern */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-red-50 opacity-60 blur-3xl" />
          <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-red-50 opacity-40 blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <h2 className="heading-lg mb-4 text-black">Why Choose Zerovex</h2>
            <p className="text-lg text-gray-600">
              Discover why businesses rely on Zerovex Solutions for modern software and AI automation.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-dark-red/30 hover:shadow-lg"
              >
                {/* Left Accent Line */}
                <div className="absolute bottom-0 left-0 top-0 w-1 bg-dark-red opacity-0 transition-all duration-300 group-hover:opacity-100" />

                <div className="flex gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-red-50 text-dark-red transition-all duration-300 group-hover:bg-dark-red group-hover:text-white">
                      <reason.icon className="h-7 w-7" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="mb-3 text-xl font-semibold text-black">
                      {reason.title}
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-gray-200 pt-12"
          >
            {[
              { icon: CheckCircle, text: "Senior Engineers on Every Project" },
              { icon: CheckCircle, text: "Weekly Progress Updates" },
              { icon: CheckCircle, text: "Post-Launch Support" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-gray-700">
                <item.icon className="h-5 w-5 text-dark-red" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio / Projects Section */}
      <section className="section-padding bg-gray-50 transition-colors dark:bg-gray-950">
        <div className="container-custom">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <h2 className="heading-lg mb-4 text-black">Our Projects</h2>
            <p className="text-lg text-gray-600">
              A selection of projects and digital solutions built by Zerovex Solutions.
            </p>
          </motion.div>

          {/* Category Filters */}
          <ProjectGrid projects={projects} />

          {/* Bottom CTA */}
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

      {/* Testimonials Section */}
      <section className="relative section-padding overflow-hidden bg-gray-50 transition-colors dark:bg-gray-950">
        {/* Subtle Background Pattern */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-red-50 opacity-40 blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <h2 className="heading-lg mb-4 text-black">What Our Clients Say</h2>
            <p className="text-lg text-gray-600">
              Hear from businesses who trusted Zerovex Solutions for AI and software solutions.
            </p>
          </motion.div>

          {/* Testimonial Carousel */}
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="heading-lg mb-4">
              Let&apos;s Build Something Extraordinary
            </h2>
            <p className="text-body mb-8 text-gray-300">
              Ready to transform your business with cutting-edge technology?
              Our team is here to turn your vision into reality.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Schedule a Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="mailto:hello@zerovexsolutions.site"
                className="btn-secondary-white"
              >
                hello@zerovexsolutions.site
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
