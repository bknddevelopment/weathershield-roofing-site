import { Phone, Mail, MapPin, Clock, Shield } from 'lucide-react'
import Link from 'next/link'

export default function ContactInfo() {
  const serviceAreas = [
    { name: 'Myrtle Beach', link: '/locations/myrtle-beach' },
    { name: 'North Myrtle Beach', link: '/locations/north-myrtle-beach' },
    { name: 'Conway', link: '/locations/conway' },
    { name: 'Surfside Beach', link: '/locations/surfside-beach' },
    { name: 'Garden City', link: '/locations/garden-city' },
    { name: 'Pawleys Island', link: '/locations/pawleys-island' },
  ]

  return (
    <div className="space-y-6">
      {/* Phone Numbers */}
      <div className="bg-gradient-to-br from-weather-teal to-weather-blue rounded-xl p-6 text-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
            <Phone className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-3">Call Us Today</h3>
            <div className="space-y-2">
              <a
                href="tel:+18432938150"
                className="block text-2xl font-bold hover:underline hover:text-white/90 transition-colors"
                aria-label="Call primary phone number (843) 293-8150"
              >
                (843) 293-8150
              </a>
              <p className="text-sm text-white/90">Primary Line</p>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20">
              <a
                href="tel:+18438775539"
                className="block text-xl font-bold hover:underline hover:text-white/90 transition-colors"
                aria-label="Call secondary phone number (843) 877-5539"
              >
                (843) 877-5539
              </a>
              <p className="text-sm text-white/90">Secondary Line</p>
            </div>
          </div>
        </div>
      </div>

      {/* Email */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-weather-teal/10 rounded-lg flex items-center justify-center">
            <Mail className="w-6 h-6 text-weather-teal" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
            <a
              href="mailto:roofing@weathershieldroofers.com"
              className="text-weather-teal hover:underline font-medium break-all text-base hover:text-weather-teal/80 transition-colors"
              aria-label="Email us at roofing@weathershieldroofers.com"
            >
              roofing@weathershieldroofers.com
            </a>
            <p className="text-sm text-gray-600 mt-2">
              We typically respond within 2 hours
            </p>
          </div>
        </div>
      </div>

      {/* Address with Google Maps Link */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-weather-teal/10 rounded-lg flex items-center justify-center">
            <MapPin className="w-6 h-6 text-weather-teal" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Our Office</h3>
            <a
              href="https://maps.google.com/?q=215+Ronnie+Ct+Unit+F+Myrtle+Beach+SC+29579"
              target="_blank"
              rel="noopener noreferrer"
              className="not-italic text-gray-700 hover:text-weather-teal transition-colors block"
              aria-label="Get directions to our office at 215 Ronnie Ct. Unit F, Myrtle Beach, SC 29579"
            >
              <address className="not-italic">
                215 Ronnie Ct. Unit F<br />
                Myrtle Beach, SC 29579
              </address>
            </a>
            <a
              href="https://maps.google.com/?q=215+Ronnie+Ct+Unit+F+Myrtle+Beach+SC+29579"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-weather-teal text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-weather-teal/90 transition-colors shadow-md hover:shadow-lg"
              aria-label="View our office location on Google Maps"
            >
              <MapPin className="w-4 h-4" />
              View on Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-weather-teal/10 rounded-lg flex items-center justify-center">
            <Clock className="w-6 h-6 text-weather-teal" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Business Hours</h3>
            <div className="space-y-2 text-gray-700">
              <div className="flex justify-between">
                <span className="font-medium">Monday - Friday:</span>
                <span>7:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Saturday:</span>
                <span>8:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Sunday:</span>
                <span>Emergency Only</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex items-start gap-2 text-red-600">
                <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">24/7 Emergency Service Available</p>
                  <a
                    href="tel:+18432938150"
                    className="text-sm hover:underline mt-1 inline-block"
                    aria-label="Call 24/7 emergency line"
                  >
                    Call (843) 293-8150 anytime
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Area */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Service Area</h3>
        <p className="text-gray-700 mb-4">
          Proudly serving homeowners throughout the Grand Strand and surrounding areas:
        </p>
        <div className="grid grid-cols-2 gap-2">
          {serviceAreas.map((area) => (
            <Link
              key={area.name}
              href={area.link}
              className="text-weather-teal hover:underline text-sm font-medium hover:text-weather-teal/80 transition-colors"
              aria-label={`View roofing services in ${area.name}`}
            >
              {area.name} →
            </Link>
          ))}
        </div>
        <p className="text-sm text-gray-600 mt-4">
          Don't see your area listed?{' '}
          <Link
            href="/locations"
            className="text-weather-teal hover:underline font-semibold hover:text-weather-teal/80 transition-colors"
            aria-label="View all service locations"
          >
            View all service locations
          </Link>
        </p>
      </div>

      {/* Trust Badge */}
      <div className="bg-gradient-to-br from-weather-amber/10 to-weather-amber/5 rounded-xl p-6 border-2 border-weather-amber/30 hover:border-weather-amber/50 transition-colors duration-300">
        <div className="flex items-start gap-3">
          <Shield className="w-8 h-8 text-weather-amber flex-shrink-0 mt-1" />
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Licensed & Insured
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Fully licensed, bonded, and insured roofing contractor. GAF Preferred Contractor with A+ BBB Rating.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
