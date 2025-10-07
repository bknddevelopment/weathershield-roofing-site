import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Pine Lakes Roofing | Grandfather Golf Course Community | Weather Shield',
  description: 'Historic golf community roofing for Pine Lakes "Grandfather Golf Course". Weather Shield provides premium roofing, architectural shingles, tile, slate. Myrtle Beach SC. Heritage home roofing experts. 24/7 emergency response.',
  keywords: 'pine lakes roofing, grandfather golf course roofing, historic golf community, heritage home roofing myrtle beach, pine lakes sc, preserve pine lakes',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/pine-lakes',
  },
  openGraph: {
    title: 'Pine Lakes Roofing | Grandfather Golf Course Community | Weather Shield',
    description: 'Historic golf community roofing for Pine Lakes. Heritage home preservation and luxury roofing.',
    url: 'https://weathershieldroofers.com/locations/pine-lakes',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/pine-lakes-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Historic Golf Community Roofing in Pine Lakes, Myrtle Beach SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function PineLakesPage() {
  return (
    <LocationPageTemplate
      city="Pine Lakes"
      state="SC"
      zipCodes={['29577']}
      population="1,500+"
      description="Weather Shield Roofing honors Pine Lakes' distinguished heritage as home of the 'Grandfather Golf Course' with premium roofing services that preserve the architectural character of this historic community. Our expertise in traditional roofing materials and modern performance systems ensures your classic home receives both timeless beauty and superior protection."
      neighborhoods={[
        'Preserve at Pine Lakes',
        'Golf Course Estates',
        'Historic Pine Lakes',
        'Classic Manor',
        'Heritage Homes',
        'Championship Circle',
        'Lakefront Properties',
        'Pine Lakes Village'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Historic Architecture Preservation',
          description: 'Specialized roofing that maintains the classic character of Pine Lakes\' heritage homes'
        },
        {
          icon: null,
          title: 'Golf Course Microclimate',
          description: 'Premium materials resistant to irrigation moisture and coastal humidity unique to golf communities'
        },
        {
          icon: null,
          title: 'Coastal Weather Defense',
          description: 'Hurricane-resistant systems engineered for Myrtle Beach\'s challenging coastal environment'
        },
        {
          icon: null,
          title: 'Premium Material Expertise',
          description: 'Expert installation of slate, tile, copper, and architectural shingle systems'
        }
      ]}
      localStats={[
        { value: 'Rapid', label: 'Emergency Response' },
        { value: '1927', label: 'Historic Community Founded' },
        { value: '50+ Years', label: 'Premium Material Warranties' },
        { value: '5.0 Stars', label: 'Heritage Community Ratings' }
      ]}
      nearbyAreas={[
        { name: 'Myrtle Beach', distance: '1 mile', href: '/locations/myrtle-beach' },
        { name: 'Market Common', distance: '2 miles', href: '/locations/market-common' },
        { name: 'Grande Dunes', distance: '3 miles', href: '/locations/grande-dunes' },
        { name: 'The Dunes Club', distance: '2 miles', href: '/locations/the-dunes-club' }
      ]}
      emergencyResponse="rapid"
      localTestimonials={[
        {
          name: 'Edward R.',
          review: 'Weather Shield beautifully restored our historic Pine Lakes home\'s original slate roof. Their respect for the "Grandfather Golf Course" community\'s heritage combined with modern waterproofing is exactly what we needed.',
          rating: 5
        },
        {
          name: 'Barbara S.',
          review: 'After researching specialists in historic golf community roofing, Weather Shield demonstrated superior knowledge of traditional materials. Our clay tile roof honors Pine Lakes\' character while providing modern storm protection.',
          rating: 5
        },
        {
          name: 'George L.',
          review: 'Weather Shield installed a premium architectural shingle system that perfectly complements our home in the Preserve at Pine Lakes. Their craftsmanship and understanding of golf course properties is exceptional.',
          rating: 5
        }
      ]}
    />
  );
}
