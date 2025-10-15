'use client';

import { useState } from 'react';
import {
  Check,
  X,
  Star,
  TrendingUp,
  Shield,
  Clock,
  Home,
  DollarSign,
  Award,
  ChevronDown,
  ChevronUp,
  Info,
  Zap,
  Droplets,
  Wind,
  Sun
} from 'lucide-react';
import { roofingMaterials, homeSizePricing, warrantyOptions, type RoofingMaterial } from '../data/pricing';

type ComparisonView = 'price' | 'durability' | 'features';

export default function PricingTables() {
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([
    'asphalt-architectural',
    'metal-standing-seam',
    'clay-tile'
  ]);
  const [comparisonView, setComparisonView] = useState<ComparisonView>('price');
  const [expandedMaterial, setExpandedMaterial] = useState<string | null>(null);

  const getMaterialById = (id: string): RoofingMaterial | undefined => {
    return roofingMaterials.find(m => m.id === id);
  };

  const getRatingStars = (rating: number) => {
    return Array.from({ length: 10 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  const getMaintenanceIcon = (level: 'low' | 'medium' | 'high') => {
    const icons = {
      low: <Check className="w-5 h-5 text-green-500" />,
      medium: <Clock className="w-5 h-5 text-yellow-500" />,
      high: <X className="w-5 h-5 text-red-500" />
    };
    return icons[level];
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Compare Roofing Materials & Pricing
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Side-by-side comparison of the most popular roofing materials in Myrtle Beach.
          All prices include materials and professional installation.
        </p>
      </div>

      {/* View Toggle */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setComparisonView('price')}
            className={`px-6 py-2 rounded-md font-semibold transition-colors ${
              comparisonView === 'price'
                ? 'bg-white text-weather-teal shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Price Comparison
          </button>
          <button
            onClick={() => setComparisonView('durability')}
            className={`px-6 py-2 rounded-md font-semibold transition-colors ${
              comparisonView === 'durability'
                ? 'bg-white text-weather-teal shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Durability & Lifespan
          </button>
          <button
            onClick={() => setComparisonView('features')}
            className={`px-6 py-2 rounded-md font-semibold transition-colors ${
              comparisonView === 'features'
                ? 'bg-white text-weather-teal shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Features & Benefits
          </button>
        </div>
      </div>

      {/* Material Selection */}
      <div className="mb-8">
        <div className="text-sm text-gray-600 text-center mb-3">
          Select up to 4 materials to compare:
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {roofingMaterials.slice(0, 7).map((material) => (
            <button
              key={material.id}
              onClick={() => {
                if (selectedMaterials.includes(material.id)) {
                  setSelectedMaterials(prev => prev.filter(id => id !== material.id));
                } else if (selectedMaterials.length < 4) {
                  setSelectedMaterials(prev => [...prev, material.id]);
                }
              }}
              disabled={!selectedMaterials.includes(material.id) && selectedMaterials.length >= 4}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedMaterials.includes(material.id)
                  ? 'bg-weather-teal text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed'
              }`}
            >
              {material.name}
              {material.popularityRank <= 2 && (
                <span className="ml-2 text-xs bg-white/20 px-1.5 py-0.5 rounded">
                  Popular
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {comparisonView === 'price' && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Material Type
                  </th>
                  {selectedMaterials.map(id => {
                    const material = getMaterialById(id);
                    return (
                      <th key={id} className="px-6 py-4 text-center min-w-[180px]">
                        <div className="font-semibold text-gray-900">{material?.name}</div>
                        {material?.popularityRank === 1 && (
                          <div className="mt-1 inline-flex items-center gap-1 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                            <Award className="w-3 h-3" />
                            Most Popular
                          </div>
                        )}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {/* Price per Square Foot */}
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Price per Sq Ft
                  </td>
                  {selectedMaterials.map(id => {
                    const material = getMaterialById(id);
                    return (
                      <td key={id} className="px-6 py-4 text-center">
                        <div className="text-2xl font-bold text-weather-teal">
                          ${material?.pricePerSquareFoot.mid.toFixed(2)}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">
                          ${material?.pricePerSquareFoot.low.toFixed(2)} - ${material?.pricePerSquareFoot.high.toFixed(2)}
                        </div>
                      </td>
                    );
                  })}
                </tr>

                {/* Average Home Cost */}
                {homeSizePricing.map(size => (
                  <tr key={size.size} className="bg-gray-50/50">
                    <td className="px-6 py-4 font-medium text-gray-700">
                      {size.size} ({size.squareFeet} sq ft)
                    </td>
                    {selectedMaterials.map(id => {
                      const material = getMaterialById(id);
                      if (!material) return null;
                      const cost = size.roofSquares * material.pricePerSquareFoot.mid * 100;
                      return (
                        <td key={id} className="px-6 py-4 text-center">
                          <div className="font-semibold text-gray-900">
                            ${cost.toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-600 mt-1">
                            ${(cost / 60).toFixed(0)}/mo (60mo)
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}

                {/* Cost per Year */}
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Cost per Year (over lifespan)
                  </td>
                  {selectedMaterials.map(id => {
                    const material = getMaterialById(id);
                    if (!material) return null;
                    const avgHomeCost = 20000; // Average for 2000 sq ft home
                    const costPerYear = avgHomeCost / material.lifespan;
                    return (
                      <td key={id} className="px-6 py-4 text-center">
                        <div className="font-semibold text-gray-900">
                          ${costPerYear.toFixed(0)}/year
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          over {material.lifespan} years
                        </div>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {comparisonView === 'durability' && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Durability Metrics
                  </th>
                  {selectedMaterials.map(id => {
                    const material = getMaterialById(id);
                    return (
                      <th key={id} className="px-6 py-4 text-center min-w-[180px]">
                        <div className="font-semibold text-gray-900">{material?.name}</div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {/* Lifespan */}
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Expected Lifespan
                  </td>
                  {selectedMaterials.map(id => {
                    const material = getMaterialById(id);
                    return (
                      <td key={id} className="px-6 py-4 text-center">
                        <div className="text-2xl font-bold text-weather-teal">
                          {material?.lifespan}+ years
                        </div>
                      </td>
                    );
                  })}
                </tr>

                {/* Warranty */}
                <tr className="bg-gray-50/50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Manufacturer Warranty
                  </td>
                  {selectedMaterials.map(id => {
                    const material = getMaterialById(id);
                    return (
                      <td key={id} className="px-6 py-4 text-center">
                        <div className="font-semibold text-gray-900">
                          {material?.warranty} years
                        </div>
                      </td>
                    );
                  })}
                </tr>

                {/* Durability Rating */}
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Durability Rating
                  </td>
                  {selectedMaterials.map(id => {
                    const material = getMaterialById(id);
                    return (
                      <td key={id} className="px-6 py-4">
                        <div className="flex justify-center">
                          {material && getRatingStars(material.durabilityRating)}
                        </div>
                        <div className="text-center text-sm text-gray-600 mt-1">
                          {material?.durabilityRating}/10
                        </div>
                      </td>
                    );
                  })}
                </tr>

                {/* Weather Resistance */}
                <tr className="bg-gray-50/50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Weather Resistance
                  </td>
                  {selectedMaterials.map(id => {
                    const material = getMaterialById(id);
                    const resistance = {
                      'asphalt-3tab': { wind: 70, rain: 80, sun: 60 },
                      'asphalt-architectural': { wind: 85, rain: 85, sun: 70 },
                      'metal-standing-seam': { wind: 95, rain: 98, sun: 95 },
                      'metal-corrugated': { wind: 90, rain: 95, sun: 90 },
                      'clay-tile': { wind: 85, rain: 95, sun: 98 },
                      'concrete-tile': { wind: 80, rain: 90, sun: 85 },
                      'slate': { wind: 90, rain: 98, sun: 95 },
                      'wood-shake': { wind: 60, rain: 70, sun: 65 },
                      'tpo': { wind: 75, rain: 90, sun: 85 }
                    };
                    const stats = resistance[id as keyof typeof resistance] || { wind: 0, rain: 0, sun: 0 };

                    return (
                      <td key={id} className="px-6 py-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <Wind className="w-4 h-4 text-gray-600" />
                            <div className="flex-1 mx-2 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-500 h-2 rounded-full"
                                style={{ width: `${stats.wind}%` }}
                              />
                            </div>
                            <span className="text-sm text-gray-600">{stats.wind}%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <Droplets className="w-4 h-4 text-gray-600" />
                            <div className="flex-1 mx-2 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-blue-500 h-2 rounded-full"
                                style={{ width: `${stats.rain}%` }}
                              />
                            </div>
                            <span className="text-sm text-gray-600">{stats.rain}%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <Sun className="w-4 h-4 text-gray-600" />
                            <div className="flex-1 mx-2 bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-yellow-500 h-2 rounded-full"
                                style={{ width: `${stats.sun}%` }}
                              />
                            </div>
                            <span className="text-sm text-gray-600">{stats.sun}%</span>
                          </div>
                        </div>
                      </td>
                    );
                  })}
                </tr>

                {/* Maintenance Level */}
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Maintenance Required
                  </td>
                  {selectedMaterials.map(id => {
                    const material = getMaterialById(id);
                    return (
                      <td key={id} className="px-6 py-4 text-center">
                        <div className="flex justify-center items-center gap-2">
                          {material && getMaintenanceIcon(material.maintenanceLevel)}
                          <span className="font-medium capitalize">
                            {material?.maintenanceLevel}
                          </span>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {comparisonView === 'features' && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Features & Benefits
                  </th>
                  {selectedMaterials.map(id => {
                    const material = getMaterialById(id);
                    return (
                      <th key={id} className="px-6 py-4 text-center min-w-[180px]">
                        <div className="font-semibold text-gray-900">{material?.name}</div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {/* Energy Efficiency */}
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Energy Efficiency
                  </td>
                  {selectedMaterials.map(id => {
                    const material = getMaterialById(id);
                    return (
                      <td key={id} className="px-6 py-4">
                        <div className="flex justify-center">
                          {material && getRatingStars(material.energyEfficiency)}
                        </div>
                        <div className="text-center text-sm text-gray-600 mt-1">
                          {material?.energyEfficiency}/10
                        </div>
                      </td>
                    );
                  })}
                </tr>

                {/* Installation Complexity */}
                <tr className="bg-gray-50/50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Installation Complexity
                  </td>
                  {selectedMaterials.map(id => {
                    const material = getMaterialById(id);
                    return (
                      <td key={id} className="px-6 py-4 text-center">
                        <div className="font-medium capitalize">
                          {material?.laborIntensity} complexity
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          {material?.laborIntensity === 'low' && 'Quick installation'}
                          {material?.laborIntensity === 'medium' && 'Standard installation'}
                          {material?.laborIntensity === 'high' && 'Expert installation required'}
                        </div>
                      </td>
                    );
                  })}
                </tr>

                {/* Best For */}
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Best For
                  </td>
                  {selectedMaterials.map(id => {
                    const material = getMaterialById(id);
                    return (
                      <td key={id} className="px-6 py-4 text-center text-sm text-gray-700">
                        {material?.bestFor}
                      </td>
                    );
                  })}
                </tr>

                {/* Pros */}
                <tr className="bg-gray-50/50">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Key Benefits
                  </td>
                  {selectedMaterials.map(id => {
                    const material = getMaterialById(id);
                    return (
                      <td key={id} className="px-6 py-4">
                        <ul className="space-y-1">
                          {material?.pros.slice(0, 3).map((pro, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{pro}</span>
                            </li>
                          ))}
                        </ul>
                        {material && material.pros.length > 3 && (
                          <button
                            onClick={() => setExpandedMaterial(expandedMaterial === id ? null : id)}
                            className="text-sm text-weather-teal hover:text-weather-blue mt-2 flex items-center gap-1"
                          >
                            {expandedMaterial === id ? 'Show less' : `+${material.pros.length - 3} more`}
                            {expandedMaterial === id ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                          </button>
                        )}
                      </td>
                    );
                  })}
                </tr>

                {/* Cons */}
                <tr>
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Considerations
                  </td>
                  {selectedMaterials.map(id => {
                    const material = getMaterialById(id);
                    return (
                      <td key={id} className="px-6 py-4">
                        <ul className="space-y-1">
                          {material?.cons.slice(0, 2).map((con, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{con}</span>
                            </li>
                          ))}
                        </ul>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="mt-8 bg-gradient-to-r from-weather-teal to-weather-blue rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">
          Ready to Choose Your New Roof?
        </h3>
        <p className="text-white/90 mb-6 max-w-2xl mx-auto">
          Our experts can help you select the perfect material for your home and budget.
          Get a free consultation and exact pricing today.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-white text-weather-teal px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
            Get Free Quote
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
            Schedule Consultation
          </button>
        </div>
      </div>

      {/* Warranty Comparison Table */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">
          Warranty Options & Coverage
        </h3>
        <div className="grid md:grid-cols-4 gap-4">
          {warrantyOptions.map((warranty, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-lg border-2 p-6 ${
                warranty.type === 'Premium'
                  ? 'border-weather-teal shadow-lg relative'
                  : 'border-gray-200'
              }`}
            >
              {warranty.type === 'Premium' && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-weather-teal text-white text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-4">
                <h4 className="font-bold text-lg text-gray-900">{warranty.type}</h4>
                <div className="text-3xl font-bold text-weather-teal mt-2">
                  {warranty.years}
                  <span className="text-sm text-gray-600 font-normal"> years</span>
                </div>
                {warranty.price > 0 ? (
                  <div className="text-gray-600 mt-1">
                    +${warranty.price}
                  </div>
                ) : (
                  <div className="text-green-600 mt-1 font-semibold">
                    Included
                  </div>
                )}
              </div>
              <ul className="space-y-2">
                {warranty.coverage.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}