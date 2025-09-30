'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, X } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export interface DiagramLabel {
  id: string;
  title: string;
  description: string;
  x: number; // Percentage position (0-100)
  y: number; // Percentage position (0-100)
}

interface AnatomyDiagramProps {
  image: string;
  imageAlt: string;
  labels: DiagramLabel[];
  title?: string;
}

export default function AnatomyDiagram({
  image,
  imageAlt,
  labels,
  title = 'Roof Anatomy Diagram'
}: AnatomyDiagramProps) {
  const [activeLabel, setActiveLabel] = useState<string | null>(null);
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const handleLabelClick = (labelId: string) => {
    setActiveLabel(activeLabel === labelId ? null : labelId);
  };

  const activeLabelData = labels.find((label) => label.id === activeLabel);

  return (
    <div className="space-y-6">
      {title && (
        <h3 className="text-2xl font-bold text-weather-black text-center">{title}</h3>
      )}

      {/* Interactive Diagram Container */}
      <div className="relative bg-white rounded-xl border-2 border-weather-gray-dark overflow-hidden shadow-lg">
        {/* Base Image */}
        <div className="relative w-full">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-auto"
            style={{ display: 'block' }}
          />

          {/* Clickable Hotspots */}
          {labels.map((label) => (
            <button
              key={label.id}
              onClick={() => handleLabelClick(label.id)}
              onMouseEnter={() => setHoveredLabel(label.id)}
              onMouseLeave={() => setHoveredLabel(null)}
              className="absolute group"
              style={{
                left: `${label.x}%`,
                top: `${label.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              aria-label={`Learn about ${label.title}`}
            >
              {/* Hotspot Marker */}
              <motion.div
                className={`relative flex items-center justify-center w-10 h-10 rounded-full border-3 transition-all ${
                  activeLabel === label.id || hoveredLabel === label.id
                    ? 'bg-weather-primary-dark border-weather-primary-dark scale-125'
                    : 'bg-white border-weather-primary hover:scale-110'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Info
                  className={`w-5 h-5 ${
                    activeLabel === label.id || hoveredLabel === label.id
                      ? 'text-white'
                      : 'text-weather-primary'
                  }`}
                />

                {/* Pulse Animation */}
                {activeLabel !== label.id && (
                  <span className="absolute inset-0 rounded-full border-2 border-weather-primary animate-ping opacity-75" />
                )}
              </motion.div>

              {/* Tooltip on Hover (Desktop Only) */}
              {hoveredLabel === label.id && activeLabel !== label.id && (
                <motion.div
                  initial={!prefersReducedMotion ? { opacity: 0, y: 10 } : undefined}
                  animate={!prefersReducedMotion ? { opacity: 1, y: 0 } : undefined}
                  exit={!prefersReducedMotion ? { opacity: 0, y: 10 } : undefined}
                  transition={!prefersReducedMotion ? { duration: 0.2 } : undefined}
                  className="hidden md:block absolute z-10 bg-weather-dark text-white px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-xl pointer-events-none"
                  style={{
                    left: '50%',
                    transform: 'translateX(-50%)',
                    top: '-3rem'
                  }}
                >
                  {label.title}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-weather-dark" />
                </motion.div>
              )}
            </button>
          ))}
        </div>

        {/* Active Label Detail Panel (Mobile & Desktop) */}
        <AnimatePresence>
          {activeLabelData && (
            <motion.div
              initial={!prefersReducedMotion ? { opacity: 0, height: 0 } : undefined}
              animate={!prefersReducedMotion ? { opacity: 1, height: 'auto' } : undefined}
              exit={!prefersReducedMotion ? { opacity: 0, height: 0 } : undefined}
              transition={!prefersReducedMotion ? { duration: 0.3 } : undefined}
              className="bg-gradient-to-r from-weather-primary-dark to-weather-accent text-white overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/20 p-2 rounded-lg">
                      <Info className="w-5 h-5" />
                    </div>
                    <h4 className="text-xl font-bold">{activeLabelData.title}</h4>
                  </div>
                  <button
                    onClick={() => setActiveLabel(null)}
                    className="text-white hover:bg-white/20 p-1 rounded-lg transition-colors flex-shrink-0"
                    aria-label="Close detail panel"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-white/90 leading-relaxed">
                  {activeLabelData.description}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Legend/List View */}
      <div className="bg-weather-light rounded-xl p-6 border-2 border-weather-gray-dark">
        <h4 className="text-lg font-bold text-weather-black mb-4">
          Component Reference Guide
        </h4>
        <div className="grid sm:grid-cols-2 gap-3">
          {labels.map((label, index) => (
            <button
              key={label.id}
              onClick={() => handleLabelClick(label.id)}
              className={`text-left p-4 rounded-lg border-2 transition-all ${
                activeLabel === label.id
                  ? 'bg-weather-primary-dark text-white border-weather-primary-dark shadow-lg'
                  : 'bg-white text-weather-dark border-weather-gray-dark hover:border-weather-primary hover:shadow-md'
              }`}
            >
              <div className="flex items-start gap-3">
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    activeLabel === label.id
                      ? 'bg-white text-weather-primary-dark'
                      : 'bg-weather-primary-dark text-white'
                  }`}
                >
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="font-semibold mb-1">{label.title}</div>
                  <div
                    className={`text-sm ${
                      activeLabel === label.id ? 'text-white/90' : 'text-weather-dark/70'
                    } line-clamp-2`}
                  >
                    {label.description}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
        <p className="text-sm text-weather-dark">
          <strong>💡 Tip:</strong> Click on the numbered markers on the diagram to learn more
          about each roof component.
        </p>
      </div>
    </div>
  );
}
