'use client';

import { useState } from 'react';
import { Play, Star, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  service: string;
  rating: number;
  quote: string;
  videoId?: string; // YouTube video ID (if available)
  thumbnail: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Michael Thompson',
    location: 'Charleston, SC',
    service: 'Complete Roof Replacement',
    rating: 5,
    quote: 'Weather Shield transformed our 30-year-old roof. Professional crew, finished in 2 days, and the cleanup was immaculate. Our home looks brand new!',
    thumbnail: '/images/testimonials/thumb-1.jpg',
    date: 'September 2024'
  },
  {
    id: 2,
    name: 'Sarah Martinez',
    location: 'Mount Pleasant, SC',
    service: 'Storm Damage Repair',
    rating: 5,
    quote: 'After Hurricane Helene, Weather Shield handled everything - insurance claim, repairs, and installation. They made a stressful situation completely worry-free.',
    thumbnail: '/images/testimonials/thumb-2.jpg',
    date: 'October 2024'
  },
  {
    id: 3,
    name: 'David Chen',
    location: 'Myrtle Beach, SC',
    service: 'Commercial Roofing',
    rating: 5,
    quote: 'We\'ve used Weather Shield for all 3 of our commercial properties. GAF certified, competitive pricing, and they never miss a deadline. Highly recommend!',
    thumbnail: '/images/testimonials/thumb-3.jpg',
    date: 'August 2024'
  },
  {
    id: 4,
    name: 'Jennifer Williams',
    location: 'Summerville, SC',
    service: 'Emergency Roof Repair',
    rating: 5,
    quote: 'Called at 2 AM with a major leak. They had someone here within the hour and tarped it immediately. Permanent repair done the next day. True 24/7 service!',
    thumbnail: '/images/testimonials/thumb-4.jpg',
    date: 'July 2024'
  }
];

export default function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
            <span className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              5.0 Stars
            </span>
            <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Hear From Our Customers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real homeowners sharing their experiences with Weather Shield Roofing.
            <span className="font-bold text-orange-600"> 73 verified Google reviews</span> and counting!
          </p>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 hover:border-orange-300"
            >
              {/* Video Thumbnail / Quote Card */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '40px 40px'
                  }}></div>
                </div>

                {/* Quote Icon */}
                <Quote className="w-24 h-24 text-orange-500/30 absolute top-4 left-4" />

                {/* Play Button Overlay (for future video integration) */}
                <button
                  onClick={() => setActiveVideo(testimonial.id)}
                  className="relative z-10 bg-orange-600 hover:bg-orange-700 text-white rounded-full p-6 shadow-2xl transition-all duration-300 group-hover:scale-110"
                  aria-label={`Play testimonial from ${testimonial.name}`}
                >
                  <Play className="w-10 h-10 fill-white ml-1" />
                </button>

                {/* Coming Soon Badge (remove when videos are added) */}
                <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Written Review
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                  <span className="ml-2 text-gray-600 font-semibold">{testimonial.date}</span>
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 text-lg mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                      <p className="text-orange-600 font-semibold">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600 font-medium">{testimonial.service}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Join 73 Happy Customers!
          </h3>
          <p className="text-white/90 text-xl mb-6 max-w-2xl mx-auto">
            See why Charleston homeowners trust Weather Shield for all their roofing needs
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.google.com/maps/place/Weather+Shield+Roofing+LLC"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-200 hover:scale-105 inline-flex items-center gap-2"
            >
              <Star className="w-6 h-6 fill-yellow-500 text-yellow-500" />
              Read All Google Reviews
            </a>
            <a
              href="tel:+18438775539"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all duration-200 hover:scale-105"
            >
              📞 Call (843) 877-5539
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
