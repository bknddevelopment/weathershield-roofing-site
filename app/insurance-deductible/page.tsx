import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import {
  Shield,
  DollarSign,
  FileText,
  CheckCircle2,
  Umbrella,
  Phone,
  Calculator
} from 'lucide-react';

// Dynamic import for better performance
const InsuranceCalculator = dynamic(() => import('../components/InsuranceCalculator'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-2xl" />,
  ssr: false
});

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Roof Insurance Deductible Calculator | Save on Storm Damage Claims',
  description: 'Calculate your insurance deductible for roof replacement in Myrtle Beach. We help with storm damage claims and offer deductible assistance programs.',
  keywords: 'insurance deductible roof replacement, roof insurance claim calculator, storm damage deductible assistance, hurricane deductible help myrtle beach',
  openGraph: {
    title: 'Insurance Deductible Calculator | WeatherShield Roofing',
    description: 'Calculate your out-of-pocket costs for insurance claims. Deductible assistance available.',
    url: 'https://weathershieldroofing.com/insurance-deductible',
    siteName: 'WeatherShield Roofing',
    locale: 'en_US',
    type: 'website'
  },
  alternates: {
    canonical: 'https://weathershieldroofing.com/insurance-deductible'
  }
};

export default function InsuranceDeductiblePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Shield className="w-5 h-5 text-yellow-400" />
              <span className="text-sm font-semibold">Insurance Claim Specialists</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Insurance Deductible Calculator
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
              Understand your out-of-pocket costs before filing a claim.
              We help maximize your coverage and minimize your expenses.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <DollarSign className="w-8 h-8 mx-auto mb-2 text-green-400" />
                <div className="font-bold">Deductible Help</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <Umbrella className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                <div className="font-bold">All Insurers</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <FileText className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                <div className="font-bold">Free Claims Help</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Suspense fallback={<div className="h-96 bg-gray-100 animate-pulse rounded-2xl" />}>
            <InsuranceCalculator />
          </Suspense>
        </div>
      </section>

      {/* Insurance Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              We Work With All Major Insurance Companies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['State Farm', 'Allstate', 'Liberty Mutual', 'Farmers', 'USAA', 'Progressive', 'Nationwide', 'Travelers'].map((insurer) => (
                <div key={insurer} className="bg-white rounded-lg p-4 shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-green-500 mx-auto mb-2" />
                  <div className="font-medium text-gray-700">{insurer}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-weather-teal to-weather-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help With Your Insurance Claim?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our experts guide you through the entire process and help maximize your coverage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-weather-teal px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Get Free Claim Review
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
              <Phone className="inline-block w-5 h-5 mr-2" />
              (843) 877-5539
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}