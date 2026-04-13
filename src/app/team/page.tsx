"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Twitter, Github, Star, Sparkles, Users, Target, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Helper function for conditional classes
function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true },
};

const team = [
  {
    name: "Ahmed Hassan",
    role: "Lead Web Developer",
    bio: "Builds modern, responsive websites using Next.js and Tailwind CSS. Passionate about clean code and beautiful design.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "ahmed.hassan@zerovexsolutions.site",
    },
  },
  {
    name: "Sara Malik",
    role: "SaaS Engineer",
    bio: "Designs scalable SaaS platforms for business automation. Expert in cloud architecture and microservices.",
    social: {
      linkedin: "#",
      github: "#",
      email: "sara.malik@zerovexsolutions.site",
    },
  },
  {
    name: "Ali Raza",
    role: "AI Engineer",
    bio: "Develops intelligent automation systems and machine learning solutions. Specializes in computer vision and NLP.",
    social: {
      linkedin: "#",
      twitter: "#",
      github: "#",
      email: "ali.raza@zerovexsolutions.site",
    },
  },
  {
    name: "Fatima Khan",
    role: "UI/UX Designer",
    bio: "Creates intuitive and beautiful user experiences for web and mobile apps. Focused on user-centered design principles.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "fatima.khan@zerovexsolutions.site",
    },
  },
  {
    name: "Hassan Ali",
    role: "Backend Developer",
    bio: "Architects robust APIs and database systems for enterprise applications. Expert in Node.js, Python, and cloud infrastructure.",
    social: {
      linkedin: "#",
      github: "#",
      email: "hassan.ali@zerovexsolutions.site",
    },
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
    <div className="bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-dark-red via-red-700 to-black text-white">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10"></div>
        <div className="container-custom relative z-10 py-16 md:py-20">
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.whileInView}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-6 w-6" />
              <span className="text-sm font-medium text-white/90">The Zerovex Team</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              The talented people behind Zerovex Solutions who make innovative software and AI automation possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured CEO Profile */}
      <section className="section-padding bg-gradient-to-br from-red-50 via-white to-red-50 dark:from-red-950/20 dark:via-black dark:to-red-950/20">
        <div className="container-custom">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
          >
            <div className="relative overflow-hidden rounded-2xl border-2 border-dark-red/20 dark:border-dark-red/40 bg-white dark:bg-gray-900 shadow-2xl">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-dark-red/5 to-transparent dark:from-dark-red/10"></div>
              
              <div className="relative p-8 md:p-12">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Left - Photo & Info */}
                  <div className="flex flex-col items-center lg:items-start">
                    <div className="relative mb-6">
                      <div className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-dark-red shadow-xl">
                        <Image
                          src="/zainab.jpg"
                          alt="Zainab Ayaz - CEO & Founder of Zerovex Solutions"
                          width={224}
                          height={224}
                          className="w-full h-full object-cover"
                          priority
                        />
                      </div>
                      {/* CEO Badge */}
                      <div className="absolute -bottom-3 -right-3 bg-dark-red text-white px-4 py-2 rounded-lg shadow-lg">
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="text-sm font-bold">CEO & Founder</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right - Content */}
                  <div className="text-center lg:text-left">
                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                      <Sparkles className="h-5 w-5 text-dark-red" />
                      <span className="text-sm font-semibold text-dark-red uppercase tracking-wide">Founder & CEO</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">
                      Zainab Ayaz
                    </h2>
                    
                    <p className="text-lg font-medium text-dark-red mb-4">
                      CEO, AI Specialist & Full-Stack Developer
                    </p>
                    
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      Passionate full-stack developer and AI enthusiast with a mission to make cutting-edge technology 
                      accessible to businesses worldwide. Leading Zerovex Solutions with expertise in AI automation, 
                      modern web development, and innovative SaaS platforms.
                    </p>

                    {/* Skills/Expertise */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-black dark:text-white uppercase tracking-wide mb-3">
                        Areas of Expertise
                      </h3>
                      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        {["AI/ML", "Full-Stack Development", "Next.js", "Python", "SaaS Platforms", "Automation"].map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 rounded-lg bg-red-50 dark:bg-red-950/30 text-dark-red dark:text-red-400 text-sm font-medium border border-red-200 dark:border-red-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3 justify-center lg:justify-start">
                      <a
                        href="https://github.com/zainabayaz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-900 dark:bg-gray-800 text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                      >
                        <Github className="h-5 w-5" />
                        <span className="text-sm font-medium">GitHub</span>
                      </a>
                      <a
                        href="https://linkedin.com/in/zainabayaz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="text-sm font-medium">LinkedIn</span>
                      </a>
                      <a
                        href="mailto:zainab.ayaz@zerovexsolutions.site"
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-dark-red text-white hover:bg-dark-red-light transition-all duration-300 hover:scale-105"
                      >
                        <Mail className="h-5 w-5" />
                        <span className="text-sm font-medium">Email</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={staggerContainer.viewport}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="doc-card p-6 text-center bg-gray-900 border-gray-800"
              >
                <stat.icon className={cn("h-10 w-10 mx-auto mb-3", stat.color)} />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <h2 className="heading-md mb-4 text-black dark:text-white">Our Culture</h2>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              At Zerovex Solutions, we believe in collaboration, continuous learning, and innovation.
              Our diverse team brings together expertise from across the tech industry, united by a
              shared passion for building exceptional software.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Users,
                title: "Collaboration",
                description: "We work together, share ideas openly, and support each other to deliver outstanding results.",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Sparkles,
                title: "Innovation",
                description: "We constantly explore new technologies and approaches to solve complex challenges.",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: Star,
                title: "Excellence",
                description: "We hold ourselves to the highest standards in every project we deliver.",
                color: "from-yellow-500 to-yellow-600",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className={cn("w-16 h-16 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br", value.color, "text-white shadow-lg group-hover:scale-110 transition-transform duration-300")}>
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">{value.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-gray-50 dark:bg-gray-950">
        <div className="container-custom">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            className="mb-12 text-center"
          >
            <h2 className="heading-md mb-2 text-black dark:text-white">Meet The Team</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Experienced professionals driving innovation and delivering excellence.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={staggerContainer.viewport}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="group rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-sm hover:shadow-xl hover:border-dark-red/30 dark:hover:border-dark-red/50 transition-all duration-300"
              >
                {/* Avatar */}
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900 dark:to-red-950 text-2xl font-bold text-dark-red transition-all duration-300 group-hover:from-dark-red group-hover:to-dark-red group-hover:text-white shadow-md">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <h3 className="mb-1 text-xl font-semibold text-black dark:text-white">{member.name}</h3>
                <div className="mb-4 text-sm font-semibold text-dark-red">{member.role}</div>
                <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400 flex-grow">{member.bio}</p>

                {/* Social Links */}
                <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-gray-800">
                  {member.social.github && (
                    <a
                      href={member.social.github}
                      aria-label={`${member.name} GitHub`}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 transition-all duration-300 hover:border-gray-900 dark:hover:border-gray-600 hover:bg-gray-900 dark:hover:bg-gray-800 hover:text-white hover:scale-110"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      aria-label={`${member.name} LinkedIn`}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 transition-all duration-300 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:scale-110"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      aria-label={`${member.name} Twitter`}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 transition-all duration-300 hover:border-dark-red hover:bg-dark-red hover:text-white hover:scale-110"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      aria-label={`Email ${member.name}`}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 transition-all duration-300 hover:border-dark-red hover:bg-dark-red hover:text-white hover:scale-110"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="section-padding bg-gradient-to-br from-black to-gray-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-6 w-6" />
              <span className="text-sm font-medium text-white/90">Join Our Mission</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Join Our Team</h2>
            <p className="text-xl mb-8 text-gray-300">
              We&apos;re always looking for talented individuals who share our passion for building exceptional technology.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-dark-red text-white font-semibold text-lg hover:bg-dark-red-light transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get in Touch
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
