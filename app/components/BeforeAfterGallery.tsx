'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface BeforeAfterImage {
  id: number;
  before: string;
  after: string;
  title: string;
  location: string;
  description: string;
}

const projects: BeforeAfterImage[] = [
  {
    id: 1,
    before: '/images/gallery/before-1.jpg',
    after: '/images/gallery/after-1.jpg',
    title: 'Complete Roof Replacement',
    location: 'Charleston, SC',
    description: 'GAF Timberline HDZ shingles in Weathered Wood - Full tear-off and replacement'
  },
  {
    id: 2,
    before: '/images/gallery/before-2.jpg',
    after: '/images/gallery/after-2.jpg',
    title: 'Storm Damage Restoration',
    location: 'Mount Pleasant, SC',
    description: 'Insurance claim approved - Hurricane damage repair with architectural shingles'
  },
  {
    id: 3,
    before: '/images/gallery/before-3.jpg',
    after: '/images/gallery/after-3.jpg',
    title: 'Commercial Flat Roof',
    location: 'Myrtle Beach, SC',
    description: 'TPO membrane installation - 20-year warranty'
  },
  {
    id: 4,
    before: '/images/gallery/before-4.jpg',
    after: '/images/gallery/after-4.jpg',
    title: 'Historic Home Restoration',
    location: 'Downtown Charleston',
    description: 'Premium designer shingles maintaining historic character'
  }
];

export default function BeforeAfterGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAfter, setShowAfter] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
    setShowAfter(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setShowAfter(false);
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            Real Results. Real Transformations.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See the dramatic difference our expert craftsmanship makes. Every project backed by our lifetime warranty.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="h-1 w-20 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full"></div>
            <span className="text-orange-500 font-bold text-lg">1000+ Projects Completed</span>
            <div className="h-1 w-20 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
          </div>
        </div>

        {/* Before/After Slider */}
        <div className="relative max-w-5xl mx-auto">
          {/* Image Container */}
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={showAfter ? currentProject.after : currentProject.before}
              alt={showAfter ? `After - ${currentProject.title}` : `Before - ${currentProject.title}`}
              fill
              className="object-cover transition-all duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              unoptimized
            />

            {/* Before/After Label */}
            <div className="absolute top-6 left-6 z-10">
              <div className={`px-6 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-300 ${
                showAfter
                  ? 'bg-gradient-to-r from-green-600 to-green-500 text-white'
                  : 'bg-gradient-to-r from-red-600 to-red-500 text-white'
              }`}>
                {showAfter ? '✓ AFTER' : 'BEFORE'}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-4 rounded-full transition-all duration-200 hover:scale-110 z-10"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 hover:bg-black/90 text-white p-4 rounded-full transition-all duration-200 hover:scale-110 z-10"
              aria-label="Next project"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Toggle Before/After Button */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
              <button
                onClick={() => setShowAfter(!showAfter)}
                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-200 hover:scale-105 flex items-center gap-2"
              >
                <span>{showAfter ? 'Show Before' : 'Show After'}</span>
                <span className="text-2xl">{showAfter ? '←' : '→'}</span>
              </button>
            </div>
          </div>

          {/* Project Info */}
          <div className="mt-8 bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-6 shadow-xl">
            <div className="grid md:grid-cols-3 gap-4 text-center md:text-left">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{currentProject.title}</h3>
                <p className="text-orange-400 font-semibold">{currentProject.location}</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-300 text-lg">{currentProject.description}</p>
              </div>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-3 mt-6">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => {
                  setCurrentIndex(index);
                  setShowAfter(false);
                }}
                className={`w-4 h-4 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-orange-500 w-12'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`View project ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/gallery"
            className="inline-block bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-10 py-5 rounded-full font-bold text-xl shadow-xl transition-all duration-200 hover:scale-105"
          >
            View Full Project Gallery →
          </a>
        </div>
      </div>
    </section>
  );
}
