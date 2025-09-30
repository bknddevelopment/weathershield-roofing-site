import type { Metadata } from 'next';
import GuideTemplate from '../../components/GuideTemplate';
import AnatomyDiagram, { DiagramLabel } from '../../components/AnatomyDiagram';
import { JsonLd } from '../../components/JsonLd';

export const metadata: Metadata = {
  title: 'Complete Guide to Roof Components & Anatomy | Weather Shield',
  description: 'Learn about essential roof components including shingles, underlayment, flashing, ventilation, and decking. Expert guide from GAF Preferred Contractors.',
  keywords: 'roof components, roof anatomy, roofing parts, shingles, underlayment, flashing, roof decking, ridge vent, soffit, fascia',
  alternates: {
    canonical: 'https://weathershieldroofers.com/roofing-guide/roof-components'
  },
  openGraph: {
    title: 'Complete Guide to Roof Components & Anatomy',
    description: 'Expert breakdown of all essential roof components from Weather Shield Roofing',
    type: 'article',
    url: 'https://weathershieldroofers.com/roofing-guide/roof-components',
    images: [{
      url: 'https://weathershieldroofers.com/images/og/roof-components.jpg',
      width: 1200,
      height: 630,
      alt: 'Complete Guide to Roof Components Diagram'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Guide to Roof Components & Anatomy | Weather Shield',
    description: 'Expert breakdown of all essential roof components from shingles to ventilation systems. 20+ years GAF experience.',
    images: ['https://weathershieldroofers.com/images/og/roof-components.jpg'],
  },
};

const breadcrumbs = [
  { label: 'Roofing Guides', href: '/roofing-guide' },
  { label: 'Roof Components', href: '/roofing-guide/roof-components' }
];

const tableOfContents = [
  { id: 'overview', title: 'Understanding Your Roof' },
  { id: 'anatomy-diagram', title: 'Roof Anatomy Diagram' },
  { id: 'shingles', title: 'Shingles & Roofing Material' },
  { id: 'underlayment', title: 'Underlayment Protection' },
  { id: 'flashing', title: 'Flashing Systems' },
  { id: 'ventilation', title: 'Ventilation Components' },
  { id: 'structural', title: 'Structural Elements' },
  { id: 'maintenance', title: 'Maintenance Tips' }
];

const diagramLabels: DiagramLabel[] = [
  {
    id: 'shingles',
    title: 'Shingles',
    description: 'The outermost layer providing weather protection and aesthetic appeal. Most common types include asphalt, architectural, and designer shingles.',
    x: 50,
    y: 25
  },
  {
    id: 'ridge-vent',
    title: 'Ridge Vent',
    description: 'Runs along the peak of the roof allowing hot air to escape from the attic, crucial for proper ventilation and preventing moisture buildup.',
    x: 50,
    y: 15
  },
  {
    id: 'underlayment',
    title: 'Underlayment',
    description: 'Water-resistant barrier installed directly on the roof deck beneath shingles, providing an extra layer of protection against water infiltration.',
    x: 60,
    y: 35
  },
  {
    id: 'flashing',
    title: 'Flashing',
    description: 'Metal strips installed around chimneys, valleys, and roof edges to direct water away from critical areas and prevent leaks.',
    x: 35,
    y: 40
  },
  {
    id: 'decking',
    title: 'Roof Decking',
    description: 'Wooden boards or plywood panels that form the structural foundation of your roof, typically made from OSB or plywood.',
    x: 70,
    y: 45
  },
  {
    id: 'soffit',
    title: 'Soffit',
    description: 'The underside of the roof overhang that provides intake ventilation for the attic and protects rafters from weather exposure.',
    x: 80,
    y: 60
  },
  {
    id: 'fascia',
    title: 'Fascia',
    description: 'Vertical board running along the roof edge where gutters attach, protecting roof edges and providing finished appearance.',
    x: 85,
    y: 55
  },
  {
    id: 'gutters',
    title: 'Gutters',
    description: 'Channels that collect and redirect rainwater away from the roof and foundation, preventing water damage and erosion.',
    x: 90,
    y: 58
  },
  {
    id: 'valley',
    title: 'Valley',
    description: 'The V-shaped channel where two roof planes meet, designed to efficiently channel water runoff into gutters.',
    x: 25,
    y: 45
  },
  {
    id: 'rafters',
    title: 'Rafters/Trusses',
    description: 'The structural framework supporting the roof deck and transferring the weight of the roof to the building walls.',
    x: 65,
    y: 55
  }
];

const faqs = [
  {
    question: 'What is the most important component of a roof?',
    answer: 'While every component plays a vital role, the underlayment and flashing are arguably most critical for preventing water damage. The underlayment provides a waterproof barrier, while flashing prevents leaks at vulnerable joints and penetrations. Together, they form your roof\'s primary defense against water infiltration.'
  },
  {
    question: 'How often should roof components be inspected?',
    answer: 'We recommend professional roof inspections at least twice per year—typically in spring and fall. Additionally, inspect your roof after major storms. Regular inspections can identify minor issues like damaged shingles or worn flashing before they become expensive repairs.'
  },
  {
    question: 'What\'s the difference between roof decking and sheathing?',
    answer: 'Roof decking and sheathing are the same component—both terms refer to the wooden structural layer installed over rafters or trusses. Modern homes typically use OSB (oriented strand board) or plywood panels, usually 4×8 sheets of ½" to ¾" thickness.'
  },
  {
    question: 'Do I really need roof ventilation?',
    answer: 'Absolutely! Proper roof ventilation is essential for extending your roof\'s lifespan and maintaining energy efficiency. Ventilation prevents heat and moisture buildup in your attic, which can cause shingle damage, wood rot, mold growth, and increased cooling costs. Most building codes require minimum ventilation standards.'
  },
  {
    question: 'What type of underlayment is best?',
    answer: 'Synthetic underlayment is generally superior to traditional felt paper. It\'s more durable, water-resistant, and tear-resistant. For premium protection, consider self-adhering ice and water shield underlayment in vulnerable areas like eaves, valleys, and around penetrations.'
  },
  {
    question: 'How long do roof components typically last?',
    answer: 'Lifespan varies by component: Asphalt shingles (15-30 years), metal flashing (50+ years), underlayment (30-50 years for synthetic), roof decking (50+ years if protected from moisture), and gutters (20-50 years depending on material). Proper maintenance significantly extends these lifespans.'
  },
  {
    question: 'Can I replace individual roof components without replacing the entire roof?',
    answer: 'Yes, in many cases! Damaged flashing, gutters, vents, and even sections of shingles can be replaced individually. However, if multiple components are failing or your roof is over 20 years old, a complete replacement may be more cost-effective long-term.'
  },
  {
    question: 'What causes roof decking to rot?',
    answer: 'Roof decking rot is typically caused by moisture exposure from roof leaks, inadequate ventilation, or condensation. Warning signs include sagging areas, water stains on ceilings, and visible mold. During roof replacement, damaged decking sections should be replaced to ensure structural integrity.'
  },
  {
    question: 'How much does it cost to replace damaged roof components?',
    answer: 'Costs vary widely: Flashing repairs ($200-$500), underlayment replacement ($1-$3 per sq ft), decking replacement ($3-$7 per sq ft), ventilation installation ($300-$550 per vent). We offer free inspections and detailed quotes for all roofing component repairs.'
  },
  {
    question: 'What are signs that roof components are failing?',
    answer: 'Watch for: missing or damaged shingles, water stains on ceilings, daylight visible through roof boards, excessive granules in gutters, sagging roof sections, damaged or rusted flashing, blocked soffit vents, and ice dams in winter. Any of these warrant immediate professional inspection.'
  }
];

const relatedServices = [
  {
    title: 'Roof Replacement',
    href: '/services/roof-replacement',
    description: 'Complete roof replacement with premium materials and enhanced warranties'
  },
  {
    title: 'Roof Repair',
    href: '/services/roof-repair',
    description: 'Expert repair of damaged shingles, flashing, and other roof components'
  },
  {
    title: 'Roof Inspection',
    href: '/services/roof-inspection',
    description: 'Comprehensive 50-point inspection to assess all roof components'
  },
  {
    title: 'Emergency Roofing',
    href: '/emergency',
    description: '24/7 emergency repair service for storm damage and leaks'
  }
];

export default function RoofComponentsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Complete Guide to Roof Components & Anatomy',
    description: 'Comprehensive guide to understanding all essential roof components including shingles, underlayment, flashing, ventilation, and structural elements.',
    image: 'https://weathershieldroofers.com/images/guides/roof-components-diagram.jpg',
    datePublished: '2025-01-15',
    dateModified: '2025-01-15',
    author: {
      '@type': 'Organization',
      name: 'Weather Shield Roofing'
    },
    publisher: {
      '@type': 'Organization',
      name: 'Weather Shield Roofing',
      logo: {
        '@type': 'ImageObject',
        url: 'https://weathershieldroofers.com/images/logo/weather_shield_roofing_transparent.png'
      }
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <GuideTemplate
      title="Complete Guide to Roof Components & Anatomy"
      description="Understanding your roof's components is essential for proper maintenance and making informed decisions about repairs or replacement. This comprehensive guide breaks down every critical element of a residential roofing system."
      breadcrumbs={breadcrumbs}
      tableOfContents={tableOfContents}
      faqs={faqs}
      relatedServices={relatedServices}
      articleSchema={articleSchema}
      faqSchema={faqSchema}
    >
      {/* Overview Section */}
      <section id="overview" className="mb-12">
        <h2 className="text-3xl font-bold text-weather-black mb-6">
          Understanding Your Roof's Architecture
        </h2>
        <p className="text-lg text-weather-dark mb-4">
          Your roof is a complex system of integrated components working together to protect
          your home from the elements. Each component plays a specific role, and understanding
          how they work together helps you maintain your roof properly and identify potential
          issues early.
        </p>
        <p className="text-lg text-weather-dark mb-4">
          A typical residential roof consists of three main layers: the structural layer
          (decking and framing), the protective layer (underlayment and waterproofing), and
          the weather layer (shingles or other roofing material). Additional components like
          ventilation, flashing, and drainage systems ensure your roof performs optimally for
          decades.
        </p>
        <div className="bg-weather-teal/10 border-l-4 border-weather-teal p-6 rounded-r-lg my-6">
          <p className="text-weather-dark font-semibold">
            <strong>Professional Tip:</strong> A well-designed roof system with quality
            components can last 25-50 years with proper maintenance. The key is ensuring each
            component is correctly installed and regularly inspected.
          </p>
        </div>
      </section>

      {/* Interactive Diagram Section */}
      <section id="anatomy-diagram" className="mb-12">
        <h2 className="text-3xl font-bold text-weather-black mb-6">
          Interactive Roof Anatomy Diagram
        </h2>
        <p className="text-lg text-weather-dark mb-6">
          Click on any component below to learn more about its function and importance in your
          roofing system.
        </p>
        <AnatomyDiagram
          image="/images/guides/roof-anatomy-diagram.jpg"
          imageAlt="Detailed roof anatomy diagram showing all major components"
          labels={diagramLabels}
          title="Residential Roof Cross-Section"
        />
      </section>

      {/* Shingles Section */}
      <section id="shingles" className="mb-12">
        <h2 className="text-3xl font-bold text-weather-black mb-6">
          1. Shingles & Roofing Material
        </h2>
        <p className="text-lg text-weather-dark mb-4">
          Shingles are your roof's first line of defense against weather and the most visible
          component. They protect underlying layers from UV rays, rain, wind, and temperature
          extremes while defining your home's curb appeal.
        </p>
        <h3 className="text-2xl font-bold text-weather-black mb-4 mt-6">
          Types of Roofing Shingles
        </h3>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <span className="text-weather-teal font-bold mt-1">•</span>
            <div>
              <strong className="text-weather-black">Asphalt 3-Tab Shingles:</strong> Most
              economical option, lightweight, 15-20 year lifespan, uniform appearance
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-weather-teal font-bold mt-1">•</span>
            <div>
              <strong className="text-weather-black">Architectural Shingles:</strong> Premium
              asphalt with dimensional appearance, 25-30 year lifespan, better wind resistance
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-weather-teal font-bold mt-1">•</span>
            <div>
              <strong className="text-weather-black">Designer/Luxury Shingles:</strong> Mimic
              slate or wood shake, 30-50 year lifespan, highest aesthetic appeal
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-weather-teal font-bold mt-1">•</span>
            <div>
              <strong className="text-weather-black">Metal Roofing:</strong> Long-lasting
              (40-70 years), energy-efficient, excellent for coastal areas
            </div>
          </li>
        </ul>
        <p className="text-lg text-weather-dark">
          As a GAF Preferred Contractor, we specialize in GAF Timberline HDZ shingles, offering
          superior wind resistance (130+ mph), algae resistance, and industry-leading warranty
          protection.
        </p>
      </section>

      {/* Underlayment Section */}
      <section id="underlayment" className="mb-12">
        <h2 className="text-3xl font-bold text-weather-black mb-6">
          2. Underlayment Protection Layer
        </h2>
        <p className="text-lg text-weather-dark mb-4">
          Underlayment is a water-resistant or waterproof barrier installed directly on the
          roof deck before shingles. This critical component provides secondary protection
          against water infiltration if shingles are damaged or blown off.
        </p>
        <h3 className="text-2xl font-bold text-weather-black mb-4 mt-6">
          Underlayment Types
        </h3>
        <div className="bg-white rounded-lg border-2 border-gray-200 p-6 mb-6">
          <h4 className="font-bold text-weather-black mb-3">Felt Paper (Traditional)</h4>
          <p className="text-weather-dark mb-3">
            Asphalt-saturated felt available in #15 or #30 weight. Less expensive but tears
            easily and degrades faster than synthetic options. Not recommended for premium
            roof installations.
          </p>
          <div className="flex items-center gap-2 text-sm text-weather-dark">
            <span className="text-weather-amber font-semibold">Lifespan:</span> 12-20 years
          </div>
        </div>
        <div className="bg-white rounded-lg border-2 border-gray-200 p-6 mb-6">
          <h4 className="font-bold text-weather-black mb-3">Synthetic Underlayment (Recommended)</h4>
          <p className="text-weather-dark mb-3">
            Made from woven or spun polyethylene or polypropylene. Superior tear resistance,
            moisture protection, and UV stability. Can be exposed to elements for extended
            periods during installation.
          </p>
          <div className="flex items-center gap-2 text-sm text-weather-dark">
            <span className="text-weather-teal font-semibold">Lifespan:</span> 25-30 years
          </div>
        </div>
        <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
          <h4 className="font-bold text-weather-black mb-3">Self-Adhering Ice & Water Shield</h4>
          <p className="text-weather-dark mb-3">
            Rubberized asphalt membrane that seals around nails and provides waterproof
            protection. Required by code in many areas for eaves, valleys, and around
            penetrations.
          </p>
          <div className="flex items-center gap-2 text-sm text-weather-dark">
            <span className="text-weather-teal font-semibold">Lifespan:</span> 30-50 years
          </div>
        </div>
      </section>

      {/* Flashing Section */}
      <section id="flashing" className="mb-12">
        <h2 className="text-3xl font-bold text-weather-black mb-6">
          3. Flashing Systems: Your Roof's Leak Prevention
        </h2>
        <p className="text-lg text-weather-dark mb-4">
          Flashing consists of thin metal strips (typically aluminum, galvanized steel, or
          copper) installed at roof joints, valleys, and around penetrations. Properly
          installed flashing is critical—it's the most common area for roof leaks when
          improperly done.
        </p>
        <h3 className="text-2xl font-bold text-weather-black mb-4 mt-6">
          Critical Flashing Locations
        </h3>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <span className="text-weather-teal font-bold mt-1">•</span>
            <div>
              <strong className="text-weather-black">Valley Flashing:</strong> Channels water
              from converging roof planes into gutters
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-weather-teal font-bold mt-1">•</span>
            <div>
              <strong className="text-weather-black">Chimney Flashing:</strong> Multi-part
              system including base, step, and counter flashing to seal around chimneys
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-weather-teal font-bold mt-1">•</span>
            <div>
              <strong className="text-weather-black">Vent Pipe Flashing:</strong> Rubber boot
              or lead collar that seals around plumbing vent pipes
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-weather-teal font-bold mt-1">•</span>
            <div>
              <strong className="text-weather-black">Drip Edge:</strong> L-shaped metal at
              roof edges directing water into gutters and protecting fascia
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-weather-teal font-bold mt-1">•</span>
            <div>
              <strong className="text-weather-black">Skylight Flashing:</strong> Custom kit
              specific to skylight dimensions ensuring waterproof seal
            </div>
          </li>
        </ul>
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-6">
          <p className="text-weather-dark font-semibold">
            <strong>Warning:</strong> Over 70% of roof leaks originate from improperly
            installed or deteriorated flashing, not shingle failure. Professional installation
            is essential.
          </p>
        </div>
      </section>

      {/* Ventilation Section */}
      <section id="ventilation" className="mb-12">
        <h2 className="text-3xl font-bold text-weather-black mb-6">
          4. Ventilation Components: Extending Your Roof's Life
        </h2>
        <p className="text-lg text-weather-dark mb-4">
          Proper attic ventilation is essential for preventing moisture buildup, reducing
          energy costs, and extending shingle lifespan. A balanced ventilation system includes
          both intake vents (at soffits) and exhaust vents (at or near the ridge).
        </p>
        <h3 className="text-2xl font-bold text-weather-black mb-4 mt-6">
          Ventilation System Components
        </h3>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-weather-light rounded-lg p-6 border-2 border-gray-200">
            <h4 className="font-bold text-weather-black mb-3 text-xl">Intake Ventilation</h4>
            <ul className="space-y-2 text-weather-dark">
              <li className="flex items-start gap-2">
                <span className="text-weather-teal mt-1">▸</span>
                <span><strong>Soffit Vents:</strong> Most common intake, continuous or individual</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-weather-teal mt-1">▸</span>
                <span><strong>Fascia Vents:</strong> Alternative when soffits unavailable</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-weather-teal mt-1">▸</span>
                <span><strong>Drip Edge Vents:</strong> Integrated into roof edge</span>
              </li>
            </ul>
          </div>
          <div className="bg-weather-light rounded-lg p-6 border-2 border-gray-200">
            <h4 className="font-bold text-weather-black mb-3 text-xl">Exhaust Ventilation</h4>
            <ul className="space-y-2 text-weather-dark">
              <li className="flex items-start gap-2">
                <span className="text-weather-teal mt-1">▸</span>
                <span><strong>Ridge Vents:</strong> Continuous exhaust along roof peak</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-weather-teal mt-1">▸</span>
                <span><strong>Box/Static Vents:</strong> Individual units on roof surface</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-weather-teal mt-1">▸</span>
                <span><strong>Turbine Vents:</strong> Wind-powered spinning vents</span>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-lg text-weather-dark">
          <strong>Code Requirement:</strong> Most building codes require 1 square foot of
          ventilation per 150 square feet of attic space, with balanced intake and exhaust.
          Proper ventilation can extend your roof's life by 5-10 years.
        </p>
      </section>

      {/* Structural Section */}
      <section id="structural" className="mb-12">
        <h2 className="text-3xl font-bold text-weather-black mb-6">
          5. Structural Elements: The Foundation of Your Roof
        </h2>
        <p className="text-lg text-weather-dark mb-4">
          The structural components of your roof bear all loads and transfer weight to your
          home's walls. Understanding these elements is crucial when dealing with leaks or
          considering major repairs.
        </p>
        <h3 className="text-2xl font-bold text-weather-black mb-4 mt-6">
          Key Structural Components
        </h3>
        <div className="space-y-4 mb-6">
          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <h4 className="font-bold text-weather-black mb-2">Roof Deck (Sheathing)</h4>
            <p className="text-weather-dark">
              The wooden surface layer (typically OSB or plywood) installed over rafters or
              trusses. Provides nailing surface for shingles and structural rigidity. Standard
              thickness is ½" to ¾" depending on rafter spacing and local code requirements.
            </p>
          </div>
          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <h4 className="font-bold text-weather-black mb-2">Rafters or Trusses</h4>
            <p className="text-weather-dark">
              The primary structural framework supporting the roof. Rafters are individual
              beams, while trusses are pre-engineered triangular units. Typically spaced 16"
              or 24" on center. Must be sized correctly for snow load and roof pitch.
            </p>
          </div>
          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <h4 className="font-bold text-weather-black mb-2">Fascia Boards</h4>
            <p className="text-weather-dark">
              Vertical boards mounted at the roof edge where gutters attach. Protects rafter
              ends from weather exposure and provides mounting surface for gutters. Typically
              2×6 or 2×8 lumber.
            </p>
          </div>
          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <h4 className="font-bold text-weather-black mb-2">Soffits</h4>
            <p className="text-weather-dark">
              The underside of the roof overhang. Protects rafter tails and provides critical
              intake ventilation through soffit vents. Can be vinyl, aluminum, wood, or fiber
              cement.
            </p>
          </div>
        </div>
      </section>

      {/* Maintenance Section */}
      <section id="maintenance" className="mb-12">
        <h2 className="text-3xl font-bold text-weather-black mb-6">
          6. Component Maintenance Tips
        </h2>
        <p className="text-lg text-weather-dark mb-6">
          Regular maintenance of roof components dramatically extends their lifespan and
          prevents costly emergency repairs. Here's a seasonal maintenance checklist:
        </p>

        <div className="bg-gradient-to-r from-weather-teal/10 to-weather-purple/10 rounded-xl p-8 border-2 border-weather-teal/20 mb-6">
          <h3 className="text-2xl font-bold text-weather-black mb-4">
            Seasonal Maintenance Checklist
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-weather-teal mb-3">Spring & Fall</h4>
              <ul className="space-y-2 text-weather-dark">
                <li>✓ Clean gutters and downspouts</li>
                <li>✓ Inspect shingles for damage</li>
                <li>✓ Check flashing around chimneys and vents</li>
                <li>✓ Verify soffit vents are clear</li>
                <li>✓ Look for signs of water damage in attic</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-weather-teal mb-3">After Storms</h4>
              <ul className="space-y-2 text-weather-dark">
                <li>✓ Document visible damage for insurance</li>
                <li>✓ Check for missing or lifted shingles</li>
                <li>✓ Inspect for hail damage (dents)</li>
                <li>✓ Look for debris in valleys</li>
                <li>✓ Schedule professional inspection if concerned</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-weather-teal text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            Professional Roof Component Inspection
          </h3>
          <p className="text-lg mb-6 text-white/90">
            Weather Shield Roofing offers comprehensive 50-point roof inspections examining
            every component of your roofing system. Early detection saves thousands in repair
            costs.
          </p>
          <a
            href="tel:+18438775539"
            className="inline-flex items-center gap-2 bg-white text-weather-teal font-bold px-8 py-4 rounded-lg hover:scale-105 transition-transform text-lg"
          >
            Schedule Free Inspection: (843) 877-5539
          </a>
        </div>
      </section>
    </GuideTemplate>
  );
}
