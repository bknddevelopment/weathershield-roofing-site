import { Metadata } from 'next'
import LocationPageTemplate from '@/app/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Daniel Island Roofing Contractor | Planned Community Experts | WeatherShield',
  description: 'Daniel Island SC roofing specialists for master-planned community homes. Storm damage repair, architectural roofing, insurance claims. Licensed, insured, A+ rated. Call (843) 877-5539 today.',
  keywords: 'Daniel Island roofing, planned community roofing SC, storm damage repair Daniel Island, architectural shingles Charleston, HOA approved roofing',
  openGraph: {
    title: 'Daniel Island Roofing Contractor | WeatherShield Roofing',
    description: 'Expert roofing for Daniel Island homes. HOA-approved materials, storm protection, architectural excellence.',
    url: 'https://weathershieldroofers.com/locations/daniel-island',
    type: 'website',
  },
}

export default function DanielIslandPage() {
  return (
    <LocationPageTemplate
      city="Daniel Island"
      state="SC"
      zipCodes={['29492']}
      population="12,000+"
      description="In Charleston\'s premier master-planned community of Daniel Island, where modern architecture, strict HOA standards, and family-friendly neighborhoods meet coastal storm challenges, WeatherShield Roofing delivers premium roofing solutions tailored to this thriving community. Our expertise with HOA requirements, architectural review processes, and storm-resistant construction makes us the preferred contractor for Daniel Island homeowners."

      neighborhoods={[
        'Daniel Island Park',
        'The Village at Daniel Island',
        'Beresford Creek',
        'Etiwan Park',
        'Ralston Creek',
        'Governors Park',
        'Smythe Park',
        'Pierce Park'
      ]}

      weatherChallenges={[
        {
          icon: null,
          title: 'Hurricane & Tropical Storm Threats',
          description: 'Daniel Island\'s coastal location makes it vulnerable to hurricanes and tropical storms. We install wind-rated roofing systems engineered for 130+ mph winds with advanced hurricane straps, sealed construction, and impact-resistant materials that protect your family and investment.'
        },
        {
          icon: null,
          title: 'HOA Architectural Requirements',
          description: 'Daniel Island maintains strict design standards through active HOAs. Our team expertly navigates architectural review boards, ensuring your roofing project uses approved materials, colors, and installation methods while meeting all community guidelines.'
        },
        {
          icon: null,
          title: 'Lowcountry Heat & Humidity',
          description: 'Charleston\'s intense heat and humidity accelerate roof aging. We install energy-efficient roofing systems with advanced ventilation, reflective shingles, and moisture-resistant underlayment that reduce cooling costs and extend roof life.'
        },
        {
          icon: null,
          title: 'Severe Thunderstorms & Hail',
          description: 'Spring and summer bring intense thunderstorms with damaging hail. Our impact-resistant shingles carry Class 4 hail ratings and wind warranties, providing superior protection while often qualifying for insurance discounts.'
        }
      ]}

      localStats={[
        { value: '130+ MPH', label: 'Wind Rating' },
        { value: 'HOA', label: 'Approval Experts' },
        { value: '24/7', label: 'Storm Response' },
        { value: 'Class 4', label: 'Hail Protection' }
      ]}

      nearbyAreas={[
        { name: 'Mount Pleasant', distance: '3 miles', href: '/locations/mount-pleasant' },
        { name: 'Charleston (Downtown)', distance: '10 miles', href: '/locations/charleston-downtown' },
        { name: 'Isle of Palms', distance: '10 miles', href: '/locations/isle-of-palms' },
        { name: 'Sullivan\'s Island', distance: '12 miles', href: '/locations/sullivans-island' },
        { name: 'Cainhoy', distance: '5 miles', href: '/locations/cainhoy' }
      ]}
    />
  )
}
