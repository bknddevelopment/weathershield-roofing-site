import type { Metadata } from 'next'
import ServiceTemplate from '../../components/ServiceTemplate'
import {
  CloudRain,
  Wind,
  Sun,
  Snowflake,
  Shield,
  AlertTriangle,
  Umbrella,
  Zap,
  ThermometerSun,
  CloudLightning,
  Home,
  CheckCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Weather Protection Roofing Services | Weather Shield Roofing | Myrtle Beach Weather',
  description: 'Expert weather protection roofing services in Myrtle Beach. Storm damage prevention, weather-resistant materials, and emergency response for all weather conditions.',
  keywords: 'weather myrtle beach, weather in myrtle beach, weather shield roofing, storm protection services, weather resistant roofing, hurricane roofing, storm damage prevention, emergency weather response, seasonal roofing, Myrtle Beach weather patterns',
  openGraph: {
    title: 'Weather Protection Services | Weather Shield Roofing Myrtle Beach',
    description: 'Protect your home from Myrtle Beach weather with expert roofing services. Storm protection, weather-resistant materials, and 24/7 emergency response.',
    type: 'website',
  }
}

const weatherProtectionData = {
  title: 'Weather Protection Services',
  description: 'Complete weather protection for your roof against Myrtle Beach\'s unique climate challenges. From hurricanes to heat waves, we\'ve got you covered year-round.',
  longDescription: [
    'Living in Myrtle Beach means experiencing diverse weather conditions throughout the year - from hurricane season\'s powerful storms to intense summer heat and humidity. Weather Shield Roofing specializes in comprehensive weather protection services designed specifically for the unique challenges of coastal South Carolina weather.',
    'Our weather protection expertise comes from over 15 years of protecting homes throughout Myrtle Beach and the Grand Strand. We understand how weather in Myrtle Beach can impact your roof, from salt air corrosion to wind damage from tropical storms. Our proactive approach helps homeowners prevent weather-related damage before it occurs, saving thousands in potential repairs.',
    'As the trusted Weather Shield roofing experts in the area, we combine advanced materials, proven installation techniques, and rapid emergency response to ensure your home stays protected no matter what Mother Nature brings. Our comprehensive weather protection services include storm damage prevention, seasonal maintenance, emergency repairs, and installation of weather-resistant roofing systems designed to withstand the harshest conditions.',
    'Don\'t wait for the next storm to test your roof\'s defenses. Our weather protection assessment identifies vulnerabilities and provides solutions tailored to Myrtle Beach weather patterns, ensuring your home remains safe, dry, and comfortable throughout every season.'
  ],
  benefits: [
    '24/7 emergency weather response team',
    'Hurricane and storm damage prevention',
    'Weather-resistant material installation',
    'Seasonal roofing maintenance programs',
    'Free weather vulnerability assessments',
    'Insurance claim assistance for weather damage',
    'Proactive weatherproofing solutions',
    'Local Myrtle Beach weather expertise',
    'Lifetime warranty on weather protection work',
    'Same-day emergency storm response'
  ],
  process: [
    {
      number: 1,
      title: 'Weather Risk Assessment',
      description: 'Comprehensive evaluation of your roof\'s current weather resistance and identification of vulnerabilities specific to Myrtle Beach weather patterns'
    },
    {
      number: 2,
      title: 'Custom Protection Plan',
      description: 'Develop a tailored weather protection strategy based on your roof type, age, and local weather risks'
    },
    {
      number: 3,
      title: 'Weatherproofing Implementation',
      description: 'Install weather-resistant materials, reinforce vulnerable areas, and apply protective treatments'
    },
    {
      number: 4,
      title: 'Seasonal Maintenance',
      description: 'Regular inspections and maintenance aligned with Myrtle Beach\'s weather seasons to ensure ongoing protection'
    },
    {
      number: 5,
      title: 'Emergency Response Ready',
      description: 'Establish priority emergency response status for immediate assistance during severe weather events'
    }
  ],
  features: [
    {
      icon: <CloudLightning className="w-8 h-8" />,
      title: 'Hurricane Protection',
      description: 'Specialized reinforcement and materials designed to withstand Category 5 hurricane winds'
    },
    {
      icon: <Umbrella className="w-8 h-8" />,
      title: 'Waterproofing Systems',
      description: 'Advanced waterproofing barriers and drainage systems for heavy rain protection'
    },
    {
      icon: <ThermometerSun className="w-8 h-8" />,
      title: 'Heat & UV Defense',
      description: 'Cool roof technology and UV-resistant materials for extreme summer heat protection'
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: 'Wind Resistance',
      description: 'Enhanced fastening systems and wind-rated materials for coastal wind conditions'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Impact Protection',
      description: 'Impact-resistant shingles and underlayment for hail and debris protection'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Lightning Safety',
      description: 'Lightning protection systems and grounding solutions for complete safety'
    }
  ],
  faqs: [
    {
      question: 'How does weather in Myrtle Beach affect my roof?',
      answer: 'Weather in Myrtle Beach presents unique challenges including hurricanes, tropical storms, intense UV exposure, salt air corrosion, and high humidity. These conditions can cause premature aging, wind damage, water infiltration, and material degradation. Our Weather Shield roofing systems are specifically designed to combat these local weather challenges with materials and techniques proven effective in coastal environments.'
    },
    {
      question: 'What makes Weather Shield Roofing the best choice for storm protection?',
      answer: 'Weather Shield Roofing combines local expertise with proven storm protection techniques. We use hurricane-rated materials, advanced installation methods, and maintain a 24/7 emergency response team. Our knowledge of Myrtle Beach weather patterns allows us to anticipate and prevent weather-related damage before it occurs. Plus, we offer comprehensive warranties and work directly with insurance companies for storm damage claims.'
    },
    {
      question: 'When is the best time to prepare my roof for hurricane season?',
      answer: 'The best time to prepare for hurricane season is April through May, before the season officially begins on June 1st. This allows time for thorough inspections, necessary repairs, and installation of weather protection upgrades. However, we recommend year-round maintenance as weather in Myrtle Beach can be unpredictable, and being proactive ensures your roof is always ready for severe weather.'
    },
    {
      question: 'What weather-resistant roofing materials do you recommend for Myrtle Beach?',
      answer: 'For Myrtle Beach weather conditions, we recommend impact-resistant architectural shingles rated for 130+ mph winds, synthetic underlayment with superior water resistance, corrosion-resistant fasteners and flashing, and sealed roof deck systems. Metal roofing is also excellent for weather protection. The specific materials depend on your home\'s architecture, budget, and aesthetic preferences.'
    },
    {
      question: 'Do you provide emergency services during storms?',
      answer: 'Yes! We maintain a 24/7 emergency response team specifically for weather-related roofing emergencies. During severe weather events, we provide immediate temporary protection to prevent further damage, and follow up with permanent repairs once conditions are safe. Our emergency hotline is always staffed, and we prioritize our weather protection program members for fastest response.'
    },
    {
      question: 'How can I tell if my roof has weather damage?',
      answer: 'Signs of weather damage include missing or lifted shingles, granules in gutters, water stains on ceilings, daylight visible through the roof, sagging areas, increased energy bills, and visible cracks or splits in roofing materials. After any severe weather event in Myrtle Beach, we recommend a professional inspection to identify hidden damage that could lead to bigger problems if left unaddressed.'
    },
    {
      question: 'What\'s included in your seasonal roofing maintenance program?',
      answer: 'Our seasonal maintenance program includes quarterly inspections aligned with Myrtle Beach weather patterns, gutter cleaning and maintenance, removal of debris and organic growth, resealing of vulnerable areas, minor repair work, detailed condition reports, priority emergency response status, and discounts on major repairs. This proactive approach extends your roof\'s life and prevents weather-related damage.'
    },
    {
      question: 'Will my insurance cover weather-related roof damage?',
      answer: 'Most homeowners insurance policies cover weather-related roof damage from events like hurricanes, hail, and wind storms. However, coverage depends on your specific policy, the age of your roof, and whether proper maintenance has been performed. We work directly with all major insurance companies, document damage thoroughly, and help you navigate the claims process to ensure you receive fair compensation for covered weather damage.'
    }
  ],
  priceRange: 'Contact us for pricing details',
  image: '/images/background/roof-replacement-services.jpg',
  relatedServices: [
    { name: 'Emergency Storm Response', href: '/services/emergency-roofing' },
    { name: 'Storm Damage Repair', href: '/services/storm-damage' },
    { name: 'Roof Inspections', href: '/services/roof-inspections' },
    { name: 'Preventive Maintenance', href: '/services/roof-maintenance' },
    { name: 'Complete Roof Replacement', href: '/services/residential-roofing' }
  ],
  emergencyService: true,
  responseTime: 'quickly for weather emergencies'
}

