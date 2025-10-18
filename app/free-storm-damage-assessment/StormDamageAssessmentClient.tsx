'use client';

import { useState } from 'react';
import { PhoneIcon, CheckCircleIcon, StarIcon, ExclamationTriangleIcon, ClockIcon } from '@heroicons/react/24/solid';

interface FormState {
  name: string;
  email: string;
  phone: string;
  address: string;
  damageType: string[];
  stormDate: string;
  hasInsurance: string;
  insuranceCompany: string;
  additionalInfo: string;
}

export default function StormDamageAssessmentClient() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    address: '',
    damageType: [],
    stormDate: '',
    hasInsurance: '',
    insuranceCompany: '',
    additionalInfo: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const damageTypes = [
    { value: 'missing-shingles', label: 'Missing or Blown Off Shingles', icon: '🌪️' },
    { value: 'water-leak', label: 'Active Water Leaks', icon: '💧' },
    { value: 'hail-damage', label: 'Hail Damage', icon: '🧊' },
    { value: 'tree-damage', label: 'Tree or Debris Impact', icon: '🌳' },
    { value: 'flashing-damage', label: 'Damaged Flashing', icon: '🔧' },
    { value: 'gutter-damage', label: 'Gutter System Damage', icon: '🏚️' },
  ];

  const toggleDamageType = (type: string) => {
    setFormState(prev => ({
      ...prev,
      damageType: prev.damageType.includes(type)
        ? prev.damageType.filter(t => t !== type)
        : [...prev.damageType, type]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = {
      ...formState,
      damageType: formState.damageType.join(', '),
      source: 'Storm Damage Assessment',
      timestamp: new Date().toISOString(),
      urgent: true,
    };

    try {
      const response = await fetch('https://n8n.weathershieldroofers.com/webhook/weathershield-roofing-form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
      } else {
        console.error('Form submission failed');
        alert('There was an error submitting your request. Please call (843) 877-5539 for immediate emergency assistance.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your request. Please call (843) 877-5539 for immediate emergency assistance.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <CheckCircleIcon className="h-20 w-20 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Assessment Request Received!</h2>
            <p className="text-xl text-gray-600 mb-6">
              Our storm damage specialists will contact you within 2 hours to schedule your free assessment.
            </p>

            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
              <div className="flex items-start gap-3 mb-4">
                <ExclamationTriangleIcon className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
                <div className="text-left">
                  <h3 className="font-bold text-gray-900 mb-2">URGENT: Active Leak?</h3>
                  <p className="text-gray-700 mb-3">
                    If you have an active water leak or emergency situation, don't wait for a callback.
                  </p>
                  <a
                    href="tel:8438775539"
                    className="inline-flex items-center gap-2 bg-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors"
                  >
                    <PhoneIcon className="h-5 w-5" />
                    Emergency Line: (843) 877-5539
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">What Happens Next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">1</div>
                  <p className="text-gray-700">Our certified inspector calls you within 2 hours to schedule assessment</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">2</div>
                  <p className="text-gray-700">On-site inspection with drone photography and detailed documentation</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">3</div>
                  <p className="text-gray-700">Receive comprehensive damage report with photos for insurance claim</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">4</div>
                  <p className="text-gray-700">We handle insurance adjuster coordination and claim paperwork</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Emergency Alert Banner */}
        <div className="bg-red-600 text-white rounded-xl p-6 mb-8 shadow-lg">
          <div className="flex items-center gap-4">
            <ExclamationTriangleIcon className="h-12 w-12 flex-shrink-0" />
            <div>
              <h2 className="text-2xl font-bold mb-1">24/7 Emergency Storm Damage Response</h2>
              <p className="text-red-100 mb-3">Active leak? Don't wait - call now for immediate emergency tarping and temporary repairs.</p>
              <a
                href="tel:8438775539"
                className="inline-flex items-center gap-2 bg-white text-red-600 font-semibold py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <PhoneIcon className="h-5 w-5" />
                Emergency: (843) 877-5539
              </a>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Free Storm Damage Assessment
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Expert hurricane & storm damage inspection + insurance claim assistance for Myrtle Beach homeowners
          </p>

          {/* Trust Indicators */}
          <div className="flex justify-center items-center gap-6 flex-wrap mb-8">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-700 font-semibold">5.0★ Google Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
              <span className="text-gray-700">Insurance Claim Specialists</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">2-Hour Response Time</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Your Free Assessment</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 className="font-bold text-gray-900 text-lg">Your Information</h3>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                      placeholder="John Smith"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                        placeholder="(843) 555-1234"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Property Address *</label>
                    <input
                      type="text"
                      required
                      value={formState.address}
                      onChange={(e) => setFormState({ ...formState, address: e.target.value })}
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                      placeholder="123 Main St, Myrtle Beach, SC 29577"
                    />
                  </div>
                </div>

                {/* Damage Information */}
                <div className="space-y-4 border-t pt-6">
                  <h3 className="font-bold text-gray-900 text-lg">Damage Details</h3>

                  <div>
                    <label className="block text-gray-700 font-medium mb-3">What type of damage do you see? (Select all that apply)</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {damageTypes.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => toggleDamageType(type.value)}
                          className={`p-4 border-2 rounded-lg transition-all text-left ${
                            formState.damageType.includes(type.value)
                              ? 'border-blue-600 bg-blue-50'
                              : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{type.icon}</span>
                            <span className="font-medium text-sm">{type.label}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">When did the storm occur? *</label>
                    <input
                      type="date"
                      required
                      value={formState.stormDate}
                      onChange={(e) => setFormState({ ...formState, stormDate: e.target.value })}
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                    />
                  </div>
                </div>

                {/* Insurance Information */}
                <div className="space-y-4 border-t pt-6">
                  <h3 className="font-bold text-gray-900 text-lg">Insurance Information</h3>

                  <div>
                    <label className="block text-gray-700 font-medium mb-3">Do you have homeowners insurance? *</label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        type="button"
                        onClick={() => setFormState({ ...formState, hasInsurance: 'yes' })}
                        className={`p-4 border-2 rounded-lg transition-all ${
                          formState.hasInsurance === 'yes'
                            ? 'border-blue-600 bg-blue-50 text-blue-900'
                            : 'border-gray-300 hover:border-blue-400'
                        }`}
                      >
                        <div className="font-semibold">Yes</div>
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormState({ ...formState, hasInsurance: 'no' })}
                        className={`p-4 border-2 rounded-lg transition-all ${
                          formState.hasInsurance === 'no'
                            ? 'border-blue-600 bg-blue-50 text-blue-900'
                            : 'border-gray-300 hover:border-blue-400'
                        }`}
                      >
                        <div className="font-semibold">No</div>
                      </button>
                    </div>
                  </div>

                  {formState.hasInsurance === 'yes' && (
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Insurance Company Name</label>
                      <input
                        type="text"
                        value={formState.insuranceCompany}
                        onChange={(e) => setFormState({ ...formState, insuranceCompany: e.target.value })}
                        className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                        placeholder="e.g., State Farm, Allstate, etc."
                      />
                    </div>
                  )}
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Additional Details (Optional)</label>
                  <textarea
                    value={formState.additionalInfo}
                    onChange={(e) => setFormState({ ...formState, additionalInfo: e.target.value })}
                    rows={4}
                    className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                    placeholder="Describe the damage, any interior leaks, or other concerns..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || formState.damageType.length === 0 || !formState.hasInsurance}
                  className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Submitting...' : 'Request Free Storm Damage Assessment'}
                </button>
              </form>
            </div>
          </div>

          {/* Sidebar - What's Included */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-4">What's Included</h3>
              <ul className="space-y-3">
                {[
                  'Complete roof inspection with drone photography',
                  'Detailed damage documentation for insurance',
                  'Photo report showing all affected areas',
                  'Written estimate for repairs',
                  'Insurance claim assistance & filing help',
                  'Direct adjuster communication',
                  'Emergency tarping if needed',
                  'No-obligation quote',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Why Choose Weather Shield?</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 5.0★ Google rating with 73 reviews</li>
                <li>• GAF Master Elite certified</li>
                <li>• Hurricane damage specialists since 2005</li>
                <li>• 95% insurance claim approval rate</li>
                <li>• No upfront costs - work with insurance</li>
                <li>• Local Myrtle Beach company</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
