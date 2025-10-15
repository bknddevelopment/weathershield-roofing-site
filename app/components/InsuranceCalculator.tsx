'use client';

import { useState, useEffect } from 'react';
import {
  Shield,
  DollarSign,
  Calculator,
  Home,
  FileText,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Percent,
  Calendar,
  Phone,
  HelpCircle,
  ChevronRight,
  Umbrella,
  CloudRain,
  Wind,
  Zap
} from 'lucide-react';
import { roofingMaterials, insuranceDeductibles } from '../data/pricing';

interface InsuranceEstimate {
  roofValue: number;
  claimAmount: number;
  deductible: number;
  insurancePays: number;
  youPay: number;
  savings: number;
  monthlyPayment: number;
}

type DamageType = 'wind' | 'hail' | 'water' | 'tree' | 'other';
type ClaimStatus = 'planning' | 'filed' | 'approved' | 'denied';

export default function InsuranceCalculator() {
  // Calculator inputs
  const [homeValue, setHomeValue] = useState<number>(350000);
  const [roofAge, setRoofAge] = useState<number>(15);
  const [damageType, setDamageType] = useState<DamageType>('wind');
  const [damageExtent, setDamageExtent] = useState<number>(60); // percentage
  const [deductibleAmount, setDeductibleAmount] = useState<number>(2500);
  const [deductibleType, setDeductibleType] = useState<'fixed' | 'percentage'>('fixed');
  const [claimStatus, setClaimStatus] = useState<ClaimStatus>('planning');
  const [currentMaterial, setCurrentMaterial] = useState<string>('asphalt-architectural');
  const [upgradeMaterial, setUpgradeMaterial] = useState<string>('asphalt-architectural');

  // UI state
  const [showHelp, setShowHelp] = useState<boolean>(false);
  const [showTips, setShowTips] = useState<boolean>(true);
  const [estimate, setEstimate] = useState<InsuranceEstimate | null>(null);

  // Calculate insurance estimate
  useEffect(() => {
    try {
      // Estimate roof value as percentage of home value (typically 10-20%)
      const roofValuePercent = 0.15; // 15% of home value
      const roofValue = homeValue * roofValuePercent;

      // Calculate claim amount based on damage extent
      const baseClaim = roofValue * (damageExtent / 100);

      // Apply depreciation based on roof age
      const depreciationRate = 0.03; // 3% per year
      const depreciation = Math.min(roofAge * depreciationRate, 0.5); // Max 50% depreciation
      const claimAmount = baseClaim * (1 - depreciation);

      // Calculate deductible
      const actualDeductible = deductibleType === 'percentage'
        ? homeValue * (deductibleAmount / 100)
        : deductibleAmount;

      // What insurance pays
      const insurancePays = Math.max(claimAmount - actualDeductible, 0);

      // What you pay
      const material = roofingMaterials.find(m => m.id === upgradeMaterial);
      const upgradeCost = roofValue * (material?.pricePerSquareFoot.mid || 6) / 10; // Rough estimate
      const youPay = Math.max(upgradeCost - insurancePays, actualDeductible);

      // Calculate potential savings
      const withoutInsurance = upgradeCost;
      const savings = Math.max(withoutInsurance - youPay, 0);

      // Monthly payment estimate
      const monthlyPayment = youPay / 60; // 60-month financing

      setEstimate({
        roofValue,
        claimAmount,
        deductible: actualDeductible,
        insurancePays,
        youPay,
        savings,
        monthlyPayment
      });
    } catch (error) {
      console.error('Error calculating insurance estimate:', error);
      // Set default estimate on error
      setEstimate({
        roofValue: 0,
        claimAmount: 0,
        deductible: 0,
        insurancePays: 0,
        youPay: 0,
        savings: 0,
        monthlyPayment: 0
      });
    }
  }, [homeValue, roofAge, damageType, damageExtent, deductibleAmount, deductibleType, upgradeMaterial]);

  const damageTypes = [
    { value: 'wind', label: 'Wind/Hurricane', icon: <Wind className="w-5 h-5" />, coverage: 95 },
    { value: 'hail', label: 'Hail Damage', icon: <CloudRain className="w-5 h-5" />, coverage: 90 },
    { value: 'water', label: 'Water Damage', icon: <Umbrella className="w-5 h-5" />, coverage: 75 },
    { value: 'tree', label: 'Fallen Tree', icon: <Zap className="w-5 h-5" />, coverage: 85 },
    { value: 'other', label: 'Other Damage', icon: <HelpCircle className="w-5 h-5" />, coverage: 70 }
  ];

  const claimStatuses = [
    { value: 'planning', label: 'Planning to File', color: 'blue' },
    { value: 'filed', label: 'Claim Filed', color: 'yellow' },
    { value: 'approved', label: 'Claim Approved', color: 'green' },
    { value: 'denied', label: 'Claim Denied', color: 'red' }
  ];

  const insuranceTips = [
    'Document all damage with photos and videos before repairs',
    'Get multiple contractor estimates for insurance',
    'Don\'t sign AOB (Assignment of Benefits) without reading',
    'Keep all receipts and communication records',
    'Consider hiring a public adjuster for large claims',
    'Review your policy coverage limits annually'
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-2xl shadow-xl">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <Shield className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Insurance Claim & Deductible Calculator
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Estimate your out-of-pocket costs when filing an insurance claim for roof damage.
          Understand deductibles, coverage, and potential savings.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Left Column - Inputs */}
        <div className="space-y-6">
          {/* Home Value */}
          <div>
            <label className="flex items-center justify-between mb-3">
              <span className="flex items-center gap-2 font-semibold text-gray-900">
                <Home className="w-5 h-5 text-blue-600" />
                Home Value
              </span>
              <span className="text-blue-600 font-bold text-lg">
                ${homeValue.toLocaleString()}
              </span>
            </label>
            <input
              type="range"
              min="150000"
              max="1000000"
              step="10000"
              value={homeValue}
              onChange={(e) => setHomeValue(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, rgb(37, 99, 235) 0%, rgb(37, 99, 235) ${((homeValue - 150000) / (1000000 - 150000)) * 100}%, rgb(229, 231, 235) ${((homeValue - 150000) / (1000000 - 150000)) * 100}%, rgb(229, 231, 235) 100%)`
              }}
              aria-label="Home value"
              aria-valuemin={150000}
              aria-valuemax={1000000}
              aria-valuenow={homeValue}
              aria-valuetext={`$${homeValue.toLocaleString()}`}
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>$150K</span>
              <span>$500K</span>
              <span>$1M</span>
            </div>
          </div>

          {/* Roof Age */}
          <div>
            <label className="flex items-center justify-between mb-3">
              <span className="flex items-center gap-2 font-semibold text-gray-900">
                <Calendar className="w-5 h-5 text-blue-600" />
                Roof Age
              </span>
              <span className="text-blue-600 font-bold text-lg">
                {roofAge} years old
              </span>
            </label>
            <input
              type="range"
              min="0"
              max="30"
              step="1"
              value={roofAge}
              onChange={(e) => setRoofAge(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, rgb(37, 99, 235) 0%, rgb(37, 99, 235) ${(roofAge / 30) * 100}%, rgb(229, 231, 235) ${(roofAge / 30) * 100}%, rgb(229, 231, 235) 100%)`
              }}
              aria-label="Roof age in years"
              aria-valuemin={0}
              aria-valuemax={30}
              aria-valuenow={roofAge}
              aria-valuetext={`${roofAge} years old`}
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>New</span>
              <span>15 years</span>
              <span>30+ years</span>
            </div>
            {roofAge > 20 && (
              <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg text-sm">
                <AlertCircle className="w-4 h-4 text-yellow-600 inline mr-2" />
                <span className="text-yellow-800">
                  Roofs over 20 years old may have limited coverage or higher depreciation
                </span>
              </div>
            )}
          </div>

          {/* Damage Type */}
          <div>
            <label className="flex items-center gap-2 font-semibold text-gray-900 mb-3">
              <Umbrella className="w-5 h-5 text-blue-600" />
              Type of Damage
            </label>
            <div className="grid grid-cols-2 gap-2">
              {damageTypes.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setDamageType(type.value as DamageType)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    damageType === type.value
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <span className={damageType === type.value ? 'text-blue-600' : 'text-gray-600'}>
                      {type.icon}
                    </span>
                    <span className="font-medium">{type.label}</span>
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    ~{type.coverage}% covered
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Damage Extent */}
          <div>
            <label className="flex items-center justify-between mb-3">
              <span className="flex items-center gap-2 font-semibold text-gray-900">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Damage Extent
              </span>
              <span className="text-blue-600 font-bold text-lg">
                {damageExtent}% of roof
              </span>
            </label>
            <input
              type="range"
              min="10"
              max="100"
              step="5"
              value={damageExtent}
              onChange={(e) => setDamageExtent(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              aria-label="Damage extent percentage"
              aria-valuemin={10}
              aria-valuemax={100}
              aria-valuenow={damageExtent}
              aria-valuetext={`${damageExtent}% of roof damaged`}
              style={{
                background: `linear-gradient(to right, ${
                  damageExtent < 30 ? 'rgb(34, 197, 94)' :
                  damageExtent < 60 ? 'rgb(250, 204, 21)' :
                  'rgb(239, 68, 68)'
                } 0%, ${
                  damageExtent < 30 ? 'rgb(34, 197, 94)' :
                  damageExtent < 60 ? 'rgb(250, 204, 21)' :
                  'rgb(239, 68, 68)'
                } ${damageExtent}%, rgb(229, 231, 235) ${damageExtent}%, rgb(229, 231, 235) 100%)`
              }}
            />
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>Minor</span>
              <span>Moderate</span>
              <span>Severe</span>
            </div>
          </div>

          {/* Deductible */}
          <div>
            <label className="flex items-center gap-2 font-semibold text-gray-900 mb-3">
              <DollarSign className="w-5 h-5 text-blue-600" />
              Insurance Deductible
            </label>
            <div className="flex gap-2 mb-3">
              <button
                onClick={() => setDeductibleType('fixed')}
                className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                  deductibleType === 'fixed'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Fixed Amount
              </button>
              <button
                onClick={() => setDeductibleType('percentage')}
                className={`flex-1 py-2 rounded-lg font-medium transition-colors ${
                  deductibleType === 'percentage'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                % of Home Value
              </button>
            </div>
            {deductibleType === 'fixed' ? (
              <select
                value={deductibleAmount}
                onChange={(e) => setDeductibleAmount(Number(e.target.value))}
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-600"
                aria-label="Fixed deductible amount"
              >
                {insuranceDeductibles.map((amount) => (
                  <option key={amount} value={amount}>
                    ${amount.toLocaleString()}
                  </option>
                ))}
              </select>
            ) : (
              <div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="0.5"
                  value={deductibleAmount}
                  onChange={(e) => setDeductibleAmount(Number(e.target.value))}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  aria-label="Deductible percentage of home value"
                  aria-valuemin={1}
                  aria-valuemax={5}
                  aria-valuenow={deductibleAmount}
                  aria-valuetext={`${deductibleAmount}% of home value ($${(homeValue * deductibleAmount / 100).toLocaleString()})`}
                />
                <div className="text-center mt-2">
                  <span className="font-bold text-blue-600">{deductibleAmount}%</span>
                  <span className="text-gray-600"> = ${(homeValue * deductibleAmount / 100).toLocaleString()}</span>
                </div>
              </div>
            )}
          </div>

          {/* Material Upgrade */}
          <div>
            <label className="flex items-center gap-2 font-semibold text-gray-900 mb-3">
              <TrendingUp className="w-5 h-5 text-blue-600" />
              Replacement Material
            </label>
            <select
              value={upgradeMaterial}
              onChange={(e) => setUpgradeMaterial(e.target.value)}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-blue-600"
            >
              {roofingMaterials.slice(0, 5).map((material) => (
                <option key={material.id} value={material.id}>
                  {material.name} (${material.pricePerSquareFoot.mid}/sq ft)
                </option>
              ))}
            </select>
            <p className="text-sm text-gray-600 mt-2">
              Insurance typically covers like-kind replacement. Upgrades may require additional payment.
            </p>
          </div>

          {/* Claim Status */}
          <div>
            <label className="flex items-center gap-2 font-semibold text-gray-900 mb-3">
              <FileText className="w-5 h-5 text-blue-600" />
              Claim Status
            </label>
            <div className="grid grid-cols-2 gap-2">
              {claimStatuses.map((status) => (
                <button
                  key={status.value}
                  onClick={() => setClaimStatus(status.value as ClaimStatus)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    claimStatus === status.value
                      ? `border-${status.color}-600 bg-${status.color}-50`
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <span className="font-medium">{status.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Results */}
        <div className="lg:sticky lg:top-6 h-fit">
          {estimate && (
            <>
              {/* Main Results Card */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Insurance Claim Estimate</h3>

                {/* Key Numbers */}
                <div className="space-y-4 pb-6 border-b border-white/20">
                  <div className="flex justify-between">
                    <span className="text-white/80">Estimated Roof Value</span>
                    <span className="font-bold text-xl">
                      ${estimate.roofValue.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Claim Amount (after depreciation)</span>
                    <span className="font-bold text-xl">
                      ${estimate.claimAmount.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Your Deductible</span>
                    <span className="font-bold text-xl text-yellow-300">
                      -${estimate.deductible.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* What Insurance Pays */}
                <div className="py-6 border-b border-white/20">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg">Insurance Pays</span>
                    <span className="text-3xl font-bold text-green-400">
                      ${estimate.insurancePays.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* What You Pay */}
                <div className="py-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg">Your Out-of-Pocket</span>
                    <span className="text-3xl font-bold">
                      ${estimate.youPay.toLocaleString()}
                    </span>
                  </div>
                  <div className="text-sm text-white/70 mt-2">
                    Or ${estimate.monthlyPayment.toFixed(0)}/month with financing
                  </div>
                </div>

                {/* Savings */}
                {estimate.savings > 0 && (
                  <div className="bg-green-500/20 backdrop-blur rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <span>You Save with Insurance</span>
                      </span>
                      <span className="text-2xl font-bold text-green-400">
                        ${estimate.savings.toLocaleString()}
                      </span>
                    </div>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="space-y-3 mt-6">
                  <button className="w-full bg-white text-blue-600 font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors">
                    Get Insurance Help
                  </button>
                  <button className="w-full border-2 border-white text-white font-bold py-3 rounded-lg hover:bg-white/10 transition-colors">
                    Schedule Inspection
                  </button>
                </div>
              </div>

              {/* Insurance Tips */}
              {showTips && (
                <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-bold text-blue-900">Insurance Claim Tips</h3>
                    <button
                      onClick={() => setShowTips(false)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      ×
                    </button>
                  </div>
                  <ul className="space-y-2">
                    {insuranceTips.map((tip, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-800">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Deductible Assistance */}
              <div className="mt-6 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-8 h-8" />
                  <div>
                    <h3 className="font-bold text-lg">Deductible Assistance Available</h3>
                    <p className="text-white/90 text-sm">
                      We can help reduce your out-of-pocket costs
                    </p>
                  </div>
                </div>
                <button className="w-full bg-white text-orange-500 font-bold py-2 rounded-lg hover:bg-gray-100 transition-colors mt-3">
                  Learn About Assistance Programs
                </button>
              </div>

              {/* Contact Card */}
              <div className="mt-6 bg-gray-100 rounded-xl p-6 text-center">
                <Phone className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">Need Help with Your Claim?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our insurance specialists can guide you through the process
                </p>
                <div className="text-2xl font-bold text-blue-600">(843) 877-5539</div>
                <div className="text-sm text-gray-600 mt-1">Available 24/7 for emergencies</div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Bottom Information Section */}
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="bg-gray-50 rounded-xl p-6">
          <FileText className="w-8 h-8 text-blue-600 mb-3" />
          <h3 className="font-bold mb-2">Free Claim Review</h3>
          <p className="text-sm text-gray-600">
            We'll review your policy and damage to maximize your claim
          </p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <Shield className="w-8 h-8 text-green-600 mb-3" />
          <h3 className="font-bold mb-2">Insurance Approved</h3>
          <p className="text-sm text-gray-600">
            We work with all major insurance companies in South Carolina
          </p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6">
          <Calculator className="w-8 h-8 text-purple-600 mb-3" />
          <h3 className="font-bold mb-2">No Surprises</h3>
          <p className="text-sm text-gray-600">
            Transparent pricing with no hidden fees or surprise charges
          </p>
        </div>
      </div>
    </div>
  );
}