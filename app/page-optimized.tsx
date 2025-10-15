'use client'

import { lazy, Suspense } from 'react'
import HeroSection from './components/HeroSection'
import ServiceWorkerRegistration from './components/ServiceWorkerRegistration'
import LoadingStates from './components/LoadingStates'

// Lazy load non-critical components
const ServiceCards = lazy(() => import('./components/ServiceCards'))
const AboutSection = lazy(() => import('./components/AboutSection'))
const TestimonialsSection = lazy(() => import('./components/TestimonialsSection'))
const FAQSection = lazy(() => import('./components/FAQSection'))
const BlogsSection = lazy(() => import('./components/BlogsSection'))

// Loading skeleton for sections
const SectionSkeleton = () => (
  <div className="section-padding">
    <div className="container">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-gray-100 rounded-lg h-64"></div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export default function OptimizedHomePage() {
  return (
    <>
      <ServiceWorkerRegistration />
      <main>
        {/* Hero Section - Critical, render immediately */}
        <HeroSection />

        {/* Service Cards - Important, lazy load with priority */}
        <Suspense fallback={<SectionSkeleton />}>
          <ServiceCards />
        </Suspense>

        {/* About Section - Below fold, lazy load */}
        <Suspense fallback={<SectionSkeleton />}>
          <AboutSection />
        </Suspense>

        {/* Testimonials - Further down, lazy load */}
        <Suspense fallback={<SectionSkeleton />}>
          <TestimonialsSection />
        </Suspense>

        {/* FAQ Section - Lower priority */}
        <Suspense fallback={<SectionSkeleton />}>
          <FAQSection />
        </Suspense>

        {/* Blogs Section - Lowest priority */}
        <Suspense fallback={<SectionSkeleton />}>
          <BlogsSection />
        </Suspense>
      </main>
    </>
  )
}