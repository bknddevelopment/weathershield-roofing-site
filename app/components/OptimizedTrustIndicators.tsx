'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

// Lazy load icons
const Award = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Award })), { ssr: true });
const Shield = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Shield })), { ssr: true });
const Star = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Star })), { ssr: true });
const Users = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Users })), { ssr: true });
const Home = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Home })), { ssr: true });
const Clock = dynamic(() => import('lucide-react').then(mod => ({ default: mod.Clock })), { ssr: true });
const CheckCircle = dynamic(() => import('lucide-react').then(mod => ({ default: mod.CheckCircle })), { ssr: true });
const ThumbsUp = dynamic(() => import('lucide-react').then(mod => ({ default: mod.ThumbsUp })), { ssr: true });
const TrendingUp = dynamic(() => import('lucide-react').then(mod => ({ default: mod.TrendingUp })), { ssr: true });

const stats = [
  {
    icon: Home,
    value: 5000,
    suffix: '+',
    label: 'Roofs Installed',
    color: 'text-blue-500'
  },
  {
    icon: Users,
    value: 15,
    suffix: '+',
    label: 'Years Experience',
    color: 'text-blue-600'
  },
  {
    icon: Star,
    value: 5.0,
    suffix: '',
    label: 'Google Rating',
    color: 'text-purple-600',
    decimal: true
  },
  {
    icon: Clock,
    value: 24,
    suffix: '/7',
    label: 'Emergency Service',
    color: 'text-blue-500'
  }
];

const certifications = [
  {
    name: 'GAF Preferred Contractor',
    description: 'North America\'s largest roofing manufacturer',
    icon: Award,
    featured: true,
  },
  {
    name: 'BBB Accredited',
    description: 'A+ Rating with Better Business Bureau',
    icon: Shield,
  },
  {
    name: 'Angi Certified',
    description: 'Background checked and verified professionals',
    icon: CheckCircle,
  },
  {
    name: 'Google Guaranteed',
    description: 'Screened & backed by Google',
    icon: ThumbsUp,
  }
];

// Optimized counter with less frequent updates
function useCountUp(end: number, duration: number = 2000, decimal: boolean = false) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const steps = 20; // Reduce animation steps for better performance
    const stepDuration = duration / steps;
    const increment = end / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        const value = Math.min(increment * currentStep, end);
        setCount(decimal ? parseFloat(value.toFixed(1)) : Math.floor(value));
      } else {
        clearInterval(timer);
        setCount(end);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [end, duration, isVisible, decimal]);

  return { count, countRef };
}

function StatItem({ stat }: { stat: typeof stats[0] }) {
  const Icon = stat.icon;
  const { count, countRef } = useCountUp(stat.value, 2000, stat.decimal);

  return (
    <div ref={countRef} className="text-center group">
      <div className="inline-flex p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className={`w-8 h-8 ${stat.color}`} />
      </div>
      <div className="text-4xl md:text-5xl font-bold mb-2">
        {stat.decimal ? count.toFixed(1) : count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-gray-400 font-medium">{stat.label}</div>
    </div>
  );
}

interface OptimizedTrustIndicatorsProps {
  variant?: 'default' | 'emergency';
}

export default function OptimizedTrustIndicators({ variant = 'default' }: OptimizedTrustIndicatorsProps) {
  const emergencyStats = variant === 'emergency' ? [
    {
      icon: Clock,
      value: 2,
      suffix: ' Hours',
      label: 'Response Time',
      color: 'text-red-400'
    },
    {
      icon: Home,
      value: 5000,
      suffix: '+',
      label: 'Emergencies Handled',
      color: 'text-orange-400'
    },
    {
      icon: Star,
      value: 5.0,
      suffix: '',
      label: 'Emergency Rating',
      color: 'text-yellow-400',
      decimal: true
    },
    {
      icon: Shield,
      value: 100,
      suffix: '%',
      label: 'Insurance Approved',
      color: 'text-green-400'
    }
  ] : stats;

  const sectionClass = variant === 'emergency'
    ? 'py-16 bg-gradient-to-br from-red-900 via-orange-900 to-red-950 text-white relative overflow-hidden'
    : 'py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden';

  return (
    <section className={sectionClass}>
      {/* Optimized background - no fixed attachment for mobile performance */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/images/background/customer-reviews-background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Simplified pattern overlay */}
      <div className="absolute inset-0 opacity-5 z-[1]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          {variant === 'emergency' ? (
            <>
              <div className="inline-flex items-center gap-2 bg-red-500/20 rounded-full px-4 py-2 mb-6">
                <Shield className="w-5 h-5 text-yellow-400" />
                <span className="text-yellow-400 font-semibold">Proven Emergency Response</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Your Trusted Emergency Roofing Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Available 24/7 with guaranteed 2-hour response. Licensed, insured, and ready to protect your home immediately.
              </p>
            </>
          ) : (
            <>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 rounded-full px-4 py-2 mb-6">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-semibold">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Trusted by Thousands of Homeowners
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                With over 15 years of excellence, we've built our reputation on quality,
                reliability, and exceptional customer service.
              </p>
            </>
          )}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {emergencyStats.map((stat, index) => (
            <StatItem key={index} stat={stat} />
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center mb-12">
            Certified Excellence
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;

              return (
                <div
                  key={index}
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className={`relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 h-full ${
                    cert.featured ? 'ring-2 ring-yellow-500/30' : ''
                  }`}>
                    {cert.featured && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        FEATURED
                      </div>
                    )}
                    <div className="inline-flex p-3 rounded-full bg-blue-500/20 mb-4">
                      <Icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <h4 className="text-xl font-bold mb-2">{cert.name}</h4>
                    <p className="text-gray-400 text-sm">{cert.description}</p>
                    {cert.featured && (
                      <p className="text-yellow-400 text-xs mt-2 font-semibold">
                        ✓ Enhanced Warranties Available
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-8 py-4">
            <div className="flex -space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold">
              Rated 5.0 Stars by 500+ Happy Customers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}