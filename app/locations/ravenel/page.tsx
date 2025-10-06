import { Metadata } from 'next'
import LocationPageTemplate from '@/app/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Ravenel SC Roofing Contractor | Rural & Residential Roofing | WeatherShield',
  description: 'Ravenel SC roofing specialists for homes, farms, and rural properties. Storm damage repair, metal roofing, asphalt shingles. Licensed, insured. Call (843) 877-5539 for service.',
  keywords: 'Ravenel roofing, rural roofing SC, farm roofing Charleston, residential roofing Ravenel, metal roofing contractor',
  openGraph: {
    title: 'Ravenel SC Roofing Contractor | WeatherShield Roofing',
    description: 'Expert roofing for Ravenel homes and rural properties. Residential and agricultural roofing solutions.',
    url: 'https://weathershieldroofers.com/locations/ravenel',
    type: 'website',
  },
}

export default function RavenelPage() {
  return (
    <LocationPageTemplate
      city="Ravenel"
      state="SC"
      zipCodes={['29470']}
      population="2,800+"
      description="In the rural community of Ravenel, where farmland, residential properties, and Lowcountry charm create unique roofing needs, WeatherShield Roofing delivers versatile solutions for every structure type. Our experience with both residential and agricultural buildings, combined with local knowledge, makes us Ravenel\'s trusted roofing partner."

      neighborhoods={[
        'Limehouse',
        'Rantowles',
        'Wallace',
        'Parkers Ferry',
        'Hutchinson Square',
        'Ravenel Town Center',
        'Rural Ravenel',
        'Ashepoo'
      ]}

      weatherChallenges={[
        {
          icon: null,
          title: 'Hurricane & Tropical Storm Exposure',
          description: 'Ravenel\'s low-lying coastal position creates vulnerability to hurricane winds and flooding. We install wind-rated roofing systems with advanced hurricane protection, comprehensive waterproofing, and elevated construction methods designed for Lowcountry storm conditions.'
        },
        {
          icon: null,
          title: 'Agricultural Building Needs',
          description: 'Many Ravenel properties include barns, equipment sheds, and farm buildings requiring durable, cost-effective roofing. We specialize in metal roofing installations, pole barn systems, and commercial-grade materials perfect for agricultural applications.'
        },
        {
          icon: null,
          title: 'Rural Property Challenges',
          description: 'Large lots and remote locations require contractors who can handle substantial projects independently. Our crews bring complete equipment and materials to finish installations efficiently, from main residences to outbuildings and storage structures.'
        },
        {
          icon: null,
          title: 'Heat, Humidity & Algae Growth',
          description: 'South Carolina\'s climate promotes rapid algae growth and material degradation. We install algae-resistant shingles with proper ventilation and moisture barriers that extend roof life in Ravenel\'s humid Lowcountry environment.'
        }
      ]}

      localStats={[
        { value: '120+ MPH', label: 'Wind Rating' },
        { value: 'Metal/Shingle', label: 'All Materials' },
        { value: 'Farm', label: 'Building Experts' },
        { value: '24/7', label: 'Emergency Service' }
      ]}

      nearbyAreas={[
        { name: 'Hollywood', distance: '8 miles', href: '/locations/hollywood' },
        { name: 'Johns Island', distance: '12 miles', href: '/locations/johns-island' },
        { name: 'Charleston (Downtown)', distance: '25 miles', href: '/locations/charleston-downtown' },
        { name: 'Edisto Island', distance: '18 miles', href: '/locations/edisto-island' },
        { name: 'James Island', distance: '15 miles', href: '/locations/james-island' }
      ]}
    />
  )
}
