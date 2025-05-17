import React from 'react';
import Image from 'next/image';

const features = [
  {
    icon: (
      <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#A084FE"/><path d="M10 16l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    label: 'Strategic Excellence',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="#A084FE"/><path d="M16 8v8l6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    label: 'Creative Solutions',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="32" height="32" rx="16" fill="#A084FE"/><path d="M10 22V10h12v12H10z" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/></svg>
    ),
    label: 'Financial Expertise',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#A084FE"/><path d="M8 16h16M16 8v16" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    label: 'Comprehensive Service',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="16" cy="16" r="16" fill="#A084FE"/><path d="M10 16l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    label: 'Transparency & Partnership',
  },
];

const clientLogos = [
  { name: 'Pligence', src: 'https://placehold.co/64x32?text=Logo', alt: 'Pligence company logo' },
  { name: 'Selteq', src: 'https://placehold.co/64x32?text=Logo', alt: 'Selteq company logo' },
  { name: 'Inova Bridge', src: 'https://placehold.co/64x32?text=Logo', alt: 'Inova Bridge company logo' },
  { name: 'IRIS AI', src: 'https://placehold.co/64x32?text=Logo', alt: 'IRIS AI company logo' },
  { name: 'LMNTRIX', src: 'https://placehold.co/64x32?text=Logo', alt: 'LMNTRIX company logo' },
  { name: 'Birdy', src: 'https://placehold.co/64x32?text=Logo', alt: 'Birdy company logo' },
];

export default function AboutUs() {
  return (
    <section className="w-full mx-auto py-16 sm:py-16 px-4 sm:px-8" aria-label="About us">
      <div className="text-lg sm:text-xl font-semibold tracking-wider text-gray-500 mb-4 sm:mb-6">/ABOUT US</div>
      <div className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light text-gray-400 mb-2 leading-tight">
          TeckReign is a <span className="font-bold text-gray-900">Next-Generation Technology Agency</span> founded to <span className="font-bold text-gray-900">Pioneer a New Era of Digital Innovation</span>, as it broadly combines all the skills, talents and tools used by <span className="font-bold text-gray-900">Modern Technology Systems</span>, & modern or renewed brands.
        </h2>
      </div>
      <div className="flex overflow-x-auto lg:flex-row md:flex-row sm:flex-col flex-col justify-start sm:justify-between items-center gap-4 sm:gap-8 mb-8 sm:mb-16 px-2 scrollbar-hide" role="list" aria-label="Our key features">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center sm:py-4 lg:py-0 lg:min-w-[120px] md:min-w-[120px] sm:min-w-full w-full" role="listitem">
            <div className="mb-2 transform lg:scale-75 md:scale-75 sm:scale-100 scale-100" aria-hidden="true">{feature.icon}</div>
            <span className="text-xs sm:text-sm font-semibold text-[#A084FE] text-center whitespace-nowrap">{feature.label}</span>
          </div>
        ))}
      </div>
      {/* Client Slider Section */}
      <div className="relative w-full bg-[#f8f7fc] shadow rounded-l-[24px] sm:rounded-l-[48px] flex flex-col sm:flex-row items-start sm:items-center py-4 sm:py-7 px-4 sm:px-6 mb-8 sm:mb-12 overflow-hidden">
        {/* Left gradient fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-8 sm:w-16 z-20" style={{background: 'linear-gradient(to right, #f8f7fc 80%, transparent 100%)'}} aria-hidden="true" />
        {/* Right gradient fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-8 sm:w-16 z-20" style={{background: 'linear-gradient(to left, #f8f7fc 80%, transparent 100%)'}} aria-hidden="true" />
        <h3 className="text-sm sm:text-base text-gray-400 font-semibold mb-4 sm:mb-0 sm:mr-10 whitespace-nowrap z-10">/500+ CLIENTS SERVED</h3>
        <div className="relative flex-1 overflow-hidden w-full">
          <div className="flex items-center gap-8 sm:gap-16 min-w-max animate-slide-infinite" style={{ animation: 'slide-infinite 30s linear infinite' }} role="list" aria-label="Our clients">
            {clientLogos.concat(clientLogos).map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center transition-transform duration-300 opacity-80 hover:scale-110 hover:opacity-100 mx-1 sm:mx-2"
                style={{ minWidth: '60px', maxWidth: '200px' }}
                role="listitem"
              >
                <span className="text-base font-medium tracking-wide text-gray-600 hover:text-[#A084FE] transition-colors duration-300">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 