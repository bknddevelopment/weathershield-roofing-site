'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import StaticImage from './StaticImage';
import { GAFBadge } from './GAFCertification';
import { Phone, Shield, Clock, Award, ChevronRight, CheckCircle } from 'lucide-react';

const heroSlides = [
  {
    title: "Emergency Roofer Available NOW in Myrtle Beach",
    subtitle: "24 Hour Roof Repair Near Me - Call Today!",
    description: "Roof leak repair today? Weather Shield Roofing responds in 2 hours! Emergency roof tarp service, storm damage repair same day. Urgent roof repair Myrtle Beach available 24/7.",
    image: "/images/background/roof-replacement-services.jpg",
    stats: ["2-Hour Emergency Response", "24/7 Available NOW", "Same Day Repairs"]
  },
  {
    title: "Storm Damage Repair Same Day - Act Fast!",
    subtitle: "Emergency Roof Tarp Service Available Today",
    description: "Urgent roof repair Myrtle Beach! WeatherShield roofing provides emergency roofer available now for roof leak repair today. 24 hour roof repair near me with immediate response.",
    image: "/images/background/residential-roofing-gutter-siding-services.jpg",
    stats: ["Emergency Service TODAY", "Insurance Direct Billing", "Immediate Protection"]
  },
  {
    title: "Roof Leak Repair Today - Don't Wait!",
    subtitle: "Urgent Roof Repair Myrtle Beach 24/7",
    description: "Emergency roofer available now! Weather Shield Roofing: your 24 hour roof repair near me solution. Storm damage repair same day, emergency roof tarp service with 2-hour response.",
    image: "/images/background/home-exterior-improvement-services.jpg",
    stats: ["24/7 Emergency Hotline", "2-Hour Guaranteed Response", "No Emergency Fees"]
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
            alt={`${slide.title} - Emergency roofer available now - 24 hour roof repair near me - Weather Shield Roofing Myrtle Beach`}
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
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <GAFBadge variant="hero" showWarranty={true} />
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-weather-primary/30 to-weather-secondary/30 backdrop-blur-md border border-weather-primary/40 rounded-full px-4 py-2 shadow-lg">
                <Shield className="w-5 h-5 text-weather-primary-on-dark animate-pulse" aria-hidden="true" />
                <span className="text-weather-primary-on-dark font-semibold text-sm uppercase tracking-wide">Licensed & Insured</span>
              </div>
            </div>

            {/* Main Heading - Professional & Impactful */}
            <div className="space-y-4">
              <h1 className="hero-title text-white text-shadow-hero">
                {slide.title}
                <span className="block gradient-text-hero text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-3 tracking-tight">
                  {slide.subtitle}
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 max-w-2xl font-normal leading-relaxed text-shadow-soft">
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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://weathershieldroofiing.app.n8n.cloud/form/roofing-estimate"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-weather-primary to-weather-secondary hover:from-weather-secondary hover:to-weather-accent text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg uppercase tracking-wide transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-weather-primary/50 overflow-hidden focus-visible-ring"
                aria-label="Request a free professional roof inspection"
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">Request Free Inspection</span>
                <ChevronRight className="relative w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              <a
                href="tel:+18438775539"
                className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/50 hover:bg-white hover:text-weather-black hover:border-white text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg tracking-wide transition-all duration-300 shadow-xl hover:shadow-white/20 focus-visible-ring"
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
                  <p className="text-white font-semibold text-base uppercase tracking-wide">24/7 Emergency Service</p>
                  <p className="text-gray-200 text-sm font-normal">Storm damage? We're here to help immediately.</p>
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