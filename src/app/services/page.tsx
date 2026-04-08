"use client";

import { motion } from "framer-motion";
import { Brain, Globe, Layers, Settings, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const services = [
  {
    id: "ai-automation",
    icon: Brain,
    title: "AI Automation",
    description:
      "Harness the power of artificial intelligence to automate complex workflows, reduce manual effort, and unlock actionable insights from your data.",
    features: [
      "Intelligent process automation",
      "Natural language processing solutions",
      "Predictive analytics & forecasting",
      "Computer vision applications",
      "Custom AI model development",
    ],
  },
  {
    id: "web-development",
    icon: Globe,
    title: "Web Development",
    description:
      "Build modern, scalable web applications with cutting-edge frameworks, optimized performance, and exceptional user experiences.",
    features: [
      "Custom web application development",
      "Progressive web apps (PWA)",
      "E-commerce platforms",
      "API development & integration",
      "Performance optimization",
    ],
  },
  {
    id: "saas-development",
    icon: Layers,
    title: "SaaS Development",
    description:
      "Design, build, and scale Software-as-a-Service products with robust architecture, seamless integrations, and subscription management.",
    features: [
      "Multi-tenant architecture",
      "Subscription & billing systems",
      "User authentication & authorization",
      "Analytics & reporting dashboards",
      "Scalable cloud infrastructure",
    ],
  },
  {
    id: "business-systems",
    icon: Settings,
    title: "Business Automation Solutions",
    description:
      "Streamline operations with custom enterprise systems that optimize workflows, reduce costs, and improve team productivity.",
    features: [
      "Workflow automation",
      "ERP system development",
      "Custom CRM solutions",
      "Business intelligence dashboards",
      "Legacy system modernization",
    ],
  },
];

export default function ServicesPage() {
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
            <h1 className="heading-lg mb-6">Solutions That Scale With You</h1>
            <p className="text-body text-gray-300">
              From AI-powered automation to enterprise SaaS platforms, we deliver technology
              that transforms how you operate, compete, and grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <div>
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`section-padding ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
          >
            <div className="container-custom">
              <motion.div
                initial={fadeInUp.initial}
                whileInView={fadeInUp.whileInView}
                viewport={fadeInUp.viewport}
                className="grid gap-12 lg:grid-cols-2"
              >
                <div>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded bg-dark-red text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h2 className="heading-md mb-4 text-black">{service.title}</h2>
                  <p className="mb-6 text-base leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                  <Link href="/contact" className="btn-primary">
                    Get Started
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6">
                  <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-black">
                    What&apos;s Included
                  </h3>
                  <div className="space-y-3">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-dark-red" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        ))}
      </div>

      {/* CTA */}
      <section className="section-padding bg-black text-white">
        <div className="container-custom">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="heading-lg mb-4">Ready to Get Started?</h2>
            <p className="text-body mb-8 text-gray-300">
              Let&apos;s discuss your project and explore how our services can accelerate your growth.
            </p>
            <Link href="/contact" className="btn-primary">
              Contact Our Team
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
