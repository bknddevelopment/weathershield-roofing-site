import type { Metadata } from 'next'
import ServiceTemplate from '../../components/ServiceTemplate'
import { Sun, Zap, DollarSign, TrendingUp, Shield, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solar Shingles Installation | Solar Roof Shingles | Solar Powered Roofing',
  description: 'Solar shingles & solar roof shingles in Myrtle Beach. Tesla Solar Roof, GAF Timberline Solar. 30% federal tax credit. Energy production + roof protection. Free solar estimate.',
  keywords: 'solar shingles, solar roof shingles, solar powered roofing, tesla solar roof, solar panel roof, solar roofing, integrated solar roof, photovoltaic shingles',
  alternates: {
    canonical: 'https://weathershieldroofers.com/services/solar-roofing',
  },
  openGraph: {
    title: 'Solar Shingles & Solar Roof Installation | Integrated Solar Roofing',
    description: 'Solar shingles installation. 30% federal tax credit through 2032. Tesla Solar Roof & GAF Timberline Solar. Free solar roofing consultation.',
    url: 'https://weathershieldroofers.com/services/solar-roofing',
    type: 'website',
  },
}

const solarRoofingData = {
  title: 'Solar Shingles & Integrated Solar Roofing',
  description: 'Revolutionary solar shingles combine roof protection with clean energy generation, providing both weather-tight coverage and electricity production in one integrated system.',
  longDescription: [
    'Solar shingles represent the cutting edge of residential roofing technology, seamlessly integrating photovoltaic power generation with traditional roofing protection. Unlike bulky rooftop solar panels, solar shingles lay flat against your roof, creating a sleek, modern appearance while generating clean electricity to power your home. Weather Shield Roofing specializes in both retrofit solar shingle installations and complete solar roof replacements featuring Tesla Solar Roof and GAF Timberline Solar systems.',
    'The economics of solar roofing have become increasingly attractive. With 30% federal Investment Tax Credit (ITC) available through 2032, average system costs of $21-25 per square foot, and Myrtle Beach\'s excellent 5.2 sun hours per day, most homeowners achieve complete ROI within 15-20 years through electricity savings. When combined with roof replacement (needed anyway), solar shingles add only $10-15 per square foot over traditional roofing—making them cost-competitive with standard roof replacement plus traditional solar panels.',
    'Weather Shield Roofing partners with leading solar roofing manufacturers to provide certified installation of Tesla Solar Roof (glass tiles with integrated solar cells), GAF Timberline Solar (nailable solar shingles), and CertainTeed Apollo II systems. Every installation includes structural assessment, electrical integration, battery storage options (Tesla Powerwall, LG Chem), utility interconnection, and 25-year performance warranties. Our team handles all permitting, utility coordination, tax credit documentation, and ongoing monitoring to ensure your solar roof performs optimally for decades.',
  ],
  benefits: [
    'Generates clean electricity (reduce/eliminate power bills)',
    '30% federal tax credit through 2032',
    'Additional state rebates and incentives available',
    'Increases home value significantly ($15K-$30K)',
    'Lower profile than traditional solar panels',
    'Integrates seamlessly with roof design',
    '25-year power output warranty',
    'Class A fire rating',
    'Hurricane-resistant installation',
    'Environmentally friendly energy production',
    'Hedge against rising electricity rates',
    'Battery backup options for outages',
  ],
  process: [
    {
      number: 1,
      title: 'Solar Assessment & Design',
      description: 'Comprehensive roof evaluation, sun exposure analysis, electrical audit, and energy usage review. 3D modeling of solar array. Financial analysis including ROI, tax credits, and net metering benefits.',
    },
    {
      number: 2,
      title: 'System Selection',
      description: 'Choose between Tesla Solar Roof (complete roof replacement), GAF Timberline Solar (retrofit or new), or traditional panels. Battery storage options. Financing consultation including solar loans and leases.',
    },
    {
      number: 3,
      title: 'Permitting & Approval',
      description: 'Handle all building permits, utility interconnection applications, HOA approvals (if required), and structural engineering certifications. Secure financing and tax credit pre-approval.',
    },
    {
      number: 4,
      title: 'Professional Installation',
      description: 'Certified solar installers complete roof work, electrical integration, inverter installation, and battery connection. Typically 1-3 days for solar shingles, 5-7 days for full Tesla Solar Roof.',
    },
    {
      number: 5,
      title: 'Activation & Monitoring',
      description: 'Utility final inspection and permission to operate (PTO). System activation and monitoring setup. Training on energy monitoring app, battery management, and maintenance requirements.',
    },
  ],
  features: [
    {
      icon: <Sun className="w-8 h-8" />,
      title: 'Solar Product Comparison',
      description: 'Tesla Solar Roof: Premium glass tiles, $21-25/sq ft, best aesthetics. GAF Timberline Solar: Nailable shingles, $18-22/sq ft, fastest install. Traditional panels: Lowest cost but bulkier appearance.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Energy Production',
      description: 'Myrtle Beach averages 5.2 peak sun hours/day. Typical 2,000 sq ft solar roof generates 8,000-12,000 kWh annually—covering 60-100% of average household consumption.',
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Federal Tax Credit (30% ITC)',
      description: '30% of total solar system cost (including installation) refundable as tax credit through 2032. Average $7,000-$15,000 credit. Reduces effective cost from $21-25/sq ft to $15-18/sq ft.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'ROI & Payback Period',
      description: 'Typical payback: 15-20 years without battery, 18-22 years with battery. After payback, enjoy free electricity for 10+ years. Total lifetime savings often exceed $40,000-80,000.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Battery Storage Options',
      description: 'Tesla Powerwall (13.5 kWh, $11,500): 1-2 day backup. LG Chem RESU (9.8 kWh, $9,000): Compact option. Battery qualifies for 30% tax credit when paired with solar.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Warranties & Protection',
      description: '25-year power output warranty, 25-year product warranty, 10-year workmanship warranty. Performance guaranteed at 85-90% output after 25 years. Roof waterproofing warranty separate.',
    },
  ],
  faqs: [
    {
      question: 'How much do solar shingles cost in Myrtle Beach?',
      answer: 'Solar shingles cost $18-22 per square foot for GAF Timberline Solar (most popular) and $21-25 per square foot for Tesla Solar Roof (premium option). For a 2,000 sq ft roof, expect $36,000-$50,000 before incentives. With 30% federal tax credit, net cost drops to $25,000-$35,000. When replacing an existing roof, only the incremental solar cost ($10-15/sq ft over standard roofing) should be considered. Traditional rooftop panels cost $15-20/sq ft but require separate roof and are less attractive.',
    },
    {
      question: 'What is the difference between solar shingles and solar panels?',
      answer: 'Solar shingles integrate directly into your roof as both roofing material and electricity generator, creating sleek appearance that blends with traditional shingles. Solar panels mount above your existing roof on racking systems, are more visible/bulkier, but typically cost 15-20% less per watt. Solar shingles work best during roof replacement (combined project). Panels work for existing roofs in good condition. Shingles offer better aesthetics and wind resistance. Panels offer easier repairs and slightly higher efficiency (19-22% vs 16-18% for shingles).',
    },
    {
      question: 'Do solar roofs work well in South Carolina?',
      answer: 'Yes! Myrtle Beach receives 5.2 peak sun hours per day (excellent for solar), generating significant electricity year-round. Coastal climate is ideal—cooler ocean breezes actually improve solar panel efficiency (panels lose 0.5% efficiency per degree above 77°F). South Carolina offers net metering (sell excess power back to utility at retail rates), 25% state tax credit (up to $3,500 per year), and property tax exemption for solar systems. Combined with federal 30% tax credit, South Carolina ranks in top 20 states for solar economics.',
    },
    {
      question: 'Can solar shingles withstand hurricanes?',
      answer: 'Yes, when properly installed. Modern solar shingles (GAF Timberline Solar, Tesla Solar Roof) are tested to same wind and impact standards as traditional shingles—130+ mph wind resistance and Class 4 impact rating available. Tesla Solar Roof uses tempered glass stronger than conventional tiles. Installation must include proper underlayment, flashing, and attachment methods for coastal hurricane zones. Battery backup systems provide power during outages when grid goes down (regular grid-tied systems shut off for safety). Hurricane resistance is equal to or better than traditional roofing.',
    },
    {
      question: 'What is the payback period for solar roofing?',
      answer: 'Typical payback period is 15-20 years for solar shingles in Myrtle Beach, considering 30% federal tax credit, net metering, and average electricity rates of $0.13/kWh. Factors affecting payback: system size (larger=faster payback per watt), electricity usage (high users benefit most), financing terms (cash purchase vs loan vs lease), battery inclusion (adds 3-5 years to payback), and electricity rate inflation (rates rising 3-5%/year accelerate payback). After payback, enjoy 10-15 years of essentially free electricity—total lifetime savings often $40,000-80,000.',
    },
    {
      question: 'Do I need battery storage with solar shingles?',
      answer: 'Battery storage is optional but recommended for complete energy independence. Without battery, you\'re grid-tied—selling excess solar to utility during day, buying back at night (net metering makes this cost-neutral). Grid-tied systems shut off during power outages for safety. With battery (Tesla Powerwall $11,500, Enphase Ensemble $10,000), you have backup power during outages and can store solar for nighttime use. Battery qualifies for 30% federal tax credit when paired with solar. Recommended for critical power needs (medical equipment, home office) or frequent outages.',
    },
    {
      question: 'How do I qualify for the 30% federal solar tax credit?',
      answer: 'The federal Residential Clean Energy Credit (formerly Investment Tax Credit/ITC) provides 30% of total solar system cost as dollar-for-dollar tax credit (not deduction). Qualified costs include solar shingles/panels, inverters, batteries (when charged by solar), installation labor, permits, and electrical upgrades. Available through 2032 (drops to 26% in 2033, 22% in 2034). You must have sufficient tax liability to claim credit (rolls forward up to 5 years if needed). We provide IRS Form 5695 documentation and detailed cost breakdown. Most homeowners save $7,000-$15,000.',
    },
    {
      question: 'Can I finance solar roofing installation?',
      answer: 'Yes! Multiple financing options available: Solar loans (4-8% APR, 10-25 year terms, no down payment, tax credit can be used for principal reduction). Home equity loans/HELOC (typically lowest rates, interest may be tax-deductible). FHA PowerSaver loans (government-backed, 15-20 year terms). Solar leases/PPAs (no upfront cost, fixed monthly payment, fewer incentives). Weather Shield partners with specialized solar lenders offering $0 down, competitive rates, and terms that make monthly solar payments less than current electricity bills. Many homeowners achieve positive cash flow from day one with proper financing.',
    },
  ],
  priceRange: '$18-25 per sq ft installed',
  image: '/images/services/solar-roofing/hero.jpg',
  relatedServices: [
    { name: 'Metal Roofing', href: '/services/metal-roofing' },
    { name: 'Residential Roofing', href: '/services/residential-roofing' },
    { name: 'Roof Replacement', href: '/services/roof-replacement' },
    { name: 'Financing Options', href: '/financing' },
    { name: 'Roof Inspections', href: '/services/roof-inspections' },
  ],
  emergencyService: false,
  responseTime: 'within 48 hours',
}

