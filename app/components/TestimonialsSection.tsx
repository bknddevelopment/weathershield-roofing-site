'use client';

import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

const testimonials = [
  {
    name: "John & Sarah Mitchell",
    location: "Myrtle Beach, SC",
    rating: 5,
    text: "Weather Shield replaced our roof after hurricane damage. They handled everything with our insurance company and completed the work in just 2 days. Outstanding service!",
    project: "Complete Roof Replacement",
    date: "October 2024"
  },
  {
    name: "Robert Thompson",
    location: "Conway, SC",
    rating: 5,
    text: "Professional, punctual, and fair pricing. The crew was respectful of our property and cleaned up perfectly. Our new roof looks amazing and came with a 50-year warranty!",
    project: "Residential Re-roofing",
    date: "September 2024"
  },
  {
    name: "Maria Rodriguez",
    location: "North Myrtle Beach, SC",
    rating: 5,
    text: "Had a leak during a storm at 2 AM. Weather Shield answered immediately and had someone at our house within an hour. They truly offer 24/7 emergency service!",
    project: "Emergency Repair",
    date: "August 2024"
  },
  {
    name: "David Chen",
    location: "Surfside Beach, SC",
    rating: 5,
    text: "As a property manager, I've worked with many contractors. Weather Shield is by far the most reliable. They've done 5 roofs for our properties - all perfect.",
    project: "Commercial Properties",
    date: "November 2024"
  },
  {
    name: "Linda Peterson",
    location: "Garden City, SC",
    rating: 5,
    text: "The inspection was thorough and honest. They showed me exactly what needed fixing with drone footage. No high-pressure sales, just honest recommendations.",
    project: "Roof Inspection & Repair",
    date: "October 2024"
  },
  {
    name: "James & Betty Wilson",
    location: "Pawleys Island, SC",
    rating: 5,
    text: "Our 30-year-old roof needed replacement. Weather Shield's team was incredibly professional. They finished ahead of schedule and the quality is exceptional.",
    project: "Complete Roof Replacement",
    date: "September 2024"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;
  const maxIndex = Math.ceil(testimonials.length / itemsPerPage) - 1;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const currentTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-weather-teal/10 rounded-full px-4 py-2 mb-6">
            <Star className="w-5 h-5 text-weather-teal" />
            <span className="text-weather-teal font-semibold">Customer Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-weather-dark mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from homeowners who've experienced 
            the Weather Shield difference firsthand.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {currentTestimonials.map((testimonial, index) => (
              <div
                key={`${currentIndex}-${index}`}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-shadow duration-300 animate-fade-in"
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-weather-teal/20" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Customer Info */}
                <div className="border-t pt-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold text-weather-dark">{testimonial.name}</p>
                      <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                        <MapPin className="w-3 h-3" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-weather-teal">{testimonial.project}</p>
                      <p className="text-xs text-gray-500 mt-1">{testimonial.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 text-weather-dark" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 text-weather-dark" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(maxIndex + 1)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-weather-teal' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-r from-weather-teal/5 to-weather-purple/5 rounded-2xl p-8">
            <p className="text-2xl font-bold text-weather-dark">
              Join 5,000+ Satisfied Customers
            </p>
            <p className="text-gray-600">
              Experience the Weather Shield difference for yourself
            </p>
            <a
              href="https://your-n8n-form-url.com"
              className="inline-flex items-center gap-2 bg-weather-teal hover:bg-weather-teal-dark text-white px-8 py-4 rounded-lg font-bold transition-colors"
            >
              Get Your Free Quote
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}