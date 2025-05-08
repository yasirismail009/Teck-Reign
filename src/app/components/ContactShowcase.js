import React from 'react';
import Image from 'next/image';

const partnerLogos = [
  { name: 'SquareStone', src: '/vercel.svg' },
  { name: 'VERTEX', src: '/next.svg' },
  { name: 'Natroma', src: '/globe.svg' },
  { name: 'martino', src: '/window.svg' },
  { name: 'VIA', src: '/file.svg' },
  ...Array.from({ length: 5 }, (_, i) => ({
    name: `Partner ${i + 1}`,
    src: 'https://placehold.co/64x32?text=Logo',
    dummy: true,
  })),
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
            Let&apos;s Collaborate & Create <br />
            <span className="font-bold text-gray-900">Something Amazing</span>
          </h2>
          <p className="text-gray-200 text-base sm:text-lg mb-6 max-w-xl">
            Blending innovative digital strategies with traditional approaches, Boxes deliver comprehensive solutions, particularly excelling in financial communications and strategic public relations.
          </p>
          <button className="w-fit px-7 py-3 rounded-lg font-semibold shadow transition bg-[#A084FE] hover:bg-[#8B6FE0] text-white text-base sm:text-lg">
            Contact Us
          </button>
        </div>
      </div>

      {/* Trusted Partners Section */}
      <div className="relative w-full bg-[#f8f7fc] shadow rounded-l-[48px] flex items-center py-7 px-6 overflow-hidden">
        {/* Left gradient fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-20" style={{background: 'linear-gradient(to right, #f8f7fc 80%, transparent 100%)'}} />
        {/* Right gradient fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-20" style={{background: 'linear-gradient(to left, #f8f7fc 80%, transparent 100%)'}} />
        
        <span className="text-gray-400 text-base font-semibold mr-10 whitespace-nowrap z-10">/TRUSTED PARTNERS</span>
        
        <div className="relative flex-1 overflow-hidden">
          <div className="flex items-center gap-16 min-w-max animate-slide-infinite" style={{ animation: 'slide-infinite 30s linear infinite' }}>
            {partnerLogos.concat(partnerLogos).map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center transition-transform duration-300 opacity-80 grayscale hover:scale-110 hover:opacity-100 hover:grayscale-0 mx-2 drop-shadow-md"
                style={{ minWidth: 90 }}
              >
                <Image 
                  src={logo.src} 
                  alt={logo.name} 
                  width={90}
                  height={48}
                  className="h-12 w-auto object-contain rounded-md bg-white p-1 shadow-sm" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 