export default function SolarRoofingPage() {
  return (
    <>
      <ServiceTemplate {...solarRoofingData} />

      {/* Schema Markup - Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Solar Roofing Installation',
            provider: {
              '@type': 'RoofingContractor',
              name: 'Weather Shield Roofing',
              telephone: '+1-843-877-5539',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Myrtle Beach',
                addressRegion: 'SC',
                addressCountry: 'US',
              },
            },
            areaServed: {
              '@type': 'City',
              name: 'Myrtle Beach',
              '@id': 'https://en.wikipedia.org/wiki/Myrtle_Beach,_South_Carolina',
            },
            description: 'Professional solar shingles and integrated solar roof installation with 30% federal tax credit, 25-year warranties, and complete energy independence.',
            offers: {
              '@type': 'Offer',
              priceRange: '$18-25 per square foot',
              priceCurrency: 'USD',
            },
          }),
        }}
      />

      {/* Schema Markup - HowTo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: 'How to Install Solar Roofing',
            description: 'Step-by-step process for professional solar shingle installation.',
            totalTime: 'P7D',
            estimatedCost: {
              '@type': 'MonetaryAmount',
              currency: 'USD',
              value: '40000',
            },
            step: solarRoofingData.process.map((step, index) => ({
              '@type': 'HowToStep',
              position: index + 1,
              name: step.title,
              text: step.description,
            })),
          }),
        }}
      />

      {/* Schema Markup - FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: solarRoofingData.faqs.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </>
  )
}
