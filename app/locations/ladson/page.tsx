import { Metadata } from 'next'
import LocationPageTemplate from '@/app/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Ladson SC Roofing Contractor | New Home & Replacement Roofing | WeatherShield',
  description: 'Ladson SC roofing specialists for new developments and established neighborhoods. Storm damage repair, architectural shingles, affordable quality. Licensed, insured. Call (843) 877-5539 for free estimate.',
  keywords: 'Ladson roofing, North Charleston roofing, new home roofing SC, affordable roofing Charleston, residential roofing contractor',
  openGraph: {
    title: 'Ladson SC Roofing Contractor | WeatherShield Roofing',
    description: 'Expert roofing for Ladson homes and new developments. Quality installations, storm protection, competitive pricing.',
    url: 'https://weathershieldroofers.com/locations/ladson',
    type: 'website',
  },
}

export default function LadsonPage() {
  return (
    <LocationPageTemplate
      city="Ladson"
      state="SC"
      zipCodes={['29456']}
      population="15,000+"
      description="In the growing Ladson area north of Charleston, where new home developments and established neighborhoods create diverse roofing opportunities, WeatherShield Roofing delivers quality installations at competitive prices. Our expertise with modern construction standards, builder partnerships, and homeowner replacements makes us Ladson\'s trusted roofing contractor."

      neighborhoods={[
        'College Park',
        'Windsor Hill Plantation',
        'Spring Grove Plantation',
        'Archdale',
        'Cypress Gardens',
        'Eagle Landing',
        'Foxbank Plantation',
        'Carnes Crossroads'
      ]}

      weatherChallenges={[
        {
          icon: null,
          title: 'Severe Thunderstorms & Hail',
          description: 'Ladson experiences frequent severe thunderstorms with large hail and damaging winds. We install Class 4 impact-resistant shingles with comprehensive wind warranties that protect new and existing homes while often qualifying for insurance discounts.'
        },
        {
          icon: null,
          title: 'Hurricane Preparedness',
          description: 'Though inland from the coast, Ladson still faces hurricane wind threats. Our wind-rated roofing systems include advanced fastening, hurricane straps, and sealed construction methods engineered to withstand 110+ mph winds from Atlantic storms.'
        },
        {
          icon: null,
          title: 'New Development Standards',
          description: 'Rapid growth brings modern building codes and buyer expectations. We deliver contemporary roofing solutions with architectural shingles, energy-efficient materials, and comprehensive warranties that meet new home construction standards throughout Ladson developments.'
        },
        {
          icon: null,
          title: 'Heat & Humidity Effects',
          description: 'South Carolina\'s climate accelerates roof aging through heat, moisture, and algae growth. We install algae-resistant shingles with advanced ventilation systems and reflective granules that extend roof life and improve home energy efficiency.'
        }
      ]}

      localStats={[
        { value: '110+ MPH', label: 'Wind Rating' },
        { value: 'Class 4', label: 'Hail Protection' },
        { value: 'New Build', label: 'Certified' },
        { value: 'Competitive', label: 'Pricing' }
      ]}

      nearbyAreas={[
        { name: 'North Charleston', distance: '4 miles', href: '/locations/north-charleston' },
        { name: 'Summerville', distance: '8 miles', href: '/locations/summerville' },
        { name: 'Goose Creek', distance: '6 miles', href: '/locations/goose-creek' },
        { name: 'Charleston (Downtown)', distance: '18 miles', href: '/locations/charleston-downtown' },
        { name: 'Mount Pleasant', distance: '20 miles', href: '/locations/mount-pleasant' }
      ]}
    />
  )
}
