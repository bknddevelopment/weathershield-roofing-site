'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { getBookingLinkProps } from '../config/booking';
import {
  CheckCircle,
  Phone,
  ArrowRight,
  Star,
  Shield,
  Award,
  Users,
  Zap,
  AlertTriangle,
  Clock,
  Home,
  TrendingUp
} from 'lucide-react';
import HeroSection from './HeroSection';
import CTASection from './CTASection';
import TestimonialsSection from './TestimonialsSection';
import { JsonLd } from './JsonLd';

interface IssuePageProps {
  title: string;
  description: string;
  heroImage?: string;
  symptoms: string[];
  causes: Array<{
    title: string;
    description: string;
  }>;
  solutions: Array<{
    title: string;
    description: string;
    timeframe?: string;
  }>;
  prevention: string[];
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  relatedIssues?: Array<{
    title: string;
    href: string;
    description: string;
  }>;
  urgencyLevel: 'low' | 'medium' | 'high' | 'emergency';
  costFactors?: string[];
}

export default function IssuePageTemplate({
  title,
  description,
  heroImage = '/images/service-hero.jpg',
  symptoms,
  causes,
  solutions,
  prevention,
  faqs,
  relatedIssues,
  urgencyLevel,
  costFactors
}: IssuePageProps) {
  const urgencyConfig = {
    low: {
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      label: 'Monitor & Schedule',
      icon: <TrendingUp className="w-5 h-5" />
    },
    medium: {
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      label: 'Address Soon',
      icon: <Clock className="w-5 h-5" />
    },
    high: {
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      label: 'Urgent Attention Needed',
      icon: <AlertTriangle className="w-5 h-5" />
    },
    emergency: {
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      label: 'Emergency - Call Now',
      icon: <Zap className="w-5 h-5" />
    }
  };

  const urgency = urgencyConfig[urgencyLevel];

  return (
    <>
      {/* SEO Schema */}
      <JsonLd.Article
        headline={title}
        description={description}
        datePublished={new Date().toISOString()}
        dateModified={new Date().toISOString()}
        author={{
          name: "Weather Shield Roofing",
          type: "Organization"
        }}
        image={[heroImage]}
      />
      <JsonLd.FAQ questions={faqs} />

      {/* Hero Section */}
      <HeroSection />

      {/* Urgency Banner */}
      <section className={`py-4 ${urgency.bgColor} border-b-2 ${urgency.borderColor}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3">
            <div className={urgency.color}>{urgency.icon}</div>
            <span className={`font-semibold ${urgency.color}`}>
              {urgency.label}
            </span>
            {urgencyLevel === 'emergency' && (
              <a
                href="tel:+18438775539"
                className="ml-4 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call (843) 877-5539
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              {/* Issue Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-weather-black mb-6">
                  Understanding {title}
                </h2>
                <div className="prose prose-lg text-weather-dark">
                  <p>{description}</p>
                </div>
              </motion.div>

              {/* Symptoms to Watch For */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold text-weather-black mb-6">
                  Warning Signs & Symptoms
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {symptoms.map((symptom, index) => (
                    <motion.div
                      key={symptom}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-start gap-3 bg-weather-light rounded-lg p-4"
                    >
                      <AlertTriangle className="w-5 h-5 text-weather-coral flex-shrink-0 mt-0.5" />
                      <span className="text-weather-dark">{symptom}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Common Causes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold text-weather-black mb-6">
                  Common Causes
                </h3>
                <div className="space-y-4">
                  {causes.map((cause, index) => (
                    <motion.div
                      key={cause.title}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-weather-light rounded-lg p-6"
                    >
                      <h4 className="text-lg font-semibold text-weather-black mb-2">
                        {cause.title}
                      </h4>
                      <p className="text-weather-dark">{cause.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Professional Solutions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold text-weather-black mb-6">
                  How We Fix {title}
                </h3>
                <div className="space-y-6">
                  {solutions.map((solution, index) => (
                    <motion.div
                      key={solution.title}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-weather-teal rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-weather-black mb-2">
                          {solution.title}
                        </h4>
                        <p className="text-weather-dark mb-2">{solution.description}</p>
                        {solution.timeframe && (
                          <div className="flex items-center gap-2 text-sm text-weather-teal">
                            <Clock className="w-4 h-4" />
                            <span>{solution.timeframe}</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Prevention Tips */}
              {prevention.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h3 className="text-2xl font-bold text-weather-black mb-6">
                    Prevention Tips
                  </h3>
                  <div className="bg-weather-sage bg-opacity-10 rounded-lg p-6 border-l-4 border-weather-sage">
                    <div className="space-y-3">
                      {prevention.map((tip, index) => (
                        <motion.div
                          key={tip}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className="w-5 h-5 text-weather-sage flex-shrink-0 mt-0.5" />
                          <span className="text-weather-dark">{tip}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* FAQs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-weather-black mb-6">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.details
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="bg-weather-light rounded-lg p-6 cursor-pointer group"
                    >
                      <summary className="font-semibold text-weather-black flex items-center justify-between">
                        {faq.question}
                        <span className="text-weather-teal group-open:rotate-180 transition-transform">
                          ▼
                        </span>
                      </summary>
                      <p className="mt-4 text-weather-dark">{faq.answer}</p>
                    </motion.details>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Quick Contact Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-weather-teal rounded-xl p-6 text-white"
                >
                  <h3 className="text-xl font-bold mb-4">Get Expert Help</h3>
                  <p className="text-sm mb-4 text-white/90">
                    Don't let this issue get worse. Contact Weather Shield Roofing for a professional assessment.
                  </p>
                  <div className="space-y-4">
                    <a
                      href="tel:+18438775539"
                      className="flex items-center justify-center gap-2 bg-white text-weather-purple px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <Phone className="w-5 h-5" />
                      Call (843) 877-5539
                    </a>
                    <a
                      {...getBookingLinkProps()}
                      className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-weather-purple transition-all duration-300"
                    >
                      Free Inspection
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="flex items-center gap-2 text-sm">
                      <Zap className="w-4 h-4" />
                      <span>24/7 Emergency Service Available</span>
                    </div>
                  </div>
                </motion.div>

                {/* Cost Factors */}
                {costFactors && costFactors.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-6"
                  >
                    <h4 className="font-bold text-weather-black mb-4">Cost Factors</h4>
                    <p className="text-sm text-weather-dark mb-3">
                      Repair costs depend on several factors:
                    </p>
                    <ul className="space-y-2">
                      {costFactors.map((factor) => (
                        <li key={factor} className="text-sm text-weather-dark flex items-start gap-2">
                          <span className="text-weather-teal mt-1">•</span>
                          {factor}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 pt-4 border-t border-weather-light">
                      <p className="text-sm text-weather-dark italic">
                        Contact us for a free inspection and accurate estimate
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-xl shadow-lg p-6"
                >
                  <h4 className="font-bold text-weather-black mb-4">Why Trust Us?</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-weather-teal" />
                      <span className="text-sm text-weather-dark">Licensed & Insured</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-weather-teal" />
                      <span className="text-sm text-weather-dark">BBB A+ Rated</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-weather-teal" />
                      <span className="text-sm text-weather-dark">500+ Happy Customers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-weather-teal" />
                      <span className="text-sm text-weather-dark">5.0 Google Rating</span>
                    </div>
                  </div>
                </motion.div>

                {/* Related Issues */}
                {relatedIssues && relatedIssues.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="bg-white rounded-xl shadow-lg p-6"
                  >
                    <h4 className="font-bold text-weather-black mb-4">Related Issues</h4>
                    <div className="space-y-3">
                      {relatedIssues.map((issue) => (
                        <Link
                          key={issue.href}
                          href={issue.href}
                          className="block group"
                        >
                          <h5 className="font-semibold text-weather-black group-hover:text-weather-teal transition-colors">
                            {issue.title}
                          </h5>
                          <p className="text-sm text-weather-dark">{issue.description}</p>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
