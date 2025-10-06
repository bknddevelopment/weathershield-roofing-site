'use client'

import { Phone, Clock, Shield, CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function EmergencyCTA() {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-weather-dark to-black py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 20px,
            rgba(255,255,255,.05) 20px,
            rgba(255,255,255,.05) 40px
          )`
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Main CTA Content */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            Don't Wait Until It's Too Late!
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Every minute counts when you have roof damage.
            <span className="block text-yellow-400 font-bold mt-2">
              Get emergency help NOW before more damage occurs.
            </span>
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Clock className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-white font-semibold text-sm">24/7</p>
              <p className="text-white/70 text-xs">Available Now</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Shield className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-white font-semibold text-sm">Licensed</p>
              <p className="text-white/70 text-xs">& Insured</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <CheckCircle className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-white font-semibold text-sm">No Fees</p>
              <p className="text-white/70 text-xs">Call-Out Charge</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <Phone className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
              <p className="text-white font-semibold text-sm">24/7</p>
              <p className="text-white/70 text-xs">Available Now</p>
            </div>
          </div>

          {/* Primary CTAs */}
          <div className="space-y-6">
            {/* Main Phone CTA */}
            <div>
              <a
                href="tel:+18432938150"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 text-black px-10 py-6 rounded-lg font-black text-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl"
                aria-label="Call emergency service immediately"
              >
                <Phone className="w-8 h-8" />
                CALL: (843) 293-8150
              </a>
              <p className="text-white/70 text-sm mt-3">
                Tap to call • Direct emergency line • Real person answers
              </p>
            </div>

            {/* Alternative Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-weather-dark px-6 py-3 rounded-lg font-bold transition-all duration-300"
              >
                Get Online Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services/emergency-roofing"
                className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-weather-dark px-6 py-3 rounded-lg font-bold transition-all duration-300"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Emergency Keywords List for SEO */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <h3 className="text-lg font-bold text-white mb-4">
              We're Your Local Emergency Roofing Experts
            </h3>
            <p className="text-white/70 text-sm max-w-3xl mx-auto">
              Specializing in: Roof leak repair today • Emergency roofer available now •
              24 hour roof repair near me • Storm damage repair same day •
              Emergency roof tarp service • Urgent roof repair Myrtle Beach •
              Hurricane damage • Wind damage • Hail damage • Tree damage •
              Immediate weatherproofing • Emergency inspections
            </p>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            <div className="text-white/60 text-sm">
              <span className="font-bold text-white">5000+</span> Emergency Calls Handled
            </div>
            <div className="text-white/60 text-sm">
              <span className="font-bold text-white">127+</span> 5-Star Reviews
            </div>
            <div className="text-white/60 text-sm">
              <span className="font-bold text-white">15+</span> Years Experience
            </div>
            <div className="text-white/60 text-sm">
              <span className="font-bold text-white">A+</span> BBB Rating
            </div>
          </div>

          {/* Final Urgency Message */}
          <div className="mt-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-6 max-w-2xl mx-auto animate-pulse">
            <p className="text-white font-bold text-lg mb-2">
              ⚠️ WARNING: Roof Damage Gets Worse By The Hour!
            </p>
            <p className="text-white/90">
              Water damage can destroy your home's interior in hours.
              Don't risk it - call our emergency team right now!
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Floating CTAs */}
      <div className="hidden lg:block">
        {/* Left Side CTA */}
        <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40">
          <a
            href="tel:+18432938150"
            className="flex flex-col items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-white p-4 rounded-lg shadow-2xl hover:scale-110 transition-transform"
            aria-label="Emergency hotline"
          >
            <Phone className="w-8 h-8 animate-bounce" />
            <span className="text-xs font-bold writing-mode-vertical">EMERGENCY</span>
          </a>
        </div>

        {/* Right Side CTA */}
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40">
          <a
            href="tel:+18432938150"
            className="flex flex-col items-center gap-2 bg-gradient-to-r from-red-600 to-orange-600 text-white p-4 rounded-lg shadow-2xl hover:scale-110 transition-transform"
            aria-label="24/7 hotline"
          >
            <span className="text-xs font-bold writing-mode-vertical">24/7</span>
            <Clock className="w-8 h-8 animate-spin-slow" />
          </a>
        </div>
      </div>

      <style jsx>{`
        .writing-mode-vertical {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  )
}