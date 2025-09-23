'use client';

import Link from 'next/link';
import StaticImage from './StaticImage';
import { Calendar, User, ArrowRight, BookOpen, Clock, Tag } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Hurricane Season Prep: Protecting Your Roof from Storm Damage',
    excerpt: 'Learn essential steps to prepare your roof for hurricane season and minimize potential storm damage to your home.',
    author: 'Mike Johnson',
    date: 'November 15, 2024',
    readTime: '5 min read',
    category: 'Storm Preparation',
    image: '/images/background/roof-replacement-services.jpg',
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
    image: '/images/gallery/residential-roof-replacement-services-1-400x300.jpg',
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
    image: '/images/background/customer-reviews-background.jpg',
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
    image: '/images/gallery/siding-installation-repair-services-1-400x300.jpg',
    slug: 'metal-vs-shingle-roofing'
  }
];

const categories = [
  'All Posts',
  'Storm Preparation',
  'Roof Maintenance',
  'Warranties',
  'Roofing Materials',
  'Insurance Tips'
];

export default function BlogsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-weather-teal/10 rounded-full px-4 py-2 mb-6">
            <BookOpen className="w-5 h-5 text-weather-teal" />
            <span className="text-weather-teal font-semibold">Latest From Our Blog</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-weather-dark mb-4">
            Roofing Insights & Expert Tips
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest roofing news, maintenance tips, and industry insights 
            from our team of experts.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-full">
                <StaticImage
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-weather-teal text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    {blogPosts[0].category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-weather-dark mb-4">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="w-4 h-4" />
                    <span>By {blogPosts[0].author}</span>
                  </div>
                  <Link
                    href={`/blog/${blogPosts[0].slug}`}
                    className="inline-flex items-center gap-2 text-weather-teal font-semibold hover:text-weather-teal-dark transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span className="text-weather-teal font-semibold">{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-weather-dark mb-3 group-hover:text-weather-teal transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
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

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-weather-teal hover:bg-weather-teal-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
          >
            View All Blog Posts
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}