import React from 'react';
import Link from 'next/link';

interface AureliaLogoProps {
  className?: string;
  variant?: 'light' | 'gold' | 'default';
  size?: 'sm' | 'md' | 'lg';
}

export default function AureliaLogo({
  className = '',
  size = 'md',
}: AureliaLogoProps) {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
  };

  const textSizes = {
    sm: 'text-base tracking-[0.25em]',
    md: 'text-lg tracking-[0.3em]',
    lg: 'text-xl tracking-[0.35em]',
  };

  const subTextSizes = {
    sm: 'text-[8px] tracking-[0.35em]',
    md: 'text-[9px] tracking-[0.4em]',
    lg: 'text-[10px] tracking-[0.45em]',
  };

  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 transition-opacity duration-300 hover:opacity-90 ${className}`}
      aria-label="AURELIA RESIDENCES - Home"
    >
      {/* Brand Icon: Architectural Arched Crest matching reference */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center shrink-0`}>
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_8px_rgba(232,197,138,0.4)]"
        >
          <defs>
            <linearGradient id="goldArchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF1D6" />
              <stop offset="45%" stopColor="#E8C58A" />
              <stop offset="85%" stopColor="#D4A853" />
              <stop offset="100%" stopColor="#F4D49B" />
            </linearGradient>
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="1" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Arch */}
          <path
            d="M8 32V16C8 10.4772 12.4772 6 18 6C23.5228 6 28 10.4772 28 16V32"
            stroke="url(#goldArchGrad)"
            strokeWidth="2.2"
            strokeLinecap="round"
          />

          {/* Inner Arch */}
          <path
            d="M13 32V17C13 14.2386 15.2386 12 18 12C20.7614 12 23 14.2386 23 17V32"
            stroke="url(#goldArchGrad)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Central Keystone Light / Pillar Accent */}
          <circle cx="18" cy="18" r="1.2" fill="#FFF8EB" filter="url(#goldGlow)" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col justify-center">
        <span
          className={`font-serif font-medium uppercase text-white group-hover:text-gold-warm transition-colors duration-300 leading-none ${textSizes[size]}`}
          style={{ letterSpacing: '0.28em' }}
        >
          AURELIA
        </span>
        <span
          className={`font-sans font-light uppercase text-gold-champagne/90 leading-tight mt-1 ${subTextSizes[size]}`}
          style={{ letterSpacing: '0.42em' }}
        >
          RESIDENCES
        </span>
      </div>
    </Link>
  );
}
