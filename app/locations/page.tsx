import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Clock, CheckCircle, Navigation, Building2, Home as HomeIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Service Areas | Weather Shield Roofing - Locations We Serve',
  description: 'Weather Shield Roofing proudly serves North Carolina and South Carolina. Find roofing services in Charlotte, Charleston, Myrtle Beach, Florence and surrounding areas. Call (843) 493-4963.',
  keywords: 'weather shield roofing locations, roofing services North Carolina, roofing services South Carolina, Charlotte roofing, Charleston roofing, Myrtle Beach roofing, Florence roofing',
  alternates: {
    canonical: 'https://weathershieldroofers.com/locations',
  },
  openGraph: {
    title: 'Service Areas | Weather Shield Roofing - NC & SC Coverage',
    description: 'Professional roofing services across North and South Carolina. Serving Charlotte, Charleston, Myrtle Beach, Florence and more. 24/7 emergency service available.',
    url: 'https://weathershieldroofers.com/locations',
    siteName: 'Weather Shield Roofing',
    locale: 'en_US',
    type: 'website',
  }
};

interface LocationGroup {
  state: string;
  stateSlug: string;
  description: string;
  locations: {
    name: string;
    slug: string;
    type: 'city' | 'region';
    featured?: boolean;
  }[];
}

const locationGroups: LocationGroup[] = [
  {
    state: 'South Carolina',
    stateSlug: 'south-carolina',
    description: 'Comprehensive roofing services throughout the Palmetto State',
    locations: [
      { name: 'Charleston', slug: 'charleston-sc', type: 'city', featured: true },
      { name: 'Myrtle Beach', slug: 'myrtle-beach', type: 'city', featured: true },
      { name: 'Florence', slug: 'florence', type: 'city', featured: true },
      { name: 'Conway', slug: 'conway', type: 'city' },
      { name: 'North Myrtle Beach', slug: 'north-myrtle-beach', type: 'city' },
      { name: 'Surfside Beach', slug: 'surfside-beach', type: 'city' },
      { name: 'Garden City', slug: 'garden-city', type: 'city' },
      { name: 'Pawleys Island', slug: 'pawleys-island', type: 'city' },
      { name: 'Murrells Inlet', slug: 'murrells-inlet', type: 'city' },
      { name: 'Little River', slug: 'little-river', type: 'city' },
      { name: 'Socastee', slug: 'socastee', type: 'city' },
      { name: 'Carolina Forest', slug: 'carolina-forest', type: 'city' },
      { name: 'Loris', slug: 'loris', type: 'city' },
      { name: 'Aynor', slug: 'aynor', type: 'city' },
      { name: 'Georgetown', slug: 'georgetown', type: 'city' },
      { name: 'Darlington', slug: 'darlington', type: 'city' },
      { name: 'Hartsville', slug: 'hartsville', type: 'city' },
      { name: 'Marion', slug: 'marion', type: 'city' },
      { name: 'Dillon', slug: 'dillon', type: 'city' },
    ]
  },
  {
    state: 'North Carolina',
    stateSlug: 'north-carolina',
    description: 'Professional roofing services across the Tar Heel State',
    locations: [
      { name: 'Charlotte', slug: 'charlotte-nc', type: 'city', featured: true },
    ]
  }
];

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-weather-light to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-weather-teal to-weather-teal-dark text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">Service Coverage</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Weather Shield Roofing Service Areas
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Proudly serving North Carolina and South Carolina with professional roofing services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:843-493-4963"
                className="inline-flex items-center justify-center gap-2 bg-white text-weather-teal px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-6 h-6" />
                Call (843) 493-4963
              </a>
              <Link
                href="https://weathershieldroofing.app.n8n.cloud/form/roofing-estimate"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-weather-teal transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* State-Wide Coverage Cards */}
      <section className="py-12 -mt-10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <Link
              href="/locations/south-carolina"
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 p-8 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-weather-black mb-2">South Carolina</h2>
                  <p className="text-weather-dark">Complete coverage across the Palmetto State</p>
                </div>
                <div className="w-12 h-12 bg-weather-teal/10 rounded-lg flex items-center justify-center group-hover:bg-weather-teal group-hover:text-white transition-all">
                  <Navigation className="w-6 h-6" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-weather-dark">
                  <CheckCircle className="w-4 h-4 text-weather-teal" />
                  <span>19+ Cities Served</span>
                </div>
                <div className="flex items-center gap-2 text-weather-dark">
                  <CheckCircle className="w-4 h-4 text-weather-teal" />
                  <span>24/7 Emergency Service</span>
                </div>
                <div className="flex items-center gap-2 text-weather-dark">
                  <CheckCircle className="w-4 h-4 text-weather-teal" />
                  <span>Licensed & Insured</span>
                </div>
              </div>
              <div className="mt-4 text-weather-teal font-semibold group-hover:translate-x-2 transition-transform inline-block">
                View South Carolina Locations →
              </div>
            </Link>

            <Link
              href="/locations/north-carolina"
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 p-8 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-weather-black mb-2">North Carolina</h2>
                  <p className="text-weather-dark">Professional services across the Tar Heel State</p>
                </div>
                <div className="w-12 h-12 bg-weather-teal/10 rounded-lg flex items-center justify-center group-hover:bg-weather-teal group-hover:text-white transition-all">
                  <Navigation className="w-6 h-6" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-weather-dark">
                  <CheckCircle className="w-4 h-4 text-weather-teal" />
                  <span>Charlotte Metro Area</span>
                </div>
                <div className="flex items-center gap-2 text-weather-dark">
                  <CheckCircle className="w-4 h-4 text-weather-teal" />
                  <span>Commercial & Residential</span>
                </div>
                <div className="flex items-center gap-2 text-weather-dark">
                  <CheckCircle className="w-4 h-4 text-weather-teal" />
                  <span>Storm Damage Experts</span>
                </div>
              </div>
              <div className="mt-4 text-weather-teal font-semibold group-hover:translate-x-2 transition-transform inline-block">
                View North Carolina Locations →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Cities */}
      <section className="py-12 bg-weather-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-weather-black mb-4">
              Featured Service Areas
            </h2>
            <p className="text-xl text-weather-dark max-w-3xl mx-auto">
              Major cities where we maintain dedicated crews for faster response times
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {locationGroups.flatMap(group =>
              group.locations.filter(loc => loc.featured).map(location => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="bg-white rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-weather-black group-hover:text-weather-teal transition-colors">
                        {location.name}
                      </h3>
                      <p className="text-weather-dark text-sm">{group.state}</p>
                    </div>
                    {location.type === 'city' ? (
                      <Building2 className="w-6 h-6 text-weather-teal/50 group-hover:text-weather-teal transition-colors" />
                    ) : (
                      <HomeIcon className="w-6 h-6 text-weather-teal/50 group-hover:text-weather-teal transition-colors" />
                    )}
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2 text-weather-dark">
                      <Clock className="w-4 h-4 text-weather-teal/70" />
                      <span>Fast Response</span>
                    </div>
                    <div className="flex items-center gap-2 text-weather-dark">
                      <CheckCircle className="w-4 h-4 text-weather-teal/70" />
                      <span>Local Crews</span>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>

      {/* All Locations by State */}
      {locationGroups.map(group => (
        <section key={group.stateSlug} className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-weather-black">
                    {group.state} Service Areas
                  </h2>
                  <p className="text-weather-dark mt-2">{group.description}</p>
                </div>
                <Link
                  href={`/locations/${group.stateSlug}`}
                  className="hidden sm:inline-flex items-center gap-2 text-weather-teal font-semibold hover:text-weather-teal-dark transition-colors"
                >
                  View State Page
                  <Navigation className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {group.locations.map(location => (
                  <Link
                    key={location.slug}
                    href={`/locations/${location.slug}`}
                    className="bg-white rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:scale-105 group border border-gray-100"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-weather-black group-hover:text-weather-teal transition-colors">
                        {location.name}
                      </span>
                      <MapPin className="w-4 h-4 text-weather-teal/50 group-hover:text-weather-teal transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                href={`/locations/${group.stateSlug}`}
                className="inline-flex sm:hidden items-center gap-2 text-weather-teal font-semibold hover:text-weather-teal-dark transition-colors mt-6"
              >
                View All {group.state} Locations
                <Navigation className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-weather-teal to-weather-teal-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Can't Find Your Location?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              We're constantly expanding our service area. Give us a call to check availability in your area!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:843-493-4963"
                className="inline-flex items-center justify-center gap-2 bg-white text-weather-teal px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-6 h-6" />
                Call (843) 493-4963
              </a>
              <a
                href="mailto:roofing@weathershieldroofers.com"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-weather-teal transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}