'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { caseStudies } from '../data/caseStudies';

export default function CaseStudies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(caseStudies.map(study => study.category))];

  const filteredStudies = caseStudies.filter(study => {
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || study.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-28 bg-[var(--color-primary)] text-white">
        <div className="relative z-10 max-w-3xl mx-auto px-4 flex flex-col items-center text-center gap-8">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">Case Studies</h1>
          <p className="text-lg md:text-xl font-light opacity-80">Discover how we've helped businesses transform and achieve remarkable results</p>
          <div className="flex flex-col md:flex-row gap-4 w-full justify-center">
            <input
              type="text"
              placeholder="Search case studies..."
              className="w-full md:w-72 px-4 py-3 rounded-lg bg-white/90 text-gray-900 placeholder-gray-400 border-none focus:ring-2 focus:ring-white focus:outline-none transition"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="w-full md:w-48 px-4 py-3 rounded-lg bg-white/90 text-gray-900 border-none focus:ring-2 focus:ring-white focus:outline-none transition"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredStudies.map((study) => (
            <div key={study.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow p-8 flex flex-col gap-4 min-h-[340px]">
              <div className="flex flex-col gap-2 mb-2">
                <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide">{study.category}</span>
                <span className="text-xs text-gray-400">{study.duration}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{study.title}</h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{study.description}</p>
              <div className="flex-1" />
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-gray-400">Client: {study.client}</span>
                <Link 
                  href={`/case-studies/${study.id}`}
                  className="px-4 py-2 rounded-lg border border-[var(--color-primary)] text-[var(--color-primary)] font-medium text-sm bg-transparent hover:bg-[var(--color-primary)] hover:text-white transition-colors"
                >
                  Read Case Study
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto px-4 text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-500 mb-4">Let's discuss how we can help you achieve similar results for your business</p>
          <Link
            href="/contact-us"
            className="inline-block px-8 py-3 rounded-lg text-lg font-semibold bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition-colors shadow-sm"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
} 