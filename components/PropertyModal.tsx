'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Bed, Bath, Maximize2, MapPin, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Property } from '@/data/properties';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
  onEnquire?: (property: Property) => void;
}

export default function PropertyModal({
  property,
  onClose,
  onEnquire,
}: PropertyModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (property) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [property, onClose]);

  if (!property) return null;

  const currentImage =
    property.gallery && property.gallery.length > 0
      ? property.gallery[activeImageIndex] || property.image
      : property.image;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-midnight/85 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col rounded-3xl overflow-hidden bg-midnight-dark border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.95)] ring-1 ring-gold-champagne/30 text-softwhite"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header inside modal */}
        <div className="flex items-center justify-between px-6 py-4 bg-midnight-light/90 border-b border-white/10 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] font-semibold text-gold-champagne bg-gold-champagne/10 border border-gold-champagne/30">
              {property.category}
            </span>
            <span className="text-xs text-softwhite/60 tracking-wider hidden sm:inline">
              Ref: {property.id.toUpperCase()}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-softwhite hover:text-white transition-colors"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto px-6 py-6 sm:px-8 space-y-8 custom-scrollbar">
          {/* Main Title & Price Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gold-champagne font-medium mb-1">
                {property.tagline}
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif text-white tracking-wide">
                {property.name}
              </h2>
              <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm text-softwhite/75">
                <MapPin className="w-4 h-4 text-gold-champagne shrink-0" />
                <span>{property.location}</span>
              </div>
            </div>

            <div className="text-left md:text-right">
              <span className="text-xs uppercase tracking-[0.2em] text-softwhite/60 block mb-0.5">
                Investment Value
              </span>
              <span className="text-2xl sm:text-3xl font-serif font-light text-gold-warm">
                {property.price}
              </span>
            </div>
          </div>

          {/* Gallery Showcase */}
          <div className="space-y-4">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/15 bg-black/40 shadow-inner">
              <Image
                src={currentImage}
                alt={property.name}
                fill
                className="object-cover transition-all duration-500"
                sizes="(max-w-7xl) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Thumbnail Navigation */}
            {property.gallery && property.gallery.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {property.gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-16 rounded-xl overflow-hidden shrink-0 border transition-all duration-300 ${
                      activeImageIndex === idx
                        ? 'border-gold-champagne shadow-[0_0_12px_rgba(232,197,138,0.5)] scale-105'
                        : 'border-white/20 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={imgUrl}
                      alt={`View ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Key Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
            <div className="flex flex-col items-center justify-center p-3 text-center border-r border-white/10 last:border-r-0">
              <Bed className="w-5 h-5 text-gold-champagne mb-2" />
              <span className="text-lg font-serif text-white">{property.bedrooms} Beds</span>
              <span className="text-[10px] uppercase tracking-wider text-softwhite/50">Bedrooms</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 text-center sm:border-r border-white/10">
              <Bath className="w-5 h-5 text-gold-champagne mb-2" />
              <span className="text-lg font-serif text-white">{property.bathrooms} Baths</span>
              <span className="text-[10px] uppercase tracking-wider text-softwhite/50">Bathrooms</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 text-center border-r border-white/10">
              <Maximize2 className="w-5 h-5 text-gold-champagne mb-2" />
              <span className="text-lg font-serif text-white">{property.area}</span>
              <span className="text-[10px] uppercase tracking-wider text-softwhite/50">Internal Area</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3 text-center">
              <Sparkles className="w-5 h-5 text-gold-champagne mb-2" />
              <span className="text-lg font-serif text-white">{property.category}</span>
              <span className="text-[10px] uppercase tracking-wider text-softwhite/50">Residence Type</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-sm uppercase tracking-[0.2em] text-gold-champagne font-semibold">
              Architectural Concept & Vision
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-softwhite/80 font-light">
              {property.description}
            </p>
          </div>

          {/* Amenities & Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-white/10">
            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-gold-champagne font-semibold mb-4">
                Signature Amenities
              </h3>
              <ul className="space-y-3">
                {property.amenities.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-softwhite/80">
                    <CheckCircle2 className="w-4 h-4 text-gold-champagne shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] text-gold-champagne font-semibold mb-4">
                Technical & Material Specifications
              </h3>
              <div className="space-y-3">
                {property.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm py-1.5 border-b border-white/5">
                    <span className="text-softwhite/60">{feat.label}</span>
                    <span className="text-white font-medium">{feat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Private Consultation CTA Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-sapphire/50 via-midnight to-midnight border border-gold-champagne/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs uppercase tracking-wider text-gold-champagne font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Bespoke Residence Appointment</span>
              </div>
              <p className="text-xs text-softwhite/70">
                Schedule a confidential walk-through with our senior private residence director.
              </p>
            </div>

            {onEnquire ? (
              <button
                onClick={() => {
                  onClose();
                  onEnquire(property);
                }}
                className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium text-midnight-dark bg-gold-gradient hover:brightness-110 transition-all duration-300 shadow-[0_0_20px_rgba(232,197,138,0.4)]"
              >
                <span>Enquire For {property.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <Link
                href={`/contact?interest=${encodeURIComponent(property.name)}`}
                onClick={onClose}
                className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium text-midnight-dark bg-gold-gradient hover:brightness-110 transition-all duration-300 shadow-[0_0_20px_rgba(232,197,138,0.4)]"
              >
                <span>Enquire For {property.name}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

