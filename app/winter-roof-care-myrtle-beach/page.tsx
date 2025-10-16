import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Winter Roof Care: Myrtle Beach Guide | Weather Shield Roofing',
  description: 'Winter roof maintenance tips for Myrtle Beach. Prevent ice dams, moisture damage. Expert care. Call (843) 877-5539.',
  keywords: 'winter roof care, winter roof maintenance, Myrtle Beach winter',
};

export default function WinterRoofCarePage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Winter Roof Care: Myrtle Beach</h1>
        <p className="text-xl mb-8">Protect your roof during mild coastal winters</p>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Winter Maintenance Tasks</h2>
            <ul className="space-y-2">
              <li>✓ Monitor for ice dam formation</li>
              <li>✓ Check attic ventilation</li>
              <li>✓ Inspect after cold snaps</li>
              <li>✓ Clear debris from gutters</li>
              <li>✓ Watch for moisture buildup</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Winter Roof Inspection</h3>
            <p className="mb-4">Prepare your roof for spring</p>
            <a href="tel:8438775539" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold inline-block">
              Call: (843) 877-5539
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
