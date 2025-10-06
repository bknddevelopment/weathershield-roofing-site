import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Summerville SC Roofing Services | Weather Shield Roofing',
  description: 'Professional roofing services in Summerville, SC. Licensed roofers serving Summerville with 24/7 emergency repairs, roof replacements, and storm damage restoration. Call (843) 877-5539.',
  keywords: 'Summerville roofing, roofing contractors Summerville SC, Summerville roof repair, storm damage Summerville, emergency roofing Summerville, roofing companies Summerville',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations/summerville',
  },
  openGraph: {
    title: 'Summerville SC Roofing Services | Weather Shield Roofing',
    description: 'Trusted roofing contractor in Summerville, SC. Expert residential and commercial roofing services with fast emergency response.',
    url: 'https://weathershieldroofers.com/locations/summerville',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/summerville-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Summerville, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function SummervillePage() {
  return (
    <LocationPageTemplate
      city="Summerville"
      state="SC"
      zipCodes={['29483', '29485', '29486']}
      population="54,062"
      description="In Summerville, SC, known as the 'Flowertown in the Pines,' we provide comprehensive roofing services tailored to our community's unique needs. From residential roof replacements to commercial maintenance programs, our team delivers exceptional quality and customer service to protect your investment."
      neighborhoods={[
        'Downtown Summerville',
        'Nexton',
        'Cane Bay Plantation',
        'Carnes Crossroads',
        'Oakbrook',
        'Pine Forest',
        'Legend Oaks Plantation',
        'White Gables',
        'Brownsville',
        'Knightsville'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Hurricane Threats',
          description: 'Proximity to coast requires hurricane-resistant roofing systems'
        },
        {
          icon: null,
          title: 'Heavy Rainfall',
          description: 'High annual rainfall demands superior drainage and waterproofing'
        },
        {
          icon: null,
          title: 'High Humidity',
          description: 'Constant humidity accelerates roof deterioration and mold growth'
        },
        {
          icon: null,
          title: 'Pine Tree Debris',
          description: 'Pine needles and branches require regular maintenance and durable materials'
        }
      ]}
      localStats={[
        { value: '24/7', label: 'Response Time' },
        { value: '500+', label: 'Summerville Homes Protected' },
        { value: '10+ Years', label: 'Serving Summerville' },
        { value: '5.0 Stars', label: 'Customer Rating' }
      ]}
      nearbyAreas={[
        { name: 'Charleston', distance: '25 miles', href: '/locations/charleston-sc' },
        { name: 'Goose Creek', distance: '10 miles', href: '/locations/goose-creek' },
        { name: 'Hanahan', distance: '15 miles', href: '/locations/hanahan' },
        { name: 'Mount Pleasant', distance: '30 miles', href: '/locations/mount-pleasant' },
        { name: 'Moncks Corner', distance: '20 miles', href: '/locations/moncks-corner' }
      ]}
      emergencyResponse="24/7"
      localTestimonials={[
        {
          name: 'Jennifer M.',
          review: 'Weather Shield replaced our roof in Nexton after storm damage. The crew was professional, efficient, and cleaned up perfectly. The new roof looks amazing and we have complete peace of mind!',
          rating: 5
        },
        {
          name: 'David L.',
          review: 'Our Cane Bay home needed emergency repairs after a tree fell during a storm. Weather Shield responded rapidly and had it secured the same day. Outstanding service!',
          rating: 5
        },
        {
          name: 'Sarah B.',
          review: 'We hired Weather Shield for our commercial property in downtown Summerville. They completed the project on time, within budget, and with minimal disruption to our business. Highly recommend!',
          rating: 5
        }
      ]}
    />
  );
}
