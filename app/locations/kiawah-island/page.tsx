import { Metadata } from 'next'
import LocationPageTemplate from '@/app/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Kiawah Island Roofing Contractor | Luxury Resort Roofing | WeatherShield',
  description: 'Kiawah Island SC roofing specialists for luxury estates and resort properties. Hurricane-resistant systems, premium materials, architectural excellence. Licensed, insured. Call (843) 877-5539.',
  keywords: 'Kiawah Island roofing, luxury estate roofing SC, resort property roofing, hurricane resistant roofing Kiawah, coastal roofing Charleston',
  openGraph: {
    title: 'Kiawah Island Roofing Contractor | WeatherShield Roofing',
    description: 'Premium roofing services for Kiawah Island luxury estates. Hurricane protection, architectural beauty, resort-quality craftsmanship.',
    url: 'https://weathershieldroofers.com/locations/kiawah-island',
    type: 'website',
  },
}

export default function KiawahIslandPage() {
  return (
    <LocationPageTemplate
      city="Kiawah Island"
      state="SC"
      zipCodes={['29455']}
      population="2,000+"
      description="In the world-renowned luxury resort community of Kiawah Island, where multi-million dollar estates and championship golf courses demand perfection, WeatherShield Roofing delivers elite coastal roofing solutions. Our expertise in high-end construction, hurricane engineering, and architectural design makes us the preferred contractor for Kiawah\'s most discerning property owners."

      neighborhoods={[
        'Ocean Course Area',
        'Turtle Point',
        'Osprey Point',
        'Cougar Point',
        'Oak Point',
        'Kiawah Island Golf Resort',
        'East Beach Village',
        'West Beach Village'
      ]}

      weatherChallenges={[
        {
          icon: null,
          title: 'Atlantic Hurricane Exposure',
          description: 'As a barrier island directly facing the Atlantic, Kiawah experiences severe hurricane conditions. We engineer custom roofing systems rated for 160+ mph winds using advanced structural reinforcement, impact-resistant materials, and sealed construction methods that protect multi-million dollar investments.'
        },
        {
          icon: null,
          title: 'Luxury Architectural Requirements',
          description: 'Kiawah\'s prestigious homes demand roofing that enhances property values. We install designer shingles, custom copper work, slate alternatives, and premium architectural details that complement estate-level construction while meeting strict resort community standards.'
        },
        {
          icon: null,
          title: 'Salt Air & Marine Environment',
          description: 'Oceanfront estates face extreme salt corrosion. Our marine-grade installations feature stainless steel fasteners, custom copper flashing, corrosion-resistant underlayment, and protective coatings engineered specifically for harsh saltwater conditions.'
        },
        {
          icon: null,
          title: 'Resort Community Standards',
          description: 'Kiawah Island maintains rigorous architectural review processes. Our team navigates ARB requirements, secures all necessary approvals, and delivers installations that exceed community expectations for quality and aesthetics.'
        }
      ]}

      localStats={[
        { value: '160+ MPH', label: 'Wind Rating' },
        { value: 'Estate-Grade', label: 'Quality Standard' },
        { value: 'Lifetime', label: 'Premium Warranties' },
        { value: '24/7', label: 'Concierge Service' }
      ]}

      nearbyAreas={[
        { name: 'Seabrook Island', distance: '4 miles', href: '/locations/seabrook-island' },
        { name: 'Johns Island', distance: '8 miles', href: '/locations/johns-island' },
        { name: 'Charleston (Downtown)', distance: '21 miles', href: '/locations/charleston-downtown' },
        { name: 'James Island', distance: '15 miles', href: '/locations/james-island' },
        { name: 'Edisto Beach', distance: '25 miles', href: '/locations/edisto-beach' }
      ]}
    />
  )
}
