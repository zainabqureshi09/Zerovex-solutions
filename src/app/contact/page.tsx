"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Clock, MapPin, Send, CheckCircle } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", company: "", service: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email for detailed inquiries",
      value: "hello@zerovexsolutions.site",
      href: "mailto:hello@zerovexsolutions.site",
    },
    {
      icon: Clock,
      title: "Response Time",
      description: "We typically respond within",
      value: "24 hours",
      href: "#",
    },
    {
      icon: MapPin,
      title: "Global Operations",
      description: "Serving clients",
      value: "Worldwide",
      href: "#",
    },
  ];

  return (
    <div className="bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero */}
      <section className="bg-black text-white">
        <div className="container-custom section-padding">
          <motion.div
            initial={fadeInUp.initial}
            animate={fadeInUp.whileInView}
            className="mx-auto max-w-3xl"
          >
            <h1 className="heading-lg mb-6">Let&apos;s Start a Conversation</h1>
            <p className="text-body text-gray-300">
              Have a project in mind or questions about our services? We&apos;re here to help
              you explore the possibilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding -mt-10">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-3">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={fadeInUp.initial}
                whileInView={fadeInUp.whileInView}
                viewport={fadeInUp.viewport}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg border border-gray-200 bg-white p-6 transition-colors dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded bg-red-50 text-dark-red dark:bg-dark-red/10">
                  <method.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-1 text-lg font-semibold text-black dark:text-white">{method.title}</h3>
                <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">{method.description}</p>
                <a
                  href={method.href}
                  className="text-base font-semibold text-dark-red"
                >
                  {method.value}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-gray-50 dark:bg-gray-950">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              className="mb-8"
            >
              <h2 className="heading-md mb-2 text-black dark:text-white">Tell Us About Your Project</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>
            </motion.div>

            <motion.div
              initial={fadeInUp.initial}
              whileInView={fadeInUp.whileInView}
              viewport={fadeInUp.viewport}
              className="rounded-lg border border-gray-200 bg-white p-8 transition-colors dark:border-gray-800 dark:bg-gray-900"
            >
              {submitted ? (
                <div className="rounded-lg bg-green-50 p-8 text-center dark:bg-green-900/20">
                  <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-600 dark:text-green-400" />
                  <h3 className="mb-2 text-xl font-semibold text-green-900 dark:text-green-300">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700 dark:text-green-400">
                    Thank you for reaching out. Our team will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-black dark:text-white">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-500 transition-colors focus:border-dark-red focus:outline-none focus:ring-2 focus:ring-dark-red/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-black dark:text-white">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-500 transition-colors focus:border-dark-red focus:outline-none focus:ring-2 focus:ring-dark-red/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label htmlFor="company" className="mb-2 block text-sm font-medium text-black dark:text-white">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-500 transition-colors focus:border-dark-red focus:outline-none focus:ring-2 focus:ring-dark-red/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="mb-2 block text-sm font-medium text-black dark:text-white">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-black transition-colors focus:border-dark-red focus:outline-none focus:ring-2 focus:ring-dark-red/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                      >
                        <option value="">Select a service</option>
                        <option value="ai-automation">AI Automation</option>
                        <option value="web-development">Web Development</option>
                        <option value="saas-development">SaaS Development</option>
                        <option value="business-systems">Business Systems</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-black dark:text-white">
                      Project Details <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-black placeholder-gray-500 transition-colors focus:border-dark-red focus:outline-none focus:ring-2 focus:ring-dark-red/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500"
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="h-5 w-5 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timezone Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={fadeInUp.initial}
            whileInView={fadeInUp.whileInView}
            viewport={fadeInUp.viewport}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="heading-md mb-4 text-black dark:text-white">Global Reach, Personal Touch</h2>
            <p className="mb-8 text-gray-600 dark:text-gray-400">
              While we serve clients worldwide, we believe in building personal relationships.
              Our team is available for virtual meetings across all timezones.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="rounded-lg bg-gray-50 px-4 py-3 dark:bg-gray-800">
                <span className="font-medium text-black dark:text-white">Americas:</span>{" "}
                <span className="text-gray-600 dark:text-gray-400">9 AM - 6 PM EST</span>
              </div>
              <div className="rounded-lg bg-gray-50 px-4 py-3 dark:bg-gray-800">
                <span className="font-medium text-black dark:text-white">Europe:</span>{" "}
                <span className="text-gray-600 dark:text-gray-400">9 AM - 6 PM CET</span>
              </div>
              <div className="rounded-lg bg-gray-50 px-4 py-3 dark:bg-gray-800">
                <span className="font-medium text-black dark:text-white">Asia-Pacific:</span>{" "}
                <span className="text-gray-600 dark:text-gray-400">9 AM - 6 PM SGT</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
