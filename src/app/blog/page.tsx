'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowUpRight,
  Search,
  TrendingUp,
  Brain,
  Code,
  Zap,
  ChevronRight,
} from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Posts', icon: BookOpen },
  { id: 'ai', label: 'AI & ML', icon: Brain },
  { id: 'automation', label: 'Automation', icon: Zap },
  { id: 'web-dev', label: 'Web Dev', icon: Code },
];

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI Automation in Business Operations',
    excerpt: 'Explore how artificial intelligence is revolutionizing business processes, from workflow automation to predictive analytics and decision-making systems.',
    category: 'ai',
    categoryLabel: 'AI & ML',
    date: 'Apr 1, 2026',
    readTime: '8 min read',
    gradient: 'from-[#2563EB] to-[#3B82F6]',
    featured: true,
    slug: 'future-of-ai-automation',
  },
  {
    id: 2,
    title: 'Building Scalable SaaS Platforms with Next.js 15',
    excerpt: 'A comprehensive guide to architecting modern SaaS applications using the latest Next.js features, including server actions and partial prerendering.',
    category: 'web-dev',
    categoryLabel: 'Web Dev',
    date: 'Mar 28, 2026',
    readTime: '12 min read',
    gradient: 'from-[#8B5CF6] to-[#A78BFA]',
    featured: false,
    slug: 'scalable-saas-nextjs',
  },
  {
    id: 3,
    title: 'Workflow Automation: 10 Processes You Should Automate Today',
    excerpt: 'Discover the most impactful business processes that can be automated immediately to save time, reduce errors, and scale your operations efficiently.',
    category: 'automation',
    categoryLabel: 'Automation',
    date: 'Mar 22, 2026',
    readTime: '6 min read',
    gradient: 'from-[#22C55E] to-[#4ADE80]',
    featured: false,
    slug: 'workflow-automation-processes',
  },
  {
    id: 4,
    title: 'Machine Learning Models for Predictive Analytics',
    excerpt: 'Learn how to implement machine learning models that forecast trends, predict user behavior, and drive data-informed business decisions.',
    category: 'ai',
    categoryLabel: 'AI & ML',
    date: 'Mar 15, 2026',
    readTime: '10 min read',
    gradient: 'from-[#F59E0B] to-[#FBBF24]',
    featured: false,
    slug: 'ml-predictive-analytics',
  },
  {
    id: 5,
    title: 'The Complete Guide to API Design and Integration',
    excerpt: 'Master the principles of RESTful API design, GraphQL implementation, and third-party integrations for modern web applications.',
    category: 'web-dev',
    categoryLabel: 'Web Dev',
    date: 'Mar 10, 2026',
    readTime: '15 min read',
    gradient: 'from-[#EC4899] to-[#F472B6]',
    featured: false,
    slug: 'api-design-integration-guide',
  },
  {
    id: 6,
    title: 'How RPA is Transforming Enterprise Operations',
    excerpt: 'Robotic Process Automation is changing how enterprises operate. Learn about the latest RPA tools, strategies, and implementation best practices.',
    category: 'automation',
    categoryLabel: 'Automation',
    date: 'Mar 5, 2026',
    readTime: '7 min read',
    gradient: 'from-[#06B6D4] to-[#22D3EE]',
    featured: false,
    slug: 'rpa-enterprise-operations',
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 px-4 sm:px-6">
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
            <span className="badge-gold mb-8 inline-flex">
              <BookOpen className="text-[#EAB308]" size={16} />
              Knowledge Hub
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-[var(--font-display)]" style={{ color: 'var(--text-primary)' }}>
              Insights & <span className="text-gradient-gold">Expertise</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10" style={{ color: 'var(--text-secondary)' }}>
              Deep dives into AI, automation, and modern web development.
              Stay ahead with actionable insights from our engineering team.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16 px-4 sm:px-6">
          <div className="container-custom mx-auto">
            <FadeIn>
              <div className="flex items-center gap-2 mb-8">
                <TrendingUp size={18} className="text-[#EAB308]" />
                <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: 'var(--text-primary)' }}>Featured Article</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <Link href={`/blog/${featuredPost.slug}`} className="group block rounded-3xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--surface-card)' }}>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image Placeholder */}
                  <div className={`relative h-64 lg:h-auto bg-gradient-to-br ${featuredPost.gradient} overflow-hidden`}>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:32px_32px]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-2xl backdrop-blur-sm bg-white/10 flex items-center justify-center">
                        <Brain size={40} className="text-white" />
                      </div>
                    </div>
                    <div className="absolute top-6 left-6">
                      <span className="badge-gold text-xs">{featuredPost.categoryLabel}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 font-[var(--font-display)] group-hover:text-[#2563EB] transition-colors" style={{ color: 'var(--text-primary)' }}>
                      {featuredPost.title}
                    </h2>
                    <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--text-secondary)' }}>
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-4 mb-6 text-sm" style={{ color: 'var(--text-tertiary)' }}>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} />
                        {featuredPost.date}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock size={14} />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[#2563EB] font-medium">
                      Read Article <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 border-y" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-custom mx-auto">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat, i) => (
              <button
                key={cat.id}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                  i === 0
                    ? 'bg-[#2563EB] text-white shadow-[0_4px_16px_rgba(37,99,235,0.3)]'
                    : 'border hover:border-[#2563EB]/40'
                }`}
                style={i === 0 ? {} : { borderColor: 'var(--border-color)', color: 'var(--text-secondary)', backgroundColor: 'var(--surface-card)' }}
              >
                <cat.icon size={14} />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 px-4 sm:px-6">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <FadeIn key={post.id} delay={index * 0.08}>
                <Link href={`/blog/${post.slug}`} className="group block rounded-2xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--surface-card)' }}>
                  {/* Image Placeholder */}
                  <div className={`relative h-48 bg-gradient-to-br ${post.gradient} overflow-hidden`}>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-xl backdrop-blur-sm bg-white/10 flex items-center justify-center">
                        {post.category === 'ai' && <Brain size={28} className="text-white" />}
                        {post.category === 'automation' && <Zap size={28} className="text-white" />}
                        {post.category === 'web-dev' && <Code size={28} className="text-white" />}
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                        {post.categoryLabel}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold mb-3 font-[var(--font-display)] line-clamp-2 group-hover:text-[#2563EB] transition-colors" style={{ color: 'var(--text-primary)' }}>
                      {post.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4 line-clamp-3 flex-grow" style={{ color: 'var(--text-secondary)' }}>
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'var(--border-color)' }}>
                      <div className="flex items-center gap-3 text-xs" style={{ color: 'var(--text-tertiary)' }}>
                        <div className="flex items-center gap-1">
                          <Calendar size={12} />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          {post.readTime}
                        </div>
                      </div>
                      <ChevronRight size={16} className="text-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {/* Load More */}
          <FadeIn className="text-center mt-12">
            <button className="btn-secondary inline-flex items-center gap-2">
              Load More Articles
              <ChevronRight size={16} />
            </button>
          </FadeIn>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 sm:px-6" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container-custom mx-auto">
          <FadeIn>
            <div className="rounded-3xl p-8 sm:p-12 lg:p-16 text-center relative overflow-hidden" style={{ backgroundColor: 'var(--surface-elevated)', border: '1px solid var(--border-color)' }}>
              {/* Gold Top Accent */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#EAB308] to-transparent"></div>

              <div className="relative z-10">
                <span className="badge-gold mb-6 inline-flex">
                  <Calendar size={14} />
                  Stay Updated
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-[var(--font-display)]" style={{ color: 'var(--text-primary)' }}>
                  Subscribe to Our <span className="text-gradient-gold">Newsletter</span>
                </h2>
                <p className="text-base max-w-xl mx-auto mb-10" style={{ color: 'var(--text-secondary)' }}>
                  Get the latest insights on AI, automation, and web development delivered to your inbox weekly.
                </p>

                {/* Email Form */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="input-premium sm:flex-1"
                  />
                  <button className="btn-primary whitespace-nowrap group">
                    Subscribe
                    <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
                <p className="text-xs mt-4" style={{ color: 'var(--text-tertiary)' }}>
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Ad Placement - Google AdSense */}
      <section className="py-12 px-4 sm:px-6">
        <div className="container-custom mx-auto">
          <FadeIn>
            <div className="rounded-2xl border-2 border-dashed p-8 text-center" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--surface-card)' }}>
              <p className="text-sm font-medium" style={{ color: 'var(--text-muted)' }}>
                Advertisement
              </p>
              {/* Google AdSense Ad Unit */}
              <ins
                className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-9242974125438337"
                data-ad-slot="YOUR_AD_SLOT_ID"
                data-ad-format="auto"
                data-full-width-responsive="true"
              />
              <p className="text-xs mt-1" style={{ color: 'var(--text-tertiary)' }}>
                Google AdSense
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
