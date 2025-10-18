'use client';

import { useState } from 'react';
import { PhoneIcon, CheckCircleIcon, StarIcon } from '@heroicons/react/24/solid';

interface CalculatorState {
  step: number;
  roofSize: number;
  roofPitch: 'low' | 'medium' | 'steep';
  material: 'asphalt' | 'metal' | 'tile';
  name: string;
  email: string;
  phone: string;
}

export default function RoofCostCalculatorClient() {
  const [state, setState] = useState<CalculatorState>({
    step: 1,
    roofSize: 0,
    roofPitch: 'medium',
    material: 'asphalt',
    name: '',
    email: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Pricing logic (per square foot)
  const getMaterialCost = () => {
    const baseCosts = {
      asphalt: 4.50, // $350-550/square avg = $450/square = $4.50/sqft
      metal: 9.25,   // $650-1200/square avg = $925/square = $9.25/sqft
      tile: 13.00,   // $800-1800/square avg = $1300/square = $13/sqft
    };
    return baseCosts[state.material];
  };

  const getPitchMultiplier = () => {
    const multipliers = {
      low: 1.0,
      medium: 1.15,
      steep: 1.35,
    };
    return multipliers[state.roofPitch];
  };

  const calculateTotal = () => {
    const materialCost = getMaterialCost();
    const pitchMultiplier = getPitchMultiplier();
    const baseCost = state.roofSize * materialCost * pitchMultiplier;

    // Add labor and overhead (40% of material cost)
    const totalCost = baseCost * 1.4;

    return {
      low: Math.floor(totalCost * 0.85),
      high: Math.ceil(totalCost * 1.15),
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const estimate = calculateTotal();

    const formData = {
      name: state.name,
      email: state.email,
      phone: state.phone,
      roofSize: state.roofSize,
      roofPitch: state.roofPitch,
      material: state.material,
      estimatedCost: `$${estimate.low.toLocaleString()} - $${estimate.high.toLocaleString()}`,
      source: 'Cost Calculator',
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch('https://n8n.weathershieldroofers.com/webhook/weathershield-roofing-form-submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
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

  const nextStep = () => setState({ ...state, step: state.step + 1 });
  const prevStep = () => setState({ ...state, step: state.step - 1 });

  const progressPercentage = (state.step / 4) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Free Roof Replacement Cost Calculator
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Get an instant estimate for your Myrtle Beach roof replacement
          </p>

          {/* Trust Indicators */}
          <div className="flex justify-center items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <span className="text-gray-700 font-semibold">5.0★ Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="h-5 w-5 text-green-600" />
              <span className="text-gray-700">GAF Master Elite Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-blue-600" />
              <a href="tel:8438775539" className="text-blue-600 font-semibold hover:underline">
                (843) 877-5539
              </a>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Step {state.step} of 4</span>
            <span className="text-sm font-medium text-gray-700">{Math.round(progressPercentage)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Calculator Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Step 1: Roof Size */}
          {state.step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What is your roof size?</h2>

              <div className="space-y-4">
                <label className="block">
                  <span className="text-gray-700 font-medium">Enter square footage (if known):</span>
                  <input
                    type="number"
                    value={state.roofSize || ''}
                    onChange={(e) => setState({ ...state, roofSize: parseInt(e.target.value) || 0 })}
                    className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-lg p-3"
                    placeholder="e.g., 2000"
                  />
                </label>

                <div className="text-center text-gray-500 font-medium">OR</div>

                <div>
                  <span className="text-gray-700 font-medium block mb-3">Select your home size:</span>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { label: 'Small Home', sqft: 1200, description: '1,000-1,500 sq ft' },
                      { label: 'Medium Home', sqft: 1800, description: '1,500-2,200 sq ft' },
                      { label: 'Large Home', sqft: 2500, description: '2,200-3,000 sq ft' },
                      { label: 'Very Large Home', sqft: 3500, description: '3,000+ sq ft' },
                    ].map((option) => (
                      <button
                        key={option.label}
                        onClick={() => setState({ ...state, roofSize: option.sqft })}
                        className={`p-4 border-2 rounded-lg transition-all ${
                          state.roofSize === option.sqft
                            ? 'border-blue-600 bg-blue-50 text-blue-900'
                            : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                        }`}
                      >
                        <div className="font-semibold">{option.label}</div>
                        <div className="text-sm text-gray-600">{option.description}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <button
                onClick={nextStep}
                disabled={state.roofSize === 0}
                className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Continue
              </button>
            </div>
          )}

          {/* Step 2: Roof Pitch */}
          {state.step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What is your roof pitch?</h2>

              <div className="grid grid-cols-1 gap-4">
                {[
                  { value: 'low', label: 'Low Pitch', description: 'Flat or gentle slope (1:12 to 4:12)', icon: '📐' },
                  { value: 'medium', label: 'Medium Pitch', description: 'Standard residential slope (4:12 to 7:12)', icon: '🏠' },
                  { value: 'steep', label: 'Steep Pitch', description: 'High slope or multi-story (7:12+)', icon: '⛰️' },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setState({ ...state, roofPitch: option.value as CalculatorState['roofPitch'] })}
                    className={`p-6 border-2 rounded-lg transition-all text-left ${
                      state.roofPitch === option.value
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-4xl">{option.icon}</div>
                      <div>
                        <div className="font-semibold text-lg">{option.label}</div>
                        <div className="text-sm text-gray-600">{option.description}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={prevStep}
                  className="flex-1 bg-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className="flex-1 bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Material Selection */}
          {state.step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What roofing material do you prefer?</h2>

              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    value: 'asphalt',
                    label: 'Asphalt Shingles',
                    description: 'Most popular, 25-30 year warranty, excellent value',
                    features: ['Wind resistant', 'Wide color selection', 'Cost-effective'],
                    icon: '🏘️'
                  },
                  {
                    value: 'metal',
                    label: 'Metal Roofing',
                    description: 'Premium choice, 50-70 year lifespan, energy efficient',
                    features: ['Hurricane resistant', 'Reduces cooling costs', 'Fire resistant'],
                    icon: '🔩'
                  },
                  {
                    value: 'tile',
                    label: 'Clay/Concrete Tile',
                    description: 'Luxury option, 50+ year lifespan, distinctive style',
                    features: ['Mediterranean aesthetic', 'Extremely durable', 'Low maintenance'],
                    icon: '🏛️'
                  },
                ].map((option) => (
                  <button
                    key={option.value}
                    onClick={() => setState({ ...state, material: option.value as CalculatorState['material'] })}
                    className={`p-6 border-2 rounded-lg transition-all text-left ${
                      state.material === option.value
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-300 hover:border-blue-400 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{option.icon}</div>
                      <div className="flex-1">
                        <div className="font-semibold text-lg mb-1">{option.label}</div>
                        <div className="text-sm text-gray-600 mb-3">{option.description}</div>
                        <div className="flex flex-wrap gap-2">
                          {option.features.map((feature) => (
                            <span key={feature} className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                              ✓ {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={prevStep}
                  className="flex-1 bg-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Back
                </button>
                <button
                  onClick={nextStep}
                  className="flex-1 bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  See Your Estimate
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Results & Lead Capture */}
          {state.step === 4 && !submitSuccess && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-8 text-center">
                <h2 className="text-3xl font-bold mb-2">Your Estimated Cost</h2>
                <div className="text-5xl font-bold mb-4">
                  ${calculateTotal().low.toLocaleString()} - ${calculateTotal().high.toLocaleString()}
                </div>
                <p className="text-blue-100">
                  Based on {state.roofSize.toLocaleString()} sq ft • {state.roofPitch} pitch • {state.material} roofing
                </p>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> This is an estimated range. Final pricing depends on roof complexity,
                  accessibility, old roof removal, and current material costs. Get a free detailed quote for exact pricing.
                </p>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Get Your Free Detailed Quote
                </h3>
                <p className="text-gray-600 mb-6">
                  Enter your contact information to receive a detailed written estimate and schedule your free roof inspection.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={state.name}
                      onChange={(e) => setState({ ...state, name: e.target.value })}
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={state.email}
                      onChange={(e) => setState({ ...state, email: e.target.value })}
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={state.phone}
                      onChange={(e) => setState({ ...state, phone: e.target.value })}
                      className="w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3"
                      placeholder="(843) 555-1234"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get My Free Detailed Quote'}
                  </button>
                </form>

                <button
                  onClick={prevStep}
                  className="w-full mt-4 text-gray-600 hover:text-gray-800 font-medium"
                >
                  ← Back to Material Selection
                </button>
              </div>
            </div>
          )}

          {/* Success State */}
          {submitSuccess && (
            <div className="text-center py-8">
              <div className="mb-6">
                <CheckCircleIcon className="h-20 w-20 text-green-600 mx-auto" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
              <p className="text-xl text-gray-600 mb-6">
                We've received your request and will contact you within 24 hours with your detailed quote.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                <p className="text-gray-700 mb-4">
                  <strong>Need immediate assistance?</strong>
                </p>
                <a
                  href="tel:8438775539"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <PhoneIcon className="h-5 w-5" />
                  Call (843) 877-5539 Now
                </a>
              </div>
              <p className="text-sm text-gray-500">
                Your estimated cost: ${calculateTotal().low.toLocaleString()} - ${calculateTotal().high.toLocaleString()}
              </p>
            </div>
          )}
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-4xl mb-3">✅</div>
            <h3 className="font-bold text-gray-900 mb-2">GAF Master Elite</h3>
            <p className="text-sm text-gray-600">Top 3% of roofing contractors nationwide</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-4xl mb-3">⭐</div>
            <h3 className="font-bold text-gray-900 mb-2">5.0 Star Rating</h3>
            <p className="text-sm text-gray-600">73 verified Google reviews</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-4xl mb-3">🛡️</div>
            <h3 className="font-bold text-gray-900 mb-2">50-Year Warranty</h3>
            <p className="text-sm text-gray-600">Industry-leading warranty coverage</p>
          </div>
        </div>
      </div>
    </div>
  );
}
