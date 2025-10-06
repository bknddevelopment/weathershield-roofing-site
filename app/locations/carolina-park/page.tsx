import { Metadata } from 'next'
import LocationPageTemplate from '@/app/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Carolina Park Mount Pleasant Roofing | New Home Specialists | WeatherShield',
  description: 'Carolina Park Mount Pleasant roofing experts. New construction roofing, HOA-approved materials, warranty service. Licensed, insured. Call (843) 877-5539 for quality service.',
  keywords: 'Carolina Park roofing, Mount Pleasant new home roofing, HOA roofing Mount Pleasant, new construction roofing SC, residential roofing Charleston',
  openGraph: {
    title: 'Carolina Park Mount Pleasant Roofing Contractor | WeatherShield Roofing',
    description: 'Expert roofing for Carolina Park new homes. Quality installations, HOA compliance, storm protection.',
    url: 'https://weathershieldroofers.com/locations/carolina-park',
    type: 'website',
  },
}

export default function CarolinaParkPage() {
  return (
    <LocationPageTemplate
      city="Carolina Park"
      state="SC"
      zipCodes={['29466']}
      population="15,000+"
      description="In Mount Pleasant\'s rapidly growing Carolina Park community, where new home construction, family-friendly amenities, and modern neighborhood design create a thriving residential environment, WeatherShield Roofing delivers quality roofing solutions that meet builder standards and HOA requirements. Our expertise with new construction and replacement roofing makes us Carolina Park\'s preferred contractor."

      neighborhoods={[
        'Carolina Park Village',
        'Grand Oaks',
        'The Ponds',
        'Carolina Park Elementary Area',
        'Rifle Range Road Corridor',
        'Seven Farms',
        'Watermark',
        'Oak Terrace Preserve'
      ]}

      weatherChallenges={[
        {
          icon: null,
          title: 'New Home Quality Standards',
          description: 'Carolina Park homeowners expect premium quality from day one. We install architectural shingles with comprehensive warranties, advanced ventilation systems, and energy-efficient materials that meet or exceed new construction standards while providing long-term value.'
        },
        {
          icon: null,
          title: 'HOA Compliance Requirements',
          description: 'Carolina Park\'s active HOAs maintain specific roofing requirements. We expertly navigate architectural review processes, ensuring your roofing project uses approved materials, colors, and installation methods that maintain neighborhood aesthetics and community standards.'
        },
        {
          icon: null,
          title: 'Hurricane Preparedness',
          description: 'Mount Pleasant\'s coastal location creates hurricane threats. We install wind-rated roofing systems engineered for 120+ mph winds with advanced hurricane straps, sealed construction, and impact-resistant materials that protect modern homes through Atlantic storm seasons.'
        },
        {
          icon: null,
          title: 'Builder Roof Upgrades',
          description: 'Many Carolina Park homeowners discover builder-grade roofs need early replacement. We provide superior upgrades with premium architectural shingles, better warranties, and higher wind ratings that improve home value and long-term performance.'
        }
      ]}

      localStats={[
        { value: '120+ MPH', label: 'Wind Rating' },
        { value: 'New Build', label: 'Certified' },
        { value: 'HOA', label: 'Approval Experts' },
        { value: 'Class 4', label: 'Hail Protection' }
      ]}

      nearbyAreas={[
        { name: 'Mount Pleasant', distance: '2 miles', href: '/locations/mount-pleasant' },
        { name: 'Park West', distance: '3 miles', href: '/locations/park-west' },
        { name: 'Daniel Island', distance: '8 miles', href: '/locations/daniel-island' },
        { name: 'Charleston (Downtown)', distance: '15 miles', href: '/locations/charleston-downtown' },
        { name: 'Isle of Palms', distance: '10 miles', href: '/locations/isle-of-palms' }
      ]}
    />
  )
}
