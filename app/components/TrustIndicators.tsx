'use client';

import { useEffect, useRef, useState } from 'react';
import { 
  Award, 
  Shield, 
  Star, 
  Users,
  Home,
  TrendingUp,
  CheckCircle,
  Clock,
  ThumbsUp
} from 'lucide-react';

const stats = [
  {
    icon: Home,
    value: 5000,
    suffix: '+',
    label: 'Roofs Installed',
    color: 'text-weather-teal'
  },
  {
    icon: Users,
    value: 15,
    suffix: '+',
    label: 'Years Experience',
    color: 'text-weather-blue'
  },
  {
    icon: Star,
    value: 5.0,
    suffix: '',
    label: 'Google Rating',
    color: 'text-weather-purple',
    decimal: true
  },
  {
    icon: Clock,
    value: 24,
    suffix: '/7',
    label: 'Emergency Service',
    color: 'text-weather-teal'
  }
];

const certifications = [
  {
    name: 'GAF Preferred Contractor',
    description: 'North America\'s largest roofing manufacturer',
    icon: Award,
    badge: '/images/gaf-preferred.png',
    featured: true,
    color: 'weather-amber'
  },
  {
    name: 'BBB Accredited',
    description: 'A+ Rating with Better Business Bureau',
    icon: Shield,
    badge: '/images/bbb-accredited.png',
    color: 'weather-teal'
  },
  {
    name: 'Angi Certified',
    description: 'Background checked and verified professionals',
    icon: CheckCircle,
    badge: '/images/angi-certified.png',
    color: 'weather-blue'
  },
  {
    name: 'Google Guaranteed',
    description: 'Screened & backed by Google',
    icon: ThumbsUp,
    badge: '/images/google-guaranteed.png',
    color: 'weather-purple'
  }
];

function useCountUp(end: number, duration: number = 2000, decimal: boolean = false) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      const currentRef = countRef.current;
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = easeOutQuart * end;
      
      setCount(decimal ? parseFloat(currentCount.toFixed(1)) : Math.floor(currentCount));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isVisible, decimal]);

  return { count, countRef };
}

// Separate component for stat items to use hooks correctly
function StatItem({ stat }: { stat: typeof stats[0] }) {
  const Icon = stat.icon;
  const { count, countRef } = useCountUp(stat.value, 2000, stat.decimal);

  return (
    <div
      ref={countRef}
      className="text-center group"
    >
      <div className={`inline-flex p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 mb-4 group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`w-8 h-8 ${stat.color}`} />
      </div>
      <div className="text-4xl md:text-5xl font-bold mb-2">
        {stat.decimal ? count.toFixed(1) : count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-gray-400 font-medium">{stat.label}</div>
    </div>
  );
}

export default function TrustIndicators() {
  return (
    <section className="py-20 bg-gradient-to-br from-weather-dark via-weather-dark to-weather-black text-white relative overflow-hidden">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/images/background/customer-reviews-background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-weather-dark/95 via-weather-dark/90 to-weather-black/95" />
      </div>
      
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 z-[1]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-weather-teal/20 rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-5 h-5 text-weather-teal" />
            <span className="text-weather-teal font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by Thousands of Homeowners
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            With over 15 years of excellence, we've built our reputation on quality, 
            reliability, and exceptional customer service.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
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
              
              const bgColor = cert.featured ? 'bg-weather-amber/20' : 'bg-weather-teal/20';
              const iconColor = cert.featured ? 'text-weather-amber' : 'text-weather-teal';
              const borderColor = cert.featured ? 'border-weather-amber/30' : 'border-white/20';

              return (
                <div
                  key={index}
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                >
                  <div className={`relative bg-white/10 backdrop-blur-sm border ${borderColor} rounded-xl p-6 h-full ${
                    cert.featured ? 'ring-2 ring-weather-amber/30' : ''
                  }`}>
                    {cert.featured && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-weather-amber text-white text-xs font-bold px-3 py-1 rounded-full">
                        FEATURED
                      </div>
                    )}
                    <div className={`inline-flex p-3 rounded-full ${bgColor} mb-4`}>
                      <Icon className={`w-8 h-8 ${iconColor}`} />
                    </div>
                    <h4 className="text-xl font-bold mb-2">{cert.name}</h4>
                    <p className="text-gray-400 text-sm">{cert.description}</p>
                    {cert.featured && (
                      <p className="text-weather-amber text-xs mt-2 font-semibold">
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-weather-teal/20 to-weather-purple/20 backdrop-blur-sm border border-weather-teal/30 rounded-full px-8 py-4">
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