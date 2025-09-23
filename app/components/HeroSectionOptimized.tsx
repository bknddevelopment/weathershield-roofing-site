'use client'

import { useState, useEffect, memo, useCallback } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Phone, Shield, Clock, Award, ChevronRight, CheckCircle } from 'lucide-react'

// Lazy load the LazyImage component
const LazyImage = dynamic(() => import('./LazyImage'), {
  loading: () => <div className="absolute inset-0 bg-gray-200 animate-pulse" />
})

const heroSlides = [
  {
    title: "Protecting Myrtle Beach Homes",
    subtitle: "Since 2010",
    description: "Expert roofing solutions with lifetime warranties and 24/7 emergency service",
    image: "/images/background/roof-replacement-services.jpg",
    stats: ["15+ Years Experience", "5000+ Roofs Installed", "A+ BBB Rating"]
  },
  {
    title: "Storm Damage Specialists",
    subtitle: "Insurance Claims Experts",
    description: "We handle your insurance claim from start to finish - No upfront costs",
    image: "/images/background/residential-roofing-gutter-siding-services.jpg",
    stats: ["Professional Inspections", "Insurance Approved", "Quick Response"]
  },
  {
    title: "Certified Roofing Contractor",
    subtitle: "Premium Quality Service",
    description: "Exclusive access to the best warranties in the roofing industry",
    image: "/images/background/home-exterior-improvement-services.jpg",
    stats: ["50-Year Warranties", "Factory Certified", "Premium Materials"]
  }
]

// Memoized stat component to prevent re-renders
const StatItem = memo(({ stat }: { stat: string }) => (
  <div className="flex items-center gap-2 group cursor-pointer transition-transform hover:scale-105">
    <CheckCircle className="w-5 h-5 text-weather-teal group-hover:text-weather-blue transition-colors" />
    <span className="text-white font-semibold text-base group-hover:text-weather-teal transition-colors">{stat}</span>
  </div>
))
StatItem.displayName = 'StatItem'

// Memoized slide indicator
const SlideIndicator = memo(({
  index,
  currentSlide,
  onClick
}: {
  index: number
  currentSlide: number
  onClick: (index: number) => void
}) => (
  <button
    onClick={() => onClick(index)}
    className={`rounded-full transition-all duration-500 ${
      index === currentSlide
        ? 'w-12 h-3 bg-gradient-to-r from-weather-teal to-weather-blue shadow-lg shadow-weather-teal/50'
        : 'w-3 h-3 bg-white/40 hover:bg-white/60'
    }`}
    aria-label={`Go to slide ${index + 1}`}
  />
))
SlideIndicator.displayName = 'SlideIndicator'

export default function HeroSectionOptimized() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  // Use useCallback to memoize the slide change handler
  const handleSlideChange = useCallback((index: number) => {
    setCurrentSlide(index)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 10000) // Resume after 10 seconds
  }, [])

  useEffect(() => {
    // Use requestAnimationFrame for smooth animation start
    const animationFrame = requestAnimationFrame(() => {
      setIsVisible(true)
    })

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
      }, 6000)
      return () => clearInterval(interval)
    }
  }, [isPaused])

  const slide = heroSlides[currentSlide]

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Optimized background with will-change */}
      <div className="absolute inset-0 z-0" style={{ willChange: 'transform' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-weather-black/95 via-weather-black/75 to-weather-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-weather-purple/10 via-transparent to-weather-teal/10 z-10" />
        <div className="relative w-full h-full">
          <LazyImage
            src={slide.image}
            alt="Weather Shield Roofing"
            fill
            priority={currentSlide === 0} // Only prioritize first slide
            quality={85}
            sizes="100vw"
            className="animate-slow-zoom"
            style={{
              objectFit: 'cover',
              objectPosition: 'center 30%'
            }}
          />
        </div>
      </div>

      {/* Content with optimized transitions */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-weather-teal/30 to-weather-blue/30 backdrop-blur-md border border-weather-teal/40 rounded-full px-4 py-2 shadow-lg">
              <Shield className="w-5 h-5 text-weather-teal animate-pulse" />
              <span className="text-weather-teal font-bold text-sm uppercase tracking-wider">Licensed & Insured</span>
            </div>

            {/* Main Heading with optimized font loading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                {slide.title}
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-weather-teal to-weather-blue text-3xl md:text-4xl lg:text-5xl mt-3">
                  {slide.subtitle}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-100 max-w-2xl font-light leading-relaxed">
                {slide.description}
              </p>
            </div>

            {/* Stats with memoized components */}
            <div className="flex flex-wrap gap-6">
              {slide.stats.map((stat, index) => (
                <StatItem key={`${currentSlide}-${index}`} stat={stat} />
              ))}
            </div>

            {/* CTA Buttons with loading="lazy" for non-critical interactions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://your-n8n-form-url.com"
                className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-weather-teal to-weather-blue hover:from-weather-blue hover:to-weather-purple text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-weather-teal/50 overflow-hidden"
                prefetch={false}
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">Request Inspection</span>
                <ChevronRight className="relative w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              <a
                href="tel:843-877-5539"
                className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/50 hover:bg-white hover:text-weather-black hover:border-white text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-white/20"
              >
                <Phone className="w-6 h-6 group-hover:animate-pulse" />
                <span>Call (843) 877-5539</span>
              </a>
            </div>

            {/* Emergency Banner */}
            <div className="bg-gradient-to-r from-weather-purple/30 to-weather-blue/30 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-lg hover:shadow-weather-purple/30 transition-all duration-300">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-weather-purple/20 rounded-lg">
                  <Clock className="w-6 h-6 text-weather-purple animate-pulse" />
                </div>
                <div>
                  <p className="text-white font-bold text-base">24/7 Emergency Service</p>
                  <p className="text-gray-200 text-sm">Storm damage? We&apos;re here to help immediately.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Only render on large screens */}
          <div className={`hidden lg:block transition-all duration-1200 delay-500 transform ${
            isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-10 rotate-1'
          }`}>
            <div className="relative">
              {/* Decorative Elements with reduced animations */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-weather-teal/30 to-weather-blue/30 rounded-full blur-3xl animate-float" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-weather-purple/30 to-weather-teal/30 rounded-full blur-3xl animate-float animation-delay-2000" />

              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl border border-white/30 rounded-3xl p-10 shadow-2xl hover:shadow-weather-teal/20 transition-all duration-500 hover:border-weather-teal/50">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-gradient-to-br from-weather-teal/20 to-weather-blue/20 rounded-xl">
                      <Award className="w-14 h-14 text-weather-teal" />
                    </div>
                    <div className="text-right">
                      <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-weather-teal to-weather-blue">15+</p>
                      <p className="text-gray-200 font-semibold">Years</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-white">Why Choose Weather Shield?</h3>
                    <ul className="space-y-3">
                      {[
                        "Certified Roofing Contractor - Premium Quality Service",
                        "Lifetime Workmanship Warranty",
                        "Insurance Claim Specialists",
                        "Professional Inspections & Estimates"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                          <CheckCircle className="w-6 h-6 text-weather-teal mt-0.5 flex-shrink-0 group-hover:text-weather-blue transition-colors" />
                          <span className="text-gray-100 group-hover:text-white transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-white/30">
                    <p className="text-base text-gray-200 font-medium text-center">Serving all of Horry & Georgetown Counties</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators with memoized components */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {heroSlides.map((_, index) => (
          <SlideIndicator
            key={index}
            index={index}
            currentSlide={currentSlide}
            onClick={handleSlideChange}
          />
        ))}
      </div>
    </section>
  )
}