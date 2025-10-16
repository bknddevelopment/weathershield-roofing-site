import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roof Inspection Checklist: DIY Guide | Myrtle Beach SC',
  description: 'Complete roof inspection checklist. DIY guide with what to look for. Free professional inspection available. Call (843) 877-5539.',
  keywords: 'roof inspection checklist, DIY roof inspection, Myrtle Beach',
};

export default function RoofInspectionChecklistPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Roof Inspection Checklist</h1>
        <p className="text-xl mb-8">Complete DIY inspection guide for homeowners</p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Exterior Checklist</h2>
            <ul className="space-y-2">
              <li>✓ Missing or damaged shingles</li>
              <li>✓ Granule loss in gutters</li>
              <li>✓ Damaged flashing</li>
              <li>✓ Sagging areas</li>
              <li>✓ Moss or algae growth</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Interior Checklist</h2>
            <ul className="space-y-2">
              <li>✓ Water stains on ceilings</li>
              <li>✓ Attic moisture</li>
              <li>✓ Daylight through boards</li>
              <li>✓ Damaged insulation</li>
            </ul>
          </div>

          <div className="bg-blue-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Free Professional Inspection</h3>
            <p className="mb-4">50-point inspection by certified team</p>
            <a href="tel:8438775539" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 inline-block">
              Call: (843) 877-5539
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
