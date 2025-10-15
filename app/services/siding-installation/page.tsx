import type { Metadata } from 'next'
import ServiceTemplate from '../../components/ServiceTemplate'
import { Home, Shield, Palette, ThermometerSun, Volume2, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Siding Installation Services | Weather Shield Roofing',
  description: 'Professional siding installation and replacement services in Myrtle Beach. Transform your home with durable, energy-efficient vinyl, fiber cement, and wood siding.',
  keywords: 'siding installation, vinyl siding, fiber cement, home siding, siding replacement, exterior renovation, Myrtle Beach',
}

const sidingInstallationData = {
  title: 'Siding Installation Services',
  description: 'Transform your home\'s exterior with beautiful, durable siding. Expert installation of vinyl, fiber cement, wood, and composite materials.',
  longDescription: [
    'Your home\'s siding is its first line of defense against the elements while defining its aesthetic appeal. Weather Shield Roofing provides expert siding installation throughout Myrtle Beach and the Grand Strand, combining beauty, durability, and energy efficiency to protect and enhance your most valuable investment.',
    'With extensive experience in all siding materials and styles, our certified installers deliver flawless results that increase your home\'s value and reduce maintenance needs for decades. We offer a wide selection of materials including vinyl, fiber cement (James Hardie), wood, engineered wood, and metal siding in dozens of colors and styles.',
    'Our comprehensive siding services include complete removal and disposal of old siding, repair of any underlying damage, installation of house wrap and insulation, and professional installation with manufacturer-certified techniques. We ensure every project meets the highest standards of quality and craftsmanship.'
  ],
  benefits: [
    'Enhanced curb appeal and home value',
    'Improved energy efficiency',
    'Superior weather protection',
    'Noise reduction benefits',
    'Low maintenance materials',
    'Manufacturer warranties',
    'Professional color matching',
    'Complete exterior transformation'
  ],
  process: [
    {
      number: 1,
      title: 'Design Consultation',
      description: 'Review styles, colors, and material options for your home'
    },
    {
      number: 2,
      title: 'Precise Measurements',
      description: 'Accurate measurements for perfect fit and minimal waste'
    },
    {
      number: 3,
      title: 'Material Selection',
      description: 'Choose from premium siding materials and colors'
    },
    {
      number: 4,
      title: 'Professional Installation',
      description: 'Expert installation with attention to every detail'
    },
    {
      number: 5,
      title: 'Quality Inspection',
      description: 'Final walkthrough and warranty documentation'
    }
  ],
  features: [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Complete Transformation',
      description: 'Full exterior renovation to modernize your home'
    },
    {
      icon: <ThermometerSun className="w-8 h-8" />,
      title: 'Energy Savings',
      description: 'Insulated options reduce heating and cooling costs'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Weather Resistance',
      description: 'Durable materials withstand coastal conditions'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Custom Colors',
      description: 'Wide selection of colors and finishes available'
    },
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: 'Sound Insulation',
      description: 'Reduce outside noise for peaceful interiors'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Premium Materials',
      description: 'James Hardie, CertainTeed, and other top brands'
    }
  ],
  faqs: [
    {
      question: 'How long does siding installation take?',
      answer: 'Most residential siding projects take 3-7 days depending on home size and complexity. We work efficiently while ensuring quality installation and minimal disruption to your daily routine. Larger homes or those requiring repairs may take longer.'
    },
    {
      question: 'What\'s the best siding material for coastal homes?',
      answer: 'Fiber cement (James Hardie) and vinyl siding are excellent for coastal areas due to their resistance to moisture, salt air, and high winds. Both materials offer long-lasting performance with minimal maintenance in our Myrtle Beach climate.'
    },
    {
      question: 'Can you install siding over existing siding?',
      answer: 'While possible in some cases, we typically recommend removing old siding to inspect for damage, ensure proper installation, and achieve the best results. This allows us to address any underlying issues and install proper moisture barriers.'
    },
    {
      question: 'Do you offer siding repair services?',
      answer: 'Yes! We provide siding repair services for damaged sections, whether from storms, accidents, or age. We can match existing siding colors and styles to maintain your home\'s uniform appearance.'
    },
    {
      question: 'What warranty comes with new siding?',
      answer: 'Warranties vary by material - vinyl typically offers 20-30 year warranties, fiber cement up to 30-50 years. We also provide our own workmanship warranty. We\'ll explain all warranty details during your consultation.'
    }
  ],
  priceRange: 'Request a free estimate',
  image: '/images/background/siding-installation-services.jpg',
  relatedServices: [
    { name: 'Gutter Services', href: '/services/gutter-services' },
    { name: 'Roof Replacement', href: '/services/roof-replacement' },
    { name: 'Storm Damage Repair', href: '/services/storm-damage' },
    { name: 'Residential Roofing', href: '/services/residential-roofing' }
  ],
  emergencyService: false,
  responseTime: 'within 48 hours'
}

export default function SidingInstallationPage() {
  return <ServiceTemplate {...sidingInstallationData} />
}