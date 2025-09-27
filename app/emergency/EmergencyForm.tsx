'use client'

import { useState } from 'react'
import { Phone, MapPin, User, AlertTriangle } from 'lucide-react'

export default function EmergencyForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    emergency: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Submit to n8n webhook
      const response = await fetch('https://weathershieldroofing.app.n8n.cloud/webhook/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'emergency',
          timestamp: new Date().toISOString(),
          source: 'emergency-landing-page'
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        // Also trigger immediate phone call prompt for mobile users
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          setTimeout(() => {
            window.location.href = 'tel:+18432938150'
          }, 1000)
        }
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (submitStatus === 'success') {
    return (
      <section className="py-16 bg-white" id="contact">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8">
              <div className="text-green-600 mb-4">
                <CheckCircle className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Request Received!
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Our emergency team has been notified and will contact you immediately.
              </p>
              <div className="bg-white rounded-lg p-6 shadow-md">
                <p className="text-gray-600 mb-4">Can't wait? Call us directly:</p>
                <a
                  href="tel:+18432938150"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-green-700 transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  (843) 293-8150
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Request Emergency Service Now
            </h2>
            <p className="text-xl text-gray-700">
              Can't call? Fill out this quick form and we'll contact you immediately.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full">
              <AlertTriangle className="w-5 h-5" />
              <span className="font-semibold">For fastest response, please call: (843) 293-8150</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <div className="bg-gray-50 rounded-xl p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-weather-teal focus:border-transparent text-gray-900"
                      placeholder="John Smith"
                      aria-label="Your name"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-weather-teal focus:border-transparent text-gray-900"
                      placeholder="(843) 555-1234"
                      aria-label="Phone number"
                    />
                  </div>
                </div>

                {/* Address Field */}
                <div>
                  <label htmlFor="address" className="block text-sm font-bold text-gray-700 mb-2">
                    Property Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      required
                      value={formData.address}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-weather-teal focus:border-transparent text-gray-900"
                      placeholder="123 Main St, Myrtle Beach, SC"
                      aria-label="Property address"
                    />
                  </div>
                </div>

                {/* Emergency Type */}
                <div>
                  <label htmlFor="emergency" className="block text-sm font-bold text-gray-700 mb-2">
                    Type of Emergency *
                  </label>
                  <select
                    id="emergency"
                    name="emergency"
                    required
                    value={formData.emergency}
                    onChange={handleChange}
                    className="block w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-weather-teal focus:border-transparent text-gray-900"
                    aria-label="Type of emergency"
                  >
                    <option value="">Select Emergency Type</option>
                    <option value="active-leak">Active Roof Leak</option>
                    <option value="storm-damage">Storm/Wind Damage</option>
                    <option value="tree-damage">Fallen Tree/Branch</option>
                    <option value="missing-shingles">Missing Shingles</option>
                    <option value="structural">Structural Damage</option>
                    <option value="other">Other Emergency</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-lg"
                  aria-label="Submit emergency request"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'REQUEST EMERGENCY SERVICE'
                  )}
                </button>

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    <p className="font-semibold">Unable to submit form.</p>
                    <p className="text-sm">Please call us directly at (843) 293-8150</p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Direct Call CTA */}
              <div className="bg-gradient-to-r from-weather-teal to-weather-blue rounded-xl p-6 text-white">
                <h3 className="text-2xl font-bold mb-4">Prefer to Call?</h3>
                <p className="mb-4">
                  Get immediate assistance from our emergency team.
                  Available 24/7 for all urgent roof repairs.
                </p>
                <a
                  href="tel:+18432938150"
                  className="inline-flex items-center gap-2 bg-white text-weather-teal px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: (843) 293-8150
                </a>
                <p className="mt-4 text-white/90 text-sm">
                  Average hold time: Less than 30 seconds
                </p>
              </div>

              {/* What Happens Next */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-gray-900">What Happens Next?</h3>
                <ol className="space-y-3">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-weather-teal text-white rounded-full flex items-center justify-center font-bold">1</span>
                    <div>
                      <p className="font-semibold text-gray-900">Immediate Response</p>
                      <p className="text-sm text-gray-600">We'll call you within 5 minutes</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-weather-teal text-white rounded-full flex items-center justify-center font-bold">2</span>
                    <div>
                      <p className="font-semibold text-gray-900">Dispatch Emergency Crew</p>
                      <p className="text-sm text-gray-600">Team dispatched to your location</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-weather-teal text-white rounded-full flex items-center justify-center font-bold">3</span>
                    <div>
                      <p className="font-semibold text-gray-900">On-Site Within 2 Hours</p>
                      <p className="text-sm text-gray-600">Emergency repairs begin immediately</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-weather-teal text-white rounded-full flex items-center justify-center font-bold">4</span>
                    <div>
                      <p className="font-semibold text-gray-900">Property Protected</p>
                      <p className="text-sm text-gray-600">Damage stopped, home secured</p>
                    </div>
                  </li>
                </ol>
              </div>

              {/* Coverage Area */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-3 text-gray-900">Emergency Service Area</h3>
                <p className="text-gray-700 mb-3">
                  24 hour roof repair near me throughout:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <li>• Myrtle Beach</li>
                  <li>• North Myrtle Beach</li>
                  <li>• Surfside Beach</li>
                  <li>• Garden City</li>
                  <li>• Conway</li>
                  <li>• Socastee</li>
                  <li>• Carolina Forest</li>
                  <li>• Pawleys Island</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckCircle({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}