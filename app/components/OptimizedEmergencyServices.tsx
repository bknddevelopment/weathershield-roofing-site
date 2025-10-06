'use client'

import dynamic from 'next/dynamic'
import { Phone, Clock, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

// Lazy load service icons only when visible
const ServiceIcon = dynamic(() => import('./ServiceIconLoader'), {
  ssr: false,
  loading: () => <div className="w-12 h-12 bg-gray-300 rounded animate-pulse" />
})

const emergencyServices = [
  {
    iconName: 'Droplets',
    title: 'Roof Leak Repair Today',
    description: 'Active leaks stopped immediately. We arrive with professional equipment to stop water damage and protect your home.',
    features: ['Stop active leaks', 'Prevent water damage', 'Interior protection', 'Immediate response'],
    urgency: 'CRITICAL',
    color: 'from-blue-500 to-blue-600'
  },
  {
    iconName: 'CloudRain',
    title: 'Storm Damage Repair Same Day',
    description: '24 hour roof repair near me for storm damage. Hurricane, tornado, and severe weather damage specialists.',
    features: ['Missing shingles', 'Wind damage', 'Hail damage', 'Debris removal'],
    urgency: 'URGENT',
    color: 'from-purple-500 to-purple-600'
  },
  {
    iconName: 'Shield',
    title: 'Emergency Roof Tarp Service',
    description: 'Professional grade tarping to weatherproof your roof immediately. Prevents further damage while repairs are scheduled.',
    features: ['Heavy-duty tarps', 'Secure fastening', 'Weather resistant', 'Insurance approved'],
    urgency: 'IMMEDIATE',
    color: 'from-green-500 to-green-600'
  },
  {
    iconName: 'Trees',
    title: 'Fallen Tree Removal',
    description: 'Emergency roofer available now for tree damage. Safe removal and immediate roof protection.',
    features: ['Safe removal', 'Damage assessment', 'Structural support', 'Debris cleanup'],
    urgency: 'EMERGENCY',
    color: 'from-orange-500 to-orange-600'
  },
  {
    iconName: 'Home',
    title: 'Structural Emergency Support',
    description: 'Urgent roof repair Myrtle Beach for structural damage. Immediate stabilization to prevent collapse.',
    features: ['Emergency bracing', 'Load support', 'Safety assessment', 'Temporary repairs'],
    urgency: 'CRITICAL',
    color: 'from-red-500 to-red-600'
  },
  {
    iconName: 'Zap',
    title: 'Lightning Strike Damage',
    description: 'Immediate response for lightning damage. Full inspection and emergency repairs to prevent fires and leaks.',
    features: ['Fire prevention', 'Electrical safety', 'Damage repair', 'Full inspection'],
    urgency: 'URGENT',
    color: 'from-yellow-500 to-yellow-600'
  }
]

function ServiceCard({ service, index }: { service: typeof emergencyServices[0], index: number }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    const element = document.getElementById(`service-${index}`)
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [index])

  return (
    <div
      id={`service-${index}`}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
    >
      {/* Urgency Badge */}
      <div className={`bg-gradient-to-r ${service.color} text-white px-4 py-2 text-center`}>
        <span className="font-bold text-sm tracking-wider">{service.urgency} SERVICE</span>
      </div>

      <div className="p-6">
        {/* Icon and Title */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`text-white bg-gradient-to-r ${service.color} p-3 rounded-lg`}>
            {isVisible && <ServiceIcon iconName={service.iconName} />}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4">
          {service.description}
        </p>

        {/* Features List */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a
          href="tel:+18432938150"
          className={`flex items-center justify-center gap-2 bg-gradient-to-r ${service.color} text-white px-4 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
          aria-label={`Call for ${service.title}`}
        >
          <Phone className="w-5 h-5" />
          <span>Get Help Now</span>
        </a>
      </div>
    </div>
  )
}

export default function OptimizedEmergencyServices() {
  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Emergency Roofing Services Available 24/7
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Professional emergency roofer available now throughout Myrtle Beach.
            We handle all urgent roof repairs with guaranteed rapid response.
          </p>

          {/* Quick Stats Bar */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-center">
            <div className="bg-white rounded-lg px-6 py-3 shadow-md">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-gray-900">2-Hour Response</span>
              </div>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-md">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-gray-900">24/7 Availability</span>
              </div>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-md">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-gray-900">No Call-Out Fees</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {emergencyServices.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Don't See Your Emergency Listed?
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            We handle ALL roofing emergencies. If you need urgent roof repair in Myrtle Beach,
            call us immediately. Our emergency roofer is available now!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+18432938150"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              aria-label="Call emergency hotline"
            >
              <Phone className="w-6 h-6" />
              EMERGENCY HOTLINE: (843) 293-8150
            </a>
          </div>
          <p className="mt-4 text-white/90">
            Emergency Service: <span className="font-bold text-yellow-300">Available 24/7</span>
          </p>
        </div>
      </div>
    </section>
  )
}