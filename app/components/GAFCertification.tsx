'use client';

import { Shield, Award, CheckCircle, BadgeCheck } from 'lucide-react';

interface GAFBadgeProps {
  variant?: 'full' | 'compact' | 'inline' | 'hero';
  showWarranty?: boolean;
  className?: string;
}

export function GAFBadge({ variant = 'full', showWarranty = false, className = '' }: GAFBadgeProps) {
  if (variant === 'inline') {
    return (
      <span className={`inline-flex items-center gap-2 ${className}`}>
        <Award className="w-5 h-5 text-weather-amber" aria-hidden="true" />
        <span className="font-semibold text-sm">GAF Preferred Contractor</span>
      </span>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="p-1.5 bg-gradient-to-br from-weather-amber/20 to-amber-600/20 rounded-lg">
          <Award className="w-5 h-5 text-weather-amber" />
        </div>
        <div className="whitespace-nowrap">
          <p className="text-xs font-semibold text-weather-amber uppercase tracking-wide whitespace-nowrap">GAF Preferred</p>
          {showWarranty && <p className="text-xs text-gray-600 whitespace-nowrap">Enhanced Warranties</p>}
        </div>
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className={`inline-flex items-center gap-3 bg-gradient-to-r from-weather-amber/30 to-amber-600/30 backdrop-blur-md border border-weather-amber/40 rounded-full px-5 py-2.5 shadow-lg hover:shadow-weather-amber/30 transition-all duration-300 ${className}`}>
        <div className="relative">
          <div className="absolute inset-0 bg-weather-amber/30 rounded-full animate-ping"></div>
          <Award className="relative w-6 h-6 text-weather-amber-light" aria-hidden="true" />
        </div>
        <div className="flex flex-col">
          <span className="text-weather-amber-light font-bold text-sm uppercase tracking-wide">GAF Preferred Contractor</span>
          {showWarranty && <span className="text-xs text-gray-200">Enhanced Warranties Available</span>}
        </div>
      </div>
    );
  }

  // Full variant (default)
  return (
    <div className={`bg-gradient-to-br from-weather-amber/10 to-amber-600/10 border border-weather-amber/30 rounded-xl p-4 ${className}`}>
      <div className="flex items-center gap-3">
        <div className="p-3 bg-gradient-to-br from-weather-amber/30 to-amber-600/30 rounded-lg">
          <Award className="w-8 h-8 text-weather-amber" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-weather-amber uppercase tracking-wide">GAF Preferred Contractor</h3>
          <p className="text-sm text-gray-700 mt-1">
            Vetted for quality • Enhanced warranties • Proven reputation
          </p>
          {showWarranty && (
            <p className="text-xs text-weather-secondary font-semibold mt-2">
              ✓ Exclusive warranty options available
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export function GAFTrustBar() {
  return (
    <div className="bg-gradient-to-r from-weather-amber/5 via-amber-50 to-weather-amber/5 py-3 border-y border-weather-amber/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-weather-amber" />
            <span className="font-semibold">GAF Preferred Contractor Since 2025</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-weather-secondary" />
            <span>Licensed & Insured</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span>Enhanced Warranties Available</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GAFCertificationSection() {
  return (
    <section className="py-12 bg-gradient-to-br from-white to-amber-50/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-weather-amber/20 overflow-hidden">
            <div className="bg-gradient-to-r from-weather-amber to-amber-600 p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-white/20 rounded-xl">
                  <Award className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">GAF Preferred Contractor</h2>
                  <p className="text-white/90 mt-1">North America&apos;s Largest Roofing Manufacturer</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-xl font-bold mb-6 text-weather-dark">What This Means for You</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-weather-amber flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Vetted for Excellence</h4>
                    <p className="text-sm text-gray-600">Thoroughly screened for proper licensing, insurance, and quality standards</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-weather-amber flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Enhanced Warranty Options</h4>
                    <p className="text-sm text-gray-600">Exclusive access to GAF&apos;s best warranty coverage for your peace of mind</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-weather-amber flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Ongoing Training</h4>
                    <p className="text-sm text-gray-600">Continuous education on the latest roofing techniques and products</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-weather-amber flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Annual Performance Review</h4>
                    <p className="text-sm text-gray-600">Maintained standards through yearly evaluations ensuring consistent quality</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-amber-50 rounded-lg border border-weather-amber/30">
                <p className="text-sm font-semibold text-weather-amber mb-2">
                  <BadgeCheck className="inline w-5 h-5 mr-1" />
                  Your Assurance of Quality
                </p>
                <p className="text-sm text-gray-700">
                  As a GAF Preferred Contractor, Weather Shield Roofing has met stringent standards for quality,
                  reliability, and customer service. This certification is your guarantee of working with a trusted,
                  professional roofing company.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GAFBadge;