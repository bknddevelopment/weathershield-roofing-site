import type { Metadata } from 'next'
import ServiceTemplate from '../../components/ServiceTemplate'
import { Building, Clock, Shield, DollarSign, FileCheck, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Commercial Roofing Services | Weather Shield Roofing',
  description: 'Professional commercial roofing solutions in Myrtle Beach. Flat roofs, metal roofing, TPO, EPDM, and maintenance programs for businesses.',
  keywords: 'commercial roofing, flat roof, TPO roofing, EPDM, metal roofing, commercial roof repair',
  alternates: {
    canonical: 'https://weathershieldroofers.com/services/commercial-roofing',
  },
  openGraph: {
    title: 'Commercial Roofing Services | Weather Shield Roofing',
    description: 'Professional commercial roofing solutions in Myrtle Beach. Protect your business investment.',
    url: 'https://weathershieldroofers.com/services/commercial-roofing',
    type: 'website',
  },
}

const commercialRoofingData = {
  title: 'Commercial Roofing Services',
  description: 'Comprehensive commercial roofing solutions designed to protect your business investment with minimal disruption to operations.',
  longDescription: [
    'Weather Shield Roofing understands that your commercial property is a significant investment that requires specialized roofing solutions. Our commercial division has over 15 years of experience installing and maintaining roofs for retail centers, office buildings, warehouses, and industrial facilities throughout Myrtle Beach and the Grand Strand.',
    'We specialize in all types of commercial roofing systems including TPO, EPDM, modified bitumen, metal roofing, and built-up roofing. Our certified technicians are trained in the latest installation techniques and safety protocols, ensuring your project is completed on time, on budget, and with minimal disruption to your business operations.',
    'Beyond installation, we offer comprehensive maintenance programs designed to extend your roof\'s lifespan and protect your warranty. Our proactive approach helps identify potential issues before they become costly problems, saving you money and preventing business interruptions.'
  ],
  benefits: [
    'Minimal disruption to business operations',
    'All major commercial roofing systems',
    'Preventive maintenance programs',
    'Emergency repair response 24/7',
    'Project management and coordination',
    'Competitive commercial pricing',
    'Safety-certified installation teams',
    'Extended manufacturer warranties'
  ],
  process: [
    {
      number: 1,
      title: 'Consultation',
      description: 'On-site assessment and discussion of your specific needs'
    },
    {
      number: 2,
      title: 'Inspection & Analysis',
      description: 'Comprehensive roof evaluation with core samples if needed'
    },
    {
      number: 3,
      title: 'Custom Proposal',
      description: 'Detailed recommendations with multiple system options'
    },
    {
      number: 4,
      title: 'Project Planning',
      description: 'Scheduling to minimize business disruption'
    },
    {
      number: 5,
      title: 'Professional Installation',
      description: 'Certified crews following strict safety and quality protocols'
    },
    {
      number: 6,
      title: 'Final Inspection',
      description: 'Warranty registration and maintenance planning'
    }
  ],
  features: [
    {
      icon: <Building className="w-8 h-8" />,
      title: 'All Building Types',
      description: 'Retail, office, industrial, warehouse, and multi-family'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'System Expertise',
      description: 'TPO, EPDM, modified bitumen, metal, and built-up roofing'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Flexible Scheduling',
      description: 'Weekend and after-hours work to avoid disruption'
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: 'Maintenance Plans',
      description: 'Customized programs to protect your investment'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Budget Options',
      description: 'Repair, restoration, or replacement solutions'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Dedicated Team',
      description: 'Experienced commercial roofing specialists'
    }
  ],
  faqs: [
    {
      question: 'What types of commercial roofing systems do you install?',
      answer: 'We install all major commercial roofing systems including TPO (Thermoplastic Polyolefin), EPDM (rubber roofing), modified bitumen, metal roofing systems, built-up roofing (BUR), and PVC. We\'ll recommend the best system based on your building, budget, and specific needs.'
    },
    {
      question: 'How long does commercial roof installation take?',
      answer: 'Timeline varies based on roof size and complexity. Small commercial roofs (under 10,000 sq ft) typically take 3-5 days, while larger projects can take 2-4 weeks. We provide detailed timelines and work to minimize disruption to your operations.'
    },
    {
      question: 'Do you offer commercial roof maintenance programs?',
      answer: 'Yes! Our maintenance programs include bi-annual inspections, priority emergency service, preventive repairs, and detailed reporting. Regular maintenance can extend your roof\'s life by 30-50% and is often required to maintain warranties.'
    },
    {
      question: 'Can you work around our business hours?',
      answer: 'Absolutely. We understand the importance of maintaining business operations. We offer flexible scheduling including nights, weekends, and holidays to minimize disruption to your business and customers.'
    },
    {
      question: 'What warranties are available for commercial roofing?',
      answer: 'We offer manufacturer warranties up to 30 years on materials and our own workmanship warranties up to 10 years. We\'re certified installers for major manufacturers, allowing us to offer the best warranty packages available.'
    }
  ],
  priceRange: 'Request a custom quote',
  image: '/images/background/home-exterior-improvement-services.jpg',
  relatedServices: [
    { name: 'Roof Maintenance Programs', href: '/services/roof-maintenance' },
    { name: 'Emergency Repairs', href: '/services/emergency-roofing' },
    { name: 'Roof Inspections', href: '/services/roof-inspections' },
    { name: 'Storm Damage', href: '/services/storm-damage' }
  ],
  emergencyService: true,
  responseTime: 'within 4 hours'
}

export default function CommercialRoofingPage() {
  return <ServiceTemplate {...commercialRoofingData} />
}