'use client';

import { useState } from 'react';
import Link from 'next/link';
import StaticImage from '../components/StaticImage';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  Search,
  Tag,
  ChevronLeft,
  ChevronRight,
  TrendingUp
} from 'lucide-react';

const blogPosts = [
  {
    id: 8,
    title: 'Is Your Myrtle Beach Roof Ready for the Rest of Hurricane Season 2025? 6 Critical Steps',
    excerpt: 'NOAA predicts 13-19 named storms this season. With peak hurricane months ahead, discover the 6 critical steps to protect your Myrtle Beach home before November 30th.',
    author: 'David Karimi',
    date: 'October 8, 2025',
    readTime: '11 min read',
    category: 'Storm Preparation',
    image: '/images/background/residential-roofing-gutter-siding-services.jpg',
    slug: 'myrtle-beach-roof-hurricane-season-2025-preparation',
    featured: true
  },
  {
    id: 7,
    title: 'Hurricane Helene Anniversary: Is Your Charleston Roof Ready for the 2025 Storm Season?',
    excerpt: 'One year after Hurricane Helene devastated South Carolina, learn critical lessons to protect your Charleston roof from future storms. Free inspection available.',
    author: 'David Karimi',
    date: 'October 6, 2025',
    readTime: '10 min read',
    category: 'Storm Preparation',
    image: '/images/background/residential-roofing-gutter-siding-services.jpg',
    slug: 'hurricane-helene-anniversary-charleston-roof-preparation',
    featured: false
  },
  {
    id: 1,
    title: 'Hurricane Season Prep: Protecting Your Roof from Storm Damage',
    excerpt: 'Learn essential steps to prepare your roof for hurricane season and minimize potential storm damage to your home.',
    author: 'Mike Johnson',
    date: 'November 15, 2024',
    readTime: '5 min read',
    category: 'Storm Preparation',
    image: '/images/background/residential-roofing-gutter-siding-services.jpg',
    slug: 'hurricane-season-roof-preparation'
  },
  {
    id: 2,
    title: 'Signs You Need a New Roof: A Homeowner\'s Guide',
    excerpt: 'Discover the key warning signs that indicate it\'s time to replace your roof before minor issues become major problems.',
    author: 'Sarah Williams',
    date: 'November 10, 2024',
    readTime: '7 min read',
    category: 'Roof Maintenance',
    image: '/images/background/roof-replacement-services.jpg',
    slug: 'signs-you-need-new-roof'
  },
  {
    id: 3,
    title: 'Understanding Your Roof Warranty: What\'s Really Covered?',
    excerpt: 'Navigate the complexities of roofing warranties and learn what\'s covered, what\'s not, and how to maintain your coverage.',
    author: 'Tom Anderson',
    date: 'November 5, 2024',
    readTime: '6 min read',
    category: 'Warranties',
    image: '/images/background/home-exterior-improvement-services.jpg',
    slug: 'understanding-roof-warranty'
  },
  {
    id: 4,
    title: 'Metal vs. Shingle Roofing: Which is Right for Your Home?',
    excerpt: 'Compare the pros and cons of metal and shingle roofing to make an informed decision for your next roof replacement.',
    author: 'Mike Johnson',
    date: 'October 28, 2024',
    readTime: '8 min read',
    category: 'Roofing Materials',
    image: '/images/background/customer-reviews-background.jpg',
    slug: 'metal-vs-shingle-roofing'
  },
  {
    id: 5,
    title: 'Insurance Claims After Storm Damage: Step-by-Step Guide',
    excerpt: 'Everything you need to know about filing an insurance claim for roof damage, from documentation to working with adjusters.',
    author: 'Sarah Williams',
    date: 'October 20, 2024',
    readTime: '10 min read',
    category: 'Insurance Tips',
    image: '/images/background/residential-roofing-gutter-siding-services.jpg',
    slug: 'insurance-claims-storm-damage'
  },
  {
    id: 6,
    title: 'Save Thousands: Why Your Roof Maintenance Can\'t Wait Another Day',
    excerpt: '80% of roofs fail early, costing homeowners thousands. Discover how annual maintenance adds 10+ years to your roof. Free inspection available.',
    author: 'David Karimi',
    date: 'September 27, 2025',
    readTime: '12 min read',
    category: 'Roof Maintenance',
    image: '/images/background/roof-replacement-services.jpg',
    slug: 'importance-regular-roof-maintenance',
    featured: true
  }
];

const categories = [
  { name: 'All Posts', count: blogPosts.length },
  { name: 'Storm Preparation', count: 3 },
  { name: 'Roof Maintenance', count: 3 },
  { name: 'Warranties', count: 1 },
  { name: 'Roofing Materials', count: 2 },
  { name: 'Insurance Tips', count: 2 }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Filter posts based on category and search
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-weather-dark via-weather-dark to-weather-black text-white py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`
            }} />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-weather-teal/20 rounded-full px-4 py-2 mb-6">
                <TrendingUp className="w-5 h-5 text-weather-teal" />
                <span className="text-weather-teal font-semibold">Roofing Insights</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Weather Shield Blog
              </h1>
              <p className="text-xl text-gray-300">
                Expert tips, industry insights, and everything you need to know about roofing
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-weather-teal"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.name}
                    onClick={() => {
                      setSelectedCategory(category.name);
                      setCurrentPage(1);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      selectedCategory === category.name
                        ? 'bg-weather-teal text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            {currentPosts.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentPosts.map((post) => (
                    <article
                      key={post.id}
                      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <StaticImage
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {post.featured && (
                          <div className="absolute top-4 left-4">
                            <span className="bg-weather-teal text-white px-3 py-1 rounded-full text-sm font-semibold">
                              Featured
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                          <span className="inline-flex items-center gap-1">
                            <Tag className="w-4 h-4" />
                            <span className="text-weather-teal font-semibold">{post.category}</span>
                          </span>
                          <span>•</span>
                          <span className="inline-flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </span>
                        </div>
                        
                        <h2 className="text-xl font-bold text-weather-dark mb-3 group-hover:text-weather-teal transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                            <span>•</span>
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="inline-flex items-center gap-1 text-weather-teal font-semibold hover:text-weather-teal-dark transition-colors"
                          >
                            Read
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-12 flex justify-center items-center gap-2">
                    <button
                      onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                      className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                          currentPage === index + 1
                            ? 'bg-weather-teal text-white'
                            : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {index + 1}
                      </button>
                    ))}
                    
                    <button
                      onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No blog posts found matching your criteria.</p>
              </div>
            )}
          </div>
        </section>
    </main>
  );
}