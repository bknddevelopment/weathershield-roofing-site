'use client';

import { Award, Shield, Clock, Users, Wrench, DollarSign, Phone, CheckCircle, TrendingUp, Zap, Sparkles, BadgeCheck } from 'lucide-react';

interface Reason {
  icon: React.ElementType;
  title: string;
  description: string;
  highlight?: boolean;
}

const reasons: Reason[] = [
  {
    icon: Award,
    title: 'GAF Certified Contractor',
    description: 'Elite certification from North America\'s largest roofing manufacturer. Only 3% of contractors qualify.',
    highlight: true
  },
  {
    icon: Shield,
    title: 'Lifetime Warranties',
    description: 'Industry-leading warranties on materials and workmanship. Your roof protected for decades.',
    highlight: true
  },
  {
    icon: Clock,
    title: 'True 24/7 Emergency Service',
    description: 'Real people answering phones at 3 AM. Not an answering service. Rapid response guaranteed.',
    highlight: false
  },
  {
    icon: Users,
    title: '15+ Years of Excellence',
    description: 'Serving Myrtle Beach & the Carolina Coast since 2010. Over 1,000 satisfied customers.',
    highlight: false
  },
  {
    icon: BadgeCheck,
    title: 'BBB A+ Rating',
    description: 'Accredited since 2023 with zero unresolved complaints. Commitment to customer satisfaction.',
    highlight: false
  },
  {
    icon: DollarSign,
    title: 'Flexible Financing',
    description: '0% APR options available. Affordable monthly payments. Approval in minutes.',
    highlight: false
  },
  {
    icon: Wrench,
    title: 'Expert Craftsmanship',
    description: 'Licensed, bonded, and insured. Factory-trained installation crews. No subcontractors.',
    highlight: false
  },
  {
    icon: TrendingUp,
    title: 'Insurance Specialists',
    description: 'We handle the entire claims process. Maximize your coverage. Zero stress for you.',
    highlight: false
  },
  {
    icon: CheckCircle,
    title: '100% Satisfaction Guarantee',
    description: 'Not happy? We\'ll make it right. No questions asked. Your peace of mind is our priority.',
    highlight: true
  },
  {
    icon: Zap,
    title: 'Fast Response Times',
    description: 'Free inspections scheduled quickly. Detailed quotes delivered on-site.',
    highlight: false
  },
  {
    icon: Sparkles,
    title: 'Immaculate Cleanup',
    description: 'Magnetic nail sweeps. Complete debris removal. You won\'t find a single nail in your yard.',
    highlight: false
  },
  {
    icon: Phone,
    title: 'Local Family-Owned',
    description: 'Myrtle Beach born and raised. We live here, work here, and care about our neighbors.',
    highlight: false
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #f97316 1px, transparent 0)',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-orange-600 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider mb-4">
            The Weather Shield Difference
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            Why Myrtle Beach Chooses Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just install roofs - we protect families, preserve investments, and deliver peace of mind.
            Here's what sets us apart from the competition.
          </p>
        </div>

        {/* Icon Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                  reason.highlight
                    ? 'border-orange-500 bg-gradient-to-br from-orange-50 to-white'
                    : 'border-gray-200 hover:border-orange-300'
                }`}
              >
                {/* Highlight Badge */}
                {reason.highlight && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    ⭐ FEATURED
                  </div>
                )}

                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl mb-4 transition-all duration-300 group-hover:scale-110 ${
                  reason.highlight
                    ? 'bg-gradient-to-br from-orange-600 to-orange-500 text-white'
                    : 'bg-gradient-to-br from-gray-100 to-gray-200 text-orange-600 group-hover:from-orange-100 group-hover:to-orange-200'
                }`}>
                  <Icon className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Experience the Difference?
          </h3>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            Join 1,000+ Myrtle Beach homeowners who chose quality, reliability, and peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/free-inspection"
              className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-10 py-5 rounded-full font-bold text-xl shadow-xl transition-all duration-200 hover:scale-105"
            >
              Schedule Free Inspection
            </a>
            <a
              href="tel:+18438775539"
              className="bg-white hover:bg-gray-100 text-gray-900 px-10 py-5 rounded-full font-bold text-xl shadow-xl transition-all duration-200 hover:scale-105"
            >
              📞 (843) 877-5539
            </a>
          </div>
          <p className="text-gray-400 text-sm mt-6">
            ⚡ Emergency service available 24/7 • Fast response • Licensed & insured
          </p>
        </div>
      </div>
    </section>
  );
}
