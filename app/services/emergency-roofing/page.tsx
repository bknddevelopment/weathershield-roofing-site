import type { Metadata } from 'next'
import ServiceTemplate from '../../components/ServiceTemplate'
import { Phone, Clock, Shield, AlertTriangle, Zap, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Emergency Roofing Services Myrtle Beach | 24/7 Weather Shield Response',
  description: '24/7 emergency roofing Myrtle Beach. Weather Shield Roofing provides immediate storm damage repair, emergency leak repair, and urgent weathershield roofing services. 2-hour guaranteed response.',
  keywords: 'emergency roofing myrtle beach, 24/7 roof repair myrtle beach, emergency leak repair, storm damage repair myrtle beach, weathershield roofing emergency, weather shield roofing, urgent roof repair, after hours roofing, hurricane damage repair, emergency tarping services',
  alternates: {
    canonical: 'https://weathershieldroofers.com/services/emergency-roofing',
  },
  openGraph: {
    title: 'Emergency Roofing Services 24/7 | Weather Shield Roofing',
    description: 'Immediate emergency roofing response in Myrtle Beach. Available 24/7 for storm damage, leaks, and urgent repairs.',
    url: 'https://weathershieldroofers.com/services/emergency-roofing',
    type: 'website',
  },
}

const emergencyRoofingData = {
  title: 'Emergency Roofing Services Myrtle Beach - Weather Shield 24/7',
  description: 'Weather Shield Roofing provides 24/7 emergency roofing Myrtle Beach residents trust. Immediate weathershield roofing response for storm damage, leaks, and urgent repairs with 2-hour guaranteed arrival.',
  longDescription: [
    'When roofing emergencies strike Myrtle Beach, Weather Shield Roofing responds faster than any other contractor. Our 24/7 emergency roofing Myrtle Beach service has protected thousands of homes from storm damage, sudden leaks, and hurricane impacts. As the leading emergency roofing contractors in coastal South Carolina, our weathershield roofing emergency teams are strategically positioned throughout the Grand Strand for rapid 2-hour guaranteed response.',
    'Weather Shield Roofing\'s emergency crews are specially trained in storm damage assessment and immediate protection techniques specific to Myrtle Beach\'s severe weather patterns. We arrive fully equipped with professional-grade tarps, emergency sealants, and temporary roofing materials to stop water intrusion immediately. Our teams have extensive experience with hurricane damage, tornado impacts, severe thunderstorm damage, and the unique challenges of coastal emergency roofing.',
    'What sets Weather Shield Roofing apart in emergency situations is our comprehensive approach. Beyond immediate protection, we document all damage for insurance claims, provide detailed repair estimates, and schedule permanent solutions quickly. Our emergency roofing Myrtle Beach services have saved homeowners millions in prevented water damage. We work directly with all major insurance companies and can bill insurance directly for covered emergency services.',
    'Living in Myrtle Beach means being prepared for severe weather year-round. From hurricane season (June through November) to winter nor\'easters and spring thunderstorms, Weather Shield Roofing stands ready 24/7/365. Our emergency response isn\'t just about fixing problems—it\'s about protecting your family, your home, and your peace of mind when you need it most. One call to our emergency hotline connects you immediately with local, experienced professionals who understand the urgency of your situation.',
    'Every Weather Shield Roofing emergency response includes a complete 25-point inspection to identify all damage, not just the obvious problems. This thorough approach ensures we address underlying issues that could cause future emergencies. Our weathershield roofing emergency solutions are designed to withstand additional storms while permanent repairs are scheduled, giving you reliable protection when you need it most.'
  ],
  benefits: [
    '24/7/365 emergency roofing Myrtle Beach availability',
    'Guaranteed 2-hour response time throughout Grand Strand',
    'Professional emergency tarping and storm protection',
    'Immediate water damage prevention and mitigation',
    'Direct insurance billing for covered emergencies',
    'No emergency service call fees or surcharges',
    'Weather Shield Roofing certified emergency technicians',
    'Permanent repairs scheduled within 24-48 hours',
    'Complete damage documentation for insurance claims',
    'Weathershield roofing materials on every truck'
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