'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StaticImage from './StaticImage';
import { motion, AnimatePresence } from 'framer-motion';
import { getBookingLinkProps } from '../config/booking';
import { GAFBadge } from './GAFCertification';
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
    description: 'Free professional roof inspections',
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
        {/* Main Navigation */}
        <nav className={`bg-white transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`} role="navigation" aria-label="Primary navigation">
          <div className="relative w-full">
            {/* Logo - Positioned absolutely to break out of container constraints */}
            <Link
              href="/"
              className="absolute left-2 sm:left-4 md:left-8 lg:left-12 xl:left-16 2xl:left-24 top-1/2 -translate-y-1/2 z-10 flex items-center"
              aria-label="Weather Shield Roofing - Top Roofing Companies Myrtle Beach | WeatherShield Home"
            >
              <div className={`relative transition-all duration-300 ${
                isScrolled
                  ? 'w-44 sm:w-56 md:w-64 lg:w-72 xl:w-80 2xl:w-96 h-14 sm:h-16 md:h-18 lg:h-20 xl:h-22 2xl:h-24'
                  : 'w-48 sm:w-64 md:w-72 lg:w-80 xl:w-96 2xl:w-[26rem] h-16 sm:h-20 md:h-22 lg:h-24 xl:h-26 2xl:h-28'
              }`}>
                <StaticImage
                  src="/favicon.png"
                  alt="Weather Shield Roofing - Leading Roofing Companies Myrtle Beach | WeatherShield Roofing Logo"
                  className="absolute inset-0 w-full h-full object-contain"
                  priority={true}
                />
              </div>
            </Link>

            {/* Main container for nav and CTA - adjusted padding to account for absolute logo */}
            <div className="flex justify-between items-center max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
              {/* Desktop Navigation - add left spacing to avoid logo overlap */}
              <div className="hidden lg:flex items-center space-x-2 xl:space-x-3 ml-[280px] xl:ml-[340px] 2xl:ml-[400px] flex-nowrap whitespace-nowrap">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-weather-secondary transition-colors py-2 px-1 font-semibold text-sm xl:text-base focus-visible-ring"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="text-gray-700 hover:text-weather-secondary transition-colors py-2 px-1 font-semibold text-sm xl:text-base focus-visible-ring"
                >
                  About
                </Link>

                {/* Services Dropdown */}
                <div className="relative dropdown-wrapper">
                  <button
                    className="flex items-center text-gray-700 hover:text-weather-secondary transition-colors py-2 px-1 font-semibold text-sm xl:text-base focus-visible-ring"
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
                          <span className="absolute top-2 right-4 text-xs font-medium text-weather-amber bg-weather-amber/10 px-2 py-1 rounded-full">
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
                  className="text-gray-700 hover:text-weather-secondary transition-colors py-2 px-1 font-semibold text-sm xl:text-base focus-visible-ring"
                >
                  Gallery
                </Link>

                <Link
                  href="/reviews"
                  className="text-gray-700 hover:text-weather-secondary transition-colors py-2 px-1 font-semibold text-sm xl:text-base focus-visible-ring"
                >
                  Reviews
                </Link>

                <Link
                  href="/blog"
                  className="text-gray-700 hover:text-weather-secondary transition-colors py-2 px-1 font-semibold text-sm xl:text-base focus-visible-ring"
                >
                  Blog
                </Link>
              </div>

              {/* Desktop CTA Section */}
              <div className="hidden lg:flex items-center gap-3 ml-4">
                {/* GAF Certification Badge */}
                <GAFBadge variant="compact" className="border-r border-gray-200 pr-3" />

                {/* Phone Number CTA */}
                <a
                  href="tel:843-877-5539"
                  className="flex items-center gap-2 text-weather-secondary font-semibold hover:text-weather-amber transition-colors whitespace-nowrap focus-visible-ring"
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
                  className="bg-gradient-to-r from-weather-amber to-weather-amber-dark text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group hover:-translate-y-0.5 whitespace-nowrap text-base"
                >
                  Request Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-3 rounded-lg hover:bg-gray-100 transition-colors focus-visible-ring min-tap-target self-center ml-auto"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
              >
                {isMobileMenuOpen ? (
                  <X className="w-7 h-7 text-gray-700" />
                ) : (
                  <Menu className="w-7 h-7 text-gray-700" />
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
              <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 py-4">
                {/* Mobile Phone CTA */}
                <a
                  href="tel:843-877-5539"
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-weather-amber to-weather-amber-dark text-white px-6 py-3 rounded-lg font-semibold mb-4"
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
                                <span className="text-xs font-medium text-weather-amber bg-weather-amber/10 px-2 py-0.5 rounded-full ml-auto">
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
                  className="block mt-4 bg-gradient-to-r from-weather-navy to-weather-navy-dark text-white px-6 py-3 rounded-lg font-semibold text-center shadow-lg"
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