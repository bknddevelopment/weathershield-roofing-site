'use client';

import {
  DollarSign,
  Award,
  Percent,
  Zap,
  Shield,
  CreditCard,
  Home,
  CheckCircle2
} from 'lucide-react';

interface LocationBenefitsProps {
  cityName: string;
}

export default function LocationBenefits({ cityName }: LocationBenefitsProps) {
  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Zero Down Payment',
      description: `100% financing available for qualified ${cityName} homeowners - no money down required`
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Bad Credit Welcome',
      description: `We approve all credit types in ${cityName} - poor credit, fair credit, or no credit history`
    },
    {
      icon: <Percent className="w-6 h-6" />,
      title: '0% APR Available',
      description: `Promotional 0% APR financing for 12 months on approved credit for ${cityName} residents`
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Same Day Approval',
      description: `Get approved in 60 seconds with instant financing decision for ${cityName} properties`
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Flexible Payment Plans',
      description: 'Choose from 12 to 60 month terms with low monthly payments that fit your budget'
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'No Prepayment Penalty',
      description: 'Pay off your loan early without any fees or penalties - save on interest'
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Increase Home Value',
      description: `Invest in improvements that boost your ${cityName} property value and curb appeal`
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'Guaranteed Approval Options',
      description: `Special programs for ${cityName} homeowners previously denied financing elsewhere`
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">
            Why Choose Our {cityName} Financing?
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Flexible payment options designed specifically for {cityName} homeowners
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-weather-teal mb-4">{benefit.icon}</div>
                <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
