'use client';

import { useState } from 'react';
import {
  DollarSign,
  Award,
  Percent,
  Zap,
  Shield,
  CreditCard,
  Home,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Phone,
  Clock,
  TrendingUp
} from 'lucide-react';
import type { ServiceFinancingData } from './serviceFinancingData';

interface ServiceFinancingTemplateProps {
  data: ServiceFinancingData;
}

export default function ServiceFinancingTemplate({ data }: ServiceFinancingTemplateProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Zero Down Payment',
      description: '100% financing available - no money down required for qualified applicants'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Bad Credit Welcome',
      description: 'We approve all credit types - poor credit, fair credit, or no credit history'
    },
    {
      icon: <Percent className="w-6 h-6" />,
      title: '0% APR Available',
      description: 'Promotional 0% APR financing for 12 months on approved credit'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Same Day Approval',
      description: 'Get approved in 60 seconds with instant financing decision'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Flexible Payment Plans',
      description: 'Choose from 12 to 60 month terms with low monthly payments'
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'No Prepayment Penalty',
      description: 'Pay off your loan early without any fees or penalties'
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Increase Home Value',
      description: 'Invest in improvements that boost property value and curb appeal'
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'Guaranteed Approval Options',
      description: 'Special programs for those previously denied financing elsewhere'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-weather-teal to-weather-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {data.heroHeadline}
            </h1>
            <p className="text-xl mb-8">
              {data.heroSubheadline}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm">Financing Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div className="text-2xl font-bold">$0</div>
                <div className="text-sm">Down Payment</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div className="text-2xl font-bold">All Credit</div>
                <div className="text-sm">Types Approved</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3">
                <div className="text-2xl font-bold">60 Sec</div>
                <div className="text-sm">Instant Approval</div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:8438775539"
                className="bg-white text-weather-teal px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
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

      {/* Why Finance This Service */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Why Finance Your {data.serviceName}?
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Smart reasons to choose flexible payment options for your {data.serviceName.toLowerCase()} project
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {data.whyFinancePoints.map((point, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-weather-teal" />
                  </div>
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Financing Benefits for {data.serviceName}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-weather-teal mb-4">{benefit.icon}</div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service-Specific FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              {data.serviceName} Financing FAQs
            </h2>
            <p className="text-center text-gray-600 mb-12">
              Common questions about financing your {data.serviceName.toLowerCase()} project
            </p>

            <div className="space-y-4">
              {data.faqs.map((faq, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold pr-4">{faq.question}</span>
                    {expandedFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 py-4 bg-gray-50 border-t">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Simple Application Process
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-weather-teal/10 rounded-full flex items-center justify-center text-weather-teal mb-4">
                  <Phone className="w-10 h-10" />
                </div>
                <div className="bg-weather-teal text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  1
                </div>
                <h3 className="font-bold text-lg mb-2">Get Your Quote</h3>
                <p className="text-gray-600 text-sm">
                  Call us for a free estimate on your {data.serviceName.toLowerCase()} project
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-weather-teal/10 rounded-full flex items-center justify-center text-weather-teal mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <div className="bg-weather-teal text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  2
                </div>
                <h3 className="font-bold text-lg mb-2">Apply & Get Approved</h3>
                <p className="text-gray-600 text-sm">
                  Complete quick application and receive instant approval decision
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-weather-teal/10 rounded-full flex items-center justify-center text-weather-teal mb-4">
                  <TrendingUp className="w-10 h-10" />
                </div>
                <div className="bg-weather-teal text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  3
                </div>
                <h3 className="font-bold text-lg mb-2">Start Your Project</h3>
                <p className="text-gray-600 text-sm">
                  Begin work immediately with your approved financing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-weather-teal to-weather-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Finance Your {data.serviceName}?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't let budget concerns delay your project. Get approved today with our flexible financing options!
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a
              href="tel:8438775539"
              className="bg-white text-weather-teal px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Call (843) 877-5539
            </a>
            <a
              href="tel:8438775539"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
            >
              Call (843) 877-5539
            </a>
          </div>
          <p className="text-sm opacity-90">
            Available 24/7 | Licensed & Insured | Free Estimates
          </p>
        </div>
      </section>
    </div>
  );
}
