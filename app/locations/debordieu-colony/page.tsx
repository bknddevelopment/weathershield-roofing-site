import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'DeBordieu Colony Roofing | Private Oceanfront Community | Weather Shield',
  description: 'Exclusive roofing services for DeBordieu Colony luxury oceanfront estates. Weather Shield provides elite roofing, tile, slate, metal roofing for private gated community. Georgetown SC. Hurricane-resistant luxury systems. 24/7 emergency response.',
  keywords: 'debordieu colony roofing, private oceanfront roofing, luxury roofing georgetown sc, gated community roofing, oceanfront estate roofing, debordieu sc, elite roofing services',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/debordieu-colony',
  },
  openGraph: {
    title: 'DeBordieu Colony Roofing | Exclusive Oceanfront Roofing | Weather Shield',
    description: 'Elite roofing services for DeBordieu Colony private oceanfront estates. Hurricane-resistant luxury roofing.',
    url: 'https://weathershieldroofers.com/locations/debordieu-colony',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/debordieu-colony-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Exclusive Oceanfront Roofing in DeBordieu Colony, Georgetown SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function DeBordieuColonyPage() {
  return (
    <LocationPageTemplate
      city="DeBordieu Colony"
      state="SC"
      zipCodes={['29585']}
      population="800+"
      description="Weather Shield Roofing serves DeBordieu Colony's exclusive oceanfront estates with the highest level of roofing excellence. Our expertise in luxury materials, hurricane-resistant systems, and architectural preservation makes us the trusted choice for this prestigious private community's most discerning homeowners."
      neighborhoods={[
        'Oceanfront Estates',
        'Pete Dye Golf Villas',
        'Beach Club Residences',
        'Maritime Forest Homes',
        'Creek Watch',
        'Tidewater Estates',
        'North Beach Properties',
        'South Island Manor'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Direct Oceanfront Protection',
          description: 'Hurricane-rated luxury roofing systems engineered for extreme coastal exposure and salt spray'
        },
        {
          icon: null,
          title: 'Private Community Standards',
          description: 'Custom roofing solutions that meet DeBordieu\'s strict architectural review board requirements'
        },
        {
          icon: null,
          title: 'Pete Dye Golf Course',
          description: 'Specialized materials resistant to golf course irrigation and coastal microclimate conditions'
        },
        {
          icon: null,
          title: 'Estate-Level Craftsmanship',
          description: 'Premium materials including slate, tile, copper, and impact-resistant architectural systems'
        }
      ]}
      localStats={[
        { value: 'Rapid', label: 'Emergency Response' },
        { value: '$1M+', label: 'Avg. Estate Value Served' },
        { value: 'Lifetime', label: 'Premium Warranties' },
        { value: '5.0 Stars', label: 'Private Community Ratings' }
      ]}
      nearbyAreas={[
        { name: 'Pawleys Island', distance: '3 miles', href: '/locations/pawleys-island' },
        { name: 'Litchfield Beach', distance: '5 miles', href: '/locations/litchfield-beach' },
        { name: 'Georgetown', distance: '12 miles', href: '/locations/georgetown' },
        { name: 'Murrells Inlet', distance: '10 miles', href: '/locations/murrells-inlet' }
      ]}
      emergencyResponse="rapid"
      localTestimonials={[
        {
          name: 'Elizabeth R.',
          review: 'Weather Shield navigated DeBordieu\'s architectural review process seamlessly and delivered a stunning Spanish tile roof that withstood Hurricane Ian beautifully. Their expertise with luxury oceanfront properties is unparalleled.',
          rating: 5
        },
        {
          name: 'Thomas B.',
          review: 'After interviewing several high-end contractors, Weather Shield demonstrated superior knowledge of hurricane-resistant luxury systems. Our synthetic slate roof exceeded all expectations for both aesthetics and performance.',
          rating: 5
        },
        {
          name: 'Catherine M.',
          review: 'Weather Shield installed a custom copper roof system on our DeBordieu estate home. Their craftsmanship, attention to detail, and understanding of oceanfront challenges make them the only choice for discerning homeowners.',
          rating: 5
        }
      ]}
    />
  );
}
