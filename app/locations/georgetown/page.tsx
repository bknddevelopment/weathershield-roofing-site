import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Roofing Services in Georgetown, SC | Weather Shield Roofing',
  description: 'Expert roofing contractors serving Georgetown, SC. Professional installation, repair, and maintenance services. Historic district specialists. Call (843) 493-4963.',
  keywords: 'Georgetown roofing, roofing contractors Georgetown SC, roof repair Georgetown, historic district roofing, storm damage Georgetown',
  openGraph: {
    title: 'Georgetown Roofing Services | Weather Shield Roofing',
    description: 'Trusted roofing services in Georgetown, SC. Specializing in historic homes and coastal properties.',
    url: 'https://weathershieldroofers.com/locations/georgetown',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: '/images/georgetown-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Georgetown, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function GeorgetownPage() {
  return (
    <LocationPageTemplate
      city="Georgetown"
      state="SC"
      zipCodes={['29440', '29442']}
      population="9,000+"
      description="Georgetown's historic charm and coastal location require specialized roofing expertise. From the Historic District's antebellum homes to modern waterfront properties, we provide tailored roofing solutions that respect architectural heritage while ensuring modern protection."
      neighborhoods={[
        'Historic District',
        'East Bay Street',
        'Waterfront District',
        'Winyah Bay Area',
        'Pennyroyal',
        'Maryville',
        'West End',
        'Belle Isle'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Coastal Storms',
          description: 'Direct exposure to Atlantic storms requires robust roofing systems'
        },
        {
          icon: null,
          title: 'Salt Air Corrosion',
          description: 'Proximity to ocean demands corrosion-resistant materials'
        },
        {
          icon: null,
          title: 'Historic Preservation',
          description: 'Special considerations for maintaining historic architectural integrity'
        }
      ]}
      localStats={[
        { value: '2-3 Hours', label: 'Response Time' },
        { value: '200+', label: 'Georgetown Homes Serviced' },
        { value: '10 Years', label: 'Serving Georgetown' },
        { value: '5.0 Stars', label: 'Average Rating' }
      ]}
      nearbyAreas={[
        { name: 'Pawleys Island', distance: '12 miles', href: '/locations/pawleys-island' },
        { name: 'Murrells Inlet', distance: '15 miles', href: '/locations/murrells-inlet' },
        { name: 'Andrews', distance: '20 miles', href: '/locations/andrews' },
        { name: 'Hemingway', distance: '25 miles', href: '/locations/hemingway' }
      ]}
      emergencyResponse="2-3 hours"
      localTestimonials={[
        {
          name: 'William H.',
          review: 'They did excellent work on our historic home, maintaining the original character while improving protection. Very knowledgeable about Georgetown building codes.',
          rating: 5
        },
        {
          name: 'Patricia L.',
          review: 'Fast response after the last hurricane. They tarped our roof immediately and completed repairs quickly. True professionals who understand coastal roofing.',
          rating: 5
        }
      ]}
    />
  );
}