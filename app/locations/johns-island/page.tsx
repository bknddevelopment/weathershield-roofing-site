import { Metadata } from 'next'
import LocationPageTemplate from '@/app/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Johns Island Roofing Contractor | Rural & Estate Roofing | WeatherShield',
  description: 'Johns Island SC roofing specialists for estate homes, farms, and rural properties. Storm damage repair, metal roofing, asphalt shingles. Licensed, insured. Call (843) 877-5539 for free estimate.',
  keywords: 'Johns Island roofing, estate home roofing SC, rural property roofing, farm building roofing, metal roofing Charleston',
  openGraph: {
    title: 'Johns Island Roofing Contractor | WeatherShield Roofing',
    description: 'Expert roofing for Johns Island estates and rural properties. Residential and agricultural roofing specialists.',
    url: 'https://weathershieldroofers.com/locations/johns-island',
    type: 'website',
  },
}

export default function JohnsIslandPage() {
  return (
    <LocationPageTemplate
      city="Johns Island"
      state="SC"
      zipCodes={['29455', '29457']}
      population="21,000+"
      description="In the rapidly growing yet still rural Johns Island, where historic farms, modern developments, and luxury estates create diverse roofing needs, WeatherShield Roofing delivers comprehensive solutions for every property type. From agricultural buildings to high-end residences, our versatile expertise makes us Johns Island\'s go-to roofing contractor."

      neighborhoods={[
        'Bohicket Marina Village',
        'Indigo Plantation',
        'The Preserve at Botany Bay',
        'Brick Yard Plantation',
        'Fenwick Hall',
        'Rosebank Farms',
        'Central Johns Island',
        'Mullet Hall'
      ]}

      weatherChallenges={[
        {
          icon: null,
          title: 'Hurricane & Tropical Storm Exposure',
          description: 'Johns Island\'s low-lying coastal position creates vulnerability to hurricanes and flooding. We install elevated roofing systems with advanced wind resistance up to 130 mph, comprehensive waterproofing, and drainage solutions designed for Lowcountry storm conditions.'
        },
        {
          icon: null,
          title: 'Agricultural & Outbuilding Needs',
          description: 'Many Johns Island properties include barns, workshops, and agricultural buildings requiring durable, cost-effective roofing. We specialize in metal roofing installations, standing seam systems, and commercial-grade materials perfect for farm and estate outbuildings.'
        },
        {
          icon: null,
          title: 'Rural Property Challenges',
          description: 'Large lots and rural settings require contractors who can handle substantial projects efficiently. Our crews bring all necessary equipment and materials to complete installations on expansive properties, from main residences to guest houses and storage buildings.'
        },
        {
          icon: null,
          title: 'Development Growth Demands',
          description: 'Rapid residential development brings modern construction standards to Johns Island. We deliver contemporary roofing solutions with energy-efficient materials, architectural shingles, and warranties that meet new home buyer expectations while respecting the island\'s character.'
        }
      ]}

      localStats={[
        { value: '130+ MPH', label: 'Wind Rating' },
        { value: 'Metal/Shingle', label: 'All Roof Types' },
        { value: 'Estate', label: 'Property Experts' },
        { value: '24/7', label: 'Emergency Service' }
      ]}

      nearbyAreas={[
        { name: 'Kiawah Island', distance: '8 miles', href: '/locations/kiawah-island' },
        { name: 'Seabrook Island', distance: '10 miles', href: '/locations/seabrook-island' },
        { name: 'James Island', distance: '6 miles', href: '/locations/james-island' },
        { name: 'Charleston (Downtown)', distance: '15 miles', href: '/locations/charleston-downtown' },
        { name: 'West Ashley', distance: '8 miles', href: '/locations/west-ashley' }
      ]}
    />
  )
}
