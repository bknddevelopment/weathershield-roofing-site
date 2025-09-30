import type { Metadata } from 'next';
import GuideTemplate from '../../components/GuideTemplate';
import ComparisonTable, { ComparisonRow } from '../../components/ComparisonTable';

export const metadata: Metadata = {
  title: 'Flat Roof Materials Guide: TPO vs EPDM vs PVC | Weather Shield',
  description: 'Complete comparison of flat roof materials including TPO, EPDM, PVC, and modified bitumen. Expert recommendations for commercial and residential flat roofs.',
  keywords: 'flat roof materials, TPO roofing, EPDM rubber roofing, PVC membrane, modified bitumen, commercial roofing',
  alternates: {
    canonical: 'https://weathershieldroofers.com/roofing-guide/flat-roof-materials'
  },
  openGraph: {
    title: 'Flat Roof Materials Guide: TPO vs EPDM vs PVC',
    description: 'Compare commercial flat roofing materials with detailed cost analysis, durability ratings, and installation guidance.',
    type: 'article',
    url: 'https://weathershieldroofers.com/roofing-guide/flat-roof-materials',
    images: [{
      url: 'https://weathershieldroofers.com/images/og/flat-roof-materials.jpg',
      width: 1200,
      height: 630,
      alt: 'Flat Roof Materials Comparison Guide'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flat Roof Materials Guide: TPO vs EPDM vs PVC',
    description: 'Compare commercial flat roofing materials with detailed cost analysis, durability ratings, and installation guidance.',
    images: ['https://weathershieldroofers.com/images/og/flat-roof-materials.jpg'],
  },
};

const breadcrumbs = [
  { label: 'Roofing Guides', href: '/roofing-guide' },
  { label: 'Flat Roof Materials', href: '/roofing-guide/flat-roof-materials' }
];

const tableOfContents = [
  { id: 'overview', title: 'Flat Roof Basics' },
  { id: 'tpo', title: 'TPO Roofing' },
  { id: 'epdm', title: 'EPDM Rubber Roofing' },
  { id: 'pvc', title: 'PVC Membrane' },
  { id: 'comparison', title: 'Material Comparison' },
  { id: 'selection', title: 'Selection Guide' }
];

const comparisonRows: ComparisonRow[] = [
  {
    feature: 'Lifespan',
    option1: '20-30 years',
    option2: '25-30 years',
    description: 'Expected longevity with proper maintenance'
  },
  {
    feature: 'Cost per Square Foot',
    option1: '$4-$8 installed',
    option2: '$4-$7 installed',
    description: 'Material + labor (excludes deck prep)'
  },
  {
    feature: 'UV Resistance',
    option1: 'Excellent (reflective white)',
    option2: 'Good (black absorbs heat)',
    description: 'Protection from sun damage'
  },
  {
    feature: 'Energy Efficiency',
    option1: 'Excellent (cool roof)',
    option2: 'Fair (absorbs heat)',
    description: 'Heat reflection properties'
  },
  {
    feature: 'Chemical Resistance',
    option1: 'Good',
    option2: 'Excellent',
    description: 'Resistance to oils, grease, solvents'
  },
  {
    feature: 'Puncture Resistance',
    option1: 'Good',
    option2: 'Very Good',
    description: 'Resistance to foot traffic/debris'
  },
  {
    feature: 'Installation Method',
    option1: 'Heat-welded seams (strong)',
    option2: 'Glued/taped seams (easier)',
    description: 'Primary seaming technique'
  },
  {
    feature: 'Warranty',
    option1: '10-20 years',
    option2: '10-20 years',
    description: 'Typical manufacturer warranty'
  },
  {
    feature: 'Maintenance',
    option1: 'Low - inspect biannually',
    option2: 'Low - inspect biannually',
    description: 'Ongoing upkeep requirements'
  },
  {
    feature: 'Best For',
    option1: 'Commercial buildings, energy savings',
    option2: 'Residential, budget-friendly',
    description: 'Ideal applications'
  }
];

const pvcComparison: ComparisonRow[] = [
  {
    feature: 'Lifespan',
    option1: '25-30 years',
    option2: '30-40 years (longest lasting)',
    description: 'PVC lasts longest of single-ply membranes'
  },
  {
    feature: 'Cost',
    option1: '$5-$9/sq ft',
    option2: '$7-$12/sq ft (most expensive)',
    description: 'Installed cost including labor'
  },
  {
    feature: 'Chemical Resistance',
    option1: 'Good',
    option2: 'Excellent (best for restaurants)',
    description: 'Withstands oils, grease, chemicals'
  },
  {
    feature: 'Fire Resistance',
    option1: 'Good',
    option2: 'Excellent (Class A rating)',
    description: 'Fire rating and safety'
  },
  {
    feature: 'Seam Strength',
    option1: 'Strong (heat-welded)',
    option2: 'Strongest (hot-air welded)',
    description: 'Seam welding creates chemical bond'
  }
];

const faqs = [
  {
    question: 'What is the best flat roof material?',
    answer: 'TPO is the best overall choice for most applications due to its balance of cost ($4-$8/sq ft), durability (20-30 years), energy efficiency (reflective white surface), and strong heat-welded seams. EPDM is better for budget-conscious residential projects. PVC is best for commercial kitchens and buildings requiring maximum chemical resistance. The "best" material depends on your budget, building type, climate, and specific requirements.'
  },
  {
    question: 'How long do flat roofs last?',
    answer: 'Flat roof lifespan varies by material: TPO (20-30 years), EPDM (25-30 years), PVC (30-40 years), Modified Bitumen (15-20 years), Built-Up Roofing (15-30 years). Proper installation, regular maintenance, and drainage are critical—a poorly installed premium material will fail faster than a well-maintained budget option. Expect to replace flat roofs 30-50% more frequently than sloped asphalt shingle roofs.'
  },
  {
    question: 'Are flat roofs more expensive than regular roofs?',
    answer: 'Flat roofs typically cost less per square foot to install ($3-$12/sq ft) than sloped roofs ($5-$15/sq ft) due to simpler structure and easier access. However, flat roofs require more maintenance and replacement more frequently, potentially making lifetime costs similar or higher. The total cost depends on material choice, building size, accessibility, and climate. Commercial buildings often use flat roofs for cost-effectiveness and usable rooftop space.'
  },
  {
    question: 'What is TPO roofing made of?',
    answer: 'TPO (Thermoplastic Polyolefin) is a single-ply roofing membrane made from polypropylene and ethylene-propylene rubber polymers, reinforced with polyester. The white reflective surface contains UV stabilizers and heat-reflective pigments. TPO is manufactured in large rolls (typically 10-20 feet wide) and installed in sheets with seams heat-welded together using hot air to create watertight bonds stronger than the membrane itself.'
  },
  {
    question: 'Can you walk on a flat roof?',
    answer: 'Yes, you can walk on flat roofs, but with caution. TPO and PVC membranes are relatively puncture-resistant and handle foot traffic well. EPDM is softer and more vulnerable to puncture. Always walk carefully, avoid sharp objects, and use walkway pads for frequent access areas. For rooftop equipment maintenance, install permanent walkways to protect the membrane. Excessive traffic without protection will shorten roof lifespan significantly.'
  },
  {
    question: 'How do you fix a leak in a flat roof?',
    answer: 'Flat roof leak repair process: 1) Locate the exact leak source (may be far from interior water stain), 2) Clean and dry the damaged area thoroughly, 3) For membranes: patch with matching material using appropriate adhesive or heat welding, 4) For small punctures: use specialized roof tape or sealant, 5) Ensure proper drainage to prevent future ponding. Professional assessment is recommended—flat roof leaks can cause extensive hidden damage if not properly identified and repaired.'
  },
  {
    question: 'Do flat roofs need insulation?',
    answer: 'Yes, proper insulation is critical for flat roofs. Building codes require R-values of R-20 to R-30+ depending on climate zone. Flat roofs typically use rigid foam insulation (polyiso, EPS, or XPS) installed above the roof deck but below the membrane. This prevents condensation, improves energy efficiency, and provides thermal protection for the membrane. Without adequate insulation, flat roofs experience severe heat loss/gain and condensation problems.'
  },
  {
    question: 'What causes flat roofs to fail?',
    answer: 'Top flat roof failure causes: 1) Poor drainage causing standing water (ponding), 2) Improper installation of seams and flashings, 3) Lack of maintenance (debris, clogged drains), 4) Punctures from foot traffic or falling debris, 5) UV degradation without protective coating, 6) Inadequate insulation causing condensation, 7) Extreme temperature cycling, 8) Building movement stressing seams. Regular inspections and maintenance prevent 70% of failures.'
  }
];

const relatedServices = [
  {
    title: 'Commercial Roofing',
    href: '/services/commercial-roofing',
    description: 'Professional flat roof installation for commercial buildings'
  },
  {
    title: 'Flat Roof Repair',
    href: '/services/flat-roof-repair',
    description: 'Expert repair of leaks and damage to flat roofs'
  },
  {
    title: 'Roof Inspection',
    href: '/free-inspection',
    description: 'Free flat roof assessment and material recommendations'
  },
  {
    title: 'Emergency Roofing',
    href: '/emergency',
    description: '24/7 emergency repair for commercial flat roof leaks'
  }
];

export default function FlatRoofMaterialsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Complete Guide to Flat Roof Materials: TPO vs EPDM vs PVC',
    description: 'Comprehensive comparison of flat roofing materials including TPO, EPDM rubber, PVC membrane, and modified bitumen for commercial and residential applications.',
    image: 'https://weathershieldroofers.com/images/guides/flat-roof-materials.jpg',
    datePublished: '2025-01-15',
    author: { '@type': 'Organization', name: 'Weather Shield Roofing' }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer }
    }))
  };

  return (
    <GuideTemplate
      title="Complete Guide to Flat Roof Materials"
      description="Choosing the right flat roof material affects durability, energy costs, and maintenance for decades. This guide compares TPO, EPDM, PVC, and other materials to help you make an informed decision for your commercial or residential flat roof."
      breadcrumbs={breadcrumbs}
      tableOfContents={tableOfContents}
      faqs={faqs}
      relatedServices={relatedServices}
      articleSchema={articleSchema}
      faqSchema={faqSchema}
    >
      {/* Overview */}
      <section id="overview" className="mb-12">
        <h2 className="text-3xl font-bold text-weather-black mb-6">
          Flat Roof Basics: Understanding Your Options
        </h2>
        <p className="text-lg text-weather-dark mb-4">
          Flat roofs (technically low-slope roofs with pitch under 3:12) require different materials than steep-slope residential roofs. Instead of overlapping shingles that shed water via gravity, flat roofs use continuous waterproof membranes that create a sealed barrier against water infiltration.
        </p>
        <p className="text-lg text-weather-dark mb-4">
          Modern single-ply membranes (TPO, EPDM, PVC) have largely replaced traditional built-up roofing (BUR) and modified bitumen due to superior performance, faster installation, and better warranties. Understanding the differences between these materials is essential for selecting the optimal solution for your building type, climate, and budget.
        </p>
        <div className="bg-weather-light rounded-xl p-6 border-2 border-gray-200 my-6">
          <h3 className="text-xl font-bold text-weather-black mb-4">Flat Roof Material Categories</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-weather-teal mb-2">Single-Ply Membranes</h4>
              <p className="text-weather-dark">TPO, EPDM, PVC - Modern, long-lasting, lightweight sheets installed in large sections</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-weather-purple mb-2">Multi-Layer Systems</h4>
              <p className="text-weather-dark">Built-Up Roofing (BUR), Modified Bitumen - Traditional asphalt-based systems</p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-bold text-weather-amber mb-2">Coatings</h4>
              <p className="text-weather-dark">Silicone, Acrylic, Polyurethane - Applied over existing roofs to extend life</p>
            </div>
          </div>
        </div>
      </section>

      {/* TPO Section */}
      <section id="tpo" className="mb-12">
        <h2 className="text-3xl font-bold text-weather-black mb-6">
          TPO Roofing: The Modern Standard
        </h2>
        <div className="bg-gradient-to-r from-weather-teal/10 to-white rounded-xl p-6 border-2 border-weather-teal/30 mb-6">
          <h3 className="text-xl font-bold text-weather-black mb-3">What is TPO?</h3>
          <p className="text-weather-dark mb-4">
            TPO (Thermoplastic Polyolefin) is a single-ply white roofing membrane that has become the most popular commercial flat roofing material in North America. Introduced in the 1990s, TPO combines affordability, durability, and energy efficiency, making it ideal for commercial buildings, low-slope residential roofs, and RVs.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white rounded-lg p-4">
              <strong className="text-weather-black">Composition:</strong> Polypropylene and ethylene-propylene polymers
            </div>
            <div className="bg-white rounded-lg p-4">
              <strong className="text-weather-black">Thickness:</strong> 45-80 mil (1.1-2.0mm)
            </div>
            <div className="bg-white rounded-lg p-4">
              <strong className="text-weather-black">Colors:</strong> White (most common), tan, gray
            </div>
            <div className="bg-white rounded-lg p-4">
              <strong className="text-weather-black">Seaming:</strong> Heat-welded with hot air
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-weather-black mb-4">TPO Advantages</h3>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <span className="text-weather-teal font-bold mt-1">✓</span>
            <div>
              <strong>Energy Star Certified:</strong> White reflective surface reduces cooling costs by 20-30% vs dark roofs
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-weather-teal font-bold mt-1">✓</span>
            <div>
              <strong>Strong Heat-Welded Seams:</strong> Seams are stronger than membrane itself, virtually eliminating leak risk at seams
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-weather-teal font-bold mt-1">✓</span>
            <div>
              <strong>Cost-Effective:</strong> $4-$8 per sq ft installed, excellent value for performance level
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-weather-teal font-bold mt-1">✓</span>
            <div>
              <strong>Low Maintenance:</strong> Resists algae, mold, and UV degradation without coatings
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-weather-teal font-bold mt-1">✓</span>
            <div>
              <strong>Flexible Installation:</strong> Fully adhered, mechanically attached, or ballasted systems available
            </div>
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-weather-black mb-4">TPO Disadvantages</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-red-600 font-bold mt-1">✗</span>
            <div>
              <strong>Quality Variability:</strong> Not all TPO is equal—cheaper formulations degrade faster. Choose established brands.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-600 font-bold mt-1">✗</span>
            <div>
              <strong>Shorter Track Record:</strong> TPO is newer than EPDM (since 1990s), so long-term performance data is limited
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-600 font-bold mt-1">✗</span>
            <div>
              <strong>Puncture Sensitivity:</strong> Thinner than EPDM, more vulnerable to punctures from sharp objects
            </div>
          </li>
        </ul>
      </section>

      {/* EPDM Section */}
      <section id="epdm" className="mb-12">
        <h2 className="text-3xl font-bold text-weather-black mb-6">
          EPDM Rubber Roofing: The Proven Performer
        </h2>
        <div className="bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-xl p-6 border-2 border-gray-700 mb-6">
          <h3 className="text-xl font-bold mb-3">What is EPDM?</h3>
          <p className="mb-4 text-white/90">
            EPDM (Ethylene Propylene Diene Monomer) is a synthetic rubber membrane that has been the workhorse of the flat roofing industry since the 1960s. Its proven 50+ year track record, durability, and cost-effectiveness make it a reliable choice for residential and light commercial flat roofs.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <strong>Composition:</strong> Synthetic rubber (similar to tire rubber)
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <strong>Thickness:</strong> 45-90 mil (1.1-2.3mm)
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <strong>Colors:</strong> Black (standard), white (more expensive)
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4">
              <strong>Seaming:</strong> Tape or liquid adhesive
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-weather-black mb-4">EPDM Advantages</h3>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <span className="text-weather-teal font-bold mt-1">✓</span>
            <div>
              <strong>Proven Longevity:</strong> 50+ year track record with documented 25-30 year lifespans
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-weather-teal font-bold mt-1">✓</span>
            <div>
              <strong>Budget-Friendly:</strong> $4-$7 per sq ft installed, most economical single-ply option
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-weather-teal font-bold mt-1">✓</span>
            <div>
              <strong>Excellent Puncture Resistance:</strong> Rubber construction withstands foot traffic and impacts better than TPO/PVC
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-weather-teal font-bold mt-1">✓</span>
            <div>
              <strong>Easy Repairs:</strong> Simple to patch with EPDM patches and adhesive, DIY-friendly for minor repairs
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-weather-teal font-bold mt-1">✓</span>
            <div>
              <strong>Extreme Temperature Tolerance:</strong> Remains flexible from -40°F to 300°F, ideal for all climates
            </div>
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-weather-black mb-4">EPDM Disadvantages</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-red-600 font-bold mt-1">✗</span>
            <div>
              <strong>Lower Energy Efficiency:</strong> Black surface absorbs heat, increasing cooling costs 15-20% vs white TPO
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-600 font-bold mt-1">✗</span>
            <div>
              <strong>Seam Vulnerability:</strong> Adhesive/tape seams weaker than heat-welded seams, require more careful installation
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-600 font-bold mt-1">✗</span>
            <div>
              <strong>Shrinkage:</strong> Can shrink over time (especially if mechanically fastened), stressing seams and flashings
            </div>
          </li>
        </ul>
      </section>

      {/* PVC Section */}
      <section id="pvc" className="mb-12">
        <h2 className="text-3xl font-bold text-weather-black mb-6">
          PVC Membrane: Premium Performance
        </h2>
        <div className="bg-gradient-to-r from-weather-purple/10 to-white rounded-xl p-6 border-2 border-weather-purple/30 mb-6">
          <h3 className="text-xl font-bold text-weather-black mb-3">What is PVC?</h3>
          <p className="text-weather-dark mb-4">
            PVC (Polyvinyl Chloride) is a premium single-ply membrane offering superior durability, fire resistance, and chemical resistance. While more expensive than TPO or EPDM, PVC delivers the longest lifespan (30-40 years) and best performance in demanding environments like restaurant roofs, chemical facilities, and high-traffic areas.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-weather-black mb-4">PVC Advantages</h3>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-3">
            <span className="text-weather-teal font-bold mt-1">✓</span>
            <div>
              <strong>Longest Lifespan:</strong> 30-40 years with proper maintenance, outlasting all other single-ply membranes
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-weather-teal font-bold mt-1">✓</span>
            <div>
              <strong>Superior Chemical Resistance:</strong> Ideal for restaurant roofs with grease exhaust and chemical processing facilities
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-weather-teal font-bold mt-1">✓</span>
            <div>
              <strong>Excellent Fire Resistance:</strong> Class A fire rating, self-extinguishing properties
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-weather-teal font-bold mt-1">✓</span>
            <div>
              <strong>Strongest Seams:</strong> Hot-air welded seams create chemical bond stronger than membrane
            </div>
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-weather-black mb-4">PVC Disadvantages</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-red-600 font-bold mt-1">✗</span>
            <div>
              <strong>Highest Cost:</strong> $7-$12 per sq ft installed, 30-50% more expensive than TPO/EPDM
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-red-600 font-bold mt-1">✗</span>
            <div>
              <strong>Incompatible with Tar:</strong> Cannot be installed over existing tar-based roofs without barrier
            </div>
          </li>
        </ul>
      </section>

      {/* Comparison Tables */}
      <section id="comparison" className="mb-12">
        <h2 className="text-3xl font-bold text-weather-black mb-6">
          Material Comparison: TPO vs EPDM
        </h2>
        <p className="text-lg text-weather-dark mb-6">
          These two materials account for over 80% of new flat roof installations. Here's a detailed comparison:
        </p>
        <ComparisonTable
          option1Title="TPO"
          option2Title="EPDM"
          rows={comparisonRows}
        />

        <h2 className="text-3xl font-bold text-weather-black mb-6 mt-12">
          TPO vs PVC Comparison
        </h2>
        <p className="text-lg text-weather-dark mb-6">
          Both are thermoplastic membranes with heat-welded seams, but PVC offers premium performance at a premium price:
        </p>
        <ComparisonTable
          option1Title="TPO"
          option2Title="PVC (Premium)"
          rows={pvcComparison}
        />
      </section>

      {/* Selection Guide */}
      <section id="selection" className="mb-12">
        <h2 className="text-3xl font-bold text-weather-black mb-6">
          Selection Guide: Choosing the Right Material
        </h2>
        <p className="text-lg text-weather-dark mb-6">
          Use these recommendations based on building type, budget, and priorities:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-weather-teal/10 rounded-xl p-6 border-2 border-weather-teal/30">
            <h3 className="text-xl font-bold text-weather-teal mb-4">Choose TPO If:</h3>
            <ul className="space-y-2 text-weather-dark">
              <li>✓ Energy efficiency is a priority (cooling costs)</li>
              <li>✓ You want modern, proven technology</li>
              <li>✓ Budget is moderate ($4-$8/sq ft)</li>
              <li>✓ You need Energy Star certification</li>
              <li>✓ Commercial building with moderate traffic</li>
              <li>✓ Hot, sunny climate</li>
            </ul>
          </div>

          <div className="bg-gray-100 rounded-xl p-6 border-2 border-gray-300">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Choose EPDM If:</h3>
            <ul className="space-y-2 text-weather-dark">
              <li>✓ Budget is primary concern ($4-$7/sq ft)</li>
              <li>✓ You want longest track record (50+ years)</li>
              <li>✓ Residential flat roof or garage</li>
              <li>✓ DIY-friendly repairs are important</li>
              <li>✓ Building is in shade or cold climate</li>
              <li>✓ Superior puncture resistance needed</li>
            </ul>
          </div>

          <div className="bg-weather-purple/10 rounded-xl p-6 border-2 border-weather-purple/30">
            <h3 className="text-xl font-bold text-weather-purple mb-4">Choose PVC If:</h3>
            <ul className="space-y-2 text-weather-dark">
              <li>✓ Maximum lifespan is worth premium cost</li>
              <li>✓ Restaurant with grease exhaust on roof</li>
              <li>✓ Chemical exposure is concern</li>
              <li>✓ Fire resistance is critical</li>
              <li>✓ Heavy foot traffic expected</li>
              <li>✓ Budget allows $7-$12/sq ft investment</li>
            </ul>
          </div>

          <div className="bg-weather-amber/10 rounded-xl p-6 border-2 border-weather-amber/30">
            <h3 className="text-xl font-bold text-weather-amber mb-4">Avoid All If:</h3>
            <ul className="space-y-2 text-weather-dark">
              <li>✗ Roof has standing water (ponding) issues</li>
              <li>✗ Deck is severely damaged and needs replacement</li>
              <li>✗ Building will be demolished within 10 years</li>
              <li>✗ Multiple layers already exist (remove first)</li>
              <li>✗ Proper drainage cannot be achieved</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-weather-teal/10 to-weather-purple/10 rounded-xl p-8 border-2 border-weather-teal/20">
          <h3 className="text-2xl font-bold text-weather-black mb-4 text-center">
            Professional Recommendation
          </h3>
          <p className="text-lg text-weather-dark text-center max-w-3xl mx-auto">
            For most commercial buildings and low-slope residential roofs, <strong>TPO offers the best balance</strong> of cost, performance, and energy efficiency. EPDM is ideal for budget-conscious residential projects. PVC is worth the investment for restaurants, chemical facilities, or buildings requiring maximum durability. Always consult with a licensed commercial roofing contractor for site-specific recommendations.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-weather-teal to-weather-purple text-white rounded-2xl p-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Expert Flat Roof Material Selection?
        </h2>
        <p className="text-xl mb-6 text-white/90 max-w-3xl mx-auto">
          Weather Shield Roofing specializes in commercial flat roofing with 15+ years of experience installing TPO, EPDM, and PVC systems. We provide free consultations and material recommendations based on your building's specific requirements.
        </p>
        <a
          href="tel:+18438775539"
          className="inline-flex items-center gap-2 bg-white text-weather-teal font-bold px-8 py-4 rounded-lg hover:scale-105 transition-transform text-lg"
        >
          Call (843) 877-5539 for Free Flat Roof Consultation
        </a>
      </div>
    </GuideTemplate>
  );
}
