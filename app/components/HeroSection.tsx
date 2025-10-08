'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import StaticImage from './StaticImage';
import LiveReviewWidget from './LiveReviewWidget';
import { Phone, Shield, Clock, Award, ChevronRight, CheckCircle, MapPin } from 'lucide-react';

const heroSlides = [
  {
    title: "Myrtle Beach's #1 Rated Roofing Contractor - 5.0★ Google Rating",
    subtitle: "Expert Roofing Services • 15+ Years in Myrtle Beach",
    description: "Myrtle Beach's highest-rated roofing company serving Myrtle Beach, North Myrtle Beach, Conway & Carolina Coast. GAF Certified • BBB A+ • Lifetime Warranties.",
    image: "/images/background/roof-replacement-services.jpg",
    stats: ["5.0★ Rating", "73 Google Reviews", "Licensed & Insured"]
  },
  {
    title: "Emergency Roofer Available 24/7",
    subtitle: "Storm Damage? We're Here to Help Immediately",
    description: "Rapid emergency response for roof leaks, storm damage, and urgent repairs. Available 24/7 across Myrtle Beach & Carolina Coast with fast response time.",
    image: "/images/background/residential-roofing-gutter-siding-services.jpg",
    stats: ["24/7 Emergency Service", "Fast Response", "Insurance Claims Help"]
  },
  {
    title: "Premium Roof Replacement & Repair",
    subtitle: "Quality Craftsmanship • Competitive Pricing",
    description: "From minor repairs to complete replacements, we deliver superior roofing solutions with GAF certified materials and lifetime warranty protection.",
    image: "/images/background/home-exterior-improvement-services.jpg",
    stats: ["Lifetime Warranty", "GAF Certified", "Financing Available"]
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Disable auto-rotation to keep SEO-optimized H1 visible
    // const interval = setInterval(() => {
    //   setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    // }, 6000);
    // return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden" aria-label="Hero section">
      {/* Video-style background with animated overlay */}
      <div className="absolute inset-0 z-0">
        {/* Darker, more professional overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-weather-black/90 via-weather-black/80 to-weather-black/70 z-10" />
        {/* Subtle animated gradient for video effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-weather-teal/5 via-transparent to-weather-amber/5 z-10 animate-gradient" />
        {/* Image with Ken Burns zoom effect */}
        <div className="relative w-full h-full">
          <StaticImage
            src={slide.image}
            alt={`${slide.title} - Weather Shield Roofing serving Myrtle Beach and Carolina Coast SC`}
            fill
            className="animate-slow-zoom"
            style={{
              objectFit: 'cover',
              objectPosition: 'center 30%'
            }}
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-6 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Live Review Widget & Location Badge */}
            <div className="flex flex-wrap gap-3 items-center">
              <LiveReviewWidget />
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
                <MapPin className="w-4 h-4 text-weather-teal" />
                <span className="text-white font-medium text-sm">Myrtle Beach & Carolina Coast, SC</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-5">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white leading-tight text-shadow-hero">
                {slide.title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-bold gradient-text-hero tracking-tight leading-tight">
                {slide.subtitle}
              </p>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
                {slide.description}
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {slide.stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 group cursor-pointer transition-transform hover:scale-105">
                  <CheckCircle className="w-5 h-5 text-weather-primary-on-dark group-hover:text-weather-secondary-light transition-colors" aria-hidden="true" />
                  <span className="text-white font-medium text-sm group-hover:text-weather-primary-on-dark transition-colors">{stat}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons - BIGGER & More Prominent */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="https://weathershieldroofiing.app.n8n.cloud/form/roofing-estimate"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white px-10 py-5 rounded-xl font-bold text-xl uppercase tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-600/50 overflow-hidden"
                aria-label="Schedule your free roof inspection"
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">Schedule Free Inspection</span>
                <ChevronRight className="relative w-7 h-7 group-hover:translate-x-2 transition-transform" />
              </Link>
              <a
                href="tel:+18438775539"
                className="group inline-flex items-center justify-center gap-3 bg-white text-weather-black hover:bg-gray-100 px-10 py-5 rounded-xl font-bold text-xl tracking-wide transition-all duration-300 shadow-xl hover:shadow-white/30 hover:scale-105"
                aria-label="Call Weather Shield Roofing now at (843) 877-5539"
              >
                <Phone className="w-7 h-7 group-hover:animate-pulse" />
                <span>(843) 877-5539</span>
              </a>
            </div>
          </div>

          {/* Right Content - Animated Card */}
          <div className={`hidden lg:block transition-all duration-1200 delay-500 transform ${
            isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-10 rotate-1'
          }`}>
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-weather-teal/30 to-weather-blue/30 rounded-full blur-3xl animate-float" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-weather-purple/30 to-weather-teal/30 rounded-full blur-3xl animate-float animation-delay-2000" />
              
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/30 rounded-3xl p-10 shadow-2xl hover:shadow-weather-teal/20 transition-all duration-500 hover:border-weather-teal/50">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-gradient-to-br from-weather-teal/20 to-weather-blue/20 rounded-xl">
                      <Award className="w-14 h-14 text-weather-teal" />
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-weather-teal to-weather-blue">15+</p>
                      <p className="text-gray-200 font-medium text-base">Years</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white text-shadow-bold tracking-tight">Why Choose Weather Shield Roofing?</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                        <CheckCircle className="w-6 h-6 text-weather-amber mt-0.5 flex-shrink-0 group-hover:text-weather-amber-light transition-colors" aria-hidden="true" />
                        <span className="text-gray-100 group-hover:text-white transition-colors">GAF Preferred Contractor - Enhanced Warranty Options</span>
                      </li>
                      <li className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                        <CheckCircle className="w-6 h-6 text-weather-primary-on-dark mt-0.5 flex-shrink-0 group-hover:text-weather-secondary-light transition-colors" aria-hidden="true" />
                        <span className="text-gray-100 group-hover:text-white transition-colors">WeatherShield Roofing Certified - Top Roofing Companies Myrtle Beach</span>
                      </li>
                      <li className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                        <CheckCircle className="w-6 h-6 text-weather-primary-on-dark mt-0.5 flex-shrink-0 group-hover:text-weather-secondary-light transition-colors" aria-hidden="true" />
                        <span className="text-gray-100 group-hover:text-white transition-colors">Lifetime Weather Protection Warranty by Weather Shield Roofing</span>
                      </li>
                      <li className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                        <CheckCircle className="w-6 h-6 text-weather-primary-on-dark mt-0.5 flex-shrink-0 group-hover:text-weather-secondary-light transition-colors" aria-hidden="true" />
                        <span className="text-gray-100 group-hover:text-white transition-colors">Weather Damage Insurance Claims - Roofing Companies Near Me</span>
                      </li>
                      <li className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                        <CheckCircle className="w-6 h-6 text-weather-primary-on-dark mt-0.5 flex-shrink-0 group-hover:text-weather-secondary-light transition-colors" aria-hidden="true" />
                        <span className="text-gray-100 group-hover:text-white transition-colors">Professional Weather Assessments for Myrtle Beach Homes</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-white/30">
                    <p className="text-base text-gray-200 font-medium text-center">Weather Shield Roofing - Serving Myrtle Beach & Surrounding Areas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? 'w-12 h-3 bg-gradient-to-r from-weather-teal to-weather-blue shadow-lg shadow-weather-teal/50' 
                : 'w-3 h-3 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}