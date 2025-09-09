'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, Shield, Clock, DollarSign, Wrench } from 'lucide-react';

const faqCategories = [
  {
    category: 'General Questions',
    icon: HelpCircle,
    faqs: [
      {
        question: 'How do I know if I need a new roof?',
        answer: 'Signs you may need a new roof include: missing or damaged shingles, water stains on ceilings, daylight through roof boards, sagging roof deck, or if your roof is over 20 years old. We offer professional inspections to assess your roof\'s condition and provide honest recommendations.'
      },
      {
        question: 'How long does a roof replacement take?',
        answer: 'Most residential roof replacements take 1-3 days, depending on the size and complexity of your roof. We work efficiently while maintaining the highest quality standards, and we always clean up thoroughly at the end of each day.'
      },
      {
        question: 'How do I get an estimate?',
        answer: 'Contact us to request an estimate for all roofing services. Our expert inspectors will assess your roof, discuss your needs, and provide a detailed written estimate with transparent pricing.'
      }
    ]
  },
  {
    category: 'Insurance & Claims',
    icon: Shield,
    faqs: [
      {
        question: 'Will my insurance cover roof repairs or replacement?',
        answer: 'Most homeowner\'s insurance policies cover roof damage caused by storms, hail, or other covered perils. We work directly with insurance companies and can help you navigate the claims process from start to finish, ensuring you get the coverage you deserve.'
      },
      {
        question: 'How do you help with insurance claims?',
        answer: 'We provide comprehensive documentation including photos, detailed reports, and meet with adjusters on your behalf. Our team has extensive experience working with all major insurance companies and knows exactly what they need to approve your claim.'
      },
      {
        question: 'What if my claim is denied?',
        answer: 'If your initial claim is denied, we can help you appeal the decision. We\'ll provide additional documentation and work with a public adjuster if necessary. Many initially denied claims are approved upon appeal with proper documentation.'
      }
    ]
  },
  {
    category: 'Costs & Financing',
    icon: DollarSign,
    faqs: [
      {
        question: 'How much does a new roof cost?',
        answer: 'Roof replacement costs vary based on size, material choice, and complexity. Most residential roofs in Myrtle Beach range from $8,000 to $15,000. We provide detailed, transparent quotes with no hidden fees, and we offer flexible financing options to fit your budget.'
      },
      {
        question: 'Do you offer financing?',
        answer: 'Yes! We offer multiple financing options with competitive rates and flexible terms. Many customers qualify for 0% interest promotions. The application process is quick and easy, with most approvals within minutes.'
      },
      {
        question: 'What warranties do you offer?',
        answer: 'As a certified contractor, we offer the best warranties in the industry including 50-year material warranties and 25-year workmanship warranties. We also provide our own lifetime workmanship guarantee for added peace of mind.'
      }
    ]
  },
  {
    category: 'Emergency & Maintenance',
    icon: Wrench,
    faqs: [
      {
        question: 'Do you provide emergency services?',
        answer: 'Yes! We offer 24/7 emergency roofing services. If you have storm damage, a sudden leak, or any roofing emergency, call us immediately at (843) 877-5539. We typically respond within 1 hour for true emergencies.'
      },
      {
        question: 'How often should I have my roof inspected?',
        answer: 'We recommend annual roof inspections, especially after severe weather events. Regular inspections can identify minor issues before they become major problems, potentially saving thousands in repairs. Contact us to schedule your inspection.'
      },
      {
        question: 'Do you repair all types of roofs?',
        answer: 'Yes, we work with all roofing materials including asphalt shingles, metal, tile, slate, flat roofs (TPO, EPDM), and more. Our certified technicians have expertise in both residential and commercial roofing systems.'
      }
    ]
  }
];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const toggleQuestion = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-weather-teal/10 rounded-full px-4 py-2 mb-6">
            <HelpCircle className="w-5 h-5 text-weather-teal" />
            <span className="text-weather-teal font-semibold">Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-weather-dark mb-4">
            Got Questions? We Have Answers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our roofing services, warranties, and process.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {faqCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <button
                key={index}
                onClick={() => {
                  setActiveCategory(index);
                  setOpenQuestion(null);
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeCategory === index
                    ? 'bg-weather-teal text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqCategories[activeCategory].faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleQuestion(faq.question)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between group"
                >
                  <h3 className="text-lg font-semibold text-weather-dark group-hover:text-weather-teal transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-weather-teal flex-shrink-0 transition-transform duration-300 ${
                      openQuestion === faq.question ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openQuestion === faq.question && (
                  <div className="px-6 pb-5 animate-fade-in">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-weather-teal to-weather-blue rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still Have Questions?
            </h3>
            <p className="text-white/90 mb-6">
              Our roofing experts are here to help. Get personalized answers to all your roofing questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:843-877-5539"
                className="inline-flex items-center justify-center gap-2 bg-white text-weather-teal px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                <Clock className="w-5 h-5" />
                Call (843) 877-5539
              </a>
              <a
                href="https://your-n8n-form-url.com"
                className="inline-flex items-center justify-center gap-2 bg-weather-dark text-white px-6 py-3 rounded-lg font-bold hover:bg-weather-dark/90 transition-colors"
              >
                Request Quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}