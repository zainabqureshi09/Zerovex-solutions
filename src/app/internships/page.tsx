"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Code,
  Layout,
  Palette,
  Megaphone,
  Brain,
  PenTool,
  Briefcase,
  CheckCircle2,
  Send,
  Sparkles,
  ArrowRight,
  Info,
  Calendar,
  MapPin,
  GraduationCap
} from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import MagneticButton from "@/components/ui/MagneticButton";

const categories = [
  {
    id: "Web Development",
    title: "Web Development",
    icon: Code,
    description: "Build high-performance web applications using modern stacks like Next.js, React, Node.js, and TypeScript.",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/40",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "UI/UX Design",
    title: "UI/UX",
    icon: Layout,
    description: "Design premium user experiences, high-fidelity wireframes, and luxury design systems in Figma.",
    color: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/40",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "Graphic Design",
    title: "Graphic Design",
    icon: Palette,
    description: "Create stunning branding assets, marketing illustrations, layouts, and high-impact visual identity items.",
    color: "from-amber-500/20 to-orange-500/20",
    border: "group-hover:border-orange-500/40",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "Digital Marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    description: "Drive growth, run search/social campaigns, optimize SEO, and design content calendars.",
    color: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/40",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "AI & ML",
    title: "AI & ML",
    icon: Brain,
    description: "Develop cutting-edge intelligence systems, LLM prompts, agent frameworks, and predictive modeling.",
    color: "from-red-500/20 to-rose-500/20",
    border: "group-hover:border-red-500/40",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "Content Writing",
    title: "Content Writing",
    icon: PenTool,
    description: "Write SEO-friendly blogs, high-converting copy, technical documentation, and strategic newsletters.",
    color: "from-indigo-500/20 to-violet-500/20",
    border: "group-hover:border-indigo-500/40",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=80"
  },
  {
    id: "Business Development",
    title: "Business Development",
    icon: Briefcase,
    description: "Formulate strategic sales funnels, prospect global enterprises, and drive partnership negotiations.",
    color: "from-cyan-500/20 to-blue-500/20",
    border: "group-hover:border-blue-500/40",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80"
  }
];

