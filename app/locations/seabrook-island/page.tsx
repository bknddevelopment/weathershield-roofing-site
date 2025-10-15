import { Metadata } from 'next'
import LocationPageTemplate from '@/app/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Seabrook Island Roofing Contractor | Gated Community Experts | WeatherShield',
  description: 'Seabrook Island SC roofing specialists for gated community homes. Hurricane protection, golf course property roofing, salt air resistance. Licensed, insured. Call (843) 877-5539 for consultation.',
  keywords: 'Seabrook Island roofing, gated community roofing SC, golf course property roofing, hurricane resistant roofing Seabrook, coastal roofing Charleston',
  openGraph: {
    title: 'Seabrook Island Roofing Contractor | WeatherShield Roofing',
    description: 'Expert roofing for Seabrook Island gated community. Hurricane protection, premium materials, golf course property specialists.',
    url: 'https://weathershieldroofers.com/locations/seabrook-island',
    type: 'website',
  },
}

export default function SeabrookIslandPage() {
  return (
    <LocationPageTemplate
      city="Seabrook Island"
      state="SC"
      zipCodes={['29455']}
      population="1,900+"
      description="In the private gated island community of Seabrook Island, where championship golf courses, pristine beaches, and luxury living meet Atlantic coastal challenges, WeatherShield Roofing provides premium roofing solutions tailored to this exclusive environment. Our experience with resort properties, architectural review requirements, and hurricane engineering makes us the trusted choice for Seabrook homeowners."

      neighborhoods={[
        'Seabrook Island Club',
        'Ocean Winds',
        'Marshgate',
        'Live Oak Village',
        'Hopkinson Plantation',
        'Palmetto Point',
        'Crooked Oaks',
        'North Beach'
      ]}

      weatherChallenges={[
        {
          icon: null,
          title: 'Hurricane & Tropical Storm Threats',
          description: 'Seabrook\'s barrier island location demands maximum hurricane protection. We install wind-rated roofing systems engineered for 150+ mph winds with advanced hurricane strapping, sealed ridge vents, and impact-resistant materials that safeguard your investment through severe Atlantic storms.'
        },
        {
          icon: null,
          title: 'Golf Course & Resort Standards',
          description: 'Properties overlooking championship golf courses require architectural excellence. Our installations feature premium shingles, custom color matching, and meticulous attention to detail that enhances property values while meeting strict community architectural guidelines.'
        },
        {
          icon: null,
          title: 'Marine Salt Corrosion',
          description: 'Ocean proximity and saltwater marsh views create corrosive conditions. We use marine-grade materials including stainless steel fasteners, corrosion-resistant flashing systems, and protective coatings designed for harsh coastal environments.'
        },
        {
          icon: null,
          title: 'Community Architectural Review',
          description: 'Seabrook maintains rigorous design standards. Our team expertly navigates ARB approval processes, ensuring your roofing project meets all community requirements while delivering the quality and aesthetics you expect.'
        }
      ]}

      localStats={[
        { value: '150+ MPH', label: 'Wind Rating' },
        { value: 'ARB', label: 'Approval Experts' },
        { value: '24/7', label: 'Emergency Service' },
        { value: 'Premium', label: 'Materials Only' }
      ]}

      nearbyAreas={[
        { name: 'Kiawah Island', distance: '4 miles', href: '/locations/kiawah-island' },
        { name: 'Johns Island', distance: '10 miles', href: '/locations/johns-island' },
        { name: 'Charleston (Downtown)', distance: '23 miles', href: '/locations/charleston-downtown' },
        { name: 'James Island', distance: '17 miles', href: '/locations/james-island' },
        { name: 'Edisto Beach', distance: '22 miles', href: '/locations/edisto-beach' }
      ]}
    />
  )
}