// Custom Weather Section Component
const WeatherSection = () => (
  <div className="bg-gradient-to-b from-sky-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-weather-dark">
        Understanding Weather in Myrtle Beach
      </h2>

      {/* Weather Statistics */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <CloudRain className="w-12 h-12 text-blue-500 mx-auto mb-3" />
          <h3 className="font-bold text-lg mb-2">Annual Rainfall</h3>
          <p className="text-3xl font-bold text-weather-teal mb-1">51.5"</p>
          <p className="text-sm text-gray-600">Above national average</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <Wind className="w-12 h-12 text-gray-500 mx-auto mb-3" />
          <h3 className="font-bold text-lg mb-2">Tropical Storms</h3>
          <p className="text-3xl font-bold text-weather-teal mb-1">2-3</p>
          <p className="text-sm text-gray-600">Average per year</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <ThermometerSun className="w-12 h-12 text-orange-500 mx-auto mb-3" />
          <h3 className="font-bold text-lg mb-2">Summer Highs</h3>
          <p className="text-3xl font-bold text-weather-teal mb-1">89°F</p>
          <p className="text-sm text-gray-600">With high humidity</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <CloudLightning className="w-12 h-12 text-purple-500 mx-auto mb-3" />
          <h3 className="font-bold text-lg mb-2">Hurricane Season</h3>
          <p className="text-3xl font-bold text-weather-teal mb-1">6 mo</p>
          <p className="text-sm text-gray-600">June - November</p>
        </div>
      </div>

      {/* Seasonal Guide */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold mb-8 text-weather-dark text-center">
          Your Seasonal Roofing Guide for Myrtle Beach Weather
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Spring */}
          <div className="border-l-4 border-green-500 pl-6">
            <div className="flex items-center gap-3 mb-3">
              <Sun className="w-6 h-6 text-green-500" />
              <h4 className="text-xl font-bold">Spring (March - May)</h4>
            </div>
            <p className="text-gray-700 mb-3">Prime time for roof maintenance and storm preparation.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-weather-teal mt-0.5 flex-shrink-0" />
                <span>Schedule annual roof inspection</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-weather-teal mt-0.5 flex-shrink-0" />
                <span>Clear gutters and downspouts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-weather-teal mt-0.5 flex-shrink-0" />
                <span>Check for winter damage</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-weather-teal mt-0.5 flex-shrink-0" />
                <span>Trim overhanging branches</span>
              </li>
            </ul>
          </div>

          {/* Summer */}
          <div className="border-l-4 border-yellow-500 pl-6">
            <div className="flex items-center gap-3 mb-3">
              <ThermometerSun className="w-6 h-6 text-yellow-500" />
              <h4 className="text-xl font-bold">Summer (June - August)</h4>
            </div>
            <p className="text-gray-700 mb-3">Hurricane season begins - stay vigilant and prepared.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-weather-teal mt-0.5 flex-shrink-0" />
                <span>Monitor weather forecasts regularly</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-weather-teal mt-0.5 flex-shrink-0" />
                <span>Ensure emergency repairs kit ready</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-weather-teal mt-0.5 flex-shrink-0" />
                <span>Check attic ventilation for heat</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-weather-teal mt-0.5 flex-shrink-0" />
                <span>Document roof condition for insurance</span>
              </li>
            </ul>
          </div>

          {/* Fall */}
          <div className="border-l-4 border-orange-500 pl-6">
            <div className="flex items-center gap-3 mb-3">
              <CloudRain className="w-6 h-6 text-orange-500" />
              <h4 className="text-xl font-bold">Fall (September - November)</h4>
            </div>
            <p className="text-gray-700 mb-3">Peak hurricane activity - maximum alertness required.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-weather-teal mt-0.5 flex-shrink-0" />
                <span>Post-storm inspections critical</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-weather-teal mt-0.5 flex-shrink-0" />
                <span>Remove leaves and debris regularly</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-weather-teal mt-0.5 flex-shrink-0" />
                <span>Check and reseal flashings</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-weather-teal mt-0.5 flex-shrink-0" />
                <span>Prepare for cooler weather</span>
              </li>
            </ul>
          </div>

          {/* Winter */}
          <div className="border-l-4 border-blue-500 pl-6">
            <div className="flex items-center gap-3 mb-3">
              <Snowflake className="w-6 h-6 text-blue-500" />
              <h4 className="text-xl font-bold">Winter (December - February)</h4>
            </div>
            <p className="text-gray-700 mb-3">Mild but wet - watch for moisture issues.</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-weather-teal mt-0.5 flex-shrink-0" />
                <span>Check for proper drainage</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-weather-teal mt-0.5 flex-shrink-0" />
                <span>Inspect for algae and moss growth</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-weather-teal mt-0.5 flex-shrink-0" />
                <span>Ensure proper attic insulation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-weather-teal mt-0.5 flex-shrink-0" />
                <span>Plan next year\'s maintenance</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Local Weather Patterns */}
      <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold mb-8 text-weather-dark text-center">
          Myrtle Beach Weather Patterns & Your Roof
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <CloudRain className="w-10 h-10 text-blue-600" />
            </div>
            <h4 className="font-bold mb-2">Coastal Storms</h4>
            <p className="text-sm text-gray-600">
              Frequent thunderstorms with heavy rain require superior drainage and waterproofing systems
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <ThermometerSun className="w-10 h-10 text-orange-600" />
            </div>
            <h4 className="font-bold mb-2">Extreme Heat</h4>
            <p className="text-sm text-gray-600">
              Summer temperatures and UV exposure demand heat-resistant materials and proper ventilation
            </p>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-full p-4 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <Wind className="w-10 h-10 text-gray-600" />
            </div>
            <h4 className="font-bold mb-2">Salt Air</h4>
            <p className="text-sm text-gray-600">
              Coastal salt air accelerates corrosion, requiring special fasteners and protective coatings
            </p>
          </div>
        </div>
      </div>

      {/* Weather Alert CTA */}
      <div className="mt-12 bg-gradient-to-r from-red-500 to-orange-500 text-white p-8 rounded-2xl shadow-xl">
        <div className="flex items-center justify-center gap-4 mb-4">
          <AlertTriangle className="w-8 h-8" />
          <h3 className="text-2xl font-bold">Storm Season Alert: Be Prepared!</h3>
          <AlertTriangle className="w-8 h-8" />
        </div>
        <p className="text-center text-lg mb-6 max-w-3xl mx-auto">
          Don't let Myrtle Beach weather catch you off guard. Our Weather Shield roofing experts are ready
          to protect your home with proven storm protection services and 24/7 emergency response.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+18438775539"
             className="bg-white text-red-500 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
            Call Emergency Line: (843) 877-5539
          </a>
          <a href="https://n8n.weathershieldroofers.com/webhook/weathershield-roofing-form-submissions"
             className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-red-500 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 text-center">
            Schedule Weather Protection Assessment
          </a>
        </div>
      </div>

      {/* Weather Damage Prevention Tips */}
      <div className="mt-12 bg-gradient-to-b from-gray-50 to-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold mb-8 text-weather-dark text-center">
          Protect Your Home from Myrtle Beach Weather
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-4 text-weather-teal">Storm Damage Prevention</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-weather-teal mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block">Regular Inspections</strong>
                  <span className="text-sm text-gray-600">Schedule bi-annual professional roof inspections</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-weather-teal mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block">Secure Loose Materials</strong>
                  <span className="text-sm text-gray-600">Fix loose shingles and flashing before storms</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-weather-teal mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block">Clear Debris</strong>
                  <span className="text-sm text-gray-600">Keep gutters and roof surface clear</span>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-weather-teal">Emergency Preparedness</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block">Emergency Kit</strong>
                  <span className="text-sm text-gray-600">Keep tarps and temporary repair materials ready</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block">Documentation</strong>
                  <span className="text-sm text-gray-600">Photo document your roof condition for insurance</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="block">Contact Info</strong>
                  <span className="text-sm text-gray-600">Save our emergency number: (843) 877-5539</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default function WeatherProtectionPage() {
  return (
    <>
      <ServiceTemplate {...weatherProtectionData} />
      {/* Insert Weather Section after the ServiceTemplate footer but within the page */}
      <WeatherSection />
    </>
  )
}