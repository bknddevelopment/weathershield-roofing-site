import { Metadata } from 'next'
import LocationPageTemplate from '@/app/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Rockville SC Roofing Contractor | Coastal Island Roofing | WeatherShield',
  description: 'Rockville SC roofing specialists for Wadmalaw Island homes. Hurricane protection, salt air resistance, rural property roofing. Licensed, insured. Call (843) 877-5539 for service.',
  keywords: 'Rockville roofing, Wadmalaw Island roofing, coastal roofing SC, rural roofing Charleston, salt air roofing protection',
  openGraph: {
    title: 'Rockville SC Roofing Contractor | WeatherShield Roofing',
    description: 'Expert roofing for Rockville and Wadmalaw Island. Coastal protection, hurricane resistance, rural property specialists.',
    url: 'https://weathershieldroofers.com/locations/rockville',
    type: 'website',
  },
}

export default function RockvillePage() {
  return (
    <LocationPageTemplate
      city="Rockville"
      state="SC"
      zipCodes={['29470']}
      population="150+"
      description="In the remote coastal community of Rockville on Wadmalaw Island, where rural charm, waterfront properties, and Atlantic exposure create unique roofing challenges, WeatherShield Roofing delivers durable coastal solutions. Our experience with island properties, salt air conditions, and hurricane protection makes us the trusted contractor for Rockville and Wadmalaw homeowners."

      neighborhoods={[
        'Rockville Historic District',
        'Wadmalaw Island',
        'Church Creek',
        'Bohicket Peninsula',
        'Bear Island Area',
        'Maybank Highway Corridor',
        'Deep Water Vineyard Area',
        'Rural Wadmalaw'
      ]}

      weatherChallenges={[
        {
          icon: null,
          title: 'Coastal Hurricane Exposure',
          description: 'Rockville\'s barrier island location creates severe hurricane vulnerability. We install wind-rated roofing systems engineered for 130+ mph winds with advanced hurricane strapping, impact-resistant materials, and comprehensive waterproofing designed for direct Atlantic storm exposure.'
        },
        {
          icon: null,
          title: 'Extreme Salt Air Corrosion',
          description: 'Proximity to tidal creeks and the Atlantic accelerates material degradation. Our coastal roofing packages feature marine-grade fasteners, corrosion-resistant flashing, stainless steel components, and protective coatings engineered for harsh saltwater environments.'
        },
        {
          icon: null,
          title: 'Rural Island Access',
          description: 'Wadmalaw Island\'s remote location requires contractors who can work independently. We bring complete equipment and materials for efficient installations, and provide emergency services when island properties need immediate assistance after storms.'
        },
        {
          icon: null,
          title: 'Waterfront & Marsh Conditions',
          description: 'Many Rockville properties overlook tidal marshes creating unique moisture challenges. We install advanced ventilation systems and moisture barriers that handle humid Lowcountry conditions while protecting against water intrusion and mold.'
        }
      ]}

      localStats={[
        { value: '130+ MPH', label: 'Wind Rating' },
        { value: 'Island', label: 'Service Specialists' },
        { value: 'Marine', label: 'Grade Materials' },
        { value: '24/7', label: 'Emergency Response' }
      ]}

      nearbyAreas={[
        { name: 'Johns Island', distance: '8 miles', href: '/locations/johns-island' },
        { name: 'Seabrook Island', distance: '12 miles', href: '/locations/seabrook-island' },
        { name: 'Kiawah Island', distance: '15 miles', href: '/locations/kiawah-island' },
        { name: 'Charleston (Downtown)', distance: '28 miles', href: '/locations/charleston-downtown' },
        { name: 'Edisto Island', distance: '18 miles', href: '/locations/edisto-island' }
      ]}
    />
  )
}
