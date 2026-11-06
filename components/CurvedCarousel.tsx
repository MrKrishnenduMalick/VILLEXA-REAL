'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ArrowUpRight, Bed, Bath, Maximize2, Sparkles } from 'lucide-react';
import { Property, sampleProperties } from '@/data/properties';
import PropertyModal from './PropertyModal';

interface CurvedCarouselProps {
  initialCategory?: string;
  onEnquire?: (property: Property) => void;
}

export default function CurvedCarousel({
  initialCategory = 'All',
  onEnquire,
}: CurvedCarouselProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  // Filter properties
  const filteredProperties = sampleProperties.filter((item) => {
    if (selectedCategory === 'All') return true;
    return item.category === selectedCategory;
  });

  // Clamp current index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  const total = filteredProperties.length;

  const handlePrev = useCallback(() => {
    if (total === 0) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    if (total === 0) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedProperty) return; // ignore if modal open
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext, selectedProperty]);

  // Mouse Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    if (dragOffset > 60) {
      handlePrev();
    } else if (dragOffset < -60) {
      handleNext();
    }
    setIsDragging(false);
    setDragOffset(0);
  };

  // Touch Swipe handlers
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diffX = e.changedTouches[0].clientX - touchStartX.current;
    const diffY = e.changedTouches[0].clientY - touchStartY.current;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
  };

  const activeItem = filteredProperties[currentIndex] || filteredProperties[0];

  return (
    <div className="relative w-full overflow-hidden select-none py-6 sm:py-10">
      {/* =========================================================================
          MARBLE & GOLDEN RIBBON LUXURY BACKGROUND
      ========================================================================= */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Calacatta Marble texture with golden veins */}
        <div className="absolute inset-0 opacity-20 mix-blend-screen">
          <Image
            src="/images/calacatta-marble-gold-veins.jpg"
            alt="Calacatta Marble with Gold Veins"
            fill
            className="object-cover"
          />
        </div>

        {/* Auric Flow Golden Ribbon strip traversing the background */}
        <div className="absolute -top-10 -right-20 w-[700px] h-[500px] opacity-25 mix-blend-screen blur-[1px]">
          <Image
            src="/images/auric-flow-gold-ribbon.jpg"
            alt="Golden Ribbon Strip"
            fill
            className="object-contain"
          />
        </div>

        {/* Architectural Neon Elliptical Arc from reference image */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[950px] max-w-full h-[460px] rounded-[50%] border-t-2 border-sapphire-light/50 shadow-[0_0_60px_rgba(76,133,230,0.3)] opacity-90" />
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[900px] max-w-full h-[420px] rounded-[50%] border-t border-gold-champagne/30 shadow-[0_0_35px_rgba(232,197,138,0.2)] opacity-60" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-royal/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Header & Filter Tabs */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 mb-8 sm:mb-12">
        <span className="inline-block text-xs uppercase tracking-[0.32em] font-semibold text-gold-champagne mb-2 drop-shadow-[0_0_10px_rgba(232,197,138,0.3)]">
          OUR COLLECTION
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-wide drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
          Explore Our Residences
        </h2>

        {/* Filter Pills with Luxury Glass */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mt-6 flex-wrap">
          {['All', 'Apartments', 'Villas', 'Penthouses'].map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                  isSelected
                    ? 'bg-gold-gradient text-midnight font-bold shadow-[0_0_25px_rgba(232,197,138,0.5)] scale-105 ring-1 ring-white/50'
                    : 'bg-white/[0.05] text-softwhite/80 hover:text-white hover:bg-white/[0.1] border border-white/15 backdrop-blur-md shadow-sm'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3D Curved Carousel Viewport */}
      <div
        className="relative w-full max-w-6xl mx-auto h-[480px] sm:h-[540px] flex items-center justify-center cursor-grab active:cursor-grabbing perspective-container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Left Arrow Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-2 sm:left-6 z-30 w-12 h-12 rounded-full flex items-center justify-center bg-midnight/60 backdrop-blur-2xl border border-white/25 text-softwhite hover:text-gold-champagne hover:border-gold-champagne/70 hover:shadow-[0_0_25px_rgba(232,197,138,0.4)] transition-all duration-300"
          aria-label="Previous Residence"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>

        {/* Right Arrow Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-2 sm:right-6 z-30 w-12 h-12 rounded-full flex items-center justify-center bg-midnight/60 backdrop-blur-2xl border border-white/25 text-softwhite hover:text-gold-champagne hover:border-gold-champagne/70 hover:shadow-[0_0_25px_rgba(232,197,138,0.4)] transition-all duration-300"
          aria-label="Next Residence"
        >
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Carousel 3D Cards Stage */}
        <div className="relative w-full h-full flex items-center justify-center">
          {filteredProperties.map((prop, idx) => {
            let offset = idx - currentIndex;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const isCenter = offset === 0;
            const isImmediateSide = Math.abs(offset) === 1;
            const isHidden = Math.abs(offset) > 2;

            if (isHidden) return null;

            const xOffset = offset * 330;
            const rotateY = offset * -22;
            const scale = isCenter ? 1 : isImmediateSide ? 0.86 : 0.72;
            const zIndex = 25 - Math.abs(offset) * 5;
            const opacity = isCenter ? 1 : isImmediateSide ? 0.8 : 0.45;

            return (
              <div
                key={prop.id}
                onClick={() => {
                  if (isCenter) {
                    setSelectedProperty(prop);
                  } else {
                    setCurrentIndex(idx);
                  }
                }}
                style={{
                  transform: `translateX(${xOffset}px) translateZ(${
                    isCenter ? 50 : -80 * Math.abs(offset)
                  }px) rotateY(${rotateY}deg) scale(${scale})`,
                  zIndex,
                  opacity,
                  transition: isDragging
                    ? 'none'
                    : 'transform 0.65s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.65s ease',
                }}
                className={`absolute w-[310px] sm:w-[390px] md:w-[430px] h-[400px] sm:h-[460px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ${
                  isCenter
                    ? 'ring-2 ring-gold-champagne/80 shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_40px_rgba(232,197,138,0.35)]'
                    : 'ring-1 ring-white/20 hover:ring-white/50 shadow-[0_15px_40px_rgba(0,0,0,0.6)]'
                }`}
              >
                {/* Ultra-Premium Glass Container with Specular Edges */}
                <div className="relative w-full h-full bg-midnight-dark">
                  {/* High-Resolution Architectural Image */}
                  <Image
                    src={prop.image}
                    alt={prop.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 320px, 430px"
                    priority={isCenter}
                  />

                  {/* Glass Sheen & Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />

                  {/* Specular Glass Corner Light Highlight */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />

                  {/* Top Badges with Crystal Glass */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3.5 py-1 rounded-full text-[10px] uppercase tracking-[0.22em] font-semibold text-gold-champagne bg-midnight/70 backdrop-blur-xl border border-gold-champagne/40 shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
                      {prop.category}
                    </span>
                    <span className="text-[11px] font-mono font-medium text-gold-warm bg-midnight/70 backdrop-blur-xl px-3 py-1 rounded-full border border-white/20 shadow-[0_4px_15px_rgba(0,0,0,0.5)]">
                      {prop.price}
                    </span>
                  </div>

                  {/* Bottom Content: Transparent Frosted Glass Card Body matching screenshot 3 & reference */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 bg-midnight/65 backdrop-blur-2xl border-t border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-serif text-white tracking-wide leading-tight">
                          {prop.name}
                        </h3>
                        <p className="text-xs text-softwhite/80 mt-1 font-light tracking-wider">
                          {prop.tagline}
                        </p>

                        {/* Specs row with gold icons */}
                        <div className="flex items-center gap-3 mt-3 text-[11px] text-softwhite/75">
                          <span className="flex items-center gap-1.5">
                            <Bed className="w-3.5 h-3.5 text-gold-champagne" />
                            {prop.bedrooms} Beds
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1.5">
                            <Bath className="w-3.5 h-3.5 text-gold-champagne" />
                            {prop.bathrooms} Baths
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1.5">
                            <Maximize2 className="w-3.5 h-3.5 text-gold-champagne" />
                            {prop.area}
                          </span>
                        </div>
                      </div>

                      {/* Golden Circular Action Button matching screenshot 3 */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProperty(prop);
                        }}
                        className={`w-12 h-12 rounded-full shrink-0 flex items-center justify-center transition-all duration-300 ${
                          isCenter
                            ? 'bg-gold-gradient text-midnight shadow-[0_0_20px_rgba(232,197,138,0.6)] hover:scale-110 ring-2 ring-white/30'
                            : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                        }`}
                        aria-label={`View details for ${prop.name}`}
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Indicators matching reference: Active Gold Pill + Inactive Dots */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {filteredProperties.map((_, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`transition-all duration-300 ${
                isActive
                  ? 'w-9 h-2 rounded-full bg-gold-warm shadow-[0_0_12px_#F4D49B]'
                  : 'w-2 h-2 rounded-full bg-white/25 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          );
        })}
      </div>

      {/* Center Property Quick Action Summary */}
      {activeItem && (
        <div className="mt-8 text-center max-w-xl mx-auto px-4">
          <p className="text-xs uppercase tracking-[0.25em] text-gold-champagne mb-1 font-semibold">
            Now Focusing: {activeItem.name}
          </p>
          <p className="text-xs text-softwhite/70 mb-4 line-clamp-1 font-light">
            {activeItem.location} — {activeItem.area} of bespoke architectural living
          </p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setSelectedProperty(activeItem)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium text-white bg-white/[0.08] backdrop-blur-xl border border-white/20 hover:border-gold-champagne hover:text-gold-warm transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
            >
              <span>Explore Floor Plans & Specs</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold-champagne" />
            </button>
          </div>
        </div>
      )}

      {/* Property Details Modal */}
      <PropertyModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onEnquire={onEnquire}
      />
    </div>
  );
}
