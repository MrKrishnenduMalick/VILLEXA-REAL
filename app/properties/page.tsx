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
    <div className="relative min-h-screen bg-midnight text-white pt-24 pb-20">
      {/* Background Architectural Glow & Radial Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-sapphire/20 via-royal/10 to-transparent pointer-events-none blur-3xl" />

      {/* Top Reference Pill Indicator (02 Properties) matching reference */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-mono text-softwhite/80 tracking-widest shadow-sm">
          <span className="font-semibold text-gold-champagne">02</span>
          <span>Properties</span>
        </div>
      </div>

      {/* =========================================================================
          SIGNATURE CURVED 3D CAROUSEL SECTION - EXACT MATCH TO REFERENCE IMAGE
      ========================================================================= */}
      <section className="relative w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mt-2 mb-20">
        <CurvedCarousel
          initialCategory={gridCategory}
          onEnquire={(prop) => {
            window.location.href = `/contact?interest=${encodeURIComponent(prop.name)}`;
          }}
        />
      </section>

      {/* =========================================================================
          COMPREHENSIVE RESIDENCES ARCHITECTURAL INDEX (DETAILED GRID)
      ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] font-semibold text-gold-champagne block mb-2">
              CURATED ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-wide">
              Complete Residences Catalogue
            </h2>
            <p className="text-xs sm:text-sm text-softwhite/70 mt-2 max-w-xl font-light">
              Explore individual floor arrangements, private garden layouts, and skyline vistas across our signature global developments.
            </p>
          </div>

          {/* Quick Filter Buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            {['All', 'Apartments', 'Villas', 'Penthouses'].map((cat) => (
              <button
                key={cat}
                onClick={() => setGridCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.18em] transition-all duration-300 ${
                  gridCategory === cat
                    ? 'bg-gold-gradient text-midnight font-bold shadow-[0_0_15px_rgba(232,197,138,0.3)]'
                    : 'bg-white/[0.04] text-softwhite/70 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((prop) => (
            <div
              key={prop.id}
              onClick={() => setSelectedProperty(prop)}
              className="group relative rounded-3xl overflow-hidden bg-midnight-light/60 border border-white/15 hover:border-gold-champagne/60 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_25px_rgba(232,197,138,0.2)] flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/50">
                <Image
                  src={prop.image}
                  alt={prop.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-dark via-transparent to-transparent opacity-80" />

                {/* Top Category Tag */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold text-gold-champagne bg-midnight/80 backdrop-blur-md border border-gold-champagne/30">
                    {prop.category}
                  </span>
                  <span className="text-xs font-mono font-medium text-gold-warm bg-midnight/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                    {prop.price}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-serif text-white group-hover:text-gold-warm transition-colors">
                    {prop.name}
                  </h3>
                  <p className="text-xs text-gold-champagne/90 tracking-wide mt-1">
                    {prop.tagline}
                  </p>
                  <p className="text-xs text-softwhite/65 mt-2 line-clamp-2 font-light leading-relaxed">
                    {prop.description}
                  </p>
                </div>

                {/* Specs */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-softwhite/70">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Bed className="w-3.5 h-3.5 text-gold-champagne" />
                      {prop.bedrooms}
                    </span>
                    <span className="flex items-center gap-1">
                      <Bath className="w-3.5 h-3.5 text-gold-champagne" />
                      {prop.bathrooms}
                    </span>
                    <span className="flex items-center gap-1">
                      <Maximize2 className="w-3.5 h-3.5 text-gold-champagne" />
                      {prop.area}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-semibold text-gold-champagne group-hover:translate-x-1 transition-transform">
                    <span>View Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          PRIVATE VIEWING CALLOUT BANNER
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-sapphire/80 via-midnight to-sapphire-dark border border-gold-champagne/40 shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-champagne flex items-center justify-center md:justify-start gap-2">
              <Sparkles className="w-4 h-4" />
              <span>CONFIDENTIAL PORTFOLIO ACQUISITION</span>
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
              Seeking an Off-Market Flagship Estate?
            </h3>
            <p className="text-xs sm:text-sm text-softwhite/75 font-light max-w-xl">
              Certain trophy villas and ultra-exclusive penthouses are held in discreet private circulation. Inquire with our acquisition desk for bespoke access.
            </p>
          </div>

          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs uppercase tracking-[0.22em] font-semibold text-midnight-dark bg-gold-gradient hover:brightness-110 transition-all duration-300 shadow-[0_0_20px_rgba(232,197,138,0.4)]"
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
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-midnight flex items-center justify-center text-gold-champagne text-sm uppercase tracking-widest">Loading Residences...</div>}>
      <PropertiesContent />
    </Suspense>
  );
}

