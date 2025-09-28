'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import {
  CheckCircle2,
  Clock,
  Shield,
  Home,
  Camera,
  FileText,
  Phone,
  Calendar,
  Star,
  Award,
  AlertCircle,
  ChevronRight,
  MapPin,
  DollarSign,
  Zap,
  Users,
  TrendingUp,
  ClipboardCheck
} from 'lucide-react';

// Metadata for SEO - Note: This needs to be moved to a layout or generateMetadata for client components
// export const metadata: Metadata = {
//   title: 'Free Roof Inspection Myrtle Beach | $99 Value - No Obligation',
//   description: 'Get a FREE comprehensive 21-point roof inspection in Myrtle Beach. Normally $99, now completely free. Includes detailed report with photos. Schedule today!',
//   keywords: 'free roof inspection myrtle beach, $99 roof inspection special near me, roof inspection cost myrtle beach, free roofing estimate south carolina, no obligation roof inspection, emergency roof inspection myrtle beach',
//   openGraph: {
//     title: 'FREE Roof Inspection - $99 Value | WeatherShield Roofing',
//     description: 'Limited time offer: Get a comprehensive 21-point roof inspection absolutely FREE. No obligation, no pressure.',
//     url: 'https://weathershieldroofing.com/free-inspection',
//     siteName: 'WeatherShield Roofing',
//     images: [
//       {
//         url: '/images/free-inspection-og.jpg',
//         width: 1200,
//         height: 630,
//         alt: 'Free Roof Inspection - WeatherShield Roofing'
//       }
//     ],
//     locale: 'en_US',
//     type: 'website'
//   },
//   alternates: {
//     canonical: 'https://weathershieldroofing.com/free-inspection'
//   }
// };

// Schema markup for the offer
const inspectionOfferSchema = {
  '@context': 'https://schema.org',
  '@type': 'Offer',
  '@id': 'https://weathershieldroofing.com/free-inspection#offer',
  name: 'Free 21-Point Roof Inspection',
  description: 'Comprehensive roof inspection with detailed report and photos',
  url: 'https://weathershieldroofing.com/free-inspection',
  priceCurrency: 'USD',
  price: '0',
  priceValidUntil: '2025-12-31',
  availability: 'https://schema.org/InStock',
  seller: {
    '@type': 'RoofingContractor',
    name: 'WeatherShield Roofing',
    telephone: '+1-843-293-8150'
  },
  areaServed: {
    '@type': 'City',
    name: 'Myrtle Beach'
  },
  validFrom: '2025-01-01',
  eligibleRegion: {
    '@type': 'Place',
    name: 'Myrtle Beach, SC and surrounding areas'
  }
};

