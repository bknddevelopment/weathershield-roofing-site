import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roofing Terminology Glossary | Myrtle Beach | Weather Shield',
  description: 'Complete roofing terminology glossary. Understand roofing terms and jargon. Educational resource. Call (843) 877-5539.',
  keywords: 'roofing terminology, roofing terms, roofing glossary',
};

export default function RoofingTerminologyGlossaryPage() {
  const terms = [
    { term: 'Flashing', def: 'Metal sheets that prevent water from entering joints' },
    { term: 'Granules', def: 'Ceramic-coated particles on shingle surface' },
    { term: 'Ice Dam', def: 'Ridge of ice at roof edge that prevents drainage' },
    { term: 'Ridge Vent', def: 'Ventilation installed along roof peak' },
    { term: 'Soffit', def: 'Underside of roof overhang' },
    { term: 'Underlayment', def: 'Water-resistant barrier under roofing material' },
    { term: 'Valley', def: 'Internal angle where two roof slopes meet' },
    { term: 'Drip Edge', def: 'Metal flashing along roof edges' },
  ];

  return (
    <main className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Roofing Terminology Glossary</h1>
        <p className="text-xl mb-8">Common roofing terms explained</p>

        <div className="space-y-4">
          {terms.map((item, i) => (
            <div key={i} className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="text-lg font-bold">{item.term}</h3>
              <p className="text-gray-700">{item.def}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Questions About Your Roof?</h3>
          <a href="tel:8438775539" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold inline-block">
            Call: (843) 877-5539
          </a>
        </div>
      </div>
    </main>
  );
}
