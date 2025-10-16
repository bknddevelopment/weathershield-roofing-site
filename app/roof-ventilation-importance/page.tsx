import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roof Ventilation Importance | Myrtle Beach SC | Weather Shield',
  description: 'Why proper roof ventilation matters. Prevents moisture, extends roof life. Expert ventilation. Call (843) 877-5539.',
  keywords: 'roof ventilation, attic ventilation, roof ventilation importance',
};

export default function RoofVentilationImportancePage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Roof Ventilation: Why It Matters</h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Benefits of Proper Ventilation</h2>
            <ul className="space-y-2">
              <li>✓ Extends roof lifespan</li>
              <li>✓ Prevents moisture buildup</li>
              <li>✓ Reduces energy costs</li>
              <li>✓ Prevents ice dams</li>
              <li>✓ Maintains warranty coverage</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Signs of Poor Ventilation</h2>
            <ul className="space-y-2">
              <li>• Excessive attic heat</li>
              <li>• Moisture or mold in attic</li>
              <li>• Ice dams in winter</li>
              <li>• Curling or buckling shingles</li>
              <li>• High energy bills</li>
            </ul>
          </div>

          <div className="bg-green-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Ventilation Assessment</h3>
            <p className="mb-4">Free evaluation with roof inspection</p>
            <a href="tel:8438775539" className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold inline-block">
              Call: (843) 877-5539
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
