'use client'

import HeroSection from './components/HeroSection'
import ServiceCards from './components/ServiceCards'
import AboutSection from './components/AboutSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import FAQSchema from './components/FAQSchema'
import StructuredData from './components/StructuredData'
import BlogsSection from './components/BlogsSection'
import TrustIndicators from './components/TrustIndicators'
import { GAFTrustBar, GAFCertificationSection } from './components/GAFCertification'

export default function HomePage() {
  return (
    <>
      <FAQSchema />
      <StructuredData type="home" />
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
    </>
  )
}