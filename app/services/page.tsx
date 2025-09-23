import { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import { 
  Home, 
  Building2, 
  Droplets, 
  Package, 
  CloudRain, 
  Search, 
  AlertTriangle, 
  Wrench,
  CheckCircle,
  FileText,
  HardHat,
  Shield,
  Phone,
  Clock,
  DollarSign,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Roofing Services | Weather Shield Roofing - Top Roofing Companies Myrtle Beach | WeatherShield',
  description: 'Weather Shield Roofing - Leading roofing companies Myrtle Beach trusts. WeatherShield roofing services for weather protection. Expert roofing companies near me offering residential, commercial, storm damage & emergency services.',
  keywords: 'weather shield roofing, weathershield roofing, roofing companies myrtle beach, roofing companies near me, weather myrtle beach, weather in myrtle beach, roofing services, residential roofing, commercial roofing, storm damage repair, weather protection services',
  openGraph: {
    title: 'Weather Shield Roofing Services | Premier Roofing Companies Myrtle Beach',
    description: 'Weather Shield Roofing - Complete weatherproof solutions by top roofing companies Myrtle Beach. WeatherShield experts protect against weather in Myrtle Beach.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Weather Shield Roofing',
  },
};

const mainServices = [
  {
    icon: Home,
    title: 'Residential Roofing - Weather Shield',
    description: 'Weather Shield Roofing provides complete weatherproof solutions. Top roofing companies Myrtle Beach choose for weather protection.',
    features: ['Shingle Roofing', 'Tile Roofing', 'Metal Roofing', 'Flat Roofing'],
    link: '/services/residential'
  },
  {
    icon: Building2,
    title: 'Commercial WeatherShield Roofing',
    description: 'Weather Shield Roofing - Leading commercial roofing companies near me. Weatherproof protection for Myrtle Beach businesses.',
    features: ['TPO Systems', 'EPDM Roofing', 'Built-Up Roofing', 'Roof Coatings'],
    link: '/services/commercial'
  },
  {
    icon: Droplets,
    title: 'Weather Protection Gutter Services',
    description: 'Weather Shield Roofing gutter solutions protect against weather Myrtle Beach brings. Top roofing companies near me for water management.',
    features: ['Gutter Installation', 'Gutter Repair', 'Gutter Guards', 'Downspout Services'],
    link: '/services/gutters'
  },
  {
    icon: Package,
    title: 'WeatherShield Siding Installation',
    description: 'Weather Shield Roofing transforms exteriors with weatherproof siding. Leading roofing companies Myrtle Beach for complete weather protection.',
    features: ['Vinyl Siding', 'Fiber Cement', 'Wood Siding', 'Siding Repair'],
    link: '/services/siding'
  }
];

const additionalServices = [
  {
    icon: CloudRain,
    title: 'Weather & Storm Damage Repair',
    description: 'Weather Shield Roofing responds fast to weather damage. Top roofing companies near me for storm repairs in Myrtle Beach.',
  },
  {
    icon: Search,
    title: 'Roof Inspection',
    description: 'Comprehensive inspections to identify issues before they become major repairs.',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Repairs',
    description: '24/7 emergency service to protect your property when you need it most.',
  },
  {
    icon: Wrench,
    title: 'Roof Maintenance',
    description: 'Preventive maintenance programs to extend your roof\'s lifespan.',
  }
];

const processSteps = [
  {
    icon: Search,
    title: 'Inspection',
    description: 'Comprehensive roof inspection to assess your needs'
  },
  {
    icon: FileText,
    title: 'Quote',
    description: 'Detailed, transparent quotes with no hidden fees'
  },
  {
    icon: HardHat,
    title: 'Installation',
    description: 'Professional installation by certified roofing experts'
  },
  {
    icon: Shield,
    title: 'Warranty',
    description: 'Industry-leading warranties on materials and workmanship'
  }
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-weather-blue text-white py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 tracking-heading-tight text-shadow-hero">
                Weather Shield Roofing - Professional Services
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl opacity-90 mb-8 font-medium text-shadow-soft">
                Leading roofing companies Myrtle Beach trust for weather protection. WeatherShield roofing experts protect homes from weather in Myrtle Beach since 2010.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-weather-teal text-white font-black text-lg uppercase tracking-wide rounded-lg hover:bg-opacity-90 transition-all"
                >
                  Request Estimate
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="tel:843-877-5539"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-weather-blue font-black text-lg tracking-wide rounded-lg hover:bg-opacity-90 transition-all"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call (843) 877-5539
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 tracking-heading-tight">
                Weather Shield Roofing Core Services
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto font-medium">
                WeatherShield roofing - Leading roofing companies Myrtle Beach offering comprehensive weather protection solutions for all properties
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {mainServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-start mb-6">
                    <div className="bg-weather-teal/10 p-3 rounded-lg mr-4">
                      <service.icon className="h-8 w-8 text-weather-teal" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-4 font-medium">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <CheckCircle className="h-5 w-5 text-weather-teal mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <a
                        href={service.link}
                        className="inline-flex items-center text-weather-blue font-extrabold text-lg uppercase tracking-wide hover:text-weather-teal transition-colors"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Additional Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complete roofing solutions to handle any situation
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:border-weather-teal transition-colors">
                  <service.icon className="h-10 w-10 text-weather-teal mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Service Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Simple, transparent, and professional from start to finish
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-weather-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Services Highlight */}
        <section className="py-20 bg-weather-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <AlertTriangle className="h-16 w-16 mx-auto mb-6 text-weather-teal" />
              <h2 className="text-4xl font-bold mb-4">
                24/7 Weather Shield Emergency Services
              </h2>
              <p className="text-xl opacity-90 mb-8">
                When weather in Myrtle Beach strikes, Weather Shield Roofing responds. Leading roofing companies near me with 24/7 weatherproof emergency protection.
              </p>
              <div className="grid sm:grid-cols-3 gap-8 mb-8">
                <div>
                  <Clock className="h-10 w-10 mx-auto mb-3 text-weather-teal" />
                  <h3 className="font-semibold text-lg mb-2">Rapid Response</h3>
                  <p className="opacity-80">Emergency crews on-call 24/7</p>
                </div>
                <div>
                  <Shield className="h-10 w-10 mx-auto mb-3 text-weather-teal" />
                  <h3 className="font-semibold text-lg mb-2">Insurance Help</h3>
                  <p className="opacity-80">We work directly with your insurance</p>
                </div>
                <div>
                  <Phone className="h-10 w-10 mx-auto mb-3 text-weather-teal" />
                  <h3 className="font-semibold text-lg mb-2">One Call Away</h3>
                  <p className="opacity-80">(843) 877-5539 for emergencies</p>
                </div>
              </div>
              <a
                href="tel:843-877-5539"
                className="inline-flex items-center justify-center px-8 py-4 bg-weather-teal text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency Line
              </a>
            </div>
          </div>
        </section>

        {/* Financing Options */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-weather-teal/5 border-2 border-weather-teal rounded-xl p-8 text-center">
                <DollarSign className="h-12 w-12 text-weather-teal mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Flexible Financing Available
                </h2>
                <p className="text-xl text-gray-600 mb-6">
                  Don't let financial concerns delay necessary roof repairs. We offer flexible financing options with various terms to fit your needs.
                </p>
                <div className="grid sm:grid-cols-3 gap-6 mb-8">
                  <div>
                    <p className="text-2xl font-bold text-weather-blue">0%</p>
                    <p className="text-gray-600">Interest options available</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-weather-blue">5 Minutes</p>
                    <p className="text-gray-600">Quick approval process</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-weather-blue">Flexible</p>
                    <p className="text-gray-600">Payment terms</p>
                  </div>
                </div>
                <a
                  href="/financing"
                  className="inline-flex items-center justify-center px-8 py-4 bg-weather-blue text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all"
                >
                  Learn About Financing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>
      <Footer />
    </>
  );
}