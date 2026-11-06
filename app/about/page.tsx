import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Compass, Shield, Sparkles, Layers, Sliders, Feather, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'About Our Vision & Architecture | AURELIA RESIDENCES',
  description:
    'Discover the philosophy, vision, and architectural craft behind Aurelia Residences. Where timeless materiality meets futuristic residential living.',
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-midnight text-white pt-24 pb-24 overflow-hidden">
      {/* Background Architectural Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-96 bg-sapphire/20 blur-[140px] pointer-events-none" />

      {/* =========================================================================
          HERO SECTION: BRAND INTRODUCTION
      ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-gold-champagne/60" />
            <span className="text-xs uppercase tracking-[0.35em] font-semibold text-gold-champagne">
              THE AURELIA LEGACY
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white tracking-wide leading-[1.1]">
            Sculpting Spaces for Timeless Living.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-softwhite/80 font-light leading-relaxed">
            Aurelia Residences was founded on a singular premise: that a luxury home is not simply an address, but a sanctuary of acoustic calm, architectural geometry, and curated natural light.
          </p>
        </div>

        {/* Hero Architectural Feature Image */}
        <div className="mt-12 relative aspect-[21/9] w-full rounded-3xl overflow-hidden border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
          <Image
            src="/images/section-philosophy-bg.webp"
            alt="Aurelia Residences Architectural Philosophy"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1280px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/20 to-transparent" />
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 max-w-lg">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gold-champagne font-semibold block mb-1">
              ARCHITECTURAL COMPOSITION
            </span>
            <p className="text-sm sm:text-base font-serif text-white">
              Harmony between raw Italian travertine, acoustic bronze louvers, and twilight reflections.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION A: OUR STORY & SECTION B: OUR PHILOSOPHY (ASYMMETRIC EDITORIAL)
      ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text: Our Story */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-gold-champagne block">
              A. OUR STORY
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-wide leading-tight">
              Crafted as an International Luxury Demonstration Brand.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-softwhite/75 font-light leading-relaxed">
              <p>
                Conceived as a showcase of visionary residential engineering, Aurelia brings together master architectural planning, bespoke interior materiality, and state-of-the-art environmental sustainability.
              </p>
              <p>
                From private oceanfront villas nestled among organic stone terraces to crowning triplex penthouses hovering high above international skylines, each development reflects an obsessive attention to proportional balance and acoustic serenity.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-8 text-xs font-mono text-softwhite/60">
              <div>
                <span className="text-lg font-serif text-gold-warm font-light block">Bespoke</span>
                <span>Individual Layouts</span>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <span className="text-lg font-serif text-gold-warm font-light block">Zero-Void</span>
                <span>Spatial Proportion</span>
              </div>
            </div>
          </div>

          {/* Right Image: Editorial Framed Architecture */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
              <Image
                src="/images/property-exterior-approach.webp"
                alt="Aurelia Private Estate Approach"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Section B: Philosophy Grid */}
        <div className="mt-28 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md relative overflow-hidden group hover:border-gold-champagne/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-gold-champagne/10 flex items-center justify-center text-gold-champagne mb-6">
              <Feather className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif text-white mb-3">
              Organic Minimalist Form
            </h3>
            <p className="text-xs sm:text-sm text-softwhite/70 leading-relaxed font-light">
              Eliminating excess ornament to honor genuine materiality: fluted limestone, brushed champagne bronze, and continuous acoustic crystal walls.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md relative overflow-hidden group hover:border-gold-champagne/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-gold-champagne/10 flex items-center justify-center text-gold-champagne mb-6">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif text-white mb-3">
              Light & Shadow Choreography
            </h3>
            <p className="text-xs sm:text-sm text-softwhite/70 leading-relaxed font-light">
              Oriented precisely to capture twilight golden reflections and subtle morning rays, creating ever-shifting emotional atmospheres throughout the day.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md relative overflow-hidden group hover:border-gold-champagne/40 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-gold-champagne/10 flex items-center justify-center text-gold-champagne mb-6">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-serif text-white mb-3">
              Acoustic Sanctuary
            </h3>
            <p className="text-xs sm:text-sm text-softwhite/70 leading-relaxed font-light">
              Triple-pane insulated acoustic glazing and floating subfloor assemblies deliver near-total decibel isolation from external city rhythms.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION C: OUR VISION & SECTION D: ARCHITECTURE & DESIGN
      ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Image: Materiality & Atrium */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
              <Image
                src="/images/property-gallery-materiality.webp"
                alt="Aurelia Materials and Textures"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent" />
            </div>
          </div>

          {/* Right Text: Our Vision */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-gold-champagne block">
              C. OUR VISION & D. ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-wide leading-tight">
              Pioneering Sustainable Luxury Engineering.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-softwhite/75 font-light leading-relaxed">
              <p>
                Our vision extends beyond aesthetic grandeur. Aurelia structures are conceived with passive thermal performance, automated solar shading fins, and closed-loop greywater purification gardens.
              </p>
              <p>
                Every private villa, apartment, and penthouse is engineered to marry modern digital convenience with unshakeable architectural stability.
              </p>
            </div>

            {/* Spec Highlights */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-softwhite/85">
                <span className="w-2 h-2 rounded-full bg-gold-champagne shadow-[0_0_6px_#E8C58A]" />
                <span>Bookmatched Italian Calacatta Marble & French Chevron Oak</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-softwhite/85">
                <span className="w-2 h-2 rounded-full bg-gold-champagne shadow-[0_0_6px_#E8C58A]" />
                <span>Custom Double-Height Glazed Atriums up to 7.2 meters</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-softwhite/85">
                <span className="w-2 h-2 rounded-full bg-gold-champagne shadow-[0_0_6px_#E8C58A]" />
                <span>Geothermal Climate Control with Integrated HEPA Air Purification</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION E: WHY AURELIA (BRAND VALUES)
      ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-white/10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-gold-champagne block mb-2">
            E. WHY AURELIA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-wide">
            The Pillars of Our Distinction
          </h2>
          <p className="mt-4 text-sm sm:text-base text-softwhite/70 font-light">
            An unwavering commitment to architectural purity and white-glove resident discretion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-gold-champagne/40 transition-colors">
            <span className="text-xs font-mono text-gold-champagne font-semibold block mb-2">
              01 / PERMANENCE
            </span>
            <h4 className="text-lg font-serif text-white mb-2">Generational Value</h4>
            <p className="text-xs text-softwhite/70 font-light leading-relaxed">
              Constructed with enduring structural integrity and rare stone materials that age gracefully over decades.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-gold-champagne/40 transition-colors">
            <span className="text-xs font-mono text-gold-champagne font-semibold block mb-2">
              02 / DISCRETION
            </span>
            <h4 className="text-lg font-serif text-white mb-2">Absolute Privacy</h4>
            <p className="text-xs text-softwhite/70 font-light leading-relaxed">
              Private elevator landings, shielded porte-cochères, and discreet service entries for dedicated staff.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-gold-champagne/40 transition-colors">
            <span className="text-xs font-mono text-gold-champagne font-semibold block mb-2">
              03 / HARMONY
            </span>
            <h4 className="text-lg font-serif text-white mb-2">Nature & Modernity</h4>
            <p className="text-xs text-softwhite/70 font-light leading-relaxed">
              Living garden walls, cascading water pavilions, and panoramic views blurring the threshold between exterior and interior.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-gold-champagne/40 transition-colors">
            <span className="text-xs font-mono text-gold-champagne font-semibold block mb-2">
              04 / SERVICE
            </span>
            <h4 className="text-lg font-serif text-white mb-2">Private Butler Desk</h4>
            <p className="text-xs text-softwhite/70 font-light leading-relaxed">
              Bespoke travel, sommelier reservations, and private estate maintenance curated around your individual schedule.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DISCOVERY CTA
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="rounded-3xl p-10 sm:p-14 bg-gradient-to-r from-sapphire via-midnight to-sapphire-dark border border-gold-champagne/30 text-center relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,197,138,0.15),transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl sm:text-4xl font-serif text-white">
              Discover Your Residence at Aurelia
            </h3>
            <p className="text-sm text-softwhite/75 font-light leading-relaxed">
              Preview our available luxury apartments, tranquil private villas, and iconic penthouses through our signature 3D showcase.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/properties"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.22em] font-medium text-midnight-dark bg-gold-gradient hover:brightness-110 transition-all duration-300 shadow-[0_0_20px_rgba(232,197,138,0.35)]"
              >
                <span>View Residences Collection</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all duration-300"
              >
                <span>Book Bespoke Viewing</span>
                <ArrowRight className="w-4 h-4 text-gold-champagne" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
