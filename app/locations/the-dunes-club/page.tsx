import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'The Dunes Club Roofing | Historic Golf & Beach Club | Weather Shield',
  description: 'Premium roofing for The Dunes Club historic golf & beach community. Weather Shield specializes in heritage home roofing, architectural shingles, tile, slate. Myrtle Beach SC. Historic preservation roofing experts. 24/7 emergency service.',
  keywords: 'dunes club roofing, historic golf club roofing, beach club roofing myrtle beach, heritage home roofing, architectural preservation, the dunes club sc',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/the-dunes-club',
  },
  openGraph: {
    title: 'The Dunes Club Roofing | Historic Golf & Beach Club Roofing | Weather Shield',
    description: 'Premium roofing for The Dunes Club historic golf & beach community. Heritage preservation experts.',
    url: 'https://weathershieldroofers.com/locations/the-dunes-club',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/dunes-club-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Roofing Services in The Dunes Club, Myrtle Beach SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function TheDunesClubPage() {
  return (
    <LocationPageTemplate
      city="The Dunes Club"
      state="SC"
      zipCodes={['29572', '29577']}
      population="1,200+"
      description="Weather Shield Roofing honors The Dunes Club's rich heritage with premium roofing services that preserve the architectural character of this historic golf and beach community. Our expertise in traditional roofing materials and modern performance systems ensures your estate home receives both timeless beauty and superior protection."
      neighborhoods={[
        'Golf Course Estates',
        'Beach Club Residences',
        'Heritage Homes',
        'Oceanfront Properties',
        'Dunes Estates',
        'Classic Manor',
        'Seaside Villas',
        'Championship Circle'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Historic Architecture Preservation',
          description: 'Specialized roofing that maintains the classic aesthetic of The Dunes Club\'s heritage homes'
        },
        {
          icon: null,
          title: 'Beach Club Oceanfront',
          description: 'Hurricane-resistant systems engineered for direct Atlantic exposure and salt air corrosion'
        },
        {
          icon: null,
          title: 'Golf Course Microclimate',
          description: 'Premium materials resistant to irrigation moisture and coastal humidity conditions'
        },
        {
          icon: null,
          title: 'Estate-Level Craftsmanship',
          description: 'Expert installation of slate, tile, copper, and premium architectural shingle systems'
        }
      ]}
      localStats={[
        { value: 'Rapid', label: 'Emergency Response' },
        { value: '$700K+', label: 'Avg. Estate Value Protected' },
        { value: '50+ Years', label: 'Premium Material Warranties' },
        { value: '5.0 Stars', label: 'Historic Community Ratings' }
      ]}
      nearbyAreas={[
        { name: 'Myrtle Beach', distance: '2 miles', href: '/locations/myrtle-beach' },
        { name: 'Grande Dunes', distance: '3 miles', href: '/locations/grande-dunes' },
        { name: 'Market Common', distance: '4 miles', href: '/locations/market-common' },
        { name: 'North Myrtle Beach', distance: '8 miles', href: '/locations/north-myrtle-beach' }
      ]}
      emergencyResponse="rapid"
      localTestimonials={[
        {
          name: 'Richard P.',
          review: 'Weather Shield beautifully restored our historic Dunes Club home\'s original slate roof. Their respect for architectural heritage combined with modern waterproofing techniques is exactly what our estate needed.',
          rating: 5
        },
        {
          name: 'Susan L.',
          review: 'After researching specialists in historic home roofing, Weather Shield stood out for their portfolio of heritage properties. Our clay tile roof honors The Dunes Club\'s character while providing superior storm protection.',
          rating: 5
        },
        {
          name: 'David K.',
          review: 'Weather Shield navigated our architectural review requirements perfectly and delivered a premium copper roof that enhances our beachfront property. Their expertise with luxury materials is unmatched.',
          rating: 5
        }
      ]}
    />
  );
}
