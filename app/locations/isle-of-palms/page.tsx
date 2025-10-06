import { Metadata } from 'next'
import LocationPageTemplate from '@/app/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Isle of Palms Roofing Contractor | Luxury Coastal Roofing | WeatherShield',
  description: 'Isle of Palms SC roofing specialists for luxury beach homes. Hurricane-resistant systems, architectural shingles, salt air protection. Licensed, insured, A+ rated. Call (843) 877-5539 today.',
  keywords: 'Isle of Palms roofing, IOP roofing contractor, luxury beach home roofing, hurricane resistant roofing IOP, coastal roofing Charleston',
  openGraph: {
    title: 'Isle of Palms Roofing Contractor | WeatherShield Roofing',
    description: 'Premium roofing services for Isle of Palms luxury homes. Hurricane protection, architectural beauty, coastal durability.',
    url: 'https://weathershieldroofers.com/locations/isle-of-palms',
    type: 'website',
  },
}

export default function IsleOfPalmsPage() {
  return (
    <LocationPageTemplate
      city="Isle of Palms"
      state="SC"
      zipCodes={['29451']}
      population="4,500+"
      description="In the prestigious coastal community of Isle of Palms, where luxury beach homes demand both architectural beauty and hurricane-grade protection, WeatherShield Roofing delivers premium roofing solutions. Our expertise in high-end coastal construction ensures your IOP property maintains its value and withstands Atlantic storms."

      neighborhoods={[
        'Wild Dunes Resort',
        'Ocean Boulevard',
        'Palm Boulevard',
        'Forest Trail',
        'Waterway Island',
        'IOP Connector Area',
        'Breach Inlet',
        'Front Beach'
      ]}

      weatherChallenges={[
        {
          icon: null,
          title: 'Hurricane Season Protection',
          description: 'Isle of Palms faces direct Atlantic hurricane exposure annually. We install premium wind-rated roofing systems with advanced hurricane strapping, impact-resistant materials, and sealed ridge vents engineered for 150+ mph winds.'
        },
        {
          icon: null,
          title: 'Salt Air & Coastal Corrosion',
          description: 'Ocean proximity accelerates material breakdown on luxury homes. Our coastal roofing packages feature marine-grade fasteners, corrosion-resistant flashing, and specialized coatings that protect your investment from saltwater damage.'
        },
        {
          icon: null,
          title: 'Architectural Aesthetics',
          description: 'High-end IOP homes require roofing that complements coastal architecture. We offer designer shingles, copper accents, and custom color matching to enhance curb appeal while maintaining hurricane protection standards.'
        },
        {
          icon: null,
          title: 'Rental Property Demands',
          description: 'Many IOP homes serve as vacation rentals requiring minimal maintenance. Our durable installations with extended warranties reduce downtime and protect rental income streams year after year.'
        }
      ]}

      localStats={[
        { value: '150+ MPH', label: 'Wind Rating' },
        { value: 'Premium', label: 'Materials Only' },
        { value: '24/7', label: 'Emergency Service' },
        { value: 'Lifetime', label: 'Warranty Available' }
      ]}

      nearbyAreas={[
        { name: 'Sullivan\'s Island', distance: '2 miles', href: '/locations/sullivans-island' },
        { name: 'Mount Pleasant', distance: '5 miles', href: '/locations/mount-pleasant' },
        { name: 'Charleston (Downtown)', distance: '15 miles', href: '/locations/charleston-downtown' },
        { name: 'Daniel Island', distance: '10 miles', href: '/locations/daniel-island' },
        { name: 'Dewees Island', distance: '4 miles', href: '/locations/dewees-island' }
      ]}
    />
  )
}
