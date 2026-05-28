"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, Github, Sparkles, Users, Target, Heart, Star } from "lucide-react";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const team = [
  {
    name: "Zainab Ayaz",
    role: "CTO & AI Architect",
    image: "/zainab.jpg",
    bio: "Full-Stack Developer, AI Architect, and Intelligent Systems Builder. Driven by the philosophy 'Systems > Syntax', she specializes in building Agentic AI systems, LLMs that reason autonomously, and high-performance products from pixel to protocol. Expert in turning code into cognition.",
    social: {
      linkedin: "https://linkedin.com/in/zainab.tsx",
      github: "https://github.com/zainabqureshi09",
      email: "zainab.cyber.dev@gmail.com",
      twitter: "https://x.com/zainab_0x7",
    },
    expertise: ["Agentic Systems", "LLMs & RAG", "Full-Stack Dev", "Multi-agent Orchestration", "Intelligent Automation"]
  },
];

const stats = [
  { icon: Users, value: "50+", label: "Projects Delivered", color: "text-blue-500" },
  { icon: Target, value: "30+", label: "Global Clients", color: "text-green-500" },
  { icon: Star, value: "100%", label: "Client Satisfaction", color: "text-yellow-500" },
  { icon: Heart, value: "24/7", label: "Support Available", color: "text-red-500" },
];

export default function TeamPage() {
  return (
    <div className="bg-transparent text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.whileInView}
            className="mx-auto max-w-4xl"
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="h-5 w-5 text-red-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">Technical Leadership</span>
            </div>
            <h1 className="heading-xl mb-6">The Visionary behind <span className="text-gradient">Innovation</span></h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Driving the architectural excellence and technological evolution of Zerovex Solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mb-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-xl"
          >
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12 text-center">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-3xl md:text-4xl font-bold mb-1 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="pb-32">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {team.map((member) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-[3rem] border border-white/10 bg-white/5 p-12 md:p-20 backdrop-blur-xl transition-all duration-500 hover:border-red-500/30">
                  <div className="grid gap-16 lg:grid-cols-12 items-start">
                    {/* Left - Large Avatar */}
                    <div className="lg:col-span-5 flex justify-center">
                      <div className="relative h-64 w-64 md:h-80 md:w-80 flex-shrink-0">
                        <div className="h-full w-full rounded-[2rem] overflow-hidden border border-white/10 rotate-3 transition-transform duration-700 group-hover:rotate-0">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={320}
                            height={320}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        {/* Glow effect behind photo */}
                        <div className="absolute -inset-4 -z-10 bg-red-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      </div>
                    </div>

                    {/* Right - Content */}
                    <div className="lg:col-span-7">
                      <div className="mb-8">
                        <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">{member.name}</h3>
                        <div className="text-lg font-bold uppercase tracking-widest text-red-500">{member.role}</div>
                      </div>
                      
                      <p className="text-xl text-gray-400 leading-relaxed mb-10">
                        {member.bio}
                      </p>

                      <div className="mb-10">
                        <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white/50 mb-6">Technical Arsenal</h4>
                        <div className="flex flex-wrap gap-3">
                          {member.expertise.map((skill) => (
                            <span key={skill} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-gray-300">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Social Links */}
                      <div className="flex gap-6 pt-8 border-t border-white/10">
                        {member.social.github && (
                          <a
                            href={member.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white group/link"
                          >
                            <Github className="h-6 w-6" />
                            <span className="text-sm font-bold uppercase tracking-widest">Source Code</span>
                          </a>
                        )}
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
                          >
                            <Linkedin className="h-6 w-6" />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a
                            href={member.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
                          >
                            <Twitter className="h-6 w-6" />
                          </a>
                        )}
                        <a
                          href={`mailto:${member.social.email}`}
                          className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
                        >
                          <Mail className="h-6 w-6" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
