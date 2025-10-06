import { Metadata } from 'next'
import LocationPageTemplate from '@/app/components/LocationPageTemplate'

export const metadata: Metadata = {
  title: 'Sullivan\'s Island Roofing Contractor | Historic Home Specialists | WeatherShield',
  description: 'Sullivan\'s Island SC roofing experts for historic and luxury beach homes. Hurricane protection, architectural preservation, salt air resistance. Licensed, insured. Call (843) 877-5539 for free consultation.',
  keywords: 'Sullivans Island roofing, historic home roofing SC, hurricane resistant roofing Sullivans Island, coastal roofing contractor Charleston',
  openGraph: {
    title: 'Sullivan\'s Island Roofing Contractor | WeatherShield Roofing',
    description: 'Expert roofing for Sullivan\'s Island historic and luxury homes. Hurricane protection meets architectural preservation.',
    url: 'https://weathershieldroofers.com/locations/sullivans-island',
    type: 'website',
  },
}

export default function SullivansIslandPage() {
  return (
    <LocationPageTemplate
      city="Sullivan's Island"
      state="SC"
      zipCodes={['29482']}
      population="1,800+"
      description="In the exclusive barrier island community of Sullivan's Island, where historic charm meets modern luxury and Atlantic storms demand the highest protection standards, WeatherShield Roofing specializes in preserving architectural heritage while delivering hurricane-grade performance. Our expertise in both historic restoration and contemporary coastal construction makes us the trusted choice for discerning homeowners."

      neighborhoods={[
        'Station 22 (Middle Street)',
        'Station 28 (East End)',
        'Station 18 (West End)',
        'Atlantic Avenue',
        'Middle Street Historic District',
        'Breach Inlet Area',
        'Station 32 Area',
        'Fort Moultrie Area'
      ]}

      weatherChallenges={[
        {
          icon: null,
          title: 'Hurricane & Nor\'easter Exposure',
          description: 'Sullivan\'s Island faces some of Charleston\'s most severe storm conditions. We install engineered roofing systems rated for 150+ mph winds with advanced fastening, sealed sheathing, and impact-resistant materials that protect both historic and modern homes.'
        },
        {
          icon: null,
          title: 'Historic Preservation Requirements',
          description: 'Many Sullivan\'s Island homes require architectural review for roofing changes. Our team specializes in historically appropriate materials and installation methods that meet preservation standards while incorporating modern waterproofing and wind resistance.'
        },
        {
          icon: null,
          title: 'Severe Salt Air Corrosion',
          description: 'Direct oceanfront exposure creates extreme corrosion conditions. We use only marine-grade materials including stainless steel fasteners, copper flashing, and specially coated architectural shingles designed for harsh saltwater environments.'
        },
        {
          icon: null,
          title: 'Premium Home Standards',
          description: 'As one of Charleston\'s most exclusive addresses, Sullivan\'s Island demands flawless execution. Our master craftsmen deliver museum-quality installations with attention to every architectural detail and modern performance requirement.'
        }
      ]}

      localStats={[
        { value: '150+ MPH', label: 'Wind Rating' },
        { value: 'Historic', label: 'Preservation Certified' },
        { value: '24/7', label: 'Emergency Response' },
        { value: 'Premium', label: 'Materials Only' }
      ]}

      nearbyAreas={[
        { name: 'Isle of Palms', distance: '2 miles', href: '/locations/isle-of-palms' },
        { name: 'Mount Pleasant', distance: '6 miles', href: '/locations/mount-pleasant' },
        { name: 'Charleston (Downtown)', distance: '10 miles', href: '/locations/charleston-downtown' },
        { name: 'Daniel Island', distance: '12 miles', href: '/locations/daniel-island' },
        { name: 'James Island', distance: '8 miles', href: '/locations/james-island' }
      ]}
    />
  )
}
