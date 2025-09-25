'use client'

import { useState } from 'react'
import Link from 'next/link'
import StaticImage from './StaticImage'
import StructuredData from './StructuredData'
import { getBookingLinkProps } from '../config/booking'
import { GAFBadge } from './GAFCertification'
import { 
  Phone, 
  Clock, 
  MapPin, 
  Shield, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Star,
  DollarSign,
  AlertTriangle,
  ChevronDown,
  Home,
  Building,
  Droplets,
  Zap
} from 'lucide-react'

interface ProcessStep {
  number: number
  title: string
  description: string
}

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
}

interface FAQ {
  question: string
  answer: string
}

interface ServiceTemplateProps {
  title: string
  description: string
  longDescription: string[]
  benefits: string[]
  process?: ProcessStep[]
  features?: Feature[]
  faqs?: FAQ[]
  priceRange?: string
  image?: string
  relatedServices?: { name: string; href: string }[]
  emergencyService?: boolean
  responseTime?: string
}

export default function ServiceTemplate({
  title,
  description,
  longDescription,
  benefits,
  process = [
    { number: 1, title: 'Initial Inspection', description: 'Comprehensive assessment of your roofing needs' },
    { number: 2, title: 'Detailed Quote', description: 'Transparent pricing with no hidden fees' },
    { number: 3, title: 'Professional Installation', description: 'Expert craftsmanship by certified technicians' },
    { number: 4, title: 'Final Inspection', description: 'Quality assurance and customer satisfaction' }
  ],
  features = [],
  faqs = [],
  priceRange = 'Contact us for a quote',
  image = '/images/background/roof-replacement-services.jpg',
  relatedServices = [],
  emergencyService = false,
  responseTime = 'within 24 hours'
}: ServiceTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  return (
    <>
      {/* Structured Data for Service */}
      <StructuredData type="service" serviceName={title} serviceDescription={description} />
      {/* Hero Section with Enhanced Design */}
      <section className="relative h-[300px] sm:h-[350px] md:h-[400px] bg-gradient-to-br from-weather-dark to-weather-black overflow-hidden">
        <div className="absolute inset-0">
          <StaticImage
            src={image}
            alt={title}
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
              {title.toUpperCase()}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white mb-4 sm:mb-6">{description}</p>
            <div className="flex flex-wrap gap-3">
              <GAFBadge variant="hero" showWarranty={true} />
              {emergencyService && (
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-weather-teal/30 to-weather-teal-dark/30 backdrop-blur-md border border-weather-teal/40 rounded-full px-4 py-2 shadow-lg">
                  <Zap className="w-5 h-5 text-weather-teal-light" />
                  <span className="text-weather-teal-light font-semibold text-sm uppercase tracking-wide">24/7 Emergency Service</span>
                </div>
              )}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a {...getBookingLinkProps()} className="inline-flex items-center justify-center gap-2 bg-weather-teal hover:bg-weather-teal-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg">
                Request Quote
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="tel:+18438775539" className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white hover:bg-white hover:text-weather-teal text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base transition-all duration-300">
                <Phone className="w-5 h-5" />
                Call: (843) 877-5539
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
                Professional {title} in Myrtle Beach, SC
              </h2>
              {longDescription.map((paragraph, index) => (
                <p key={index} className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
                  {paragraph}
                </p>
              ))}

              {/* Benefits Section with Icons */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8 rounded-xl mt-8 border border-gray-200 shadow-sm">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-weather-dark flex items-center gap-2">
                  <Shield className="w-6 h-6 text-weather-teal" />
                  Why Choose Weather Shield for {title}?
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-weather-teal flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Timeline */}
              <div className="bg-gradient-to-r from-weather-teal/10 to-weather-blue/10 border-2 border-weather-teal/30 p-6 sm:p-8 rounded-xl mt-8">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-weather-dark">Our Proven Process</h3>
                <div className="space-y-4">
                  {process.map((step, index) => (
                    <div key={step.number} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-weather-teal to-weather-blue text-white rounded-full w-10 h-10 flex items-center justify-center font-bold flex-shrink-0">
                          {step.number}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg mb-1 text-weather-dark">{step.title}</h4>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features Grid */}
              {features.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-6 text-weather-dark">Service Features</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                      <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                        <div className="flex items-start gap-4">
                          <div className="text-weather-teal">{feature.icon}</div>
                          <div>
                            <h4 className="font-bold text-lg mb-2 text-weather-dark">{feature.title}</h4>
                            <p className="text-gray-600">{feature.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ Section */}
              {faqs.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-6 text-weather-dark">Frequently Asked Questions</h3>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <button
                          onClick={() => setOpenFaq(openFaq === index ? null : index)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-weather-dark">{faq.question}</span>
                          <ChevronDown className={`w-5 h-5 text-weather-teal transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                        </button>
                        {openFaq === index && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Section */}
              <div className="bg-weather-teal text-white p-4 sm:p-6 md:p-8 rounded-lg mt-6 sm:mt-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
                  Ready to Get Your {title} Done?
                </h3>
                <p className="text-sm sm:text-base mb-4">
                  Don't wait until small issues become major problems. Our expert technicians 
                  are ready to help protect your home with quality roofing solutions.
                </p>
                <div className="bg-white/10 p-3 rounded mb-4">
                  <p className="text-sm font-semibold mb-2">Special Offers:</p>
                  <ul className="text-xs sm:text-sm space-y-1">
                    <li>• Free Professional Roof Inspections</li>
                    <li>• Insurance Claim Assistance</li>
                    <li>• Financing Options Available</li>
                    {emergencyService && <li>• 24/7 Emergency Service</li>}
                    <li>• Lifetime Warranty Options</li>
                  </ul>
                </div>
                <a href="tel:+18438775539" className="bg-white text-weather-teal hover:bg-gray-100 px-6 py-3 rounded-lg font-bold text-sm sm:text-base block text-center transition-colors">
                  CALL US NOW: (843) 877-5539
                </a>
              </div>
            </div>

            {/* Sidebar - Sticky Positioning */}
            <div className="lg:col-span-1 mt-8 lg:mt-0">
              <div className="sticky top-24 space-y-6">
                {/* Quick Contact Card - Primary CTA */}
                <div className="bg-gradient-to-br from-weather-teal to-weather-blue text-white p-6 rounded-xl shadow-xl">
                  <h3 className="text-xl font-bold mb-4">Get Started Today</h3>
                  <p className="text-white/90 mb-4">Response {responseTime}</p>
                  <div className="space-y-3">
                    <a href="tel:+18438775539" className="flex items-center justify-center gap-2 bg-white text-weather-teal px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <Phone className="w-5 h-5" />
                      Call (843) 877-5539
                    </a>
                    <a {...getBookingLinkProps()} className="flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-weather-teal transition-all duration-300">
                      Request Quote
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </div>
                  {emergencyService && (
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <div className="flex items-center gap-2 text-sm">
                        <Zap className="w-4 h-4 animate-pulse" />
                        <span>24/7 Emergency Service Available</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Pricing Estimate */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <h3 className="text-lg font-bold mb-3 text-weather-dark flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-weather-teal" />
                    Investment Range
                  </h3>
                  <p className="text-2xl font-bold text-weather-teal mb-2">{priceRange}</p>
                  <p className="text-sm text-gray-600 mb-3">Factors affecting cost:</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-weather-teal">•</span>
                      Size and complexity
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-weather-teal">•</span>
                      Material selection
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-weather-teal">•</span>
                      Current condition
                    </li>
                  </ul>
                  <p className="text-xs text-weather-teal font-semibold mt-3">Free inspection available</p>
                </div>

                {/* Business Info */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold mb-4 text-weather-dark">Business Hours</h3>
                  <div className="space-y-3">
                    <div className="flex items-start text-gray-700">
                      <Clock className="w-5 h-5 mr-3 mt-0.5 text-weather-teal" />
                      <div>
                        <p className="font-semibold">Regular Hours:</p>
                        <p>Mon-Fri: 7:00am - 5:00pm</p>
                        <p>Sat: 8:00am - 2:00pm</p>
                        <p>Sun: Closed</p>
                        {emergencyService && (
                          <p className="text-weather-teal font-bold mt-2">24/7 Emergency Available</p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-start text-gray-700 pt-3 border-t">
                      <MapPin className="w-5 h-5 mr-3 mt-0.5 text-weather-teal" />
                      <div>
                        <p className="font-semibold">Service Area:</p>
                        <p>Myrtle Beach</p>
                        <p>North Myrtle Beach</p>
                        <p>Surfside Beach</p>
                        <p>All of Grand Strand</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Related Services */}
                {relatedServices.length > 0 && (
                  <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                    <h3 className="text-lg font-bold mb-4 text-weather-dark">You May Also Need</h3>
                    <ul className="space-y-3">
                      {relatedServices.map((service, index) => (
                        <li key={index}>
                          <Link
                            href={service.href}
                            className="flex items-center gap-2 text-weather-teal hover:text-weather-teal-dark font-medium transition-colors"
                          >
                            <ArrowRight className="w-4 h-4" />
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Trust & Certifications */}
                <div className="bg-gradient-to-br from-weather-teal/10 to-weather-blue/10 p-6 rounded-xl border-2 border-weather-teal/30">
                  <h3 className="text-lg font-bold mb-4 text-weather-dark">Why Trust Weather Shield?</h3>
                  <div className="space-y-4">
                    <div className="flex justify-center">
                      <div className="bg-white p-4 rounded-lg shadow-md">
                        <Shield className="w-16 h-16 text-weather-teal mx-auto mb-2" />
                        <p className="text-xs text-center font-bold text-weather-dark">Certified Professional</p>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <Award className="w-5 h-5 text-weather-teal" />
                        <span className="text-sm text-gray-700">Premium Quality Service</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-weather-teal" />
                        <span className="text-sm text-gray-700">Licensed & Insured</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Star className="w-5 h-5 text-weather-teal" />
                        <span className="text-sm text-gray-700">5.0 Google Rating</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <Home className="w-5 h-5 text-weather-teal" />
                        <span className="text-sm text-gray-700">5000+ Homes Protected</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Emergency Alert for Storm/Emergency Services */}
                {emergencyService && (
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 rounded-xl shadow-xl animate-pulse-slow">
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="w-6 h-6" />
                      <h3 className="text-lg font-bold">Storm Damage?</h3>
                    </div>
                    <p className="text-sm mb-4">We're here 24/7 for emergency repairs</p>
                    <a href="tel:+18438775539" className="bg-white text-red-500 px-6 py-3 rounded-lg font-bold block text-center hover:bg-gray-100 transition-colors">
                      Call Emergency Line Now
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="bg-gradient-to-r from-weather-teal to-weather-blue py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Protect Your Home?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Request your free inspection and estimate today. Our experts are standing by to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+18438775539" className="inline-flex items-center justify-center gap-2 bg-white text-weather-teal hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Phone className="w-6 h-6" />
              Call (843) 877-5539
            </a>
            <Link href="https://your-n8n-form-url.com" className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-weather-teal px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300">
              Get Free Quote Online
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}