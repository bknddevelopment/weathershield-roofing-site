import { Metadata } from 'next'
import LocationPageTemplate from '@/app/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Folly Beach Roofing Contractor | Hurricane-Resistant Roofs | WeatherShield',
  description: 'Folly Beach SC roofing experts specializing in hurricane-resistant roofs, salt air protection, and coastal weatherproofing. Licensed, insured, 5-star rated. Call (843) 877-5539 for free inspection.',
  keywords: 'Folly Beach roofing, hurricane resistant roofing Folly Beach, coastal roofing SC, salt air roofing protection, barrier island roofing',
  openGraph: {
    title: 'Folly Beach Roofing Contractor | WeatherShield Roofing',
    description: 'Expert coastal roofing services for Folly Beach homes. Hurricane-resistant materials, salt air protection, 24/7 emergency service.',
    url: 'https://weathershieldroofers.com/locations/folly-beach',
    type: 'website',
  },
}

export default function FollyBeachPage() {
  return (
    <LocationPageTemplate
      city="Folly Beach"
      state="SC"
      zipCodes={['29439']}
      population="2,600+"
      description="In the vibrant beach community of Folly Beach, where salt air, hurricane winds, and intense coastal sun challenge every roof, WeatherShield Roofing delivers specialized barrier island roofing solutions. Our hurricane-resistant installations and salt air protection systems keep your beach home safe year-round."

      neighborhoods={[
        'West Ashley Avenue',
        'East Ashley Avenue',
        'Center Street District',
        'Folly Beach Shores',
        'East Cooper Avenue',
        'Folly River Park Area',
        'West Hudson Avenue',
        'East Hudson Avenue'
      ]}

      weatherChallenges={[
        {
          icon: null,
          title: 'Hurricane & Tropical Storm Threats',
          description: 'As a barrier island, Folly Beach faces direct exposure to Atlantic hurricanes and tropical storms. We install wind-rated roofing systems engineered to withstand 140+ mph winds with advanced fastening and hurricane strapping.'
        },
        {
          icon: null,
          title: 'Salt Air Corrosion',
          description: 'Constant ocean spray accelerates metal corrosion and material degradation. Our coastal roofing packages include corrosion-resistant materials, stainless steel fasteners, and protective coatings designed specifically for saltwater environments.'
        },
        {
          icon: null,
          title: 'Extreme UV & Heat Exposure',
          description: 'Intense coastal sunlight and heat cause rapid shingle deterioration. We use high-albedo roofing materials with advanced UV protection to extend roof life and reduce cooling costs in beach homes.'
        },
        {
          icon: null,
          title: 'Storm Surge & Flooding',
          description: 'Low elevation puts Folly Beach homes at risk during storm surge events. Our waterproofing systems include enhanced underlayment and drainage solutions to protect against water intrusion.'
        }
      ]}

      localStats={[
        { value: '140+ MPH', label: 'Wind Rating' },
        { value: '24/7', label: 'Storm Response' },
        { value: '15+ Years', label: 'Coastal Experience' },
        { value: '100%', label: 'Satisfaction Rate' }
      ]}

      nearbyAreas={[
        { name: 'James Island', distance: '3 miles', href: '/locations/james-island' },
        { name: 'Charleston (Downtown)', distance: '12 miles', href: '/locations/charleston-downtown' },
        { name: 'West Ashley', distance: '8 miles', href: '/locations/west-ashley' },
        { name: 'Johns Island', distance: '10 miles', href: '/locations/johns-island' },
        { name: 'Kiawah Island', distance: '15 miles', href: '/locations/kiawah-island' }
      ]}
    />
  )
}
