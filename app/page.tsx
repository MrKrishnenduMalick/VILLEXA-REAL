'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Play, Gem, Home as HomeIcon, Crown, ArrowRight, ShieldCheck, Sparkles, Compass } from 'lucide-react';
import WatchFilmModal from '@/components/WatchFilmModal';

export default function HomePage() {
  const [isFilmOpen, setIsFilmOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-midnight text-white overflow-hidden">
      {/* =========================================================================
          HERO SECTION - EXACT MATCH TO REFERENCE IMAGE TOP PANEL (01 Home)
      ========================================================================= */}
      <section className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8">
        {/* Full-bleed Luxury Architectural Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-cinematic.webp"
            alt="Aurelia Residences Luxury Villa Architecture"
            fill
            priority
            quality={95}
            className="object-cover object-center lg:object-right-top"
            sizes="100vw"
          />

          {/* Cinematic Vignette, Twilight Gradient & Blue Illumination */}
          <div className="absolute inset-0 bg-gradient-to-r from-midnight/95 via-midnight/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-midnight/40 z-10" />

          {/* Luminous Architectural Arc Glow */}
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-sapphire-light/10 blur-[120px] pointer-events-none z-10" />
        </div>

        {/* Top Reference Pill Indicator */}
        <div className="relative z-20 max-w-7xl mx-auto w-full pt-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-mono text-softwhite/80 tracking-widest shadow-sm">
            <span className="font-semibold text-gold-champagne">01</span>
            <span>Home</span>
          </div>
        </div>

        {/* Central Hero Typography & CTAs */}
        <div className="relative z-20 max-w-7xl mx-auto w-full my-auto py-12 lg:py-20">
          <div className="max-w-2xl">
            {/* Overline */}
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-gold-champagne/60" />
              <span className="text-xs uppercase tracking-[0.35em] font-semibold text-gold-champagne drop-shadow-[0_0_10px_rgba(232,197,138,0.4)]">
                LUXURY LIVING
              </span>
            </div>

            {/* Main Brand Heading matching reference */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white tracking-wide uppercase leading-[1.05] drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-softwhite to-gold-warm/90">
                AURELIA
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-[0.25em] text-softwhite/90 mt-1">
                RESIDENCES
              </span>
            </h1>

            {/* Tagline */}
            <p className="mt-6 text-base sm:text-lg md:text-xl text-softwhite/80 font-light tracking-wide max-w-lg leading-relaxed">
              Premium Residences for a Modern Lifestyle. Crafted for visionary collectors of timeless architectural serenity.
            </p>

            {/* Action Buttons matching reference */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5">
              {/* Explore Properties CTA */}
              <Link
                href="/properties"
                className="group inline-flex items-center gap-3 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm uppercase tracking-[0.22em] font-medium text-midnight-dark bg-gold-gradient hover:brightness-110 active:scale-95 transition-all duration-300 shadow-[0_0_25px_rgba(232,197,138,0.45)] hover:shadow-[0_0_35px_rgba(232,197,138,0.7)]"
              >
                <span>Explore Properties</span>
                <ArrowUpRight className="w-4 h-4 text-midnight-dark group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </Link>

              {/* Watch Film CTA */}
              <button
                onClick={() => setIsFilmOpen(true)}
                className="group inline-flex items-center gap-3 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm uppercase tracking-[0.2em] font-medium text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 hover:border-gold-champagne/60 backdrop-blur-xl transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
              >
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-white/20 group-hover:bg-gold-champagne group-hover:text-midnight transition-colors duration-300">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </div>
                <span>Watch Film</span>
                <span className="text-[11px] font-mono text-gold-champagne/80 font-normal">
                  (1:12)
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Category Indicators & Pagination Indicator */}
        <div className="relative z-20 max-w-7xl mx-auto w-full pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Category Indicators */}
          <div className="flex items-center gap-6 sm:gap-10">
            {/* Apartments */}
            <Link
              href="/properties?category=Apartments"
              className="group flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] text-softwhite/80 hover:text-white transition-colors"
            >
              <Gem className="w-4 h-4 text-gold-champagne group-hover:scale-110 transition-transform" />
              <span>Apartments</span>
            </Link>

            {/* Villas */}
            <Link
              href="/properties?category=Villas"
              className="group flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] text-softwhite/80 hover:text-white transition-colors"
            >
              <HomeIcon className="w-4 h-4 text-gold-champagne group-hover:scale-110 transition-transform" />
              <span>Villas</span>
            </Link>

            {/* Penthouses */}
            <Link
              href="/properties?category=Penthouses"
              className="group flex items-center gap-2.5 text-xs uppercase tracking-[0.2em] text-softwhite/80 hover:text-white transition-colors"
            >
              <Crown className="w-4 h-4 text-gold-champagne group-hover:scale-110 transition-transform" />
              <span>Penthouses</span>
            </Link>
          </div>

          {/* Refined Pagination Indicator matching reference (01 00 ----) */}
          <div className="flex items-center gap-4 text-xs font-mono text-softwhite/70">
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-white">01</span>
              <span className="text-softwhite/40">/</span>
              <span className="text-softwhite/50">03</span>
            </div>

            {/* Visual Progress Dashes */}
            <div className="flex items-center gap-1.5">
              <span className="w-6 h-1 rounded-full bg-gold-champagne shadow-[0_0_8px_#E8C58A]" />
              <span className="w-2.5 h-1 rounded-full bg-white/20" />
              <span className="w-2.5 h-1 rounded-full bg-white/20" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          EDITORIAL ARCHITECTURAL HIGHLIGHTS (LUXURY OVERVIEW)
      ========================================================================= */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-midnight via-midnight-dark to-midnight border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block text-xs uppercase tracking-[0.3em] font-semibold text-gold-champagne">
                THE AURELIA STANDARD
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-wide leading-tight">
                Where Visionary Engineering Meets Cinematic Serenity.
              </h2>
              <p className="text-sm sm:text-base text-softwhite/75 font-light leading-relaxed">
                Every Aurelia property is an individual architectural sculpture. Designed at the intersection of natural light, acoustic isolation, and high-performance glass facades, our residences establish an uncompromising sanctuary for the discerning few.
              </p>

              {/* Three Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-2xl font-serif text-gold-warm font-light">3.8m+</span>
                  <p className="text-xs uppercase tracking-wider text-softwhite/60 mt-1">
                    Ceiling Volumes
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-2xl font-serif text-gold-warm font-light">360°</span>
                  <p className="text-xs uppercase tracking-wider text-softwhite/60 mt-1">
                    Unobstructed Vistas
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                  <span className="text-2xl font-serif text-gold-warm font-light">24 / 7</span>
                  <p className="text-xs uppercase tracking-wider text-softwhite/60 mt-1">
                    Private Concierge
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-gold-champagne hover:text-gold-warm transition-colors"
                >
                  <span>Explore Our Brand Story & Architecture</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Architectural Image Showcase */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] group">
                <Image
                  src="/images/property-architectural-entrance.webp"
                  alt="Aurelia Residences Entrance Architecture"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-midnight/70 backdrop-blur-md border border-white/10">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold-champagne font-semibold block">
                    FEATURED SPECIFICATION
                  </span>
                  <p className="text-sm font-serif text-white mt-1">
                    Cantilevered Travertine Portal & Low-Iron Acoustic Glazing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PORTFOLIO INVITATION BANNER
      ========================================================================= */}
      <section className="relative py-20 bg-gradient-to-r from-sapphire-dark via-midnight to-sapphire-dark border-t border-b border-white/10 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,197,138,0.15),transparent_70%)] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-gold-champagne">
            SIGNATURE 3D PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white mt-3 mb-6">
            Experience Our Curved Residences Showcase
          </h2>
          <p className="text-sm sm:text-base text-softwhite/75 font-light max-w-xl mx-auto mb-8 leading-relaxed">
            Interact with our signature 3D carousel to preview floor plans, finishes, and private appointments across our apartment, villa, and penthouse collections.
          </p>

          <Link
            href="/properties"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs uppercase tracking-[0.25em] font-medium text-midnight-dark bg-gold-gradient hover:brightness-110 transition-all duration-300 shadow-[0_0_25px_rgba(232,197,138,0.4)]"
          >
            <span>Launch Curved Showcase</span>
            <Compass className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Watch Film Modal */}
      <WatchFilmModal
        isOpen={isFilmOpen}
        onClose={() => setIsFilmOpen(false)}
        videoSrc="/videos/hero.mp4"
        posterSrc="/images/hero-cinematic.webp"
      />
    </div>
  );
}
