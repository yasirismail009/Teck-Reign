'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { caseStudies } from '../data/caseStudies';
import PlaceholderImage from '../components/PlaceholderImage';

export default function CaseStudies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = ['All', ...new Set(caseStudies.map(study => study.category))];

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || study.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
          <p className="text-gray-600">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-28 bg-[var(--color-primary)] text-white overflow-hidden">
        <div className="absolute inset-0  from-[var(--color-primary)] to-[var(--color-primary-dark)] opacity-90" />
        <div className="relative max-w-3xl mx-auto px-4 flex flex-col items-center text-center gap-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            Case Studies
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-light opacity-80"
          >
            Discover how we&apos;ve helped businesses transform and achieve remarkable results
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4 w-full justify-center"
          >
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search case studies..."
                className="w-full px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-400 border-none focus:ring-2 focus:ring-white focus:outline-none transition pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <select
              className="w-full md:w-48 px-4 py-3 rounded-lg bg-white/90 text-gray-900 border-none focus:ring-2 focus:ring-white focus:outline-none transition"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm p-8 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : (
          <AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredStudies.map((study) => (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-4 min-h-[340px] group"
                >
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <div className="w-full h-full">
                      <PlaceholderImage 
                        category={study.category}
                        title={study.title}
                      />
                    </div>
                  </div>
                  <div className="px-8">
                  <div className="flex flex-col gap-2 mb-2">
                    <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide">{study.category}</span>
                    <span className="text-xs text-gray-400">{study.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{study.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{study.description}</p>
                  <div className="flex-1" />
                  <div className="flex flex-col gap-3 mb-8">
                    <div className="flex flex-wrap gap-2">
                      {study.results.slice(0, 2).map((result, index) => (
                        <span key={index} className="px-2 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs rounded-full">
                          {result}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-400">Client: {study.client}</span>
                      <Link 
                        href={`/case-studies/${study.id}`}
                        className="px-4 py-2 rounded-lg border border-[var(--color-primary)] text-[var(--color-primary)] font-medium text-sm bg-transparent hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                      >
                        View Case Study
                      </Link>
                    </div>
                  </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        )}
        
        {!isLoading && filteredStudies.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">No case studies found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-20 from-white to-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto px-4 text-center flex flex-col items-center gap-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-500 mb-4"
          >
            Let&apos;s discuss how we can help you achieve similar results for your business
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/contact-us"
              className="inline-block px-8 py-3 rounded-lg text-lg font-semibold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition-colors shadow-sm hover:shadow-md"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 