'use client';

import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';
import StaticImage from '../components/StaticImage';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Award, 
  CheckCircle, 
  ArrowRight,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Project data interface
interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  description: string;
  image: string;
  completionTime: string;
}

// Real projects data using actual gallery images
const projects: Project[] = [
  {
    id: 1,
    title: 'Complete Roof Replacement',
    category: 'Residential Roofing',
    location: 'Myrtle Beach, SC',
    description: 'Full roof replacement with premium architectural shingles, includes new underlayment and ventilation system',
    image: '/images/gallery/residential-roof-replacement-services-1-400x300.jpg',
    completionTime: '2 days'
  },
  {
    id: 2,
    title: 'Storm Damage Restoration',
    category: 'Emergency Repair',
    location: 'North Myrtle Beach, SC',
    description: 'Emergency repair and complete restoration after hurricane damage, insurance claim handled',
    image: '/images/gallery/roof-repair-services-1-400x300.jpg',
    completionTime: '3 days'
  },
  {
    id: 3,
    title: 'Premium Gutter System',
    category: 'Gutter Services',
    location: 'Surfside Beach, SC',
    description: '6-inch seamless aluminum gutters with Leaf Relief gutter protection system',
    image: '/images/gallery/roofing-gutter-services-1-400x300.jpg',
    completionTime: '1 day'
  },
  {
    id: 4,
    title: 'Architectural Shingle Upgrade',
    category: 'Residential Roofing',
    location: 'Garden City, SC',
    description: 'Upgraded from 3-tab to architectural shingles with enhanced wind resistance',
    image: '/images/gallery/roof-installation-repair-services-1-400x300.jpg',
    completionTime: '2 days'
  },
  {
    id: 5,
    title: 'Vinyl Siding Installation',
    category: 'Siding Services',
    location: 'Pawleys Island, SC',
    description: 'Complete James Hardie fiber cement siding with ColorPlus technology',
    image: '/images/gallery/siding-installation-repair-services-1-400x300.jpg',
    completionTime: '4 days'
  },
  {
    id: 6,
    title: 'Commercial Flat Roof',
    category: 'Commercial Roofing',
    location: 'Conway, SC',
    description: 'TPO membrane installation for retail center with 20-year warranty',
    image: '/images/gallery/roofing-installation-replacement-services-1-225x300.jpg',
    completionTime: '1 week'
  },
  {
    id: 7,
    title: 'Emergency Leak Repair',
    category: 'Emergency Repair',
    location: 'Murrells Inlet, SC',
    description: '24/7 emergency response for severe roof leak during storm',
    image: '/images/gallery/residential-roof-installation-repair-services-1-225x300.jpg',
    completionTime: 'Same day'
  },
  {
    id: 8,
    title: 'Metal Roof Installation',
    category: 'Residential Roofing',
    location: 'Georgetown, SC',
    description: 'Standing seam metal roof for ultimate durability and energy efficiency',
    image: '/images/gallery/siding-gutter-services-1-400x300.jpg',
    completionTime: '3 days'
  }
];

// Statistics data
const stats = [
  { label: 'Projects Completed', value: '5,000+', icon: CheckCircle },
  { label: 'Years of Service', value: '15+', icon: Award },
  { label: 'Satisfied Customers', value: '100%', icon: Award },
  { label: 'Insurance Claims', value: '2,000+', icon: CheckCircle }
];

export default function GalleryPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      {/* Hero Section with Enhanced Design */}
      <section className="relative min-h-[500px] bg-gradient-to-br from-weather-teal via-weather-blue to-weather-purple overflow-hidden">
        {/* Overlays for depth */}
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10" />
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="container mx-auto px-4 py-20 relative z-10"
        >
          <div className="max-w-5xl mx-auto text-center">
            {/* Trust Badge */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-4 py-2 mb-8"
            >
              <Award className="w-5 h-5 text-white" />
              <span className="text-white font-semibold uppercase tracking-wider text-sm">Certified Roofing Contractor</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Our Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-weather-teal-light to-white">Speaks for Itself</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Browse through our portfolio of completed roofing projects across Myrtle Beach and the Grand Strand. 
              Every project showcases our commitment to excellence.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <stat.icon className="w-8 h-8 text-weather-teal-light mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>


      {/* Enhanced Projects Grid with Better Spacing */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-weather-teal/20 card-shine"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <StaticImage
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                      style={{ objectFit: 'cover' }}
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-weather-teal/90 to-weather-blue/90 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide border border-white/20">
                      {project.category}
                    </div>
                    
                    {/* Zoom Icon on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-2xl transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <ZoomIn className="w-8 h-8 text-weather-teal" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced Project Details */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-weather-teal transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="text-gray-500 flex items-center text-sm">
                        <MapPin className="w-4 h-4 mr-1.5 text-weather-teal" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-weather-teal font-semibold text-sm">
                        <Clock className="w-4 h-4" />
                        {project.completionTime}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Statistics Section with Pattern Background */}
      <section className="relative py-20 bg-gradient-to-r from-weather-teal via-weather-blue to-weather-purple text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 viewBox=%220 0 40 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M0 40L40 0H20L0 20M40 40V20L20 40%22/%3E%3C/g%3E%3C/svg%3E')]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Our Track Record of <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-weather-teal-light">Excellence</span>
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                viewport={{ once: true }}
                className="text-center group hover:scale-110 transition-transform duration-300"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-weather-teal-light" />
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/90 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Enhanced Lightbox Modal with Better Design */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateX: -10 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: 10 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative max-w-6xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Enhanced Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 bg-white/90 backdrop-blur-md rounded-full p-3 shadow-xl hover:bg-white hover:scale-110 transition-all duration-300 group"
              >
                <X className="w-6 h-6 text-gray-700 group-hover:text-weather-teal transition-colors" />
              </button>
              
              {/* Image Display */}
              <div className="relative h-[400px] md:h-[600px] bg-gradient-to-br from-gray-100 to-gray-200">
                <StaticImage
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                  style={{ objectFit: 'cover', imageRendering: '-webkit-optimize-contrast' }}
                  priority
                />
                
              </div>
              
              {/* Enhanced Project Details */}
              <div className="p-10 bg-gradient-to-b from-white to-gray-50">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>
                  <span className="bg-gradient-to-r from-weather-teal to-weather-blue text-white px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg ml-6">
                    {selectedProject.category}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-weather-teal mt-1" />
                    <div>
                      <span className="text-gray-500 text-sm font-medium">Location</span>
                      <p className="font-semibold text-gray-900">{selectedProject.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-weather-teal mt-1" />
                    <div>
                      <span className="text-gray-500 text-sm font-medium">Completion Time</span>
                      <p className="font-semibold text-gray-900">{selectedProject.completionTime}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 col-span-2 md:col-span-1">
                    <Award className="w-5 h-5 text-weather-teal mt-1" />
                    <div>
                      <span className="text-gray-500 text-sm font-medium">Category</span>
                      <p className="font-semibold text-gray-900">{selectedProject.category}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => window.location.href = 'https://your-n8n-form-url.com'}
                    className="flex-1 bg-gradient-to-r from-weather-teal to-weather-blue text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Request Similar Work
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 hover:border-weather-teal hover:text-weather-teal transition-all duration-300"
                  >
                    Close Gallery
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}