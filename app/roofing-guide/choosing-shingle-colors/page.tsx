import type { Metadata } from 'next';
import GuideTemplate from '../../components/GuideTemplate';
import ColorGrid, { ShingleColor } from '../../components/ColorGrid';

export const metadata: Metadata = {
  title: 'Ultimate Guide to Choosing Shingle Colors for Your Roof | Weather Shield',
  description: 'Expert guide to selecting the perfect roof shingle color. Explore 15+ colors, energy efficiency tips, color psychology, and architectural style matching.',
  keywords: 'roof shingle colors, best roof colors, architectural shingles, roof color ideas, energy efficient roof colors, shingle color guide',
  alternates: {
    canonical: 'https://weathershieldroofers.com/roofing-guide/choosing-shingle-colors'
  },
  openGraph: {
    title: 'Ultimate Guide to Choosing Shingle Colors for Your Roof',
    description: 'Find the perfect roof color with our comprehensive shingle color guide',
    type: 'article',
    url: 'https://weathershieldroofers.com/roofing-guide/choosing-shingle-colors',
    images: [{
      url: 'https://weathershieldroofers.com/images/og/shingle-colors.jpg',
      width: 1200,
      height: 630,
      alt: 'Ultimate Shingle Color Selection Guide'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ultimate Guide to Choosing Shingle Colors for Your Roof',
    description: 'Explore 150+ shingle colors with expert guidance on matching your home style, climate considerations, and resale value.',
    images: ['https://weathershieldroofers.com/images/og/shingle-colors.jpg'],
  },
};

const breadcrumbs = [
  { label: 'Roofing Guides', href: '/roofing-guide' },
  { label: 'Choosing Shingle Colors', href: '/roofing-guide/choosing-shingle-colors' }
];

const tableOfContents = [
  { id: 'overview', title: 'Color Selection Fundamentals' },
  { id: 'color-grid', title: 'Browse Shingle Colors' },
  { id: 'psychology', title: 'Color Psychology' },
  { id: 'architectural-styles', title: 'Matching Architectural Styles' },
  { id: 'energy-efficiency', title: 'Energy Efficiency' },
  { id: 'trends', title: '2025 Color Trends' },
  { id: 'selection-tips', title: 'Expert Selection Tips' }
];

const shingleColors: ShingleColor[] = [
  // Traditional Colors
  {
    name: 'Charcoal Black',
    category: 'Traditional',
    hexCode: '#2F2F2F',
    description: 'Timeless elegance, works with any architectural style, hides dirt well',
    popularity: 'High',
    image: '/images/shingles/CharcolBlack.png'
  },
  {
    name: 'Weathered Wood',
    category: 'Traditional',
    hexCode: '#8B7355',
    description: 'Natural wood-shake appearance, warm and inviting, complements earth tones',
    popularity: 'High',
    image: '/images/shingles/Weathered Wood.png'
  },
  {
    name: 'Slate Gray',
    category: 'Traditional',
    hexCode: '#708090',
    description: 'Sophisticated neutral, pairs well with brick and stone',
    popularity: 'High',
    image: '/images/shingles/Slate Gray.png'
  },
  {
    name: 'Pewter Gray',
    category: 'Traditional',
    hexCode: '#91989F',
    description: 'Light gray with subtle undertones, brightens darker homes',
    popularity: 'Medium',
    image: '/images/shingles/Pewter Gray.png'
  },
  // Modern Colors
  {
    name: 'Mission Brown',
    category: 'Modern',
    hexCode: '#6B4423',
    description: 'Rich chocolate brown, Mediterranean-inspired, energy efficient',
    popularity: 'High',
    image: '/images/shingles/mission brown.png'
  },
  {
    name: 'Oyster Gray',
    category: 'Modern',
    hexCode: '#D3D3D3',
    description: 'Contemporary light gray, reflects heat, modern farmhouse favorite',
    popularity: 'High',
    image: '/images/shingles/Oyster Grey.png'
  },
  {
    name: 'Aged Bronze',
    category: 'Modern',
    hexCode: '#8C6D50',
    description: 'Warm metallic tones, unique character, trending in modern design',
    popularity: 'Medium',
    image: '/images/shingles/Aged Bronze.png'
  },
  {
    name: 'Steel Blue',
    category: 'Modern',
    hexCode: '#4682B4',
    description: 'Bold contemporary choice, complements modern siding',
    popularity: 'Medium',
    image: '/images/shingles/Steel Blue.png'
  },
  // Coastal Colors
  {
    name: 'Driftwood',
    category: 'Coastal',
    hexCode: '#B8A490',
    description: 'Sandy beige-gray, perfect for beach homes, reflects sunlight',
    popularity: 'High',
    image: '/images/shingles/driftwood.png'
  },
  {
    name: 'Weathered Teal',
    category: 'Coastal',
    hexCode: '#4A7C7E',
    description: 'Ocean-inspired blue-green, unique coastal aesthetic',
    popularity: 'Medium',
    image: '/images/shingles/weathered teal.png'
  },
  {
    name: 'Sand Dune',
    category: 'Coastal',
    hexCode: '#C2B280',
    description: 'Soft tan, blends with coastal environments, energy efficient',
    popularity: 'Medium',
    image: '/images/shingles/driftwood.png'
  },
  // Premium Colors
  {
    name: 'Hunter Green',
    category: 'Premium',
    hexCode: '#355E3B',
    description: 'Luxury forest green, complements stone and brick, distinctive curb appeal',
    popularity: 'Low',
    image: '/images/shingles/Hunter Green.png'
  },
  {
    name: 'Copper Penny',
    category: 'Premium',
    hexCode: '#B87333',
    description: 'Metallic copper tones, premium architectural statement',
    popularity: 'Low',
    image: '/images/shingles/copper penny.png'
  },
  {
    name: 'Estate Gray',
    category: 'Premium',
    hexCode: '#555D50',
    description: 'Deep sophisticated gray, high-end appearance, luxury homes',
    popularity: 'Medium',
    image: '/images/shingles/Estate Gray.png'
  },
  {
    name: 'Aged Redwood',
    category: 'Premium',
    hexCode: '#A0522D',
    description: 'Rich reddish-brown, rustic elegance, natural wood aesthetic',
    popularity: 'Medium',
    image: '/images/shingles/Aged Redwood.png'
  }
];

const faqs = [
  {
    question: 'What is the most popular roof shingle color?',
    answer: 'Charcoal black and weathered wood are consistently the most popular shingle colors, accounting for over 40% of installations. They offer timeless appeal, work with virtually any architectural style, and maintain their appearance well over time. Gray tones are also increasingly popular for their versatility and modern aesthetic.'
  },
  {
    question: 'Do dark roof colors make my house hotter?',
    answer: 'Yes, dark-colored roofs absorb more solar heat than light-colored roofs, potentially increasing cooling costs by 10-15% in hot climates. However, modern "cool roof" shingles with reflective granules can significantly reduce heat absorption even in dark colors. Consider light-colored or cool roof technology in hot, sunny climates.'
  },
  {
    question: 'How do I choose a roof color that matches my house?',
    answer: 'Consider your home\'s fixed elements: brick color, siding, stone accents, and trim. The roof should complement—not match—these elements. Use the 60-30-10 design rule: dominant color (siding) 60%, secondary (roof/accents) 30%, accent (trim) 10%. Request physical shingle samples to view against your home in different lighting conditions.'
  },
  {
    question: 'Will my roof color fade over time?',
    answer: 'All shingles fade somewhat due to UV exposure, typically becoming 1-2 shades lighter over 10-15 years. Quality architectural shingles with ceramic-coated granules resist fading better. Dark colors show more noticeable fading than medium tones. GAF Timberline HDZ shingles feature StainGuard Plus technology for superior color retention.'
  },
  {
    question: 'Can I see shingle samples on my house before deciding?',
    answer: 'Absolutely! We strongly recommend viewing physical samples on your roof in different lighting conditions (morning, noon, evening). Many manufacturers offer color visualization tools online. Weather Shield Roofing provides free sample boards of our most popular GAF shingle colors for you to take home and compare.'
  },
  {
    question: 'Do HOA restrictions limit my color choices?',
    answer: 'Many HOAs have approved color palettes for roofing. Check your HOA guidelines before selecting colors—some communities require approval for roof replacements. We can help navigate HOA requirements and often stock pre-approved colors for local communities. Always get written approval before starting work.'
  },
  {
    question: 'Are light-colored roofs better for energy savings?',
    answer: 'In hot climates, light-colored roofs can reduce cooling costs by 10-20% by reflecting more sunlight. However, in cold climates, dark roofs help melt snow and reduce ice dams. The Department of Energy recommends light colors in southern states and darker colors in northern regions. "Cool roof" technology offers heat reflection in any color.'
  },
  {
    question: 'What roof colors increase home value?',
    answer: 'Neutral colors (grays, blacks, browns) typically offer the best ROI because they appeal to the broadest buyer demographic. Bold colors may limit buyer interest. However, architecturally appropriate colors that enhance curb appeal can increase home value by 3-5%. Consider resale value if you plan to sell within 10 years.'
  },
  {
    question: 'How much does color affect shingle price?',
    answer: 'Standard colors (blacks, grays, browns) are typically the same price. Premium or specialty colors may cost 5-15% more due to special granule manufacturing. Designer shingles with multiple color blends cost 20-40% more than standard architectural shingles. Energy Star-rated "cool" colors may qualify for tax credits offsetting the price difference.'
  },
  {
    question: 'What are the trending roof colors for 2025?',
    answer: 'Top trends for 2025 include: weathered wood tones for modern farmhouse styles, cool gray tones for contemporary homes, and earth tones (terracotta, bronze) for Mediterranean and southwestern architecture. Two-tone and blended shingles creating dimensional appearance are increasingly popular, replacing solid colors.'
  }
];

const relatedServices = [
  {
    title: 'Roof Replacement',
    href: '/services/roof-replacement',
    description: 'Complete roof replacement with your choice of premium shingle colors'
  },
  {
    title: 'Free Roof Inspection',
    href: '/free-inspection',
    description: 'Get expert advice on color selection during your free roof inspection'
  },
  {
    title: 'GAF Shingles',
    href: '/services/gaf-shingles',
    description: 'Explore GAF Timberline HDZ shingles in 20+ colors'
  },
  {
    title: 'Roof Cost Calculator',
    href: '/pricing',
    description: 'Estimate your roof replacement cost with different shingle options'
  }
];

export default function ChoosingShingleColorsPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Ultimate Guide to Choosing Shingle Colors for Your Roof',
    description: 'Comprehensive guide to selecting the perfect roof shingle color including color psychology, energy efficiency, architectural style matching, and 2025 trends.',
    image: 'https://weathershieldroofers.com/images/guides/shingle-color-guide.jpg',
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
      title="Ultimate Guide to Choosing Shingle Colors"
      description="Your roof color dramatically impacts your home's curb appeal, energy efficiency, and resale value. This comprehensive guide helps you select the perfect shingle color that complements your architecture, climate, and personal style."
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
          Color Selection Fundamentals
        </h2>
        <p className="text-lg text-weather-dark mb-4">
          Choosing your roof color is one of the most impactful design decisions you'll make for
          your home. The right color enhances architectural features, complements your
          landscaping, and can even reduce energy costs. With roofs lasting 25-30 years, this
          decision deserves careful consideration.
        </p>
        <p className="text-lg text-weather-dark mb-4">
          Unlike interior paint that can be changed easily, your roof color is a long-term
          commitment. Consider not just current trends, but timeless appeal, neighborhood
          aesthetics, HOA requirements, climate factors, and future resale implications.
        </p>
        <div className="bg-weather-teal/10 border-l-4 border-weather-teal p-6 rounded-r-lg my-6">
          <p className="text-weather-dark font-semibold">
            <strong>Professional Tip:</strong> View shingle samples on your actual roof in
            different lighting conditions—morning, midday, and evening. Colors appear
            dramatically different on small samples versus large roof planes.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white rounded-lg p-6 border-2 border-gray-200 text-center">
            <div className="text-4xl font-bold text-weather-teal mb-2">40%</div>
            <p className="text-weather-dark">
              Of homebuyers consider roof condition and appearance a major factor
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-gray-200 text-center">
            <div className="text-4xl font-bold text-weather-purple mb-2">15-20%</div>
            <p className="text-weather-dark">
              Potential energy cost savings with cool roof technology in hot climates
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 border-2 border-gray-200 text-center">
            <div className="text-4xl font-bold text-weather-amber mb-2">25-30</div>
            <p className="text-weather-dark">
              Years your color choice will be visible—choose wisely
            </p>
          </div>
        </div>
      </section>

      {/* Color Grid Section */}
      <section id="color-grid" className="mb-12">
        <h2 className="text-3xl font-bold text-weather-black mb-6">
          Browse Our Most Popular Shingle Colors
        </h2>
        <p className="text-lg text-weather-dark mb-6">
          Explore our curated selection of GAF Timberline HDZ shingle colors organized by style
          category. Filter by Traditional, Modern, Coastal, or Premium to find colors that match
          your vision.
        </p>
        <ColorGrid colors={shingleColors} columns={4} />
      </section>

      {/* Color Psychology Section */}
      <section id="psychology" className="mb-12">
        <h2 className="text-3xl font-bold text-weather-black mb-6">
          Color Psychology: What Your Roof Color Says
        </h2>
        <p className="text-lg text-weather-dark mb-6">
          Color psychology influences how people perceive your home. Understanding the emotional
          and practical associations with different colors helps you make an informed decision.
        </p>
        <div className="space-y-4">
          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-lg bg-gray-800 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-weather-black mb-2">Black & Charcoal</h3>
                <p className="text-weather-dark">
                  <strong>Psychology:</strong> Sophistication, timeless elegance, formality.
                  <br />
                  <strong>Best For:</strong> Colonial, traditional, and contemporary homes.
                  <br />
                  <strong>Considerations:</strong> Absorbs heat (hotter attics), shows fading
                  over time, universal appeal for resale.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-lg bg-gray-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-weather-black mb-2">Gray Tones</h3>
                <p className="text-weather-dark">
                  <strong>Psychology:</strong> Modern, neutral, sophisticated, calm.
                  <br />
                  <strong>Best For:</strong> Modern farmhouse, contemporary, transitional
                  styles.
                  <br />
                  <strong>Considerations:</strong> Highly versatile, complements most exteriors,
                  trending in 2025, good heat reflection.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-lg bg-amber-800 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-weather-black mb-2">Brown & Earth Tones</h3>
                <p className="text-weather-dark">
                  <strong>Psychology:</strong> Warmth, natural, organic, stability.
                  <br />
                  <strong>Best For:</strong> Craftsman, ranch, Mediterranean, rustic styles.
                  <br />
                  <strong>Considerations:</strong> Complements brick and stone, hides dirt well,
                  warm appearance year-round.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-lg bg-green-800 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-weather-black mb-2">Green Tones</h3>
                <p className="text-weather-dark">
                  <strong>Psychology:</strong> Natural, harmonious, unique, eco-conscious.
                  <br />
                  <strong>Best For:</strong> Homes in wooded settings, craftsman, cottage styles.
                  <br />
                  <strong>Considerations:</strong> Blends with landscape, distinctive choice,
                  limited resale appeal.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-lg bg-blue-700 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-weather-black mb-2">Blue Tones</h3>
                <p className="text-weather-dark">
                  <strong>Psychology:</strong> Calm, coastal, contemporary, bold statement.
                  <br />
                  <strong>Best For:</strong> Beach homes, modern architecture, Victorian styles.
                  <br />
                  <strong>Considerations:</strong> Unique aesthetic, regional appeal (coastal),
                  complement carefully with siding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural Styles Section */}
      <section id="architectural-styles" className="mb-12">
        <h2 className="text-3xl font-bold text-weather-black mb-6">
          Matching Colors to Architectural Styles
        </h2>
        <p className="text-lg text-weather-dark mb-6">
          Certain roof colors naturally complement specific architectural styles. While personal
          preference is important, these pairings enhance your home's authentic character.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-weather-light rounded-xl p-6 border-2 border-gray-200">
            <h3 className="text-xl font-bold text-weather-black mb-4">Traditional Styles</h3>
            <div className="space-y-3">
              <div>
                <strong className="text-weather-dark">Colonial:</strong> Charcoal, slate gray,
                weathered wood
              </div>
              <div>
                <strong className="text-weather-dark">Cape Cod:</strong> Gray tones, driftwood,
                black
              </div>
              <div>
                <strong className="text-weather-dark">Victorian:</strong> Darker greens, grays,
                black, slate
              </div>
              <div>
                <strong className="text-weather-dark">Craftsman:</strong> Weathered wood, brown
                tones, green
              </div>
            </div>
          </div>

          <div className="bg-weather-light rounded-xl p-6 border-2 border-gray-200">
            <h3 className="text-xl font-bold text-weather-black mb-4">Contemporary Styles</h3>
            <div className="space-y-3">
              <div>
                <strong className="text-weather-dark">Modern Farmhouse:</strong> Light gray,
                charcoal, pewter
              </div>
              <div>
                <strong className="text-weather-dark">Contemporary:</strong> Slate gray, steel
                blue, black
              </div>
              <div>
                <strong className="text-weather-dark">Mediterranean:</strong> Terracotta, mission
                brown, clay
              </div>
              <div>
                <strong className="text-weather-dark">Ranch:</strong> Weathered wood, brown
                tones, tan
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Energy Efficiency Section */}
      <section id="energy-efficiency" className="mb-12">
        <h2 className="text-3xl font-bold text-weather-black mb-6">
          Energy Efficiency: How Color Affects Your Bills
        </h2>
        <p className="text-lg text-weather-dark mb-6">
          Roof color significantly impacts your home's energy efficiency. Understanding the
          thermal properties of different colors helps you make climate-appropriate choices.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
            <h3 className="text-xl font-bold text-weather-black mb-4">
              Best Colors for Hot Climates
            </h3>
            <p className="text-weather-dark mb-4">
              In southern states with hot summers, light-colored or "cool roof" shingles can
              reduce attic temperatures by 20-40°F and cooling costs by 10-20%.
            </p>
            <ul className="space-y-2 text-weather-dark">
              <li>✓ Light gray or white (best reflection)</li>
              <li>✓ Tan, beige, or sand tones</li>
              <li>✓ Cool-rated dark colors with reflective granules</li>
              <li>✓ Energy Star certified shingles</li>
            </ul>
          </div>

          <div className="bg-red-50 rounded-xl p-6 border-2 border-red-200">
            <h3 className="text-xl font-bold text-weather-black mb-4">
              Best Colors for Cold Climates
            </h3>
            <p className="text-weather-dark mb-4">
              In northern states, dark-colored roofs absorb solar heat, helping melt snow, reduce
              ice dams, and provide passive heating benefits.
            </p>
            <ul className="space-y-2 text-weather-dark">
              <li>✓ Black or charcoal (best absorption)</li>
              <li>✓ Dark brown or weathered wood</li>
              <li>✓ Dark gray or slate</li>
              <li>✓ Medium tones for balanced performance</li>
            </ul>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl p-8 border-2 border-green-300">
          <h3 className="text-2xl font-bold text-weather-black mb-4">
            Cool Roof Technology: Best of Both Worlds
          </h3>
          <p className="text-weather-dark mb-4">
            Modern "cool roof" shingles use specially coated granules to reflect infrared
            radiation while maintaining your desired color. This technology allows dark-colored
            roofs to perform more like light-colored ones.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-weather-teal mb-1">25%</div>
              <p className="text-sm text-weather-dark">Heat reduction vs standard dark shingles</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-weather-purple mb-1">$500+</div>
              <p className="text-sm text-weather-dark">Potential annual cooling savings</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-weather-amber mb-1">30%</div>
              <p className="text-sm text-weather-dark">Federal tax credit available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trends Section */}
      <section id="trends" className="mb-12">
        <h2 className="text-3xl font-bold text-weather-black mb-6">
          2025 Roof Color Trends
        </h2>
        <p className="text-lg text-weather-dark mb-6">
          Roof color trends reflect broader design movements toward natural materials, energy
          efficiency, and timeless aesthetics that resist dating.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border-2 border-weather-teal/30 shadow-md">
            <h4 className="font-bold text-weather-black mb-3 text-lg">
              🔥 #1: Multi-Tonal Blends
            </h4>
            <p className="text-weather-dark">
              Shingles with multiple color variations create dimensional appearance, adding depth
              and visual interest. Replaces solid flat colors.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-weather-teal/30 shadow-md">
            <h4 className="font-bold text-weather-black mb-3 text-lg">
              📈 #2: Cool Grays
            </h4>
            <p className="text-weather-dark">
              Light to medium gray tones dominate modern farmhouse and contemporary styles.
              Versatile, timeless, and energy-efficient.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-weather-teal/30 shadow-md">
            <h4 className="font-bold text-weather-black mb-3 text-lg">
              🌳 #3: Natural Wood Tones
            </h4>
            <p className="text-weather-dark">
              Weathered wood and aged cedar shingles satisfy desire for organic, authentic
              materials without wood maintenance.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-weather-purple/30 shadow-md">
            <h4 className="font-bold text-weather-black mb-3 text-lg">
              ☀️ #4: Energy Star Colors
            </h4>
            <p className="text-weather-dark">
              Growing demand for cool roof technology in all color families as homeowners
              prioritize sustainability and energy savings.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-weather-purple/30 shadow-md">
            <h4 className="font-bold text-weather-black mb-3 text-lg">
              🎨 #5: Metallics
            </h4>
            <p className="text-weather-dark">
              Copper, bronze, and aged metallic tones add premium character to luxury homes,
              trending in high-end neighborhoods.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 border-2 border-weather-purple/30 shadow-md">
            <h4 className="font-bold text-weather-black mb-3 text-lg">
              🏖️ #6: Coastal Neutrals
            </h4>
            <p className="text-weather-dark">
              Driftwood, sand, and weathered teal gain popularity in coastal and lakefront
              properties, blending with natural surroundings.
            </p>
          </div>
        </div>
      </section>

      {/* Selection Tips Section */}
      <section id="selection-tips" className="mb-12">
        <h2 className="text-3xl font-bold text-weather-black mb-6">
          Expert Selection Tips: Making the Final Decision
        </h2>
        <p className="text-lg text-weather-dark mb-6">
          After narrowing your choices, use these professional strategies to make a confident
          final decision.
        </p>
        <div className="space-y-6">
          <div className="bg-weather-light rounded-xl p-6 border-l-4 border-weather-teal">
            <h4 className="font-bold text-weather-black mb-3">
              1. Order Physical Samples (Essential!)
            </h4>
            <p className="text-weather-dark">
              Never select color from screens alone. Request full-size shingle samples from your
              contractor. Place them on your roof in different areas and view throughout the day.
              Colors change dramatically in different lighting.
            </p>
          </div>

          <div className="bg-weather-light rounded-xl p-6 border-l-4 border-weather-purple">
            <h4 className="font-bold text-weather-black mb-3">
              2. Consider Fixed Elements First
            </h4>
            <p className="text-weather-dark">
              Your roof must work with permanent features: brick color, stone accents,
              neighborhood aesthetic. List all fixed elements before choosing. The roof should
              complement—not compete with—these elements.
            </p>
          </div>

          <div className="bg-weather-light rounded-xl p-6 border-l-4 border-weather-amber">
            <h4 className="font-bold text-weather-black mb-3">
              3. Drive Your Neighborhood
            </h4>
            <p className="text-weather-dark">
              Notice which roof colors stand out positively vs negatively. Look for homes similar
              to yours. Take photos of colors you like. This real-world research is invaluable.
            </p>
          </div>

          <div className="bg-weather-light rounded-xl p-6 border-l-4 border-weather-teal">
            <h4 className="font-bold text-weather-black mb-3">
              4. Use Digital Visualization Tools
            </h4>
            <p className="text-weather-dark">
              Many manufacturers offer color visualization software. Upload your home's photo and
              "try on" different colors. While not 100% accurate, this helps eliminate unlikely
              choices quickly.
            </p>
          </div>

          <div className="bg-weather-light rounded-xl p-6 border-l-4 border-weather-purple">
            <h4 className="font-bold text-weather-black mb-3">
              5. Think Long-Term
            </h4>
            <p className="text-weather-dark">
              Trendy colors may date your home. Neutral tones offer broader appeal for resale.
              Remember, you'll see this color daily for 25-30 years. When in doubt, choose
              timeless over trendy.
            </p>
          </div>

          <div className="bg-weather-light rounded-xl p-6 border-l-4 border-weather-amber">
            <h4 className="font-bold text-weather-black mb-3">
              6. Check HOA Requirements
            </h4>
            <p className="text-weather-dark">
              If you have an HOA, get approved colors in writing before selecting. Many HOAs have
              pre-approved palettes. Avoid costly mistakes by confirming requirements early.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-weather-teal to-weather-purple text-white rounded-2xl p-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Choose Your Perfect Roof Color?
        </h2>
        <p className="text-xl mb-6 text-white/90 max-w-3xl mx-auto">
          Weather Shield Roofing offers free in-home color consultations with physical samples.
          We'll help you select a color that enhances your home's beauty, fits your climate, and
          stays within your budget.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:+18438775539"
            className="inline-flex items-center gap-2 bg-white text-weather-teal font-bold px-8 py-4 rounded-lg hover:scale-105 transition-transform text-lg"
          >
            Call (843) 877-5539 for Free Consultation
          </a>
          <a
            href="/quote"
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white hover:text-weather-purple transition-all"
          >
            Request Free Color Samples
          </a>
        </div>
      </div>
    </GuideTemplate>
  );
}
