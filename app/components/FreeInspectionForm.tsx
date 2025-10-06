'use client';

import { useState } from 'react';
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

export default function FreeInspectionForm() {
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear validation error when user starts typing
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone is required';
    } else if (!validatePhone(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

    if (formData.email && !validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.address.trim()) {
      errors.address = 'Address is required';
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
          type: 'free_inspection',
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'free-inspection-page'
        })
      });

      if (response.ok) {
        setFormStatus('success');
        // Reset form
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          preferredTime: ''
        });

        // Track conversion
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-XXXXXXXXX/XXXXXXXXX',
            'value': 99.00,
            'currency': 'USD'
          });
        }
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
    }
  };

  const inspectionPoints = [
    { icon: Home, text: 'Shingle Condition Assessment' },
    { icon: Shield, text: 'Flashing & Seal Integrity' },
    { icon: Camera, text: 'Detailed Photo Documentation' },
    { icon: FileText, text: 'Professional Report' },
    { icon: CheckCircle2, text: 'Gutter System Check' },
    { icon: Zap, text: 'Ventilation Analysis' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'Myrtle Beach',
      rating: 5,
      text: 'The free inspection saved me thousands! They found issues my insurance covered.'
    },
    {
      name: 'Mike Williams',
      location: 'Conway',
      rating: 5,
      text: 'No pressure, just honest assessment. The report helped me plan my roof replacement.'
    },
    {
      name: 'Linda Chen',
      location: 'North Myrtle Beach',
      rating: 5,
      text: 'Same-day inspection after the storm. Professional and thorough!'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-weather-teal via-weather-blue to-weather-slate text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />

        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse delay-1000" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Value Badge */}
            <div className="inline-flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-full mb-6 animate-bounce">
              <DollarSign className="w-5 h-5" />
              <span className="font-bold">$99 VALUE - NOW FREE!</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Free 21-Point
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Roof Inspection
              </span>
            </h1>

            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Get a comprehensive roof inspection absolutely FREE. No obligations,
              no hidden fees. Includes detailed report with photos.
            </p>

            {/* Trust Indicators */}
            <div className="grid sm:grid-cols-4 gap-4 mb-10">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <CheckCircle2 className="w-8 h-8 mx-auto mb-2 text-green-400" />
                <div className="font-bold">100% Free</div>
                <div className="text-sm text-white/80">No Hidden Fees</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Clock className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                <div className="font-bold">Same Day</div>
                <div className="text-sm text-white/80">Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Star className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                <div className="font-bold">4.8★</div>
                <div className="text-sm text-white/80">543 Reviews</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Award className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                <div className="font-bold">Certified</div>
                <div className="text-sm text-white/80">Inspectors</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#schedule-form"
                className="bg-white text-weather-teal px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
              >
                Schedule Free Inspection →
              </a>
              <a
                href="tel:8432938150"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-colors"
              >
                <Phone className="inline-block w-5 h-5 mr-2" />
                (843) 293-8150
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4">
            <AlertCircle className="w-6 h-6 animate-pulse" />
            <span className="font-bold text-lg">Limited Time Offer!</span>
            <span>This $99 inspection is FREE only through end of month</span>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              What's Included in Your Free Inspection
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {inspectionPoints.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-weather-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-weather-teal" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{point.text}</h3>
                        <p className="text-sm text-gray-600">Professional assessment included</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Full 21-Point List */}
            <div className="mt-12 bg-gray-50 rounded-xl p-8">
              <h3 className="font-bold text-xl mb-6 text-center text-gray-900">
                Complete 21-Point Inspection Checklist
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  'Shingle condition',
                  'Flashing integrity',
                  'Gutter system',
                  'Downspouts',
                  'Fascia boards',
                  'Soffit vents',
                  'Ridge vents',
                  'Chimney sealing',
                  'Skylight condition',
                  'Pipe boots',
                  'Valley inspection',
                  'Decking assessment',
                  'Attic ventilation',
                  'Ice dam risk',
                  'Storm damage',
                  'Moss/algae growth',
                  'Nail pops',
                  'Granule loss',
                  'Wind damage',
                  'Hail impact',
                  'Overall roof age'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              What Homeowners Are Saying
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-weather-teal/10 rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-weather-teal" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Form Section */}
      <section id="schedule-form" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Schedule Your Free Inspection
                </h2>
                <p className="text-gray-600">
                  Fill out the form below or call us at (843) 293-8150
                </p>
              </div>

              {formStatus === 'success' && (
                <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-green-900">Success!</h3>
                      <p className="text-green-700">Your free inspection has been scheduled. We'll contact you shortly to confirm.</p>
                    </div>
                  </div>
                </div>
              )}

              {formStatus === 'error' && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-red-900">Error</h3>
                      <p className="text-red-700">Something went wrong. Please try again or call us directly.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-weather-teal focus:border-weather-teal transition-colors ${
                      validationErrors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Smith"
                  />
                  {validationErrors.name && (
                    <p className="mt-1 text-sm text-red-600">{validationErrors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-weather-teal focus:border-weather-teal transition-colors ${
                      validationErrors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="(843) 555-0123"
                  />
                  {validationErrors.phone && (
                    <p className="mt-1 text-sm text-red-600">{validationErrors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-weather-teal focus:border-weather-teal transition-colors ${
                      validationErrors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@example.com"
                  />
                  {validationErrors.email && (
                    <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-semibold text-gray-700 mb-2">
                    Property Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-weather-teal focus:border-weather-teal transition-colors ${
                      validationErrors.address ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="123 Main St, Myrtle Beach, SC 29577"
                  />
                  {validationErrors.address && (
                    <p className="mt-1 text-sm text-red-600">{validationErrors.address}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Inspection Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-weather-teal focus:border-weather-teal transition-colors"
                  >
                    <option value="">Select a time</option>
                    <option value="asap">As Soon As Possible</option>
                    <option value="morning">Morning (8am - 12pm)</option>
                    <option value="afternoon">Afternoon (12pm - 5pm)</option>
                    <option value="evening">Evening (5pm - 7pm)</option>
                    <option value="weekend">Weekend</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full bg-weather-teal text-white py-4 rounded-lg font-bold text-lg hover:bg-weather-blue transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {formStatus === 'loading' ? (
                    <span className="flex items-center justify-center gap-3">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Scheduling Inspection...
                    </span>
                  ) : (
                    'Schedule My Free Inspection'
                  )}
                </button>

                <div className="text-center text-sm text-gray-600 mt-4">
                  <p>No payment required • No obligations • 100% FREE</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Trust Section */}
      <section className="py-16 bg-gradient-to-r from-weather-slate to-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
            <h2 className="text-3xl font-bold mb-4">
              Why Choose WeatherShield?
            </h2>
            <div className="grid md:grid-cols-4 gap-6 mt-8">
              <div>
                <div className="text-3xl font-bold text-yellow-400">15,000+</div>
                <div className="text-white/80">Roofs Inspected</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">24/7</div>
                <div className="text-white/80">Emergency Service</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">100%</div>
                <div className="text-white/80">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">A+</div>
                <div className="text-white/80">BBB Rating</div>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="tel:8432938150"
                className="inline-flex items-center gap-3 bg-white text-weather-slate px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Call Now: (843) 293-8150
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}