import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const partnerLogos = [
  { name: 'Pligence', src: 'https://placehold.co/64x32?text=Logo' },
  { name: 'Selteq', src: 'https://placehold.co/64x32?text=Logo' },
  { name: 'Inova Bridge',src: 'https://placehold.co/64x32?text=Logo' },
  { name: 'IRIS AI', src: 'https://placehold.co/64x32?text=Logo' },
  { name: 'LMNTRIX', src: 'https://placehold.co/64x32?text=Logo' },
  { name: 'Birdy', src: 'https://placehold.co/64x32?text=Logo' },
];

export default function ContactShowcase() {
  return (
    <section className="w-full mx-auto py-16 px-4 sm:px-8">
      <div className="text-xl font-semibold tracking-wider text-gray-500 mb-6">/CONTACT US</div>
      
      {/* Main CTA Card */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg mb-16 flex items-stretch min-h-[260px]">
        {/* Background image */}
        <Image
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
          alt="Contact background"
          width={800}
          height={400}
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900/60 z-10" />
        {/* Content */}
        <div className="relative z-20 flex flex-col justify-center p-10 sm:p-16 w-full max-w-2xl">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-light text-gray-400 mb-2 leading-tight">
            Let&apos;s Build & Innovate <br />
            <span className="font-bold text-white">The Future Together</span>
          </h2>
          <p className="text-gray-200 text-base sm:text-lg mb-6 max-w-xl">
            Combining cutting-edge technology with innovative solutions, we deliver comprehensive digital transformations, specializing in AI integration, cloud architecture, and enterprise software development.
          </p>
          <Link href="/contact-us" className="w-fit px-7 py-3 rounded-lg font-semibold shadow transition bg-[#A084FE] hover:bg-[#8B6FE0] text-white text-base sm:text-lg">
            Start Your Project
          </Link>
        </div>
      </div>

      {/* Trusted Partners Section */}
      <div className="relative w-full bg-[#f8f7fc] shadow rounded-l-[24px] sm:rounded-l-[48px] flex flex-col sm:flex-row items-start sm:items-center py-4 sm:py-7 px-4 sm:px-6 mb-8 sm:mb-12 overflow-hidden">
        {/* Left gradient fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-8 sm:w-16 z-20" style={{background: 'linear-gradient(to right, #f8f7fc 80%, transparent 100%)'}} />
        {/* Right gradient fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-8 sm:w-16 z-20" style={{background: 'linear-gradient(to left, #f8f7fc 80%, transparent 100%)'}} />
        <span className="text-sm sm:text-base text-gray-400 font-semibold mb-4 sm:mb-0 sm:mr-10 whitespace-nowrap z-10 px-2">/500+ CLIENTS SERVED</span>
        <div className="relative flex-1 overflow-hidden w-full">
          <div className="flex items-center gap-8 sm:gap-16 min-w-max animate-slide-infinite" style={{ animation: 'slide-infinite 30s linear infinite' }}>
            {partnerLogos.concat(partnerLogos).map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center transition-transform duration-300 opacity-80 hover:scale-110 hover:opacity-100 mx-1 sm:mx-2"
                style={{ minWidth: '60px', maxWidth: '200px' }}
              >
                <span className="text-base font-medium tracking-wide text-gray-600 hover:text-[#A084FE] transition-colors duration-300">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>    </section>
  );
} 