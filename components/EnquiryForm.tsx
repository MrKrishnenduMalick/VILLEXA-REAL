'use client';

import React, { useState } from 'react';
import { User, Mail, Phone, Home, MessageSquare, Send, CheckCircle2, ArrowRight, Loader2, Sparkles } from 'lucide-react';

interface EnquiryFormProps {
  initialInterest?: string;
  className?: string;
}

export default function EnquiryForm({
  initialInterest = 'Apartments',
  className = '',
}: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: initialInterest || 'Apartments',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);
  const [referenceCode, setReferenceCode] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    } else if (formData.name.trim().length < 3) {
      newErrors.name = 'Name must be at least 3 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    const phoneClean = formData.phone.replace(/[\s\-\+\(\)]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Contact telephone number is required.';
    } else if (phoneClean.length < 8) {
      newErrors.phone = 'Please provide a valid phone number (at least 8 digits).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please share your residential requirements.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate luxury concierge processing
    setTimeout(() => {
      const code = `AUR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setReferenceCode(code);
      setSubmittedData({ ...formData });
      setIsSubmitting(false);
    }, 1200);
  };

  const handleReset = () => {
    setSubmittedData(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: 'Apartments',
      message: '',
    });
    setErrors({});
  };

  if (submittedData) {
    return (
      <div
        className={`relative p-8 sm:p-10 rounded-3xl bg-midnight/80 backdrop-blur-2xl border border-gold-champagne/40 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(232,197,138,0.2)] text-center animate-fade-in ${className}`}
      >
        <div className="w-16 h-16 rounded-full bg-gold-champagne/15 border border-gold-champagne/40 text-gold-warm mx-auto flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(232,197,138,0.3)]">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-gold-champagne">
          ENQUIRY CONFIRMED
        </span>
        <h3 className="text-2xl sm:text-3xl font-serif text-white mt-2 mb-3">
          Thank You, {submittedData.name}
        </h3>
        <p className="text-sm text-softwhite/80 max-w-md mx-auto leading-relaxed mb-6 font-light">
          Your private residential consultation request has been recorded. Our private concierge director will review your preferences and get in touch within 24 business hours.
        </p>

        {/* Reference card */}
        <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-left text-xs space-y-2 mb-6 max-w-md mx-auto">
          <div className="flex justify-between items-center pb-2 border-b border-white/10">
            <span className="text-softwhite/60 uppercase tracking-wider text-[10px]">Reference Number</span>
            <span className="font-mono font-bold text-gold-champagne">{referenceCode}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-softwhite/60">Residence Interest</span>
            <span className="text-white font-medium">{submittedData.interest}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-softwhite/60">Direct Contact</span>
            <span className="text-white font-medium">{submittedData.email}</span>
          </div>
          <div className="pt-2 text-[10px] text-softwhite/50 italic border-t border-white/5">
            * This is a frontend demonstration confirmation.
          </div>
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium text-gold-warm border border-gold-champagne/40 bg-gold-champagne/10 hover:bg-gold-champagne/20 transition-all"
        >
          <span>Send Another Enquiry</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <div
      className={`relative p-6 sm:p-9 rounded-3xl bg-midnight/70 backdrop-blur-2xl border border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.7),0_0_25px_rgba(35,63,112,0.3)] ring-1 ring-gold-champagne/20 ${className}`}
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-2xl font-serif text-white tracking-wide">
            Send an Enquiry
          </h3>
          <p className="text-xs text-softwhite/60 mt-1 font-light">
            Confidential assistance with our private real-estate team.
          </p>
        </div>
        <Sparkles className="w-5 h-5 text-gold-champagne/80" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Full Name */}
        <div>
          <label className="block text-[11px] uppercase tracking-[0.15em] text-softwhite/80 font-medium mb-1.5">
            Your Name <span className="text-gold-champagne">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-softwhite/50">
              <User className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Eleanor Vance"
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-softwhite/35 focus:outline-none focus:ring-1 transition-all ${
                errors.name
                  ? 'border-red-400 focus:ring-red-400'
                  : 'border-white/15 focus:border-gold-champagne focus:ring-gold-champagne/40'
              }`}
            />
          </div>
          {errors.name && (
            <p className="mt-1 text-[11px] text-red-400 font-light">{errors.name}</p>
          )}
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-[11px] uppercase tracking-[0.15em] text-softwhite/80 font-medium mb-1.5">
            Email Address <span className="text-gold-champagne">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-softwhite/50">
              <Mail className="w-4 h-4" />
            </div>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="eleanor@residence.com"
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-softwhite/35 focus:outline-none focus:ring-1 transition-all ${
                errors.email
                  ? 'border-red-400 focus:ring-red-400'
                  : 'border-white/15 focus:border-gold-champagne focus:ring-gold-champagne/40'
              }`}
            />
          </div>
          {errors.email && (
            <p className="mt-1 text-[11px] text-red-400 font-light">{errors.email}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-[11px] uppercase tracking-[0.15em] text-softwhite/80 font-medium mb-1.5">
            Phone Number <span className="text-gold-champagne">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-softwhite/50">
              <Phone className="w-4 h-4" />
            </div>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 98765 43210"
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-softwhite/35 focus:outline-none focus:ring-1 transition-all ${
                errors.phone
                  ? 'border-red-400 focus:ring-red-400'
                  : 'border-white/15 focus:border-gold-champagne focus:ring-gold-champagne/40'
              }`}
            />
          </div>
          {errors.phone && (
            <p className="mt-1 text-[11px] text-red-400 font-light">{errors.phone}</p>
          )}
        </div>

        {/* Interested In */}
        <div>
          <label className="block text-[11px] uppercase tracking-[0.15em] text-softwhite/80 font-medium mb-1.5">
            Interested In
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-softwhite/50">
              <Home className="w-4 h-4" />
            </div>
            <select
              value={formData.interest}
              onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-midnight-light border border-white/15 text-sm text-white focus:outline-none focus:border-gold-champagne focus:ring-1 focus:ring-gold-champagne/40 transition-all appearance-none cursor-pointer"
            >
              <option value="Apartments" className="bg-midnight text-white">Apartments Collection</option>
              <option value="Villas" className="bg-midnight text-white">Private Luxury Villas</option>
              <option value="Penthouses" className="bg-midnight text-white">Skyline Penthouses</option>
              <option value="Aurelia Villas" className="bg-midnight text-white">Aurelia Villas (Flagship)</option>
              <option value="Aurelia Apartments" className="bg-midnight text-white">Aurelia Apartments</option>
              <option value="Aurelia Penthouses" className="bg-midnight text-white">Aurelia Penthouses</option>
              <option value="General Inquiry" className="bg-midnight text-white">General Residence Inquiry</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-[11px] uppercase tracking-[0.15em] text-softwhite/80 font-medium mb-1.5">
            Your Message <span className="text-gold-champagne">*</span>
          </label>
          <div className="relative">
            <div className="absolute top-3.5 left-3.5 pointer-events-none text-softwhite/50">
              <MessageSquare className="w-4 h-4" />
            </div>
            <textarea
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us what you are looking for in your ideal residence..."
              className={`w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.04] border text-sm text-white placeholder-softwhite/35 focus:outline-none focus:ring-1 transition-all resize-none ${
                errors.message
                  ? 'border-red-400 focus:ring-red-400'
                  : 'border-white/15 focus:border-gold-champagne focus:ring-gold-champagne/40'
              }`}
            />
          </div>
          {errors.message && (
            <p className="mt-1 text-[11px] text-red-400 font-light">{errors.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-2 py-3.5 px-6 rounded-2xl text-xs uppercase tracking-[0.25em] font-medium text-midnight-dark bg-gold-gradient hover:brightness-110 active:scale-[0.99] transition-all duration-300 shadow-[0_0_25px_rgba(232,197,138,0.35)] flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-midnight" />
              <span>Transmitting Request...</span>
            </>
          ) : (
            <>
              <span>Submit Enquiry</span>
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
