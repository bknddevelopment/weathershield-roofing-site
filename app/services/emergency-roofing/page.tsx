import type { Metadata } from 'next'
import ServiceTemplate from '../../components/ServiceTemplate'
import { Phone, Clock, Shield, AlertTriangle, Zap, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Emergency Roofing Services | Weather Shield Roofing',
  description: '24/7 emergency roofing services in Myrtle Beach. Immediate response for leaks, storm damage, and urgent repairs. Available nights, weekends, and holidays.',
  keywords: 'emergency roofing, 24/7 roof repair, emergency leak repair, urgent roof repair, after hours roofing, Myrtle Beach',
}

const emergencyRoofingData = {
  title: 'Emergency Roofing Services',
  description: '24/7 emergency response for urgent roofing issues. When disaster strikes, we\'re here to protect your home immediately.',
  longDescription: [
    'Roofing emergencies don\'t wait for business hours, and neither do we. Weather Shield Roofing provides round-the-clock emergency roofing services throughout Myrtle Beach and the Grand Strand area. Whether it\'s a sudden leak during a storm, wind damage, or a fallen tree, our emergency response team is ready to protect your home 24 hours a day, 7 days a week.',
    'Our emergency crews are specially trained to handle urgent situations safely and efficiently. We arrive equipped with everything needed to provide immediate temporary protection, prevent water damage, and secure your property. Once the immediate threat is addressed, we\'ll provide a comprehensive assessment and permanent repair solution.',
    'We understand that roofing emergencies are stressful and potentially devastating to your home. That\'s why we guarantee rapid response times, typically arriving within 2 hours of your call. Our emergency services include tarping, emergency patches, water damage prevention, and coordination with your insurance company for covered emergencies.'
  ],
  benefits: [
    '24/7/365 emergency availability',
    'Response within 2 hours guaranteed',
    'Emergency tarping and protection',
    'Water damage prevention',
    'Insurance claim assistance',
    'No emergency service fees',
    'Permanent repairs scheduled quickly',
    'Licensed and insured crews'
  ],
  process: [
    {
      number: 1,
      title: 'Emergency Call',
      description: 'Call our 24/7 hotline for immediate assistance'
    },
    {
      number: 2,
      title: 'Rapid Dispatch',
      description: 'Emergency crew dispatched within minutes'
    },
    {
      number: 3,
      title: 'On-Site Assessment',
      description: 'Quick evaluation of damage and immediate needs'
    },
    {
      number: 4,
      title: 'Emergency Protection',
      description: 'Temporary repairs to prevent further damage'
    },
    {
      number: 5,
      title: 'Permanent Solution',
      description: 'Schedule complete repairs at your convenience'
    }
  ],
  features: [
    {
      icon: <Phone className="w-8 h-8" />,
      title: '24/7 Hotline',
      description: 'Always answered by a real person, never voicemail'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: '2-Hour Response',
      description: 'Guaranteed arrival within 2 hours of your call'
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'All Emergencies',
      description: 'Leaks, storm damage, fallen trees, and more'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Damage Prevention',
      description: 'Stop water damage before it spreads'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Equipped Crews',
      description: 'Arrive ready with all emergency materials'
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Property Protection',
      description: 'Secure your home and belongings immediately'
    }
  ],
  faqs: [
    {
      question: 'What qualifies as a roofing emergency?',
      answer: 'Roofing emergencies include active leaks, storm damage exposing your home\'s interior, fallen trees or debris on your roof, missing shingles before a storm, and any situation where immediate action prevents significant damage. When in doubt, call us - we\'ll help determine if emergency service is needed.'
    },
    {
      question: 'How quickly can you respond to an emergency?',
      answer: 'We guarantee response within 2 hours of your call, 24/7/365. Our emergency crews are strategically located throughout the Grand Strand area to ensure rapid response. Most calls receive on-site assistance within 60-90 minutes.'
    },
    {
      question: 'What should I do while waiting for emergency service?',
      answer: 'First, ensure everyone\'s safety and evacuate any dangerous areas. If possible, move valuables away from leak areas and place buckets to catch water. Document damage with photos for insurance. Don\'t attempt repairs yourself - wait for our professional crew to arrive safely.'
    },
    {
      question: 'Are emergency services more expensive?',
      answer: 'We don\'t charge emergency service fees. You pay only for the actual work performed. Many emergency repairs are covered by homeowner\'s insurance, and we\'ll help document everything for your claim. Our priority is protecting your home, not price gouging during emergencies.'
    },
    {
      question: 'Do you provide permanent repairs during emergency calls?',
      answer: 'Emergency calls focus on immediate protection and damage prevention. We\'ll provide temporary solutions to secure your property, then schedule permanent repairs at your convenience, often within 24-48 hours. This two-step approach ensures thorough, quality repairs.'
    }
  ],
  priceRange: 'No Emergency Fees',
  image: '/images/background/emergency-roofing-services.jpg',
  relatedServices: [
    { name: 'Storm Damage Repair', href: '/services/storm-damage' },
    { name: 'Roof Repair', href: '/services/roof-repair' },
    { name: 'Tarping Services', href: '/services/storm-damage' },
    { name: 'Insurance Claims', href: '/services/roof-inspections' }
  ],
  emergencyService: true,
  responseTime: 'within 2 hours'
}

export default function EmergencyRoofingPage() {
  return <ServiceTemplate {...emergencyRoofingData} />
}