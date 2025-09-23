'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import StaticImage from './StaticImage';
import { Phone, Shield, Clock, Award, ChevronRight, CheckCircle } from 'lucide-react';

const heroSlides = [
  {
    title: "Weather Shield Roofing Protects Myrtle Beach",
    subtitle: "Top Roofing Companies Myrtle Beach Trusts",
    description: "WeatherShield roofing experts providing weather protection for Myrtle Beach homes. Leading roofing companies near me with lifetime warranties.",
    image: "/images/background/roof-replacement-services.jpg",
    stats: ["15+ Years of Weather Protection", "5000+ Roofs Weatherproofed", "#1 Roofing Companies Myrtle Beach"]
  },
  {
    title: "Weather Damage Specialists in Myrtle Beach",
    subtitle: "Weather Shield Roofing Handles Storm Claims",
    description: "When weather in Myrtle Beach strikes, WeatherShield roofing experts handle your insurance claim. Trusted roofing companies near me for storm damage.",
    image: "/images/background/residential-roofing-gutter-siding-services.jpg",
    stats: ["Weather Damage Experts", "Insurance Approved", "Fast Weather Response"]
  },
  {
    title: "WeatherShield Roofing - Certified Contractor",
    subtitle: "Premier Roofing Companies Myrtle Beach",
    description: "Weather Shield Roofing offers exclusive weatherproof warranties. Leading roofing companies near me for weather protection in Myrtle Beach.",
    image: "/images/background/home-exterior-improvement-services.jpg",
    stats: ["50-Year Weather Warranties", "WeatherShield Certified", "Weather-Resistant Materials"]
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden" aria-label="Hero section">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-weather-black/95 via-weather-black/75 to-weather-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-weather-purple/10 via-transparent to-weather-teal/10 z-10" />
        <div className="relative w-full h-full">
          <StaticImage
            src={slide.image}
            alt={`${slide.title} - Weather Shield Roofing - Top roofing companies Myrtle Beach for weather protection`}
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
          <div className={`space-y-8 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-weather-primary/30 to-weather-secondary/30 backdrop-blur-md border border-weather-primary/40 rounded-full px-4 py-2 shadow-lg">
              <Shield className="w-5 h-5 text-weather-primary-on-dark animate-pulse" aria-hidden="true" />
              <span className="text-weather-primary-on-dark font-bold text-sm uppercase tracking-wider">Licensed & Insured</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                {slide.title}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-weather-primary-on-dark to-weather-secondary-light text-3xl md:text-4xl lg:text-5xl mt-3">
                  {slide.subtitle}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 max-w-2xl font-light leading-relaxed">
                {slide.description}
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6">
              {slide.stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 group cursor-pointer transition-transform hover:scale-105">
                  <CheckCircle className="w-5 h-5 text-weather-primary-on-dark group-hover:text-weather-secondary-light transition-colors" aria-hidden="true" />
                  <span className="text-white font-semibold text-base group-hover:text-weather-primary-on-dark transition-colors">{stat}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://your-n8n-form-url.com"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-weather-primary to-weather-secondary hover:from-weather-secondary hover:to-weather-accent text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-weather-primary/50 overflow-hidden focus-visible-ring"
                aria-label="Request a professional roof inspection"
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">Request Inspection</span>
                <ChevronRight className="relative w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              <a
                href="tel:843-877-5539"
                className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/50 hover:bg-white hover:text-weather-black hover:border-white text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-white/20 focus-visible-ring"
                aria-label="Call Weather Shield Roofing at (843) 877-5539"
              >
                <Phone className="w-6 h-6 group-hover:animate-pulse" />
                <span>Call (843) 877-5539</span>
              </a>
            </div>

            {/* Emergency Banner */}
            <div className="bg-gradient-to-r from-weather-accent/30 to-weather-secondary/30 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-lg hover:shadow-weather-accent/30 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-weather-accent/20 rounded-lg">
                  <Clock className="w-6 h-6 text-weather-accent-light animate-pulse" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-white font-bold text-base">24/7 Emergency Service</p>
                  <p className="text-gray-200 text-sm">Storm damage? We're here to help immediately.</p>
                </div>
              </div>
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
                      <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-weather-teal to-weather-blue">15+</p>
                      <p className="text-gray-200 font-semibold">Years</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-white">Why Choose Weather Shield Roofing?</h3>
                    <ul className="space-y-3">
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