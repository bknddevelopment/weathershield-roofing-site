'use client'

import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ServiceCards from './components/ServiceCards'
import AboutSection from './components/AboutSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import BlogsSection from './components/BlogsSection'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ServiceCards />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <BlogsSection />
      </main>
      <Footer />
    </>
  )
}