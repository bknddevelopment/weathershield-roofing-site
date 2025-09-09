import type { Metadata } from 'next'
import ServiceTemplate from '../../components/ServiceTemplate'
import { Droplets, Home, Shield, Wrench, Leaf, CloudRain } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gutter Services | Weather Shield Roofing',
  description: 'Professional gutter installation, repair, and cleaning services in Myrtle Beach. Seamless gutters, gutter guards, and maintenance to protect your home.',
  keywords: 'gutter services, gutter installation, gutter repair, gutter cleaning, seamless gutters, gutter guards, downspouts, Myrtle Beach',
}

const gutterServicesData = {
  title: 'Gutter Services',
  description: 'Complete gutter solutions to protect your home from water damage. Installation, repair, cleaning, and maintenance services.',
  longDescription: [
    'Properly functioning gutters are essential for protecting your home from water damage. Weather Shield Roofing provides comprehensive gutter services throughout Myrtle Beach and the Grand Strand, ensuring your property stays dry and damage-free year-round.',
    'We specialize in seamless gutter installation, creating custom-fitted systems that provide superior performance and appearance. Our experienced technicians handle everything from new installations to repairs, cleaning, and gutter guard installation. We use only quality materials and proven techniques to ensure long-lasting protection.',
    'Regular gutter maintenance is crucial for preventing costly water damage to your foundation, landscaping, and home\'s structure. Our maintenance programs keep your gutters flowing freely, extending their lifespan and protecting your investment. We also offer emergency repair services for urgent gutter issues.'
  ],
  benefits: [
    'Custom seamless gutter installation',
    'Professional gutter cleaning services',
    'Gutter guard installation',
    'Emergency repair available',
    'Foundation protection',
    'Prevent water damage',
    'Landscape preservation',
    'Free estimates and inspections'
  ],
  process: [
    {
      number: 1,
      title: 'System Evaluation',
      description: 'Complete assessment of your gutter needs and drainage'
    },
    {
      number: 2,
      title: 'Custom Design',
      description: 'Tailored solution for optimal water management'
    },
    {
      number: 3,
      title: 'Professional Installation',
      description: 'Precise installation with proper pitch and drainage'
    },
    {
      number: 4,
      title: 'System Testing',
      description: 'Ensure proper flow and complete functionality'
    },
    {
      number: 5,
      title: 'Maintenance Plan',
      description: 'Optional maintenance program to keep gutters clear'
    }
  ],
  features: [
    {
      icon: <Droplets className="w-8 h-8" />,
      title: 'Seamless Gutters',
      description: 'Custom-made on-site for perfect fit and minimal leaks'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Gutter Guards',
      description: 'Keep debris out while allowing water to flow freely'
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Repair Services',
      description: 'Fix leaks, sagging, and damaged sections quickly'
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Foundation Protection',
      description: 'Direct water away from your home\'s foundation'
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Cleaning Services',
      description: 'Remove debris and ensure proper water flow'
    },
    {
      icon: <CloudRain className="w-8 h-8" />,
      title: 'Downspout Services',
      description: 'Installation and extension to manage water runoff'
    }
  ],
  faqs: [
    {
      question: 'How often should gutters be cleaned?',
      answer: 'We recommend cleaning gutters at least twice a year - in spring and fall. Homes with many trees nearby may need quarterly cleaning. Regular cleaning prevents clogs, water damage, and extends gutter lifespan. Our maintenance programs make this easy and affordable.'
    },
    {
      question: 'What are seamless gutters?',
      answer: 'Seamless gutters are custom-made on-site to fit your home perfectly with minimal joints. This reduces leak points, improves appearance, and provides better performance than sectional gutters. They\'re our most popular installation option.'
    },
    {
      question: 'How do I know if I need new gutters?',
      answer: 'Signs include visible cracks or splits, rust spots, sagging sections, water pooling around foundation, peeling paint on gutters, or gutters pulling away from the house. Our free inspection can determine if repair or replacement is needed.'
    },
    {
      question: 'Are gutter guards worth it?',
      answer: 'Gutter guards significantly reduce maintenance needs and prevent clogs. While they require upfront investment, they save time and money on cleaning and help prevent water damage. They\'re especially valuable for homes near trees.'
    },
    {
      question: 'What materials do you offer?',
      answer: 'We install aluminum (most popular), copper (premium option), steel (for heavy snow areas), and vinyl gutters. Each material has different benefits and price points. We\'ll recommend the best option based on your home and budget.'
    }
  ],
  priceRange: '$800 - $3,500',
  image: '/images/background/gutter-services.jpg',
  relatedServices: [
    { name: 'Roof Repair', href: '/services/roof-repair' },
    { name: 'Siding Installation', href: '/services/siding-installation' },
    { name: 'Roof Maintenance', href: '/services/roof-maintenance' },
    { name: 'Storm Damage', href: '/services/storm-damage' }
  ],
  emergencyService: true,
  responseTime: 'within 24 hours'
}

export default function GutterServicesPage() {
  return <ServiceTemplate {...gutterServicesData} />
}