export default function InternshipsPage() {
  const formRef = useRef<HTMLDivElement>(null);
  const [selectedField, setSelectedField] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [applicationId, setApplicationId] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    whatsapp: "",
    city: "",
    educationLevel: "",
    skills: "",
    portfolioUrl: "",
    whyInternship: "",
    availability: "",
    consent: false
  });

  const handleApplyClick = (field: string) => {
    setSelectedField(field);
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    if (!selectedField) {
      setSubmitError("Please select an internship field.");
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/internships/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          selectedField
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setApplicationId(data.applicationId);
      setSubmitSuccess(true);
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        whatsapp: "",
        city: "",
        educationLevel: "",
        skills: "",
        portfolioUrl: "",
        whyInternship: "",
        availability: "",
        consent: false
      });
      setSelectedField("");
    } catch (err: any) {
      setSubmitError(err.message || "Failed to submit application. Please check your inputs.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Pre-fill WhatsApp redirection link
  const whatsAppNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+923412270393";
  const whatsAppMessage = `Hello, Zero Vex Solutions, I have submitted my internship application. My Application ID is ${applicationId}.`;
  const whatsAppLink = `https://wa.me/${whatsAppNumber.replace(/[^a-zA-Z0-9+]/g, "")}?text=${encodeURIComponent(whatsAppMessage)}`;

  return (
    <div className="min-h-screen bg-transparent text-white">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left Col - Context */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 text-left"
            >
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="h-5 w-5 text-red-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">Remote Internships</span>
              </div>
              <h1 className="heading-xl mb-6">
                Empower Your <span className="text-gradient">Potential</span>
              </h1>
              <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed max-w-xl">
                Launch your career with the Zero Vex Solutions global remote internship program. Collaborate with industry leaders, build enterprise projects, and gain production experience.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })}
                  className="btn-primary"
                >
                  Apply Now
                </button>
              </div>
            </motion.div>

            {/* Right Col - High-tech graphical illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 relative w-full h-[320px] md:h-[400px] rounded-3xl overflow-hidden border border-white/10 glow-red shadow-premium bg-black"
            >
              <Image
                src="/internship-hero.png"
                alt="Zero Vex Remote Internship Program"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES SECTION ================= */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <h2 className="heading-lg mb-4">Available <span className="text-gradient">Tracks</span></h2>
            <p className="text-gray-400 max-w-xl mx-auto">Select a track that aligns with your skills and ambition to begin your journey.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
            {categories.map((cat, index) => {
              const Icon = cat.icon;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group"
                >
                  <GlassCard className="h-full flex flex-col justify-between overflow-hidden border border-white/5 hover:border-red-500/30">
                    <div className="relative h-44 w-full overflow-hidden bg-black/40">
                      <img
                        src={cat.image}
                        alt={cat.title}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                      <div className={`absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${cat.color} text-white backdrop-blur-md`}>
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="mb-2 text-lg font-bold text-white group-hover:text-red-500 transition-colors">
                          {cat.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-gray-400 mb-6 line-clamp-3">
                          {cat.description}
                        </p>
                      </div>

                      <button
                        onClick={() => handleApplyClick(cat.id)}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/70 hover:text-red-500 transition-colors group/btn self-start"
                      >
                        Apply Track <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= APPLICATION FORM SECTION ================= */}
      <section ref={formRef} className="section-padding relative z-10 bg-black/30 backdrop-blur-sm">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl">
            <GlassCard className="p-8 md:p-12 border border-white/10 relative overflow-hidden">
              {/* Submission Success Screen */}
              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-12"
                  >
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-500">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-white mb-4">Application Submitted!</h2>
                    <p className="text-gray-400 mb-8 max-w-md mx-auto">
                      Thank you for applying. Your application was recorded successfully in our database.
                    </p>

                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8 max-w-sm mx-auto">
                      <span className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
                        Your Application ID
                      </span>
                      <span className="text-2xl font-mono font-bold text-red-500 tracking-wider">
                        {applicationId}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                      <a
                        href={whatsAppLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 hover:bg-green-700 px-8 py-4 font-bold text-white transition-colors duration-300"
                      >
                        Confirm via WhatsApp
                      </a>
                      <button
                        onClick={() => setSubmitSuccess(false)}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 hover:bg-white/5 px-8 py-4 font-bold text-white transition-all duration-300"
                      >
                        Submit Another
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="mb-10 text-center md:text-left">
                      <h2 className="heading-md mb-2">Apply for <span className="text-gradient">Internship</span></h2>
                      <p className="text-sm text-gray-400">Fill in the questionnaire details. Applications are evaluated in 3-5 business days.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {submitError && (
                        <div className="flex items-center gap-3 rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
                          <Info className="h-5 w-5 shrink-0" />
                          <p>{submitError}</p>
                        </div>
                      )}

                      <div className="grid gap-6 md:grid-cols-2">
                        {/* Selected Field */}
                        <div className="md:col-span-2">
                          <label htmlFor="selectedField" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                            Select Internship Field *
                          </label>
                          <select
                            id="selectedField"
                            name="selectedField"
                            value={selectedField}
                            onChange={(e) => setSelectedField(e.target.value)}
                            required
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:border-red-500/50 focus:outline-none transition-colors"
                          >
                            <option value="" className="bg-black text-gray-400">Select Field...</option>
                            {categories.map((c) => (
                              <option key={c.id} value={c.id} className="bg-black text-white">
                                {c.title}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Full Name */}
                        <div>
                          <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                            placeholder="John Doe"
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:border-red-500/50 focus:outline-none transition-colors"
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="john@example.com"
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:border-red-500/50 focus:outline-none transition-colors"
                          />
                        </div>

                        {/* Phone Number */}
                        <div>
                          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            placeholder="+1 (555) 000-0000"
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:border-red-500/50 focus:outline-none transition-colors"
                          />
                        </div>

                        {/* WhatsApp Number */}
                        <div>
                          <label htmlFor="whatsapp" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                            WhatsApp Number *
                          </label>
                          <input
                            type="tel"
                            id="whatsapp"
                            name="whatsapp"
                            value={formData.whatsapp}
                            onChange={handleInputChange}
                            required
                            placeholder="+1 (555) 000-0000"
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:border-red-500/50 focus:outline-none transition-colors"
                          />
                        </div>

                        {/* City */}
                        <div>
                          <label htmlFor="city" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                            City *
                          </label>
                          <div className="relative">
                            <MapPin className="absolute left-4 top-3.5 h-4 w-4 text-gray-500" />
                            <input
                              type="text"
                              id="city"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              required
                              placeholder="New York, USA"
                              className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-3.5 text-sm text-white placeholder-gray-500 focus:border-red-500/50 focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        {/* Education Level */}
                        <div>
                          <label htmlFor="educationLevel" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                            Education Level *
                          </label>
                          <div className="relative">
                            <GraduationCap className="absolute left-4 top-3.5 h-4 w-4 text-gray-500" />
                            <input
                              type="text"
                              id="educationLevel"
                              name="educationLevel"
                              value={formData.educationLevel}
                              onChange={handleInputChange}
                              required
                              placeholder="Bachelors in CS, etc."
                              className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-3.5 text-sm text-white placeholder-gray-500 focus:border-red-500/50 focus:outline-none transition-colors"
                            />
                          </div>
                        </div>

                        {/* Portfolio/LinkedIn Link */}
                        <div className="md:col-span-2">
                          <label htmlFor="portfolioUrl" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                            Portfolio or LinkedIn URL *
                          </label>
                          <input
                            type="url"
                            id="portfolioUrl"
                            name="portfolioUrl"
                            value={formData.portfolioUrl}
                            onChange={handleInputChange}
                            required
                            placeholder="https://linkedin.com/in/username or https://portfolio.com"
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:border-red-500/50 focus:outline-none transition-colors"
                          />
                        </div>

                        {/* Skills */}
                        <div className="md:col-span-2">
                          <label htmlFor="skills" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                            Skills (Comma Separated) *
                          </label>
                          <textarea
                            id="skills"
                            name="skills"
                            value={formData.skills}
                            onChange={handleInputChange}
                            required
                            rows={2}
                            placeholder="Next.js, TailwindCSS, Figma, copywriting, Python, ML (List your stack)"
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:border-red-500/50 focus:outline-none transition-colors resize-none"
                          />
                        </div>

                        {/* Why Internship */}
                        <div className="md:col-span-2">
                          <label htmlFor="whyInternship" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                            Why do you want this internship? *
                          </label>
                          <textarea
                            id="whyInternship"
                            name="whyInternship"
                            value={formData.whyInternship}
                            onChange={handleInputChange}
                            required
                            rows={4}
                            placeholder="Explain why you are interested in joining Zero Vex Solutions, and how this internship fits your goals..."
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder-gray-500 focus:border-red-500/50 focus:outline-none transition-colors resize-none"
                          />
                        </div>

                        {/* Availability */}
                        <div className="md:col-span-2">
                          <label htmlFor="availability" className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                            Availability & Schedule *
                          </label>
                          <div className="relative">
                            <Calendar className="absolute left-4 top-3.5 h-4 w-4 text-gray-500" />
                            <input
                              type="text"
                              id="availability"
                              name="availability"
                              value={formData.availability}
                              onChange={handleInputChange}
                              required
                              placeholder="Full-time (40h/wk), Part-time (20h/wk), Available from July 1st..."
                              className="w-full rounded-xl border border-white/10 bg-white/5 pl-10 pr-4 py-3.5 text-sm text-white placeholder-gray-500 focus:border-red-500/50 focus:outline-none transition-colors"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Consent Checkbox */}
                      <div className="flex items-start gap-3 mt-4">
                        <input
                          type="checkbox"
                          id="consent"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleCheckboxChange}
                          required
                          className="mt-1 h-4 w-4 rounded border-white/10 bg-white/5 text-red-500 focus:ring-red-500/50 focus:ring-offset-black accent-red-600"
                        />
                        <label htmlFor="consent" className="text-xs text-gray-400 leading-normal select-none">
                          I certify that all information submitted is correct, and I consent to Zero Vex Solutions storing and processing my personal data for recruitment purposes. *
                        </label>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-4 flex justify-center md:justify-start">
                        <MagneticButton>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-primary group/btn flex items-center justify-center gap-2 disabled:opacity-50"
                          >
                            {isSubmitting ? "Submitting Application..." : "Submit Application"}
                            <Send className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                          </button>
                        </MagneticButton>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}
