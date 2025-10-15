'use client';

import { useState } from 'react';
import Link from 'next/link';
import StaticImage from './StaticImage';
import { 
  Shield, 
  Award, 
  Users, 
  Home,
  CheckCircle,
  TrendingUp,
  Clock,
  Zap,
  Heart,
  Target,
  ArrowRight
} from 'lucide-react';

const stats = [
  { number: '2010', label: 'Established', icon: Clock },
  { number: '5.0', label: 'Google Rating', icon: Home },
  { number: 'GAF', label: 'Certified Contractor', icon: Award },
  { number: '24/7', label: 'Emergency Service', icon: Zap }
];

const values = [
  {
    icon: Shield,
    title: 'Quality Craftsmanship',
    description: 'We never compromise on quality. Every roof is installed to the highest industry standards with premium materials.'
  },
  {
    icon: Users,
    title: 'Customer-Focused Service',
    description: 'Your satisfaction is our priority. We deliver exceptional service and communication from start to finish.'
  },
  {
    icon: Award,
    title: 'GAF Certified Experts',
    description: 'Factory-trained and certified professionals with the expertise to handle any roofing project.'
  },
  {
    icon: Target,
    title: 'Honest & Transparent',
    description: 'Straightforward assessments and transparent communication. No surprises, just honest roofing solutions.'
  }
];

export default function AboutSection() {
  const [activeValue, setActiveValue] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header - BOLD & IMPACTFUL */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-weather-teal/10 rounded-full px-5 py-3 mb-8">
            <Shield className="w-6 h-6 text-weather-teal" />
            <span className="text-weather-teal font-semibold uppercase tracking-wide text-sm">About Weather Shield Roofing</span>
          </div>
          <h2 className="section-title text-weather-dark mb-6">
            Myrtle Beach's Trusted Roofing Partner Since 2010
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-normal leading-relaxed">
            For over 15 years, Weather Shield Roofing has been protecting homes and businesses throughout Myrtle Beach,
            North Myrtle Beach, Conway, Surfside Beach, and the entire Carolina Coast with expert craftsmanship and exceptional service.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-weather-teal to-weather-purple rounded-full" />
              <div className="pl-8">
                <h3 className="text-2xl md:text-3xl font-bold text-weather-dark mb-6 tracking-tight">
                  Your Local Roofing Experts
                </h3>
                <p className="text-base text-gray-600 mb-4 leading-relaxed font-normal">
                  As a locally-owned and operated company, we understand the unique challenges that Myrtle Beach's coastal
                  climate presents. From hurricane season to intense summer heat and humidity, your roof faces constant stress.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  That's why we use only premium, weather-resistant materials and proven installation techniques that are
                  designed specifically for our Carolina Coast climate. Every member of our team is GAF-certified and trained
                  to deliver exceptional results.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We're proud to offer industry-leading warranties and stand behind every roof we install. When you choose
                  Weather Shield Roofing, you're choosing a partner who will protect your home for decades to come.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-weather-teal hover:bg-weather-teal-dark text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+18438775539"
                className="inline-flex items-center justify-center gap-2 border-2 border-weather-teal text-weather-teal hover:bg-weather-teal hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Call (843) 877-5539
              </a>
            </div>
          </div>

          {/* Right Content - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <StaticImage
                    src="/images/team-1.jpg"
                    alt="Weather Shield Roofing professional team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <StaticImage
                    src="/images/work-1.jpg"
                    alt="Professional roof installation by Weather Shield Roofing"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <StaticImage
                    src="/images/work-2.jpg"
                    alt="Quality roofing work by Weather Shield Roofing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <StaticImage
                    src="/images/team-2.jpg"
                    alt="Weather Shield Roofing certified professionals"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 z-10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-weather-teal to-weather-blue rounded-full flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-xl font-semibold text-weather-dark">Certified</p>
                  <p className="text-sm text-gray-600">Professional</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-gray-200">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex p-3 rounded-full bg-weather-teal/10 mb-3">
                  <Icon className="w-6 h-6 text-weather-teal" />
                </div>
                <div className="text-2xl font-semibold text-weather-dark mb-1">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-weather-dark text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${
                    activeValue === index ? 'ring-2 ring-weather-teal' : ''
                  }`}
                  onMouseEnter={() => setActiveValue(index)}
                >
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-weather-teal/10 to-weather-purple/10 mb-4">
                    <Icon className="w-8 h-8 text-weather-teal" />
                  </div>
                  <h4 className="text-lg font-semibold text-weather-dark mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-weather-teal/5 to-weather-purple/5 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-weather-dark mb-4">
            Ready to Protect Your Home?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied Myrtle Beach homeowners who trust Weather Shield Roofing for quality
            craftsmanship and exceptional service. Get your free inspection today.
          </p>
          <Link
            href="https://n8n.weathershieldroofers.com/webhook/weathershield-roofing-form-submissions"
            className="inline-flex items-center gap-2 bg-weather-teal hover:bg-weather-teal-dark text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 transform hover:scale-105"
          >
            Get Your Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}