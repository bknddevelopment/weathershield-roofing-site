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
  { number: '15+', label: 'Years of Weather Protection', icon: Clock },
  { number: '5000+', label: 'WeatherShield Roofs Installed', icon: Home },
  { number: '100%', label: 'Weather Damage Coverage', icon: Heart },
  { number: '24/7', label: 'Weather Emergency Service', icon: Zap }
];

const values = [
  {
    icon: Shield,
    title: 'Weather-Proof Quality',
    description: 'Weather Shield Roofing never compromises. Every WeatherShield roof withstands weather in Myrtle Beach.'
  },
  {
    icon: Users,
    title: 'Weather Shield Focus',
    description: 'Leading roofing companies near me in customer satisfaction. Weather Shield Roofing exceeds expectations.'
  },
  {
    icon: Award,
    title: 'WeatherShield Experts',
    description: 'Weather Shield Roofing certified professionals - best among roofing companies Myrtle Beach.'
  },
  {
    icon: Target,
    title: 'Weather Shield Integrity',
    description: 'Most trusted roofing companies near me. Honest weather assessments and transparent WeatherShield pricing.'
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
            <span className="text-weather-teal font-semibold">About Weather Shield Roofing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-weather-dark mb-4">
            Weather Shield Roofing - Top Roofing Companies Myrtle Beach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since 2010, Weather Shield Roofing has led all roofing companies Myrtle Beach in protecting homes from weather.
            WeatherShield roofing experts provide superior weather protection for families across the Grand Strand.
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
                  Weather Shield - Leading Roofing Companies Near Me
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Weather Shield Roofing stands above all roofing companies Myrtle Beach as weather protection specialists.
                  As locally-owned roofing companies near me, WeatherShield understands weather in Myrtle Beach
                  and the unique weather challenges our coastal climate presents.
                </p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  From hurricane weather to intense heat, weather Myrtle Beach brings constant roofing challenges.
                  That's why Weather Shield Roofing uses weatherproof materials and WeatherShield installation techniques
                  that outperform other roofing companies near me.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Weather Shield Roofing certified experts offer exclusive weather warranties that other
                  roofing companies Myrtle Beach can't match. WeatherShield guarantees complete weather protection.
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
                href="tel:843-877-5539"
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
                    alt="Weather Shield Roofing team - Top roofing companies Myrtle Beach"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <StaticImage
                    src="/images/work-1.jpg"
                    alt="WeatherShield roofing installation - Weather protection for Myrtle Beach"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-64 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <StaticImage
                    src="/images/work-2.jpg"
                    alt="Weather Shield Roofing quality - Leading roofing companies near me"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <StaticImage
                    src="/images/team-2.jpg"
                    alt="Weather Shield professional team - Best roofing companies Myrtle Beach"
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
            Ready to Experience Weather Shield Roofing Excellence?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands who choose Weather Shield Roofing over other roofing companies Myrtle Beach.
            WeatherShield protection against weather in Myrtle Beach - trusted roofing companies near me.
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