import type { Metadata } from 'next'
import ServiceTemplate from '../../components/ServiceTemplate'
import { Zap, Shield, DollarSign, Award, TrendingUp, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Metal Roof Installation Myrtle Beach | Steel Roofing Contractors SC',
  description: 'Expert metal roof installation in Myrtle Beach. 50+ year lifespan, 140+ mph wind resistance, energy efficient. Standing seam, corrugated, metal shingles. Free estimates.',
  keywords: 'metal roof installation, metal roofing installation, steel roof installation, standing seam metal roof, corrugated metal roofing, metal shingles, aluminum roofing',
  alternates: {
    canonical: 'https://weathershieldroofers.com/services/metal-roofing',
  },
  openGraph: {
    title: 'Metal Roof Installation | 50+ Year Hurricane-Resistant Metal Roofing',
    description: '50+ year lifespan. 140+ mph hurricane resistance. Energy Star certified. Standing seam & metal shingles. Free metal roofing consultation.',
    url: 'https://weathershieldroofers.com/services/metal-roofing',
    type: 'website',
  },
}

const metalRoofingData = {
  title: 'Metal Roof Installation',
  description: 'Premium metal roofing systems engineered for superior durability, hurricane resistance, and energy efficiency in coastal South Carolina.',
  longDescription: [
    'Metal roofing has become the fastest-growing roofing choice for Myrtle Beach homeowners seeking the ultimate combination of longevity, storm protection, and energy efficiency. Weather Shield Roofing specializes in all metal roofing systems—from traditional standing seam to architectural metal shingles—providing solutions that last 50-70 years with minimal maintenance while significantly reducing cooling costs.',
    'Our coastal climate is ideal for modern metal roofing. Unlike traditional perceptions, today\'s metal roofs are quiet during rain, available in dozens of colors and styles, and engineered to withstand hurricane winds exceeding 140 mph. Metal roofing excels in salt-air environments when properly coated, reflects up to 70% of solar heat to reduce cooling costs by 20-25%, and qualifies for insurance discounts due to superior impact and fire resistance.',
    'Weather Shield Roofing installs premium metal roofing from leading manufacturers including standing seam panels (commercial and residential), stone-coated metal shingles (traditional appearance), corrugated metal (cost-effective), and architectural metal tiles (luxury aesthetic). Every installation includes synthetic underlayment, concealed fastening systems for standing seam, proper thermal expansion provisions, and lifetime workmanship warranty. Our certified installers are factory-trained in proper metal roofing techniques specific to coastal hurricane zones.',
  ],
  benefits: [
    'Exceptional 50-70 year lifespan',
    'Hurricane-resistant (140+ mph wind ratings)',
    'Energy efficient (20-25% cooling cost reduction)',
    'Fire resistant (Class A rating)',
    'Impact resistant (Class 4 available)',
    'Lightweight (half the weight of tile)',
    'Low maintenance requirements',
    'Environmentally friendly and 100% recyclable',
    'Insurance premium discounts available',
    'Won\'t crack, warp, or corrode with proper coating',
    'Multiple style options (shingles, panels, tiles)',
    'Superior snow and ice shedding',
  ],
  process: [
    {
      number: 1,
      title: 'Consultation & Assessment',
      description: 'Roof evaluation to determine best metal system. Review standing seam vs metal shingles vs corrugated. Color and style selection. Energy efficiency analysis.',
    },
    {
      number: 2,
      title: 'Material Selection',
      description: 'Choose from aluminum (corrosion-resistant), steel (strong and affordable), copper (premium luxury), or zinc. Kynar 500 coating selection for optimal durability and color retention.',
    },
    {
      number: 3,
      title: 'Deck Preparation',
      description: 'Deck inspection and repairs. Installation of synthetic underlayment with high-temperature resistance. Proper ventilation design for metal systems.',
    },
    {
      number: 4,
      title: 'Professional Installation',
      description: 'Expert panel or shingle installation using concealed fastening (standing seam) or exposed fastening (shingles). Proper thermal expansion clips. Custom flashing fabrication.',
    },
    {
      number: 5,
      title: 'Final Inspection',
      description: 'Comprehensive quality check of all seams, fasteners, flashings, and trim. Verification of proper drainage. Walkthrough and maintenance guidance.',
    },
  ],
  features: [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Types of Metal Roofing',
      description: 'Standing seam (concealed fasteners, sleek lines), corrugated metal (economical, durable), metal shingles (traditional appearance), stone-coated steel (textured beauty).',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Energy Star Certified',
      description: 'Cool metal roofing reflects 70% of solar energy, reducing attic temps by 30-50°F. ENERGY STAR rated options qualify for tax credits and utility rebates.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Hurricane Engineering',
      description: 'Miami-Dade County approved systems. Wind uplift ratings exceeding 140 mph. Tested and certified for high-velocity hurricane zones along the coast.',
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Metal vs Asphalt Comparison',
      description: 'Metal lasts 3-4x longer than asphalt, requires no maintenance, saves 20%+ on cooling, increases resale value, and often pays for itself in 15-20 years through energy savings.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Coastal Durability',
      description: 'Aluminum naturally resists salt-air corrosion. Kynar 500 coating on steel provides 30+ year finish warranty. Superior to asphalt shingles in humid, salty coastal environments.',
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Warranty Protection',
      description: 'Manufacturer warranties 30-50 years on finish, 50+ years on metal substrate. Lifetime transferable warranties available. Weather Shield lifetime workmanship warranty included.',
    },
  ],
  faqs: [
    {
      question: 'How much does metal roof installation cost in Myrtle Beach?',
      answer: 'Metal roofing costs $8-16 per square foot installed depending on material and style. Standing seam steel runs $9-12/sq ft. Aluminum standing seam costs $10-14/sq ft. Stone-coated metal shingles range $8-11/sq ft. For a 2,000 sq ft home, expect $16,000-$32,000. While more expensive than asphalt initially, metal roofs last 50-70 years (vs 15-25 for asphalt), require minimal maintenance, and reduce energy costs 20-25%, providing better lifetime value.',
    },
    {
      question: 'Will a metal roof be noisy when it rains?',
      answer: 'No! This is the most common metal roofing myth. Modern metal roofs installed over solid roof decking with proper underlayment and attic insulation are actually quieter than asphalt shingles during rain. The solid deck and insulation deaden sound effectively. In blind tests, homeowners often can\'t distinguish metal from asphalt roofs during rainstorms. Standing seam systems with concealed fasteners are especially quiet.',
    },
    {
      question: 'What type of metal roofing is best for coastal areas?',
      answer: 'For Myrtle Beach salt-air environments, aluminum standing seam is ideal as aluminum naturally resists corrosion and never rusts. Alternatively, steel with Kynar 500 coating provides excellent protection and costs less. Avoid galvanized steel without premium coatings near the coast. We recommend 24-26 gauge steel or .032-.040 aluminum thickness. Stone-coated steel with acrylic coating also performs well. All fasteners and flashing must be corrosion-resistant stainless steel or color-matched aluminum.',
    },
    {
      question: 'Can metal roofs withstand hurricanes in South Carolina?',
      answer: 'Absolutely! Metal roofing is one of the most hurricane-resistant systems available. Properly installed metal roofs withstand sustained winds of 140-180 mph depending on the system. Standing seam with concealed fasteners and mechanical seams offers superior wind resistance. Metal also resists impact from flying debris better than most materials. Many metal systems are Miami-Dade County approved for high-velocity hurricane zones. Insurance companies often provide discounts for metal roofing due to superior storm performance.',
    },
    {
      question: 'How long do metal roofs last in Myrtle Beach?',
      answer: 'Metal roofs last 50-70+ years in coastal South Carolina with minimal maintenance. Aluminum lasts longest (70+ years) due to natural corrosion resistance. Steel with quality Kynar 500 coating lasts 50-60 years. Copper and zinc can exceed 100 years. This is 3-4 times longer than asphalt shingles (15-25 years coastally). The finish warranty typically covers 30-40 years, while the metal substrate is warranted for 50+ years. Metal roofing often outlasts the building itself.',
    },
    {
      question: 'Do metal roofs help reduce energy costs?',
      answer: 'Yes significantly! Metal roofs with reflective coatings reduce cooling costs by 20-25%. They reflect 70% of solar radiation (vs 5-15% for asphalt), keeping attics 30-50°F cooler. This reduced heat transfer means AC runs less frequently. ENERGY STAR certified metal roofs qualify for federal tax credits and utility rebates. In Myrtle Beach\'s hot climate, metal roofing typically pays for itself through energy savings within 15-20 years, making it cost-effective long-term.',
    },
    {
      question: 'What\'s the difference between standing seam and metal shingles?',
      answer: 'Standing seam features vertical panels with concealed fasteners and raised seams, offering sleek modern appearance, superior water-tightness, and longest lifespan. Best for lower-slope roofs and commercial buildings. Metal shingles mimic traditional roofing (slate, shake, tile) with exposed fastening, easier installation, lower cost, and work on any roof pitch. Both provide excellent durability and hurricane resistance. Standing seam costs more but offers ultimate performance. Metal shingles provide metal benefits with traditional aesthetics at lower price.',
    },
    {
      question: 'Does metal roofing increase home value?',
      answer: 'Yes! Metal roofing increases home resale value by 1-6% depending on the market and home type. Coastal homes particularly benefit as buyers value storm resistance and low maintenance. Metal roofs transfer remaining warranty to new owners, making homes more attractive. Energy efficiency, insurance discounts, and minimal maintenance requirements are strong selling points. High-end metal systems (standing seam, copper) in luxury markets provide highest ROI. Metal roofing is increasingly seen as a premium upgrade rather than alternative.',
    },
  ],
  priceRange: '$8-16 per sq ft installed',
  image: '/images/services/metal-roofing/hero.jpg',
  relatedServices: [
    { name: 'Tile Roofing', href: '/services/tile-roofing' },
    { name: 'Solar Roofing', href: '/services/solar-roofing' },
    { name: 'Roof Inspections', href: '/services/roof-inspections' },
    { name: 'Residential Roofing', href: '/services/residential-roofing' },
    { name: 'Commercial Roofing', href: '/services/commercial-roofing' },
  ],
  emergencyService: false,
  responseTime: 'within 24 hours',
}

export default function MetalRoofingPage() {
  return (
    <>
      <ServiceTemplate {...metalRoofingData} />

      {/* Schema Markup - Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Metal Roof Installation',
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
            description: 'Professional metal roofing installation including standing seam, metal shingles, and corrugated systems with 50-70 year lifespan and hurricane resistance.',
            offers: {
              '@type': 'Offer',
              priceRange: '$8-16 per square foot',
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
            mainEntity: metalRoofingData.faqs.map((faq) => ({
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
