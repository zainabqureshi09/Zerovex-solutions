import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, ArrowUpRight, Link as LinkIcon, Bird, CircleDashed, Diamond } from 'lucide-react';

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
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
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
      {/* Luxury Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--gold-accent)] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-4 mb-8 group">
              <div className="relative w-14 h-14 shrink-0 transition-all duration-400 group-hover:scale-110">
                <Image
                  src="/logogency.png"
                  alt="Zerovex Solutions"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight" style={{ color: 'var(--text-primary)' }}>
                  Zero<span className="text-[var(--gold-accent)]">vex</span>
                </span>
                <span className="text-[10px] font-bold tracking-[0.25em] uppercase" style={{ color: 'var(--gold-accent)' }}>
                  Solutions
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'var(--text-secondary)' }}>
              Zerovex Solutions delivers AI automation and custom software that transforms how businesses operate and scale.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl glass-subtle flex items-center justify-center transition-all duration-400 hover:border-[var(--gold-accent)]/40 hover:bg-[var(--gold-accent)]/10 hover:-translate-y-1"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-base mb-8 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <Diamond size={14} className="text-[var(--gold-accent)]" />
              Services
            </h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm transition-all duration-400 flex items-center gap-2.5 group hover:text-[var(--gold-accent)]"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400 text-[var(--gold-accent)]" />
                    <span className="group-hover:translate-x-1 transition-transform duration-400">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base mb-8 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <Diamond size={14} className="text-[var(--gold-accent)]" />
              Quick Links
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm transition-all duration-400 flex items-center gap-2.5 group hover:text-[var(--gold-accent)]"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-400 text-[var(--gold-accent)]" />
                    <span className="group-hover:translate-x-1 transition-transform duration-400">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-base mb-8 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
              <Diamond size={14} className="text-[var(--gold-accent)]" />
              Contact Us
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--gold-accent)]/15 to-[var(--primary)]/15 flex items-center justify-center shrink-0 group-hover:from-[var(--gold-accent)]/25 group-hover:to-[var(--primary)]/25 transition-all duration-400">
                  <MapPin size={20} className="text-[var(--gold-accent)]" />
                </div>
                <span className="text-sm pt-2" style={{ color: 'var(--text-secondary)' }}>
                  Silicon Valley, California
                </span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--gold-accent)]/15 to-[var(--primary)]/15 flex items-center justify-center shrink-0 group-hover:from-[var(--gold-accent)]/25 group-hover:to-[var(--primary)]/25 transition-all duration-400">
                  <Mail size={20} className="text-[var(--gold-accent)]" />
                </div>
                <a
                  href="mailto:hello@zerovexsolutions.site"
                  className="text-sm transition-colors hover:text-[var(--gold-accent)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  hello@zerovexsolutions.site
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--gold-accent)]/15 to-[var(--primary)]/15 flex items-center justify-center shrink-0 group-hover:from-[var(--gold-accent)]/25 group-hover:to-[var(--primary)]/25 transition-all duration-400">
                  <Phone size={20} className="text-[var(--gold-accent)]" />
                </div>
                <a
                  href="tel:+1234567890"
                  className="text-sm transition-colors hover:text-[var(--gold-accent)]"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 lg:mt-20 pt-10 lg:pt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t" style={{ borderColor: 'var(--border-color)' }}>
          <p className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
            © {currentYear} Zerovex Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-10">
            <Link href="#" className="text-sm transition-colors hover:text-[var(--gold-accent)]" style={{ color: 'var(--text-tertiary)' }}>
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm transition-colors hover:text-[var(--gold-accent)]" style={{ color: 'var(--text-tertiary)' }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
