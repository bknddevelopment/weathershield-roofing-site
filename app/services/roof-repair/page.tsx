import type { Metadata } from 'next'
import ServiceTemplate from '../../components/ServiceTemplate'
import { Wrench, AlertTriangle, Clock, Shield, DollarSign, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roof Leak Repair Today | 24 Hour Roof Repair Near Me | Same Day Service',
  description: '🔴 ROOF LEAK? Get roof leak repair today! 24 hour roof repair near me with 2-hour response. Emergency roofer available now for urgent roof repair Myrtle Beach. Same day storm damage repair!',
  keywords: 'roof leak repair today, 24 hour roof repair near me, emergency roofer available now, storm damage repair same day, urgent roof repair myrtle beach, roof repair myrtle beach, weathershield roofing, weather shield roofing, emergency roof repair, same day roof repair, immediate roof repair service, leak repair myrtle beach sc, emergency roof tarp service',
  alternates: {
    canonical: 'https://weathershieldroofers.com/services/roof-repair',
  },
  openGraph: {
    title: 'Roof Leak Repair Today | Emergency Roofer Available NOW',
    description: '🚨 LEAKING ROOF? Get roof leak repair today! 24 hour roof repair near me. Emergency roofer available now with 2-hour response. Call Weather Shield NOW!',
    url: 'https://weathershieldroofers.com/services/roof-repair',
    type: 'website',
  },
}

const roofRepairData = {
  title: 'Roof Leak Repair Today - 24 Hour Emergency Service',
  description: 'Emergency roofer available now! Weather Shield Roofing provides roof leak repair today with 2-hour response. 24 hour roof repair near me for storm damage repair same day. Urgent roof repair Myrtle Beach available NOW!',
  longDescription: [
    'When your roof develops problems, quick action is essential. Weather Shield Roofing - the leading roofing contractors Myrtle Beach homeowners trust for expert roof repair Myrtle Beach services. Our weathershield roofing team specializes in all types of repairs, from minor leaks to major storm shield damage, providing fast solutions that restore your roof\'s integrity.',
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
      answer: 'Repair costs vary based on the extent of damage. We provide free estimates before any work begins, allowing you to make an informed decision about your repair needs.'
    }
  ],
  priceRange: 'Contact us for pricing',
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