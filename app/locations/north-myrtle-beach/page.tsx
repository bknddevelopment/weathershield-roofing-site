import { Metadata } from 'next';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export const metadata: Metadata = {
  title: 'North Myrtle Beach Roofing Contractors | Weather Shield Coastal Experts',
  description: 'Weather Shield Roofing - Premier North Myrtle Beach roofing contractors. Expert weathershield roofing for beachfront properties, storm damage repair, luxury homes. 24/7 service (843) 877-5539.',
  keywords: 'North Myrtle Beach roofing, roofing contractors North Myrtle Beach SC, North Myrtle Beach roof repair, coastal roofing, beach house roofing, storm damage North Myrtle Beach, weathershield roofing, weather shield roofing, Cherry Grove roofing, Ocean Drive roofing',
  openGraph: {
    title: 'North Myrtle Beach Roofing Services | Weather Shield Roofing',
    description: 'Expert coastal roofing services in North Myrtle Beach, SC. Protecting beachfront properties since 2008.',
    url: 'https://weathershieldroofers.com/locations/north-myrtle-beach',
    siteName: 'Weather Shield Roofing',
    images: [
      {
        url: '/images/north-myrtle-beach-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Weather Shield Roofing Services in North Myrtle Beach, SC',
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function NorthMyrtleBeachPage() {
  return (
    <LocationPageTemplate
      city="North Myrtle Beach"
      state="SC"
      zipCodes={['29582', '29597', '29566']}
      population="18,000+"
      description="North Myrtle Beach's beachfront properties face the harshest roofing challenges on the Grand Strand, requiring specialized weathershield roofing expertise. Weather Shield Roofing has protected North Myrtle Beach homes from Cherry Grove to Barefoot Resort for 15+ years. Our storm shield roofing systems are engineered specifically for oceanfront exposure, withstanding Category 4 hurricane winds, relentless salt spray, and storm surge impacts. From luxury beachfront estates to high-rise condominiums, we provide comprehensive coastal roofing solutions that maximize protection while maintaining the aesthetic appeal North Myrtle Beach properties demand."
      neighborhoods={[
        'Cherry Grove',
        'Ocean Drive',
        'Crescent Beach',
        'Windy Hill',
        'Atlantic Beach',
        'Tilghman Beach',
        'Barefoot Resort',
        'Sea Mountain'
      ]}
      weatherChallenges={[
        {
          icon: null,
          title: 'Category 4 Hurricane Winds',
          description: 'Direct Atlantic exposure requires storm shield roofing rated for 150+ mph sustained winds with enhanced edge protection and impact resistance'
        },
        {
          icon: null,
          title: 'Extreme Salt Spray Corrosion',
          description: 'Beachfront properties face constant salt assault requiring marine-grade weathershield roofing materials and quarterly maintenance'
        },
        {
          icon: null,
          title: 'Storm Surge & Flooding',
          description: 'Oceanfront elevation demands reinforced roof-to-wall connections and superior waterproofing for storm surge protection'
        },
        {
          icon: null,
          title: 'Year-Round UV Exposure',
          description: 'Intense coastal sun requires UV-resistant materials and reflective coatings to prevent premature aging and reduce cooling costs'
        }
      ]}
      localStats={[
        { value: '30-60 Min', label: 'Response Time' },
        { value: '800+', label: 'Beach Homes Serviced' },
        { value: '15 Years', label: 'Coastal Experience' },
        { value: '5.0 Stars', label: 'Average Rating' }
      ]}
      nearbyAreas={[
        { name: 'Myrtle Beach', distance: '10 miles', href: '/locations/myrtle-beach' },
        { name: 'Little River', distance: '5 miles', href: '/locations/little-river' },
        { name: 'Loris', distance: '15 miles', href: '/locations/loris' },
        { name: 'Conway', distance: '20 miles', href: '/locations/conway' }
      ]}
      emergencyResponse="rapid"
      localTestimonials={[
        {
          name: 'David R. - Cherry Grove Beach',
          review: 'Our oceanfront home required specialized roofing for extreme conditions. Weather Shield installed storm shield protection that survived two hurricanes perfectly. Best North Myrtle Beach roofing contractors - worth every penny for the peace of mind!',
          rating: 5
        },
        {
          name: 'Linda S. - Ocean Drive',
          review: 'After Hurricane Ian damaged our roof, Weather Shield responded rapidly! Their weathershield roofing system with enhanced salt protection is perfect for beachfront properties. Exceptional North Myrtle Beach roofing expertise.',
          rating: 5
        },
        {
          name: 'Michael T. - Barefoot Resort',
          review: 'Weather Shield Roofing replaced our luxury home\'s roof with incredible attention to detail. They understand coastal challenges and provided a comprehensive warranty. The energy-efficient materials cut our cooling costs 40%!',
          rating: 5
        }
      ]}
    />
  );
}