import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roof Lifespan Guide: How Long Does a Roof Last? | Myrtle Beach',
  description: 'Complete roof lifespan guide by material. Asphalt, metal, tile lifespans. Extend your roof life. Call (843) 877-5539.',
  keywords: 'roof lifespan, how long roof last, roof life expectancy',
};

export default function RoofLifespanGuidePage() {
  const lifespans = [
    { material: 'Asphalt Shingles (3-Tab)', years: '15-20 years', coastal: '12-18 years' },
    { material: 'Architectural Shingles', years: '25-30 years', coastal: '20-25 years' },
    { material: 'Metal Roofing', years: '40-70 years', coastal: '40-60 years' },
    { material: 'Clay/Concrete Tile', years: '50-100 years', coastal: '50-80 years' },
    { material: 'Slate', years: '75-150 years', coastal: '60-100 years' },
    { material: 'Modified Bitumen', years: '15-20 years', coastal: '12-18 years' },
  ];

  return (
    <main className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">Roof Lifespan Guide</h1>
        <p className="text-xl mb-8">Expected lifespan by material type</p>

        <div className="space-y-4">
          {lifespans.map((item, i) => (
            <div key={i} className="border p-4 rounded-lg">
              <h3 className="text-xl font-bold mb-2">{item.material}</h3>
              <p><strong>Typical:</strong> {item.years}</p>
              <p><strong>Coastal:</strong> {item.coastal}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Roof Age Assessment</h3>
          <a href="tel:8438775539" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold inline-block">
            Call: (843) 877-5539
          </a>
        </div>
      </div>
    </main>
  );
}
