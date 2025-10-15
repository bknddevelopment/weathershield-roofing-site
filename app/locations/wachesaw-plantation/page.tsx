import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Wachesaw Plantation Roofing | Championship Golf Community | Weather Shield',
  description: 'Elite roofing services for Wachesaw Plantation luxury homes. Weather Shield specializes in premium roofing for championship golf communities. Architectural shingles, tile, slate roofing. Murrells Inlet SC. 24/7 emergency response.',
  keywords: 'wachesaw plantation roofing, luxury golf community roofing, premium roofing murrells inlet, architectural roofing, tile roofing, wachesaw sc, championship golf roofing',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/wachesaw-plantation',
  },
  openGraph: {
    title: 'Wachesaw Plantation Roofing | Premium Golf Community Roofing | Weather Shield',
    description: 'Elite roofing services for Wachesaw Plantation luxury homes. Championship golf community roofing experts.',
    url: 'https://weathershieldroofers.com/locations/wachesaw-plantation',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/wachesaw-plantation-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Luxury Roofing Services in Wachesaw Plantation, Murrells Inlet SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function WachesawPlantationPage() {
  return (
    <LocationPageTemplate
      city="Wachesaw Plantation"
      state="SC"
      zipCodes={['29579']}
      population="1,800+"
      description="Weather Shield Roofing delivers championship-level roofing services for Wachesaw Plantation's prestigious golf community. Our mastery of luxury materials and understanding of architectural excellence ensures your estate home receives the superior protection and aesthetic enhancement it demands."
      neighborhoods={[
        'Wachesaw East',
        'Championship Circle',
        'Golf Course Estates',
        'Waterway Villas',
        'Plantation Manor',
        'Wachesaw Woods',
        'Creekside Estates',
        'Heritage Homes'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Championship Golf Environment',
          description: 'Specialized roofing solutions for properties adjacent to world-class golf courses with unique weather exposure'
        },
        {
          icon: null,
          title: 'Waterway Proximity Protection',
          description: 'Premium materials engineered to withstand Intracoastal Waterway humidity and salt exposure'
        },
        {
          icon: null,
          title: 'Architectural Heritage',
          description: 'Custom roofing that honors traditional plantation-style architecture while providing modern performance'
        },
        {
          icon: null,
          title: 'Luxury Material Expertise',
          description: 'Expert installation of slate, tile, copper, and premium architectural shingles'
        }
      ]}
      localStats={[
        { value: 'Rapid', label: 'Emergency Response' },
        { value: '$600K+', label: 'Avg. Home Value Protected' },
        { value: 'Lifetime', label: 'Premium Warranties Available' },
        { value: '5.0 Stars', label: 'Golf Community Ratings' }
      ]}
      nearbyAreas={[
        { name: 'Murrells Inlet', distance: '3 miles', href: '/locations/murrells-inlet' },
        { name: 'Prince Creek', distance: '2 miles', href: '/locations/prince-creek' },
        { name: 'Pawleys Island', distance: '6 miles', href: '/locations/pawleys-island' },
        { name: 'Litchfield Beach', distance: '8 miles', href: '/locations/litchfield-beach' }
      ]}
      emergencyResponse="rapid"
      localTestimonials={[
        {
          name: 'William T.',
          review: 'Weather Shield replaced our original shake roof with a stunning synthetic slate system. Their knowledge of luxury roofing materials and meticulous installation transformed our Wachesaw home. Absolutely exceptional!',
          rating: 5
        },
        {
          name: 'Margaret H.',
          review: 'After Hurricane Florence damaged our tile roof, Weather Shield responded immediately and restored it to perfection. Their expertise with luxury materials and commitment to quality are unmatched in the area.',
          rating: 5
        },
        {
          name: 'Charles D.',
          review: 'We interviewed five high-end contractors before selecting Weather Shield for our copper roof installation. Their craftsmanship and attention to architectural detail justify every penny. True artisans!',
          rating: 5
        }
      ]}
    />
  );
}
