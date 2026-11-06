'use client';

import React, { useRef, useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, Film } from 'lucide-react';

interface WatchFilmModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc?: string;
  posterSrc?: string;
}

export default function WatchFilmModal({
  isOpen,
  onClose,
  videoSrc = '/videos/hero.mp4',
  posterSrc = '/images/hero-cinematic.webp',
}: WatchFilmModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(72); // 1:12 default
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
      setIsPlaying(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setHasError(true));
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    if (videoRef.current.duration && !isNaN(videoRef.current.duration)) {
      setDuration(videoRef.current.duration);
    }
    videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-midnight/90 backdrop-blur-2xl transition-all duration-300 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-5xl rounded-2xl overflow-hidden bg-midnight border border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.9)] ring-1 ring-gold-champagne/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-midnight-light/80 border-b border-white/10 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-gold-champagne animate-pulse shadow-[0_0_8px_#E8C58A]" />
            <div>
              <h3 className="text-sm uppercase tracking-[0.2em] font-medium text-white">
                Aurelia Residences — Architectural Showcase Film
              </h3>
              <p className="text-[11px] text-softwhite/60 font-light">
                Cinematic Twilight Presentation • 4K Architectural Experience
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-softwhite hover:text-white transition-colors"
            aria-label="Close video presentation"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Frame */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
          {!hasError ? (
            <video
              ref={videoRef}
              src={videoSrc}
              poster={posterSrc}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={() => setIsPlaying(false)}
              onError={() => setHasError(true)}
              className="w-full h-full object-cover"
              playsInline
            />
          ) : (
            <div className="text-center p-8 max-w-md">
              <Film className="w-12 h-12 text-gold-champagne mx-auto mb-4 opacity-75" />
              <h4 className="text-lg font-serif text-white mb-2">Cinematic Film Preview</h4>
              <p className="text-xs text-softwhite/70 mb-4">
                The high-definition presentation stream is currently undergoing scheduled updates. Please explore our residence gallery.
              </p>
            </div>
          )}

          {/* Central Play/Pause Overlay button */}
          <button
            onClick={togglePlay}
            className={`absolute z-10 w-20 h-20 rounded-full flex items-center justify-center bg-midnight/70 backdrop-blur-md border border-gold-champagne/60 text-gold-warm shadow-[0_0_30px_rgba(232,197,138,0.4)] transition-all duration-300 hover:scale-110 ${
              isPlaying ? 'opacity-0 group-hover:opacity-90' : 'opacity-100'
            }`}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 fill-gold-warm" />
            ) : (
              <Play className="w-8 h-8 fill-gold-warm ml-1" />
            )}
          </button>

          {/* Bottom Custom Glass Control Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-midnight/95 via-midnight/60 to-transparent backdrop-blur-sm opacity-90 transition-opacity">
            {/* Progress bar */}
            <div className="w-full h-1 bg-white/20 rounded-full mb-3 overflow-hidden cursor-pointer">
              <div
                className="h-full bg-gradient-to-r from-gold-champagne to-gold-warm transition-all"
                style={{
                  width: `${duration ? (currentTime / duration) * 100 : 0}%`,
                }}
              />
            </div>

            <div className="flex items-center justify-between text-xs text-softwhite">
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="hover:text-gold-champagne transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="hover:text-gold-champagne transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="font-mono text-[11px] text-softwhite/80">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-wider text-gold-champagne/80 font-medium">
                  Official Film Presentation
                </span>
                <button
                  onClick={handleFullscreen}
                  className="hover:text-gold-champagne transition-colors"
                  aria-label="Full screen"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

