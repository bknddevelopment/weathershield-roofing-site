import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Ocean Creek Resort Roofing | Luxury Beach Resort Community | Weather Shield',
  description: 'Premium roofing for Ocean Creek Resort luxury beach community. Weather Shield specializes in resort property roofing, villas, condos, townhomes. North Myrtle Beach SC. Oceanfront protection experts. 24/7 emergency response.',
  keywords: 'ocean creek resort roofing, beach resort roofing, luxury villa roofing, north myrtle beach resort, oceanfront roofing, ocean creek sc',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/ocean-creek-resort',
  },
  openGraph: {
    title: 'Ocean Creek Resort Roofing | Luxury Beach Resort Roofing | Weather Shield',
    description: 'Premium roofing for Ocean Creek Resort luxury beach community. Resort property roofing experts.',
    url: 'https://weathershieldroofers.com/locations/ocean-creek-resort',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/ocean-creek-resort-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Luxury Beach Resort Roofing in Ocean Creek Resort, North Myrtle Beach SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function OceanCreekResortPage() {
  return (
    <LocationPageTemplate
      city="Ocean Creek Resort"
      state="SC"
      zipCodes={['29582']}
      population="2,800+"
      description="Weather Shield Roofing provides resort-grade roofing services for Ocean Creek's expansive beachfront community. Our expertise in luxury multi-family properties, from oceanfront villas to lakefront condos and townhomes, ensures HOAs and property owners receive superior storm protection and long-term value."
      neighborhoods={[
        'Oceanfront Villas',
        'North Tower',
        'South Tower',
        'Lakefront Condos',
        'Townhome Collections',
        'Beach Club Residences',
        'Garden Villas',
        'Resort Cottages'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Beachfront Hurricane Protection',
          description: 'High-wind rated roofing systems engineered for direct Atlantic oceanfront exposure'
        },
        {
          icon: null,
          title: 'Large-Scale Resort Management',
          description: 'Expert coordination of multi-building roofing projects with minimal disruption to residents'
        },
        {
          icon: null,
          title: 'Salt Air & UV Resistance',
          description: 'Premium materials specifically selected for accelerated coastal weathering conditions'
        },
        {
          icon: null,
          title: 'Rental Property Optimization',
          description: 'Durable, low-maintenance roofing solutions ideal for vacation rental property portfolios'
        }
      ]}
      localStats={[
        { value: 'Rapid', label: 'Emergency Response' },
        { value: '57 Acres', label: 'Resort Community Served' },
        { value: '50+ Years', label: 'Premium Warranties' },
        { value: '5.0 Stars', label: 'Resort Property Ratings' }
      ]}
      nearbyAreas={[
        { name: 'North Myrtle Beach', distance: '1 mile', href: '/locations/north-myrtle-beach' },
        { name: 'Windy Hill', distance: '3 miles', href: '/locations/windy-hill' },
        { name: 'Barefoot Resort', distance: '4 miles', href: '/locations/barefoot-resort' },
        { name: 'Tidewater Plantation', distance: '5 miles', href: '/locations/tidewater-plantation' }
      ]}
      emergencyResponse="rapid"
      localTestimonials={[
        {
          name: 'Ocean Creek HOA',
          review: 'Weather Shield managed our North Tower re-roofing project with exceptional professionalism. Their experience with large resort properties and coordination with our management team made the entire process seamless.',
          rating: 5
        },
        {
          name: 'Thomas K.',
          review: 'After Hurricane Matthew damaged our oceanfront villa roof, Weather Shield provided emergency tarping and completed permanent repairs quickly. Their understanding of resort community standards is outstanding.',
          rating: 5
        },
        {
          name: 'Vacation Rentals Inc.',
          review: 'We manage multiple Ocean Creek rental properties. Weather Shield\'s hurricane-resistant systems and efficient project timelines minimize guest disruption while protecting our investments. Highly recommended!',
          rating: 5
        }
      ]}
    />
  );
}
