import Link from "next/link";
import { Mail, Twitter, Linkedin, Github } from "lucide-react";

const footerLinks = {
  services: [
    { name: "AI Automation", href: "/services#ai-automation" },
    { name: "Web Development", href: "/services#web-development" },
    { name: "SaaS Development", href: "/services#saas-development" },
    { name: "Business Systems", href: "/services#business-systems" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white transition-colors duration-300 dark:border-gray-800 dark:bg-black">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 flex flex-col items-center">
              <img src="/logogency.png" alt="Zerovex Solutions" className="h-7 w-auto sm:h-8 md:h-9" />
              <span className="mt-1 text-[10px] font-medium tracking-[0.2em] uppercase text-black dark:text-white" style={{ fontFamily: "var(--font-serif)" }}>Solutions</span>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Building tomorrow&apos;s technology today. We transform businesses through innovative AI automation and cutting-edge software solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded border border-gray-300 text-gray-600 transition-colors hover:border-dark-red hover:bg-dark-red hover:text-white dark:border-gray-700 dark:text-gray-400"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-black dark:text-white">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-dark-red dark:text-gray-400 dark:hover:text-dark-red"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-black dark:text-white">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-dark-red dark:text-gray-400 dark:hover:text-dark-red"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-black dark:text-white">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:hello@zerovexsolutions.site"
                  className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-dark-red dark:text-gray-400 dark:hover:text-dark-red"
                >
                  <Mail className="h-4 w-4" />
                  hello@zerovexsolutions.site
                </a>
              </li>
              <li className="text-sm text-gray-600 dark:text-gray-400">
                Global Operations<br />
                Serving Clients Worldwide
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 dark:border-gray-800">
        <div className="container-custom flex flex-col justify-between gap-4 py-6 text-sm text-gray-600 dark:text-gray-400 sm:flex-row sm:items-center">
          <p>
            &copy; {new Date().getFullYear()} Zerovex Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-dark-red">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-dark-red">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
