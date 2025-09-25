import type { Metadata } from 'next'
import ServiceTemplate from '../../components/ServiceTemplate'
import { Sun, Zap, DollarSign, Leaf, Home, ThermometerSun } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Energy Efficient Roofing Myrtle Beach | Weather Shield Cool Roof Systems',
  description: 'Weather Shield Roofing energy-efficient solutions reduce cooling costs 20-40% in Myrtle Beach. Cool roof technology, proper insulation, solar-ready installations. Save money and the environment.',
  keywords: 'energy efficient roofing myrtle beach, cool roof technology, reflective roofing, solar ready roofing, energy star roofing, insulation upgrades, weathershield energy savings, weather shield roofing, reduce cooling costs, sustainable roofing myrtle beach',
  alternates: {
    canonical: 'https://weathershieldroofers.com/services/energy-efficient-roofing',
  },
  openGraph: {
    title: 'Energy Efficient Roofing Solutions | Weather Shield Roofing',
    description: 'Reduce energy costs with cool roof technology and proper insulation. Save 20-40% on cooling bills in Myrtle Beach.',
    url: 'https://weathershieldroofers.com/services/energy-efficient-roofing',
    type: 'website',
    images: [
      {
        url: 'https://weathershieldroofers.com/images/energy-efficient-roofing.jpg',
        width: 1200,
        height: 630,
        alt: 'Energy Efficient Roofing Systems by Weather Shield',
      }
    ],
  },
}

