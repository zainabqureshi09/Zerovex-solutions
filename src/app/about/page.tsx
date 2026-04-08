"use client";

import { motion } from "framer-motion";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function AboutPage() {
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
            <h1 className="heading-lg mb-6">Building Tomorrow's Technology Today</h1>
            <p className="text-body text-gray-300">
              We&apos;re a team of engineers, designers, and strategists passionate about creating
              software that transforms businesses and delights users worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-3">
            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              className="rounded-lg border border-gray-200 p-6"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded bg-red-50 text-dark-red">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-black">Our Mission</h3>
              <p className="leading-relaxed text-gray-600">
                To democratize access to enterprise-grade technology, enabling businesses of all
                sizes to leverage AI, automation, and modern software for growth and innovation.
              </p>
            </motion.div>

            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              transition={{ delay: 0.1 }}
              className="rounded-lg border border-gray-200 p-6"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded bg-red-50 text-dark-red">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-black">Our Vision</h3>
              <p className="leading-relaxed text-gray-600">
                A world where technology empowers every organization to achieve its full potential,
                streamline operations, and create exceptional value for their customers.
              </p>
            </motion.div>

            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              transition={{ delay: 0.2 }}
              className="rounded-lg border border-gray-200 p-6"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded bg-red-50 text-dark-red">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-black">Our Values</h3>
              <p className="leading-relaxed text-gray-600">
                Integrity, innovation, and impact guide every decision we make. We believe in
                transparent partnerships and delivering measurable results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
            >
              <h2 className="heading-lg mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  Zerovex Solutions was founded with a clear vision: to bridge the gap between
                  cutting-edge technology and real business needs. We saw too many organizations
                  struggling with outdated systems and manual processes that held them back.
                </p>
                <p className="leading-relaxed">
                  Today, we&apos;re proud to serve clients across the globe, delivering AI-powered
                  automation, scalable SaaS platforms, and custom software solutions that drive
                  measurable results.
                </p>
                <p className="leading-relaxed">
                  Our team of senior engineers, designers, and strategists brings decades of
                  combined experience from leading tech companies.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              transition={{ delay: 0.1 }}
              className="rounded-lg border border-gray-200 bg-white p-8"
            >
              <h3 className="mb-6 text-xl font-semibold text-black">Key Milestones</h3>
              <div className="space-y-4">
                {[
                  { year: "2020", event: "Zerovex Solutions founded" },
                  { year: "2021", event: "Expanded AI & Automation services" },
                  { year: "2022", event: "Reached 50+ global clients" },
                  { year: "2023", event: "Launched SaaS development division" },
                  { year: "2024", event: "150+ projects delivered" },
                  { year: "2025", event: "Opened international operations" },
                ].map((milestone) => (
                  <div key={milestone.year} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded bg-dark-red text-sm font-bold text-white">
                      {milestone.year.slice(-2)}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-dark-red">{milestone.year}</div>
                      <div className="text-sm text-gray-700">{milestone.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="heading-lg mb-4">Want to Join Our Journey?</h2>
            <p className="text-body mb-8 text-gray-300">
              Whether you&apos;re looking for a technology partner or want to explore how we can
              transform your business, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Get in Touch
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/team" className="btn-secondary-white">
                Meet Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
