import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Prince Creek Roofing | Luxury Roofing Services Murrells Inlet SC | Weather Shield',
  description: 'Premium roofing services for Prince Creek luxury homes. Weather Shield Roofing specializes in high-end roofing, architectural shingles, tile, slate & metal roofing. Expert craftsmanship for upscale Murrells Inlet properties. 24/7 emergency service.',
  keywords: 'prince creek roofing, luxury roofing murrells inlet, premium roofing services, architectural shingles, tile roofing, slate roofing, metal roofing, upscale roofing contractor, prince creek sc',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/prince-creek',
  },
  openGraph: {
    title: 'Prince Creek Roofing | Luxury Roofing Contractor | Weather Shield Roofing',
    description: 'Premium roofing services for Prince Creek luxury homes. Architectural shingles, tile, slate & metal roofing experts.',
    url: 'https://weathershieldroofers.com/locations/prince-creek',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/prince-creek-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Luxury Roofing Services in Prince Creek, Murrells Inlet SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function PrinceCreekPage() {
  return (
    <LocationPageTemplate
      city="Prince Creek"
      state="SC"
      zipCodes={['29576']}
      population="2,500+"
      description="Weather Shield Roofing provides premium roofing services tailored for Prince Creek's luxury homes. Our expertise in high-end materials including architectural shingles, tile, slate, and metal roofing ensures your upscale property receives the craftsmanship it deserves. We understand the unique architectural requirements of Prince Creek's golf course community."
      neighborhoods={[
        'Prince Creek North',
        'Prince Creek South',
        'Prince Creek Golf',
        'Waterfront Estates',
        'Championship Villas',
        'Creekside Manor',
        'Heritage Oaks',
        'Lakefront Properties'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Premium Material Protection',
          description: 'Specialized installation of luxury roofing materials including slate, tile, and custom architectural shingles'
        },
        {
          icon: null,
          title: 'Golf Course Microclimate',
          description: 'Expert protection against moisture and humidity unique to golf course-adjacent properties'
        },
        {
          icon: null,
          title: 'Coastal Salt Air Defense',
          description: 'High-end materials resistant to salt air corrosion and coastal weather conditions'
        },
        {
          icon: null,
          title: 'Architectural Preservation',
          description: 'Custom roofing solutions that maintain the aesthetic integrity of luxury home designs'
        }
      ]}
      localStats={[
        { value: 'Rapid', label: 'Emergency Response' },
        { value: '$500K+', label: 'Avg. Home Value Served' },
        { value: '50+ Years', label: 'Premium Material Warranties' },
        { value: '5.0 Stars', label: 'Luxury Home Ratings' }
      ]}
      nearbyAreas={[
        { name: 'Murrells Inlet', distance: '2 miles', href: '/locations/murrells-inlet' },
        { name: 'Pawleys Island', distance: '5 miles', href: '/locations/pawleys-island' },
        { name: 'Litchfield Beach', distance: '7 miles', href: '/locations/litchfield-beach' },
        { name: 'Garden City', distance: '4 miles', href: '/locations/garden-city' }
      ]}
      emergencyResponse="rapid"
      localTestimonials={[
        {
          name: 'Robert M.',
          review: 'Weather Shield installed a beautiful clay tile roof on our Prince Creek waterfront home. Their attention to detail and expertise with luxury materials exceeded our expectations. True craftsmen!',
          rating: 5
        },
        {
          name: 'Patricia S.',
          review: 'After researching multiple high-end roofing contractors, Weather Shield stood out for their experience with architectural homes. Our custom slate roof is stunning and perfectly complements our Prince Creek estate.',
          rating: 5
        },
        {
          name: 'James W.',
          review: 'Weather Shield understands the unique needs of luxury properties. They coordinated perfectly with our HOA and delivered a premium metal roof that enhances our home\'s value. Exceptional service throughout.',
          rating: 5
        }
      ]}
    />
  );
}
