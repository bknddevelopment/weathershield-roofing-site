'use client';

import { useState } from 'react';
import {
  Calculator,
  CreditCard,
  Shield,
  CheckCircle2,
  FileText,
  Home,
  Percent,
  DollarSign,
  ChevronDown,
  ChevronUp,
  Award,
  ArrowRight,
  Clock,
  Phone,
  Zap
} from 'lucide-react';
import TrustIndicators from '../components/TrustIndicators';

interface FAQ {
  question: string;
  answer: string;
}

export default function FinancingPageClient() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Zero Down Payment',
      description: '100% financing available - no money down required for qualified applicants'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'All Credit Types',
      description: 'We work with multiple lenders to approve all credit types and situations'
    },
    {
      icon: <Percent className="w-6 h-6" />,
      title: '0% APR Available',
      description: 'Promotional 0% APR financing for 12 months on approved credit'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Fast Approval',
      description: 'Get approved quickly with instant financing decisions'
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
      title: 'Multiple Financing Options',
      description: 'Special programs available for various credit situations'
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: 'Get Your Quote',
      description: 'Schedule a free inspection and receive a detailed project estimate',
      icon: <Calculator className="w-8 h-8" />
    },
    {
      step: 2,
      title: 'Discuss Options',
      description: 'Review financing options that fit your budget and timeline',
      icon: <FileText className="w-8 h-8" />
    },
    {
      step: 3,
      title: 'Get Approved',
      description: 'Receive approval notification and review terms',
      icon: <CheckCircle2 className="w-8 h-8" />
    },
    {
      step: 4,
      title: 'Start Your Project',
      description: 'Begin work immediately with your approved financing',
      icon: <Home className="w-8 h-8" />
    }
  ];

  const faqs: FAQ[] = [
    {
      question: 'Do you offer zero down payment roof financing?',
      answer: 'Yes! We offer 100% financing with zero down payment for qualified applicants. This means you can get your roof replaced or repaired without paying anything upfront. Our $0 down payment programs are available for applicants with good to excellent credit. Contact us at (843) 877-5539 to see if you qualify for no money down financing.'
    },
    {
      question: 'Can I get approved for roof financing with bad credit?',
      answer: 'Absolutely! We work with multiple lenders who approve all credit types. Even if you have poor credit (scores as low as 580), fair credit, or have been denied financing elsewhere, we have programs designed specifically for your situation. Our financing options include flexible terms and competitive rates. We believe everyone deserves a safe, quality roof regardless of credit history.'
    },
    {
      question: 'What if I was denied roof financing at other companies?',
      answer: 'Don\'t give up! We have multiple financing programs for applicants who were previously denied financing. Our network of specialty lenders focuses on your ability to repay rather than just your credit score. Call us at (843) 877-5539 and we\'ll find a financing solution that works for your unique situation.'
    },
    {
      question: 'What credit score do I need to qualify?',
      answer: 'We work with multiple lenders to provide financing options for all credit types. While better credit scores qualify for lower rates, we have programs available for scores as low as 580. Each application is reviewed individually to find the best financing option for your situation.'
    },
    {
      question: 'How quickly can I get approved?',
      answer: 'Most applications receive a decision quickly. In some cases, additional documentation may be required, but we work to process applications as fast as possible so you can start your roofing project.'
    },
    {
      question: 'Is there a down payment required?',
      answer: 'Down payment requirements vary by program and credit qualification. Some programs offer 100% financing with no money down, while others may require 10-20% down for the best rates. We\'ll work with you to find the option that fits your budget.'
    },
    {
      question: 'Can I pay off my loan early?',
      answer: 'Yes! All our financing programs allow early payoff without any prepayment penalties. You can make extra payments or pay off the entire balance at any time without additional fees.'
    },
    {
      question: 'What documents do I need to apply?',
      answer: 'Basic applications require only your personal information and consent for a credit check. For larger projects or certain programs, you may need to provide proof of income, bank statements, or property ownership documentation. We\'ll guide you through the specific requirements.'
    },
    {
      question: 'Will applying affect my credit score?',
      answer: 'We use a soft credit pull for pre-qualification, which does not affect your credit score. A hard credit inquiry is only performed when you formally accept a financing offer and decide to move forward.'
    },
    {
      question: 'Can I finance multiple projects?',
      answer: 'Yes, you can finance multiple home improvement projects. Your approval amount will depend on your creditworthiness and overall debt-to-income ratio. Contact us to discuss financing options for all your roofing needs.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-weather-teal via-weather-blue to-weather-slate text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Percent className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold">Flexible Financing Available</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Affordable Financing Solutions for Your Roofing Project
            </h1>

            <p className="text-xl mb-8 text-white/90">
              Make your home improvement dreams a reality with our flexible payment plans and competitive rates
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-white/90">Financing Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                <div className="text-2xl font-bold">$0</div>
                <div className="text-sm text-white/90">Down Options</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                <div className="text-2xl font-bold">All Credit</div>
                <div className="text-sm text-white/90">Types Approved</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                <div className="text-2xl font-bold">0% APR</div>
                <div className="text-sm text-white/90">Options Available</div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/quote"
                className="bg-white text-weather-teal px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
              >
                Get Your Quote
              </a>
              <a
                href="tel:8438775539"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                (843) 877-5539
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Financing?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We make it easy to invest in your home's protection with flexible payment options
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-weather-teal/30"
                >
                  <div className="w-12 h-12 bg-weather-teal/10 rounded-lg flex items-center justify-center text-weather-teal mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple Application Process</h2>
              <p className="text-xl text-gray-600">
                Get started in just four easy steps
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applicationSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-weather-teal/10 rounded-full flex items-center justify-center text-weather-teal mb-4">
                        {step.icon}
                      </div>
                      <div className="bg-weather-teal text-white w-8 h-8 rounded-full flex items-center justify-center mb-3 font-bold text-sm">
                        {step.step}
                      </div>
                      <h3 className="font-bold text-lg mb-2 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                  {index < applicationSteps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-6 text-weather-teal z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <TrustIndicators />

      {/* CTA Section - Apply Now */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-weather-teal to-weather-blue rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Don't let budget concerns hold you back from protecting your home.
              Get a free quote and explore your financing options today!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/quote"
                className="bg-white text-weather-teal px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl inline-flex items-center gap-2"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:8438775539"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                (843) 877-5539
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about our financing options
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                    <div className="flex-shrink-0">
                      {expandedFAQ === index ? (
                        <ChevronUp className="w-5 h-5 text-weather-teal" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 py-5 bg-gray-50 border-t border-gray-100">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-weather-slate to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Clock className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't Wait - Protect Your Home Today
            </h2>
            <p className="text-xl mb-8 text-white/90">
              With flexible financing options, there's never been a better time to invest in your roof
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/free-inspection"
                className="bg-weather-teal text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-weather-blue transition-colors inline-flex items-center gap-2"
              >
                Schedule Free Inspection
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:8438775539"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call (843) 877-5539
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
