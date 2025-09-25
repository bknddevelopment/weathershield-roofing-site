import Link from 'next/link';
import Image from 'next/image';
import StaticImage from './StaticImage';
import { GAFBadge } from './GAFCertification';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter,
  Shield,
  CreditCard,
  Award,
  Star,
  Clock,
  ChevronRight
} from 'lucide-react';

const quickLinks = [
  { title: 'Emergency Service', href: '/emergency' },
  { title: 'Request Quote', href: '/quote' },
  { title: 'Warranty Info', href: '/warranty' },
  { title: 'Financing Options', href: '/financing' },
  { title: 'Careers', href: '/careers' },
  { title: 'Privacy Policy', href: '/privacy' },
];

const services = [
  { title: 'Roof Replacement Myrtle Beach', href: '/services/roof-replacement' },
  { title: 'Roof Repair Myrtle Beach', href: '/services/roof-repair' },
  { title: 'Storm Shield Roofing Services', href: '/services/storm-damage' },
  { title: 'WeatherShield Roof Inspections', href: '/services/roof-inspections' },
  { title: 'Weather Protection Gutters', href: '/services/gutter-services' },
  { title: 'Commercial Roofing Myrtle Beach', href: '/services/commercial' },
];

const serviceAreas = [
  'Myrtle Beach',
  'Charleston',
  'Charlotte',
  'Florence',
  'Conway',
  'North Myrtle Beach',
];

export default function Footer() {
  return (
    <footer className="bg-weather-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <StaticImage
                src="/favicon.png"
                alt="Weather Shield Roofing - Top Roofing Companies Myrtle Beach | WeatherShield Roofing"
                width={320}
                height={120}
                className="h-24 sm:h-28 lg:h-32 w-auto mb-6 object-contain"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Weather Shield Roofing - Leading roofing companies Myrtle Beach trusts for weather protection.
              WeatherShield roofing experts protecting homes from weather in Myrtle Beach since 2010.
              Top-rated roofing companies near me - Licensed, insured, and weatherproof.
            </p>
            <div className="space-y-2">
              <a href="tel:+18438775539" className="flex items-center gap-2 text-gray-300 hover:text-weather-teal transition-colors">
                <Phone className="w-4 h-4" />
                <span>(843) 877-5539</span>
              </a>
              <a href="mailto:roofing@weathershieldroofers.com" className="flex items-center gap-2 text-gray-300 hover:text-weather-teal transition-colors">
                <Mail className="w-4 h-4" />
                <span>roofing@weathershieldroofers.com</span>
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>215 Ronnie Ct. Unit F, Myrtle Beach, SC 29579</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Weather Shield Roofing Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link 
                    href={service.href}
                    className="flex items-center gap-1 text-gray-300 hover:text-weather-teal transition-colors"
                  >
                    <ChevronRight className="w-3 h-3" aria-hidden="true" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/locations/myrtle-beach"
                  className="flex items-center gap-1 text-gray-300 hover:text-weather-teal transition-colors"
                  title="Roofing Companies Myrtle Beach SC"
                >
                  <ChevronRight className="w-3 h-3" aria-hidden="true" />
                  Roofing Myrtle Beach SC
                </Link>
              </li>
              <li>
                <Link
                  href="/locations/charleston-sc"
                  className="flex items-center gap-1 text-gray-300 hover:text-weather-teal transition-colors"
                >
                  <ChevronRight className="w-3 h-3" aria-hidden="true" />
                  Charleston, SC
                </Link>
              </li>
              <li>
                <Link
                  href="/locations/charlotte-nc"
                  className="flex items-center gap-1 text-gray-300 hover:text-weather-teal transition-colors"
                >
                  <ChevronRight className="w-3 h-3" aria-hidden="true" />
                  Charlotte, NC
                </Link>
              </li>
              <li>
                <Link
                  href="/locations/florence"
                  className="flex items-center gap-1 text-gray-300 hover:text-weather-teal transition-colors"
                >
                  <ChevronRight className="w-3 h-3" aria-hidden="true" />
                  Florence, SC
                </Link>
              </li>
              <li>
                <Link
                  href="/locations/south-carolina"
                  className="flex items-center gap-1 text-gray-300 hover:text-weather-teal transition-colors"
                >
                  <ChevronRight className="w-3 h-3" aria-hidden="true" />
                  All South Carolina
                </Link>
              </li>
              <li>
                <Link
                  href="/locations/north-carolina"
                  className="flex items-center gap-1 text-gray-300 hover:text-weather-teal transition-colors"
                >
                  <ChevronRight className="w-3 h-3" aria-hidden="true" />
                  All North Carolina
                </Link>
              </li>
            </ul>
            <div className="mt-4">
              <Link
                href="/locations"
                className="text-weather-teal hover:text-weather-purple transition-colors font-semibold"
                title="Roofing Companies Near Me - All Service Areas"
              >
                View All Roofing Service Areas →
              </Link>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 mb-6">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-1 text-gray-300 hover:text-weather-teal transition-colors"
                  >
                    <ChevronRight className="w-3 h-3" aria-hidden="true" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-weather-teal transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-weather-teal transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-weather-teal transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badges & Payment Methods */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-gray-300 bg-weather-amber/10 px-3 py-2 rounded-lg border border-weather-amber/30">
                <Award className="w-5 h-5 text-weather-amber" />
                <div>
                  <span className="text-sm font-semibold text-weather-amber">GAF Preferred Contractor</span>
                  <span className="text-xs block text-gray-300">Since 2025</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Award className="w-5 h-5 text-weather-teal" />
                <span className="text-sm">BBB Accredited</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Star className="w-5 h-5 text-weather-teal" />
                <span className="text-sm">Angi Certified</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Shield className="w-5 h-5 text-weather-teal" />
                <span className="text-sm">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm">5.0 Google Reviews</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-300">We Accept:</span>
              <div className="flex gap-3">
                <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center">
                  <CreditCard className="w-6 h-4 text-gray-300" />
                </div>
                <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-300">
                  VISA
                </div>
                <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-300">
                  MC
                </div>
                <div className="w-12 h-8 bg-gray-800 rounded flex items-center justify-center text-xs text-gray-300">
                  AMEX
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
            <p>© 2024 Weather Shield Roofing. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-2 sm:mt-0">
              <Link href="/terms" className="hover:text-weather-teal transition-colors">
                Terms of Service
              </Link>
              <span>|</span>
              <Link href="/privacy" className="hover:text-weather-teal transition-colors">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="/sitemap" className="hover:text-weather-teal transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-gradient-to-r from-weather-teal to-weather-teal-dark py-2">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold flex items-center justify-center gap-2">
            <Clock className="w-4 h-4" />
            24/7 Emergency Service Available - Call Now: (843) 877-5539
          </p>
        </div>
      </div>
    </footer>
  );
}