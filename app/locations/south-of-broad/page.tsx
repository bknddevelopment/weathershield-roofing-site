import { Metadata } from 'next'
import LocationPageTemplate from '@/app/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'South of Broad Roofing Contractor | Historic Home Specialists | WeatherShield',
  description: 'South of Broad Charleston roofing experts for historic mansions and estates. Preservation-approved materials, hurricane protection, architectural restoration. Licensed, insured. Call (843) 877-5539.',
  keywords: 'South of Broad roofing, historic home roofing Charleston, preservation roofing SC, mansion roofing Charleston, architectural restoration roofing',
  openGraph: {
    title: 'South of Broad Roofing Contractor | WeatherShield Roofing',
    description: 'Expert roofing for South of Broad historic homes. Preservation specialists, hurricane protection, museum-quality craftsmanship.',
    url: 'https://weathershieldroofers.com/locations/south-of-broad',
    type: 'website',
  },
}

export default function SouthOfBroadPage() {
  return (
    <LocationPageTemplate
      city="South of Broad"
      state="SC"
      zipCodes={['29401']}
      population="2,000+"
      description="In Charleston\'s most prestigious historic district South of Broad, where antebellum mansions, centuries-old architecture, and National Register properties demand the highest preservation standards, WeatherShield Roofing specializes in historically appropriate roofing that meets Board of Architectural Review requirements while providing modern hurricane protection. Our master craftsmen preserve Charleston\'s architectural heritage."

      neighborhoods={[
        'The Battery',
        'White Point Garden Area',
        'South Battery',
        'East Bay Street',
        'Meeting Street South',
        'Church Street',
        'Tradd Street',
        'Legare Street'
      ]}

      weatherChallenges={[
        {
          icon: null,
          title: 'Historic Preservation Requirements',
          description: 'South of Broad properties require Board of Architectural Review approval for all roofing work. We specialize in historically accurate materials including slate, clay tile, copper, and period-appropriate shingles installed using preservation-approved methods that maintain architectural authenticity.'
        },
        {
          icon: null,
          title: 'Hurricane & Coastal Storm Protection',
          description: 'These irreplaceable historic homes face direct harbor exposure to hurricanes. We engineer roofing systems that balance historical accuracy with modern wind ratings, waterproofing, and structural reinforcement to protect Charleston\'s architectural treasures through Atlantic storms.'
        },
        {
          icon: null,
          title: 'Antebellum Architecture Preservation',
          description: 'Many South of Broad homes date to the 18th and 19th centuries with unique roof structures. Our craftsmen understand historic construction techniques, working with architects and preservationists to restore and protect original framing, dormers, and architectural details.'
        },
        {
          icon: null,
          title: 'Salt Air & Harbor Corrosion',
          description: 'Proximity to Charleston Harbor creates severe corrosion conditions. We use museum-grade materials including copper flashing, slate, and specialty fasteners designed to last decades in harsh saltwater environments without compromising historic character.'
        }
      ]}

      localStats={[
        { value: 'BAR', label: 'Certified' },
        { value: 'Historic', label: 'Preservation Experts' },
        { value: 'Museum', label: 'Quality Standard' },
        { value: '150+ Years', label: 'Home Experience' }
      ]}

      nearbyAreas={[
        { name: 'French Quarter', distance: '0.5 miles', href: '/locations/french-quarter' },
        { name: 'Harleston Village', distance: '1 mile', href: '/locations/harleston-village' },
        { name: 'Ansonborough', distance: '1 mile', href: '/locations/ansonborough' },
        { name: 'Downtown Charleston', distance: '0.5 miles', href: '/locations/downtown-charleston' },
        { name: 'James Island', distance: '3 miles', href: '/locations/james-island' }
      ]}
    />
  )
}
