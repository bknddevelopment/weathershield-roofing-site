import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Tidewater Plantation Roofing | Championship Golf Community | Weather Shield',
  description: 'Elite roofing for Tidewater Plantation luxury golf community. Weather Shield specializes in premium roofing, architectural shingles, tile, slate. North Myrtle Beach SC. Golf course estate roofing experts. 24/7 emergency response.',
  keywords: 'tidewater plantation roofing, golf community roofing, luxury roofing north myrtle beach, championship golf roofing, tidewater sc, estate roofing',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/tidewater-plantation',
  },
  openGraph: {
    title: 'Tidewater Plantation Roofing | Championship Golf Community | Weather Shield',
    description: 'Elite roofing for Tidewater Plantation luxury golf community. Championship course estate roofing.',
    url: 'https://weathershieldroofers.com/locations/tidewater-plantation',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/tidewater-plantation-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Championship Golf Community Roofing in Tidewater Plantation, North Myrtle Beach SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function TidewaterPlantationPage() {
  return (
    <LocationPageTemplate
      city="Tidewater Plantation"
      state="SC"
      zipCodes={['29582']}
      population="2,200+"
      description="Weather Shield Roofing delivers championship-level roofing services for Tidewater Plantation's prestigious golf and residential community. Our expertise in luxury materials and understanding of golf course environmental challenges ensures your estate home receives the superior protection and architectural enhancement it deserves."
      neighborhoods={[
        'Golf Course Estates',
        'Marsh View',
        'Lakefront Properties',
        'Plantation Manor',
        'Championship Circle',
        'Tidewater Villas',
        'Heritage Homes',
        'Clubhouse Residences'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Championship Golf Environment',
          description: 'Specialized roofing for properties adjacent to championship golf course with unique irrigation exposure'
        },
        {
          icon: null,
          title: 'Marsh & Wetland Protection',
          description: 'Premium materials engineered to withstand marsh proximity humidity and coastal microclimate'
        },
        {
          icon: null,
          title: 'Coastal Salt Air Defense',
          description: 'Hurricane-resistant luxury systems designed for North Myrtle Beach oceanfront conditions'
        },
        {
          icon: null,
          title: 'Estate-Level Craftsmanship',
          description: 'Expert installation of architectural shingles, tile, slate, and metal roofing systems'
        }
      ]}
      localStats={[
        { value: 'Rapid', label: 'Emergency Response' },
        { value: '$550K+', label: 'Avg. Estate Value Protected' },
        { value: '50+ Years', label: 'Premium Warranties' },
        { value: '5.0 Stars', label: 'Golf Community Ratings' }
      ]}
      nearbyAreas={[
        { name: 'North Myrtle Beach', distance: '2 miles', href: '/locations/north-myrtle-beach' },
        { name: 'Little River', distance: '5 miles', href: '/locations/little-river' },
        { name: 'Barefoot Resort', distance: '3 miles', href: '/locations/barefoot-resort' },
        { name: 'Cherry Grove', distance: '6 miles', href: '/locations/cherry-grove' }
      ]}
      emergencyResponse="rapid"
      localTestimonials={[
        {
          name: 'Robert H.',
          review: 'Weather Shield installed a premium architectural shingle roof on our Tidewater golf course home. Their understanding of the unique environmental challenges and superior craftsmanship resulted in a roof that enhances our property value.',
          rating: 5
        },
        {
          name: 'Linda M.',
          review: 'After Hurricane Florence damaged our tile roof, Weather Shield responded rapidly and restored it beautifully. Their expertise with luxury materials and golf community standards is exceptional.',
          rating: 5
        },
        {
          name: 'James C.',
          review: 'We interviewed several contractors before selecting Weather Shield for our slate roof replacement. Their portfolio of championship golf community properties and meticulous attention to detail made them the clear choice.',
          rating: 5
        }
      ]}
    />
  );
}
