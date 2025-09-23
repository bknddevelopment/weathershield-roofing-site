'use client';

import { useState } from 'react';
import Link from 'next/link';
import StaticImage from './StaticImage';
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
    title: "WeatherShield Roof Replacement",
    description: "Weather Shield Roofing replacement with weatherproof materials and lifetime weather warranties",
    features: ["Premium Materials", "50-Year Warranty", "Professional Inspection"],
    image: "/images/gallery/roof-installation-repair-services-1-400x300.jpg",
    href: "/services/roof-replacement",
    color: "bg-weather-teal"
  },
  {
    icon: Hammer,
    title: "Weather Damage Repair",
    description: "Weather Shield Roofing repairs weather damage, leaks, and wear - leading roofing companies near me 24/7",
    features: ["Emergency Service", "Insurance Claims", "Same-Day Service"],
    image: "/images/gallery/roof-repair-services-1-400x300.jpg",
    href: "/services/roof-repair",
    color: "bg-weather-blue"
  },
  {
    icon: CloudRain,
    title: "Weather & Storm Damage",
    description: "Weather Shield Roofing rapid response for weather in Myrtle Beach storm damage",
    features: ["24/7 Response", "Insurance Experts", "Temporary Covers"],
    image: "/images/background/residential-roofing-gutter-siding-services.jpg",
    href: "/services/storm-damage",
    color: "bg-weather-purple"
  },
  {
    icon: Search,
    title: "Weather Assessments",
    description: "WeatherShield roofing inspections for weather damage - top roofing companies Myrtle Beach reports",
    features: ["Professional Estimates", "Drone Technology", "Detailed Reports"],
    image: "/images/gallery/residential-roof-installation-repair-services-1-225x300.jpg",
    href: "/services/roof-inspections",
    color: "bg-weather-teal"
  },
  {
    icon: Droplets,
    title: "Weather Protection Gutters",
    description: "Weather Shield Roofing gutter systems for weather in Myrtle Beach protection",
    features: ["Seamless Gutters", "Gutter Guards", "Annual Maintenance"],
    image: "/images/gallery/roofing-gutter-services-1-400x300.jpg",
    href: "/services/gutter-services",
    color: "bg-weather-blue"
  },
  {
    icon: Building2,
    title: "Commercial WeatherShield",
    description: "Weather Shield Roofing commercial solutions - leading business roofing companies near me",
    features: ["TPO & EPDM", "Minimal Disruption", "Maintenance Plans"],
    image: "/images/background/home-exterior-improvement-services.jpg",
    href: "/services/commercial",
    color: "bg-weather-purple"
  }
];

export default function ServiceCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-weather-teal/10 rounded-full px-4 py-2 mb-6">
            <Shield className="w-5 h-5 text-weather-teal" />
            <span className="text-weather-teal font-semibold">Weather Shield Roofing Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-weather-dark mb-4">
            Weather Shield Roofing - Professional Weather Protection Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Weather Shield Roofing leads all roofing companies Myrtle Beach with comprehensive weatherproof services.
            From weather emergency repairs to complete WeatherShield replacements, we're the top roofing companies near me.
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

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-weather-dark mb-3 group-hover:text-weather-teal transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
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
                    className="inline-flex items-center gap-2 text-weather-teal font-semibold group-hover:gap-3 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
              <h3 className="text-3xl font-bold text-white mb-4">
                Need Weather Shield Emergency Service?
              </h3>
              <p className="text-xl text-white/90 mb-8">
                Weather Shield Roofing available 24/7 for weather damage. Top roofing companies Myrtle Beach
                for weather emergencies. WeatherShield protection when weather in Myrtle Beach strikes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:843-493-4963"
                  className="inline-flex items-center justify-center gap-2 bg-white text-weather-teal px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
                >
                  <Clock className="w-5 h-5" />
                  Call Now: (843) 493-4963
                </a>
                <Link
                  href="https://your-n8n-form-url.com"
                  className="inline-flex items-center justify-center gap-2 bg-weather-dark text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-weather-dark/90 transition-colors"
                >
                  Schedule Inspection
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-2 text-gray-600">
            <Award className="w-6 h-6 text-weather-teal" />
            <span className="font-semibold">Weather Shield Certified Professional</span>
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