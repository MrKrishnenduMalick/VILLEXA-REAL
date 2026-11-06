'use client';

import React, { Suspense } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Phone, Mail, MapPin, Instagram, Youtube, Linkedin, Clock, ShieldCheck, Compass } from 'lucide-react';
import EnquiryForm from '@/components/EnquiryForm';

function ContactContent() {
  const searchParams = useSearchParams();
  const initialInterest = searchParams.get('interest') || 'Apartments';

  return (
    <div className="relative min-h-screen bg-midnight text-white pt-24 pb-20 overflow-hidden">
      {/* Full-bleed Architectural Twilight Background matching reference */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact-cinematic.webp"
          alt="Aurelia Residences Twilight Patio"
          fill
          priority
          quality={95}
          className="object-cover object-center lg:object-right"
          sizes="100vw"
        />
        {/* Gradients for text contrast & glass glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-midnight/95 via-midnight/80 to-midnight/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/60" />

        {/* Ambient blue reflection glow */}
        <div className="absolute bottom-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-royal/20 blur-[130px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Reference Pill Indicator (03 Contact) matching reference */}
        <div className="pt-4 pb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-mono text-softwhite/80 tracking-widest shadow-sm">
            <span className="font-semibold text-gold-champagne">03</span>
            <span>Contact</span>
          </div>
        </div>

        {/* Two-Column Cinematic Contact Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start my-6">
          {/* Left Column: Brand Story & Contact Information */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs uppercase tracking-[0.35em] font-semibold text-gold-champagne block mb-3">
                GET IN TOUCH
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white tracking-wide leading-tight">
                Let&apos;s Find Your Next Home
              </h1>
              <p className="mt-4 text-base sm:text-lg text-softwhite/80 font-light leading-relaxed max-w-lg">
                Tell us what you&apos;re looking for. Our team will help you with the right residence, from panoramic city apartments to private coastal villas.
              </p>
            </div>

            {/* Direct Contact Details with Icons matching reference */}
            <div className="space-y-6 pt-4">
              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="group flex items-center gap-4 text-softwhite hover:text-white transition-colors"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/[0.05] border border-white/15 group-hover:border-gold-champagne group-hover:bg-gold-champagne/10 transition-all shadow-sm">
                  <Phone className="w-5 h-5 text-gold-champagne group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-softwhite/50 block">
                    Direct Line
                  </span>
                  <span className="text-lg font-mono text-white group-hover:text-gold-warm transition-colors">
                    +91 98765 43210
                  </span>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:enquiry@aureliaresidences.com"
                className="group flex items-center gap-4 text-softwhite hover:text-white transition-colors"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/[0.05] border border-white/15 group-hover:border-gold-champagne group-hover:bg-gold-champagne/10 transition-all shadow-sm">
                  <Mail className="w-5 h-5 text-gold-champagne group-hover:scale-110 transition-transform" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-softwhite/50 block">
                    Private Enquiries
                  </span>
                  <span className="text-base sm:text-lg font-serif text-white group-hover:text-gold-warm transition-colors">
                    enquiry@aureliaresidences.com
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 text-softwhite">
                <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/[0.05] border border-white/15 shadow-sm shrink-0">
                  <MapPin className="w-5 h-5 text-gold-champagne" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-softwhite/50 block">
                    Sales Gallery & Client Suites
                  </span>
                  <span className="text-sm sm:text-base text-white font-light">
                    New Town, Kolkata — 700156
                  </span>
                </div>
              </div>
            </div>

            {/* Social Icons matching reference */}
            <div className="pt-4 border-t border-white/10">
              <span className="text-[10px] uppercase tracking-[0.25em] text-softwhite/50 block mb-3 font-semibold">
                Connect With Aurelia
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-white/[0.04] border border-white/15 text-softwhite hover:text-gold-warm hover:border-gold-champagne/60 hover:bg-gold-champagne/10 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-white/[0.04] border border-white/15 text-softwhite hover:text-gold-warm hover:border-gold-champagne/60 hover:bg-gold-champagne/10 transition-all"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-white/[0.04] border border-white/15 text-softwhite hover:text-gold-warm hover:border-gold-champagne/60 hover:bg-gold-champagne/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Protocol Notice */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/10 max-w-md">
              <div className="flex items-center gap-2 text-gold-champagne text-xs font-semibold uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Confidentiality Guarantee</span>
              </div>
              <p className="text-[11px] text-softwhite/60 font-light leading-relaxed">
                All client correspondences and property viewing requests are protected under strict non-disclosure protocols.
              </p>
            </div>
          </div>

          {/* Right Column: Floating Glassmorphism Enquiry Form matching reference */}
          <div className="lg:col-span-6">
            <EnquiryForm initialInterest={initialInterest} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-midnight flex items-center justify-center text-gold-champagne text-sm uppercase tracking-widest">Loading Consultation...</div>}>
      <ContactContent />
    </Suspense>
  );
}

