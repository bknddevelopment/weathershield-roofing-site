'use client';

import Link from 'next/link';
import StaticImage from '../../components/StaticImage';
import { useState, useEffect, useRef } from 'react';
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Phone,
  CheckCircle,
  AlertTriangle,
  Shield,
  Home,
  DollarSign,
  Wrench,
  Sun,
  Cloud,
  Snowflake,
  Droplets,
  Wind,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Share2,
  BookOpen,
  Award,
  FileText,
  Users,
  MapPin,
  Star,
  AlertCircle,
  Leaf,
  Eye,
  TrendingUp,
  ChevronRight
} from 'lucide-react';

interface BlogPostData {
  id: number;
  title: string;
  metaDescription: string;
  author: string;
  authorBio: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
  featured: boolean;
  content: {
    intro: string;
    sections: Array<{
      id: string;
      title: string;
      content: string;
    }>;
    warningSignsData?: Array<{
      title: string;
      description: string;
      impact: string;
    }>;
    maintenanceCalendar?: Array<{
      season: string;
      tasks: string[];
      critical: boolean;
    }>;
    faqs: Array<{
      question: string;
      answer: string;
    }>;
  };
}

interface RelatedPost {
  title: string;
  excerpt: string;
  slug: string;
  readTime: string;
  image: string;
}

interface BlogPostClientProps {
  post: BlogPostData;
  relatedPosts: RelatedPost[];
  slug?: string;
}

