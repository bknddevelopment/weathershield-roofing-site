import type { Metadata } from 'next'
import ServiceTemplate from '../../components/ServiceTemplate'
import { Home, Shield, Zap, Award, Clock, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Concrete Tile Roof Installation Myrtle Beach | Clay Tile Roofing SC',
  description: 'Expert concrete tile roof and clay tile installation in Myrtle Beach. 50-100+ year lifespan, 150+ mph hurricane resistance. Free estimates on tile roofing repair & replacement.',
  keywords: 'concrete tile roof, tile roof repair, clay tile roofing, spanish tile roof, tile roofing myrtle beach, concrete vs clay tile, tile roof installation',
  alternates: {
    canonical: 'https://weathershieldroofers.com/services/tile-roofing',
  },
  openGraph: {
    title: 'Concrete & Clay Tile Roofing | Hurricane-Resistant Tile Installation',
    description: '50-100+ year lifespan. Class 4 hurricane resistance (150+ mph winds). Expert tile roof installation & repair. Free consultation.',
    url: 'https://weathershieldroofers.com/services/tile-roofing',
    type: 'website',
  },
}

const tileRoofingData = {
  title: 'Concrete & Clay Tile Roofing',
  description: 'Premium tile roofing systems combining unmatched durability, hurricane resistance, and timeless Mediterranean beauty for coastal South Carolina homes.',
  longDescription: [
    'Tile roofing represents the pinnacle of roofing durability and aesthetic appeal for Myrtle Beach homes. Weather Shield Roofing specializes in both concrete and clay tile installations that provide exceptional storm resistance, energy efficiency, and a distinctive architectural style that enhances your home\'s curb appeal and value.',
    'With lifespans exceeding 50-100 years, tile roofs offer the best long-term value despite higher initial costs. Our coastal climate is ideal for tile roofing—the materials resist salt air corrosion, withstand hurricane-force winds up to 150+ mph, and provide superior insulation that reduces cooling costs by 20-40%. Tile roofing is particularly popular in upscale coastal communities and Mediterranean-style homes throughout the Grand Strand.',
    'Weather Shield Roofing\'s certified installers have extensive experience with tile roof systems, from structural assessment to proper installation techniques that ensure decades of maintenance-free performance. We offer both concrete and clay tile options in various profiles (flat, barrel, S-tile, and interlocking) and a wide range of colors to complement any architectural style. Every tile installation includes comprehensive underlayment protection, proper ventilation, and lifetime workmanship warranty.',
  ],
  benefits: [
    'Exceptional 50-100+ year lifespan',
    'Class 4 impact resistance (highest rating)',
    '150+ mph wind resistance for hurricanes',
    'Superior energy efficiency (20-40% cooling savings)',
    'Fire resistant (Class A rating)',
    'Resistant to salt air and coastal corrosion',
    'Low maintenance requirements',
    'Timeless Mediterranean aesthetic',
    'Increases property value significantly',
    'Environmentally friendly and recyclable',
    'Excellent sound dampening properties',
    'Lifetime workmanship warranty included',
  ],
  process: [
    {
      number: 1,
      title: 'Structural Assessment',
      description: 'Professional engineer evaluation of roof structure to ensure adequate support for tile weight (850-1,100 lbs per square). Reinforcement recommendations if needed.',
    },
    {
      number: 2,
      title: 'Material Selection',
      description: 'Consultation on concrete vs clay tiles, profile styles (flat, S-tile, barrel), color options, and underlayment systems. Review warranty options and energy certifications.',
    },
    {
      number: 3,
      title: 'Underlayment Installation',
      description: 'Premium waterproof underlayment with self-adhering technology. Proper flashing around all penetrations, valleys, and roof edges for maximum storm protection.',
    },
    {
      number: 4,
      title: 'Tile Installation',
      description: 'Expert tile placement using manufacturer-approved fastening systems. Proper spacing, alignment, and integration with ridge caps, hip tiles, and valley tiles.',
    },
    {
      number: 5,
      title: 'Quality Inspection',
      description: 'Comprehensive inspection of all tile placement, fastening integrity, waterproofing details, and ventilation. Final walkthrough and cleanup.',
    },
  ],
  features: [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Hurricane-Rated Protection',
      description: 'Tiles tested to withstand 150+ mph winds and large hail impact. Miami-Dade County approved for high-velocity hurricane zones.',
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Concrete vs Clay Options',
      description: 'Concrete tiles offer versatility and lower cost ($10-18/sq ft). Clay tiles provide traditional beauty and longest lifespan ($12-25/sq ft).',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Energy Efficiency',
      description: 'Thermal mass and air circulation reduce attic temperatures by 10-15°F. Energy Star certified options available for maximum savings.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Architectural Styles',
      description: 'Spanish barrel tiles, flat Mediterranean tiles, S-tiles, and interlocking profiles. Custom colors from terra cotta to slate gray.',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Minimal Maintenance',
      description: 'Tiles don\'t rot, warp, or require painting. Occasional inspections and underlayment renewal every 25-30 years is typically all that\'s needed.',
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Investment Value',
      description: 'Highest ROI of any roofing material. Premium homes with tile roofs command 5-15% higher resale values in coastal markets.',
    },
  ],
  faqs: [
    {
      question: 'How much does tile roofing cost in Myrtle Beach?',
      answer: 'Concrete tile roofing costs $10-18 per square foot installed, while clay tiles range $12-25 per square foot. For an average 2,000 sq ft home, expect $20,000-$50,000 total. While higher than asphalt, the 50-100+ year lifespan means tile roofs often cost less per year than shingles. Financing options available to make premium roofing affordable.',
    },
    {
      question: 'Is my house strong enough for a tile roof?',
      answer: 'Tile roofs weigh 850-1,100 pounds per roofing square (vs 250-350 lbs for asphalt shingles). Most homes built after 1990 in South Carolina can support tile roofing without modification. We provide free structural assessments by licensed engineers and can recommend cost-effective reinforcement if needed. Many homeowners choose concrete tiles which weigh 15-20% less than clay.',
    },
    {
      question: 'What\'s the difference between concrete and clay tiles?',
      answer: 'Clay tiles are traditional, made from natural clay, last 75-100+ years, and offer authentic Mediterranean appearance. They cost more but are lighter and more porous. Concrete tiles are modern, made from sand/cement/water, last 50-75 years, offer more color/style options, and cost 20-30% less. Both provide excellent hurricane resistance and energy efficiency. We help you choose based on budget, aesthetics, and structural considerations.',
    },
    {
      question: 'Can tile roofs withstand hurricanes in Myrtle Beach?',
      answer: 'Yes! Properly installed tile roofs are among the most hurricane-resistant systems available. They withstand winds of 150+ mph (Class H rating), resist flying debris impact (Class 4), and are Miami-Dade County approved for high-velocity hurricane zones. Individual tiles may crack from severe impacts, but the underlayment system prevents water intrusion. We use enhanced fastening systems and adhesives specifically engineered for coastal hurricane exposure.',
    },
    {
      question: 'How long do tile roofs last in coastal environments?',
      answer: 'Concrete tiles typically last 50-75 years in Myrtle Beach, while clay tiles can exceed 100 years. Tile is highly resistant to salt air, UV radiation, and humidity. Unlike asphalt shingles which deteriorate in 15-25 years coastally, tiles maintain their integrity indefinitely. The underlayment may need replacement every 25-30 years, but the tiles themselves can be reused, reducing long-term costs significantly.',
    },
    {
      question: 'What maintenance does a tile roof require?',
      answer: 'Tile roofs are extremely low-maintenance. Annual inspections to check for cracked tiles, clear debris from valleys, ensure proper flashing, and verify underlayment integrity. Professional cleaning every 3-5 years to remove moss/algae if desired. Replace individual cracked tiles as needed (typically very few). Unlike shingles, tiles never need replacement unless physically damaged. This minimal maintenance is a major advantage over other roofing materials.',
    },
    {
      question: 'Do tile roofs help lower energy bills?',
      answer: 'Yes significantly! Tile roofs reduce cooling costs by 20-40% through thermal mass (absorbing/releasing heat slowly) and natural air circulation between tiles and underlayment. This ventilation keeps attics 10-15°F cooler than with shingles. Light-colored tiles reflect solar heat (high solar reflectance). Energy Star certified tiles available for maximum efficiency. The energy savings often pay for 30-50% of the roof\'s cost over its lifetime.',
    },
    {
      question: 'Can you repair tile roofs or do they need replacement?',
      answer: 'Most tile damage is easily repairable! Individual tiles can be replaced without affecting surrounding tiles. We stock common tile profiles and can color-match older installations. Common repairs include replacing cracked tiles from storm debris, re-sealing flashing, addressing underlayment leaks, and replacing broken ridge/hip tiles. Complete roof replacement is rarely needed unless the home undergoes major renovation or you want to change tile style completely.',
    },
  ],
  priceRange: '$10-25 per sq ft installed',
  image: '/images/services/tile-roofing/hero.jpg',
  relatedServices: [
    { name: 'Metal Roofing', href: '/services/metal-roofing' },
    { name: 'Roof Inspections', href: '/services/roof-inspections' },
    { name: 'Hurricane Preparation', href: '/services/storm-damage' },
    { name: 'Residential Roofing', href: '/services/residential-roofing' },
    { name: 'Roof Replacement', href: '/services/roof-replacement' },
  ],
  emergencyService: false,
  responseTime: 'within 24 hours',
}

export default function TileRoofingPage() {
  return (
    <>
      <ServiceTemplate {...tileRoofingData} />

      {/* Schema Markup - Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Tile Roofing Installation',
            provider: {
              '@type': 'RoofingContractor',
              name: 'Weather Shield Roofing',
              telephone: '+1-843-877-5539',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Myrtle Beach',
                addressRegion: 'SC',
                addressCountry: 'US',
              },
            },
            areaServed: {
              '@type': 'City',
              name: 'Myrtle Beach',
              '@id': 'https://en.wikipedia.org/wiki/Myrtle_Beach,_South_Carolina',
            },
            description: 'Professional concrete and clay tile roofing installation with 50-100+ year lifespan and hurricane resistance up to 150+ mph.',
            offers: {
              '@type': 'Offer',
              priceRange: '$10-25 per square foot',
              priceCurrency: 'USD',
            },
          }),
        }}
      />

      {/* Schema Markup - FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: tileRoofingData.faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  )
}
