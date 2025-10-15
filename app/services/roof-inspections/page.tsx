import type { Metadata } from 'next'
import ServiceTemplate from '../../components/ServiceTemplate'
import { Search, Camera, FileText, CheckCircle, Shield, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roof Inspection Services | Weather Shield Roofing',
  description: 'Professional roof inspections in Myrtle Beach. Detailed reports, insurance documentation, and drone technology for accurate assessment.',
  keywords: 'roof inspection, roof assessment, insurance inspection, drone inspection, Myrtle Beach',
}

const roofInspectionsData = {
  title: 'Roof Inspection Services',
  description: 'Comprehensive roof inspections with detailed reporting to protect your investment and catch problems early.',
  longDescription: [
    'Regular roof inspections are essential for maintaining your home\'s protection and value. Weather Shield Roofing provides thorough, professional roof inspections using the latest technology, including drone imaging, to give you a complete picture of your roof\'s condition.',
    'Our certified inspectors examine every aspect of your roofing system, from shingles and flashing to gutters and ventilation. We provide detailed reports with photos, identifying current issues and potential problems before they become costly repairs. Our inspections are particularly valuable for new home purchases, insurance claims, and regular maintenance.',
    'We offer comprehensive roof inspections for homeowners in Myrtle Beach and the Grand Strand area. Our inspection includes interior and exterior evaluation, moisture detection, and a detailed written report you can use for insurance purposes or peace of mind.'
  ],
  benefits: [
    'Comprehensive roof inspections',
    'Detailed photo documentation',
    'Insurance-approved reports',
    'Drone technology for safe access',
    'Interior and exterior evaluation',
    'Moisture and leak detection',
    'Energy efficiency assessment',
    'Maintenance recommendations included'
  ],
  process: [
    {
      number: 1,
      title: 'Schedule Inspection',
      description: 'Easy online or phone scheduling at your convenience'
    },
    {
      number: 2,
      title: 'Exterior Assessment',
      description: 'Complete evaluation of shingles, flashing, and structure'
    },
    {
      number: 3,
      title: 'Interior Check',
      description: 'Attic inspection for leaks, ventilation, and insulation'
    },
    {
      number: 4,
      title: 'Documentation',
      description: 'Photos and measurements for complete documentation'
    },
    {
      number: 5,
      title: 'Detailed Report',
      description: 'Comprehensive report with findings and recommendations'
    }
  ],
  features: [
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Drone Technology',
      description: 'Safe, thorough inspection of hard-to-reach areas'
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: '21-Point Inspection',
      description: 'Comprehensive checklist covering all roof components'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Detailed Reports',
      description: 'Written documentation with photos and recommendations'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Insurance Ready',
      description: 'Reports formatted for insurance claim submission'
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Problem Detection',
      description: 'Early identification of issues before they worsen'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Peace of Mind',
      description: 'Know your roof\'s exact condition and lifespan'
    }
  ],
  faqs: [
    {
      question: 'How often should I have my roof inspected?',
      answer: 'We recommend annual roof inspections, especially after severe weather events. Regular inspections help catch small problems before they become expensive repairs and are often required to maintain warranty coverage.'
    },
    {
      question: 'How much does a roof inspection cost?',
      answer: 'Contact us for inspection pricing. We provide detailed assessments for homeowners in our service area with no obligation to purchase additional services. We believe in educating homeowners about their roof\'s condition.'
    },
    {
      question: 'What does the inspection include?',
      answer: 'Our 21-point inspection covers shingles, flashing, gutters, downspouts, vents, chimneys, skylights, attic ventilation, insulation, and more. We also check for storm damage, wear patterns, and potential problem areas.'
    },
    {
      question: 'Will you go in my attic?',
      answer: 'Yes, with your permission. Attic inspection is crucial for detecting leaks, checking ventilation, and assessing insulation. We can identify many roofing problems from inside that aren\'t visible from outside.'
    },
    {
      question: 'Can I use the inspection report for insurance?',
      answer: 'Absolutely! Our detailed reports are formatted specifically for insurance purposes, including all necessary documentation, photos, and professional assessment that insurance companies require.'
    }
  ],
  priceRange: 'Contact for pricing',
  image: '/images/background/roof-replacement-services.jpg',
  relatedServices: [
    { name: 'Roof Repair', href: '/services/roof-repair' },
    { name: 'Roof Maintenance', href: '/services/roof-maintenance' },
    { name: 'Storm Damage Assessment', href: '/services/storm-damage' },
    { name: 'Insurance Claims', href: '/services/residential-roofing' }
  ],
  emergencyService: false,
  responseTime: 'within 48 hours'
}

export default function RoofInspectionsPage() {
  return <ServiceTemplate {...roofInspectionsData} />
}