export default function BlogPostClient({ post, relatedPosts, slug }: BlogPostClientProps) {
  const [expandedFAQs, setExpandedFAQs] = useState<number[]>([]);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showMobileNav, setShowMobileNav] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Track scroll position for table of contents
  useEffect(() => {
    const handleScroll = () => {
      const sections = post.content.sections.map(s => s.id);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [post.content.sections]);

  const toggleFAQ = (index: number) => {
    setExpandedFAQs(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const handleShare = (platform: 'facebook' | 'twitter' | 'linkedin' | 'email' | 'copy') => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const title = post.title;

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'email':
        window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        break;
    }
    setShowShareMenu(false);
  };


  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setShowMobileNav(false);
  };

  // Render warning signs with icons
  const renderWarningSign = (sign: any, index: number) => {
    const icons: Record<number, JSX.Element> = {
      0: <Home className="w-8 h-8 text-orange-500" />,
      1: <Droplets className="w-8 h-8 text-orange-500" />,
      2: <Leaf className="w-8 h-8 text-orange-500" />,
      3: <Sun className="w-8 h-8 text-orange-500" />,
      4: <DollarSign className="w-8 h-8 text-orange-500" />
    };

    return (
      <div key={index} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">{icons[index] || <AlertCircle className="w-8 h-8 text-orange-500" />}</div>
          <div>
            <h3 className="text-xl font-bold text-weather-dark mb-3">
              {index + 1}. {sign.title}
            </h3>
            <p className="text-gray-700 mb-3">
              <strong>What to look for:</strong> {sign.description}
            </p>
            <p className="text-gray-700">
              <strong>What it means:</strong> {sign.impact}
            </p>
          </div>
        </div>
      </div>
    );
  };

  // Render seasonal maintenance with icons
  const renderSeasonalMaintenance = (season: any, index: number) => {
    const icons: Record<number, JSX.Element> = {
      0: <Cloud className="w-6 h-6 text-blue-500" />,
      1: <Sun className="w-6 h-6 text-yellow-500" />,
      2: <Wind className="w-6 h-6 text-orange-500" />,
      3: <Snowflake className="w-6 h-6 text-blue-300" />
    };

    return (
      <div
        key={index}
        className={`bg-white rounded-lg shadow-md p-6 ${
          season.critical ? 'border-2 border-red-500' : 'border border-gray-200'
        } hover:shadow-lg transition-shadow`}
      >
        <div className="flex items-center gap-3 mb-4">
          {icons[index] || <Calendar className="w-6 h-6 text-gray-500" />}
          <h3 className="text-xl font-bold text-weather-dark">{season.season}</h3>
          {season.critical && (
            <span className="ml-auto bg-weather-danger text-white text-xs px-2 py-1 rounded-full font-semibold">
              Critical
            </span>
          )}
        </div>
        <ul className="space-y-2">
          {season.tasks.map((task: string, taskIndex: number) => (
            <li key={taskIndex} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">{task}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 pb-20 lg:pb-0">
      {/* Skip to content link for keyboard users */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-weather-primary text-white px-4 py-2 rounded-lg z-50">
        Skip to main content
      </a>

      {/* Sticky Phone CTA for Mobile */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t shadow-elevation-3 p-4">
        <div className="flex gap-3">
          <a
            href="tel:8432938150"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-weather-primary text-white px-4 py-3 rounded-lg font-bold hover:bg-weather-primary-dark transition-colors min-h-[48px]"
          >
            <Phone className="w-5 h-5" />
            Call Now
          </a>
          <Link
            href="/quote"
            className="flex-1 inline-flex items-center justify-center gap-2 bg-weather-accent text-white px-4 py-3 rounded-lg font-bold hover:bg-weather-accent-dark transition-colors min-h-[48px]"
          >
            Free Quote
          </Link>
        </div>
      </div>

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
            <Link href="/" className="text-gray-600 hover:text-weather-primary transition-colors font-medium">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" aria-hidden="true" />
            <Link href="/blog" className="text-gray-600 hover:text-weather-primary transition-colors font-medium">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" aria-hidden="true" />
            <span className="text-weather-dark font-semibold truncate">{post.title}</span>
          </nav>
        </div>
      </div>

      <article className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Table of Contents - Desktop Sticky Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg shadow-elevation-2 p-6 mb-6">
                <h3 className="font-bold text-weather-dark mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-weather-primary" aria-hidden="true" />
                  Table of Contents
                </h3>
                <nav className="space-y-2" role="navigation" aria-label="Table of Contents">
                  {post.content.sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                        activeSection === section.id
                          ? 'bg-weather-primary text-white font-semibold shadow-elevation-1'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-weather-dark'
                      }`}
                      aria-current={activeSection === section.id ? 'location' : undefined}
                    >
                      {section.title}
                    </button>
                  ))}
                  <button
                    onClick={() => scrollToSection('faqs')}
                    className={`block w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === 'faqs'
                        ? 'bg-weather-teal text-white font-semibold'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-weather-dark'
                    }`}
                  >
                    Frequently Asked Questions
                  </button>
                </nav>
              </div>

              {/* Trust Badges */}
              <div className="bg-white rounded-lg shadow-elevation-2 p-6">
                <h4 className="font-bold text-weather-dark mb-4">Why Trust Us?</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-weather-primary flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm text-gray-700 font-medium">GAF Certified Contractor</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-weather-primary flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm text-gray-700 font-medium">Licensed & Insured</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-weather-primary flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm text-gray-700 font-medium">5,000+ Roofs Protected</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-weather-primary flex-shrink-0" aria-hidden="true" />
                    <span className="text-sm text-gray-700 font-medium">5-Star Google Reviews</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div id="main-content" className="lg:col-span-9" ref={contentRef}>
            {/* Article Header */}
            <header className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-weather-primary hover:text-weather-primary-dark transition-colors mb-6 font-medium"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Blog
              </Link>

              {post.featured && (
                <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  <TrendingUp className="w-4 h-4" />
                  Featured Post
                </div>
              )}

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-weather-dark mb-4">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
                <span className="inline-flex items-center gap-1">
                  <User className="w-5 h-5" />
                  {post.author}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-5 h-5" />
                  {post.date}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-5 h-5" />
                  {post.readTime} read
                </span>
                <span className="inline-block bg-weather-teal text-white px-3 py-1 rounded-full font-semibold">
                  {post.category}
                </span>
              </div>

              {/* Social Share Buttons */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm text-gray-600">Share:</span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleShare('facebook')}
                    className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="p-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="p-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('email')}
                    className="p-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                    aria-label="Share via Email"
                  >
                    <Mail className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleShare('copy')}
                    className="p-3 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
                    aria-label="Copy Link"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="relative h-64 md:h-96 w-full mb-8 rounded-xl overflow-hidden">
              <StaticImage
                src={post.image}
                alt={`${post.title} - Professional roof maintenance guide showing inspection and repair techniques for Myrtle Beach homeowners`}
                fill
                className="object-cover"
                loading="eager"
                priority
              />
            </div>

            {/* Mobile Table of Contents */}
            <div className="lg:hidden mb-8">
              <button
                onClick={() => setShowMobileNav(!showMobileNav)}
                className="w-full bg-white rounded-lg shadow-elevation-2 p-4 flex items-center justify-between"
                aria-expanded={showMobileNav}
                aria-controls="mobile-toc"
              >
                <span className="font-bold text-weather-dark flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-weather-primary" aria-hidden="true" />
                  Table of Contents
                </span>
                {showMobileNav ? (
                  <ChevronUp className="w-5 h-5 text-gray-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                )}
              </button>
              {showMobileNav && (
                <div id="mobile-toc" className="bg-white rounded-lg shadow-elevation-2 mt-2 p-4">
                  <nav className="space-y-2">
                    {post.content.sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="block w-full text-left px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 hover:text-weather-dark transition-colors"
                      >
                        {section.title}
                      </button>
                    ))}
                    <button
                      onClick={() => scrollToSection('faqs')}
                      className="block w-full text-left px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 hover:text-weather-dark transition-colors"
                    >
                      Frequently Asked Questions
                    </button>
                  </nav>
                </div>
              )}
            </div>

            {/* Introduction with Warning */}
            <section className="mb-12">
              <div className="bg-weather-danger/5 border-l-4 border-weather-danger p-6 rounded-lg mb-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-weather-danger mt-1 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="text-xl font-bold text-weather-dark mb-2">Shocking Industry Truth</h3>
                    <div dangerouslySetInnerHTML={{ __html: post.content.intro }} />
                  </div>
                </div>
              </div>

              {/* First CTA Block */}
              <div className="bg-weather-primary/5 border-2 border-weather-primary rounded-lg p-6 mb-8 shadow-elevation-1">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="text-weather-dark font-bold text-lg mb-2">Ready to Protect Your Investment?</p>
                    <p className="text-gray-700">Schedule your free roof inspection today. No obligations, just peace of mind.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="tel:8432938150" className="inline-flex items-center justify-center gap-2 bg-weather-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-weather-primary-dark transition-colors min-h-[48px] shadow-elevation-2">
                      <Phone className="w-5 h-5" />
                      Call (843) 293-8150
                    </a>
                    <Link href="/quote" className="inline-flex items-center justify-center gap-2 bg-white border-2 border-weather-primary text-weather-primary px-6 py-3 rounded-lg font-bold hover:bg-weather-primary hover:text-white transition-colors min-h-[48px] shadow-elevation-1">
                      Schedule Online
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Main Content Sections */}
            {post.content.sections.map((section) => (
              <section key={section.id} id={section.id} className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-weather-dark mb-6">
                  {section.title}
                </h2>

                {/* Special handling for warning signs section */}
                {section.id === 'warning-signs' && post.content.warningSignsData && (
                  <>
                    <div dangerouslySetInnerHTML={{ __html: section.content }} />
                    <div className="space-y-6 mt-8">
                      {post.content.warningSignsData.map((sign, index) => renderWarningSign(sign, index))}
                    </div>
                  </>
                )}

                {/* Special handling for seasonal maintenance section */}
                {section.id === 'seasonal-maintenance' && post.content.maintenanceCalendar && (
                  <>
                    <div dangerouslySetInnerHTML={{ __html: section.content }} />
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      {post.content.maintenanceCalendar.map((season, index) => renderSeasonalMaintenance(season, index))}
                    </div>
                  </>
                )}

                {/* Regular content sections */}
                {section.id !== 'warning-signs' && section.id !== 'seasonal-maintenance' && (
                  <div dangerouslySetInnerHTML={{ __html: section.content }} />
                )}
              </section>
            ))}

            {/* Comparison Table */}
            <section className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-weather-dark mb-6">
                The Cost Comparison: Maintenance vs. Neglect
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-elevation-3 p-6 border-t-4 border-weather-danger">
                  <h3 className="text-xl font-bold text-weather-dark mb-4 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-weather-danger" aria-hidden="true" />
                    Without Maintenance
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Roof lifespan: **12-15 years**',
                      'Insurance claims often **denied**',
                      'Emergency repairs cost **3x more**',
                      'Property value decreases by **5-10%**',
                      'Warranty becomes **void**',
                      'Total 20-year cost: **$35,000+**'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-weather-danger mt-1 font-bold" aria-hidden="true">✗</span>
                        <span className="text-gray-800" dangerouslySetInnerHTML={{
                          __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-weather-dark">$1</strong>')
                        }} />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-elevation-3 p-6 border-t-4 border-weather-success">
                  <h3 className="text-xl font-bold text-weather-dark mb-4 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-weather-success" aria-hidden="true" />
                    With Regular Maintenance
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Roof lifespan: **25-30+ years**',
                      'Insurance claims **approved**',
                      'Prevent costly emergencies',
                      'Property value **protected**',
                      'Full warranty coverage maintained',
                      'Total 20-year cost: **$8,000-10,000**'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-weather-success mt-1 flex-shrink-0" aria-hidden="true" />
                        <span className="text-gray-800" dangerouslySetInnerHTML={{
                          __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-weather-dark">$1</strong>')
                        }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Mid-Content CTA */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-weather-teal to-weather-teal-dark rounded-xl p-8 text-white">
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Don't Wait Until It's Too Late
                  </h3>
                  <p className="text-lg mb-6 max-w-2xl mx-auto">
                    Every day you delay costs you money. Get your FREE professional roof inspection today and discover exactly what condition your roof is in.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:8432938150"
                      className="inline-flex items-center justify-center gap-2 bg-white text-weather-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors shadow-elevation-3"
                    >
                      <Phone className="w-6 h-6" />
                      Call Now: (843) 293-8150
                    </a>
                    <Link
                      href="/quote"
                      className="inline-flex items-center justify-center gap-2 bg-weather-accent text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-weather-accent-dark transition-colors shadow-elevation-3"
                    >
                      Get Free Inspection
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                  <p className="text-sm mt-4 text-gray-200">
                    Emergency? Call our 24/7 hotline: <a href="tel:8438775539" className="text-white font-bold underline">(843) 877-5539</a>
                  </p>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faqs" className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-weather-dark mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {post.content.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:bg-gray-50"
                      aria-expanded={expandedFAQs.includes(index)}
                      aria-controls={`faq-answer-${index}`}
                      id={`faq-question-${index}`}
                    >
                      <h3 className="text-lg font-semibold text-weather-dark pr-4">
                        {faq.question}
                      </h3>
                      <span className="p-2 -m-2" aria-hidden="true">
                        {expandedFAQs.includes(index) ? (
                          <ChevronUp className="w-5 h-5 text-weather-primary" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-weather-primary" />
                        )}
                      </span>
                    </button>
                    {expandedFAQs.includes(index) && (
                      <div
                        className="px-6 pb-4"
                        id={`faq-answer-${index}`}
                        role="region"
                        aria-labelledby={`faq-question-${index}`}
                      >
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Author Bio Section */}
            <section className="mb-12">
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-bold text-weather-dark mb-4">About the Author</h3>
                <div className="flex items-start gap-4">
                  <div className="bg-weather-teal text-white rounded-full p-4">
                    <User className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-bold text-weather-dark text-lg">{post.author}</h4>
                    <p className="text-weather-teal font-semibold mb-2">{post.authorRole}</p>
                    <p className="text-gray-700">{post.authorBio}</p>
                  </div>
                </div>
              </div>
            </section>


            {/* Final CTA Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-weather-dark to-weather-black text-white rounded-xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-center">The Bottom Line: Your Roof, Your Choice</h2>

                <p className="text-lg mb-6 text-center max-w-3xl mx-auto">
                  Every day you wait is another day closer to that emergency call no homeowner wants to make.
                  The statistics are clear: <strong>80% of roofs fail prematurely</strong>, and <strong>61% of homeowners
                  can't afford the emergency repairs</strong> that follow.
                </p>

                <div className="bg-white/10 rounded-lg p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4 text-center">What You Get with Weather Shield Roofing:</h3>
                  <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                    {[
                      'GAF certified professionals',
                      '5,000+ roofs protected since 2015',
                      'Family-owned, community-trusted',
                      'Licensed and fully insured',
                      'Free, no-obligation inspections',
                      '24/7 emergency response',
                      'Warranty protection guaranteed',
                      'Insurance claim assistance'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-weather-teal mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-2xl font-bold mb-6">Don't Wait Until It's Too Late</p>
                  <p className="text-lg mb-8">
                    Join thousands of smart Myrtle Beach homeowners who protect their investment with regular maintenance.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="tel:8432938150"
                      className="inline-flex items-center justify-center gap-2 bg-weather-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-weather-primary-dark transition-colors shadow-elevation-3"
                    >
                      <Phone className="w-6 h-6" />
                      Call Now: (843) 293-8150
                    </a>
                    <Link
                      href="/quote"
                      className="inline-flex items-center justify-center gap-2 bg-white text-weather-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors shadow-elevation-3"
                    >
                      Schedule Your Free Inspection
                      <ExternalLink className="w-5 h-5" />
                    </Link>
                  </div>
                  <p className="text-sm mt-4 text-gray-300">
                    Emergency? Call our 24/7 hotline: <a href="tel:8438775539" className="text-weather-primary-on-dark font-bold underline">(843) 877-5539</a>
                  </p>
                </div>
              </div>
            </section>

            {/* Related Posts Section */}
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-weather-dark mb-6">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <Link
                    key={index}
                    href={`/blog/${relatedPost.slug}`}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <StaticImage
                        src={relatedPost.image}
                        alt={`${relatedPost.title} - Related roofing article from Weather Shield Roofing experts`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-weather-dark mb-2 group-hover:text-weather-teal transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {relatedPost.readTime}
                        </span>
                        <span className="text-weather-teal font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                          Read More
                          <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}