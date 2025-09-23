'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StaticImage from './StaticImage';
import { motion, AnimatePresence } from 'framer-motion';
import { getBookingLinkProps } from '../config/booking';
import {
  Menu,
  X,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  Home,
  Wrench,
  Droplets,
  Wind,
  Star,
  Award,
  ArrowRight,
  AlertCircle,
  Calendar
} from 'lucide-react';

interface ServiceLink {
  title: string;
  href: string;
  icon: React.ReactNode;
  description: string;
  badge?: string;
}

const services: ServiceLink[] = [
  {
    title: 'Roof Replacement',
    href: '/services/residential-roofing',
    icon: <Home className="w-5 h-5" />,
    description: 'Complete roof replacement services',
    badge: 'Most Popular'
  },
  {
    title: 'Roof Repair',
    href: '/services/roof-repair',
    icon: <Wrench className="w-5 h-5" />,
    description: 'Expert roof repair solutions'
  },
  {
    title: 'Storm Damage',
    href: '/services/storm-damage',
    icon: <Wind className="w-5 h-5" />,
    description: 'Emergency storm damage repair',
    badge: '24/7'
  },
  {
    title: 'Roof Inspections',
    href: '/services/roof-inspections',
    icon: <Shield className="w-5 h-5" />,
    description: 'Professional roof inspections',
    badge: ''
  },
  {
    title: 'Gutter Services',
    href: '/services/gutter-services',
    icon: <Droplets className="w-5 h-5" />,
    description: 'Gutter installation and repair'
  }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-0 bg-white" style={{ zIndex: 99999, isolation: 'isolate' }}>
      <header
        role="banner"
        aria-label="Main navigation"
        className={`transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-2xl border-b border-gray-200'
          : 'bg-white shadow-sm'
      }`}>
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-weather-secondary to-weather-secondary-dark text-white py-2 text-xs sm:text-sm" aria-label="Contact information">
          <div className="container">
            {/* Mobile Layout */}
            <div className="flex sm:hidden justify-center items-center">
              <a href="tel:843-877-5539" className="flex items-center hover:text-weather-amber transition-colors" aria-label="Call us at (843) 877-5539">
                <Phone className="w-4 h-4 mr-1.5 animate-pulse" aria-hidden="true" />
                <span className="font-bold">(843) 877-5539</span>
              </a>
            </div>
            
            {/* Desktop Layout */}
            <div className="hidden sm:flex justify-between items-center">
              <div className="flex items-center gap-4 lg:gap-6">
                <a href="tel:843-877-5539" className="flex items-center hover:text-weather-amber transition-colors" aria-label="Call us at (843) 877-5539">
                  <Phone className="w-4 h-4 mr-2 animate-pulse" aria-hidden="true" />
                  <span className="font-bold text-sm lg:text-base">(843) 877-5539</span>
                </a>
                <div className="hidden md:flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>215 Ronnie Ct. Unit F, Myrtle Beach</span>
                </div>
              </div>
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="hidden lg:inline">Mon-Fri: 9am-5pm | Sat-Sun: Closed</span>
                  <span className="lg:hidden">Mon-Fri: 9am-5pm</span>
                </div>
                <div className="hidden lg:flex items-center">
                  <Star className="w-4 h-4 mr-1 text-weather-amber fill-current" />
                  <span className="font-bold">5.0</span>
                  <span className="ml-1 text-gray-300">(500+ Reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className={`bg-white transition-all duration-300 ${isScrolled ? 'py-1.5' : 'py-3'}`} role="navigation" aria-label="Primary navigation">
          <div className="container">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center" aria-label="Weather Shield Roofing - Top Roofing Companies Myrtle Beach | WeatherShield Home">
                <div className={`relative transition-all duration-300 ${
                  isScrolled 
                    ? 'w-40 sm:w-48 lg:w-52 h-14 sm:h-16 lg:h-18' 
                    : 'w-48 sm:w-56 lg:w-64 h-16 sm:h-20 lg:h-24'
                }`}>
                  <StaticImage
                    src="/favicon.png"
                    alt="Weather Shield Roofing - Leading Roofing Companies Myrtle Beach | WeatherShield Roofing Logo"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-weather-secondary transition-colors py-2 px-1 font-semibold text-base focus-visible-ring"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="text-gray-700 hover:text-weather-secondary transition-colors py-2 px-1 font-semibold text-base focus-visible-ring"
                >
                  About
                </Link>

                {/* Services Dropdown */}
                <div className="relative dropdown-wrapper">
                  <button
                    className="flex items-center text-gray-700 hover:text-weather-secondary transition-colors py-2 px-1 font-semibold text-base focus-visible-ring"
                    aria-haspopup="true"
                    aria-expanded={isServicesOpen ? "true" : "false"}
                    aria-controls="services-dropdown"
                  >
                    Services
                    <ChevronDown className="ml-1 h-4 w-4 transition-transform dropdown-wrapper:hover:rotate-180" />
                  </button>
                  {/* Always render dropdown, CSS handles visibility */}
                  <div
                    id="services-dropdown"
                    className="dropdown-menu absolute left-0 top-full w-96 bg-white shadow-xl rounded-lg py-3 border border-gray-100"
                    style={{
                      marginTop: '0px',
                      zIndex: 99999
                    }}
                    role="menu"
                  >
                    <div className="px-4 pb-2 border-b border-gray-100">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Our Services</p>
                    </div>
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="flex items-start gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-weather-secondary/5 hover:to-weather-amber/5 transition-all group relative focus-visible-ring"
                        role="menuitem"
                      >
                        {service.badge && (
                          <span className="absolute top-2 right-4 text-xs font-bold text-weather-amber bg-weather-amber/10 px-2 py-1 rounded-full">
                            {service.badge}
                          </span>
                        )}
                        <div className="text-weather-secondary mt-1 group-hover:scale-110 transition-transform" aria-hidden="true">
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-weather-secondary group-hover:text-weather-secondary-dark transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-0.5">{service.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-weather-secondary/30 group-hover:text-weather-amber group-hover:translate-x-1 transition-all mt-1" aria-hidden="true" />
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 mt-2 pt-2 px-4">
                      <Link
                        href="/services"
                        className="text-weather-secondary text-sm font-semibold hover:text-weather-amber transition-colors flex items-center gap-2 focus-visible-ring"
                      >
                        View All Services
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                <Link
                  href="/gallery"
                  className="text-gray-700 hover:text-weather-secondary transition-colors py-2 px-1 font-semibold text-base focus-visible-ring"
                >
                  Gallery
                </Link>

                <Link
                  href="/reviews"
                  className="text-gray-700 hover:text-weather-secondary transition-colors py-2 px-1 font-semibold text-base focus-visible-ring"
                >
                  Reviews
                </Link>

                <Link
                  href="/blog"
                  className="text-gray-700 hover:text-weather-secondary transition-colors py-2 px-1 font-semibold text-base focus-visible-ring"
                >
                  Blog
                </Link>
              </div>

              {/* Desktop CTA Section */}
              <div className="hidden lg:flex items-center gap-3 ml-auto">
                {/* Phone Number CTA */}
                <a
                  href="tel:843-877-5539"
                  className="flex items-center gap-2 text-weather-secondary font-bold hover:text-weather-amber transition-colors whitespace-nowrap focus-visible-ring"
                  aria-label="Call us at (843) 877-5539"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-weather-amber/20 rounded-full animate-ping"></div>
                    <div className="relative bg-weather-amber/10 p-1.5 rounded-full">
                      <Phone className="w-4 h-4 text-weather-amber" />
                    </div>
                  </div>
                  <span className="text-sm">(843) 877-5539</span>
                </a>

                {/* Primary CTA Button */}
                <a
                  {...getBookingLinkProps()}
                  className="bg-gradient-to-r from-weather-amber to-weather-amber-dark text-white px-5 py-2.5 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group hover:-translate-y-0.5 whitespace-nowrap text-sm"
                >
                  Request Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus-visible-ring min-tap-target"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200 overflow-hidden shadow-lg"
            >
              <div className="container py-4">
                {/* Mobile Phone CTA */}
                <a
                  href="tel:843-877-5539"
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-weather-amber to-weather-amber-dark text-white px-6 py-3 rounded-lg font-bold mb-4"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now: (843) 877-5539</span>
                </a>

                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-gray-700 hover:text-weather-secondary transition-colors font-semibold border-b border-gray-200 focus-visible-ring"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-gray-700 hover:text-weather-secondary transition-colors font-semibold border-b border-gray-200 focus-visible-ring"
                >
                  About
                </Link>
                
                <div className="py-3 border-b border-gray-200">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-weather-secondary transition-colors font-semibold focus-visible-ring"
                    aria-expanded={isServicesOpen ? 'true' : 'false'}
                    aria-controls="mobile-services-dropdown"
                  >
                    Services
                    <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 pt-2">
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-3 py-2 text-gray-600 hover:text-weather-navy transition-colors"
                            >
                              <div className="text-weather-navy">{service.icon}</div>
                              <span>{service.title}</span>
                              {service.badge && (
                                <span className="text-xs font-bold text-weather-amber bg-weather-amber/10 px-2 py-0.5 rounded-full ml-auto">
                                  {service.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link 
                  href="/gallery"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-gray-700 hover:text-weather-navy transition-colors font-semibold border-b border-gray-200"
                >
                  Gallery
                </Link>

                <Link 
                  href="/reviews"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-gray-700 hover:text-weather-navy transition-colors font-semibold border-b border-gray-200"
                >
                  Reviews
                </Link>

                <Link 
                  href="/blog"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-gray-700 hover:text-weather-navy transition-colors font-semibold border-b border-gray-200"
                >
                  Blog
                </Link>

                <a
                  {...getBookingLinkProps()}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block mt-4 bg-gradient-to-r from-weather-navy to-weather-navy-dark text-white px-6 py-3 rounded-lg font-bold text-center shadow-lg"
                >
                  Request Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}