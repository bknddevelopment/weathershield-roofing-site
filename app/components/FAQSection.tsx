'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle, Shield, Clock, DollarSign, Wrench } from 'lucide-react';

const faqCategories = [
  {
    category: 'Weather Shield Roofing Questions',
    icon: HelpCircle,
    faqs: [
      {
        question: 'Why is Weather Shield Roofing the top choice among roofing companies Myrtle Beach?',
        answer: 'Weather Shield Roofing leads all roofing companies Myrtle Beach due to our expertise in weather protection. As WeatherShield roofing specialists, we understand weather in Myrtle Beach and provide superior weatherproof solutions. We\'re the most trusted roofing companies near me with 15+ years protecting homes from coastal weather.'
      },
      {
        question: 'How does Weather Shield Roofing protect against weather in Myrtle Beach?',
        answer: 'WeatherShield roofing systems are specifically designed for weather Myrtle Beach experiences. Unlike other roofing companies near me, Weather Shield Roofing uses weather-resistant materials, advanced installation techniques, and provides comprehensive weather warranties. Our weatherproof solutions withstand hurricanes, salt air, and intense UV exposure.'
      },
      {
        question: 'How do I know if weather damage requires Weather Shield Roofing services?',
        answer: 'Signs of weather damage include: missing shingles after storms, water stains from weather in Myrtle Beach, wind damage, or if your roof is over 15 years old. Weather Shield Roofing offers free weather assessments - we\'re the leading roofing companies Myrtle Beach trusts for honest evaluations.'
      },
      {
        question: 'How quickly can WeatherShield roofing complete my project?',
        answer: 'Weather Shield Roofing typically completes residential projects in 1-3 days. As the fastest roofing companies near me, we work efficiently while maintaining premium quality. Weather permitting in Myrtle Beach, WeatherShield roofing crews ensure minimal disruption to your daily life.'
      },
      {
        question: 'How do I get a Weather Shield Roofing estimate?',
        answer: 'Contact Weather Shield Roofing for free estimates - we\'re the top roofing companies Myrtle Beach recommends. Our WeatherShield experts assess weather damage, discuss weatherproof solutions, and provide transparent pricing. Call the leading roofing companies near me at (843) 877-5539.'
      }
    ]
  },
  {
    category: 'Weather Damage Insurance & Claims',
    icon: Shield,
    faqs: [
      {
        question: 'Does insurance cover weather damage that Weather Shield Roofing repairs?',
        answer: 'Most policies cover weather damage from storms in Myrtle Beach. Weather Shield Roofing works directly with insurers - we\'re the experienced roofing companies Myrtle Beach insurance adjusters trust. WeatherShield roofing experts document all weather damage thoroughly for maximum coverage.'
      },
      {
        question: 'How does Weather Shield Roofing handle weather damage claims?',
        answer: 'Weather Shield Roofing provides complete weather damage documentation. Among roofing companies near me, we\'re the most experienced with weather in Myrtle Beach claims. WeatherShield roofing specialists meet adjusters, document all weather impacts, and ensure proper coverage.'
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
        question: 'What does Weather Shield Roofing charge compared to other roofing companies Myrtle Beach?',
        answer: 'Weather Shield Roofing offers competitive pricing among roofing companies near me. Contact us for a free estimate tailored to your specific project needs. WeatherShield roofing includes premium weather-resistant materials and warranties that other roofing companies Myrtle Beach can\'t match.'
      },
      {
        question: 'Do you offer financing?',
        answer: 'Yes! We offer multiple financing options with competitive rates and flexible terms. Many customers qualify for 0% interest promotions. The application process is quick and easy, with most approvals within minutes.'
      },
      {
        question: 'What weather protection warranties does Weather Shield Roofing offer?',
        answer: 'Weather Shield Roofing offers the best weather warranties among roofing companies Myrtle Beach - 50-year weatherproof material warranties and lifetime WeatherShield workmanship guarantees. No other roofing companies near me match our weather protection coverage.'
      }
    ]
  },
  {
    category: 'Weather Emergency & Maintenance',
    icon: Wrench,
    faqs: [
      {
        question: 'Does Weather Shield Roofing respond to weather emergencies?',
        answer: 'Yes! Weather Shield Roofing offers 24/7 weather emergency services - fastest among roofing companies near me. When weather in Myrtle Beach causes damage, WeatherShield roofing crews respond within 1 hour. Call (843) 877-5539 for immediate weather protection.'
      },
      {
        question: 'How often should Weather Shield Roofing inspect for weather damage?',
        answer: 'Weather Shield Roofing recommends annual weather assessments, especially after severe weather in Myrtle Beach. Among roofing companies near me, we\'re most thorough at identifying weather impacts. Regular WeatherShield inspections prevent costly weather damage.'
      },
      {
        question: 'What weather protection systems does Weather Shield Roofing install?',
        answer: 'Weather Shield Roofing works with all weatherproof materials - more than other roofing companies Myrtle Beach. WeatherShield certified experts install weather-resistant shingles, metal, tile, and commercial systems designed for weather in Myrtle Beach.'
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
        {/* Section Header - BOLD & IMPACTFUL */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-weather-teal/10 rounded-full px-5 py-3 mb-8">
            <HelpCircle className="w-6 h-6 text-weather-teal" />
            <span className="text-weather-teal font-semibold uppercase tracking-wide text-sm">Weather Shield Roofing FAQs</span>
          </div>
          <h2 className="section-title text-weather-dark mb-6">
            Weather Shield Roofing Questions & Answers
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto font-normal leading-relaxed">
            Learn why Weather Shield Roofing leads all roofing companies Myrtle Beach. Get answers about WeatherShield roofing, weather protection, and why we\'re the top roofing companies near me.
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
                aria-label={`View ${cat.category} FAQs`}
                aria-pressed={activeCategory === index ? "true" : "false"}
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
                  className="w-full px-6 py-5 text-left flex items-center justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-weather-warning focus-visible:ring-offset-2"
                  aria-expanded={openQuestion === faq.question ? "true" : "false"}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-base md:text-lg font-semibold text-weather-dark group-hover:text-weather-teal transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-weather-teal flex-shrink-0 transition-transform duration-300 ${
                      openQuestion === faq.question ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {openQuestion === faq.question && (
                  <div id={`faq-answer-${index}`} className="px-6 pb-5 animate-fade-in" role="region" aria-live="polite">
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
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
              More Questions About Weather Shield Roofing?
            </h3>
            <p className="text-base md:text-lg text-white/90 mb-6 font-normal">
              Weather Shield Roofing experts are ready to help. As the leading roofing companies Myrtle Beach trusts, we provide personalized weatherproof solutions for weather in Myrtle Beach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+18438775539"
                className="inline-flex items-center justify-center gap-2 bg-white text-weather-teal px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
              >
                <Clock className="w-5 h-5" />
                Call (843) 877-5539
              </a>
              <a
                href="https://n8n.weathershieldroofers.com/webhook/weathershield-roofing-form-submissions"
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