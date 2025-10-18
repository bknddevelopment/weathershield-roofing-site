import ServiceCityTemplate, { generateServiceCityMetadata } from '@/app/components/templates/ServiceCityTemplate';

const pageData = {
  service: {
    name: 'Roof Replacement',
    slug: 'roof-replacement',
    icon: '🏠',
    description: 'Professional roof replacement in Conway, SC. Serving residential and commercial properties with premium GAF materials, expert installation, and lifetime warranties. Free inspections and flexible financing available.',
    benefits: [
      'Complete tear-off and new installation',
      'GAF Timberline HDZ shingles - 50-year warranty',
      'Hurricane wind resistance up to 130 MPH',
      'Thorough deck inspection and repairs',
      'Lifetime workmanship warranty',
      'Free roof inspections',
      'Insurance assistance for storm damage',
      'Financing with 0% APR options'
    ]
  },
  city: {
    name: 'Conway',
    slug: 'conway',
    state: 'SC',
    neighborhoods: [
      'Downtown Conway',
      'Carolina Forest',
      'Forestbrook',
      'Homewood',
      'Highway 501 corridor'
    ],
    uniqueChallenges: [
      'Inland location still vulnerable to hurricane force winds',
      'High humidity promotes algae and mold growth',
      'Frequent afternoon thunderstorms cause leak issues',
      'Mix of historic and new construction requires varied approaches',
      'Growing residential development increases service demand'
    ]
  },
  metadata: {
    title: 'Roof Replacement Conway SC | Expert Installation | Lifetime Warranty',
    description: 'Conway roof replacement specialists. GAF certified with 5.0★ rating. Hurricane-resistant materials, lifetime warranties. Free estimate: (843) 877-5539',
    keywords: 'roof replacement conway sc, conway roofing contractor, new roof conway, roofing company conway sc'
  }
};

export const metadata = generateServiceCityMetadata(pageData);

export default function RoofReplacementConwayPage() {
  return <ServiceCityTemplate data={pageData} />;
}
