'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ResponsiveImage from './ResponsiveImage';
import TrustIndicators from './TrustIndicators';
import JsonLd from './JsonLd';
import { ChevronRight, CheckCircle, AlertCircle, Clock, DollarSign, Home, Shield, Award } from 'lucide-react';

interface MaterialPageProps {
  title: string;
  description: string;
  heroImage?: string;
  materialType: 'premium' | 'standard' | 'economy' | 'specialty';
  lifespan: string;
  warranty: string;
  bestFor: string[];
  pros: string[];
  cons: string[];
  features: Array<{
    title: string;
    description: string;
  }>;
  styles: Array<{
    name: string;
    description: string;
    image?: string;
  }>;
  costRange: {
    description: string;
    factors: string[];
  };
  installation: {
    timeframe: string;
    complexity: 'low' | 'medium' | 'high';
    requirements: string[];
  };
  maintenance: {
    frequency: string;
    tasks: string[];
  };
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  comparisons?: Array<{
    material: string;
    href: string;
    description: string;
  }>;
  climateNote?: string;
}

export default function MaterialPageTemplate({
  title,
  description,
  heroImage = '/images/background/residential-roofing-gutter-siding-services.jpg',
  materialType,
  lifespan,
  warranty,
  bestFor,
  pros,
  cons,
  features,
  styles,
  costRange,
  installation,
  maintenance,
  faqs,
  comparisons,
  climateNote
}: MaterialPageProps) {

  const materialTypeBadges = {
    premium: { label: 'Premium Material', color: 'bg-amber-600', icon: Award },
    standard: { label: 'Standard Choice', color: 'bg-blue-600', icon: Home },
    economy: { label: 'Budget-Friendly', color: 'bg-green-600', icon: DollarSign },
    specialty: { label: 'Specialty Material', color: 'bg-purple-600', icon: Shield }
  };

  const complexityColors = {
    low: 'text-green-600',
    medium: 'text-yellow-600',
    high: 'text-red-600'
  };

  const badge = materialTypeBadges[materialType];
  const BadgeIcon = badge.icon;

  return (
    <>
      <JsonLd.Article
        headline={title}
        description={description}
        author={{
          name: "Weather Shield Roofing",
          type: "Organization"
        }}
        datePublished={new Date().toISOString()}
        image={[heroImage]}
      />

      {faqs && faqs.length > 0 && (
        <JsonLd.FAQ questions={faqs} />
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ResponsiveImage
            src={heroImage}
            alt={title}
            width={1920}
            height={1080}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-transparent"></div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className={`inline-flex items-center gap-2 ${badge.color} text-white px-4 py-2 rounded-full text-sm font-semibold mb-6`}>
              <BadgeIcon className="w-4 h-4" />
              {badge.label}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {title}
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <Clock className="w-6 h-6 text-weather-shield-blue mb-2" />
                <div className="text-sm text-gray-300">Lifespan</div>
                <div className="text-xl font-bold">{lifespan}</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <Shield className="w-6 h-6 text-weather-shield-blue mb-2" />
                <div className="text-sm text-gray-300">Warranty</div>
                <div className="text-xl font-bold">{warranty}</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <Clock className="w-6 h-6 text-weather-shield-blue mb-2" />
                <div className="text-sm text-gray-300">Installation</div>
                <div className="text-xl font-bold">{installation.timeframe}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center bg-weather-shield-red hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Free Material Quote
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>

              <a
                href="tel:8438775539"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Call (843) 877-5539
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-12">

              {/* Climate Note */}
              {climateNote && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-blue-50 border-l-4 border-weather-shield-blue p-6 rounded-r-lg"
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-6 h-6 text-weather-shield-blue flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Myrtle Beach Climate Consideration</h3>
                      <p className="text-gray-700">{climateNote}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Best For Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Best For</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {bestFor.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-800">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Pros and Cons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Pros & Cons</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  {/* Pros */}
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-6 h-6" />
                      Advantages
                    </h3>
                    <ul className="space-y-3">
                      {pros.map((pro, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span className="text-gray-800">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Cons */}
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center gap-2">
                      <AlertCircle className="w-6 h-6" />
                      Considerations
                    </h3>
                    <ul className="space-y-3">
                      {cons.map((con, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">✗</span>
                          <span className="text-gray-800">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6 border-l-4 border-weather-shield-blue">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Styles & Options */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Styles & Options</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {styles.map((style, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{style.name}</h3>
                      <p className="text-gray-700">{style.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Installation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Installation Details</h2>
                <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-semibold">Installation Timeframe:</span>
                    <span className="text-gray-900 font-bold">{installation.timeframe}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 font-semibold">Complexity Level:</span>
                    <span className={`font-bold ${complexityColors[installation.complexity]}`}>
                      {installation.complexity.charAt(0).toUpperCase() + installation.complexity.slice(1)}
                    </span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <h4 className="font-bold text-gray-900 mb-3">Installation Requirements:</h4>
                    <ul className="space-y-2">
                      {installation.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-weather-shield-blue flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Maintenance */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Maintenance Requirements</h2>
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="mb-4">
                    <span className="text-gray-700 font-semibold">Recommended Frequency: </span>
                    <span className="text-gray-900 font-bold">{maintenance.frequency}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-3">Maintenance Tasks:</h4>
                  <ul className="space-y-2">
                    {maintenance.tasks.map((task, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-weather-shield-blue flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Cost Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Investment Considerations</h2>
                <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                  <p className="text-gray-700 leading-relaxed">{costRange.description}</p>
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-bold text-gray-900 mb-3">Cost Factors Include:</h4>
                    <ul className="space-y-2">
                      {costRange.factors.map((factor, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <DollarSign className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{factor}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* FAQs */}
              {faqs && faqs.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <details key={index} className="group bg-white border border-gray-200 rounded-lg overflow-hidden">
                        <summary className="cursor-pointer p-6 font-bold text-gray-900 hover:bg-gray-50 flex items-center justify-between">
                          <span>{faq.question}</span>
                          <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
                        </summary>
                        <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Related Materials */}
              {comparisons && comparisons.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Compare Materials</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {comparisons.map((comparison, index) => (
                      <Link
                        key={index}
                        href={comparison.href}
                        className="bg-white border border-gray-200 rounded-lg p-6 hover:border-weather-shield-blue hover:shadow-lg transition-all group"
                      >
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-weather-shield-blue flex items-center gap-2">
                          {comparison.material}
                          <ChevronRight className="w-5 h-5" />
                        </h3>
                        <p className="text-gray-600 text-sm">{comparison.description}</p>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}

            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">

                {/* Contact CTA */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-weather-shield-blue to-blue-700 text-white rounded-lg p-6 shadow-xl"
                >
                  <h3 className="text-2xl font-bold mb-4">Get Expert Advice</h3>
                  <p className="mb-6">Not sure which material is right for your home? Our roofing experts can help you choose.</p>

                  <div className="space-y-3">
                    <a
                      href="tel:8438775539"
                      className="block w-full bg-white hover:bg-gray-100 text-weather-shield-blue font-bold py-3 px-6 rounded-lg text-center transition-all"
                    >
                      Call (843) 877-5539
                    </a>

                    <Link
                      href="/free-inspection"
                      className="block w-full bg-weather-shield-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-all"
                    >
                      Free Inspection
                    </Link>
                  </div>
                </motion.div>

                {/* Quick Facts */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-md"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Reference</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between pb-2 border-b border-gray-200">
                      <span className="text-gray-600">Expected Lifespan:</span>
                      <span className="font-bold text-gray-900">{lifespan}</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-gray-200">
                      <span className="text-gray-600">Warranty Coverage:</span>
                      <span className="font-bold text-gray-900">{warranty}</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-gray-200">
                      <span className="text-gray-600">Installation Time:</span>
                      <span className="font-bold text-gray-900">{installation.timeframe}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Material Type:</span>
                      <span className="font-bold text-gray-900">{badge.label}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Trust Indicators */}
                <TrustIndicators />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
