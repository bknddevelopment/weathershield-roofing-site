import type { Metadata } from 'next'
import ServiceTemplate from '../../components/ServiceTemplate'
import { Building, Shield, Zap, Award, CheckCircle, Droplets } from 'lucide-react'

export const metadata: Metadata = {
  title: 'TPO Roof Installation | PVC Roofing | Flat Roof Materials Myrtle Beach',
  description: 'Commercial flat roofing experts. TPO, PVC, EPDM rubber roofing. 20-30 year warranties. Energy-efficient white membranes. Free commercial roof estimates.',
  keywords: 'tpo roof, pvc roofing, flat roof materials, epdm roofing, commercial roofing, rubber roofing, flat roof installation, low slope roofing',
  alternates: {
    canonical: 'https://weathershieldroofers.com/services/flat-roofing',
  },
  openGraph: {
    title: 'TPO & PVC Flat Roofing | Commercial Roof Installation Myrtle Beach',
    description: 'Expert TPO, PVC, and EPDM flat roofing. Energy-efficient commercial solutions. 20-30 year warranties. Free estimates.',
    url: 'https://weathershieldroofers.com/services/flat-roofing',
    type: 'website',
  },
}

const flatRoofingData = {
  title: 'TPO, PVC & Flat Roofing Systems',
  description: 'Professional flat and low-slope roofing solutions for commercial and residential properties featuring energy-efficient membrane systems built for coastal durability.',
  longDescription: [
    'Flat and low-slope roofing requires specialized expertise and materials distinct from traditional pitched roofs. Weather Shield Roofing provides complete flat roofing solutions for commercial buildings, modern homes, and roof additions throughout Myrtle Beach. We specialize in TPO (thermoplastic polyolefin), PVC (polyvinyl chloride), EPDM (rubber), and built-up roofing systems that deliver decades of watertight performance.',
    'Modern single-ply membrane roofing systems have revolutionized flat roof performance. TPO roofing combines affordability with excellent durability, costing $5-8 per square foot with 20-25 year lifespans. PVC roofing offers premium performance at $6-10 per square foot with superior chemical resistance and 25-30 year longevity. Both feature bright white reflective surfaces that reduce cooling costs by 25-40%—critical for commercial buildings with extensive flat roof areas.',
    'Weather Shield Roofing\'s commercial roofing division has completed hundreds of flat roof projects including retail centers, office buildings, warehouses, restaurants, and multi-family housing. We\'re certified installers for GAF, Firestone, Carlisle, and Johns Manville flat roofing systems. Every installation includes proper drainage design, insulation upgrades, flashing details, and manufacturer-backed warranties. Our preventive maintenance programs extend roof life and protect your investment.',
  ],
  benefits: [
    'Energy-efficient white membrane options',
    'Lower cost per square foot than sloped roofs',
    '20-30 year manufacturer warranties',
    'Excellent for commercial applications',
    'Heat-welded seams (TPO/PVC) prevent leaks',
    'Puncture and tear resistant',
    'UV and ozone resistant',
    'Quick installation minimizes business disruption',
    'Renewable and recyclable materials',
    'Multiple installation methods (mechanically attached, fully adhered, ballasted)',
    'Excellent wind uplift resistance',
    'Compatible with rooftop HVAC and solar',
  ],
  process: [
    {
      number: 1,
      title: 'Roof Assessment & Design',
      description: 'Comprehensive evaluation of existing roof condition, drainage, insulation R-value, and structural capacity. System selection (TPO vs PVC vs EPDM) based on budget, performance needs, and building use.',
    },
    {
      number: 2,
      title: 'Preparation & Tearoff',
      description: 'Remove existing roofing if necessary. Inspect and repair roof deck. Install new tapered insulation system for proper drainage. Ensure all penetrations are properly addressed.',
    },
    {
      number: 3,
      title: 'Membrane Installation',
      description: 'Professional installation of TPO, PVC, or EPDM membrane using mechanically attached, fully adhered, or ballasted method. Proper overlap and seam preparation.',
    },
    {
      number: 4,
      title: 'Seam Welding & Detailing',
      description: 'Hot-air welding of all seams (TPO/PVC) creates monolithic waterproof barrier. Custom flashing fabrication around HVAC units, pipes, drains, and roof edges. Termination bar installation.',
    },
    {
      number: 5,
      title: 'Quality Assurance',
      description: 'Comprehensive inspection of all seams, flashings, and penetrations. Flood testing of drains. Final walkthrough and warranty documentation. Maintenance plan recommendation.',
    },
  ],
  features: [
    {
      icon: <Building className="w-8 h-8" />,
      title: 'Flat Roofing Material Options',
      description: 'TPO (economical, reflective, durable), PVC (premium, chemical-resistant, longest-lasting), EPDM (rubber, flexible, proven track record), Built-Up (traditional tar & gravel).',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'TPO Roofing Systems',
      description: 'Most popular commercial flat roofing. White reflective surface reduces cooling costs 25%+. Heat-welded seams prevent leaks. Excellent puncture resistance. Cost-effective at $5-8/sq ft.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'PVC Roofing Systems',
      description: 'Premium flat roofing with 25-30 year lifespan. Superior chemical, grease, and fire resistance. Ideal for restaurants, hospitals, manufacturing. Highly reflective for energy savings.',
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'EPDM Rubber Roofing',
      description: 'Proven 50+ year track record. Excellent flexibility withstands expansion/contraction. UV and ozone resistant. Available in black (heat-absorbing) or white (reflective). Most affordable option.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Installation Methods',
      description: 'Mechanically attached (fastest, wind-resistant), fully adhered (strongest, best wind uplift), ballasted (economical, re-roofing friendly). We recommend best method for your building.',
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Commercial Expertise',
      description: 'Specialized in minimizing business disruption. After-hours and weekend installation available. Proper coordination with facility managers. All work fully insured and bonded.',
    },
  ],
  faqs: [
    {
      question: 'What is the best flat roofing material for commercial buildings?',
      answer: 'TPO roofing is currently the most popular for commercial buildings due to excellent balance of performance, cost, and energy efficiency. It costs $5-8/sq ft, lasts 20-25 years, and white reflective surface reduces cooling costs significantly. PVC roofing ($6-10/sq ft) is best for restaurants or chemical exposure due to superior grease and chemical resistance. EPDM rubber roofing is most economical but less energy-efficient in black. We help you select based on building use, budget, and performance priorities.',
    },
    {
      question: 'How long do TPO and PVC roofs last in coastal areas?',
      answer: 'TPO roofs last 20-25 years in Myrtle Beach coastal climate with proper installation and maintenance. PVC roofs last 25-30 years, making them longest-lasting single-ply membrane. Both resist salt-air corrosion, UV degradation, and humidity exceptionally well. EPDM rubber can last 25-30 years. Lifespan depends heavily on installation quality, seam integrity, and regular maintenance. Roofs with standing water or improper drainage fail prematurely. Our installations include proper tapered insulation systems ensuring drainage.',
    },
    {
      question: 'How much does commercial flat roof replacement cost?',
      answer: 'Commercial flat roof replacement costs $5-10 per square foot depending on material and installation method. TPO averages $5-8/sq ft. PVC runs $6-10/sq ft. EPDM costs $4-7/sq ft. For a 10,000 sq ft commercial building, expect $50,000-$100,000 including tear-off, insulation, new membrane, and flashing. Prices vary based on roof access, penetrations (HVAC units, pipes), existing damage, and insulation upgrades. Recovering over existing roof (when possible) saves 20-30% vs complete tear-off.',
    },
    {
      question: 'What is the difference between TPO and PVC roofing?',
      answer: 'Both are thermoplastic single-ply membranes with heat-welded seams, but differ in key ways: TPO costs less ($5-8/sq ft vs $6-10/sq ft for PVC), has 20-25 year lifespan (vs 25-30 for PVC), and is widely used for general commercial applications. PVC offers superior chemical, grease, and fire resistance—making it ideal for restaurants, hospitals, and manufacturing. PVC is more flexible in cold weather. Both are highly reflective and energy-efficient. TPO is most cost-effective for standard applications; PVC for demanding environments.',
    },
    {
      question: 'Can flat roofs withstand hurricanes and heavy rain?',
      answer: 'Yes, when properly installed with appropriate wind uplift ratings. Modern flat roofing systems are engineered and tested for high-wind hurricane zones. Mechanically attached and fully adhered systems provide superior wind resistance compared to ballasted. Proper edge termination and seam strength are critical. We install systems meeting Miami-Dade hurricane requirements. Heavy rain requires proper drainage—ponding water dramatically shortens roof life. All our flat roofs include tapered insulation systems directing water to drains. Scuppers provide emergency overflow protection.',
    },
    {
      question: 'Do white flat roofs really save energy?',
      answer: 'Absolutely! White TPO and PVC roofs reflect 70-85% of solar energy (vs 5-15% for dark roofs), reducing rooftop surface temperatures by 50-80°F. This translates to 25-40% cooling cost reduction for commercial buildings with significant flat roof area. ENERGY STAR certified systems qualify for utility rebates and tax incentives. In Myrtle Beach\'s hot climate, reflective roofing typically pays for itself through energy savings within 5-10 years. The larger the roof, the greater the savings. Essential for reducing AC costs in commercial buildings.',
    },
    {
      question: 'How often should commercial flat roofs be maintained?',
      answer: 'Commercial flat roofs require semi-annual inspections (spring and fall) plus post-storm checks. Maintenance includes clearing drains and scuppers, removing debris, inspecting seams and flashings, addressing ponding water, and repairing minor damage before it spreads. Regular maintenance extends roof life 30-50%—turning a 20-year roof into 30+ years. We offer maintenance contracts starting at $500-2,000 annually depending on roof size. Preventive maintenance costs 10-20% of reactive repairs and prevents business disruption from emergency leaks.',
    },
    {
      question: 'Can you install solar panels on flat roofs?',
      answer: 'Yes! Flat roofs are ideal for solar installations. TPO and PVC membranes are compatible with ballasted solar racking systems (no roof penetrations) and attached systems. We coordinate with solar installers to ensure proper flashing, maintain warranty coverage, and verify structural capacity. Consider installing solar during roof replacement for maximum efficiency. White reflective roofing under solar panels enhances performance by reflecting light back to panel undersides. Many commercial buildings combine energy-efficient roofing with solar for maximum sustainability and cost savings.',
    },
  ],
  priceRange: '$5-10 per sq ft installed',
  image: '/images/services/flat-roofing/hero.jpg',
  relatedServices: [
    { name: 'Commercial Roofing', href: '/services/commercial-roofing' },
    { name: 'Roof Inspections', href: '/services/roof-inspections' },
    { name: 'Roof Maintenance', href: '/services/roof-maintenance' },
    { name: 'Metal Roofing', href: '/services/metal-roofing' },
    { name: 'Emergency Repairs', href: '/services/emergency-roofing' },
  ],
  emergencyService: false,
  responseTime: 'within 24 hours',
}

export default function FlatRoofingPage() {
  return (
    <>
      <ServiceTemplate {...flatRoofingData} />

      {/* Schema Markup - Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Flat Roofing Installation',
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
            description: 'Professional TPO, PVC, and EPDM flat roofing installation for commercial and residential properties with 20-30 year warranties.',
            offers: {
              '@type': 'Offer',
              priceRange: '$5-10 per square foot',
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
            mainEntity: flatRoofingData.faqs.map((faq) => ({
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
