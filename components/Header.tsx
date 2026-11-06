'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X, PhoneCall } from 'lucide-react';
import AureliaLogo from './AureliaLogo';

interface HeaderProps {
  onOpenEnquiry?: () => void;
}

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Properties', href: '/properties' },
  { name: 'Contact', href: '/contact' },
];

export default function Header({ onOpenEnquiry }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-3.5 bg-midnight/80 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-gradient-to-b from-midnight/80 via-midnight/30 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <AureliaLogo size="md" />

        {/* Center Floating Pill Navigation - Desktop */}
        <nav
          className="hidden md:flex items-center p-1 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/15 shadow-[0_4px_24px_rgba(0,0,0,0.3)] transition-all duration-300"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-5 py-2 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 rounded-full ${
                  isActive
                    ? 'text-white bg-white/20 shadow-[0_0_16px_rgba(255,255,255,0.25)] ring-1 ring-white/30 backdrop-blur-md font-semibold'
                    : 'text-softwhite/75 hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          {onOpenEnquiry ? (
            <button
              onClick={onOpenEnquiry}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium text-gold-warm bg-gold-champagne/[0.08] border border-gold-champagne/40 hover:border-gold-champagne hover:bg-gold-champagne/20 transition-all duration-300 shadow-[0_0_18px_rgba(232,197,138,0.2)] hover:shadow-[0_0_25px_rgba(232,197,138,0.4)]"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold-champagne group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </button>
          ) : (
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium text-gold-warm bg-gold-champagne/[0.08] border border-gold-champagne/40 hover:border-gold-champagne hover:bg-gold-champagne/20 transition-all duration-300 shadow-[0_0_18px_rgba(232,197,138,0.2)] hover:shadow-[0_0_25px_rgba(232,197,138,0.4)]"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold-champagne group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          )}
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="/contact"
            className="px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.15em] font-medium text-gold-warm border border-gold-champagne/40 bg-gold-champagne/10"
          >
            Enquire
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-softwhite hover:text-white bg-white/5 border border-white/10"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-4 p-5 rounded-2xl bg-midnight/95 backdrop-blur-2xl border border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.8)] animate-fade-in">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm uppercase tracking-[0.2em] transition-all ${
                    isActive
                      ? 'text-white bg-white/15 font-semibold border border-white/20'
                      : 'text-softwhite/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-champagne shadow-[0_0_6px_#E8C58A]" />
                  )}
                </Link>
              );
            })}

            <div className="pt-3 mt-2 border-t border-white/10">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-xs uppercase tracking-[0.2em] font-medium text-gold-warm bg-gold-champagne/15 border border-gold-champagne/40"
              >
                <PhoneCall className="w-4 h-4 text-gold-champagne" />
                <span>Enquire Now</span>
                <ArrowUpRight className="w-4 h-4 text-gold-champagne" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

