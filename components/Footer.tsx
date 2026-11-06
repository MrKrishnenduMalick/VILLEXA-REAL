import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Instagram, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import AureliaLogo from './AureliaLogo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-midnight-dark border-t border-white/10 overflow-hidden text-softwhite/80">
      {/* Subtle architectural ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-24 bg-gradient-to-b from-sapphire/20 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <AureliaLogo size="lg" />
              <p className="mt-5 text-sm leading-relaxed text-softwhite/70 max-w-sm font-light">
                Aurelia Residences redefines luxury architectural living across premium global sanctuaries, contemporary villas, and iconic skyline penthouses.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/[0.04] border border-white/15 text-softwhite/80 hover:text-gold-champagne hover:border-gold-champagne/50 hover:bg-white/[0.08] transition-all duration-300"
                aria-label="Aurelia Residences on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/[0.04] border border-white/15 text-softwhite/80 hover:text-gold-champagne hover:border-gold-champagne/50 hover:bg-white/[0.08] transition-all duration-300"
                aria-label="Aurelia Residences on YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white/[0.04] border border-white/15 text-softwhite/80 hover:text-gold-champagne hover:border-gold-champagne/50 hover:bg-white/[0.08] transition-all duration-300"
                aria-label="Aurelia Residences on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold-champagne font-semibold mb-5">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-softwhite/75 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                >
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-softwhite/75 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                >
                  <span>About Our Vision</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/properties"
                  className="text-softwhite/75 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                >
                  <span>Residences Collection</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-softwhite/75 hover:text-white hover:translate-x-1 inline-flex items-center gap-1.5 transition-all duration-200"
                >
                  <span>Private Consultation</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details (Editable Placeholders) */}
          <div className="md:col-span-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-gold-champagne font-semibold mb-5">
              Private Office
            </h4>
            <div className="space-y-3.5 text-sm text-softwhite/75 font-light">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-champagne shrink-0 mt-0.5" />
                <span>New Town, Kolkata — 700156 (Private Sales Gallery)</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-champagne shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-gold-warm transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-champagne shrink-0" />
                <a
                  href="mailto:enquiry@aureliaresidences.com"
                  className="hover:text-gold-warm transition-colors"
                >
                  enquiry@aureliaresidences.com
                </a>
              </div>
              <p className="pt-2 text-xs text-softwhite/50 italic">
                * Demonstration portfolio brand. Private visits arranged by bespoke appointment.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-softwhite/50 gap-4">
          <p>© {currentYear} AURELIA RESIDENCES. All architectural rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-softwhite cursor-pointer transition-colors">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-softwhite cursor-pointer transition-colors">Terms of Living</span>
            <span>•</span>
            <span className="hover:text-softwhite cursor-pointer transition-colors">Architectural Portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
