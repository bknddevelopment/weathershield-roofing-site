'use client';

import Link from 'next/link';
import { BookOpen, Shield, Wind, Palette, ArrowRight, LucideIcon } from 'lucide-react';

interface GuideCard {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  iconBgColor: string;
  iconColor: string;
  badge?: string;
}

const guides: GuideCard[] = [
  {
    title: 'Complete Guide to Shingle Types',
    description: 'Learn about 3-tab, architectural, and premium designer shingles. Compare durability, warranties, and cost to find the perfect match for your home.',
    href: '/roofing-guide/shingle-types',
    icon: Shield,
    iconBgColor: 'bg-weather-teal/10',
    iconColor: 'text-weather-teal',
    badge: 'Most Popular',
  },
  {
    title: 'Roof Ventilation Explained',
    description: 'Discover why proper attic ventilation is critical for roof longevity. Expert insights on ridge vents, soffit vents, and balanced airflow systems.',
    href: '/roofing-guide/roof-ventilation',
    icon: Wind,
    iconBgColor: 'bg-weather-blue/10',
    iconColor: 'text-weather-blue',
  },
  {
    title: 'Choosing the Perfect Shingle Colors',
    description: 'Explore color psychology, curb appeal impact, and energy efficiency. See how different shades complement architectural styles and coastal homes.',
    href: '/roofing-guide/choosing-shingle-colors',
    icon: Palette,
    iconBgColor: 'bg-weather-purple/10',
    iconColor: 'text-weather-purple',
  },
];

export default function RoofingGuideSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-weather-teal/10 rounded-full px-5 py-3 mb-8">
            <BookOpen className="w-6 h-6 text-weather-teal" aria-hidden="true" />
            <span className="text-weather-teal font-semibold uppercase tracking-wide text-sm">
              Educational Resources
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-weather-dark mb-6 tracking-tight">
            Expert Roofing Guides for Informed Decisions
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With 15+ years of experience protecting Myrtle Beach homes, our comprehensive guides help you understand roofing options, make confident decisions, and maximize your investment.
          </p>
        </div>

        {/* Featured Guide Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {guides.map((guide, index) => {
            const Icon = guide.icon;
            return (
              <Link
                key={index}
                href={guide.href}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-weather-teal transform hover:-translate-y-1"
              >
                <div className="p-6">
                  {/* Icon Container */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-4 ${guide.iconBgColor} rounded-xl`}>
                      <Icon className={`w-8 h-8 ${guide.iconColor}`} aria-hidden="true" />
                    </div>
                    {guide.badge && (
                      <span className="bg-weather-teal text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {guide.badge}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-weather-dark mb-3 group-hover:text-weather-teal transition-colors duration-300">
                    {guide.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {guide.description}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center gap-2 text-weather-teal font-semibold group-hover:gap-3 transition-all duration-300">
                    <span>Read Guide</span>
                    <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/roofing-guide"
            className="inline-flex items-center gap-2 bg-weather-teal hover:bg-weather-teal-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Guides
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
