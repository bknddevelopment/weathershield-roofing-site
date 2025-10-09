'use client'

import { ReactNode } from 'react'
import EmergencySchema from './EmergencySchema'
import EmergencyContactBar from './EmergencyContactBar'
import LiveAvailability from './LiveAvailability'
import EmergencyBadge from './EmergencyBadge'
import CountdownTimer from './CountdownTimer'
import TrustIndicators from '../TrustIndicators'
import { Phone, Clock, Shield, AlertTriangle, CheckCircle, DollarSign, Droplets, CloudRain, Wind, Zap, Home, Umbrella } from 'lucide-react'

export interface EmergencyPageConfig {
  keyword: string
  title: string
  subtitle: string
  urgencyLevel: 'CRITICAL' | 'URGENT' | 'IMMEDIATE' | 'EMERGENCY'
  urgencyColor: string
  description: string
  features: string[]
  responseTime: string
  availabilityMessage: string
  ctaText: string
  secondaryCta?: string
  schemaType: string
  localArea: string[]
  relatedServices: string[]
  trustPoints: Array<{
    icon: string
    text: string
  }>
  faq?: Array<{
    question: string
    answer: string
  }>
}

interface EmergencyPageTemplateProps {
  config: EmergencyPageConfig
  children?: ReactNode
}

export default function EmergencyPageTemplate({ config, children }: EmergencyPageTemplateProps) {
  return (
    <>
      {/* Schema Markup */}
      <EmergencySchema
        serviceName={config.title}
        description={config.description}
        keywords={[config.keyword, ...config.relatedServices]}
        localAreas={config.localArea}
        schemaType={config.schemaType}
        faq={config.faq}
      />

      {/* Fixed Mobile Contact Bar */}
      <EmergencyContactBar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 via-orange-600 to-red-700 min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255,255,255,.1) 10px,
                rgba(255,255,255,.1) 20px
              )`
            }}
          />
        </div>

        {/* Pulse Animation */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-5 animate-pulse" />
        </div>

        <div className="relative z-10 container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            {/* Emergency Badge */}
            <EmergencyBadge
              text={`${config.urgencyLevel} SERVICE AVAILABLE NOW`}
              urgencyLevel={config.urgencyLevel}
            />

            {/* Live Availability Indicator */}
            <LiveAvailability message={config.availabilityMessage} />

            {/* Main Headlines */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
              {config.title}
              <span className="block text-3xl md:text-5xl lg:text-6xl mt-2 text-yellow-300">
                {config.subtitle}
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              {config.description}
            </p>

            {/* Countdown Timer */}
            <CountdownTimer
              targetTime={config.responseTime}
              message="Average Response Time"
            />

            {/* Key Features Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-3xl mx-auto">
              {config.features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <CheckCircle className="w-5 h-5 text-yellow-300 mx-auto mb-1" />
                  <p className="text-white text-sm font-semibold">{feature}</p>
                </div>
              ))}
            </div>

            {/* Primary CTA */}
            <div className="space-y-4">
              <div className="inline-block">
                <a
                  href="tel:+18438775539"
                  className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-5 rounded-lg font-black text-xl md:text-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl animate-pulse hover:animate-none"
                  aria-label={config.ctaText}
                >
                  <Phone className="w-8 h-8 animate-bounce" />
                  {config.ctaText}: (843) 877-5539
                </a>
                <p className="text-white/90 text-sm mt-2">Tap to Call • Direct Emergency Line</p>
              </div>

              {/* Secondary Phone Number */}
              <div className="text-white">
                <p className="text-lg">
                  Alternative Number:
                  <a
                    href="tel:+18438775539"
                    className="font-bold text-yellow-300 hover:text-yellow-200 ml-2 underline"
                    aria-label="Alternative emergency number"
                  >
                    (843) 877-5539
                  </a>
                </p>
              </div>

              {config.secondaryCta && (
                <a
                  href="/quote"
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 px-6 py-3 rounded-lg font-bold transition-all duration-300"
                >
                  {config.secondaryCta}
                </a>
              )}
            </div>

            {/* Trust Points */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex flex-wrap justify-center gap-4 text-white">
                {config.trustPoints.map((point, index) => {
                  const renderIcon = (iconName: string) => {
                    const iconProps = { className: "w-5 h-5" }
                    switch (iconName) {
                      case 'Shield': return <Shield {...iconProps} />
                      case 'Clock': return <Clock {...iconProps} />
                      case 'Phone': return <Phone {...iconProps} />
                      case 'DollarSign': return <DollarSign {...iconProps} />
                      case 'Droplets': return <Droplets {...iconProps} />
                      case 'AlertTriangle': return <AlertTriangle {...iconProps} />
                      case 'Home': return <Home {...iconProps} />
                      case 'CloudRain': return <CloudRain {...iconProps} />
                      case 'Wind': return <Wind {...iconProps} />
                      case 'Zap': return <Zap {...iconProps} />
                      case 'Umbrella': return <Umbrella {...iconProps} />
                      case 'CheckCircle': return <CheckCircle {...iconProps} />
                      default: return <Shield {...iconProps} />
                    }
                  }
                  return (
                    <div key={index} className="flex items-center gap-2">
                      {renderIcon(point.icon)}
                      <span className="font-semibold">{point.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-4 border-y-2 border-red-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-center">
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-red-600" />
              <span className="font-bold text-gray-800">{config.responseTime} Response</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-red-600" />
              <span className="font-bold text-gray-800">Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span className="font-bold text-gray-800">5.0 Google Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏠</span>
              <span className="font-bold text-gray-800">5000+ Emergencies Handled</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Content Area */}
      {children}

      {/* Service Areas */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
              24/7 {config.keyword} Throughout {config.localArea[0]} Area
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {config.localArea.map((area, index) => (
                <span
                  key={index}
                  className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
              Our emergency response teams are strategically located throughout Horry County
              to ensure the fastest possible response time for your roofing emergency.
            </p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
            Related Emergency Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {config.relatedServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <AlertTriangle className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="font-bold text-lg mb-2 text-gray-900">{service}</h3>
                <a
                  href="tel:+18438775539"
                  className="text-weather-primary font-semibold hover:text-weather-primary-dark transition-colors"
                >
                  Get Help Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section if provided */}
      {config.faq && config.faq.length > 0 && (
        <section className="bg-gray-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {config.faq.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-3 text-gray-900">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't Wait - Your Roof Can't!
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Every minute counts when you have a roofing emergency.
            Our expert team is standing by to help you NOW.
          </p>
          <a
            href="tel:+18438775539"
            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-300 text-black px-8 py-5 rounded-lg font-black text-xl md:text-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl"
            aria-label="Call emergency service immediately"
          >
            <Phone className="w-8 h-8" />
            CALL EMERGENCY LINE: (843) 877-5539
          </a>
          <p className="mt-4 text-white/80">
            {config.availabilityMessage}
          </p>
        </div>
      </section>

      {/* SEO Footer Keywords */}
      <section className="bg-gray-900 py-6">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-gray-400">
            <p>
              {config.keyword} • {config.relatedServices.join(' • ')} •
              24/7 Emergency Service • Licensed & Insured • No Call-Out Fees
            </p>
          </div>
        </div>
      </section>
    </>
  )
}