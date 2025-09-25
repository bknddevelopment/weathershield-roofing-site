'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CTASection from '../components/CTASection';
import { 
  ChevronDown, 
  Search, 
  Shield, 
  Home, 
  Building2, 
  AlertTriangle, 
  DollarSign, 
  Award,
  Phone,
  CheckCircle,
  Clock,
  MapPin,
  Mail,
  Star,
  Wrench,
  Umbrella,
  HelpCircle
} from 'lucide-react';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'residential' | 'commercial' | 'emergency' | 'pricing' | 'warranty';
}

const faqs: FAQ[] = [
  // General FAQs
  {
    id: '1',
    question: 'How much does roof replacement cost in Myrtle Beach?',
    answer: 'Roof replacement costs in Myrtle Beach typically range from $8,000 to $25,000 for an average home, depending on size, materials, and complexity. Asphalt shingle roofs cost $350-550 per square (100 sq ft), making them the most affordable option. Metal roofing runs $650-1,200 per square but lasts 40-70 years. Factors affecting cost include roof pitch, number of layers to remove, deck repairs, and permit fees. Weather Shield Roofing provides free detailed estimates with transparent pricing and offers financing options to make quality roofing affordable. Our weathershield roofing systems include comprehensive warranties that protect your investment.',
    category: 'general'
  },
  {
    id: '2',
    question: 'How often should I have my roof inspected in South Carolina?',
    answer: 'In Myrtle Beach\'s coastal climate, we recommend professional roof inspections twice yearly - in spring before hurricane season and fall after summer storms. Additionally, schedule inspections after any storm with winds over 40 mph, hail events, or if you notice interior water stains. Regular inspections help identify issues like lifted shingles, compromised flashing, or salt damage before they cause expensive damage. Weather Shield Roofing offers free inspections that include detailed reports with photos, helping you maintain your roof and validate insurance claims when needed.',
    category: 'general'
  },
  {
    id: '3',
    question: 'What are the best roofing materials for coastal homes in South Carolina?',
    answer: 'For Myrtle Beach\'s coastal environment, Weather Shield Roofing recommends impact-resistant architectural shingles with algae protection and 130+ mph wind ratings as the best value option. Metal roofing (aluminum or coated steel) provides superior 40-70 year longevity and excellent wind resistance but costs more initially. Concrete tiles offer exceptional hurricane resistance and 50+ year lifespan for homes with adequate structural support. All materials should feature enhanced UV protection, corrosion-resistant fasteners, and proper ventilation. Our storm shield roofing systems incorporate these materials with advanced installation techniques for maximum coastal protection.',
    category: 'general'
  },
  {
    id: '4',
    question: 'How often should I replace my roof in Myrtle Beach?',
    answer: 'Several indicators suggest it\'s time for a roof replacement: missing or curling shingles, granules in your gutters, daylight visible through roof boards, sagging areas, water stains on ceilings or walls, and a roof age exceeding 20-25 years. In coastal South Carolina, additional signs include salt damage, excessive moss or algae growth, and wind-lifted shingles. If you notice multiple issues or your energy bills have increased significantly, it\'s time for a professional assessment. Our team provides free inspections to determine whether repair or replacement is your best option.',
    category: 'general'
  },
  {
    id: '5',
    question: 'How long does a roof replacement take in Myrtle Beach?',
    answer: 'Most residential roof replacements in Myrtle Beach are completed in 1-3 days, depending on factors like roof size, complexity, weather conditions, and material choice. A typical single-family home with asphalt shingles usually takes 1-2 days. More complex projects involving multiple layers of old roofing, structural repairs, or premium materials like tile or metal may take 3-5 days. We always provide a detailed timeline during your consultation and work efficiently to minimize disruption to your daily routine while maintaining our high quality standards.',
    category: 'general'
  },
  // Residential FAQs
  {
    id: '6',
    question: 'Does homeowners insurance cover roof replacement in South Carolina?',
    answer: 'Insurance typically covers roof replacement when damage results from covered perils like hurricanes, wind storms, hail, fire, or falling trees. However, damage from normal wear and tear, lack of maintenance, or gradual deterioration is not covered. Most Myrtle Beach policies have separate wind/hail deductibles (2-5% of home value) due to coastal risks. Weather Shield Roofing works directly with insurance companies, documenting damage thoroughly and ensuring you receive fair compensation. We help navigate the claims process from initial inspection through final approval, maximizing your coverage for storm-related damage.',
    category: 'residential'
  },
  {
    id: '7',
    question: 'What roofing materials do you recommend for hurricane protection?',
    answer: 'For Myrtle Beach and coastal South Carolina, we recommend materials that withstand high winds, salt air, and intense UV exposure. Our top recommendations include: architectural asphalt shingles with high wind ratings (130+ mph), metal roofing for superior durability and wind resistance, and impact-resistant shingles for hail protection. Premium architectural shingles are particularly popular, offering excellent wind resistance and algae protection. We also recommend proper ventilation systems and salt-resistant fasteners to maximize your roof\'s lifespan in our coastal environment.',
    category: 'residential'
  },
  {
    id: '5',
    question: 'Do you work with insurance claims?',
    answer: 'Yes, we\'re experienced insurance claim specialists who work directly with all major insurance companies. We provide comprehensive documentation including detailed damage assessments, photos, and estimates that insurance adjusters need. Our team can meet with your adjuster during inspections, help navigate the claims process, and ensure you receive fair compensation for covered damages. We handle everything from initial inspection to final approval, making the process as stress-free as possible. We\'re also experienced with supplemental claims if additional damage is discovered during repairs.',
    category: 'residential'
  },
  {
    id: '6',
    question: 'How do I know if my gutters need replacement?',
    answer: 'Signs your gutters need replacement include: visible cracks or splits, peeling paint or rust, water pooling around your foundation, gutters pulling away from the house, sagging sections, and water damage marks beneath the gutters. In Myrtle Beach\'s climate, gutters typically last 15-20 years with proper maintenance. If you notice multiple issues or your gutters are nearing this age, replacement is often more cost-effective than repeated repairs. We offer seamless aluminum gutters with leaf guards to minimize maintenance and maximize protection.',
    category: 'residential'
  },
  // Commercial FAQs
  {
    id: '7',
    question: 'What\'s different about commercial roofing?',
    answer: 'Commercial roofing differs significantly from residential in materials, design, and installation methods. Commercial roofs are typically flat or low-slope, requiring specialized drainage systems and materials like TPO, EPDM, or modified bitumen. They must handle HVAC equipment, foot traffic, and larger surface areas. Commercial projects also involve different building codes, longer project timelines, and coordination with business operations to minimize disruption. Our commercial team is certified in all major commercial roofing systems and experienced with everything from retail stores to industrial facilities.',
    category: 'commercial'
  },
  {
    id: '8',
    question: 'Do you offer maintenance contracts for businesses?',
    answer: 'Yes, we offer comprehensive commercial roof maintenance programs tailored to your business needs. Our contracts include bi-annual inspections, priority emergency response, detailed condition reports, preventive maintenance, gutter cleaning, and minor repair coverage. Regular maintenance can extend your commercial roof\'s life by 30-50% and helps you budget for roofing expenses. We work around your business schedule, providing service during off-hours when needed. Many clients find our maintenance programs pay for themselves through prevented emergency repairs and extended roof life.',
    category: 'commercial'
  },
  // Emergency FAQs
  {
    id: '9',
    question: 'Do you offer emergency services?',
    answer: 'Yes, we provide 24/7 emergency roofing services throughout the Grand Strand area. Our emergency response team is always ready to handle storm damage, severe leaks, fallen trees, and other urgent roofing issues. We understand that roofing emergencies can\'t wait, especially during hurricane season. Our rapid response typically arrives within 2-4 hours to provide temporary protection and prevent further damage to your property. We carry tarps, emergency patches, and all necessary equipment to secure your home or business immediately.',
    category: 'emergency'
  },
  {
    id: '10',
    question: 'How quickly can you respond to storm damage?',
    answer: 'During normal conditions, we respond to emergency calls within 2-4 hours. After major storms, we prioritize responses based on severity, typically addressing active leaks and structural damage first. We maintain a large crew and emergency supply inventory to handle increased demand after hurricanes or severe weather. Even during peak times, we strive to provide temporary protection within 24 hours and schedule permanent repairs as quickly as possible. Our 24/7 hotline ensures you always reach a real person who can dispatch help immediately.',
    category: 'emergency'
  },
  {
    id: '11',
    question: 'What should I do if my roof is leaking during a storm?',
    answer: 'First, ensure your safety - avoid areas where water is pooling on ceilings as they may collapse. Place buckets or containers under leaks, move valuables away from affected areas, and use towels to contain water spread. If safe, cover furniture with plastic sheets. Take photos for insurance documentation. Never attempt roof repairs during a storm. Call our 24/7 emergency line at (843) 877-5539 immediately - we can talk you through temporary measures and dispatch help as soon as conditions permit. Document all damage thoroughly for insurance claims.',
    category: 'emergency'
  },
  // Additional People Also Ask FAQs
  {
    id: '16',
    question: 'When is the best time to replace a roof in Myrtle Beach?',
    answer: 'The ideal time for roof replacement in Myrtle Beach is late fall through early spring (November-April) when temperatures are moderate and hurricane season has passed. This period offers stable weather conditions, easier contractor scheduling, and potentially lower prices due to decreased demand. Spring installations allow proper sealing before summer heat and storm season. However, Weather Shield Roofing performs quality installations year-round, with special techniques for hot summer installations. Emergency replacements are available 24/7 regardless of season.',
    category: 'general'
  },
  {
    id: '17',
    question: 'How do I prepare my roof for hurricane season in South Carolina?',
    answer: 'Hurricane preparation should begin by May with a professional inspection to identify vulnerabilities. Essential steps include: clearing gutters and downspouts, trimming overhanging branches, securing loose shingles or flashing, checking attic ventilation, and documenting roof condition with photos. Consider upgrading to impact-resistant shingles and hurricane straps. Weather Shield Roofing offers comprehensive storm preparation services including inspections, preventive repairs, and storm shield upgrades. Our weathershield roofing systems are specifically designed to withstand coastal hurricanes, protecting your home when storms strike.',
    category: 'general'
  },
  {
    id: '18',
    question: 'What should I look for in a Myrtle Beach roofing contractor?',
    answer: 'Choose contractors with South Carolina licensing, comprehensive insurance (liability and workers\' comp), and local experience (5+ years minimum in Myrtle Beach). Look for manufacturer certifications like GAF Master Elite, BBB accreditation, strong online reviews, and detailed written estimates. Avoid door-to-door sales, unusually low bids, or pressure tactics. Weather Shield Roofing exceeds all standards with 15+ years local experience, full certification, hundreds of five-star reviews, and transparent pricing. We provide references, insurance documentation, and comprehensive warranties for your protection.',
    category: 'general'
  },
  {
    id: '19',
    question: 'Can a roof be replaced in winter in South Carolina?',
    answer: 'Yes, winter roof replacement in Myrtle Beach is often ideal due to mild temperatures (average highs 55-60°F) allowing year-round installation. Winter benefits include faster scheduling, potential off-season discounts, and completion before storm season. Modern materials and techniques work well in cool weather, with limitations only during rare freezing conditions or rain. Weather Shield Roofing monitors weather carefully, using specialized cold-weather adhesives when needed. Winter installations receive the same comprehensive warranties as any season.',
    category: 'general'
  },
  {
    id: '20',
    question: 'What is the lifespan of different roofing materials in coastal areas?',
    answer: 'In Myrtle Beach\'s coastal climate, roofing lifespans are shorter than national averages due to salt air, UV exposure, and storms. Asphalt shingles typically last 15-25 years (vs. 20-30 inland), metal roofing 40-70 years with proper maintenance, concrete tiles 50+ years, and TPO/EPDM commercial roofing 20-30 years. Weather Shield Roofing\'s storm shield systems and regular maintenance can extend these lifespans by 30-50%. Factors affecting longevity include material quality, installation expertise, ventilation, and maintenance frequency.',
    category: 'general'
  },
  // Pricing FAQs
  {
    id: '12',
    question: 'How much does roof repair cost in Myrtle Beach?',
    answer: 'Roof repair costs in Myrtle Beach vary by scope: minor repairs (few shingles, small leaks) $150-400, moderate repairs (flashing, larger sections) $400-1,000, major repairs (structural issues, extensive damage) $1,000-3,000, and emergency repairs add 25-50% premium. Factors affecting cost include damage extent, roof height/pitch, material type, and urgency. Weather Shield Roofing provides free inspections with detailed estimates. Many repairs are covered by insurance for storm damage. Regular maintenance prevents costly emergency repairs.',
    category: 'pricing'
  },
  {
    id: '13',
    question: 'Do you offer financing options?',
    answer: 'Yes, we offer flexible financing through multiple lending partners to make your roofing project affordable. Options include 0% interest for qualified buyers, terms from 12 to 144 months, no prepayment penalties, and quick approval process (often same-day). We work with all credit situations and can help you find a payment plan that fits your budget. Our financing covers both emergency repairs and planned replacements. The application process is simple, and our staff can help you understand all available options during your free consultation.',
    category: 'pricing'
  },
  // Warranty FAQs
  {
    id: '14',
    question: 'What warranties do you provide?',
    answer: 'We offer industry-leading warranty protection including: manufacturer warranties covering materials for up to 50 years and workmanship for 25 years, standard manufacturer warranties on all materials, our own 10-year workmanship warranty on all installations, and extended warranty options for additional coverage. Our warranties are fully transferable, adding value if you sell your home. As a certified contractor, we can offer comprehensive warranties for your peace of mind.',
    category: 'warranty'
  },
  {
    id: '15',
    question: 'Are you licensed and insured?',
    answer: 'Absolutely. WeatherShield Roofing is fully licensed by the state of South Carolina (License #RRG.23657), bonded, and carries comprehensive insurance including general liability and workers\' compensation for all employees. We\'re also BBB A+ rated, certified, and members of the National Roofing Contractors Association. We gladly provide proof of insurance and licensing for every project. This protection ensures you\'re never liable for accidents or damage during your project - your peace of mind is our priority.',
    category: 'warranty'
  }
];

