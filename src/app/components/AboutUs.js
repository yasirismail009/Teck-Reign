import React from 'react';

const features = [
  {
    icon: (
      <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="8" fill="#A084FE"/><path d="M10 16l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    label: 'Strategic Excellence',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#A084FE"/><path d="M16 8v8l6 6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    label: 'Creative Solutions',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" fill="#A084FE"/><path d="M10 22V10h12v12H10z" stroke="#fff" strokeWidth="2" strokeLinejoin="round"/></svg>
    ),
    label: 'Financial Expertise',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="8" fill="#A084FE"/><path d="M8 16h16M16 8v16" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    label: 'Comprehensive Service',
  },
  {
    icon: (
      <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#A084FE"/><path d="M10 16l4 4 8-8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    label: 'Transparency & Partnership',
  },
];

const clientLogos = [
  { name: 'SquareStone', src: 'https://placehold.co/64x32?text=Logo' },
  { name: 'VERTEX', src: 'https://placehold.co/64x32?text=Logo' },
  { name: 'Natroma',src: 'https://placehold.co/64x32?text=Logo' },
  { name: 'martino', src: 'https://placehold.co/64x32?text=Logo' },
  { name: 'VIA', src: 'https://placehold.co/64x32?text=Logo' },
  ...Array.from({ length: 10 }, (_, i) => ({
    name: `DummyCo ${i + 1}`,
    src: 'https://placehold.co/64x32?text=Logo',
    dummy: true,
  })),
];

export default function AboutUs() {
  return (
    <section className="w-full mx-auto py-8 sm:py-16 px-4 sm:px-8">
      <div className="text-lg sm:text-xl font-semibold tracking-wider text-gray-500 mb-4 sm:mb-6">/ABOUT US</div>
      <div className="mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light text-gray-400 mb-2 leading-tight">
          BOXES is a <span className="font-bold text-gray-900">Next-Generation Global Agency</span> founded to <span className="font-bold text-gray-900">Pioneer a New Era of Communications</span>, as it broadly combines all the skills, talents and tools used by <span className="font-bold text-gray-900">Modern Communication Systems</span>, & modern or renewed brands.
        </h2>
      </div>
      <div className="flex overflow-x-auto justify-start sm:justify-between items-center gap-4 sm:gap-8 mb-8 sm:mb-16 px-2 scrollbar-hide">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center min-w-[120px] sm:min-w-[140px]">
            <div className="mb-2 transform scale-75 sm:scale-100">{feature.icon}</div>
            <span className="text-xs sm:text-sm font-semibold text-[#A084FE] text-center whitespace-nowrap">{feature.label}</span>
          </div>
        ))}
      </div>
      {/* Client Slider Section */}
      <div className="relative w-full bg-[#f8f7fc] shadow rounded-l-[24px] sm:rounded-l-[48px] flex flex-col sm:flex-row items-start sm:items-center py-4 sm:py-7 px-4 sm:px-6 mb-8 sm:mb-12 overflow-hidden">
        {/* Left gradient fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-8 sm:w-16 z-20" style={{background: 'linear-gradient(to right, #f8f7fc 80%, transparent 100%)'}} />
        {/* Right gradient fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-8 sm:w-16 z-20" style={{background: 'linear-gradient(to left, #f8f7fc 80%, transparent 100%)'}} />
        <span className="text-sm sm:text-base text-gray-400 font-semibold mb-4 sm:mb-0 sm:mr-10 whitespace-nowrap z-10">/500+ CLIENTS SERVED</span>
        <div className="relative flex-1 overflow-hidden w-full">
          <div className="flex items-center gap-8 sm:gap-16 min-w-max animate-slide-infinite" style={{ animation: 'slide-infinite 30s linear infinite' }}>
            {clientLogos.concat(clientLogos).map((logo, idx) => (
              <div
                key={idx}
                className="flex items-center transition-transform duration-300 opacity-80 grayscale hover:scale-110 hover:opacity-100 hover:grayscale-0 mx-1 sm:mx-2 drop-shadow-md"
                style={{ minWidth: '60px', maxWidth: '90px' }}
              >
                <img src={logo.src} alt={logo.name} className="h-8 sm:h-12 w-auto object-contain rounded-md bg-white p-1 shadow-sm" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 