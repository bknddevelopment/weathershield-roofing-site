'use client';

import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function FloatingPhoneButton() {
  const phoneNumber = '(843) 493-4963';
  const phoneLink = 'tel:+18434934963';

  return (
    <motion.a
      href={phoneLink}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed right-4 bottom-6 z-50 bg-gradient-to-r from-weather-amber to-weather-amber-dark text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group"
      aria-label={`Call Weather Shield Roofing at ${phoneNumber}`}
    >
      {/* Main Button Content */}
      <div className="flex items-center gap-3">
        <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
        <span className="hidden sm:block font-bold pr-2">
          {phoneNumber}
        </span>
      </div>

      {/* Pulse Animation for Visibility */}
      <motion.div
        className="absolute inset-0 bg-weather-amber rounded-full pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1
        }}
      />

      {/* Tooltip on Hover (Mobile-friendly) */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-weather-navy text-white text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg">
        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4" />
          <span>Call for Emergency Service</span>
        </div>
        {/* Tooltip Arrow */}
        <div className="absolute top-full right-4 -mt-1 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-weather-navy"></div>
      </div>
    </motion.a>
  );
}