import Link from 'next/link';
import { Link as LinkIcon, Type, Image, Terminal, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Website Development', href: '/services#web-development' },
    { name: 'Web Applications', href: '/services#web-applications' },
    { name: 'Mobile Apps', href: '/services#mobile-apps' },
    { name: 'Brand Design', href: '/services#graphic-design' },
    { name: 'AI Solutions', href: '/services#ai-automation' },
    { name: 'Automation', href: '/services#process-automation' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Team', href: '/team' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: LinkIcon, href: '#', label: 'LinkedIn' },
    { icon: Type, href: '#', label: 'Twitter' },
    { icon: Image, href: '#', label: 'Instagram' },
    { icon: Terminal, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="relative bg-[#030305] border-t border-white/5">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#ff1f3d] to-transparent"></div>

      <div className="container-custom mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-7 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ff1f3d] to-[#ff3d57] rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(225,29,72,0.4)]">
                  <span className="text-white font-bold text-xl font-[var(--space-grotesk)]">Z</span>
                </div>
              </div>
              <span className="text-white font-bold text-xl tracking-tight font-[var(--space-grotesk)]">
                Zero<span className="text-[#ff1f3d]">vex</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-7">
              Building powerful digital experiences for modern businesses. Your trusted technology partner for innovation and growth.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl glass-subtle flex items-center justify-center text-white/50 hover:text-white hover:border-[#ff1f3d]/40 transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-base mb-7 font-[var(--space-grotesk)]">Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-white/50 hover:text-white text-sm transition-all duration-300 flex items-center gap-2 group"
                  >
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#ff1f3d]" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-7 font-[var(--space-grotesk)]">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white text-sm transition-all duration-300 flex items-center gap-2 group"
                  >
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#ff1f3d]" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-base mb-7 font-[var(--space-grotesk)]">Contact Us</h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-[#ff1f3d]/10 flex items-center justify-center shrink-0 group-hover:bg-[#ff1f3d]/15 transition-colors duration-300">
                  <MapPin size={18} className="text-[#ff1f3d]" />
                </div>
                <span className="text-white/50 text-sm pt-1">
                  Silicon Valley, California
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-[#ff1f3d]/10 flex items-center justify-center shrink-0 group-hover:bg-[#ff1f3d]/15 transition-colors duration-300">
                  <Mail size={18} className="text-[#ff1f3d]" />
                </div>
                <a
                  href="mailto:hello@zerovexsolutions.site"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  hello@zerovexsolutions.site
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-lg bg-[#ff1f3d]/10 flex items-center justify-center shrink-0 group-hover:bg-[#ff1f3d]/15 transition-colors duration-300">
                  <Phone size={18} className="text-[#ff1f3d]" />
                </div>
                <a
                  href="tel:+1234567890"
                  className="text-white/50 hover:text-white text-sm transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-white/40 text-sm">
            © {currentYear} Zerovex Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/40 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
