'use client';

import { useEffect } from 'react';
import { BOOKING_CONFIG } from '../config/booking';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowRight, Clock } from 'lucide-react';

export default function QuotePage() {
  useEffect(() => {
    // Auto-redirect after 3 seconds
    const redirectTimer = setTimeout(() => {
      window.location.href = BOOKING_CONFIG.url;
    }, 3000);

    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-weather-light to-white pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-weather-amber/20 rounded-full animate-ping"></div>
                  <div className="relative bg-weather-amber/10 p-4 rounded-full">
                    <Clock className="w-12 h-12 text-weather-amber" />
                  </div>
                </div>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Redirecting to Our Booking System
              </h1>

              <p className="text-lg text-gray-600 mb-8">
                You're being redirected to our secure online booking system where you can schedule your service or request a quote.
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
                <p className="text-sm text-blue-800">
                  This will open our trusted booking platform where you can:
                </p>
                <ul className="mt-2 space-y-1 text-sm text-blue-700">
                  <li>• Schedule appointments at your convenience</li>
                  <li>• Get instant quotes for services</li>
                  <li>• Choose from available time slots</li>
                  <li>• Provide details about your roofing needs</li>
                </ul>
              </div>

              <div className="space-y-4">
                <a
                  href={BOOKING_CONFIG.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-weather-amber to-weather-amber-dark text-white px-8 py-4 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                >
                  Go to Booking System Now
                  <ArrowRight className="w-5 h-5" />
                </a>

                <p className="text-sm text-gray-500">
                  You will be automatically redirected in a few seconds...
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-2">
                  Having trouble? You can also call us directly:
                </p>
                <a
                  href="tel:843-877-5539"
                  className="text-2xl font-bold text-weather-secondary hover:text-weather-amber transition-colors"
                >
                  (843) 877-5539
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}