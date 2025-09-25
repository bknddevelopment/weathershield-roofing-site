import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'Conway SC Roofing Contractors | Weather Shield Roofing Services',
  description: 'Weather Shield Roofing - Leading Conway SC roofing contractors. Expert weathershield roofing installation, repair, storm damage restoration. 24/7 emergency service. Free estimates (843) 877-5539.',
  keywords: 'Conway roofing, roofing contractors Conway SC, Conway roof repair, Conway roof replacement, storm damage Conway, weathershield roofing Conway, weather shield roofing, Conway SC roofers, Horry County roofing, Conway storm protection',
  openGraph: {
    title: 'Conway Roofing Services | Weather Shield Roofing',
    description: 'Trusted roofing services in Conway, SC. Professional installation, repairs, and storm damage restoration.',
    url: 'https://weathershieldroofers.com/locations/conway',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: '/images/conway-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in Conway, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function ConwayPage() {
  return (
    <LocationPageTemplate
      city="Conway"
      state="SC"
      zipCodes={['29526', '29527', '29528']}
      population="24,000+"
      description="As Horry County's seat, Conway demands specialized roofing solutions for its unique climate challenges. Weather Shield Roofing has served Conway for 15+ years, protecting homes from the Waccamaw River flooding risks to Highway 501's rapid development. Our weathershield roofing systems are specifically designed for Conway's high humidity, hurricane threats, and seasonal storms. From historic downtown Conway to new developments near Coastal Carolina University, we provide comprehensive roofing services tailored to this growing riverside community's needs."
      neighborhoods={[
        'Downtown Conway',
        'Conway Medical Center Area',
        'Coastal Carolina University Area',
        'Highway 501 Corridor',
        'Waccamaw River District',
        'Kingston Community',
        'Homewood',
        'Rivertown'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Waccamaw River Flooding',
          description: 'Conway\'s proximity to the Waccamaw River creates unique moisture challenges requiring advanced waterproofing and superior drainage systems'
        },
        {
          icon: null,
          title: 'Hurricane & Tropical Storms',
          description: 'Though 15 miles inland, Conway experiences Category 1-3 hurricane winds requiring impact-resistant roofing and storm shield protection'
        },
        {
          icon: null,
          title: 'Extreme Humidity & Heat',
          description: 'Conway\'s 70%+ humidity and 90°F+ summers demand proper attic ventilation, algae-resistant shingles, and moisture barriers'
        },
        {
          icon: null,
          title: 'Severe Thunderstorms',
          description: 'Frequent afternoon storms bring hail, lightning, and 60+ mph winds requiring durable, impact-resistant roofing materials'
        }
      ]}
      localStats={[
        { value: '1-2 Hours', label: 'Response Time' },
        { value: '500+', label: 'Conway Homes Serviced' },
        { value: '15 Years', label: 'Serving Conway' },
        { value: '5.0 Stars', label: 'Average Rating' }
      ]}
      nearbyAreas={[
        { name: 'Myrtle Beach', distance: '15 miles', href: '/locations/myrtle-beach' },
        { name: 'Aynor', distance: '12 miles', href: '/locations/aynor' },
        { name: 'Loris', distance: '20 miles', href: '/locations/loris' },
        { name: 'Socastee', distance: '10 miles', href: '/locations/socastee' }
      ]}
      emergencyResponse="1-2 hours"
      localTestimonials={[
        {
          name: 'Sarah M. - Downtown Conway',
          review: 'Weather Shield Roofing replaced our historic home\'s roof after Hurricane Florence damage. They worked directly with State Farm insurance and preserved our home\'s character while adding modern storm protection. Best roofing contractors in Conway!',
          rating: 5
        },
        {
          name: 'Robert T. - CCU Area',
          review: 'Professional Conway roofing team with excellent local knowledge. They recommended algae-resistant shingles perfect for our humidity and installed superior ventilation. Fair pricing and weathershield roofing warranty gives us peace of mind.',
          rating: 5
        },
        {
          name: 'Jennifer K. - Highway 501',
          review: 'After getting multiple quotes from Conway SC roofers, Weather Shield offered the best value and warranty. Their storm shield roofing system has already weathered two major storms perfectly. Highly recommend!',
          rating: 5
        }
      ]}
    />
  );
}