import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Choose a Roofing Contractor | Myrtle Beach Guide',
  description: 'Expert guide to choosing the right roofing contractor. Red flags, questions to ask, credentials. Call (843) 877-5539.',
  keywords: 'choosing roofing contractor, how to choose roofer, roofing contractor guide',
};

export default function ChoosingRoofingContractorPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">How to Choose a Roofing Contractor</h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Essential Credentials</h2>
            <ul className="space-y-2">
              <li>✓ Licensed and insured</li>
              <li>✓ Manufacturer certifications</li>
              <li>✓ Local references</li>
              <li>✓ Written warranty</li>
              <li>✓ Established business</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Red Flags to Avoid</h2>
            <ul className="space-y-2">
              <li>❌ No written contract</li>
              <li>❌ Requires full payment upfront</li>
              <li>❌ No physical address</li>
              <li>❌ High-pressure sales tactics</li>
              <li>❌ Too-good-to-be-true pricing</li>
            </ul>
          </div>

          <div className="bg-green-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Why Choose Weather Shield?</h3>
            <ul className="space-y-2 mb-4">
              <li>✓ 15+ years local experience</li>
              <li>✓ 5.0★ Google rating</li>
              <li>✓ 10-year workmanship warranty</li>
              <li>✓ Manufacturer certified</li>
            </ul>
            <a href="tel:8438775539" className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold inline-block">
              Call: (843) 877-5539
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
