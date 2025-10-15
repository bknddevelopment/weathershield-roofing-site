'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUp, Home, ChevronRight, Book } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface GuideTemplateProps {
  // Hero Section
  title: string;
  description: string;
  breadcrumbs: Array<{
    label: string;
    href: string;
  }>;

  // Main Content
  children: React.ReactNode;

  // Table of Contents (optional)
  tableOfContents?: Array<{
    id: string;
    title: string;
  }>;

  // FAQ Section
  faqs: Array<{
    question: string;
    answer: string;
  }>;

  // Related Services
  relatedServices?: Array<{
    title: string;
    href: string;
    description: string;
  }>;

  // Schema markup
  articleSchema?: object;
  faqSchema?: object;
  howToSchema?: object;
}

export default function GuideTemplate({
  title,
  description,
  breadcrumbs,
  children,
  tableOfContents,
  faqs,
  relatedServices,
  articleSchema,
  faqSchema,
  howToSchema
}: GuideTemplateProps) {
  const [readingProgress, setReadingProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const contentRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Reading progress indicator
  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;

      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setReadingProgress(Math.min(100, Math.max(0, progress)));

      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section for TOC
  useEffect(() => {
    if (!tableOfContents || tableOfContents.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    tableOfContents.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [tableOfContents]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Schema Markup Injection */}
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-weather-primary-dark to-weather-accent"
          initial={!prefersReducedMotion ? { width: 0 } : undefined}
          animate={!prefersReducedMotion ? { width: `${readingProgress}%` } : undefined}
          transition={!prefersReducedMotion ? { duration: 0.1 } : undefined}
          style={prefersReducedMotion ? { width: `${readingProgress}%` } : undefined}
        />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-weather-dark via-weather-dark to-weather-black text-white py-16 lg:py-20">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)`
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm mb-6 flex-wrap">
            <Link
              href="/"
              className="flex items-center gap-1 text-white/80 hover:text-white transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-gray-500" />
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-weather-primary-on-dark font-medium">{crumb.label}</span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Title and Description */}
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-weather-primary-on-dark/20 rounded-full px-4 py-2 mb-6"
            >
              <Book className="w-5 h-5 text-weather-primary-on-dark" />
              <span className="text-weather-primary-on-dark font-semibold">Educational Guide</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Table of Contents Sidebar (Desktop) */}
            {tableOfContents && tableOfContents.length > 0 && (
              <aside className="hidden lg:block lg:col-span-3">
                <div className="sticky top-24">
                  <div className="bg-weather-light rounded-xl p-6 border border-gray-200">
                    <h3 className="text-lg font-bold text-weather-black mb-4">
                      Table of Contents
                    </h3>
                    <nav className="space-y-2">
                      {tableOfContents.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className={`block text-sm py-2 px-3 rounded-lg transition-all ${
                            activeSection === item.id
                              ? 'bg-weather-primary-dark text-white font-semibold'
                              : 'text-weather-dark hover:bg-white hover:text-weather-primary'
                          }`}
                        >
                          {item.title}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
              </aside>
            )}

            {/* Main Article Content */}
            <article
              ref={contentRef}
              className={`${
                tableOfContents && tableOfContents.length > 0
                  ? 'lg:col-span-9'
                  : 'lg:col-span-12 max-w-4xl mx-auto'
              }`}
            >
              <div className="prose prose-lg max-w-none">
                {children}
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <section className="py-16 bg-weather-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-weather-black mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-weather-dark">
                  Get answers to the most common questions about {title.toLowerCase()}
                </p>
              </motion.div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.details
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                  >
                    <summary className="font-semibold text-weather-black text-lg flex items-center justify-between list-none">
                      <span className="pr-4">{faq.question}</span>
                      <span className="text-weather-primary group-open:rotate-180 transition-transform flex-shrink-0">
                        ▼
                      </span>
                    </summary>
                    <div className="mt-4 text-weather-dark leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.details>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-weather-black mb-4">
                  Our Roofing Services
                </h2>
                <p className="text-lg text-weather-dark">
                  Need professional help? We're here for you 24/7
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                {relatedServices.map((service, index) => (
                  <motion.div
                    key={service.href}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Link
                      href={service.href}
                      className="block bg-weather-light rounded-xl p-6 hover:shadow-lg hover:scale-105 transition-all duration-300 border border-transparent hover:border-weather-primary group"
                    >
                      <h3 className="text-xl font-bold text-weather-black mb-2 group-hover:text-weather-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-weather-dark">{service.description}</p>
                      <div className="mt-4 flex items-center gap-2 text-weather-primary font-semibold">
                        <span>Learn More</span>
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.button
          initial={!prefersReducedMotion ? { opacity: 0, scale: 0.8 } : undefined}
          animate={!prefersReducedMotion ? {
            opacity: showBackToTop ? 1 : 0,
            scale: showBackToTop ? 1 : 0.8,
          } : undefined}
          style={prefersReducedMotion ? { opacity: showBackToTop ? 1 : 0 } : undefined}
          transition={!prefersReducedMotion ? { duration: 0.3 } : undefined}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-weather-primary-dark text-white p-3 rounded-full shadow-lg hover:bg-weather-accent hover:scale-110 transition-all duration-300 z-40"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </>
  );
}
