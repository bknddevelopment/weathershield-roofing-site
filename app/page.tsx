'use client'

import HeroSection from './components/HeroSection'
import CertificationBar from './components/CertificationBar'
import WhyChooseUs from './components/WhyChooseUs'
import FinancingCallout from './components/FinancingCallout'
import ServiceCards from './components/ServiceCards'
import AboutSection from './components/AboutSection'
import RoofingGuideSection from './components/RoofingGuideSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import FAQSchema from './components/FAQSchema'
import StructuredData from './components/StructuredData'
import BlogsSection from './components/BlogsSection'
import TrustIndicators from './components/TrustIndicators'
import { GAFCertificationSection } from './components/GAFCertification'

export default function HomePage() {
  return (
    <>
      <FAQSchema />
      <StructuredData type="home" />
      <main>
        <HeroSection />
        <CertificationBar />
        <WhyChooseUs />
        <ServiceCards />
        <FinancingCallout />
        <TrustIndicators />
        <AboutSection />
        <RoofingGuideSection />
        <GAFCertificationSection />
        <TestimonialsSection />
        <FAQSection />
        <BlogsSection />
      </main>
    </>
  )
}