import type { Metadata } from 'next'
import ServiceTemplate from '../../components/ServiceTemplate'
import { Home, Shield, Clock, DollarSign, Wrench, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roof Replacement Myrtle Beach | Weather Shield Roofing Contractors',
  description: 'Weather Shield Roofing - Expert roof replacement Myrtle Beach trusts. Leading roofing contractors Myrtle Beach for residential weathershield roofing. Storm shield protection for homes.',
  keywords: 'roof replacement myrtle beach, weathershield roofing, weather shield roofing, roofing contractors myrtle beach, residential roofing myrtle beach sc, storm shield roofing, roofers in myrtle beach, home roof repair myrtle beach, shingle roofing contractors, roofing companies myrtle beach',
  alternates: {
    canonical: 'https://weathershieldroofers.com/services/residential-roofing',
  },
  openGraph: {
    title: 'Residential Roofing Services | Weather Shield Roofing',
    description: 'Expert residential roofing installation, repair, and replacement services in Myrtle Beach.',
    url: 'https://weathershieldroofers.com/services/residential-roofing',
    type: 'website',
  },
}

const residentialRoofingData = {
  title: 'Roof Replacement Myrtle Beach - Weather Shield Roofing',
  description: 'Weather Shield Roofing - Premier roof replacement Myrtle Beach specialists. Expert weathershield roofing contractors providing storm shield protection with lifetime warranties.',
  longDescription: [
    'Weather Shield Roofing is the leading choice for roof replacement Myrtle Beach homeowners trust. As top-rated roofing contractors Myrtle Beach, we specialize in comprehensive weathershield roofing solutions that provide superior storm shield protection. Our roofing companies in Myrtle Beach SC division combines durability, aesthetics, and energy efficiency for complete weather protection.',
    'With over 15 years of experience serving the Grand Strand area, our certified team has completed over 5,000 residential roofing projects. We pride ourselves on using only the highest quality materials from trusted manufacturers, backed by industry-leading warranties that give you peace of mind for decades to come.',
    'Whether you need a complete roof replacement, storm damage repair, or routine maintenance, our expert technicians deliver exceptional craftsmanship on every project. We work with all types of roofing materials including architectural shingles, metal roofing, tile, and slate, ensuring your home gets the perfect roofing solution for our coastal climate.'
  ],
  benefits: [
    'Certified Roofing Contractor - Premium Quality Service',
    'Lifetime workmanship warranty available',
    'Comprehensive roof inspections',
    'Insurance claim assistance and documentation',
    'Energy-efficient roofing options to reduce cooling costs',
    '24/7 emergency storm damage response',
    'Financing options with approved credit',
    '10-point quality assurance inspection'
  ],
  process: [
    {
      number: 1,
      title: 'Roof Inspection',
      description: 'Comprehensive 21-point inspection with detailed photo documentation'
    },
    {
      number: 2,
      title: 'Custom Proposal',
      description: 'Detailed quote with material options and warranty information'
    },
    {
      number: 3,
      title: 'Material Selection',
      description: 'Choose from premium brands like Owens Corning, CertainTeed, and other trusted manufacturers'
    },
    {
      number: 4,
      title: 'Professional Installation',
      description: 'Expert installation by certified technicians following manufacturer specifications'
    },
    {
      number: 5,
      title: 'Quality Inspection',
      description: 'Final walkthrough and warranty registration for your protection'
    }
  ],
  features: [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Lifetime Protection',
      description: 'Industry-leading warranties up to 50 years on materials and workmanship'
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Increased Home Value',
      description: 'Quality roofing can increase your property value by up to 7%'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Fast Installation',
      description: 'Most residential roofs completed in 1-2 days with minimal disruption'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Competitive Pricing',
      description: 'Fair, transparent pricing with no hidden fees or surprise charges'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Expert Craftsmanship',
      description: 'Factory-certified installers with ongoing training and certification'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Award-Winning Service',
      description: 'Recognized for excellence in customer satisfaction and quality'
    }
  ],
  faqs: [
    {
      question: 'How often should I replace my residential roof?',
      answer: 'Most asphalt shingle roofs last 20-30 years, while metal and tile roofs can last 50+ years. Factors like weather exposure, maintenance, and installation quality affect lifespan. We recommend annual inspections to monitor your roof\'s condition.'
    },
    {
      question: 'What are signs I need a new roof?',
      answer: 'Common signs include missing or curled shingles, granules in gutters, daylight through roof boards, sagging areas, water stains on ceilings, and roofs over 20 years old. Our inspection can determine if repair or replacement is needed.'
    },
    {
      question: 'How long does residential roof installation take?',
      answer: 'Most residential roof replacements are completed in 1-2 days, depending on size and complexity. We work efficiently to minimize disruption to your daily routine while maintaining our high quality standards.'
    },
    {
      question: 'Do you help with insurance claims?',
      answer: 'Yes! We work directly with insurance companies to document storm damage, provide detailed estimates, and ensure you receive fair compensation. Our team handles the paperwork so you can focus on getting your home protected.'
    },
    {
      question: 'What roofing materials do you recommend for coastal homes?',
      answer: 'For Myrtle Beach\'s coastal climate, we recommend impact-resistant architectural shingles, metal roofing, or concrete tiles. These materials withstand high winds, salt air, and intense sun while providing excellent protection and curb appeal.'
    }
  ],
  priceRange: 'Contact us for a free estimate',
  image: '/images/background/residential-roofing-gutter-siding-services.jpg',
  relatedServices: [
    { name: 'Storm Damage Repair', href: '/services/storm-damage' },
    { name: 'Roof Inspections', href: '/services/roof-inspections' },
    { name: 'Gutter Installation', href: '/services/gutter-services' },
    { name: 'Siding Services', href: '/services/siding-installation' }
  ],
  emergencyService: true,
  responseTime: 'within 24 hours'
}

export default function ResidentialRoofingPage() {
  return <ServiceTemplate {...residentialRoofingData} />
}