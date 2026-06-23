"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import MagneticButton from "@/components/ui/MagneticButton";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
};

export default function AboutPage() {
  return (
    <div className="bg-transparent text-white">
      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.whileInView}
            className="mx-auto max-w-4xl"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="h-5 w-5 text-red-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">Our Vision</span>
            </div>
            <h1 className="heading-xl mb-6">Engineering Tomorrow&apos;s <span className="text-gradient">Cognition</span></h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We bridge the gap between cutting-edge AI architecture and enterprise reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-3">
            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
            >
              <GlassCard className="h-full">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-2xl font-bold">Our Mission</h3>
                <p className="leading-relaxed text-gray-400">
                  To democratize access to enterprise-grade technology, enabling businesses of all
                  sizes to leverage AI, automation, and modern software for exponential growth.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              transition={{ delay: 0.1 }}
            >
              <GlassCard className="h-full">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                  <Eye className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-2xl font-bold">Our Vision</h3>
                <p className="leading-relaxed text-gray-400">
                  A world where technology empowers every organization to achieve its full potential,
                  streamline operations, and create machine intelligence that feels human.
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              transition={{ delay: 0.2 }}
            >
              <GlassCard className="h-full">
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="mb-4 text-2xl font-bold">Our Values</h3>
                <p className="leading-relaxed text-gray-400">
                  Systems over syntax. Logic over noise. We believe in building robust, future-proof
                  architectures that deliver measurable, high-impact results.
                </p>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid items-center gap-20 lg:grid-cols-2">
            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
            >
              <h2 className="heading-lg mb-8">The <span className="text-gradient">Zerovex</span> Story</h2>
              <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
                <p>
                  Zerovex Solutions was founded with a singular focus: to solve the most complex business 
                  challenges through intelligent system design.
                </p>
                <p>
                  We saw a digital landscape cluttered with noise and technical debt. Our approach 
                  is different. We prioritize deep logic and architectural integrity, ensuring 
                  that every solution we build is ready for the AI-driven future.
                </p>
                <p>
                  Led by technical visionaries, we transform how organizations think, operate, and scale.
                </p>
                <p>
                  Zero Vex Solutions is an independent startup operating in collaboration with IDN Global and Web Connect.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              transition={{ delay: 0.1 }}
            >
              <GlassCard className="p-10">
                <h3 className="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-white/50">Chronicles</h3>
                <div className="space-y-6">
                  {[
                    { year: "2020", event: "Zerovex Solutions Genesis" },
                    { year: "2021", event: "AI & Automation Paradigm Shift" },
                    { year: "2022", event: "50+ Global Ecosystems Built" },
                    { year: "2023", event: "SaaS Architecture Division Launch" },
                    { year: "2024", event: "150+ Technical Triumphs" },
                    { year: "2025", event: "Intelligent Systems Evolution" },
                  ].map((milestone) => (
                    <div key={milestone.year} className="flex items-center gap-6">
                      <div className="text-sm font-bold text-red-500 w-12">{milestone.year}</div>
                      <div className="h-px flex-1 bg-white/10"></div>
                      <div className="text-sm text-gray-300 font-medium">{milestone.event}</div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ecosystem & Labs */}
      <section className="section-padding bg-black/30">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <h2 className="heading-lg mb-4">Our <span className="text-gradient">Ecosystem Labs</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
              Through our global collaboration with IDN Global and Web Connect, we leverage state-of-the-art server infrastructure and collaborative engineering hubs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "IDN Global Systems",
                role: "Infrastructure Partner",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80",
                desc: "High-performance enterprise cloud servers and high-availability global data nodes."
              },
              {
                title: "Web Connect Hubs",
                role: "Connectivity Partner",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
                desc: "Smart network integrations, dynamic APIs, and high-frequency communication fabrics."
              },
              {
                title: "Zerovex Innovation Labs",
                role: "AI & Automation Center",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&auto=format&fit=crop&q=80",
                desc: "Bespoke AI automation systems, SaaS platform design, and advanced software engineering."
              }
            ].map((lab, idx) => (
              <motion.div
                key={lab.title}
                initial={fadeInUp.initial}
                whileInView={fadeInUp.whileInView}
                viewport={fadeInUp.viewport}
                transition={{ delay: idx * 0.1 }}
                className="group relative h-[380px] overflow-hidden rounded-3xl border border-white/10 hover:border-red-500/30 transition-all duration-300"
              >
                <img
                  src={lab.image}
                  alt={lab.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 w-full text-left">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded-full">
                    {lab.role}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-white">{lab.title}</h3>
                  <p className="mt-2 text-xs text-gray-400 leading-relaxed">{lab.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <GlassCard className="py-20 border-red-500/20">
            <h2 className="heading-lg mb-8">Ready to Build the <span className="text-gradient">Extraordinary</span>?</h2>
            <p className="text-xl mb-12 text-gray-400 max-w-2xl mx-auto">
              Join the ranks of global innovators leveraging our architectural expertise.
            </p>
            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <MagneticButton>
                <Link href="/contact" className="btn-primary">
                  Launch Your Vision
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link href="/team" className="btn-secondary-white">
                  Technical Leadership
                </Link>
              </MagneticButton>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
