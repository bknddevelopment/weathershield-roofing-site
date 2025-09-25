import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Georgetown SC Roofing Contractors | Weather Shield Historic & Coastal Experts',
  description: 'Weather Shield Roofing - Georgetown SC\'s trusted roofing contractors. Specializing in historic district preservation and coastal weathershield roofing. Storm damage experts. Call (843) 877-5539.',
  keywords: 'Georgetown roofing, roofing contractors Georgetown SC, Georgetown roof repair, historic district roofing Georgetown, storm damage Georgetown, weathershield roofing Georgetown, weather shield roofing, coastal roofing Georgetown, Winyah Bay roofing, Georgetown SC roofers',
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
      description="Georgetown's unique position where the Sampit River meets Winyah Bay creates exceptional roofing challenges requiring specialized expertise. Weather Shield Roofing has protected Georgetown's historic antebellum homes and coastal properties for over a decade. Our weathershield roofing systems balance historic preservation requirements with modern storm protection technology. From the Historic District's 18th-century architecture to waterfront estates facing Atlantic storms, we provide comprehensive roofing solutions that respect Georgetown's heritage while ensuring superior protection against hurricanes, salt air corrosion, and coastal flooding risks."
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
          title: 'Atlantic Hurricane Exposure',
          description: 'Georgetown\'s coastal position faces direct hurricane impacts requiring storm shield roofing rated for 130+ mph winds and storm surge protection'
        },
        {
          icon: null,
          title: 'Severe Salt Air Corrosion',
          description: 'Winyah Bay proximity accelerates metal deterioration, demanding specialized weathershield roofing materials and corrosion-resistant fasteners'
        },
        {
          icon: null,
          title: 'Historic District Regulations',
          description: 'Strict preservation guidelines require expertise in period-appropriate materials while incorporating modern weather protection technology'
        },
        {
          icon: null,
          title: 'Tidal Flooding & Storm Surge',
          description: 'Low elevation near rivers requires enhanced waterproofing and drainage systems to handle coastal flooding events'
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
          name: 'William H. - Historic District',
          review: 'Weather Shield Roofing expertly restored our 1790s home\'s roof while meeting all historic preservation requirements. They sourced period-appropriate materials and added hidden storm protection. Best Georgetown roofing contractors for historic properties!',
          rating: 5
        },
        {
          name: 'Patricia L. - Waterfront',
          review: 'After Hurricane Ian, Weather Shield provided immediate emergency response to our Georgetown waterfront home. Their weathershield roofing system has exceptional salt resistance. True coastal roofing experts who understand Winyah Bay challenges.',
          rating: 5
        },
        {
          name: 'James R. - East Bay',
          review: 'Multiple Georgetown SC roofers couldn\'t handle our complex historic renovation. Weather Shield navigated preservation committee requirements perfectly while installing modern storm shield protection. Outstanding expertise and professionalism!',
          rating: 5
        }
      ]}
    />
  );
}