'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface LocationFAQsProps {
  cityName: string;
  faqs: FAQ[];
}

export default function LocationFAQs({ cityName, faqs }: LocationFAQsProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            {cityName} Roof Financing FAQs
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Common questions from {cityName} homeowners about our financing options
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
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

          <div className="mt-8 p-6 bg-gradient-to-r from-weather-teal to-weather-blue text-white rounded-lg text-center">
            <h3 className="text-xl font-bold mb-2">
              Still Have Questions About {cityName} Roof Financing?
            </h3>
            <p className="mb-4">
              Our {cityName} financing specialists are ready to help you find the perfect payment plan
            </p>
            <a
              href="tel:8438775539"
              className="inline-block bg-white text-weather-teal px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              Call (843) 877-5539
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
