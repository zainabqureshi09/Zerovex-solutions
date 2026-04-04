'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  Clock,
  ArrowRight,
  ArrowUpRight,
  Link as LinkIcon,
  Type,
  Image,
  Terminal,
} from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn';

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[id];
        return newErrors;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        message: '',
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email Us',
      value: 'hello@zerovexsolutions.site',
      href: 'mailto:hello@zerovexsolutions.site',
      description: 'We typically respond within 24 hours',
    },
    {
      icon: Phone,
      label: 'Call Us',
      value: '+1 (234) 567-890',
      href: 'tel:+1234567890',
      description: 'Mon-Fri from 9am to 6pm PST',
    },
    {
      icon: MapPin,
      label: 'Visit Us',
      value: 'Silicon Valley, California',
      href: '#',
      description: 'By appointment only',
    },
  ];

  const socialLinks = [
    { icon: LinkIcon, href: '#', label: 'LinkedIn' },
    { icon: Type, href: '#', label: 'Twitter' },
    { icon: Image, href: '#', label: 'Instagram' },
    { icon: Terminal, href: '#', label: 'GitHub' },
  ];

  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on scope and complexity. A standard website takes 4-8 weeks, while complex web applications may take 3-6 months. We provide detailed timelines during the proposal phase.',
    },
    {
      question: 'Do you offer ongoing support and maintenance?',
      answer: 'Yes! We offer flexible support packages including 24/7 monitoring, regular updates, security patches, and priority bug fixes to keep your digital products running smoothly.',
    },
    {
      question: 'What is your payment structure?',
      answer: 'We typically work with a 40% upfront deposit, 30% at midpoint, and 30% upon completion. For larger projects, we can arrange milestone-based payments tailored to your needs.',
    },
    {
      question: 'Can you work with our existing team?',
      answer: 'Absolutely! We regularly collaborate with in-house teams and can seamlessly integrate into your workflows using your preferred project management and communication tools.',
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.3, 0.15] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#e11d48]/15 rounded-full blur-[140px]"
          />
          <motion.div
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.12, 0.2, 0.12] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#3b82f6]/10 rounded-full blur-[140px]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050507_70%)]"></div>
        </div>

        <div className="container-custom mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <span className="badge-accent mb-8 inline-flex">
              <Send className="text-[#e11d48]" size={16} />
              Get In Touch
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 font-[var(--space-grotesk)]">
              Let's <span className="text-gradient">Connect</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Ready to transform your business with technology? We'd love to hear about
              your project and explore how we can help you achieve your goals.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <div className="grid lg:grid-cols-5 gap-16 lg:gap-20">
            {/* Left Column - Info */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 font-[var(--space-grotesk)]">
                    Start a <span className="text-gradient">Conversation</span>
                  </h2>
                  <p className="text-white/60 text-lg mb-12 leading-relaxed">
                    Whether you have a detailed brief or just an initial idea, we're here to help.
                    Reach out and let's discuss how we can bring your vision to life.
                  </p>

                  {/* Contact Info Cards */}
                  <div className="space-y-4 mb-12">
                    {contactInfo.map((info, index) => (
                      <FadeIn key={index} delay={index * 0.1}>
                        <a
                          href={info.href}
                          className="flex items-start gap-4 card-premium group"
                        >
                          <div className="w-14 h-14 rounded-2xl bg-[#e11d48]/10 flex items-center justify-center shrink-0 group-hover:bg-[#e11d48]/15 transition-colors duration-300">
                            <info.icon size={22} className="text-[#e11d48]" />
                          </div>
                          <div>
                            <div className="text-white/50 text-sm mb-1">{info.label}</div>
                            <div className="text-white font-medium mb-2">{info.value}</div>
                            <div className="text-white/40 text-xs flex items-center gap-1.5">
                              <Clock size={12} />
                              {info.description}
                            </div>
                          </div>
                        </a>
                      </FadeIn>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div>
                    <h3 className="text-white font-semibold mb-5 font-[var(--space-grotesk)]">Follow Us</h3>
                    <div className="flex items-center gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          aria-label={social.label}
                          className="w-12 h-12 rounded-xl glass-subtle flex items-center justify-center text-white/50 hover:text-white hover:border-[#e11d48]/40 transition-all duration-300"
                        >
                          <social.icon size={20} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.2}>
                <div className="glass-strong rounded-[24px] p-10 md:p-12">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-20"
                    >
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#e11d48] to-[#f43f5e] flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(225,29,72,0.4)]">
                        <CheckCircle2 size={48} className="text-white" />
                      </div>
                      <h3 className="text-3xl font-bold mb-4 font-[var(--space-grotesk)]">Message Sent!</h3>
                      <p className="text-white/60 mb-8">
                        Thank you for reaching out. Our team will get back to you within 24 hours.
                      </p>
                      <div className="text-white/40 text-sm">
                        Resetting form...
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-white/70 text-sm font-medium mb-2.5">
                            Full Name <span className="text-[#e11d48]">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className={`input-premium ${
                              errors.name
                                ? '!border-red-500 !bg-red-500/5'
                                : ''
                            }`}
                          />
                          {errors.name && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-xs mt-2"
                            >
                              {errors.name}
                            </motion.p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-white/70 text-sm font-medium mb-2.5">
                            Email Address <span className="text-[#e11d48]">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className={`input-premium ${
                              errors.email
                                ? '!border-red-500 !bg-red-500/5'
                                : ''
                            }`}
                          />
                          {errors.email && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-red-500 text-xs mt-2"
                            >
                              {errors.email}
                            </motion.p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-white/70 text-sm font-medium mb-2.5">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="input-premium"
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="projectType" className="block text-white/70 text-sm font-medium mb-2.5">
                            Project Type
                          </label>
                          <select
                            id="projectType"
                            value={formData.projectType}
                            onChange={handleChange}
                            className="input-premium appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-[#050507]">Select type</option>
                            <option value="website" className="bg-[#050507]">Website Development</option>
                            <option value="webapp" className="bg-[#050507]">Web Application</option>
                            <option value="mobile" className="bg-[#050507]">Mobile App</option>
                            <option value="design" className="bg-[#050507]">Graphic Design</option>
                            <option value="automation" className="bg-[#050507]">Automation</option>
                            <option value="other" className="bg-[#050507]">Other</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="budget" className="block text-white/70 text-sm font-medium mb-2.5">
                            Budget Range
                          </label>
                          <select
                            id="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="input-premium appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-[#050507]">Select budget</option>
                            <option value="5k-10k" className="bg-[#050507]">$5,000 - $10,000</option>
                            <option value="10k-25k" className="bg-[#050507]">$10,000 - $25,000</option>
                            <option value="25k-50k" className="bg-[#050507]">$25,000 - $50,000</option>
                            <option value="50k+" className="bg-[#050507]">$50,000+</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-white/70 text-sm font-medium mb-2.5">
                          Project Details <span className="text-[#e11d48]">*</span>
                        </label>
                        <textarea
                          id="message"
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project, goals, and timeline..."
                          className={`input-premium resize-none ${
                            errors.message
                              ? '!border-red-500 !bg-red-500/5'
                              : ''
                          }`}
                        ></textarea>
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-xs mt-2"
                          >
                            {errors.message}
                          </motion.p>
                        )}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full flex items-center justify-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed group"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            ></motion.div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </>
                        )}
                      </button>

                      <p className="text-white/40 text-xs text-center">
                        By submitting this form, you agree to our privacy policy. We'll never share your data.
                      </p>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-[#030305]">
        <div className="container-custom mx-auto">
          <FadeIn className="text-center mb-20">
            <span className="badge-accent mb-6 inline-block">
              FAQ
            </span>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-[var(--space-grotesk)]">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Quick answers to common questions about working with Zerovex Solutions.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="card-premium">
                  <h3 className="text-lg font-semibold mb-4 font-[var(--space-grotesk)]">{faq.question}</h3>
                  <p className="text-white/50 leading-relaxed">{faq.answer}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="section-padding">
        <div className="container-custom mx-auto">
          <FadeIn>
            <div className="glass-strong rounded-[24px] overflow-hidden h-96 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#e11d48]/10 via-[#3b82f6]/10 to-[#8b5cf6]/10"></div>
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={56} className="text-[#e11d48] mx-auto mb-5" />
                  <h3 className="text-3xl font-bold mb-3 font-[var(--space-grotesk)]">Silicon Valley, California</h3>
                  <p className="text-white/60 mb-6">By appointment only</p>
                  <Link
                    href="https://maps.google.com"
                    target="_blank"
                    className="btn-primary inline-flex items-center gap-2 text-sm"
                  >
                    Get Directions <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#030305]">
        <div className="container-custom mx-auto">
          <FadeIn>
            <div className="glass-strong rounded-[32px] p-14 md:p-20 text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#e11d48] to-transparent"></div>
              <h2 className="text-5xl md:text-6xl font-bold mb-8 font-[var(--space-grotesk)]">
                Still Have <span className="text-gradient">Questions</span>?
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto mb-12">
                We're here to help. Schedule a free consultation and let's discuss your project needs.
              </p>
              <Link href="/contact" className="btn-primary text-base px-12 py-5 inline-flex items-center gap-2.5 group">
                Book Free Consultation <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
