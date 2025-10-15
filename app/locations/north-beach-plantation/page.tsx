import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'North Beach Plantation Roofing | Oceanfront Resort Community | Weather Shield',
  description: 'Premium roofing for North Beach Plantation oceanfront resort homes. Weather Shield specializes in luxury high-rise, townhome, and villa roofing. North Myrtle Beach SC. Hurricane-resistant systems. 24/7 emergency response.',
  keywords: 'north beach plantation roofing, oceanfront resort roofing, luxury high-rise roofing, north myrtle beach roofing, townhome roofing, villa roofing, resort community',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/north-beach-plantation',
  },
  openGraph: {
    title: 'North Beach Plantation Roofing | Oceanfront Resort Roofing | Weather Shield',
    description: 'Premium roofing for North Beach Plantation oceanfront resort community. Luxury multi-family experts.',
    url: 'https://weathershieldroofers.com/locations/north-beach-plantation',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/north-beach-plantation-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Oceanfront Resort Roofing in North Beach Plantation, North Myrtle Beach SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function NorthBeachPlantationPage() {
  return (
    <LocationPageTemplate
      city="North Beach Plantation"
      state="SC"
      zipCodes={['29582']}
      population="3,500+"
      description="Weather Shield Roofing provides world-class roofing services for North Beach Plantation's 60-acre oceanfront resort community. Our expertise in luxury multi-family roofing, from high-rise towers to oceanfront townhomes and patio homes, ensures HOAs and property owners receive superior protection and value."
      neighborhoods={[
        'North Beach Towers',
        'Oceanfront Villas',
        'Patio Homes',
        'Townhome Collections',
        'Beach Club Residences',
        'Plantation Drive',
        'Resort Condominiums',
        'Luxury Cottages'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Direct Oceanfront Exposure',
          description: 'Hurricane-rated roofing systems engineered for extreme Atlantic coastal conditions and salt spray'
        },
        {
          icon: null,
          title: 'Multi-Family Coordination',
          description: 'Expert HOA collaboration and large-scale project management for towers, townhomes, and villas'
        },
        {
          icon: null,
          title: 'Resort-Grade Standards',
          description: 'Premium materials that maintain the aesthetic excellence expected in a world-class resort community'
        },
        {
          icon: null,
          title: 'Rental Property Performance',
          description: 'Durable roofing solutions optimized for high-value vacation rental property protection'
        }
      ]}
      localStats={[
        { value: 'Rapid', label: 'Emergency Response' },
        { value: '60 Acres', label: 'Resort Community Served' },
        { value: '50+ Years', label: 'Premium Warranties' },
        { value: '5.0 Stars', label: 'Resort Community Ratings' }
      ]}
      nearbyAreas={[
        { name: 'North Myrtle Beach', distance: '1 mile', href: '/locations/north-myrtle-beach' },
        { name: 'Windy Hill', distance: '2 miles', href: '/locations/windy-hill' },
        { name: 'Barefoot Resort', distance: '3 miles', href: '/locations/barefoot-resort' },
        { name: 'Cherry Grove', distance: '4 miles', href: '/locations/cherry-grove' }
      ]}
      emergencyResponse="rapid"
      localTestimonials={[
        {
          name: 'North Beach HOA Board',
          review: 'Weather Shield managed our oceanfront tower re-roofing project flawlessly. Their expertise with large-scale luxury properties, coordination with residents, and superior materials made them the ideal contractor.',
          rating: 5
        },
        {
          name: 'Patricia W.',
          review: 'After Hurricane Florence damaged our townhome roof, Weather Shield responded immediately with temporary protection and completed permanent repairs beautifully. Their understanding of resort community standards is exceptional.',
          rating: 5
        },
        {
          name: 'Investment Property LLC',
          review: 'We own multiple rental properties in North Beach Plantation. Weather Shield\'s hurricane-resistant systems protect our investment while their efficient project management minimizes rental disruption. Outstanding service!',
          rating: 5
        }
      ]}
    />
  );
}
