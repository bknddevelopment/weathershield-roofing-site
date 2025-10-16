import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '10 Signs You Need a New Roof | Myrtle Beach SC | Weather Shield',
  description: 'Is it time for a new roof? 10 warning signs from experts. Free inspection. Call (843) 877-5539.',
  keywords: 'signs need new roof, when replace roof, roof replacement signs',
};

export default function SignsYouNeedNewRoofPage() {
  return (
    <main className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">10 Signs You Need a New Roof</h1>
        <div className="space-y-4">
          {[
            'Roof age over 20-25 years',
            'Missing or damaged shingles',
            'Curling or buckling shingles',
            'Granules in gutters',
            'Daylight through roof boards',
            'Water stains on ceilings',
            'Sagging roof deck',
            'Moss or algae growth',
            'Energy bills increasing',
            'Neighbors getting new roofs'
          ].map((sign, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-2xl">✓</span>
              <p className="text-lg">{sign}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 bg-green-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-4">Free Roof Assessment</h3>
          <a href="tel:8438775539" className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold inline-block">
            Call: (843) 877-5539
          </a>
        </div>
      </div>
    </main>
  );
}
