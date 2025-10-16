import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hurricane Season Roof Prep: Myrtle Beach Guide | Weather Shield',
  description: 'Hurricane season roof preparation checklist for Myrtle Beach. Protect your home from storm damage. Emergency service available. Call (843) 877-5539.',
  keywords: 'hurricane roof prep, storm preparation, hurricane season Myrtle Beach',
};

export default function HurricaneSeasonRoofPrepPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Hurricane Season Roof Prep: Myrtle Beach</h1>
        <p className="text-xl mb-8">Protect your roof before storm season (June-November)</p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Pre-Season Checklist (May)</h2>
            <ul className="space-y-2">
              <li>✓ Professional roof inspection</li>
              <li>✓ Repair any damaged shingles</li>
              <li>✓ Secure loose flashing</li>
              <li>✓ Trim overhanging branches</li>
              <li>✓ Clean gutters thoroughly</li>
              <li>✓ Check roof-to-wall connections</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">During Storm Season</h2>
            <ul className="space-y-2">
              <li>✓ Monitor weather forecasts</li>
              <li>✓ Remove loose objects from yard</li>
              <li>✓ Have emergency tarps ready</li>
              <li>✓ Know emergency contact numbers</li>
              <li>✓ Document roof condition</li>
            </ul>
          </div>

          <div className="bg-red-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">24/7 Storm Emergency Service</h3>
            <p className="mb-4">Emergency tarping and storm damage repair available</p>
            <a href="tel:8438775539" className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 inline-block">
              Emergency: (843) 877-5539
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
