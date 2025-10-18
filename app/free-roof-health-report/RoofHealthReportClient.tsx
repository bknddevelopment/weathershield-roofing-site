'use client';

import { useState } from 'react';
import { PhoneIcon, CheckCircleIcon, StarIcon, ClipboardDocumentListIcon, ChartBarIcon, CalendarIcon } from '@heroicons/react/24/solid';

interface FormState {
  name: string;
  email: string;
  phone: string;
  address: string;
  roofAge: string;
  roofType: string;
  lastInspection: string;
  concerns: string[];
  receiveDigitalCopy: boolean;
}

export default function RoofHealthReportClient() {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    address: '',
    roofAge: '',
    roofType: '',
    lastInspection: '',
    concerns: [],
    receiveDigitalCopy: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const roofTypes = [
    { value: 'asphalt-shingles', label: 'Asphalt Shingles', icon: '🏘️' },
    { value: 'metal', label: 'Metal Roofing', icon: '🔩' },
    { value: 'tile', label: 'Clay/Concrete Tile', icon: '🏛️' },
    { value: 'flat', label: 'Flat/Low Slope', icon: '📐' },
    { value: 'not-sure', label: 'Not Sure', icon: '❓' },
  ];

  const commonConcerns = [
    { value: 'visible-damage', label: 'Visible Damage or Wear', icon: '👁️' },
    { value: 'leaks', label: 'Current or Past Leaks', icon: '💧' },
    { value: 'age', label: 'Roof is Getting Old', icon: '⏰' },
    { value: 'energy-bills', label: 'High Energy Bills', icon: '💸' },
    { value: 'missing-shingles', label: 'Missing Shingles', icon: '🌪️' },
    { value: 'granule-loss', label: 'Granule Loss in Gutters', icon: '🏚️' },
    { value: 'sagging', label: 'Sagging or Uneven Areas', icon: '📉' },
    { value: 'planning-sale', label: 'Planning to Sell Home', icon: '🏠' },
  ];

  const toggleConcern = (concern: string) => {
    setFormState(prev => ({
      ...prev,
      concerns: prev.concerns.includes(concern)
        ? prev.concerns.filter(c => c !== concern)
        : [...prev.concerns, concern]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = {
      ...formState,
      concerns: formState.concerns.join(', '),
      source: 'Roof Health Report',
      timestamp: new Date().toISOString(),
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
        alert('There was an error submitting your request. Please call (843) 877-5539 for immediate assistance.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your request. Please call (843) 877-5539 for immediate assistance.');
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Report Request Confirmed!</h2>
            <p className="text-xl text-gray-600 mb-6">
              We'll schedule your free roof health inspection and deliver your comprehensive report within 48 hours.
            </p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-4">Your Free Report Includes:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {[
                  { icon: '📊', text: 'Overall Roof Health Score (0-100)' },
                  { icon: '📸', text: 'High-Resolution Drone Photos' },
                  { icon: '⏱️', text: 'Estimated Remaining Lifespan' },
                  { icon: '🔍', text: 'Detailed Component Analysis' },
                  { icon: '📋', text: 'Maintenance Recommendations' },
                  { icon: '💰', text: 'Cost Estimates for Repairs' },
                  { icon: '📅', text: '12-Month Maintenance Calendar' },
                  { icon: '⚠️', text: 'Priority Issue Identification' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-700 text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <h3 className="font-bold text-gray-900 mb-3">What Happens Next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">1</div>
                  <p className="text-gray-700">We call you within 24 hours to schedule your inspection</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">2</div>
                  <p className="text-gray-700">Certified GAF inspector performs 21-point roof assessment</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">3</div>
                  <p className="text-gray-700">Receive your comprehensive digital report with photos</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">4</div>
                  <p className="text-gray-700">Optional: Discuss findings and get repair quote</p>
                </div>
              </div>
            </div>

            <a
              href="tel:8438775539"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <PhoneIcon className="h-5 w-5" />
              Questions? Call (843) 877-5539
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Free Comprehensive Roof Health Report
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Know the true condition of your roof before problems become expensive emergencies
          </p>

          {/* Trust Indicators */}
          <div className="flex justify-center items-center gap-6 flex-wrap mb-8">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-700 font-semibold">5.0★ Rating (73 Reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
              <span className="text-gray-700">GAF Master Elite Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <ClipboardDocumentListIcon className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700">21-Point Inspection</span>
            </div>
          </div>

          {/* Sample Report Preview */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">What Your Free Report Includes:</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <ChartBarIcon className="h-12 w-12 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Health Score</h3>
                <p className="text-sm text-blue-100">Overall 0-100 rating with breakdown by component</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <CalendarIcon className="h-12 w-12 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Lifespan Estimate</h3>
                <p className="text-sm text-blue-100">Predicted remaining years based on current condition</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <ClipboardDocumentListIcon className="h-12 w-12 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Action Plan</h3>
                <p className="text-sm text-blue-100">Prioritized repairs & maintenance schedule</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Request Your Free Report</h2>

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

                {/* Roof Information */}
                <div className="space-y-4 border-t pt-6">
                  <h3 className="font-bold text-gray-900 text-lg">About Your Roof</h3>

                  <div>
                    <label className="block text-gray-700 font-medium mb-3">What type of roofing do you have? *</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {roofTypes.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setFormState({ ...formState, roofType: type.value })}
                          className={`p-4 border-2 rounded-lg transition-all ${
                            formState.roofType === type.value
                              ? 'border-blue-600 bg-blue-50'
                              : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                          }`}
                        >
                          <div className="text-2xl mb-1">{type.icon}</div>
                          <div className="font-medium text-sm">{type.label}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Approximate Roof Age *</label>
                      <select
                        required
                        value={formState.roofAge}
                        onChange={(e) => setFormState({ ...formState, roofAge: e.target.value })}
                        className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                      >
                        <option value="">Select age range</option>
                        <option value="0-5">0-5 years</option>
                        <option value="6-10">6-10 years</option>
                        <option value="11-15">11-15 years</option>
                        <option value="16-20">16-20 years</option>
                        <option value="21-25">21-25 years</option>
                        <option value="25+">25+ years</option>
                        <option value="unknown">Not sure</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-medium mb-2">Last Professional Inspection</label>
                      <select
                        value={formState.lastInspection}
                        onChange={(e) => setFormState({ ...formState, lastInspection: e.target.value })}
                        className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                      >
                        <option value="">Select timeframe</option>
                        <option value="never">Never inspected</option>
                        <option value="<6mo">Within 6 months</option>
                        <option value="6-12mo">6-12 months ago</option>
                        <option value="1-2yr">1-2 years ago</option>
                        <option value="2-5yr">2-5 years ago</option>
                        <option value="5+yr">5+ years ago</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Concerns */}
                <div className="space-y-4 border-t pt-6">
                  <h3 className="font-bold text-gray-900 text-lg">Current Concerns (Optional)</h3>
                  <p className="text-gray-600 text-sm">Select any issues you've noticed:</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {commonConcerns.map((concern) => (
                      <button
                        key={concern.value}
                        type="button"
                        onClick={() => toggleConcern(concern.value)}
                        className={`p-3 border-2 rounded-lg transition-all text-left ${
                          formState.concerns.includes(concern.value)
                            ? 'border-blue-600 bg-blue-50'
                            : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{concern.icon}</span>
                          <span className="font-medium text-sm">{concern.label}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Email Preference */}
                <div className="border-t pt-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formState.receiveDigitalCopy}
                      onChange={(e) => setFormState({ ...formState, receiveDigitalCopy: e.target.checked })}
                      className="mt-1 h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <div>
                      <span className="text-gray-900 font-medium">Send me a digital copy of my Roof Health Report</span>
                      <p className="text-sm text-gray-600">Receive your report via email for easy sharing and reference</p>
                    </div>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !formState.roofType}
                  className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed text-lg"
                >
                  {isSubmitting ? 'Submitting...' : 'Get My Free Roof Health Report'}
                </button>

                <p className="text-center text-sm text-gray-500">
                  100% free. No obligation. No pressure. Your report is yours to keep regardless of whether you work with us.
                </p>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-4">Why Get a Roof Health Report?</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Catch problems early</div>
                    <div className="text-gray-600">Small issues cost $300 to fix. Major repairs cost $8,000+</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Plan your budget</div>
                    <div className="text-gray-600">Know what repairs are coming and when</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Protect home value</div>
                    <div className="text-gray-600">Well-maintained roofs increase resale value</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Insurance compliance</div>
                    <div className="text-gray-600">Some insurers require regular inspections</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Report Sample Sections</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Overall Health Score (0-100)</li>
                <li>✓ Shingle Condition Analysis</li>
                <li>✓ Flashing & Penetration Check</li>
                <li>✓ Ventilation Assessment</li>
                <li>✓ Gutter System Evaluation</li>
                <li>✓ Structural Integrity Review</li>
                <li>✓ Estimated Remaining Lifespan</li>
                <li>✓ Maintenance Calendar</li>
                <li>✓ Priority Repair List</li>
                <li>✓ Cost Estimates</li>
              </ul>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">📞</div>
                <h3 className="font-bold text-gray-900 mb-2">Questions?</h3>
                <p className="text-sm text-gray-600 mb-4">Talk to a roofing expert now</p>
                <a
                  href="tel:8438775539"
                  className="inline-flex items-center gap-2 bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors text-sm"
                >
                  <PhoneIcon className="h-4 w-4" />
                  (843) 877-5539
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
