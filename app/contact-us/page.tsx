import type { Metadata } from 'next'
import Link from 'next/link'
import ContactInfo from './ContactInfo'
import ContactSchema from './ContactSchema'
import TrustIndicators from '../components/TrustIndicators'
import { Phone, Calendar, Mail, MapPin, AlertCircle, Clock, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Weather Shield Roofing | Myrtle Beach Roofing Companies',
  description: 'Contact Weather Shield Roofing for free estimates. Leading roofing companies Myrtle Beach trust. Call (843) 293-8150 or submit form for weatherproof solutions.',
  keywords: [
    'contact weather shield roofing',
    'roofing companies myrtle beach contact',
    'weathershield roofing phone number',
    'myrtle beach roofer contact',
    'roof estimate myrtle beach',
    'roofing contractor contact sc'
  ],
  openGraph: {
    title: 'Contact Weather Shield Roofing | Myrtle Beach Roofing Companies',
    description: 'Contact Weather Shield Roofing for free estimates. Leading roofing companies Myrtle Beach trust. Call (843) 293-8150 or submit form for weatherproof solutions.',
    url: 'https://weathershieldroofers.com/contact-us',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing - Contact Us',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Weather Shield Roofing | Myrtle Beach Roofing Companies',
    description: 'Contact Weather Shield Roofing for free estimates. Leading roofing companies Myrtle Beach trust. Call (843) 293-8150 or submit form.',
    images: ['https://weathershieldroofers.com/images/logo.png'],
  },
  alternates: {
    canonical: 'https://weathershieldroofers.com/contact-us',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
}

export default function ContactUsPage() {
  const serviceAreas = [
    { name: 'Myrtle Beach', link: '/locations/myrtle-beach' },
    { name: 'North Myrtle Beach', link: '/locations/north-myrtle-beach' },
    { name: 'Conway', link: '/locations/conway' },
    { name: 'Surfside Beach', link: '/locations/surfside-beach' },
    { name: 'Garden City', link: '/locations/garden-city' },
    { name: 'Pawleys Island', link: '/locations/pawleys-island' },
    { name: 'Little River', link: '/locations/little-river' },
    { name: 'Socastee', link: '/locations/socastee' },
  ]

  const faqItems = [
    {
      question: 'How quickly will you respond to my inquiry?',
      answer: 'We respond to all inquiries within 1 hour during business hours (Monday-Friday 7AM-7PM, Saturday 8AM-5PM). For emergency services, we\'re available 24/7 and can dispatch a team immediately.'
    },
    {
      question: 'Do you offer free estimates?',
      answer: 'Yes! All roof inspections and estimates are completely free with no obligation. Our certified inspectors will provide a detailed assessment of your roof\'s condition and a transparent, itemized quote.'
    },
    {
      question: 'What areas do you service?',
      answer: 'We proudly serve all of Myrtle Beach, North Myrtle Beach, Conway, Surfside Beach, Garden City, Pawleys Island, Little River, Socastee, and surrounding Grand Strand communities.'
    },
    {
      question: 'Do you handle insurance claims?',
      answer: 'Yes, we work with all major insurance companies and can assist you throughout the entire claims process. We provide detailed documentation, photos, and estimates to support your claim.'
    },
    {
      question: 'What are your business hours?',
      answer: 'Monday-Friday: 7:00 AM - 7:00 PM, Saturday: 8:00 AM - 5:00 PM, Sunday: Emergency Service Only. We offer 24/7 emergency response for urgent roofing issues.'
    }
  ]

  return (
    <>
      <ContactSchema />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-weather-secondary via-weather-secondary to-weather-secondary-dark text-white py-20 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-pattern"></div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-weather-teal/20 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-semibold">Available 24/7 for Emergencies</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Contact Weather Shield Roofing
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl mb-10 text-gray-100">
                Get in touch with Myrtle Beach's trusted roofing experts
              </p>

              {/* Two Large CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="tel:+18432938150"
                  className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-weather-teal to-weather-blue text-white px-10 py-5 rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl min-h-[64px]"
                >
                  <Phone className="w-6 h-6" />
                  Call Now: (843) 293-8150
                </a>
                <a
                  href="https://weathershieldroofiing.app.n8n.cloud/form/roofing-estimate"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white text-weather-secondary px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl min-h-[64px]"
                >
                  <Calendar className="w-6 h-6" />
                  Get Free Inspection
                </a>
              </div>

              {/* Trust Signals */}
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Free Estimate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Response within 1 hour</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>No Obligation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Wave Separator */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path
                d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
                fill="#F9FAFB"
              />
            </svg>
          </div>
        </section>

        {/* How to Contact Us Section */}
        <section className="py-16 -mt-8">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  How to Contact Us
                </h2>
                <p className="text-lg text-gray-700">
                  Choose your preferred way to get in touch
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {/* Call Us Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-transparent hover:border-weather-teal transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-weather-teal to-weather-blue rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Phone className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Call Us</h3>
                    <p className="text-gray-600 mb-6">Speak directly with our roofing experts</p>
                    <a
                      href="tel:+18432938150"
                      className="text-2xl font-bold text-weather-teal hover:underline mb-2"
                    >
                      (843) 293-8150
                    </a>
                    <p className="text-sm text-gray-500">Available Mon-Sat</p>
                  </div>
                </div>

                {/* Free Inspection Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-transparent hover:border-weather-teal transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-weather-blue to-weather-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Calendar className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Schedule Free Inspection</h3>
                    <p className="text-gray-600 mb-6">Book your no-obligation roof inspection</p>
                    <a
                      href="https://weathershieldroofiing.app.n8n.cloud/form/roofing-estimate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-weather-teal text-white px-6 py-3 rounded-lg font-bold hover:bg-weather-teal/90 transition-colors"
                    >
                      Book Now
                      <Calendar className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-transparent hover:border-weather-teal transition-all duration-300 group">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-weather-secondary to-weather-secondary-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Mail className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Email Us</h3>
                    <p className="text-gray-600 mb-6">Send us a detailed message</p>
                    <a
                      href="mailto:roofing@weathershieldroofers.com"
                      className="text-lg font-semibold text-weather-teal hover:underline break-all px-2"
                    >
                      roofing@weathershieldroofers.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information & Service Area Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Contact Info Cards - 2 columns */}
                <div className="lg:col-span-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                    Contact Information
                  </h2>
                  <ContactInfo />
                </div>

                {/* Service Area - 1 column */}
                <div className="lg:col-span-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                    Service Area
                  </h2>
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-200 sticky top-4">
                    <div className="flex items-start gap-3 mb-6">
                      <MapPin className="w-6 h-6 text-weather-teal flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          Serving the Grand Strand
                        </h3>
                        <p className="text-gray-700 text-sm">
                          Proudly serving homeowners throughout Myrtle Beach and surrounding communities
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-2">
                      {serviceAreas.map((area) => (
                        <Link
                          key={area.name}
                          href={area.link}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-weather-teal/5 border border-transparent hover:border-weather-teal/20 transition-all group"
                        >
                          <span className="text-gray-800 font-medium group-hover:text-weather-teal transition-colors">
                            {area.name}
                          </span>
                          <span className="text-weather-teal opacity-0 group-hover:opacity-100 transition-opacity">
                            →
                          </span>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-sm text-gray-600 mb-3">
                        Don't see your area listed?
                      </p>
                      <Link
                        href="/locations"
                        className="inline-flex items-center gap-2 text-weather-teal hover:underline font-semibold text-sm"
                      >
                        View all service locations
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators Section */}
        <TrustIndicators variant="default" />

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-gray-700">
                  Quick answers to common questions about contacting us
                </p>
              </div>

              <div className="space-y-6">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-weather-teal/10 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-weather-teal" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {item.question}
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional CTA */}
              <div className="mt-12 bg-gradient-to-br from-weather-teal to-weather-blue rounded-2xl p-8 text-white text-center shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
                <p className="text-lg mb-6 text-white/90">
                  Our friendly team is here to help. Give us a call or schedule your free inspection today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+18432938150"
                    className="inline-flex items-center justify-center gap-2 bg-white text-weather-teal px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
                  >
                    <Phone className="w-5 h-5" />
                    (843) 293-8150
                  </a>
                  <a
                    href="https://weathershieldroofiing.app.n8n.cloud/form/roofing-estimate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-colors"
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule Inspection
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency CTA Banner */}
        <section className="py-16 bg-gradient-to-r from-red-600 via-red-600 to-orange-600 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.05) 10px, rgba(255,255,255,.05) 20px)'
            }}></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <AlertCircle className="w-10 h-10" />
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Need Emergency Service?
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                We're Available 24/7 to Protect Your Home
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <a
                  href="tel:+18432938150"
                  className="inline-flex items-center justify-center gap-3 bg-white text-red-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:scale-105 min-h-[64px]"
                >
                  <Phone className="w-6 h-6" />
                  Call Emergency Line: (843) 293-8150
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>24/7 Availability</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>Rapid Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Licensed & Insured</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
