'use client';

import Link from 'next/link';
import { Phone, MessageSquare, Clock, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { getBookingLinkProps } from '../config/booking';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-weather-teal via-weather-blue to-weather-purple relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main CTA Card */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Left Content */}
              <div className="p-8 md:p-12">
                <div className="inline-flex items-center gap-2 bg-weather-teal/10 rounded-full px-4 py-2 mb-6">
                  <Shield className="w-5 h-5 text-weather-teal" />
                  <span className="text-weather-teal font-medium text-sm">Limited Time Offer</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-semibold text-weather-dark mb-4">
                  Request Your Free Roof Inspection Today
                </h2>

                <p className="text-base text-gray-600 mb-6">
                  Don't wait for a small problem to become a big expense. Our certified inspectors will evaluate your roof at no cost.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-weather-teal mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Complete roof evaluation with drone technology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-weather-teal mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Detailed report with photos and recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-weather-teal mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Insurance claim assistance if damage is found</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-weather-teal mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Professional assessment with detailed report</span>
                  </li>
                </ul>

                <div className="space-y-4">
                  <a
                    {...getBookingLinkProps()}
                    className="w-full inline-flex items-center justify-center gap-2 bg-weather-teal hover:bg-weather-teal-dark text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 transform hover:scale-105"
                  >
                    Schedule Inspection
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>Takes only 2 minutes to schedule</span>
                  </div>
                </div>
              </div>

              {/* Right Content - Contact Options */}
              <div className="bg-gradient-to-br from-weather-dark to-weather-black p-8 md:p-12 text-white">
                <h3 className="text-xl font-semibold mb-6">
                  Prefer to Talk? We're Here 24/7
                </h3>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <a
                    href="tel:+18438775539"
                    className="block bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-weather-teal rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">(843) 877-5539</p>
                        <p className="text-gray-300 text-sm">Call for immediate assistance</p>
                      </div>
                    </div>
                  </a>

                  {/* Text */}
                  <a
                    href="sms:843-877-5539"
                    className="block bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-weather-purple rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">Text Us</p>
                        <p className="text-gray-300 text-sm">Get a quick response via SMS</p>
                      </div>
                    </div>
                  </a>

                  {/* Emergency Service */}
                  <div className="bg-gradient-to-r from-weather-teal/20 to-weather-purple/20 backdrop-blur-sm border border-weather-teal/30 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="w-6 h-6 text-weather-teal animate-pulse" />
                      <h4 className="font-semibold text-base">Emergency Service Available</h4>
                    </div>
                    <p className="text-gray-300">
                      Storm damage? Sudden leak? We respond within 1 hour for emergency calls, 24 hours a day, 7 days a week.
                    </p>
                  </div>
                </div>

                {/* Trust Message */}
                <div className="mt-8 pt-8 border-t border-white/20">
                  <p className="text-center text-gray-300">
                    <span className="font-bold text-white">5,000+</span> roofs protected
                    <br />
                    <span className="font-bold text-white">15+</span> years of excellence
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Bar */}
          <div className="mt-8 text-center">
            <p className="text-white/90 text-base font-normal mb-4">
              Trusted by homeowners across Myrtle Beach and surrounding areas
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-white/80">
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Licensed & Insured
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Certified Professional
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                BBB A+ Rating
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}