import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Roofing Services in Loris, SC | Weather Shield Roofing',
  description: 'Expert roofing contractors serving Loris, SC and surrounding areas. Professional installation, repair, and maintenance. Agricultural building specialists. Call (843) 493-4963.',
  keywords: 'Loris roofing, roofing contractors Loris SC, roof repair Loris, agricultural roofing, tobacco barn roofing Loris',
  openGraph: {
    title: 'Loris Roofing Services | Weather Shield Roofing',
    description: 'Professional roofing services in Loris, SC. Residential, commercial, and agricultural roofing experts.',
    url: 'https://weathershieldroofers.com/locations/loris',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: '/images/loris-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Loris, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function LorisPage() {
  return (
    <LocationPageTemplate
      city="Loris"
      state="SC"
      zipCodes={['29569']}
      population="2,500+"
      description="Known as the Chicken Bog Capital, Loris combines small-town charm with agricultural importance. We provide roofing services for residential homes, commercial buildings, and agricultural structures throughout the Loris community."
      neighborhoods={[
        'Downtown Loris',
        'Highway 9 Business',
        'Highway 701 Area',
        'Bayboro',
        'Goretown',
        'Allsbrook',
        'Finklea',
        'Live Oak Area'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Agricultural Environment',
          description: 'Farm dust and chemicals require durable roofing materials'
        },
        {
          icon: null,
          title: 'Humidity & Heat',
          description: 'High moisture levels demand proper ventilation systems'
        },
        {
          icon: null,
          title: 'Storm Systems',
          description: 'Regular thunderstorms and occasional tropical impacts'
        }
      ]}
      localStats={[
        { value: '45-75 Min', label: 'Response Time' },
        { value: '200+', label: 'Properties Serviced' },
        { value: '8 Years', label: 'Serving Loris' },
        { value: '5.0 Stars', label: 'Average Rating' }
      ]}
      nearbyAreas={[
        { name: 'North Myrtle Beach', distance: '15 miles', href: '/locations/north-myrtle-beach' },
        { name: 'Conway', distance: '20 miles', href: '/locations/conway' },
        { name: 'Aynor', distance: '15 miles', href: '/locations/aynor' },
        { name: 'Tabor City, NC', distance: '10 miles', href: '/locations/tabor-city' }
      ]}
      emergencyResponse="45-75 minutes"
      localTestimonials={[
        {
          name: 'Randy S.',
          review: 'Weather Shield replaced the roof on our main house and storage buildings. They understand agricultural properties and did excellent work on all structures.',
          rating: 5
        },
        {
          name: 'Betty Ann J.',
          review: 'Professional service from start to finish. They helped with insurance claims after hail damage. Very pleased with our new roof and their customer service.',
          rating: 5
        }
      ]}
    />
  );
}