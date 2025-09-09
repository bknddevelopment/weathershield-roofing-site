import type { Metadata } from 'next'
import ServiceTemplate from '../../components/ServiceTemplate'
import { Wrench, AlertTriangle, Clock, Shield, DollarSign, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roof Repair Services | Weather Shield Roofing',
  description: 'Expert roof repair services in Myrtle Beach. From minor leaks to major damage, we provide fast, reliable repairs with warranty protection.',
  keywords: 'roof repair, leak repair, shingle repair, emergency roof repair, roof patching, Myrtle Beach',
}

const roofRepairData = {
  title: 'Roof Repair Services',
  description: 'Fast, reliable roof repairs to protect your home from water damage. Same-day service available for emergency repairs.',
  longDescription: [
    'When your roof develops problems, quick action is essential to prevent water damage and costly structural issues. Weather Shield Roofing specializes in all types of roof repairs, from minor leaks to major storm damage, providing fast and reliable solutions that restore your roof\'s integrity.',
    'Our experienced technicians are trained to identify and fix roofing problems efficiently, using quality materials that match your existing roof. We understand that roof damage can be stressful, which is why we offer same-day emergency service and work directly with insurance companies to streamline the repair process.',
    'With over 15 years serving Myrtle Beach and the Grand Strand, we\'ve repaired thousands of roofs damaged by storms, age, and wear. Our commitment to quality repairs and honest pricing has made us the trusted choice for homeowners throughout the region.'
  ],
  benefits: [
    'Same-day emergency repair service',
    'Free detailed repair estimates',
    'All repairs backed by warranty',
    'Insurance claim assistance',
    'Match existing roofing materials',
    'Prevent water damage and mold',
    'Extend your roof\'s lifespan',
    'Certified and insured technicians'
  ],
  process: [
    {
      number: 1,
      title: 'Emergency Response',
      description: 'Quick response to prevent further damage, temporary protection if needed'
    },
    {
      number: 2,
      title: 'Damage Assessment',
      description: 'Thorough inspection to identify all issues and document for insurance'
    },
    {
      number: 3,
      title: 'Repair Plan',
      description: 'Detailed estimate with repair options and timeline'
    },
    {
      number: 4,
      title: 'Professional Repair',
      description: 'Expert repairs using quality materials that match your roof'
    },
    {
      number: 5,
      title: 'Quality Check',
      description: 'Final inspection to ensure repairs are watertight and secure'
    }
  ],
  features: [
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Emergency Service',
      description: '24/7 emergency response for urgent roof repairs'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'All Repair Types',
      description: 'Leaks, missing shingles, flashing, vents, and more'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Fast Response',
      description: 'Same-day service for most repair needs'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Warranty Protection',
      description: 'All repairs backed by our workmanship warranty'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Fair Pricing',
      description: 'Honest, upfront pricing with no hidden charges'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Quality Materials',
      description: 'Premium materials that match your existing roof'
    }
  ],
  faqs: [
    {
      question: 'How quickly can you respond to emergency roof repairs?',
      answer: 'We offer 24/7 emergency service and typically respond within 2-4 hours for urgent repairs. Our team can provide temporary protection immediately and schedule permanent repairs as soon as possible.'
    },
    {
      question: 'What are common signs I need roof repair?',
      answer: 'Common signs include water stains on ceilings, missing or damaged shingles, granules in gutters, daylight through roof boards, sagging areas, and increased energy bills. If you notice any of these, call for a free inspection.'
    },
    {
      question: 'Can you repair my roof or does it need replacement?',
      answer: 'Many roofing issues can be effectively repaired if caught early. Our free inspection will determine whether repair or replacement is the most cost-effective solution for your situation.'
    },
    {
      question: 'Do you work with insurance companies?',
      answer: 'Yes! We work directly with all major insurance companies, document damage thoroughly, and help you navigate the claims process to ensure you receive fair compensation for covered repairs.'
    },
    {
      question: 'How much do roof repairs typically cost?',
      answer: 'Repair costs vary based on the extent of damage, but minor repairs typically range from $300-$1,500, while major repairs can range from $1,500-$5,000. We provide free estimates before any work begins.'
    }
  ],
  priceRange: '$300 - $5,000',
  image: '/images/background/roof-replacement-services.jpg',
  relatedServices: [
    { name: 'Emergency Roofing', href: '/services/emergency-roofing' },
    { name: 'Storm Damage Repair', href: '/services/storm-damage' },
    { name: 'Roof Inspections', href: '/services/roof-inspections' },
    { name: 'Roof Replacement', href: '/services/residential-roofing' }
  ],
  emergencyService: true,
  responseTime: 'within 2-4 hours'
}

export default function RoofRepairPage() {
  return <ServiceTemplate {...roofRepairData} />
}