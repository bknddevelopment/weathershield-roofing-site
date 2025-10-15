'use client';

import { useState, useEffect } from 'react';
import {
  Calculator,
  Home,
  Info,
  ChevronDown,
  ChevronUp,
  DollarSign,
  Ruler,
  Layers,
  Clock,
  Shield,
  TrendingUp,
  MapPin,
  Calendar,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import {
  roofingMaterials,
  roofComplexityLevels,
  additionalServices,
  calculateProjectCost,
  homeSizePricing,
  type RoofingMaterial,
  type RoofComplexity
} from '../data/pricing';

interface CalculatorResult {
  materialCost: number;
  laborCost: number;
  additionalCost: number;
  subtotal: number;
  adjustments: number;
  total: number;
  breakdown: Array<{ item: string; cost: number }>;
}

export default function RoofCostCalculator() {
  // State for calculator inputs
  const [homeSize, setHomeSize] = useState<string>('1500');
  const [roofSquareFeet, setRoofSquareFeet] = useState<number>(1800);
  const [selectedMaterial, setSelectedMaterial] = useState<string>('asphalt-architectural');
  const [complexity, setComplexity] = useState<string>('moderate');
  const [selectedServices, setSelectedServices] = useState<string[]>(['tear-off']);
  const [area, setArea] = useState<string>('myrtle-beach');
  const [season, setSeason] = useState<'spring' | 'summer' | 'fall' | 'winter'>('spring');

  // UI state
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [showMaterialInfo, setShowMaterialInfo] = useState<string | null>(null);
  const [calculatorResult, setCalculatorResult] = useState<CalculatorResult | null>(null);

  // Areas in Myrtle Beach region
  const areas = [
    { value: 'myrtle-beach', label: 'Myrtle Beach' },
    { value: 'north-myrtle-beach', label: 'North Myrtle Beach' },
    { value: 'surfside-beach', label: 'Surfside Beach' },
    { value: 'garden-city', label: 'Garden City' },
    { value: 'murrells-inlet', label: 'Murrells Inlet' },
    { value: 'pawleys-island', label: 'Pawleys Island' },
    { value: 'conway', label: 'Conway' },
    { value: 'little-river', label: 'Little River' },
    { value: 'socastee', label: 'Socastee' }
  ];

  // Calculate roof square feet based on home size
  useEffect(() => {
    const homeSq = parseFloat(homeSize);
    // Rough estimate: roof area is typically 1.2-1.5x home square footage
    const roofMultiplier = 1.2 + (Math.random() * 0.3); // Add some variation
    setRoofSquareFeet(Math.round(homeSq * roofMultiplier));
  }, [homeSize]);

  // Recalculate when inputs change
  useEffect(() => {
    try {
      const material = roofingMaterials.find(m => m.id === selectedMaterial);
      const complexityLevel = roofComplexityLevels.find(c => c.level === complexity);

      if (material && complexityLevel) {
        const result = calculateProjectCost(
          roofSquareFeet,
          material,
          complexityLevel,
          selectedServices,
          area,
          season
        );
        setCalculatorResult(result);
      }
    } catch (error) {
      console.error('Error calculating project cost:', error);
      setCalculatorResult(null);
    }
  }, [roofSquareFeet, selectedMaterial, complexity, selectedServices, area, season]);

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const currentMaterial = roofingMaterials.find(m => m.id === selectedMaterial);
  const currentComplexity = roofComplexityLevels.find(c => c.level === complexity);

  // Get current season based on month
  useEffect(() => {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) setSeason('spring');
    else if (month >= 5 && month <= 7) setSeason('summer');
    else if (month >= 8 && month <= 10) setSeason('fall');
    else setSeason('winter');
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-2xl shadow-xl">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-weather-teal/10 rounded-full mb-4">
          <Calculator className="w-8 h-8 text-weather-teal" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Instant Roof Replacement Cost Calculator
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get an accurate estimate for your roof replacement in under 60 seconds.
          Updated with 2025 Myrtle Beach pricing.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - Inputs */}
        <div className="space-y-6">
          {/* Home Size */}
          <div>
            <label className="flex items-center justify-between mb-3">
              <span className="flex items-center gap-2 font-semibold text-gray-900">
                <Home className="w-5 h-5 text-weather-teal" />
                Home Size (sq ft)
              </span>
              <span className="text-weather-teal font-bold text-lg">
                {parseInt(homeSize).toLocaleString()} sq ft
              </span>
            </label>
            <input
              type="range"
              min="800"
              max="5000"
              step="100"
              value={homeSize}
              onChange={(e) => setHomeSize(e.target.value)}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, rgb(0, 180, 184) 0%, rgb(0, 180, 184) ${((parseInt(homeSize) - 800) / (5000 - 800)) * 100}%, rgb(229, 231, 235) ${((parseInt(homeSize) - 800) / (5000 - 800)) * 100}%, rgb(229, 231, 235) 100%)`
              }}
              aria-label="Home size in square feet"
              aria-valuemin={800}
              aria-valuemax={5000}
              aria-valuenow={parseInt(homeSize)}
              aria-valuetext={`${parseInt(homeSize).toLocaleString()} square feet`}
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>Small</span>
              <span>Average</span>
              <span>Large</span>
            </div>
          </div>

          {/* Roof Square Footage (calculated) */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Ruler className="w-5 h-5 text-blue-600 mt-0.5" />
              <div className="flex-1">
                <p className="font-semibold text-blue-900 mb-1">
                  Estimated Roof Area: {roofSquareFeet.toLocaleString()} sq ft
                </p>
                <p className="text-sm text-blue-700">
                  ({(roofSquareFeet / 100).toFixed(1)} roofing squares)
                </p>
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-sm text-blue-600 hover:text-blue-800 mt-2 flex items-center gap-1"
                >
                  {showDetails ? 'Hide' : 'Show'} calculation details
                  {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {showDetails && (
                  <p className="text-sm text-blue-600 mt-2">
                    Roof area is typically 20-50% larger than home square footage due to pitch,
                    overhangs, and architectural features.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Material Selection */}
          <div>
            <label className="flex items-center gap-2 font-semibold text-gray-900 mb-3">
              <Layers className="w-5 h-5 text-weather-teal" />
              Roofing Material
            </label>
            <div className="grid gap-2">
              {roofingMaterials.slice(0, 5).map((material) => (
                <div key={material.id} className="relative">
                  <button
                    onClick={() => setSelectedMaterial(material.id)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      selectedMaterial === material.id
                        ? 'border-weather-teal bg-weather-teal/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {material.popularityRank <= 3 && (
                      <span className="absolute -top-2 right-3 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                        Popular
                      </span>
                    )}
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold text-gray-900">{material.name}</div>
                        <div className="text-sm text-gray-600 mt-1">
                          ${material.pricePerSquareFoot.low.toFixed(2)} - ${material.pricePerSquareFoot.high.toFixed(2)}/sq ft
                          • {material.lifespan} year lifespan
                        </div>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowMaterialInfo(showMaterialInfo === material.id ? null : material.id);
                        }}
                        className="text-gray-400 hover:text-weather-teal ml-2"
                      >
                        <Info className="w-5 h-5" />
                      </button>
                    </div>
                    {showMaterialInfo === material.id && (
                      <div className="mt-3 pt-3 border-t text-sm">
                        <p className="text-gray-700 mb-2">{material.bestFor}</p>
                        <div className="flex gap-4">
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-4 h-4 text-green-600" />
                            <span className="text-gray-600">Energy: {material.energyEfficiency}/10</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Shield className="w-4 h-4 text-blue-600" />
                            <span className="text-gray-600">Durability: {material.durabilityRating}/10</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={() => {/* Show modal with all materials */}}
              className="w-full mt-2 text-weather-teal hover:text-weather-blue text-sm font-semibold"
            >
              View all {roofingMaterials.length} material options →
            </button>
          </div>

          {/* Roof Complexity */}
          <div>
            <label className="flex items-center gap-2 font-semibold text-gray-900 mb-3">
              <Home className="w-5 h-5 text-weather-teal" />
              Roof Complexity
            </label>
            <div className="grid grid-cols-2 gap-2">
              {roofComplexityLevels.map((level) => (
                <button
                  key={level.level}
                  onClick={() => setComplexity(level.level)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    complexity === level.level
                      ? 'border-weather-teal bg-weather-teal/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-semibold text-gray-900 capitalize">{level.level}</div>
                  <div className="text-xs text-gray-600 mt-1">
                    {level.multiplier === 1 ? 'Base price' : `+${((level.multiplier - 1) * 100).toFixed(0)}% labor`}
                  </div>
                </button>
              ))}
            </div>
            {currentComplexity && (
              <div className="mt-3 p-3 bg-gray-50 rounded-lg text-sm">
                <p className="text-gray-700 mb-2">{currentComplexity.description}</p>
                <ul className="text-gray-600 space-y-1">
                  {currentComplexity.factors.slice(0, 3).map((factor, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      {factor}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Additional Services */}
          <div>
            <label className="flex items-center gap-2 font-semibold text-gray-900 mb-3">
              <Layers className="w-5 h-5 text-weather-teal" />
              Additional Services
            </label>
            <div className="space-y-2">
              {additionalServices.slice(0, 6).map((service) => (
                <label
                  key={service.id}
                  className="flex items-start gap-3 p-3 rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={selectedServices.includes(service.id)}
                    onChange={() => handleServiceToggle(service.id)}
                    className="mt-1 w-4 h-4 text-weather-teal rounded focus:ring-weather-teal"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{service.name}</div>
                    <div className="text-sm text-gray-600">
                      {typeof service.price === 'number'
                        ? `$${service.price}`
                        : `$${service.price.min} - $${service.price.max}`}
                      {service.unit !== 'per-service' && ` ${service.unit}`}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="flex items-center gap-2 font-semibold text-gray-900 mb-3">
              <MapPin className="w-5 h-5 text-weather-teal" />
              Project Location
            </label>
            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-weather-teal"
            >
              {areas.map((a) => (
                <option key={a.value} value={a.value}>
                  {a.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Right Column - Results */}
        <div className="lg:sticky lg:top-6 h-fit">
          <div className="bg-gradient-to-br from-weather-teal to-weather-blue text-white rounded-2xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold mb-6">Your Estimated Cost</h3>

            {calculatorResult && (
              <>
                {/* Main Total */}
                <div className="text-center py-6 border-b border-white/20">
                  <div className="text-5xl font-bold mb-2">
                    ${calculatorResult.total.toLocaleString()}
                  </div>
                  <div className="text-white/80">
                    Total Project Cost
                  </div>
                </div>

                {/* Cost Breakdown */}
                <div className="space-y-3 my-6">
                  <div className="font-semibold mb-2">Cost Breakdown:</div>
                  {calculatorResult.breakdown.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-sm">
                      <span className="text-white/90">{item.item}</span>
                      <span className="font-semibold">
                        ${item.cost.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Monthly Payment Estimate */}
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white/90">Estimated Monthly Payment</span>
                    <Clock className="w-5 h-5 text-white/60" />
                  </div>
                  <div className="text-2xl font-bold">
                    ${Math.round(calculatorResult.total / 60).toLocaleString()}/mo
                  </div>
                  <div className="text-sm text-white/70 mt-1">
                    60-month financing at 0% APR*
                  </div>
                </div>

                {/* Savings Alert */}
                {season === 'fall' || season === 'winter' ? (
                  <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-3 mb-6">
                    <div className="flex items-start gap-2">
                      <TrendingUp className="w-5 h-5 text-green-400 mt-0.5" />
                      <div className="text-sm">
                        <div className="font-semibold">Off-Season Savings Active!</div>
                        <div className="text-white/80">
                          You're saving {season === 'fall' ? '5%' : '10%'} with {season} scheduling
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <button className="w-full bg-white text-weather-teal font-bold py-4 rounded-lg hover:bg-gray-100 transition-colors">
                    Get Exact Quote
                  </button>
                  <button className="w-full border-2 border-white text-white font-bold py-4 rounded-lg hover:bg-white/10 transition-colors">
                    Schedule Free Inspection
                  </button>
                  <button className="w-full text-white/90 hover:text-white text-sm py-2">
                    Save Calculator Results →
                  </button>
                </div>

                {/* Trust Indicators */}
                <div className="mt-6 pt-6 border-t border-white/20 text-center text-sm text-white/70">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Shield className="w-4 h-4" />
                    Price Match Guarantee
                  </div>
                  <div>This estimate is valid for 30 days</div>
                </div>
              </>
            )}
          </div>

          {/* Additional Info */}
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-semibold text-amber-900 mb-1">
                  Important Note
                </p>
                <p className="text-amber-800">
                  This calculator provides estimates based on average costs in the Myrtle Beach area.
                  Actual costs may vary based on specific conditions, code requirements, and material availability.
                  Schedule a free inspection for an exact quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}