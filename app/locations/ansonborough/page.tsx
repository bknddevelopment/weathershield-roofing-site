import { Metadata } from 'next'
import LocationPageTemplate from '@/app/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Ansonborough Charleston Roofing | Historic Preservation Experts | WeatherShield',
  description: 'Ansonborough Charleston roofing specialists for historic homes. BAR-approved restoration, period-appropriate materials, hurricane protection. Licensed, insured. Call (843) 877-5539.',
  keywords: 'Ansonborough roofing, historic Charleston roofing, BAR approved roofing Charleston, preservation roofing, Eastside Charleston roofing',
  openGraph: {
    title: 'Ansonborough Charleston Roofing Contractor | WeatherShield Roofing',
    description: 'Expert roofing for Ansonborough historic district. Preservation roofing, architectural restoration, coastal protection.',
    url: 'https://weathershieldroofers.com/locations/ansonborough',
    type: 'website',
  },
}

export default function AnsonboroughPage() {
  return (
    <LocationPageTemplate
      city="Ansonborough"
      state="SC"
      zipCodes={['29401']}
      population="1,200+"
      description="In Charleston\'s historic Ansonborough neighborhood, where elegant townhouses, carefully restored homes, and Eastside charm require preservation-quality roofing, WeatherShield Roofing provides expert solutions that honor the district\'s architectural heritage. Our Board of Architectural Review expertise and historic construction knowledge make us Ansonborough\'s trusted roofing partner."

      neighborhoods={[
        'Hasell Street',
        'Laurens Street',
        'Society Street',
        'Anson Street',
        'George Street',
        'Wentworth Street',
        'Calhoun Street East',
        'Coming Street'
      ]}

      weatherChallenges={[
        {
          icon: null,
          title: 'Historic District Regulations',
          description: 'Ansonborough\'s historic designation requires BAR approval for roofing projects. We specialize in historically appropriate materials and installation methods, providing expert guidance through the review process to ensure your project meets preservation standards while delivering modern performance.'
        },
        {
          icon: null,
          title: 'Charleston Single House Architecture',
          description: 'Many Ansonborough homes feature the classic Charleston single house design with side porches and unique rooflines. Our craftsmen understand these architectural nuances, working with original framing, preserving architectural details, and maintaining the neighborhood\'s distinctive character.'
        },
        {
          icon: null,
          title: 'Urban Renovation Challenges',
          description: 'Ansonborough\'s ongoing gentrification brings modern standards to historic structures. We balance contemporary expectations for energy efficiency and durability with preservation requirements, delivering roofing that enhances property values while respecting architectural heritage.'
        },
        {
          icon: null,
          title: 'Coastal Storm Exposure',
          description: 'The neighborhood\'s peninsular location creates hurricane vulnerability. We install preservation-approved roofing systems with modern wind ratings, waterproofing technology, and structural reinforcement that protect historic homes through severe Atlantic weather.'
        }
      ]}

      localStats={[
        { value: 'BAR', label: 'Approved Materials' },
        { value: 'Historic', label: 'Preservation Certified' },
        { value: '130+ MPH', label: 'Wind Rating' },
        { value: 'Eastside', label: 'District Experts' }
      ]}

      nearbyAreas={[
        { name: 'French Quarter', distance: '0.5 miles', href: '/locations/french-quarter' },
        { name: 'Harleston Village', distance: '0.8 miles', href: '/locations/harleston-village' },
        { name: 'South of Broad', distance: '1 mile', href: '/locations/south-of-broad' },
        { name: 'Downtown Charleston', distance: '0.3 miles', href: '/locations/downtown-charleston' },
        { name: 'Radcliffeborough', distance: '0.6 miles', href: '/locations/radcliffeborough' }
      ]}
    />
  )
}
