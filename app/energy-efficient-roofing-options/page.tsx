import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Energy Efficient Roofing Options | Myrtle Beach SC',
  description: 'Energy-efficient roofing materials and options. Reduce cooling costs. Cool roof solutions. Call (843) 877-5539.',
  keywords: 'energy efficient roofing, cool roof, reflective roofing',
};

export default function EnergyEfficientRoofingOptionsPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Energy Efficient Roofing Options</h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Cool Roof Technologies</h2>
            <ul className="space-y-2">
              <li>✓ Reflective metal roofing</li>
              <li>✓ Cool-color asphalt shingles</li>
              <li>✓ White TPO membranes</li>
              <li>✓ Tile with reflective coatings</li>
              <li>✓ Solar-ready systems</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Energy Savings Benefits</h2>
            <ul className="space-y-2">
              <li>• 10-15% cooling cost reduction</li>
              <li>• Extended roof lifespan</li>
              <li>• Tax credits available</li>
              <li>• Improved home comfort</li>
              <li>• Environmental benefits</li>
            </ul>
          </div>

          <div className="bg-green-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Energy-Efficient Roofing Consultation</h3>
            <a href="tel:8438775539" className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold inline-block">
              Call: (843) 877-5539
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
