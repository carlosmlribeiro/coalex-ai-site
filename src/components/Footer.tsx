import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { label: 'Features', href: '#three-layers' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'How It Works', href: '#how' },
      { label: 'Trust Center', href: '#trust-center' },
    ],
    compliance: [
      { label: 'ISO 42001', href: '#compliance' },
      { label: 'EU AI Act', href: '#compliance' },
      { label: 'SOC 2', href: '#security' },
      { label: 'GDPR', href: '#security' },
    ],
    company: [
      { label: 'About', href: 'https://linkedin.com/company/coalex-ai' },
      { label: 'Contact', href: '#contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Cookie Policy', href: '/cookie-policy' },
    ],
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="/coalex/logo-black.png"
              alt="Coalex.ai"
              className="h-8 mb-4"
            />
            <p className="text-slate-400 text-sm mb-4">
              AI Trust & Supervision Platform. Get your AI pilots out of purgatory and into production.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/coalex-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/coalex_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://github.com/coalex-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div>
            <h4 className="text-white font-semibold mb-4">Compliance</h4>
            <ul className="space-y-2">
              {footerLinks.compliance.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.href.startsWith('http') && {
                      target: '_blank',
                      rel: 'noopener noreferrer',
                    })}
                    className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* PRR Banner */}
        <div className="py-8 border-t border-slate-800">
          <a
            href="/prr/23203FichadeProjeto.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:opacity-80 transition-opacity"
          >
            <img
              src="/prr/BARRA_LOGOS-02.png"
              alt="PRR - Plano de Recuperação e Resiliência"
              className="max-w-[50%] h-auto mx-auto"
            />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Coalex.ai — AI Trust & Supervision Platform. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span>Backed by</span>
            <span className="text-slate-400">NVIDIA Inception</span>
            <span>·</span>
            <span className="text-slate-400">Google for Startups</span>
            <span>·</span>
            <span className="text-slate-400">Unicorn Factory Lisboa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
