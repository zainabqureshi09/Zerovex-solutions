"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

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
    name: "Zainab Ayaz",
    role: "CEO & AI Specialist",
    bio: "Leading AI and software automation projects for global clients.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "zainab.ayaz@zerovexsolutions.site",
    },
  },
  {
    name: "Ahmed Hassan",
    role: "Web Developer",
    bio: "Builds modern, responsive websites using Next.js and Tailwind CSS.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "ahmed.hassan@zerovexsolutions.site",
    },
  },
  {
    name: "Sara Malik",
    role: "SaaS Engineer",
    bio: "Designs scalable SaaS platforms for business automation.",
    social: {
      linkedin: "#",
      email: "sara.malik@zerovexsolutions.site",
    },
  },
  {
    name: "Ali Raza",
    role: "AI Engineer",
    bio: "Develops intelligent automation systems and machine learning solutions.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "ali.raza@zerovexsolutions.site",
    },
  },
  {
    name: "Fatima Khan",
    role: "UI/UX Designer",
    bio: "Creates intuitive and beautiful user experiences for web and mobile apps.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "fatima.khan@zerovexsolutions.site",
    },
  },
  {
    name: "Hassan Ali",
    role: "Backend Developer",
    bio: "Architects robust APIs and database systems for enterprise applications.",
    social: {
      linkedin: "#",
      email: "hassan.ali@zerovexsolutions.site",
    },
  },
];

export default function TeamPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-black text-white">
        <div className="container-custom section-padding">
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.whileInView}
            className="mx-auto max-w-3xl"
          >
            <h1 className="heading-lg mb-6">Meet Our Team</h1>
            <p className="text-body text-gray-300">
              The talented people behind Zerovex Solutions who make innovative software and AI automation possible.
            </p>
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
            <h2 className="heading-md mb-4 text-black">Our Culture</h2>
            <p className="text-lg leading-relaxed text-gray-600">
              At Zerovex Solutions, we believe in collaboration, continuous learning, and innovation. 
              Our diverse team brings together expertise from across the tech industry, united by a 
              shared passion for building exceptional software that makes a real difference for our clients.
            </p>
          </motion.div>

          {/* Values */}
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Collaboration",
                description: "We work together, share ideas openly, and support each other to deliver outstanding results.",
              },
              {
                title: "Innovation",
                description: "We constantly explore new technologies and approaches to solve complex challenges.",
              },
              {
                title: "Excellence",
                description: "We hold ourselves to the highest standards in every project we deliver.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-dark-red">
                  <div className="h-3 w-3 rounded-full bg-dark-red" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-black">{value.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            className="mb-12"
          >
            <h2 className="heading-md mb-2 text-black">The People Behind Zerovex</h2>
            <p className="text-gray-600">
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
                whileHover={{ y: -4 }}
                className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-dark-red/30 hover:shadow-md"
              >
                {/* Avatar */}
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200 text-2xl font-bold text-dark-red transition-all duration-300 group-hover:from-dark-red group-hover:to-dark-red group-hover:text-white">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>

                <h3 className="mb-1 text-lg font-semibold text-black">{member.name}</h3>
                <div className="mb-3 text-sm font-medium text-dark-red">{member.role}</div>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">{member.bio}</p>

                {/* Social Links */}
                <div className="flex gap-2">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      aria-label={`${member.name} LinkedIn`}
                      className="flex h-9 w-9 items-center justify-center rounded border border-gray-300 text-gray-600 transition-colors hover:border-dark-red hover:bg-dark-red hover:text-white"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      aria-label={`${member.name} Twitter`}
                      className="flex h-9 w-9 items-center justify-center rounded border border-gray-300 text-gray-600 transition-colors hover:border-dark-red hover:bg-dark-red hover:text-white"
                    >
                      <Twitter className="h-4 w-4" />
                    </a>
                  )}
                  {member.social.email && (
                    <a
                      href={`mailto:${member.social.email}`}
                      aria-label={`Email ${member.name}`}
                      className="flex h-9 w-9 items-center justify-center rounded border border-gray-300 text-gray-600 transition-colors hover:border-dark-red hover:bg-dark-red hover:text-white"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="heading-lg mb-4">Join Our Team</h2>
            <p className="text-body mb-8 text-gray-300">
              We&apos;re always looking for talented individuals who share our passion for building exceptional technology.
            </p>
            <Link href="/contact" className="btn-primary inline-flex">
              Get in Touch
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
