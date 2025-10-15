import { Metadata } from 'next'
import LocationPageTemplate from '@/app/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Harleston Village Roofing Contractor | Historic Charleston Experts | WeatherShield',
  description: 'Harleston Village Charleston roofing specialists for historic homes and estates. BAR-approved materials, preservation roofing, architectural restoration. Licensed, insured. Call (843) 877-5539.',
  keywords: 'Harleston Village roofing, Charleston historic roofing, BAR approved roofing, Westside Charleston roofing, preservation roofing SC',
  openGraph: {
    title: 'Harleston Village Roofing Contractor | WeatherShield Roofing',
    description: 'Expert roofing for Harleston Village historic homes. Preservation specialists, architectural excellence, modern protection.',
    url: 'https://weathershieldroofers.com/locations/harleston-village',
    type: 'website',
  },
}

export default function HarlestonVillagePage() {
  return (
    <LocationPageTemplate
      city="Harleston Village"
      state="SC"
      zipCodes={['29401', '29403']}
      population="3,000+"
      description="In Charleston\'s elegant Harleston Village, where tree-lined streets, grand historic homes, and preserved architecture create one of the city\'s most desirable neighborhoods, WeatherShield Roofing delivers preservation-quality roofing approved by the Board of Architectural Review. Our expertise with historic construction and modern protection makes us the neighborhood\'s preferred contractor."

      neighborhoods={[
        'Colonial Lake Area',
        'Rutledge Avenue',
        'Smith Street',
        'Pitt Street',
        'Bull Street',
        'Ashley Avenue',
        'Montagu Street',
        'Beaufain Street'
      ]}

      weatherChallenges={[
        {
          icon: null,
          title: 'Board of Architectural Review Requirements',
          description: 'Harleston Village maintains strict preservation standards requiring BAR approval for all roofing work. We expertly navigate the review process with historically appropriate material selections including slate, architectural shingles, and copper that preserve neighborhood character while providing modern performance.'
        },
        {
          icon: null,
          title: 'Grand Home Architecture',
          description: 'Harleston Village features impressive historic homes with complex rooflines, multiple dormers, and architectural details. Our master craftsmen understand these sophisticated structures, preserving original character while integrating modern waterproofing, ventilation, and wind resistance.'
        },
        {
          icon: null,
          title: 'Mature Tree Canopy',
          description: 'The neighborhood\'s beautiful live oaks create shade but also debris challenges. We install impact-resistant materials designed to handle falling branches and provide maintenance plans to keep roofs clear of leaves and moss that accelerate deterioration.'
        },
        {
          icon: null,
          title: 'Hurricane & Peninsula Exposure',
          description: 'Harleston Village\'s location on the Charleston peninsula creates hurricane vulnerability. We engineer roofing systems that balance historic aesthetics with modern wind ratings up to 130 mph, comprehensive waterproofing, and structural reinforcement.'
        }
      ]}

      localStats={[
        { value: 'BAR', label: 'Certified' },
        { value: '130+ MPH', label: 'Wind Rating' },
        { value: 'Historic', label: 'Preservation Experts' },
        { value: 'Premium', label: 'Materials Only' }
      ]}

      nearbyAreas={[
        { name: 'South of Broad', distance: '1 mile', href: '/locations/south-of-broad' },
        { name: 'French Quarter', distance: '1 mile', href: '/locations/french-quarter' },
        { name: 'Ansonborough', distance: '0.8 miles', href: '/locations/ansonborough' },
        { name: 'Radcliffeborough', distance: '0.5 miles', href: '/locations/radcliffeborough' },
        { name: 'Downtown Charleston', distance: '0.8 miles', href: '/locations/downtown-charleston' }
      ]}
    />
  )
}
