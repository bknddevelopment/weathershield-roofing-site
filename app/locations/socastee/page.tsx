import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Roofing Services in Socastee, SC | Weather Shield Roofing',
  description: 'Trusted roofing contractors serving Socastee, SC. Professional roof installation, repair, and maintenance. Serving all Socastee neighborhoods. Call (843) 493-4963.',
  keywords: 'Socastee roofing, roofing contractors Socastee SC, roof repair Socastee, roof replacement Socastee, Forestbrook roofing',
  openGraph: {
    title: 'Socastee Roofing Services | Weather Shield Roofing',
    description: 'Professional roofing services in Socastee, SC. Protecting homes from Forestbrook to the Intracoastal.',
    url: 'https://weathershieldroofers.com/locations/socastee',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: '/images/socastee-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Socastee, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function SocasteePage() {
  return (
    <LocationPageTemplate
      city="Socastee"
      state="SC"
      zipCodes={['29575', '29588', '29579']}
      population="25,000+"
      description="Socastee's diverse neighborhoods, from established Forestbrook to newer developments, require versatile roofing solutions. We provide expert services tailored to each community's unique needs, ensuring lasting protection for your home."
      neighborhoods={[
        'Forestbrook',
        'Palmetto Greens',
        'Wild Wing Plantation',
        'Waterbridge',
        'Blackmoor',
        'Arrowhead',
        'River Oaks',
        'Socastee Creeks'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Flooding Risk',
          description: 'Low-lying areas require superior water management systems'
        },
        {
          icon: null,
          title: 'High Humidity',
          description: 'Persistent moisture demands excellent ventilation solutions'
        },
        {
          icon: null,
          title: 'Storm Damage',
          description: 'Regular severe weather requires durable roofing materials'
        }
      ]}
      localStats={[
        { value: '30-45 Min', label: 'Response Time' },
        { value: '600+', label: 'Socastee Homes Serviced' },
        { value: '12 Years', label: 'Serving Socastee' },
        { value: '5.0 Stars', label: 'Average Rating' }
      ]}
      nearbyAreas={[
        { name: 'Myrtle Beach', distance: '5 miles', href: '/locations/myrtle-beach' },
        { name: 'Conway', distance: '10 miles', href: '/locations/conway' },
        { name: 'Surfside Beach', distance: '8 miles', href: '/locations/surfside-beach' },
        { name: 'Garden City', distance: '10 miles', href: '/locations/garden-city' }
      ]}
      emergencyResponse="rapid"
      localTestimonials={[
        {
          name: 'Karen M.',
          review: 'Weather Shield replaced our roof in Forestbrook. They were professional, efficient, and left our property spotless. Best roofing company in the area!',
          rating: 5
        },
        {
          name: 'James T.',
          review: 'Quick response for storm damage repair. They worked with our insurance company and made the process stress-free. Highly recommend for Socastee residents.',
          rating: 5
        }
      ]}
    />
  );
}