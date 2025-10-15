'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Wind, AlertCircle, CheckCircle } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface VentilationResult {
  requiredCFM: number;
  intakeVents: number;
  exhaustVents: number;
  recommendations: string[];
}

export default function VentilationCalculator() {
  const [squareFootage, setSquareFootage] = useState<string>('');
  const [result, setResult] = useState<VentilationResult | null>(null);
  const [error, setError] = useState<string>('');
  const prefersReducedMotion = useReducedMotion();

  const calculateVentilation = () => {
    setError('');
    const sqFt = parseFloat(squareFootage);

    // Validation
    if (isNaN(sqFt) || sqFt <= 0) {
      setError('Please enter a valid square footage greater than 0');
      setResult(null);
      return;
    }

    if (sqFt > 10000) {
      setError('For attics larger than 10,000 sq ft, please contact us for a custom assessment');
      setResult(null);
      return;
    }

    // Calculate required CFM (1 CFM per square foot of attic space)
    const requiredCFM = Math.ceil(sqFt);

    // Calculate number of vents needed
    // Typical intake vent provides 50 CFM, exhaust vent provides 50 CFM
    const intakeVents = Math.ceil(requiredCFM / 50);
    const exhaustVents = Math.ceil(requiredCFM / 50);

    // Generate recommendations based on size
    const recommendations: string[] = [];

    if (sqFt < 1000) {
      recommendations.push('Small attic: Consider ridge vent + soffit vents combination');
      recommendations.push('Install continuous soffit vents for optimal intake');
      recommendations.push('A single ridge vent may be sufficient for exhaust');
    } else if (sqFt < 2500) {
      recommendations.push('Medium attic: Ridge vent + soffit vents recommended');
      recommendations.push('Ensure 1:1 ratio of intake to exhaust ventilation');
      recommendations.push('Consider adding gable vents for cross-ventilation');
    } else {
      recommendations.push('Large attic: Professional assessment recommended');
      recommendations.push('Multiple exhaust points (ridge + gable vents) advised');
      recommendations.push('Powered attic fan may be beneficial in hot climates');
      recommendations.push('Ensure adequate insulation alongside ventilation');
    }

    // Universal recommendations
    recommendations.push('Never block soffit vents with insulation');
    recommendations.push('Install baffles to maintain airflow from soffits to ridge');

    setResult({
      requiredCFM,
      intakeVents,
      exhaustVents,
      recommendations
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and decimal point
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setSquareFootage(value);
      setError('');
      setResult(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateVentilation();
  };

  return (
    <div className="bg-gradient-to-br from-weather-teal/5 to-weather-purple/5 rounded-2xl p-8 border-2 border-weather-teal/20">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-weather-primary-dark text-white p-3 rounded-xl">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-weather-black">
            Roof Ventilation Calculator
          </h3>
          <p className="text-weather-dark">Calculate your attic's ventilation needs</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Input Section */}
        <div>
          <label
            htmlFor="square-footage"
            className="block text-sm font-semibold text-weather-black mb-2"
          >
            Attic Square Footage
          </label>
          <div className="relative">
            <input
              type="text"
              id="square-footage"
              value={squareFootage}
              onChange={handleInputChange}
              placeholder="Enter attic square footage (e.g., 1500)"
              className="w-full px-4 py-3 rounded-lg border-2 border-weather-gray-dark focus:border-weather-primary focus:ring-2 focus:ring-weather-primary/20 outline-none transition-all text-lg"
              aria-label="Attic square footage"
              aria-describedby={error ? 'error-message' : undefined}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
              sq ft
            </span>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 flex items-start gap-2 text-red-600"
              id="error-message"
              role="alert"
            >
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <span className="text-sm">{error}</span>
            </motion.div>
          )}

          <p className="mt-2 text-sm text-weather-dark">
            <strong>Tip:</strong> Your attic square footage is typically the same as your
            home's footprint. Measure length × width of your home.
          </p>
        </div>

        {/* Calculate Button */}
        <button
          type="submit"
          className="w-full bg-weather-primary-dark text-white font-semibold py-3 px-6 rounded-lg hover:bg-weather-accent transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
        >
          <Wind className="w-5 h-5" />
          Calculate Ventilation Requirements
        </button>
      </form>

      {/* Results Section */}
      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 space-y-6"
        >
          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 border-2 border-weather-primary/20">
              <div className="text-3xl font-bold text-weather-primary mb-1">
                {result.requiredCFM}
              </div>
              <div className="text-sm text-weather-dark">Required CFM</div>
            </div>

            <div className="bg-white rounded-xl p-4 border-2 border-weather-primary/20">
              <div className="text-3xl font-bold text-weather-primary mb-1">
                {result.intakeVents}
              </div>
              <div className="text-sm text-weather-dark">Intake Vents (min)</div>
            </div>

            <div className="bg-white rounded-xl p-4 border-2 border-weather-primary/20">
              <div className="text-3xl font-bold text-weather-primary mb-1">
                {result.exhaustVents}
              </div>
              <div className="text-sm text-weather-dark">Exhaust Vents (min)</div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-xl p-6 border-2 border-weather-purple/20">
            <h4 className="text-lg font-bold text-weather-black mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-weather-primary" />
              Professional Recommendations
            </h4>
            <ul className="space-y-3">
              {result.recommendations.map((rec, index) => (
                <motion.li
                  key={index}
                  initial={!prefersReducedMotion ? { opacity: 0, x: -10 } : undefined}
                  animate={!prefersReducedMotion ? { opacity: 1, x: 0 } : undefined}
                  transition={!prefersReducedMotion ? {
                    duration: 0.3,
                    delay: index * 0.1,
                  } : undefined}
                  className="flex items-start gap-3 text-weather-dark"
                >
                  <span className="text-weather-primary font-bold mt-0.5">•</span>
                  <span>{rec}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-weather-primary-dark to-weather-accent rounded-xl p-6 text-white text-center">
            <p className="text-lg font-semibold mb-3">
              Need help with roof ventilation installation?
            </p>
            <a
              href="tel:+18438775539"
              className="inline-flex items-center gap-2 bg-white text-weather-primary-dark font-bold px-6 py-3 rounded-lg hover:scale-105 transition-transform"
            >
              Call (843) 877-5539 for Free Consultation
            </a>
          </div>
        </motion.div>
      )}
    </div>
  );
}
