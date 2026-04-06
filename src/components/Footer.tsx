import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, ArrowUpRight, Link as LinkIcon, Bird, CircleDashed } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'AI Automation', href: '/services#ai-automation' },
    { name: 'Web Applications', href: '/services#web-applications' },
    { name: 'SaaS Development', href: '/services#saas-development' },
    { name: 'API Integration', href: '/services#api-integration' },
    { name: 'Process Automation', href: '/services#process-automation' },
    { name: 'Web Development', href: '/services#web-development' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: LinkIcon, href: '#', label: 'LinkedIn' },
    { icon: Bird, href: '#', label: 'Twitter' },
    { icon: CircleDashed, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="relative border-t" style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)' }}>
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB] to-transparent"></div>

      <div className="container-custom mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-7 group">
              <div className="relative w-12 h-12 shrink-0 transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/logogency.png"
                  alt="Zerovex Solutions"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Zero<span className="text-[#2563EB]">vex</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-7" style={{ color: 'var(--text-secondary)' }}>
              Zerovex Solutions delivers AI automation and custom software that transforms how businesses operate and scale.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl glass-subtle flex items-center justify-center transition-all duration-300 hover:border-[#2563EB]/40 hover:bg-[#2563EB]/10"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-base mb-7" style={{ color: 'var(--text-primary)' }}>Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm transition-all duration-300 flex items-center gap-2 group hover:text-white"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#2563EB]" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-7" style={{ color: 'var(--text-primary)' }}>Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm transition-all duration-300 flex items-center gap-2 group hover:text-white"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#2563EB]" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-base mb-7" style={{ color: 'var(--text-primary)' }}>Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB]/15 transition-colors duration-300">
                  <MapPin size={18} className="text-[#2563EB]" />
                </div>
                <span className="text-sm pt-1" style={{ color: 'var(--text-secondary)' }}>
                  Silicon Valley, California
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB]/15 transition-colors duration-300">
                  <Mail size={18} className="text-[#2563EB]" />
                </div>
                <a
                  href="mailto:hello@zerovexsolutions.site"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  hello@zerovexsolutions.site
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 flex items-center justify-center shrink-0 group-hover:bg-[#2563EB]/15 transition-colors duration-300">
                  <Phone size={18} className="text-[#2563EB]" />
                </div>
                <a
                  href="tel:+1234567890"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5" style={{ borderTop: '1px solid var(--border-color)' }}>
          <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
            © {currentYear} Zerovex Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-sm transition-colors hover:text-white" style={{ color: 'var(--text-tertiary)' }}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm transition-colors hover:text-white" style={{ color: 'var(--text-tertiary)' }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
