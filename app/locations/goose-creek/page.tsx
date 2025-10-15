import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Goose Creek SC Roofing Services | Weather Shield Roofing',
  description: 'Professional roofing services in Goose Creek, SC. Licensed roofers serving Goose Creek with 24/7 emergency repairs, roof replacements, and storm damage restoration. Call (843) 877-5539.',
  keywords: 'Goose Creek roofing, roofing contractors Goose Creek SC, Goose Creek roof repair, storm damage Goose Creek, emergency roofing Goose Creek, roofing companies Goose Creek',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/goose-creek',
  },
  openGraph: {
    title: 'Goose Creek SC Roofing Services | Weather Shield Roofing',
    description: 'Trusted roofing contractor in Goose Creek, SC. Expert residential and commercial roofing services with fast emergency response.',
    url: 'https://weathershieldroofers.com/locations/goose-creek',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/goose-creek-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Goose Creek, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function GooseCreekPage() {
  return (
    <LocationPageTemplate
      city="Goose Creek"
      state="SC"
      zipCodes={['29445']}
      population="45,946"
      description="Proudly serving Goose Creek, SC, a vibrant community between Charleston and Summerville, we deliver top-quality roofing solutions for residential and commercial properties. Our team understands the unique weather challenges of the Lowcountry and provides durable, long-lasting roofing systems."
      neighborhoods={[
        'Crowfield Plantation',
        'Ashborough',
        'Foster Creek',
        'Oakcrest',
        'Sedgefield',
        'Westlake',
        'Tanner Plantation',
        'Wescott Plantation',
        'Whitehall',
        'Stratford'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Hurricane Season',
          description: 'Lowcountry location requires storm-resistant roofing materials'
        },
        {
          icon: null,
          title: 'Heavy Thunderstorms',
          description: 'Frequent severe storms demand superior waterproofing systems'
        },
        {
          icon: null,
          title: 'High Humidity',
          description: 'Year-round moisture requires ventilation and mold-resistant materials'
        },
        {
          icon: null,
          title: 'Tree Coverage',
          description: 'Dense tree canopy increases debris accumulation and roof wear'
        }
      ]}
      localStats={[
        { value: '24/7', label: 'Response Time' },
        { value: '400+', label: 'Goose Creek Homes Protected' },
        { value: '10+ Years', label: 'Serving Goose Creek' },
        { value: '5.0 Stars', label: 'Customer Rating' }
      ]}
      nearbyAreas={[
        { name: 'Summerville', distance: '10 miles', href: '/locations/summerville' },
        { name: 'Hanahan', distance: '8 miles', href: '/locations/hanahan' },
        { name: 'Charleston', distance: '20 miles', href: '/locations/charleston-sc' },
        { name: 'Moncks Corner', distance: '12 miles', href: '/locations/moncks-corner' },
        { name: 'Mount Pleasant', distance: '18 miles', href: '/locations/mount-pleasant' }
      ]}
      emergencyResponse="24/7"
      localTestimonials={[
        {
          name: 'Mark W.',
          review: 'Weather Shield replaced our roof in Crowfield after hail damage. They worked directly with our insurance and made the whole process seamless. The new roof looks fantastic!',
          rating: 5
        },
        {
          name: 'Patricia S.',
          review: 'We had severe storm damage and called Weather Shield for emergency service. They arrived quickly, secured the damage, and completed repairs professionally. Excellent communication throughout!',
          rating: 5
        },
        {
          name: 'James D.',
          review: 'Our Goose Creek business needed a complete roof replacement. Weather Shield completed the project ahead of schedule with zero interruption to operations. Top-notch work!',
          rating: 5
        }
      ]}
    />
  );
}