export default function FreeInspectionPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    preferredTime: ''
  });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  // Input validation functions
  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\d{3}-?\d{3}-?\d{4}$/;
    return phoneRegex.test(phone.replace(/[\s()-]/g, ''));
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sanitizeInput = (input: string): string => {
    return input.replace(/<script[^>]*>.*?<\/script>/gi, '')
                .replace(/<[^>]*>/g, '')
                .trim();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
    // Clear validation error on change
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!validatePhone(formData.phone)) {
      errors.phone = 'Please enter a valid phone number (XXX-XXX-XXXX)';
    }

    if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.address.trim()) {
      errors.address = 'Property address is required';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormStatus('loading');

    try {
      const response = await fetch('https://n8n.weathershieldroofers.com/webhook/weathershield-roofing-form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'free-inspection',
          timestamp: new Date().toISOString(),
          url: window.location.href
        })
      });

      if (response.ok) {
        setFormStatus('success');
        // Reset form after successful submission
        setTimeout(() => {
          setFormData({ name: '', phone: '', email: '', address: '', preferredTime: '' });
          setFormStatus('idle');
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };
  const inspectionPoints = [
    'Shingle condition & remaining life',
    'Flashing integrity around chimneys',
    'Gutter system functionality',
    'Ventilation assessment',
    'Decking & structural evaluation',
    'Signs of water damage or leaks',
    'Wind & storm damage assessment',
    'Moss, algae, or debris buildup',
    'Roof valleys & problem areas',
    'Attic inspection (when accessible)',
    'Fascia & soffit condition',
    'Nail pop identification',
    'Granule loss evaluation',
    'Seal & caulking inspection',
    'Ice dam vulnerability check',
    'Drainage system assessment',
    'Skylight seal inspection',
    'Ridge cap evaluation',
    'Overall roof age estimation',
    'Insurance claim potential',
    'Priority repair recommendations'
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: '$99 Value - Absolutely FREE',
      description: 'No hidden fees, no obligations, no pressure to buy'
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: 'Detailed Written Report',
      description: 'Complete documentation with photos and recommendations'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Insurance Documentation',
      description: 'Report accepted by all major insurance companies'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Same-Day Scheduling',
      description: 'Emergency inspections available within 2 hours'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Certified Inspectors',
      description: 'Licensed, insured, and factory-trained professionals'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'HD Photo Documentation',
      description: 'High-resolution images of all problem areas'
    }
  ];

  const process = [
    {
      step: 1,
      title: 'Schedule Online or Call',
      description: 'Book your free inspection in less than 60 seconds',
      time: '< 1 minute'
    },
    {
      step: 2,
      title: 'Expert Inspection',
      description: 'Our certified inspector performs thorough 21-point evaluation',
      time: '30-45 minutes'
    },
    {
      step: 3,
      title: 'Receive Your Report',
      description: 'Get detailed findings with photos and recommendations',
      time: 'Same day'
    },
    {
      step: 4,
      title: 'No-Pressure Consultation',
      description: 'Review options at your pace - no obligation to proceed',
      time: 'Your timeline'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      location: 'North Myrtle Beach',
      rating: 5,
      text: 'The free inspection found storm damage I didn\'t know about. Insurance covered the entire replacement!'
    },
    {
      name: 'John D.',
      location: 'Surfside Beach',
      rating: 5,
      text: 'Very thorough inspection with detailed photos. No pressure tactics - just honest assessment.'
    },
    {
      name: 'Maria G.',
      location: 'Myrtle Beach',
      rating: 5,
      text: 'Inspector arrived on time, was professional, and the report helped with my insurance claim.'
    }
  ];

  const serviceAreas = [
    'Myrtle Beach', 'North Myrtle Beach', 'Surfside Beach', 'Garden City',
    'Murrells Inlet', 'Pawleys Island', 'Conway', 'Little River',
    'Carolina Forest', 'Socastee', 'Red Hill', 'Forestbrook'
  ];

  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(inspectionOfferSchema) }}
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-weather-teal via-weather-blue to-weather-slate text-white py-16 overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-400/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-500" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  {/* Limited Time Badge */}
                  <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full mb-6 animate-pulse">
                    <Zap className="w-5 h-5" />
                    <span className="font-bold">LIMITED TIME OFFER</span>
                  </div>

                  <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    FREE Roof Inspection
                    <span className="block text-yellow-400 text-4xl mt-3">
                      $99 Value - No Strings Attached
                    </span>
                  </h1>

                  <p className="text-xl mb-8 text-white/90">
                    Get a comprehensive 21-point roof inspection with detailed report
                    and HD photos. No obligation, no pressure, no hidden fees.
                  </p>

                  {/* Key Benefits */}
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span className="text-lg">Certified & insured inspectors</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span className="text-lg">Insurance-approved documentation</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span className="text-lg">Same-day scheduling available</span>
                    </li>
                  </ul>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-xl">
                      Schedule Free Inspection →
                    </button>
                    <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
                      <Phone className="inline-block w-5 h-5 mr-2" />
                      (843) 293-8150
                    </button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex items-center gap-6 mt-8">
                    <div className="flex items-center gap-2">
                      <Award className="w-6 h-6 text-yellow-400" />
                      <span className="text-sm">BBB A+ Rated</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-6 h-6 text-green-400" />
                      <span className="text-sm">Fully Insured</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-6 h-6 text-yellow-400" />
                      <span className="text-sm">4.8★ Google</span>
                    </div>
                  </div>
                </div>

                {/* Form Card */}
                <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <Home className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">
                      Claim Your Free Inspection
                    </h2>
                    <p className="text-gray-600">
                      Takes less than 60 seconds - No payment info required
                    </p>
                  </div>

                  <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-weather-teal ${
                          validationErrors.name ? 'border-red-500' : ''
                        }`}
                        required
                        aria-label="Your Name"
                        aria-required="true"
                        aria-invalid={!!validationErrors.name}
                        aria-describedby={validationErrors.name ? 'name-error' : undefined}
                      />
                      {validationErrors.name && (
                        <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">{validationErrors.name}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-weather-teal ${
                          validationErrors.phone ? 'border-red-500' : ''
                        }`}
                        required
                        aria-label="Phone Number"
                        aria-required="true"
                        aria-invalid={!!validationErrors.phone}
                        aria-describedby={validationErrors.phone ? 'phone-error' : undefined}
                      />
                      {validationErrors.phone && (
                        <p id="phone-error" className="text-red-500 text-sm mt-1" role="alert">{validationErrors.phone}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-weather-teal ${
                          validationErrors.email ? 'border-red-500' : ''
                        }`}
                        required
                        aria-label="Email Address"
                        aria-required="true"
                        aria-invalid={!!validationErrors.email}
                        aria-describedby={validationErrors.email ? 'email-error' : undefined}
                      />
                      {validationErrors.email && (
                        <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">{validationErrors.email}</p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="address"
                        placeholder="Property Address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-weather-teal ${
                          validationErrors.address ? 'border-red-500' : ''
                        }`}
                        required
                        aria-label="Property Address"
                        aria-required="true"
                        aria-invalid={!!validationErrors.address}
                        aria-describedby={validationErrors.address ? 'address-error' : undefined}
                      />
                      {validationErrors.address && (
                        <p id="address-error" className="text-red-500 text-sm mt-1" role="alert">{validationErrors.address}</p>
                      )}
                    </div>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-weather-teal"
                      aria-label="Preferred Inspection Time"
                    >
                      <option value="">Preferred Inspection Time</option>
                      <option value="asap">ASAP - Emergency</option>
                      <option value="morning">Morning (8am-12pm)</option>
                      <option value="afternoon">Afternoon (12pm-5pm)</option>
                      <option value="flexible">I'm Flexible</option>
                    </select>
                    <button
                      type="submit"
                      disabled={formStatus === 'loading'}
                      className="w-full bg-weather-teal text-white font-bold py-4 rounded-lg hover:bg-weather-blue transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Submit form to get free inspection"
                    >
                      {formStatus === 'loading' ? 'Submitting...' : 'Get My Free Inspection'}
                    </button>

                    {/* Success/Error Messages */}
                    {formStatus === 'success' && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700" role="alert">
                        <CheckCircle2 className="w-5 h-5 inline mr-2" />
                        Thank you! We'll contact you within 1 hour to schedule your free inspection.
                      </div>
                    )}
                    {formStatus === 'error' && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700" role="alert">
                        <AlertCircle className="w-5 h-5 inline mr-2" />
                        Something went wrong. Please call us at (843) 293-8150 or try again.
                      </div>
                    )}
                  </form>

                  <div className="mt-4 text-center text-sm text-gray-600">
                    <AlertCircle className="w-4 h-4 inline mr-1" />
                    No credit card required • 100% free • No obligations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Urgency Banner */}
        <section className="bg-red-500 text-white py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-4 text-center">
              <Clock className="w-6 h-6 animate-pulse" />
              <span className="font-bold text-lg">
                Only 17 Free Inspections Remaining This Month
              </span>
              <span className="hidden sm:inline">
                • First Come, First Served
              </span>
            </div>
          </div>
        </section>

        {/* 21-Point Inspection Details */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  What's Included in Your FREE 21-Point Inspection
                </h2>
                <p className="text-xl text-gray-600">
                  The most comprehensive roof evaluation in Myrtle Beach - absolutely free
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {inspectionPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-blue-50 border-2 border-blue-200 rounded-xl p-8 text-center">
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Average Savings: $3,500
                </h3>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  Our free inspections help homeowners identify issues early, preventing
                  costly emergency repairs and maximizing insurance claims.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Why Choose Our Free Inspection?
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="text-weather-teal mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Simple 4-Step Process
                </h2>
                <p className="text-xl text-gray-600">
                  From scheduling to report - we make it easy
                </p>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-weather-teal/30" />

                <div className="grid md:grid-cols-4 gap-8">
                  {process.map((item, idx) => (
                    <div key={idx} className="relative text-center">
                      <div className="w-12 h-12 bg-weather-teal text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 relative z-10">
                        {item.step}
                      </div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      <div className="text-weather-teal font-semibold">{item.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  What Homeowners Are Saying
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-6">
                    <div className="flex mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <MapPin className="w-12 h-12 text-weather-teal mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Serving All of Horry County
                </h2>
                <p className="text-xl text-gray-600">
                  Free inspections available in these areas:
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {serviceAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg">
                    <ChevronRight className="w-4 h-4 text-weather-teal" />
                    <span className="text-gray-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-weather-teal to-weather-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Don't Wait - Limited Spots Available!
              </h2>
              <p className="text-xl mb-8 text-white/90">
                This $99 value won't last forever. Schedule your free inspection today
                and protect your biggest investment.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-white text-weather-teal px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
                  Claim Your Free Inspection
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors">
                  <Phone className="inline-block w-5 h-5 mr-2" />
                  Call Now: (843) 293-8150
                </button>
              </div>
              <p className="text-sm text-white/70 mt-6">
                No purchase necessary • No credit card required • 100% free service
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}