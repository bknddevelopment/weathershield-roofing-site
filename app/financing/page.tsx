'use client';

import { useState } from 'react';
import {
  Calculator,
  CreditCard,
  Shield,
  CheckCircle2,
  FileText,
  Home,
  Percent,
  DollarSign,
  ChevronDown,
  ChevronUp,
  User,
  Mail,
  Phone,
  MapPin,
  AlertCircle,
  Zap,
  Award,
  ArrowRight
} from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

export default function FinancingPage() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    creditScore: '',
    income: '',
    projectType: 'roofing',
    additionalInfo: ''
  });

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Zero Down Payment',
      description: '100% financing available - no money down required for qualified applicants'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Bad Credit Welcome',
      description: 'We approve all credit types - poor credit, fair credit, or no credit history'
    },
    {
      icon: <Percent className="w-6 h-6" />,
      title: '0% APR Available',
      description: 'Promotional 0% APR financing for 12 months on approved credit'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Same Day Approval',
      description: 'Get approved in 60 seconds with instant financing decision'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Flexible Payment Plans',
      description: 'Choose from 12 to 60 month terms with low monthly payments'
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'No Prepayment Penalty',
      description: 'Pay off your loan early without any fees or penalties'
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: 'Increase Home Value',
      description: 'Invest in improvements that boost property value and curb appeal'
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'Guaranteed Approval Options',
      description: 'Special programs for those previously denied financing elsewhere'
    }
  ];

  const applicationSteps = [
    {
      step: 1,
      title: 'Get Your Quote',
      description: 'Schedule a free inspection and receive a detailed project estimate',
      icon: <Calculator className="w-8 h-8" />
    },
    {
      step: 2,
      title: 'Apply Online',
      description: 'Complete our simple online application in just 5 minutes',
      icon: <FileText className="w-8 h-8" />
    },
    {
      step: 3,
      title: 'Instant Decision',
      description: 'Receive approval notification within minutes',
      icon: <CheckCircle2 className="w-8 h-8" />
    },
    {
      step: 4,
      title: 'Start Your Project',
      description: 'Begin work immediately with your approved financing',
      icon: <Home className="w-8 h-8" />
    }
  ];

  const faqs: FAQ[] = [
    {
      question: 'Do you offer zero down payment roof financing?',
      answer: 'Yes! We offer 100% financing with zero down payment for qualified applicants. This means you can get your roof replaced or repaired without paying anything upfront. Our $0 down payment programs are available for applicants with good to excellent credit. Contact us at (843) 293-8150 to see if you qualify for no money down financing.'
    },
    {
      question: 'Can I get approved for roof financing with bad credit?',
      answer: 'Absolutely! We specialize in bad credit roof financing and work with multiple lenders who approve all credit types. Even if you have poor credit (scores as low as 580), fair credit, or have been denied financing elsewhere, we have programs designed specifically for your situation. Our bad credit financing options include flexible terms and competitive rates. We believe everyone deserves a safe, quality roof regardless of credit history.'
    },
    {
      question: 'What if I was denied roof financing at other companies?',
      answer: 'Don\'t give up! We have guaranteed approval programs for applicants who were previously denied financing. Our network of specialty lenders focuses on your ability to repay rather than just your credit score. We also offer co-signer options and secured loan programs as alternatives. Call us at (843) 293-8150 and we\'ll find a financing solution that works for your unique situation.'
    },
    {
      question: 'What credit score do I need to qualify?',
      answer: 'We work with multiple lenders to provide financing options for all credit types. While better credit scores qualify for lower rates, we have programs available for scores as low as 580. Each application is reviewed individually.'
    },
    {
      question: 'How quickly can I get approved?',
      answer: 'Most applications receive an instant decision within minutes. In some cases, additional documentation may be required, but typically approval takes no more than 24 hours.'
    },
    {
      question: 'Is there a down payment required?',
      answer: 'Down payment requirements vary by program and credit qualification. Some programs offer 100% financing with no money down, while others may require 10-20% down for the best rates.'
    },
    {
      question: 'Can I pay off my loan early?',
      answer: 'Yes! All our financing programs allow early payoff without any prepayment penalties. You can make extra payments or pay off the entire balance at any time.'
    },
    {
      question: 'What documents do I need to apply?',
      answer: 'Basic applications require only your personal information and consent for a credit check. For larger projects or certain programs, you may need to provide proof of income, bank statements, or property ownership documentation.'
    },
    {
      question: 'Will applying affect my credit score?',
      answer: 'We use a soft credit pull for pre-qualification, which does not affect your credit score. A hard credit inquiry is only performed when you formally accept a financing offer.'
    },
    {
      question: 'Can I finance multiple projects?',
      answer: 'Yes, you can finance multiple home improvement projects. Your approval amount will depend on your creditworthiness and overall debt-to-income ratio.'
    },
    {
      question: 'What if my application is denied?',
      answer: 'If your initial application is denied, we can explore alternative financing options or work with you to improve your qualification. We also offer co-signer options and secured loan programs.'
    }
  ];

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Application submitted:', formData);
    alert('Application submitted successfully! We will contact you within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-weather-teal to-weather-blue text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Flexible Financing Solutions</h1>
            <p className="text-xl mb-8">
              Make your home improvement dreams a reality with our affordable payment plans
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-2xl font-bold">100%</span>
                <span className="ml-2">Financing Available</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-2xl font-bold">$0</span>
                <span className="ml-2">Down Payment Options</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-2xl font-bold">All Credit</span>
                <span className="ml-2">Types Approved</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <span className="text-2xl font-bold">60 Sec</span>
                <span className="ml-2">Instant Approval</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Financing?</h2>
            
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

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Simple Application Process</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              {applicationSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative">
                    <div className="w-20 h-20 mx-auto bg-weather-teal/10 rounded-full flex items-center justify-center text-weather-teal mb-4">
                      {step.icon}
                    </div>
                    {index < applicationSteps.length - 1 && (
                      <ArrowRight className="absolute top-10 -right-8 w-6 h-6 text-gray-300 hidden md:block" />
                    )}
                  </div>
                  <div className="bg-weather-teal text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Start Your Application</h2>
            
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name *</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      className="w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:border-weather-teal"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:border-weather-teal"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                      className="w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:border-weather-teal"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Property Address *</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleFormChange}
                      required
                      className="w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:border-weather-teal"
                      placeholder="123 Main St, City, State"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Credit Score Range *</label>
                  <select
                    name="creditScore"
                    value={formData.creditScore}
                    onChange={handleFormChange}
                    required
                    className="w-full px-3 py-3 border rounded-lg focus:outline-none focus:border-weather-teal"
                  >
                    <option value="">Select range</option>
                    <option value="excellent">Excellent (750+)</option>
                    <option value="good">Good (700-749)</option>
                    <option value="fair">Fair (650-699)</option>
                    <option value="poor">Poor (Below 650)</option>
                    <option value="unsure">Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Annual Income *</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="income"
                      value={formData.income}
                      onChange={handleFormChange}
                      required
                      className="w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:border-weather-teal"
                      placeholder="50,000"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2">Project Type *</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleFormChange}
                    required
                    className="w-full px-3 py-3 border rounded-lg focus:outline-none focus:border-weather-teal"
                  >
                    <option value="roofing">Roofing</option>
                    <option value="siding">Siding</option>
                    <option value="windows">Windows</option>
                    <option value="gutters">Gutters</option>
                    <option value="multiple">Multiple Projects</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold mb-2">Additional Information</label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleFormChange}
                    rows={4}
                    className="w-full px-3 py-3 border rounded-lg focus:outline-none focus:border-weather-teal"
                    placeholder="Tell us more about your project..."
                  />
                </div>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg flex items-start">
                <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                <p className="text-sm text-blue-800">
                  By submitting this application, you authorize WeatherShield to perform a soft credit check 
                  which will not affect your credit score. Full terms and conditions will be provided upon approval.
                </p>
              </div>

              <button
                type="submit"
                className="w-full mt-6 bg-weather-teal text-white font-bold py-4 rounded-lg hover:bg-weather-blue transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold">{faq.question}</span>
                    {expandedFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 py-4 bg-gray-50 border-t">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-weather-teal to-weather-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't let budget concerns hold you back from protecting your home. 
            Apply for financing today and get approved in minutes!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-weather-teal px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
              Apply Online Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
              Call (843) 877-5539
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}