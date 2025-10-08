'use client';

import { Phone, AlertCircle } from 'lucide-react';

export default function EmergencyBanner() {
  return (
    <div className="bg-gradient-to-r from-red-600 via-orange-600 to-red-600 text-white py-2 relative overflow-hidden">
      {/* Animated background pulse */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center gap-3 text-center flex-wrap">
          <AlertCircle className="w-5 h-5 animate-pulse" />
          <span className="font-bold text-sm md:text-base uppercase tracking-wide">
            🚨 Emergency 24/7 Service Available
          </span>
          <span className="hidden md:inline text-sm">|</span>
          <a
            href="tel:+18438775539"
            className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-1 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now: (843) 877-5539</span>
          </a>
        </div>
      </div>
    </div>
  );
}
