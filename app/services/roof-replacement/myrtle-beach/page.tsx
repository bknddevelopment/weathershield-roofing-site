import ServiceCityTemplate, { generateServiceCityMetadata } from '@/app/components/templates/ServiceCityTemplate';

const pageData = {
  service: {
    name: 'Roof Replacement',
    slug: 'roof-replacement',
    icon: '🏠',
    description: 'Complete roof replacement services in Myrtle Beach using premium GAF materials. Our expert team handles tear-off, deck inspection, new installation, and cleanup. Lifetime warranties available on materials and workmanship.',
    benefits: [
      'Complete tear-off and disposal of old roofing materials',
      'Thorough deck inspection and repairs included',
      'Premium GAF Timberline HDZ shingles - 50-year warranty',
      'Hurricane wind resistance up to 130 MPH',
      'Lifetime workmanship warranty',
      'Free roof inspections with drone technology',
      'Insurance claim assistance from start to finish',
      'Flexible financing with 0% APR options available'
    ],
    materials: [
      'GAF Timberline HDZ Architectural Shingles',
      'GAF Timberline UHDZ Designer Shingles',
      'Standing Seam Metal Roofing',
      'Stone-Coated Steel Roofing'
    ]
  },
  city: {
    name: 'Myrtle Beach',
    slug: 'myrtle-beach',
    state: 'SC',
    neighborhoods: [
      'Market Common',
      'Carolina Forest',
      'Grande Dunes',
      'Pine Lakes',
      'Arcadian Shores',
      'Briarcliffe Acres'
    ],
    uniqueChallenges: [
      'Hurricane season (June-November) requires wind-resistant materials',
      'Salt air accelerates deterioration of metal components',
      'High humidity promotes mold and algae growth',
      'Intense UV exposure fades shingle granules faster',
      'Coastal wind uplift requires enhanced fastening'
    ]
  },
  metadata: {
    title: 'Roof Replacement Myrtle Beach SC | GAF Certified | Weather Shield Roofing',
    description: 'Expert roof replacement in Myrtle Beach. GAF certified contractors with 5.0★ rating. Hurricane-resistant materials, lifetime warranties, 24/7 emergency service. Call (843) 877-5539 for free estimate.',
    keywords: 'roof replacement myrtle beach, myrtle beach roof replacement, new roof myrtle beach, roof installation myrtle beach, roofing contractor myrtle beach, gaf roofing myrtle beach'
  }
};

export const metadata = generateServiceCityMetadata(pageData);

export default function RoofReplacementMyrtleBeachPage() {
  return <ServiceCityTemplate data={pageData} />;
}
