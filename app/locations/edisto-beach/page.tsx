import { Metadata } from 'next'
import LocationPageTemplate from '@/app/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Edisto Beach Roofing Contractor | Beach Home Specialists | WeatherShield',
  description: 'Edisto Beach SC roofing experts for beach cottages and vacation homes. Hurricane-resistant roofing, salt air protection, coastal weatherproofing. Licensed, insured. Call (843) 877-5539 today.',
  keywords: 'Edisto Beach roofing, beach cottage roofing SC, vacation home roofing, hurricane resistant roofing Edisto, coastal roofing Charleston',
  openGraph: {
    title: 'Edisto Beach Roofing Contractor | WeatherShield Roofing',
    description: 'Expert roofing for Edisto Beach homes. Hurricane protection, beach cottage specialists, salt air resistance.',
    url: 'https://weathershieldroofers.com/locations/edisto-beach',
    type: 'website',
  },
}

export default function EdistoBeachPage() {
  return (
    <LocationPageTemplate
      city="Edisto Beach"
      state="SC"
      zipCodes={['29438']}
      population="400+"
      description="In the laid-back coastal community of Edisto Beach, where charming beach cottages and family vacation homes face Atlantic storms and year-round salt air exposure, WeatherShield Roofing delivers durable, hurricane-resistant roofing solutions. Our expertise in barrier island construction and rental property requirements makes us the go-to contractor for Edisto homeowners and investors."

      neighborhoods={[
        'Palmetto Boulevard',
        'Jungle Shores',
        'Wyndham Ocean Ridge',
        'Edisto Beach Colony',
        'Edingsville Beach',
        'Fairfield Ocean Ridge',
        'Indian Field',
        'Edisto Island'
      ]}

      weatherChallenges={[
        {
          icon: null,
          title: 'Direct Hurricane Exposure',
          description: 'Edisto Beach faces direct Atlantic hurricane paths with minimal protection. We install wind-rated roofing systems engineered for 140+ mph winds, using advanced fastening systems, hurricane straps, and impact-resistant materials designed for maximum storm protection.'
        },
        {
          icon: null,
          title: 'Vacation Rental Demands',
          description: 'Many Edisto properties serve as vacation rentals requiring low-maintenance, durable roofs. Our installations prioritize longevity and weatherproofing to minimize interruptions, protect rental income, and reduce long-term maintenance costs.'
        },
        {
          icon: null,
          title: 'Severe Salt Air Corrosion',
          description: 'Constant ocean exposure accelerates roof deterioration. We use corrosion-resistant materials including stainless steel fasteners, marine-grade flashing, and specially coated shingles that withstand harsh saltwater environments year after year.'
        },
        {
          icon: null,
          title: 'Remote Island Location',
          description: 'Edisto\'s relative isolation requires contractors who can handle complete projects efficiently. We bring all necessary materials and equipment to complete installations without delays, and provide emergency services when island properties need immediate assistance.'
        }
      ]}

      localStats={[
        { value: '140+ MPH', label: 'Wind Rating' },
        { value: 'Rental', label: 'Property Experts' },
        { value: '24/7', label: 'Island Service' },
        { value: '15+ Years', label: 'Coastal Experience' }
      ]}

      nearbyAreas={[
        { name: 'Seabrook Island', distance: '22 miles', href: '/locations/seabrook-island' },
        { name: 'Kiawah Island', distance: '25 miles', href: '/locations/kiawah-island' },
        { name: 'Johns Island', distance: '28 miles', href: '/locations/johns-island' },
        { name: 'Charleston (Downtown)', distance: '45 miles', href: '/locations/charleston-downtown' },
        { name: 'Beaufort', distance: '35 miles', href: '/locations/beaufort' }
      ]}
    />
  )
}
