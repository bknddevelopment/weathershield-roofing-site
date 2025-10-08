'use client';

import { Star, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function LiveReviewWidget() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      className={`inline-flex items-center gap-3 bg-gradient-to-r from-weather-amber/20 to-weather-amber/10 backdrop-blur-md border border-weather-amber/40 rounded-full px-6 py-3 shadow-lg transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="w-5 h-5 text-weather-amber fill-weather-amber animate-pulse"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
      <div className="h-6 w-px bg-weather-amber/30" />
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white">5.0</span>
          <TrendingUp className="w-4 h-4 text-green-400" />
        </div>
        <span className="text-xs text-gray-200 font-medium">
          73 Google Reviews
        </span>
      </div>
    </div>
  );
}
