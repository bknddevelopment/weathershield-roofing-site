import type { Metadata } from 'next'
import ServiceTemplate from '../../components/ServiceTemplate'
import { Calendar, Shield, CheckCircle, TrendingUp, FileText, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Roof Maintenance Programs | Weather Shield Roofing',
  description: 'Professional roof maintenance programs in Myrtle Beach. Extend roof life, maintain warranties, prevent costly repairs with regular maintenance.',
  keywords: 'roof maintenance, preventive maintenance, roof care, maintenance program, roof warranty, annual inspection, Myrtle Beach',
}

const roofMaintenanceData = {
  title: 'Roof Maintenance Programs',
  description: 'Proactive maintenance programs to extend your roof\'s life, maintain warranties, and prevent costly emergency repairs.',
  longDescription: [
    'Regular roof maintenance is the key to maximizing your roofing investment. Weather Shield Roofing\'s comprehensive maintenance programs help extend your roof\'s lifespan by up to 50%, maintain manufacturer warranties, and prevent small issues from becoming expensive emergencies.',
    'Our maintenance programs are tailored to your specific roofing system and include bi-annual inspections, priority emergency service, preventive repairs, and detailed documentation. Our certified technicians identify and address potential problems before they cause damage, saving you thousands in repair costs.',
    'Many roofing warranties require regular professional maintenance to remain valid. Our maintenance programs ensure you stay compliant with warranty requirements while providing peace of mind that your roof is always in optimal condition. We maintain detailed records of all inspections and work performed, invaluable for insurance claims and property sales.'
  ],
  benefits: [
    'Extend roof life by up to 50%',
    'Maintain manufacturer warranties',
    'Priority emergency service',
    'Prevent costly repairs',
    'Bi-annual professional inspections',
    'Detailed maintenance records',
    'Budget-friendly annual plans',
    'Transferable to new owners'
  ],
  process: [
    {
      number: 1,
      title: 'Initial Assessment',
      description: 'Comprehensive evaluation of your roof\'s current condition'
    },
    {
      number: 2,
      title: 'Custom Plan',
      description: 'Tailored maintenance schedule based on your roof type and age'
    },
    {
      number: 3,
      title: 'Spring Inspection',
      description: 'Post-winter assessment and cleaning'
    },
    {
      number: 4,
      title: 'Fall Inspection',
      description: 'Pre-winter preparation and maintenance'
    },
    {
      number: 5,
      title: 'Ongoing Support',
      description: 'Year-round priority service and support'
    }
  ],
  features: [
    {
      icon: <Calendar className="w-8 h-8" />,
      title: 'Scheduled Inspections',
      description: 'Bi-annual professional inspections and maintenance'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Warranty Protection',
      description: 'Maintain compliance with manufacturer requirements'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: '25-Point Checklist',
      description: 'Comprehensive inspection of all roof components'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Extend Roof Life',
      description: 'Add years to your roof\'s serviceable life'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Detailed Reports',
      description: 'Documentation with photos and recommendations'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Cost Savings',
      description: 'Prevent expensive emergency repairs'
    }
  ],
  faqs: [
    {
      question: 'Why is regular roof maintenance important?',
      answer: 'Regular maintenance extends your roof\'s life, prevents costly repairs, and maintains warranty coverage. Studies show that properly maintained roofs last 30-50% longer than neglected ones. Small issues caught early cost hundreds to fix; ignored, they become thousands in damage.'
    },
    {
      question: 'What\'s included in a maintenance visit?',
      answer: 'Each visit includes comprehensive inspection of shingles, flashing, gutters, and ventilation; clearing debris from roof and gutters; minor repairs like replacing loose shingles or resealing flashing; detailed photo documentation; and written reports with recommendations.'
    },
    {
      question: 'How often should my roof be maintained?',
      answer: 'We recommend bi-annual maintenance - spring and fall. Spring maintenance addresses winter damage and prepares for summer storms. Fall maintenance clears debris and prepares your roof for winter weather. More frequent service may be needed for older roofs or after severe weather.'
    },
    {
      question: 'Will maintenance void my warranty?',
      answer: 'No - in fact, most manufacturer warranties REQUIRE regular professional maintenance to remain valid. Our maintenance programs ensure you meet all warranty requirements. We provide documentation that proves compliance, protecting your warranty investment.'
    },
    {
      question: 'What\'s the cost of a maintenance program?',
      answer: 'Annual maintenance programs typically cost $400-800 depending on roof size and type - a fraction of the cost of one emergency repair. Programs include two visits, priority emergency service, and discounts on any needed repairs. Most customers save money in the first year alone.'
    }
  ],
  priceRange: '$400 - $800/year',
  image: '/images/background/roof-maintenance-services.jpg',
  relatedServices: [
    { name: 'Roof Inspections', href: '/services/roof-inspections' },
    { name: 'Gutter Services', href: '/services/gutter-services' },
    { name: 'Roof Repair', href: '/services/roof-repair' },
    { name: 'Commercial Maintenance', href: '/services/commercial-roofing' }
  ],
  emergencyService: false,
  responseTime: 'scheduled visits'
}

export default function RoofMaintenancePage() {
  return <ServiceTemplate {...roofMaintenanceData} />
}