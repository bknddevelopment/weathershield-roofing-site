'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export interface ShingleColor {
  name: string;
  category: 'Traditional' | 'Modern' | 'Coastal' | 'Premium';
  hexCode: string;
  image?: string;
  description?: string;
  popularity?: 'High' | 'Medium' | 'Low';
}

interface ColorGridProps {
  colors: ShingleColor[];
  columns?: 2 | 3 | 4;
}

export default function ColorGrid({ colors, columns = 4 }: ColorGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const prefersReducedMotion = useReducedMotion();

  const categories = ['All', 'Traditional', 'Modern', 'Coastal', 'Premium'];

  const filteredColors =
    selectedCategory === 'All'
      ? colors
      : colors.filter((color) => color.category === selectedCategory);

  const gridCols = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'
  };

  return (
    <div className="space-y-6">
      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 text-weather-dark font-semibold">
          <Filter className="w-5 h-5" />
          <span>Filter by:</span>
        </div>
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            whileHover={!prefersReducedMotion ? { scale: 1.05 } : undefined}
            whileTap={!prefersReducedMotion ? { scale: 0.95 } : undefined}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-weather-primary-dark text-white shadow-lg scale-105'
                : 'bg-white text-weather-dark border-2 border-weather-gray-dark hover:border-weather-primary hover:text-weather-primary'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Results Count */}
      <div className="text-sm text-weather-dark">
        Showing <strong>{filteredColors.length}</strong> color
        {filteredColors.length !== 1 && 's'}
      </div>

      {/* Color Grid */}
      <div className={`grid ${gridCols[columns]} gap-6`}>
        {filteredColors.map((color, index) => (
          <motion.div
            key={color.name}
            initial={!prefersReducedMotion ? { opacity: 0, scale: 0.9 } : undefined}
            whileInView={!prefersReducedMotion ? { opacity: 1, scale: 1 } : undefined}
            viewport={{ once: true }}
            transition={!prefersReducedMotion ? {
              duration: 0.5,
              delay: index * 0.05,
            } : undefined}
            className="group bg-white rounded-xl overflow-hidden border-2 border-weather-gray-dark hover:border-weather-primary hover:shadow-xl transition-all duration-300"
          >
            {/* Color Swatch or Image */}
            <div className="relative aspect-square overflow-hidden bg-gray-100">
              {color.image ? (
                <img
                  src={color.image}
                  alt={`${color.name} shingle color`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              ) : (
                <div
                  className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundColor: color.hexCode }}
                  aria-label={`${color.name} color swatch`}
                />
              )}

              {/* Popularity Badge */}
              {color.popularity === 'High' && (
                <div className="absolute top-3 right-3 bg-weather-amber text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  Popular
                </div>
              )}

              {/* Category Tag */}
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-weather-dark text-xs font-semibold px-3 py-1 rounded-full">
                {color.category}
              </div>
            </div>

            {/* Color Info */}
            <div className="p-4">
              <h3 className="text-lg font-bold text-weather-black mb-1 group-hover:text-weather-primary transition-colors">
                {color.name}
              </h3>

              {color.description && (
                <p className="text-sm text-weather-dark line-clamp-2 mb-2">
                  {color.description}
                </p>
              )}

              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 rounded-full border-2 border-gray-300"
                  style={{ backgroundColor: color.hexCode }}
                  aria-label={`${color.name} hex color`}
                />
                <span className="text-xs font-mono text-gray-500 uppercase">
                  {color.hexCode}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {filteredColors.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12 text-weather-dark"
        >
          <p className="text-lg">No colors found in this category.</p>
          <button
            onClick={() => setSelectedCategory('All')}
            className="mt-4 text-weather-primary font-semibold hover:underline"
          >
            View all colors
          </button>
        </motion.div>
      )}

      {/* Bottom CTA */}
      <div className="mt-8 bg-gradient-to-r from-weather-teal/10 to-weather-purple/10 rounded-xl p-6 border-2 border-weather-teal/20 text-center">
        <p className="text-lg font-semibold text-weather-black mb-3">
          Need help choosing the perfect color?
        </p>
        <p className="text-weather-dark mb-4">
          Our roofing experts can provide free color samples and professional recommendations
          based on your home's style.
        </p>
        <a
          href="tel:+18438775539"
          className="inline-flex items-center gap-2 bg-weather-primary-dark text-white font-bold px-6 py-3 rounded-lg hover:bg-weather-accent transition-all hover:scale-105"
        >
          Call (843) 877-5539 for Free Samples
        </a>
      </div>
    </div>
  );
}
