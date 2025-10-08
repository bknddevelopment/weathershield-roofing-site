'use client';

import { useState } from 'react';
import Link from 'next/link';
import StaticImage from './StaticImage';
import { getBookingLinkProps } from '../config/booking';
import { GAFBadge } from './GAFCertification';
import { 
  Home, 
  Hammer, 
  CloudRain, 
  Search, 
  Droplets,
  Building2,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Award
} from 'lucide-react';

const services = [
  {
    icon: Home,
    title: "Roof Replacement",
    description: "Complete roof replacement with premium materials and industry-leading warranties from GAF",
    features: ["GAF Certified Installation", "Lifetime Warranty Available", "Free Inspection"],
    image: "/images/gallery/roof-installation-repair-services-1-400x300.jpg",
    href: "/services/roof-replacement",
    color: "bg-weather-teal"
  },
  {
    icon: Hammer,
    title: "Roof Repair",
    description: "Expert roof repair for leaks, damage, and wear. Fast response and quality workmanship guaranteed",
    features: ["24/7 Emergency Service", "Insurance Assistance", "Licensed & Insured"],
    image: "/images/gallery/roof-repair-services-1-400x300.jpg",
    href: "/services/roof-repair",
    color: "bg-weather-blue"
  },
  {
    icon: CloudRain,
    title: "Storm Damage Repair",
    description: "Rapid storm damage response for Myrtle Beach area. We handle insurance claims from start to finish",
    features: ["Emergency Tarping", "Insurance Specialists", "Full Restoration"],
    image: "/images/background/residential-roofing-gutter-siding-services.jpg",
    href: "/services/storm-damage",
    color: "bg-weather-purple"
  },
  {
    icon: Search,
    title: "Roof Inspections",
    description: "Professional roof inspections with detailed reports and honest recommendations",
    features: ["Free Estimates", "Drone Technology", "Detailed Reports"],
    image: "/images/gallery/residential-roof-installation-repair-services-1-225x300.jpg",
    href: "/services/roof-inspections",
    color: "bg-weather-teal"
  },
  {
    icon: Droplets,
    title: "Gutter Services",
    description: "Professional gutter installation, repair, and maintenance to protect your home's foundation",
    features: ["Seamless Gutters", "Gutter Guards", "Maintenance Plans"],
    image: "/images/gallery/roofing-gutter-services-1-400x300.jpg",
    href: "/services/gutter-services",
    color: "bg-weather-blue"
  },
  {
    icon: Building2,
    title: "Commercial Roofing",
    description: "Commercial roofing solutions for businesses throughout Myrtle Beach and the Carolina Coast",
    features: ["TPO & EPDM Systems", "Minimal Disruption", "Maintenance Programs"],
    image: "/images/background/home-exterior-improvement-services.jpg",
    href: "/services/commercial-roofing",
    color: "bg-weather-purple"
  }
];

export default function ServiceCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header - BOLD & IMPACTFUL */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-weather-teal/10 rounded-full px-5 py-3">
              <Shield className="w-6 h-6 text-weather-teal" />
              <span className="text-weather-teal font-semibold uppercase tracking-wide text-sm">Weather Shield Roofing Services</span>
            </div>
            <GAFBadge variant="inline" className="bg-weather-amber/10 rounded-full px-5 py-3" />
          </div>
          <h2 className="section-title text-weather-dark mb-6">
            Professional Roofing Services for Myrtle Beach & the Carolina Coast
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-normal leading-relaxed">
            From emergency repairs to complete roof replacements, Weather Shield Roofing provides expert solutions
            for residential and commercial properties throughout Myrtle Beach, North Myrtle Beach, Conway, Surfside Beach, and beyond.
          </p>
        </div>

        {/* Service Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image Background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <StaticImage
                    src={service.image}
                    alt={`${service.title} by Weather Shield Roofing - Top roofing companies Myrtle Beach | WeatherShield services`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative p-8">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl ${service.color} bg-opacity-10 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${service.color.replace('bg-', 'text-')}`} />
                  </div>

                  {/* Title & Description - Professional */}
                  <h3 className="text-lg md:text-xl font-semibold text-weather-dark mb-4 group-hover:text-weather-teal transition-colors tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-weather-teal flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-weather-teal font-semibold text-base uppercase tracking-wide group-hover:gap-3 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-weather-warning focus-visible:ring-offset-2"
                    aria-label={`Learn more about ${service.title} services`}
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>

                {/* Hover Accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-weather-teal to-weather-blue rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-heading-tight">
                Need Weather Shield Emergency Service?
              </h3>
              <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
                Weather Shield Roofing available 24/7 for weather damage. Top roofing companies Myrtle Beach
                for weather emergencies. WeatherShield protection when weather in Myrtle Beach strikes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+18438775539"
                  className="inline-flex items-center justify-center gap-2 bg-white text-weather-teal px-8 py-4 rounded-lg font-black text-lg uppercase tracking-wide hover:bg-gray-100 transition-colors"
                >
                  <Clock className="w-5 h-5" />
                  Call Now: (843) 877-5539
                </a>
                <a
                  {...getBookingLinkProps()}
                  className="inline-flex items-center justify-center gap-2 bg-weather-dark text-white px-8 py-4 rounded-lg font-black text-lg uppercase tracking-wide hover:bg-weather-dark/90 transition-colors"
                >
                  Schedule Inspection
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-2 text-gray-600">
            <Award className="w-6 h-6 text-weather-teal" />
            <span className="font-extrabold text-lg">Weather Shield Certified Professional</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Shield className="w-6 h-6 text-weather-teal" />
            <span className="font-semibold">Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Clock className="w-6 h-6 text-weather-teal" />
            <span className="font-semibold">24/7 Emergency Service</span>
          </div>
        </div>
      </div>
    </section>
  );
}