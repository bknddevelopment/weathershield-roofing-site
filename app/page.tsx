'use client'

import HeroSection from './components/HeroSection'
import ServiceCards from './components/ServiceCards'
import AboutSection from './components/AboutSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import BlogsSection from './components/BlogsSection'
import TrustIndicators from './components/TrustIndicators'
import { GAFTrustBar, GAFCertificationSection } from './components/GAFCertification'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <GAFTrustBar />
      <ServiceCards />
      <TrustIndicators />
      <AboutSection />
      <GAFCertificationSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogsSection />
    </main>
  )
}