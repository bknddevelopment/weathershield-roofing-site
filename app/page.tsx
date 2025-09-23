'use client'

import HeroSection from './components/HeroSection'
import ServiceCards from './components/ServiceCards'
import AboutSection from './components/AboutSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import BlogsSection from './components/BlogsSection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServiceCards />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogsSection />
    </main>
  )
}