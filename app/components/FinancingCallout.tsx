'use client';

import { DollarSign, CreditCard, TrendingUp, Check, ArrowRight, Percent } from 'lucide-react';
import Link from 'next/link';

interface FinancingOption {
  title: string;
  description: string;
  highlight?: boolean;
}

const options: FinancingOption[] = [
  {
    title: 'Flexible Financing Available',
    description: 'Multiple financing options to fit your budget and timeline',
    highlight: true
  },
  {
    title: 'Affordable Monthly Payments',
    description: 'Payment plans designed to make quality roofing accessible',
    highlight: false
  },
  {
    title: 'Fast Approval Process',
    description: 'Quick application with decisions in minutes',
    highlight: false
  },
  {
    title: 'Multiple Payment Plans',
    description: 'Various term lengths available to match your needs',
    highlight: false
  }
];

export default function FinancingCallout() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-orange-600 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute top-10 left-10 opacity-20 animate-pulse">
        <DollarSign className="w-24 h-24 text-white" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-20 animate-pulse">
        <CreditCard className="w-24 h-24 text-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Message */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <DollarSign className="w-5 h-5" />
              <span className="font-bold text-sm uppercase tracking-wider">Financing Options Available</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Don't Let Budget Stop You From Getting the Roof You Need
            </h2>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              With our flexible financing options, you can protect your home and family{' '}
              <span className="font-bold underline">today</span> and pay over time.
            </p>

            {/* Key Benefits */}
            <div className="space-y-4 mb-8">
              {[
                'No hidden fees or prepayment penalties',
                'Credit approval in as little as 60 seconds',
                'Available for all roofing services',
                'Multiple lenders to maximize approval odds'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="bg-white rounded-full p-1 mt-1">
                    <Check className="w-5 h-5 text-orange-600" />
                  </div>
                  <p className="text-lg text-white/95 font-medium">{benefit}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/financing"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-orange-600 px-8 py-5 rounded-full font-bold text-xl shadow-2xl transition-all duration-200 hover:scale-105"
              >
                <TrendingUp className="w-6 h-6" />
                View Financing Options
                <ArrowRight className="w-6 h-6" />
              </Link>
              <a
                href="tel:+18438775539"
                className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-5 rounded-full font-bold text-xl shadow-2xl transition-all duration-200 hover:scale-105"
              >
                📞 Call (843) 877-5539
              </a>
            </div>
          </div>

          {/* Right Column - Financing Options Cards */}
          <div className="space-y-4">
            {options.map((option, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  option.highlight ? 'ring-4 ring-white/50' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`p-3 rounded-xl ${
                    option.highlight
                      ? 'bg-gradient-to-br from-orange-600 to-orange-500 text-white'
                      : 'bg-gradient-to-br from-gray-100 to-gray-200 text-orange-600'
                  }`}>
                    {option.highlight ? (
                      <DollarSign className="w-6 h-6" />
                    ) : (
                      <Check className="w-6 h-6" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">
                        {option.title}
                      </h3>
                      {option.highlight && (
                        <span className="bg-gradient-to-r from-orange-600 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                          POPULAR
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {option.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Bottom Info Card */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-orange-600 p-2 rounded-lg">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-white font-bold text-lg">Quick Application</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Apply online or call us to discuss your options. Our team will help you find the perfect financing plan for your budget.
              </p>
              <div className="flex items-center gap-2 text-orange-400 font-semibold text-sm">
                <Check className="w-4 h-4" />
                <span>No obligation • Soft credit check available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-12 text-center">
          <p className="text-white/80 text-sm max-w-4xl mx-auto">
            *Financing subject to credit approval. Terms and conditions apply. APR and monthly payments vary based on creditworthiness and selected payment plan. Contact Weather Shield Roofing for complete details and current offers.
          </p>
        </div>
      </div>
    </section>
  );
}
