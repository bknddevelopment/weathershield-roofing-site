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
    <div className="sticky top-0 bg-white z-[9999]" style={{ isolation: 'isolate' }}>
      <header
        role="banner"
        aria-label="Main navigation"
        className={`transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-white shadow-md border-b border-gray-50'
      }`}>
        {/* Main Navigation */}
        <nav className={`bg-white transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`} role="navigation" aria-label="Primary navigation">
          <div className="relative w-full">
            {/* Logo - Positioned absolutely to break out of container constraints */}
            <Link
              href="/"
              className="absolute left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16 top-1/2 -translate-y-1/2 z-10 flex items-center hover:opacity-90 transition-opacity"
              aria-label="Weather Shield Roofing - Top Roofing Companies Myrtle Beach | WeatherShield Home"
            >
              <div className={`relative transition-all duration-300 ${
                isScrolled
                  ? 'w-44 sm:w-52 md:w-64 lg:w-72 xl:w-80 h-16 sm:h-18 md:h-20 lg:h-20 xl:h-22'
                  : 'w-52 sm:w-60 md:w-72 lg:w-80 xl:w-88 h-18 sm:h-20 md:h-24 lg:h-24 xl:h-28'
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
              <div className="hidden lg:flex items-center gap-1 xl:gap-2 ml-[320px] xl:ml-[360px] flex-nowrap whitespace-nowrap">
                <Link
                  href="/"
                  className="text-gray-700 hover:text-weather-secondary transition-all duration-200 py-2 px-3 xl:px-4 font-medium text-sm xl:text-base rounded-md hover:bg-gray-50 focus-visible-ring"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="text-gray-700 hover:text-weather-secondary transition-all duration-200 py-2 px-3 xl:px-4 font-medium text-sm xl:text-base rounded-md hover:bg-gray-50 focus-visible-ring"
                >
                  About
                </Link>

                {/* Services Dropdown */}
                <div className="relative dropdown-wrapper">
                  <button
                    className="flex items-center gap-1 text-gray-700 hover:text-weather-secondary transition-all duration-200 py-2 px-3 xl:px-4 font-medium text-sm xl:text-base rounded-md hover:bg-gray-50 focus-visible-ring"
                    aria-haspopup="true"
                    aria-expanded={isServicesOpen ? "true" : "false"}
                    aria-controls="services-dropdown"
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setIsServicesOpen(!isServicesOpen);
                      }
                    }}
                  >
                    Services
                    <ChevronDown className="h-4 w-4 transition-transform dropdown-wrapper:hover:rotate-180" />
                  </button>
                  {/* Always render dropdown, CSS handles visibility */}
                  <div
                    id="services-dropdown"
                    className="dropdown-menu absolute left-0 top-full w-80 bg-white shadow-xl rounded-lg py-2 border border-gray-100"
                    style={{
                      marginTop: '0px',
                      zIndex: 9999
                    }}
                    role="menu"
                  >
                    <div className="px-3 pb-2 border-b border-gray-100">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Our Services</p>
                    </div>
                    <div className="grid grid-cols-2 gap-1 p-2">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-weather-secondary/5 transition-all group relative focus-visible-ring"
                          role="menuitem"
                        >
                          {service.badge && (
                            <span className="absolute -top-1 -right-1 text-[10px] font-medium text-weather-amber bg-weather-amber/10 px-1.5 py-0.5 rounded-full">
                              {service.badge}
                            </span>
                          )}
                          <div className="text-weather-secondary group-hover:scale-110 transition-transform" aria-hidden="true">
                            {service.icon}
                          </div>
                          <span className="text-sm font-medium text-gray-700 group-hover:text-weather-secondary transition-colors">
                            {service.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-gray-100 mt-1 pt-2 px-3">
                      <Link
                        href="/services"
                        className="text-weather-secondary text-sm font-semibold hover:text-weather-amber transition-colors flex items-center justify-center gap-2 focus-visible-ring"
                      >
                        View All Services
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                <Link
                  href="/gallery"
                  className="text-gray-700 hover:text-weather-secondary transition-all duration-200 py-2 px-3 xl:px-4 font-medium text-sm xl:text-base rounded-md hover:bg-gray-50 focus-visible-ring"
                >
                  Gallery
                </Link>

                <Link
                  href="/reviews"
                  className="text-gray-700 hover:text-weather-secondary transition-all duration-200 py-2 px-3 xl:px-4 font-medium text-sm xl:text-base rounded-md hover:bg-gray-50 focus-visible-ring"
                >
                  Reviews
                </Link>

                <Link
                  href="/blog"
                  className="text-gray-700 hover:text-weather-secondary transition-all duration-200 py-2 px-3 xl:px-4 font-medium text-sm xl:text-base rounded-md hover:bg-gray-50 focus-visible-ring"
                >
                  Blog
                </Link>
              </div>

              {/* Desktop CTA Section */}
              <div className="hidden lg:flex items-center gap-4 ml-6">
                {/* GAF Certification Badge */}
                <GAFBadge variant="compact" className="border-r border-gray-200 pr-4" />

                {/* Phone Number CTA */}
                <a
                  href="tel:+18438775539"
                  className="flex items-center gap-2 text-gray-900 font-semibold hover:text-weather-secondary transition-colors whitespace-nowrap focus-visible-ring group"
                  aria-label="Call us at (843) 877-5539"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-weather-secondary/20 rounded-full animate-pulse"></div>
                    <div className="relative bg-weather-secondary/10 p-2 rounded-full group-hover:bg-weather-secondary/20 transition-colors">
                      <Phone className="w-4 h-4 text-weather-secondary" />
                    </div>
                  </div>
                  <span className="text-sm xl:text-base">(843) 877-5539</span>
                </a>

                {/* Primary CTA Button */}
                <a
                  {...getBookingLinkProps()}
                  className="bg-gradient-to-r from-weather-secondary to-weather-secondary-dark text-white px-5 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 group hover:from-weather-secondary-dark hover:to-weather-secondary whitespace-nowrap text-sm xl:text-base"
                >
                  Get Free Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Mobile Phone Button and Menu Toggle - Container for both */}
              <div className="lg:hidden flex items-center gap-2 ml-auto">
                {/* Mobile Phone Button */}
                <a
                  href="tel:+18438775539"
                  className="p-3 rounded-lg bg-gradient-to-r from-weather-amber/10 to-weather-amber/5 hover:from-weather-amber/20 hover:to-weather-amber/10 transition-all duration-300 focus-visible-ring min-tap-target group relative overflow-hidden"
                  aria-label="Call us at (843) 877-5539"
                >
                  {/* Animated pulse effect */}
                  <div className="absolute inset-0 bg-weather-amber/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-weather-amber/20 animate-ping"></div>
                  {/* Phone icon */}
                  <Phone className="w-6 h-6 text-weather-amber relative z-10" />
                </a>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-3 rounded-lg hover:bg-gray-100 transition-colors focus-visible-ring min-tap-target"
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
                  href="tel:+18438775539"
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