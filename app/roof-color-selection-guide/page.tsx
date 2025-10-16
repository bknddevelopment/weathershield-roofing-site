import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roof Color Selection Guide | Myrtle Beach SC | Weather Shield',
  description: 'Expert guide to choosing the right roof color. Energy efficiency, curb appeal, resale value. Call (843) 877-5539.',
  keywords: 'roof color selection, choosing roof color, best roof color',
};

export default function RoofColorSelectionGuidePage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Roof Color Selection Guide</h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Factors to Consider</h2>
            <ul className="space-y-2">
              <li>✓ Home architectural style</li>
              <li>✓ Climate and energy efficiency</li>
              <li>✓ Neighborhood aesthetics</li>
              <li>✓ HOA requirements</li>
              <li>✓ Resale value impact</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Popular Coastal Colors</h2>
            <ul className="space-y-2">
              <li>• Weathered Wood (neutral, versatile)</li>
              <li>• Charcoal (modern, energy-efficient)</li>
              <li>• Driftwood (coastal aesthetic)</li>
              <li>• Slate Gray (timeless elegance)</li>
              <li>• Terra Cotta (Mediterranean style)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Energy Considerations</h2>
            <p>Light colors reflect heat (lower cooling costs)</p>
            <p>Dark colors absorb heat (higher cooling costs)</p>
            <p>In Myrtle Beach climate, lighter colors typically save 10-15% on cooling</p>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Color Consultation & Samples</h3>
            <p className="mb-4">View actual shingle samples at your home</p>
            <a href="tel:8438775539" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold inline-block">
              Call: (843) 877-5539
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
