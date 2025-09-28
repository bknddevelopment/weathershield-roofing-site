import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Calculator, TrendingUp, DollarSign } from 'lucide-react';

// Dynamic imports
const RoofCostCalculator = dynamic(() => import('../components/RoofCostCalculator'), {
  ssr: false
});

const PricingTables = dynamic(() => import('../components/PricingTables'), {
  ssr: false
});

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Roof Cost Comparison Tool | Compare Materials & Prices 2025',
  description: 'Compare roofing materials and costs side-by-side. Free calculator shows exact pricing for asphalt, metal, tile roofing in Myrtle Beach.',
  keywords: 'roof cost comparison, roofing material comparison, metal vs asphalt roof cost, roof pricing comparison tool',
  openGraph: {
    title: 'Compare Roof Costs & Materials | WeatherShield',
    description: 'Free tool to compare roofing materials and get instant pricing.',
    url: 'https://weathershieldroofing.com/roof-cost-comparison'
  }
};

export default function RoofCostComparisonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-weather-teal to-weather-blue text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Roof Cost Comparison Tool</h1>
          <p className="text-xl">Compare materials, prices, and find your best option</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <RoofCostCalculator />
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <PricingTables />
        </div>
      </section>
    </div>
  );
}