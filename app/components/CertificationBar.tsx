'use client';

import { Shield, Award, Clock, DollarSign, CheckCircle } from 'lucide-react';

const certifications = [
  {
    icon: Award,
    text: 'GAF Certified',
    highlight: true
  },
  {
    icon: Shield,
    text: 'BBB A+ Rating'
  },
  {
    icon: Clock,
    text: 'Lifetime Warranty'
  },
  {
    icon: DollarSign,
    text: 'Financing Available'
  },
  {
    icon: CheckCircle,
    text: '100% Satisfaction'
  }
];

export default function CertificationBar() {
  return (
    <div className="bg-gradient-to-r from-weather-dark via-weather-black to-weather-dark border-y border-weather-teal/20 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                  cert.highlight
                    ? 'bg-gradient-to-r from-weather-amber/20 to-weather-amber/10 border border-weather-amber/30'
                    : 'bg-white/5 border border-white/10'
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    cert.highlight ? 'text-weather-amber' : 'text-weather-teal'
                  }`}
                />
                <span
                  className={`font-semibold text-sm whitespace-nowrap ${
                    cert.highlight ? 'text-weather-amber' : 'text-white'
                  }`}
                >
                  {cert.text}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
