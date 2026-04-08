"use client";

import { motion } from "framer-motion";
import { ArrowRight, Tag } from "lucide-react";
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
      staggerChildren: 0.12,
    },
  },
  viewport: { once: true },
};

const projects = [
  {
    title: "FinTech Analytics Platform",
    category: "SaaS Development",
    description:
      "Real-time financial analytics dashboard processing millions of transactions daily with predictive insights and automated reporting.",
    tags: ["React", "Node.js", "PostgreSQL", "AWS"],
    metrics: [
      { label: "Daily Transactions", value: "2M+" },
      { label: "Uptime", value: "99.99%" },
      { label: "Load Time", value: "<1s" },
    ],
  },
  {
    title: "Healthcare AI Assistant",
    category: "AI Automation",
    description:
      "Intelligent patient management system reducing administrative workload by 60% while improving patient satisfaction scores.",
    tags: ["Python", "TensorFlow", "FastAPI", "React"],
    metrics: [
      { label: "Admin Time Saved", value: "60%" },
      { label: "Patient Satisfaction", value: "+35%" },
      { label: "Accuracy", value: "97%" },
    ],
  },
  {
    title: "E-Commerce Ecosystem",
    category: "Web Development",
    description:
      "Multi-vendor platform handling 100K+ daily active users with real-time inventory, payments, and logistics integration.",
    tags: ["Next.js", "Stripe", "Redis", "MongoDB"],
    metrics: [
      { label: "Daily Active Users", value: "100K+" },
      { label: "Vendors", value: "5,000+" },
      { label: "Conversion Rate", value: "+42%" },
    ],
  },
  {
    title: "Manufacturing ERP System",
    category: "Business Systems",
    description:
      "Comprehensive enterprise resource planning system streamlining production, inventory, and supply chain operations.",
    tags: ["Angular", ".NET", "SQL Server", "Azure"],
    metrics: [
      { label: "Cost Reduction", value: "28%" },
      { label: "Efficiency Gain", value: "45%" },
      { label: "ROI Timeline", value: "6mo" },
    ],
  },
  {
    title: "Marketing Automation Suite",
    category: "AI Automation",
    description:
      "AI-powered marketing platform with predictive customer segmentation, automated campaigns, and ROI optimization.",
    tags: ["Python", "OpenAI", "React", "Snowflake"],
    metrics: [
      { label: "Campaign ROI", value: "+180%" },
      { label: "Time Saved", value: "25hrs/wk" },
      { label: "Leads Generated", value: "+220%" },
    ],
  },
  {
    title: "EdTech Learning Platform",
    category: "SaaS Development",
    description:
      "Scalable online learning platform with adaptive curriculum, live classes, and AI-powered student progress tracking.",
    tags: ["Next.js", "WebRTC", "PostgreSQL", "Docker"],
    metrics: [
      { label: "Active Students", value: "50K+" },
      { label: "Course Completion", value: "+65%" },
      { label: "NPS Score", value: "72" },
    ],
  },
];

export default function ProjectsPage() {
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
            <h1 className="heading-lg mb-6">Projects That Speak Results</h1>
            <p className="text-body text-gray-300">
              Explore how we&apos;ve helped businesses across industries achieve transformative
              outcomes through innovative technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={staggerContainer.viewport}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                className="project-card"
              >
                <div className="border-b border-gray-200 bg-black p-6">
                  <div className="mb-2 inline-block rounded-full bg-dark-red px-3 py-1 text-xs font-medium text-white">
                    {project.category}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-black">
                    {project.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="mb-4 grid grid-cols-3 gap-2">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded bg-gray-50 p-2 text-center"
                      >
                        <div className="text-sm font-bold text-dark-red">
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-gray-500">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded border border-gray-300 px-2 py-1 text-xs font-medium text-gray-700"
                      >
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center text-sm font-medium text-dark-red hover:underline"
                  >
                    Discuss Similar Project
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="heading-lg mb-4">Have a Project in Mind?</h2>
            <p className="text-body mb-8 text-gray-600">
              Let&apos;s discuss how we can bring your vision to life with the same level of
              excellence and attention to detail.
            </p>
            <Link href="/contact" className="btn-primary">
              Start a Conversation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
