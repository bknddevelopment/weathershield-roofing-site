import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Roof Maintenance Tips: Complete Guide | Myrtle Beach SC',
  description: 'Expert roof maintenance tips to extend your roof lifespan. Seasonal checklists, preventive care, and DIY maintenance guide. Save thousands. Call (843) 877-5539.',
  keywords: 'roof maintenance tips, roof care, preventive roof maintenance, roof maintenance checklist, Myrtle Beach roof care',
  openGraph: {
    title: 'Roof Maintenance Tips: Complete Guide | Myrtle Beach SC',
    description: 'Expert roof maintenance tips to extend your roof lifespan and prevent costly repairs.',
    url: 'https://weathershieldroofers.com/roof-maintenance-tips',
    siteName: 'Weather Shield Roofing',
    locale: 'en_US',
    type: 'article',
  },
};

export default function RoofMaintenanceTipsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Roof Maintenance Tips: Save Thousands with Proper Care
            </h1>
            <p className="text-xl mb-8">
              Expert maintenance guide to extend your roof lifespan by 10+ years
            </p>
            <a
              href="tel:8438775539"
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-bold hover:bg-green-50 inline-block"
            >
              Schedule Inspection: (843) 877-5539
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold mb-8">Essential Roof Maintenance Tasks</h2>

          <div className="prose max-w-none">
            <h3>Spring Maintenance (March-May)</h3>
            <ul>
              <li>Clean gutters and downspouts of winter debris</li>
              <li>Inspect for winter storm damage</li>
              <li>Check flashing around chimneys and vents</li>
              <li>Trim overhanging tree branches</li>
              <li>Schedule professional inspection</li>
            </ul>

            <h3>Summer Maintenance (June-August)</h3>
            <ul>
              <li>Check attic ventilation and insulation</li>
              <li>Inspect for heat damage or warping</li>
              <li>Look for algae or moss growth</li>
              <li>Clean debris from roof surface</li>
              <li>Verify hurricane preparedness</li>
            </ul>

            <h3>Fall Maintenance (September-November)</h3>
            <ul>
              <li>Remove fallen leaves from roof and gutters</li>
              <li>Inspect for loose or damaged shingles</li>
              <li>Check for granule loss in gutters</li>
              <li>Seal any small cracks or gaps</li>
              <li>Prepare for winter weather</li>
            </ul>

            <h3>Winter Maintenance (December-February)</h3>
            <ul>
              <li>Monitor for ice dam formation</li>
              <li>Clear snow accumulation (if applicable)</li>
              <li>Check attic for signs of moisture</li>
              <li>Inspect after major storms</li>
              <li>Ensure proper attic ventilation</li>
            </ul>

            <h2>DIY Maintenance vs Professional Service</h2>
            <p>
              <strong>DIY Tasks:</strong> Gutter cleaning, visual inspections from ground, debris removal,
              minor caulking repairs
            </p>
            <p>
              <strong>Professional Tasks:</strong> Roof walking inspections, shingle replacement, flashing
              repairs, structural assessments, warranty-covered work
            </p>

            <h2>Warning Signs Requiring Immediate Attention</h2>
            <ul>
              <li>Missing or damaged shingles</li>
              <li>Water stains on ceilings or walls</li>
              <li>Sagging roof deck</li>
              <li>Excessive granule loss</li>
              <li>Daylight visible through roof boards</li>
              <li>Moss or algae growth</li>
            </ul>

            <h2>Maintenance Schedule</h2>
            <ul>
              <li><strong>Twice per year:</strong> Professional inspection</li>
              <li><strong>Quarterly:</strong> Gutter cleaning and debris removal</li>
              <li><strong>Monthly:</strong> Visual inspection from ground</li>
              <li><strong>After storms:</strong> Immediate damage assessment</li>
            </ul>
          </div>

          <div className="mt-12 bg-green-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">Professional Maintenance Program</h3>
            <p className="mb-4">
              Our comprehensive maintenance program includes bi-annual inspections, gutter cleaning,
              minor repairs, and priority emergency service.
            </p>
            <a
              href="tel:8438775539"
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 inline-block"
            >
              Learn More: (843) 877-5539
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