const energyEfficientRoofingData = {
  title: 'Energy Efficient Roofing Solutions - Weather Shield Roofing',
  description: 'Weather Shield Roofing\'s energy-efficient systems reduce cooling costs 20-40% in Myrtle Beach\'s hot climate while providing superior weathershield protection and environmental benefits.',
  longDescription: [
    'In Myrtle Beach\'s subtropical climate where cooling costs dominate energy bills, Weather Shield Roofing\'s energy-efficient roofing solutions provide significant savings while enhancing comfort. Our cool roof technology and comprehensive insulation upgrades can reduce your energy consumption by 20-40%, paying for themselves through lower utility bills while extending your roof\'s lifespan.',
    'Energy-efficient roofing goes beyond just reflective materials. Weather Shield Roofing takes a whole-system approach, incorporating proper ventilation, radiant barriers, upgraded insulation, and smart material selection. This comprehensive strategy not only reduces energy costs but also minimizes temperature fluctuations, reduces HVAC strain, and creates a more comfortable living environment year-round.',
    'Our ENERGY STAR certified roofing materials reflect more sunlight and absorb less heat than standard roofing, keeping your home cooler naturally. Combined with proper attic ventilation and insulation, these systems can reduce roof surface temperatures by up to 50°F on hot summer days. This dramatic temperature reduction translates directly to lower cooling costs and extended shingle life.',
    'Weather Shield Roofing also specializes in solar-ready installations, preparing your roof for future solar panel integration. Our reinforced mounting points and electrical conduit pathways make adding solar panels simple and cost-effective. Many homeowners combine energy-efficient roofing with solar to achieve near-zero energy costs.',
    'Environmental responsibility is built into every energy-efficient roof we install. By reducing energy consumption, our systems lower carbon emissions while many of our materials contain recycled content and are fully recyclable at end of life. Choose Weather Shield Roofing for a solution that\'s good for your wallet and the environment.'
  ],
  benefits: [
    '20-40% reduction in cooling costs',
    'ENERGY STAR certified materials',
    'Extended roof lifespan from reduced thermal stress',
    'Improved indoor comfort year-round',
    'Reduced HVAC system wear',
    'Potential utility rebates and tax credits',
    'Solar-ready installation options',
    'Environmentally sustainable materials',
    'Increased home value and marketability',
    'Lower carbon footprint'
  ],
  process: [
    {
      number: 1,
      title: 'Energy Audit',
      description: 'Comprehensive assessment of current energy usage and roof performance'
    },
    {
      number: 2,
      title: 'Heat Mapping',
      description: 'Thermal imaging to identify heat loss and inefficiencies'
    },
    {
      number: 3,
      title: 'Custom Solution Design',
      description: 'Tailored system combining materials, ventilation, and insulation'
    },
    {
      number: 4,
      title: 'Material Selection',
      description: 'Choose ENERGY STAR rated materials with optimal reflectivity'
    },
    {
      number: 5,
      title: 'Professional Installation',
      description: 'Expert installation ensuring maximum energy efficiency'
    },
    {
      number: 6,
      title: 'Performance Verification',
      description: 'Post-installation testing to confirm energy savings'
    }
  ],
  features: [
    {
      icon: <Sun className="w-8 h-8" />,
      title: 'Cool Roof Technology',
      description: 'High-reflectance materials reduce heat absorption by up to 70%'
    },
    {
      icon: <ThermometerSun className="w-8 h-8" />,
      title: 'Temperature Control',
      description: 'Maintain consistent indoor temperatures with less HVAC usage'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Guaranteed Savings',
      description: 'Documented energy cost reductions with typical 3-5 year ROI'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Solar Integration',
      description: 'Roof prepared for seamless solar panel installation'
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Eco-Friendly',
      description: 'Sustainable materials with recycled content and recyclability'
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Whole-Home Approach',
      description: 'Comprehensive system including ventilation and insulation'
    }
  ],
  faqs: [
    {
      question: 'How much can I save with energy-efficient roofing?',
      answer: 'Most Myrtle Beach homeowners save 20-40% on cooling costs with our energy-efficient roofing systems. Actual savings depend on factors like home size, current insulation, HVAC efficiency, and usage patterns. A typical 2,000 sq ft home can save $400-800 annually on energy bills. Combined with the extended roof lifespan from reduced thermal stress, total savings often exceed $10,000 over the roof\'s lifetime.'
    },
    {
      question: 'What makes a roof energy efficient?',
      answer: 'Energy-efficient roofing combines multiple elements: highly reflective surface materials that bounce sunlight away, proper attic ventilation to remove hot air, adequate insulation (R-30 minimum in our climate), radiant barriers to block heat transfer, and sealed air leaks to prevent conditioned air loss. Weather Shield Roofing optimizes all these components for maximum efficiency in Myrtle Beach\'s climate.'
    },
    {
      question: 'Are cool roofs only available in light colors?',
      answer: 'No! Modern cool roof technology offers a wide range of colors including darker shades. Advanced pigments can reflect invisible infrared light while maintaining traditional appearance. We offer ENERGY STAR rated shingles in dozens of colors that complement any architectural style while providing superior energy efficiency.'
    },
    {
      question: 'Is energy-efficient roofing worth it in South Carolina?',
      answer: 'Absolutely! South Carolina\'s hot, humid climate makes energy-efficient roofing especially valuable. With cooling season lasting 6-7 months and summer temperatures regularly exceeding 90°F, the energy savings are substantial. Plus, many utilities offer rebates, and federal tax credits may apply, improving your return on investment.'
    },
    {
      question: 'Can energy-efficient roofing be added to existing roofs?',
      answer: 'While complete replacement provides maximum efficiency, we can upgrade existing roofs with reflective coatings, improved ventilation, and insulation enhancements. These modifications can achieve 10-20% energy savings at a fraction of replacement cost. A professional assessment determines the best approach for your situation.'
    },
    {
      question: 'How does energy-efficient roofing affect home value?',
      answer: 'Energy-efficient roofing typically increases home value by 2-5% while making your property more attractive to buyers. Lower utility costs, improved comfort, and environmental benefits appeal to today\'s homebuyers. Many buyers specifically seek energy-efficient features, giving your home a competitive advantage.'
    }
  ],
  priceRange: '$9,500 - $28,000 (includes insulation upgrades)',
  image: '/images/background/energy-efficient-roofing.jpg',
  relatedServices: [
    { name: 'Roof Replacement', href: '/services/roof-replacement' },
    { name: 'Roof Insulation', href: '/services/roof-maintenance' },
    { name: 'Storm Shield Protection', href: '/services/storm-shield-protection' },
    { name: 'Commercial Roofing', href: '/services/commercial-roofing' }
  ],
  emergencyService: false,
  responseTime: 'Free energy audit within 48 hours',
  ctaText: 'Start Saving with Energy-Efficient Roofing',
  ctaSubtext: 'Get your free energy audit and savings estimate from Weather Shield Roofing'
}

export default function EnergyEfficientRoofingPage() {
  return (
    <>
      <ServiceTemplate {...energyEfficientRoofingData} />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Energy Efficient Roofing",
            "provider": {
              "@type": "RoofingContractor",
              "name": "Weather Shield Roofing",
              "telephone": "+1-843-877-5539",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Myrtle Beach",
                "addressRegion": "SC"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "Myrtle Beach"
            },
            "description": "Energy-efficient roofing solutions that reduce cooling costs 20-40%",
            "name": "Energy Efficient Roofing"
          })
        }}
      />
    </>
  )
}