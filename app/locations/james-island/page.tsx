import { Metadata } from 'next'
import LocationPageTemplate from '@/app/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'James Island Roofing Contractor | Storm Damage Specialists | WeatherShield',
  description: 'James Island SC roofing experts for residential and commercial properties. Hurricane damage repair, roof replacement, emergency tarping. Licensed, insured. Call (843) 877-5539 for immediate service.',
  keywords: 'James Island roofing, storm damage repair James Island, hurricane roofing SC, roof replacement Charleston, emergency roofing',
  openGraph: {
    title: 'James Island Roofing Contractor | WeatherShield Roofing',
    description: 'Expert roofing for James Island homes and businesses. Storm damage specialists, emergency service, quality installations.',
    url: 'https://weathershieldroofers.com/locations/james-island',
    type: 'website',
  },
}

export default function JamesIslandPage() {
  return (
    <LocationPageTemplate
      city="James Island"
      state="SC"
      zipCodes={['29412']}
      population="12,000+"
      description="In the diverse coastal community of James Island, where historic neighborhoods, modern developments, and waterfront properties face Charleston\'s storm challenges, WeatherShield Roofing provides comprehensive roofing solutions for every home style. Our local expertise, rapid emergency response, and quality craftsmanship make us James Island\'s trusted roofing contractor."

      neighborhoods={[
        'Riverland Terrace',
        'Parrot Creek',
        'Harbor View',
        'Lighthouse Point',
        'The Groves',
        'Secessionville',
        'Central Park',
        'Fort Johnson Estates'
      ]}

      weatherChallenges={[
        {
          icon: null,
          title: 'Hurricane & Coastal Storm Damage',
          description: 'James Island\'s proximity to Charleston Harbor and Folly Beach creates severe storm exposure. We install hurricane-rated roofing systems with advanced wind protection up to 130 mph, impact-resistant shingles, and comprehensive waterproofing that safeguards your home through Atlantic storm seasons.'
        },
        {
          icon: null,
          title: 'Saltwater & Marsh Air Corrosion',
          description: 'Waterfront and marsh-facing homes experience accelerated material degradation. Our coastal roofing packages include corrosion-resistant fasteners, marine-grade flashing, and protective underlayment designed to withstand humid, salty Lowcountry conditions.'
        },
        {
          icon: null,
          title: 'Severe Thunderstorms & Wind',
          description: 'Spring and summer bring powerful thunderstorms with damaging winds and hail. We use Class 4 impact-resistant shingles with enhanced wind ratings and secure fastening systems that protect against Lowcountry storm damage.'
        },
        {
          icon: null,
          title: 'Historic Home Preservation',
          description: 'Many James Island homes feature historic architecture requiring specialized roofing approaches. Our craftsmen deliver period-appropriate installations using modern materials that preserve character while providing contemporary protection and performance.'
        }
      ]}

      localStats={[
        { value: '130+ MPH', label: 'Wind Rating' },
        { value: '24/7', label: 'Emergency Service' },
        { value: 'Local', label: 'Charleston Team' },
        { value: '100%', label: 'Satisfaction Rate' }
      ]}

      nearbyAreas={[
        { name: 'Folly Beach', distance: '3 miles', href: '/locations/folly-beach' },
        { name: 'Charleston (Downtown)', distance: '5 miles', href: '/locations/charleston-downtown' },
        { name: 'West Ashley', distance: '4 miles', href: '/locations/west-ashley' },
        { name: 'Johns Island', distance: '6 miles', href: '/locations/johns-island' },
        { name: 'Kiawah Island', distance: '15 miles', href: '/locations/kiawah-island' }
      ]}
    />
  )
}
