import Image from "next/image";
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
    <footer className="relative border-t border-white/5 bg-black py-20 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-red-500/5 blur-[100px]" />
      
      <div className="container-custom relative z-10">
        <div className="grid gap-16 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-8 flex flex-col items-start">
              <Image src="/logogency.png" alt="Zerovex Solutions" width={120} height={32} className="h-7 w-auto" />
              <span className="mt-1 text-[10px] font-bold tracking-[0.4em] uppercase text-white/40">Solutions</span>
            </Link>
            <p className="max-w-md text-lg leading-relaxed text-gray-400">
              Building the next generation of AI-driven technology. We transform global enterprises through intelligent automation and futuristic engineering.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">Platform</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-500 transition-colors hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-white">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-500 transition-colors hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-10 md:flex-row">
          <p className="text-xs font-medium text-gray-600">
            &copy; {new Date().getFullYear()} Zerovex Solutions. Engineered for Excellence.
          </p>
          <div className="flex gap-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-gray-600 transition-colors hover:text-white"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
