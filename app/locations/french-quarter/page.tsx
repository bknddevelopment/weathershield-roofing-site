import { Metadata } from 'next'
import LocationPageTemplate from '@/app/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'French Quarter Charleston Roofing | Historic District Experts | WeatherShield',
  description: 'French Quarter Charleston roofing specialists for historic homes and buildings. BAR-approved materials, preservation roofing, hurricane protection. Licensed, insured. Call (843) 877-5539.',
  keywords: 'French Quarter roofing Charleston, historic district roofing, BAR approved roofing, Charleston preservation roofing, downtown Charleston roofing',
  openGraph: {
    title: 'French Quarter Charleston Roofing Contractor | WeatherShield Roofing',
    description: 'Expert roofing for French Quarter historic properties. Preservation specialists, architectural accuracy, modern protection.',
    url: 'https://weathershieldroofers.com/locations/french-quarter',
    type: 'website',
  },
}

export default function FrenchQuarterPage() {
  return (
    <LocationPageTemplate
      city="French Quarter"
      state="SC"
      zipCodes={['29401']}
      population="1,500+"
      description="In Charleston\'s historic French Quarter, where 18th-century architecture, cobblestone streets, and National Historic Landmark status demand exceptional preservation expertise, WeatherShield Roofing delivers historically accurate roofing solutions approved by the Board of Architectural Review. Our craftsmen combine authentic materials with modern engineering to protect the Quarter\'s irreplaceable buildings."

      neighborhoods={[
        'Church Street',
        'Queen Street',
        'State Street',
        'Chalmers Street',
        'Elliott Street',
        'Lodge Alley',
        'Philadelphia Alley',
        'Longitude Lane'
      ]}

      weatherChallenges={[
        {
          icon: null,
          title: 'Board of Architectural Review Compliance',
          description: 'Every French Quarter roofing project requires BAR approval with strict material and color requirements. We expertly navigate the review process, providing historically accurate proposals for slate, tile, copper, and period shingles that receive approval while delivering modern performance.'
        },
        {
          icon: null,
          title: '18th & 19th Century Architecture',
          description: 'French Quarter buildings feature unique historic construction including steep pitches, dormers, parapets, and original framing. Our preservation craftsmen understand these structures intimately, restoring and protecting architectural details while maintaining structural integrity.'
        },
        {
          icon: null,
          title: 'Urban Historic District Constraints',
          description: 'Narrow streets, adjacent buildings, and tourism traffic require careful project management. We coordinate deliveries, scaffolding, and work schedules to minimize disruption while protecting neighboring historic properties during installation.'
        },
        {
          icon: null,
          title: 'Hurricane & Salt Air Exposure',
          description: 'The Quarter\'s proximity to Charleston Harbor creates severe weather and corrosion challenges. We install preservation-approved materials engineered for coastal conditions including marine-grade copper, authentic slate, and specialized waterproofing systems.'
        }
      ]}

      localStats={[
        { value: 'BAR', label: 'Certified Experts' },
        { value: '200+ Years', label: 'Building Experience' },
        { value: 'Historic', label: 'Preservation Specialists' },
        { value: 'Authentic', label: 'Materials Only' }
      ]}

      nearbyAreas={[
        { name: 'South of Broad', distance: '0.5 miles', href: '/locations/south-of-broad' },
        { name: 'Ansonborough', distance: '0.5 miles', href: '/locations/ansonborough' },
        { name: 'Harleston Village', distance: '1 mile', href: '/locations/harleston-village' },
        { name: 'Downtown Charleston', distance: '0.3 miles', href: '/locations/downtown-charleston' },
        { name: 'Waterfront Park Area', distance: '0.2 miles', href: '/locations/waterfront-park-area' }
      ]}
    />
  )
}
