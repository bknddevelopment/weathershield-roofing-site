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
  { number: '15+', label: 'Years Experience', icon: Clock },
  { number: '5000+', label: 'Roofs Installed', icon: Home },
  { number: '100%', label: 'Satisfaction Rate', icon: Heart },
  { number: '24/7', label: 'Emergency Service', icon: Zap }
];

const values = [
  {
    icon: Shield,
    title: 'Quality First',
    description: 'We never compromise on materials or workmanship. Every roof is built to last.'
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Your satisfaction is our priority. We listen, advise, and deliver beyond expectations.'
  },
  {
    icon: Award,
    title: 'Expert Team',
    description: 'Certified professionals with continuous training and development.'
  },
  {
    icon: Target,
    title: 'Integrity',
    description: 'Honest assessments, fair pricing, and transparent communication every step of the way.'
  }
];

export default function AboutSection() {
  const [activeValue, setActiveValue] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-weather-teal/10 rounded-full px-4 py-2 mb-6">
            <Shield className="w-5 h-5 text-weather-teal" />
            <span className="text-weather-teal font-semibold">About Weather Shield</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-weather-dark mb-4">
            Myrtle Beach's Most Trusted Roofing Company
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since 2010, we've been protecting homes and families across the Grand Strand 
            with superior roofing solutions and unmatched customer service.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-weather-teal to-weather-purple rounded-full" />
              <div className="pl-8">
                <h3 className="text-3xl font-bold text-weather-dark mb-4">
                  Your Local Roofing Experts
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Weather Shield Roofing was founded with a simple mission: to provide Myrtle Beach 
                  homeowners with roofing services they can trust. As a locally owned and operated 
                  company, we understand the unique challenges our coastal climate presents.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  From hurricane-force winds to intense summer heat, your roof faces constant challenges. 
                  That's why we exclusively use premium materials and proven installation techniques 
                  that exceed industry standards.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  As a certified contractor with years of expertise, we offer exclusive warranties 
                  and guarantees that give you complete peace of mind.
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
                href="tel:843-493-4963"
                className="inline-flex items-center justify-center gap-2 border-2 border-weather-teal text-weather-teal hover:bg-weather-teal hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
              >
                Call (843) 493-4963
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
                    alt="Weather Shield team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <StaticImage
                    src="/images/work-1.jpg"
                    alt="Roofing work"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <StaticImage
                    src="/images/work-2.jpg"
                    alt="Quality roofing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <StaticImage
                    src="/images/team-2.jpg"
                    alt="Professional team"
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
                  <p className="text-2xl font-bold text-weather-dark">Certified</p>
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
                <div className="text-3xl font-bold text-weather-dark mb-1">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-weather-dark text-center mb-12">
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
                  <h4 className="text-xl font-bold text-weather-dark mb-2">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-weather-teal/5 to-weather-purple/5 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-weather-dark mb-4">
            Ready to Experience the Weather Shield Difference?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied homeowners who trust Weather Shield for all their roofing needs.
          </p>
          <Link
            href="https://your-n8n-form-url.com"
            className="inline-flex items-center gap-2 bg-weather-teal hover:bg-weather-teal-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Get Your Free Quote
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}