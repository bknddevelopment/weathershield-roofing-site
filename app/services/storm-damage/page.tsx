import type { Metadata } from 'next'
import ServiceTemplate from '../../components/ServiceTemplate'
import { CloudLightning, Shield, FileText, Clock, AlertTriangle, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Storm Damage Repair | Weather Shield Roofing',
  description: '24/7 emergency storm damage repair in Myrtle Beach. Insurance claim assistance, immediate response, and complete restoration services.',
  keywords: 'storm damage repair, hurricane damage, hail damage, wind damage, emergency roofing, insurance claims',
}

const stormDamageData = {
  title: 'Storm Damage Repair',
  description: '24/7 emergency response for storm-damaged roofs. We handle everything from temporary protection to complete restoration and insurance claims.',
  longDescription: [
    'When severe weather strikes Myrtle Beach, your roof is your first line of defense. Weather Shield Roofing provides immediate emergency response for storm-damaged roofs, offering temporary protection to prevent further damage and complete restoration services to get your home back to normal.',
    'Our storm damage specialists are available 24/7 to respond to emergencies. We understand the stress and urgency of storm damage, which is why we act fast to secure your property and begin the restoration process. Our team is experienced in handling all types of storm damage, from hurricane winds to hail impacts.',
    'We work directly with all major insurance companies to document damage thoroughly and ensure you receive the full compensation you\'re entitled to. Our comprehensive approach includes emergency tarping, water extraction if needed, complete damage assessment, and professional repairs or replacement using the highest quality materials.'
  ],
  benefits: [
    '24/7 emergency response team',
    'Insurance claim specialists on staff',
    'Emergency tarping service',
    'Complete damage documentation',
    'Direct insurance billing available',
    'Restoration not just repair',
    'Priority scheduling for emergencies',
    'Local team, fast response'
  ],
  process: [
    {
      number: 1,
      title: 'Emergency Response',
      description: 'Immediate dispatch to secure your property and prevent further damage'
    },
    {
      number: 2,
      title: 'Damage Documentation',
      description: 'Comprehensive photos and assessment for insurance claims'
    },
    {
      number: 3,
      title: 'Temporary Protection',
      description: 'Emergency tarping and board-up to keep your home dry'
    },
    {
      number: 4,
      title: 'Insurance Coordination',
      description: 'Work directly with adjusters to maximize your claim'
    },
    {
      number: 5,
      title: 'Complete Restoration',
      description: 'Professional repairs to restore your roof to pre-storm condition'
    }
  ],
  features: [
    {
      icon: <CloudLightning className="w-8 h-8" />,
      title: 'Hurricane Damage',
      description: 'Expert repair of wind damage from coastal storms'
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Hail Damage',
      description: 'Identification and repair of hail impacts'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Emergency Tarping',
      description: 'Immediate temporary protection to prevent water damage'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Insurance Claims',
      description: 'Complete assistance with documentation and filing'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '24/7 Availability',
      description: 'Round-the-clock emergency response team'
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Full Restoration',
      description: 'Complete repairs to pre-storm condition'
    }
  ],
  faqs: [
    {
      question: 'What should I do immediately after storm damage?',
      answer: 'First, ensure your family\'s safety. Then call us immediately at (843) 493-4963 for emergency response. Document visible damage with photos, but don\'t attempt repairs yourself. We\'ll provide emergency tarping and begin the insurance claim process.'
    },
    {
      question: 'Will insurance cover storm damage repairs?',
      answer: 'Most homeowner\'s insurance policies cover storm damage, minus your deductible. We work directly with insurance companies to document damage thoroughly and ensure you receive fair compensation. We\'ll help navigate the entire claims process.'
    },
    {
      question: 'How quickly can you respond to storm damage?',
      answer: 'We maintain a 24/7 emergency response team and typically arrive within 2 hours of your call. Our first priority is securing your property to prevent further damage, then we begin the assessment and restoration process.'
    },
    {
      question: 'What types of storm damage do you repair?',
      answer: 'We repair all storm-related roof damage including wind damage, hail impacts, fallen tree damage, missing shingles, damaged flashing, and water intrusion. Our team is equipped to handle everything from minor repairs to complete roof replacement.'
    },
    {
      question: 'Do you provide temporary repairs?',
      answer: 'Yes! We provide emergency tarping and temporary repairs to protect your home from further damage while permanent repairs are scheduled. This service is often covered by insurance as damage mitigation.'
    }
  ],
  priceRange: 'Insurance Deductible',
  image: '/images/background/roof-repair-services.jpg',
  relatedServices: [
    { name: 'Emergency Roofing', href: '/services/emergency-roofing' },
    { name: 'Roof Repair', href: '/services/roof-repair' },
    { name: 'Insurance Claims', href: '/services/roof-inspections' },
    { name: 'Roof Replacement', href: '/services/residential-roofing' }
  ],
  emergencyService: true,
  responseTime: 'within 2 hours'
}

export default function StormDamagePage() {
  return <ServiceTemplate {...stormDamageData} />
}