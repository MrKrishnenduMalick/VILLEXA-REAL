'use client';

import React, { useState, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowUpRight, Bed, Bath, Maximize2, MapPin, Sparkles, Filter, PhoneCall } from 'lucide-react';
import CurvedCarousel from '@/components/CurvedCarousel';
import PropertyModal from '@/components/PropertyModal';
import { sampleProperties, Property } from '@/data/properties';

function PropertiesContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category') || 'All';

  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [gridCategory, setGridCategory] = useState<string>(
    ['Apartments', 'Villas', 'Penthouses'].includes(categoryParam)
      ? categoryParam
      : 'All'
  );

  const filteredProperties = sampleProperties.filter((p) => {
    if (gridCategory === 'All') return true;
    return p.category === gridCategory;
  });

  return (
    <>
      {/* Top Reference Pill Indicator (02 Properties) matching reference */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-[11px] font-mono text-softwhite/90 tracking-widest shadow-md">
          <span className="font-semibold text-gold-champagne">02</span>
          <span>Properties</span>
        </div>
      </div>

      {/* =========================================================================
          SIGNATURE CURVED 3D CAROUSEL SECTION - EXACT MATCH TO REFERENCE IMAGE
      ========================================================================= */}
      <section className="relative z-10 w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mt-2 mb-20">
        <CurvedCarousel
          initialCategory={gridCategory}
          onEnquire={(prop) => {
            window.location.href = `/contact?interest=${encodeURIComponent(prop.name)}`;
          }}
        />
      </section>

      {/* =========================================================================
          COMPREHENSIVE RESIDENCES ARCHITECTURAL INDEX (PREMIUM GLASS CARDS & MARBLE)
      ========================================================================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 border-t border-white/15">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.32em] font-semibold text-gold-champagne block mb-2 drop-shadow-[0_0_8px_rgba(232,197,138,0.3)]">
              CURATED ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-wide">
              Complete Residences Catalogue
            </h2>
            <p className="text-xs sm:text-sm text-softwhite/80 mt-2 max-w-xl font-light leading-relaxed">
              Explore individual floor arrangements, private garden layouts, and skyline vistas across our signature developments.
            </p>
          </div>

          {/* Quick Filter Glass Pills */}
          <div className="flex items-center gap-2 flex-wrap">
            {['All', 'Apartments', 'Villas', 'Penthouses'].map((cat) => (
              <button
                key={cat}
                onClick={() => setGridCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.18em] transition-all duration-300 ${
                  gridCategory === cat
                    ? 'bg-gold-gradient text-midnight font-bold shadow-[0_0_20px_rgba(232,197,138,0.45)] ring-1 ring-white/40'
                    : 'bg-white/[0.06] backdrop-blur-md text-softwhite/80 hover:text-white border border-white/15 shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Property Grid: Ultra-Premium Glass Transparent Cards with Marble Background */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((prop) => (
            <div
              key={prop.id}
              onClick={() => setSelectedProperty(prop)}
              className="group relative rounded-3xl overflow-hidden bg-white/[0.04] backdrop-blur-2xl border border-white/20 hover:border-gold-champagne/70 shadow-[0_20px_50px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_25px_65px_rgba(0,0,0,0.9),0_0_35px_rgba(232,197,138,0.3)] transition-all duration-500 flex flex-col cursor-pointer"
            >
              {/* High-Definition Architectural Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-midnight-dark">
                <Image
                  src={prop.image}
                  alt={prop.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-transparent to-transparent opacity-90" />

                {/* Top Category Tag - Crystal Glass Pill */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="px-3.5 py-1 rounded-full text-[10px] uppercase tracking-[0.22em] font-semibold text-gold-champagne bg-midnight/70 backdrop-blur-xl border border-gold-champagne/40 shadow-md">
                    {prop.category}
                  </span>
                  <span className="text-xs font-mono font-medium text-gold-warm bg-midnight/70 backdrop-blur-xl px-3 py-1 rounded-full border border-white/20 shadow-md">
                    {prop.price}
                  </span>
                </div>
              </div>

              {/* Card Body - Frosted Glass Container with Specular Edges */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4 bg-gradient-to-b from-transparent via-midnight/40 to-midnight/80 backdrop-blur-xl border-t border-white/10">
                <div>
                  <h3 className="text-xl font-serif text-white group-hover:text-gold-warm transition-colors tracking-wide">
                    {prop.name}
                  </h3>
                  <p className="text-xs text-gold-champagne tracking-wider mt-1 font-medium">
                    {prop.tagline}
                  </p>
                  <p className="text-xs text-softwhite/70 mt-2 line-clamp-2 font-light leading-relaxed">
                    {prop.description}
                  </p>
                </div>

                {/* Specs Row with Gold Highlights */}
                <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-softwhite/80">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5">
                      <Bed className="w-3.5 h-3.5 text-gold-champagne" />
                      {prop.bedrooms}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Bath className="w-3.5 h-3.5 text-gold-champagne" />
                      {prop.bathrooms}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-gold-champagne" />
                      {prop.area}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-gold-champagne group-hover:text-gold-warm group-hover:translate-x-1 transition-all">
                    <span>VIEW SPECS</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          PRIVATE VIEWING CALLOUT BANNER WITH MARBLE & GOLDEN STRIP ACCENT
      ========================================================================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-sapphire/80 via-midnight/90 to-sapphire-dark/90 backdrop-blur-2xl border border-gold-champagne/40 shadow-[0_25px_70px_rgba(0,0,0,0.85)] flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Golden Ribbon under banner */}
          <div className="absolute -top-12 -right-12 w-96 h-96 opacity-20 mix-blend-screen pointer-events-none">
            <Image
              src="/images/auric-flow-gold-ribbon.jpg"
              alt="Golden Ribbon Accent"
              fill
              className="object-contain"
            />
          </div>

          <div className="space-y-2 text-center md:text-left relative z-10">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-champagne flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4" />
              <span>CONFIDENTIAL PORTFOLIO ACQUISITION</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
              Seeking an Off-Market Flagship Estate?
            </h3>
            <p className="text-xs sm:text-sm text-softwhite/80 font-light max-w-xl">
              Certain trophy villas and ultra-exclusive penthouses are held in discreet private circulation. Inquire with our acquisition desk for bespoke access.
            </p>
          </div>

          <Link
            href="/contact"
            className="relative z-10 shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs uppercase tracking-[0.22em] font-semibold text-midnight-dark bg-gold-gradient hover:brightness-110 transition-all duration-300 shadow-[0_0_25px_rgba(232,197,138,0.5)] ring-1 ring-white/40"
          >
            <PhoneCall className="w-4 h-4 text-midnight-dark" />
            <span>Consult Private Office</span>
          </Link>
        </div>
      </section>

      {/* Property Details Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onEnquire={(prop) => {
          window.location.href = `/contact?interest=${encodeURIComponent(prop.name)}`;
        }}
      />
    </>
  );
}

export default function PropertiesPage() {
  return (
    <div className="relative min-h-screen bg-midnight text-white pt-24 pb-20 overflow-hidden">
      {/* Global Marble & Golden Strip Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Calacatta White Marble with Gold Veins background */}
        <div className="absolute inset-0 opacity-25 mix-blend-screen">
          <Image
            src="/images/calacatta-marble-gold-veins.jpg"
            alt="Calacatta White Marble Background"
            fill
            priority
            className="object-cover object-top"
          />
        </div>

        {/* Auric Flow Golden Ribbon Strips */}
        <div className="absolute top-10 -right-32 w-[800px] h-[700px] opacity-30 mix-blend-screen blur-[1px]">
          <Image
            src="/images/auric-flow-gold-ribbon.jpg"
            alt="Gold Ribbon Strip"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute top-2/3 -left-40 w-[800px] h-[700px] opacity-25 mix-blend-screen blur-[1px] rotate-45">
          <Image
            src="/images/auric-flow-gold-ribbon.jpg"
            alt="Gold Ribbon Accent"
            fill
            className="object-contain"
          />
        </div>

        {/* Ambient Twilight Blue Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-sapphire/30 via-royal/15 to-transparent blur-3xl" />
      </div>

      <Suspense fallback={<div className="min-h-screen bg-midnight flex items-center justify-center text-gold-champagne text-sm uppercase tracking-widest">Loading Residences...</div>}>
        <PropertiesContent />
      </Suspense>
    </div>
  );
}
