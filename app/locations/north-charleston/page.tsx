import { Metadata } from 'next'
import LocationPageTemplate from '@/app/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'North Charleston Roofing Contractor | Commercial & Residential | WeatherShield',
  description: 'North Charleston SC roofing experts for homes and businesses. Storm damage repair, commercial roofing, new construction. Licensed, insured, A+ rated. Call (843) 877-5539 for service.',
  keywords: 'North Charleston roofing, commercial roofing North Charleston, residential roofing SC, storm damage repair, industrial roofing Charleston',
  openGraph: {
    title: 'North Charleston Roofing Contractor | WeatherShield Roofing',
    description: 'Expert roofing for North Charleston commercial and residential properties. Quality installations, storm protection, competitive pricing.',
    url: 'https://weathershieldroofers.com/locations/north-charleston',
    type: 'website',
  },
}

export default function NorthCharlestonPage() {
  return (
    <LocationPageTemplate
      city="North Charleston"
      state="SC"
      zipCodes={['29405', '29406', '29418', '29420']}
      population="115,000+"
      description="In Charleston County\'s largest city North Charleston, where diverse neighborhoods, commercial districts, and industrial facilities create comprehensive roofing needs, WeatherShield Roofing delivers versatile solutions for residential and commercial properties. Our local expertise, rapid response, and competitive pricing make us North Charleston\'s trusted roofing partner."

      neighborhoods={[
        'Park Circle',
        'Liberty Hill',
        'Dewberry Farms',
        'Northwoods',
        'Oakbrook',
        'Ashley Heights',
        'Naval Weapons Station Area',
        'University Boulevard'
      ]}

      weatherChallenges={[
        {
          icon: null,
          title: 'Severe Thunderstorms & Hail',
          description: 'North Charleston experiences frequent severe weather with large hail and damaging winds. We install Class 4 impact-resistant roofing systems with comprehensive wind warranties that protect homes and businesses while qualifying for insurance discounts.'
        },
        {
          icon: null,
          title: 'Hurricane Wind Threats',
          description: 'Though inland, North Charleston faces significant hurricane wind damage. Our wind-rated roofing systems include advanced fastening, hurricane straps, and sealed construction engineered for 110+ mph winds from Atlantic storms affecting the Lowcountry.'
        },
        {
          icon: null,
          title: 'Commercial & Industrial Needs',
          description: 'North Charleston\'s business districts require specialized commercial roofing expertise. We install TPO, EPDM, metal, and modified bitumen systems for warehouses, retail centers, and industrial facilities with warranties and performance guarantees.'
        },
        {
          icon: null,
          title: 'Diverse Property Types',
          description: 'From historic homes in Park Circle to new developments and commercial buildings, we handle all roofing types. Our versatile crews deliver quality installations on residential, commercial, and mixed-use properties throughout North Charleston.'
        }
      ]}

      localStats={[
        { value: '110+ MPH', label: 'Wind Rating' },
        { value: 'Commercial', label: 'Certified' },
        { value: '24/7', label: 'Response Time' },
        { value: 'Class 4', label: 'Hail Protection' }
      ]}

      nearbyAreas={[
        { name: 'Charleston (Downtown)', distance: '8 miles', href: '/locations/charleston-downtown' },
        { name: 'Ladson', distance: '4 miles', href: '/locations/ladson' },
        { name: 'Summerville', distance: '10 miles', href: '/locations/summerville' },
        { name: 'Goose Creek', distance: '8 miles', href: '/locations/goose-creek' },
        { name: 'West Ashley', distance: '6 miles', href: '/locations/west-ashley' }
      ]}
    />
  )
}