const categories = [
  { id: 'all', label: 'All Questions', icon: <HelpCircle className="w-5 h-5" /> },
  { id: 'general', label: 'General', icon: <Shield className="w-5 h-5" /> },
  { id: 'residential', label: 'Residential', icon: <Home className="w-5 h-5" /> },
  { id: 'commercial', label: 'Commercial', icon: <Building2 className="w-5 h-5" /> },
  { id: 'emergency', label: 'Emergency', icon: <AlertTriangle className="w-5 h-5" /> },
  { id: 'pricing', label: 'Pricing', icon: <DollarSign className="w-5 h-5" /> },
  { id: 'warranty', label: 'Warranty', icon: <Award className="w-5 h-5" /> }
];

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-soft hover:shadow-elevation-2 transition-all duration-300 overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-weather-gray/20 transition-colors"
      >
        <h3 className="text-lg font-semibold text-weather-navy pr-4">{faq.question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-weather-amber" />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-5">
              <p className="text-weather-dark leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openItems, setOpenItems] = useState<string[]>([]);

  const filteredFAQs = useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const expandAll = () => {
    setOpenItems(filteredFAQs.map(faq => faq.id));
  };

  const collapseAll = () => {
    setOpenItems([]);
  };

  return (
    <>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-weather-navy via-weather-navy-dark to-weather-navy-dark py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/roof-pattern.jpg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-display text-5xl md:text-7xl text-white mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-weather-gray mb-8">
              Get answers to common roofing questions from Myrtle Beach's trusted experts
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-weather-navy/50 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for a question..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-weather-dark placeholder-weather-dark/50 shadow-lg focus:outline-none focus:ring-4 focus:ring-weather-amber/30"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About WeatherShield Section */}
      <section className="py-12 bg-weather-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg mx-auto"
            >
              <p className="text-weather-dark leading-relaxed mb-4">
                Welcome to WeatherShield Roofing, where quality meets reliability in every shingle we install. 
                As Myrtle Beach's premier roofing contractor, we've been protecting homes and businesses along 
                the Grand Strand since our founding. Our team of certified professionals brings decades of 
                combined experience to every project, ensuring your roof stands strong against coastal weather.
              </p>
              <p className="text-weather-dark leading-relaxed">
                As a certified contractor with years of experience and expertise - 
                we offer unmatched warranties and proven expertise. Whether you need emergency storm repairs, 
                routine maintenance, or a complete roof replacement, WeatherShield Roofing delivers exceptional 
                results backed by our commitment to customer satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="lg:flex lg:gap-8">
            {/* Sidebar - Categories (Desktop) */}
            <div className="hidden lg:block lg:w-64">
              <div className="sticky top-24">
                <h3 className="font-display text-2xl text-weather-navy mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        selectedCategory === category.id
                          ? 'bg-gradient-to-r from-weather-navy to-weather-navy-dark text-white shadow-lg'
                          : 'bg-weather-gray/30 text-weather-dark hover:bg-weather-gray/50'
                      }`}
                    >
                      <span className={selectedCategory === category.id ? 'text-weather-amber' : ''}>
                        {category.icon}
                      </span>
                      <span className="font-semibold">{category.label}</span>
                    </button>
                  ))}
                </div>
                
                {/* Quick Actions */}
                <div className="mt-8 space-y-2">
                  <button
                    onClick={expandAll}
                    className="w-full px-4 py-2 bg-weather-teal/10 text-weather-teal font-semibold rounded-lg hover:bg-weather-teal/20 transition-colors"
                  >
                    Expand All
                  </button>
                  <button
                    onClick={collapseAll}
                    className="w-full px-4 py-2 bg-weather-amber/10 text-weather-amber font-semibold rounded-lg hover:bg-weather-amber/20 transition-colors"
                  >
                    Collapse All
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Categories */}
            <div className="lg:hidden mb-8">
              <div className="flex overflow-x-auto gap-2 pb-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-weather-navy to-weather-navy-dark text-white shadow-lg'
                        : 'bg-weather-gray/30 text-weather-dark'
                    }`}
                  >
                    <span className={selectedCategory === category.id ? 'text-weather-amber' : ''}>
                      {category.icon}
                    </span>
                    <span className="text-sm font-semibold">{category.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ Items */}
            <div className="flex-1">
              {filteredFAQs.length > 0 ? (
                <div className="space-y-4">
                  {filteredFAQs.map((faq) => (
                    <FAQItem
                      key={faq.id}
                      faq={faq}
                      isOpen={openItems.includes(faq.id)}
                      onToggle={() => toggleItem(faq.id)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <HelpCircle className="w-16 h-16 text-weather-gray mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-weather-dark mb-2">No questions found</h3>
                  <p className="text-weather-dark/70">Try adjusting your search or category filter</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-16 bg-weather-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-5xl text-weather-navy mb-4">
              Why Choose WeatherShield?
            </h2>
            <p className="text-xl text-weather-dark max-w-3xl mx-auto">
              Certifications and accreditations that guarantee excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-elevation-2 text-center"
            >
              <div className="bg-gradient-to-br from-weather-amber to-weather-amber-dark w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-display text-2xl text-weather-navy mb-2">Certified Professional</h3>
              <p className="text-weather-dark">Professional certification for quality roofing installations</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6 shadow-elevation-2 text-center"
            >
              <div className="bg-gradient-to-br from-weather-teal to-weather-teal-dark w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-display text-2xl text-weather-navy mb-2">BBB A+ Rating</h3>
              <p className="text-weather-dark">Maintaining the highest standards of business integrity</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-elevation-2 text-center"
            >
              <div className="bg-gradient-to-br from-weather-navy to-weather-navy-dark w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-display text-2xl text-weather-navy mb-2">Fully Licensed & Insured</h3>
              <p className="text-weather-dark">Complete protection and peace of mind for every project</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-16 bg-gradient-to-r from-weather-danger to-weather-amber">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-elevation-4 p-8 md:p-12 text-center max-w-3xl mx-auto"
          >
            <AlertTriangle className="w-16 h-16 text-weather-danger mx-auto mb-4" />
            <h2 className="font-display text-4xl text-weather-navy mb-4">
              Need Emergency Roofing Service?
            </h2>
            <p className="text-xl text-weather-dark mb-8">
              Storm damage? Severe leak? Our emergency response team is available 24/7 to protect your property.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:+18438775539"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-weather-danger to-weather-amber text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                <span>Call Now: (843) 877-5539</span>
              </motion.a>
              
              <motion.a
                href="https://weathershieldroofiing.app.n8n.cloud/form/roofing-estimate"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-weather-navy text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us Online
              </motion.a>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center text-weather-dark">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-5 h-5 text-weather-amber" />
                <span>24/7 Emergency Service</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-weather-amber" />
                <span>Serving All of Myrtle Beach</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CTASection />
    </>
  );
}