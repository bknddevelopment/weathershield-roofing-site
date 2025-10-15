'use client';

import { Award, TrendingUp, Clock } from 'lucide-react';

interface LocationTrustSignalsProps {
  cityName: string;
  stats: {
    projectsCompleted: number;
    approvalRate: number;
    averageApprovalTime: string;
  };
  neighborhoods?: string[];
}

export default function LocationTrustSignals({ cityName, stats, neighborhoods }: LocationTrustSignalsProps) {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Trusted by {cityName} Homeowners
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-weather-teal mb-3 flex justify-center">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stats.approvalRate}%
              </div>
              <div className="text-sm text-gray-600">
                {cityName} Approval Rate
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-weather-teal mb-3 flex justify-center">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stats.projectsCompleted}+
              </div>
              <div className="text-sm text-gray-600">
                {cityName} Projects
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 text-center shadow-sm">
              <div className="text-weather-teal mb-3 flex justify-center">
                <Clock className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stats.averageApprovalTime}
              </div>
              <div className="text-sm text-gray-600">
                Average Approval
              </div>
            </div>
          </div>

          {neighborhoods && neighborhoods.length > 0 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-3 text-center">
                Proudly Serving {cityName} Communities
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {neighborhoods.map((neighborhood, index) => (
                  <span
                    key={index}
                    className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-blue-200"
                  >
                    {neighborhood}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
