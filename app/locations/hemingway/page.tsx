import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Roofing Services in Hemingway, SC | Weather Shield Roofing',
  description: 'Professional roofing contractors serving Hemingway, SC. Quality roof installation, repair, and maintenance for residential and agricultural properties. Call (843) 493-4963.',
  keywords: 'Hemingway roofing, roofing contractors Hemingway SC, roof repair Hemingway, rural roofing Hemingway, farm roofing',
  openGraph: {
    title: 'Hemingway Roofing Services | Weather Shield Roofing',
    description: 'Trusted roofing services in Hemingway, SC. Serving rural communities with quality and integrity.',
    url: 'https://weathershieldroofers.com/locations/hemingway',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: '/images/hemingway-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Hemingway, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function HemingwayPage() {
  return (
    <LocationPageTemplate
      city="Hemingway"
      state="SC"
      zipCodes={['29554']}
      population="500+"
      description="Hemingway's rural setting and agricultural roots require roofing solutions that stand up to the elements while maintaining the character of this historic community. We provide honest, reliable service to protect your home and farm buildings."
      neighborhoods={[
        'Downtown Hemingway',
        'Highway 261 Corridor',
        'Stuckey Area',
        'Muddy Creek',
        'Fowler Area',
        'Lambert',
        'Nesmith',
        'Rural Hemingway'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Rural Winds',
          description: 'Open farmland creates stronger wind exposure'
        },
        {
          icon: null,
          title: 'Agricultural Conditions',
          description: 'Dust and farming activities affect roof longevity'
        },
        {
          icon: null,
          title: 'Seasonal Storms',
          description: 'Spring and summer storms require durable materials'
        }
      ]}
      localStats={[
        { value: '60-90 Min', label: 'Response Time' },
        { value: '100+', label: 'Properties Serviced' },
        { value: '7 Years', label: 'Serving Hemingway' },
        { value: '5.0 Stars', label: 'Average Rating' }
      ]}
      nearbyAreas={[
        { name: 'Georgetown', distance: '25 miles', href: '/locations/georgetown' },
        { name: 'Andrews', distance: '15 miles', href: '/locations/andrews' },
        { name: 'Johnsonville', distance: '12 miles', href: '/locations/johnsonville' },
        { name: 'Kingstree', distance: '20 miles', href: '/locations/kingstree' }
      ]}
      emergencyResponse="quickly"
      localTestimonials={[
        {
          name: 'Earl W.',
          review: 'They replaced roofs on our farmhouse and two barns. Honest pricing, quality work, and they cleaned up everything. Real professionals who understand rural needs.',
          rating: 5
        },
        {
          name: 'Dorothy C.',
          review: 'Weather Shield repaired our roof after wind damage. They came out quickly despite the distance and did excellent work. Trustworthy company!',
          rating: 5
        }
      ]}
    />
  );
}