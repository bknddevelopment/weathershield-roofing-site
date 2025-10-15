'use client';

import { Shield, Clock, CheckCircle2, MapPin } from 'lucide-react';

interface LocationHeroProps {
  cityName: string;
  fullName: string;
  stats: {
    projectsCompleted: number;
    approvalRate: number;
    averageApprovalTime: string;
  };
}

export default function LocationHero({ cityName, fullName, stats }: LocationHeroProps) {
  return (
    <section className="bg-gradient-to-r from-weather-teal to-weather-blue text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-6 h-6" />
            <span className="text-xl font-semibold">{fullName}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Roof Financing in {cityName}
          </h1>

          <p className="text-xl mb-8">
            Zero Down Payment | Bad Credit Welcome | Instant Approval in {stats.averageApprovalTime}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{stats.approvalRate}%</div>
              <div className="text-sm">Approval Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">{stats.projectsCompleted}+</div>
              <div className="text-sm">Projects Financed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
              <div className="text-2xl font-bold">$0</div>
              <div className="text-sm">Down Payment</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:8438775539"
              className="bg-white text-weather-teal px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              <Shield className="w-5 h-5" />
              Call (843) 877-5539
            </a>
            <a
              href="tel:8438775539"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors inline-flex items-center gap-2"
            >
              <CheckCircle2 className="w-5 h-5" />
              Call (843) 877-5539
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
