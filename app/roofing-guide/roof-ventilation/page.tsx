import type { Metadata } from 'next';
import GuideTemplate from '../../components/GuideTemplate';
import VentilationCalculator from '../../components/VentilationCalculator';

export const metadata: Metadata = {
  title: 'Complete Roof Ventilation Guide + CFM Calculator | Weather Shield',
  description: 'Expert guide to roof ventilation including intake/exhaust balance, ventilation calculator, and installation tips. Extend your roof life by 10+ years.',
  keywords: 'roof ventilation, attic ventilation, ridge vent, soffit vents, ventilation calculator, CFM calculation',
  alternates: {
    canonical: 'https://weathershieldroofers.com/roofing-guide/roof-ventilation'
  },
  openGraph: {
    title: 'Complete Roof Ventilation Guide + CFM Calculator',
    description: 'Calculate your attic ventilation needs with our free CFM calculator. Expert installation guide included.',
    type: 'article',
    url: 'https://weathershieldroofers.com/roofing-guide/roof-ventilation',
    images: [{
      url: 'https://weathershieldroofers.com/images/og/roof-ventilation.jpg',
      width: 1200,
      height: 630,
      alt: 'Roof Ventilation Guide and CFM Calculator'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Complete Roof Ventilation Guide + CFM Calculator',
    description: 'Calculate your attic ventilation needs with our free CFM calculator. Expert installation guide included.',
    images: ['https://weathershieldroofers.com/images/og/roof-ventilation.jpg'],
  },
};

const breadcrumbs = [
  { label: 'Roofing Guides', href: '/roofing-guide' },
  { label: 'Roof Ventilation Guide', href: '/roofing-guide/roof-ventilation' }
];

const tableOfContents = [
  { id: 'overview', title: 'Why Ventilation Matters' },
  { id: 'calculator', title: 'Ventilation Calculator' },
  { id: 'types', title: 'Ventilation Types' },
  { id: 'balance', title: 'Intake/Exhaust Balance' },
  { id: 'installation', title: 'Installation Guide' },
  { id: 'problems', title: 'Common Problems' }
];

const faqs = [
  {
    question: 'How much ventilation does my roof need?',
    answer: 'Building codes require 1 square foot of ventilation per 150 square feet of attic space (with vapor barrier) or 1:300 without. This should be split 50/50 between intake (soffit) and exhaust (ridge/gable) vents. For airflow, calculate 1 CFM per square foot of attic space. A 1,500 sq ft attic needs 10 sq ft of net free area ventilation and 1,500 CFM airflow capacity.'
  },
  {
    question: 'What happens if my attic isn\'t properly ventilated?',
    answer: 'Poor ventilation causes multiple serious problems: premature shingle failure (up to 50% reduced lifespan), wood rot in roof decking and rafters, mold and mildew growth, ice dam formation in winter, increased cooling costs (up to 20% higher), insulation degradation from moisture, and voided manufacturer warranties. Proper ventilation is essential for roof longevity.'
  },
  {
    question: 'Is ridge vent or gable vent better?',
    answer: 'Ridge vents are generally superior for most homes because they provide continuous exhaust along the entire roof peak, creating even airflow across the attic. They\'re less visible and work naturally with soffit intake vents. Gable vents work well but create less even airflow. Never mix ridge and powered attic fans—this creates negative pressure and can pull air-conditioned air into the attic.'
  },
  {
    question: 'Can I have too much roof ventilation?',
    answer: 'No, you cannot over-ventilate your attic in most cases. More ventilation is almost always better than less. However, you must maintain balanced intake and exhaust (50/50 split). Excess exhaust without sufficient intake will draw conditioned air from your home. Excess intake without exhaust won\'t move hot air out. Balance is key—more total ventilation with proper balance is ideal.'
  },
  {
    question: 'Do I need soffit vents if I have ridge vents?',
    answer: 'Absolutely yes! Ridge vents are exhaust only—they require intake ventilation (soffit vents) to function properly. Air must enter through soffits, travel along the underside of the roof deck, and exit through the ridge. Without soffit vents, ridge vents are ineffective. Install continuous soffit vents along all overhangs for optimal performance.'
  },
  {
    question: 'Should I install powered attic fans?',
    answer: 'Generally no—passive ventilation (ridge and soffit vents) is more effective and energy-efficient for most homes. Powered fans can create negative pressure, pulling conditioned air from your living space, actually increasing cooling costs. They also require maintenance and electricity. Save powered fans for attics with severe ventilation challenges where passive solutions are impossible.'
  },
  {
    question: 'How do I know if my attic ventilation is working?',
    answer: 'Check these signs: Attic temperature should be within 10-15°F of outdoor temperature on hot days, no moisture or frost on rafters in winter, no musty smells or mold, insulation appears dry and fluffy, shingles aren\'t buckling or deteriorating prematurely. If your attic exceeds 120°F on summer days, ventilation is inadequate. Use an infrared thermometer for accurate measurements.'
  },
  {
    question: 'What are attic baffles and do I need them?',
    answer: 'Attic baffles (also called rafter vents or insulation baffles) are foam or plastic channels installed between rafters to maintain an airflow path from soffit to ridge. They prevent insulation from blocking soffit vents while creating a clear ventilation channel. If you have soffit vents and attic insulation, baffles are essential—without them, insulation blocks intake vents, rendering ventilation ineffective.'
  }
];

const relatedServices = [
  {
    title: 'Roof Ventilation Installation',
    href: '/services/roof-ventilation',
    description: 'Professional ventilation system installation and upgrades'
  },
  {
    title: 'Roof Inspection',
    href: '/free-inspection',
    description: 'Free ventilation assessment included in roof inspection'
  },
  {
    title: 'Attic Insulation',
    href: '/services/attic-insulation',
    description: 'Proper insulation and ventilation work together'
  },
  {
    title: 'Roof Repair',
    href: '/services/roof-repair',
    description: 'Fix ventilation-related roof damage'
  }
];

export default function RoofVentilationPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Complete Roof Ventilation Guide + CFM Calculator',
    description: 'Comprehensive guide to roof and attic ventilation including types of vents, installation instructions, ventilation calculator, and troubleshooting tips.',
    image: 'https://weathershieldroofers.com/images/guides/roof-ventilation.jpg',
    datePublished: '2025-01-15',
    author: { '@type': 'Organization', 'name': 'Weather Shield Roofing' }
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Calculate Roof Ventilation Requirements',
    description: 'Step-by-step guide to calculating proper attic ventilation needs',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Measure Attic Square Footage',
        text: 'Calculate attic square footage by measuring length × width of your home\'s footprint. This typically equals your home\'s square footage.'
      },
      {
        '@type': 'HowToStep',
        name: 'Calculate Required CFM',
        text: 'Multiply attic square footage by 1 to get required CFM. Example: 1,500 sq ft attic needs 1,500 CFM.'
      },
      {
        '@type': 'HowToStep',
        name: 'Determine Number of Vents',
        text: 'Divide required CFM by vent capacity (typically 50 CFM per vent). Install equal numbers of intake and exhaust vents.'
      },
      {
        '@type': 'HowToStep',
        name: 'Install Balanced System',
        text: 'Ensure 50/50 split between intake (soffit) and exhaust (ridge/gable) ventilation for optimal airflow.'
      }
    ]
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
      title="Complete Roof Ventilation Guide + Calculator"
      description="Proper roof ventilation can extend your roof's life by 10+ years, reduce energy costs by 20%, and prevent costly moisture damage. This comprehensive guide covers ventilation science, calculation, types, installation, and troubleshooting."
      breadcrumbs={breadcrumbs}
      tableOfContents={tableOfContents}
      faqs={faqs}
      relatedServices={relatedServices}
      articleSchema={articleSchema}
      howToSchema={howToSchema}
      faqSchema={faqSchema}
    >
      {/* Overview */}
      <section id="overview" className="mb-12">
        <h2 className="text-3xl font-bold text-weather-black mb-6">
          Why Roof Ventilation Matters: The Science
        </h2>
        <p className="text-lg text-weather-dark mb-4">
          Roof ventilation is one of the most critical—yet most overlooked—components of your roofing system. Proper ventilation regulates attic temperature and moisture levels, directly impacting your roof's lifespan, energy efficiency, and indoor comfort.
        </p>
        <p className="text-lg text-weather-dark mb-4">
          Without adequate ventilation, your attic becomes a heat trap in summer (reaching 150-160°F) and a moisture trap in winter (causing condensation and mold). These extreme conditions accelerate shingle deterioration, rot roof decking, void manufacturer warranties, and significantly increase energy costs.
        </p>
        <div className="grid md:grid-cols-3 gap-6 my-8">
          <div className="bg-white rounded-xl p-6 border-2 border-weather-teal/30 text-center">
            <div className="text-4xl font-bold text-weather-teal mb-2">10-15</div>
            <p className="text-weather-dark">Years added to roof lifespan with proper ventilation</p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-weather-purple/30 text-center">
            <div className="text-4xl font-bold text-weather-purple mb-2">20%</div>
            <p className="text-weather-dark">Reduction in cooling costs with adequate ventilation</p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-weather-amber/30 text-center">
            <div className="text-4xl font-bold text-weather-amber mb-2">150°F</div>
            <p className="text-weather-dark">Attic temps without ventilation vs 110°F with ventilation</p>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-weather-black mb-4 mt-8">
          How Ventilation Works: The Stack Effect
        </h3>
        <p className="text-lg text-weather-dark mb-4">
          Effective ventilation uses natural convection—the stack effect. Cool air enters through soffit vents (intake) at the eaves, travels along the underside of the roof deck, absorbs heat and moisture, then rises and exits through ridge or gable vents (exhaust). This continuous cycle removes heat and humidity without requiring electricity.
        </p>
        <div className="bg-weather-teal/10 border-l-4 border-weather-teal p-6 rounded-r-lg">
          <p className="text-weather-dark font-semibold">
            <strong>Critical Balance:</strong> Ventilation systems must have balanced intake and exhaust (50/50 split). Too much exhaust without adequate intake creates negative pressure, pulling conditioned air from your home. Too much intake without exhaust won't remove hot air effectively.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="mb-12">
        <h2 className="text-3xl font-bold text-weather-black mb-6">
          Roof Ventilation Calculator
        </h2>
        <p className="text-lg text-weather-dark mb-6">
          Use our interactive calculator to determine your attic's ventilation requirements. Simply enter your attic square footage to get personalized recommendations.
        </p>
        <VentilationCalculator />
      </section>

      {/* Types Section */}
      <section id="types" className="mb-12">
        <h2 className="text-3xl font-bold text-weather-black mb-6">
          Types of Roof Ventilation
        </h2>
        <p className="text-lg text-weather-dark mb-6">
          Understanding different ventilation types helps you choose the optimal system for your home's architecture and climate.
        </p>

        <h3 className="text-2xl font-bold text-weather-black mb-4">Exhaust Ventilation</h3>
        <div className="space-y-4 mb-8">
          <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
            <h4 className="text-xl font-bold text-weather-teal mb-3">Ridge Vents (Best Choice)</h4>
            <p className="text-weather-dark mb-3">
              Continuous ventilation running along the roof peak. Allows hot air to escape naturally along entire ridge line. Virtually invisible, works with most roof styles, provides even airflow distribution.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-weather-black">Pros:</strong> Even coverage, invisible, passive, reliable
              </div>
              <div>
                <strong className="text-weather-black">Cost:</strong> $3-$7 per linear foot installed
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
            <h4 className="text-xl font-bold text-weather-dark mb-3">Box/Static Vents</h4>
            <p className="text-weather-dark mb-3">
              Individual square vents placed on roof surface, typically 12"×12" or larger. Good for roofs without ridge lines or as supplemental exhaust. Require multiple units for adequate ventilation.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-weather-black">Pros:</strong> Low cost, easy retrofit, no moving parts
              </div>
              <div>
                <strong className="text-weather-black">Cost:</strong> $25-$75 per vent installed
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
            <h4 className="text-xl font-bold text-weather-dark mb-3">Turbine Vents</h4>
            <p className="text-weather-dark mb-3">
              Wind-powered spinning vents that actively pull hot air from attic. Effective in windy areas but require regular maintenance. Visible on roof and can be noisy.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-weather-black">Pros:</strong> Active air movement, no electricity
              </div>
              <div>
                <strong className="text-weather-black">Cost:</strong> $50-$150 per vent installed
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
            <h4 className="text-xl font-bold text-weather-dark mb-3">Gable Vents</h4>
            <p className="text-weather-dark mb-3">
              Louvers installed in gable ends allowing cross-ventilation. Traditional solution, works well but less effective than ridge vents. Best for gable-roof homes without ridge vents.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-weather-black">Pros:</strong> Architectural detail, no roof penetrations
              </div>
              <div>
                <strong className="text-weather-black">Cost:</strong> $75-$300 per gable installed
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-weather-black mb-4 mt-8">Intake Ventilation</h3>
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
            <h4 className="text-xl font-bold text-weather-teal mb-3">Soffit Vents (Essential)</h4>
            <p className="text-weather-dark mb-3">
              Vents installed in soffits (roof overhangs) allowing cool air intake. Continuous soffit vents provide best performance. Must be paired with exhaust vents to create airflow. Never block with insulation—install baffles to maintain airflow channel.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-weather-black">Types:</strong> Continuous, individual, perforated panels
              </div>
              <div>
                <strong className="text-weather-black">Cost:</strong> $2-$5 per linear foot
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
            <h4 className="text-xl font-bold text-weather-dark mb-3">Drip Edge Vents</h4>
            <p className="text-weather-dark mb-3">
              Integrated intake ventilation built into drip edge flashing at roof edges. Good solution when soffit vents aren't possible due to minimal overhang. Provides intake air along entire roof perimeter.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-weather-black">Pros:</strong> Invisible, no soffit required
              </div>
              <div>
                <strong className="text-weather-black">Cost:</strong> $5-$10 per linear foot
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Balance Section */}
      <section id="balance" className="mb-12">
        <h2 className="text-3xl font-bold text-weather-black mb-6">
          Achieving Intake/Exhaust Balance
        </h2>
        <p className="text-lg text-weather-dark mb-6">
          The most critical aspect of effective ventilation is balance between intake and exhaust. Building codes and physics both require a 50/50 split.
        </p>
        <div className="bg-gradient-to-r from-blue-100 to-red-100 rounded-xl p-8 border-2 border-gray-300 mb-6">
          <h3 className="text-2xl font-bold text-weather-black mb-4 text-center">
            The Golden Rule: 50% Intake / 50% Exhaust
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-bold text-blue-700 mb-3 text-lg">Intake (Soffit Vents)</h4>
              <ul className="space-y-2 text-weather-dark text-sm">
                <li>✓ Must equal or exceed exhaust ventilation</li>
                <li>✓ Located at lowest point (eaves/soffits)</li>
                <li>✓ Continuous vents provide best performance</li>
                <li>✓ Requires attic baffles to prevent blockage</li>
                <li>✓ Never paint over or block vents</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h4 className="font-bold text-red-700 mb-3 text-lg">Exhaust (Ridge/Gable Vents)</h4>
              <ul className="space-y-2 text-weather-dark text-sm">
                <li>✓ Should match intake ventilation area</li>
                <li>✓ Located at highest point (ridge/gables)</li>
                <li>✓ Ridge vents provide most even airflow</li>
                <li>✓ Never mix powered fans with ridge vents</li>
                <li>✓ Ensure proper installation with weather protection</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-weather-black mb-4">
          Common Balance Problems & Solutions
        </h3>
        <div className="space-y-4">
          <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
            <h4 className="font-bold text-weather-black mb-2">Problem: Insufficient Intake</h4>
            <p className="text-weather-dark mb-2">
              <strong>Symptoms:</strong> Attic still hot despite exhaust vents, pulled insulation at eaves, negative pressure
            </p>
            <p className="text-weather-dark">
              <strong>Solution:</strong> Install continuous soffit vents, add drip edge vents, install attic baffles, clean blocked soffit vents
            </p>
          </div>

          <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
            <h4 className="font-bold text-weather-black mb-2">Problem: Insufficient Exhaust</h4>
            <p className="text-weather-dark mb-2">
              <strong>Symptoms:</strong> Hot stagnant air in attic, minimal airflow despite open soffits
            </p>
            <p className="text-weather-dark">
              <strong>Solution:</strong> Install ridge vent along full ridge line, add box vents to supplement, install gable vents if no ridge available
            </p>
          </div>

          <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
            <h4 className="font-bold text-weather-black mb-2">Problem: Blocked Vents</h4>
            <p className="text-weather-dark mb-2">
              <strong>Symptoms:</strong> Vents present but no airflow, insulation visible at soffit vents
            </p>
            <p className="text-weather-dark">
              <strong>Solution:</strong> Install attic baffles between rafters, pull back insulation 3" from soffit vents, remove bird nests/debris
            </p>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="installation" className="mb-12">
        <h2 className="text-3xl font-bold text-weather-black mb-6">
          Professional Installation Guide
        </h2>
        <p className="text-lg text-weather-dark mb-6">
          While DIY ventilation is possible, professional installation ensures proper balance, code compliance, and weather-tight performance. Here's what proper installation involves:
        </p>
        <div className="bg-weather-light rounded-xl p-8 border-2 border-gray-200">
          <h3 className="text-xl font-bold text-weather-black mb-6">
            Ridge Vent Installation Process
          </h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-weather-teal text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h4 className="font-bold text-weather-black mb-1">Cut Ridge Opening</h4>
                <p className="text-weather-dark">
                  Using a circular saw, cut 1-2" slot along both sides of ridge, leaving 6" at ends and avoiding rafters. Depth must reach through shingles and sheathing.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-weather-teal text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h4 className="font-bold text-weather-black mb-1">Install Ridge Vent</h4>
                <p className="text-weather-dark">
                  Center ridge vent over opening and secure with galvanized roofing nails every 12". Overlap sections by 6" following manufacturer instructions.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-weather-teal text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h4 className="font-bold text-weather-black mb-1">Cover and Seal</h4>
                <p className="text-weather-dark">
                  Cover ridge vent with ridge cap shingles, sealing with roofing cement. Ensure proper overlap to prevent water infiltration while maintaining airflow.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-weather-teal text-white rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h4 className="font-bold text-weather-black mb-1">Verify Airflow</h4>
                <p className="text-weather-dark">
                  Check that soffit intake vents are clear and balanced with ridge exhaust. Install attic baffles if insulation blocks airflow path.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" className="mb-12">
        <h2 className="text-3xl font-bold text-weather-black mb-6">
          Common Ventilation Problems & Fixes
        </h2>
        <div className="space-y-4">
          <div className="bg-white rounded-lg p-6 border-2 border-red-200">
            <h4 className="font-bold text-red-700 mb-2">Ice Dams (Winter)</h4>
            <p className="text-weather-dark mb-3">
              <strong>Cause:</strong> Warm attic air melts snow on roof, water refreezes at cold eaves forming dams
            </p>
            <p className="text-weather-dark">
              <strong>Fix:</strong> Improve attic ventilation, add soffit and ridge vents, seal attic floor air leaks, increase ceiling insulation to R-49
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-red-200">
            <h4 className="font-bold text-red-700 mb-2">Condensation & Mold</h4>
            <p className="text-weather-dark mb-3">
              <strong>Cause:</strong> Humid air in attic condenses on cold surfaces, creating mold growth and wood rot
            </p>
            <p className="text-weather-dark">
              <strong>Fix:</strong> Increase ventilation airflow, install vapor barrier, seal bathroom/kitchen exhaust leaks, run bathroom fans outside (not into attic)
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-red-200">
            <h4 className="font-bold text-red-700 mb-2">Premature Shingle Failure</h4>
            <p className="text-weather-dark mb-3">
              <strong>Cause:</strong> Excessive attic heat (150°F+) literally cooks shingles from underneath, causing premature aging
            </p>
            <p className="text-weather-dark">
              <strong>Fix:</strong> Install ridge venting system, ensure adequate soffit intake, add attic baffles, consider radiant barrier
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-weather-teal to-weather-purple text-white rounded-2xl p-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Need Professional Ventilation Assessment?
        </h2>
        <p className="text-xl mb-6 text-white/90 max-w-3xl mx-auto">
          Our free roof inspections include comprehensive attic ventilation assessment with infrared temperature readings and airflow measurements.
        </p>
        <a
          href="tel:+18438775539"
          className="inline-flex items-center gap-2 bg-white text-weather-teal font-bold px-8 py-4 rounded-lg hover:scale-105 transition-transform text-lg"
        >
          Call (843) 877-5539 for Free Ventilation Assessment
        </a>
      </div>
    </GuideTemplate>
  );
}
