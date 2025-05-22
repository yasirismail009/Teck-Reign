'use client';

import React from 'react';
import Image from 'next/image';
import TechCircuitSVG from './TechCircuitSVG';

const fadeOverlay = (
  // Subtle white fade at the very bottom only
  <div className="absolute left-0 bottom-0 w-full h-8 pointer-events-none z-20" style={{background: 'linear-gradient(to top, #fff 80%, transparent 100%)'}} />
);

// SVG Notched Card Wrapper
const NotchedCard = ({ children, className = '', style = {}, ...props }) => (
  <div className={`relative overflow-hidden ${className}`} style={style} {...props}>
    <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 400 600" preserveAspectRatio="none" style={{ pointerEvents: 'none' }}>
      <path d="M32,0 H400 V600 H0 V32 Q0,0 32,0 Z" fill="currentColor" />
    </svg>
    <div className="relative z-10 h-full w-full">{children}</div>
  </div>
);

// SVG Notched Card Wrapper (Top-Right Notch)
const NotchedCardTR = ({ children, className = '', style = {}, ...props }) => (
  <div className={`relative overflow-hidden ${className}`} style={style} {...props}>
    <svg className="absolute inset-0 w-full h-full z-0" viewBox="0 0 400 600" preserveAspectRatio="none" style={{ pointerEvents: 'none' }}>
      <path d="M0,0 H368 Q400,0 400,32 V600 H0 Z" fill="currentColor" />
    </svg>
    <div className="relative z-10 h-full w-full">{children}</div>
  </div>
);

const FinancialServicesCard = () => (
  <div
    className="rounded-[32px] flex flex-col justify-between px-8 py-10 shadow-lg overflow-hidden"
    style={{
      background: '#8958FE',
      gridColumn: '1 / 2',
      gridRow: '1 / 3',
    }}
  >
    <div>
      <h2 className="text-white font-bold text-[2.3rem] leading-tight mb-8">Tech Services</h2>
      <div className="relative h-[180px] mb-8" role="list" aria-label="Technology services">
        {/* Staggered, overlapping chips */}
        <span className="absolute left-0 top-0 bg-white text-[#8958FE] rounded-full px-5 py-2 font-semibold text-base shadow-md w-fit whitespace-nowrap overflow-hidden text-ellipsis rotate-[-10deg]" role="listitem">Cloud Solutions</span>
        <span className="absolute left-[120px] top-[30px] bg-white text-[#8958FE] rounded-full px-5 py-2 font-semibold text-base shadow-md w-fit whitespace-nowrap overflow-hidden text-ellipsis rotate-[8deg]" role="listitem">AI Development</span>
        <span className="absolute left-[10px] top-[60px] bg-white text-[#8958FE] rounded-full px-5 py-2 font-semibold text-base shadow-md w-fit whitespace-nowrap overflow-hidden text-ellipsis rotate-[-5deg]" role="listitem">Web Development</span>
        <span className="absolute left-[160px] top-[80px] bg-white text-[#8958FE] rounded-full px-5 py-2 font-semibold text-base shadow-md w-fit whitespace-nowrap overflow-hidden text-ellipsis rotate-[12deg]" role="listitem">Mobile Apps</span>
        <span className="absolute left-[60px] top-[110px] bg-white text-[#8958FE] rounded-full px-5 py-2 font-semibold text-base shadow-md w-fit whitespace-nowrap overflow-hidden text-ellipsis rotate-[-7deg]" role="listitem">DevOps</span>
        <span className="absolute left-[200px] top-[130px] bg-white text-[#8958FE] rounded-full px-5 py-2 font-semibold text-base shadow-md w-fit whitespace-nowrap overflow-hidden text-ellipsis rotate-[6deg]" role="listitem">UI/UX Design</span>
        <span className="absolute left-[20px] top-[150px] bg-white text-[#8958FE] rounded-full px-5 py-2 font-semibold text-base shadow-md w-fit whitespace-nowrap overflow-hidden text-ellipsis rotate-[-8deg]" role="listitem">Cybersecurity</span>
        <span className="absolute left-[180px] top-[160px] bg-white text-[#8958FE] rounded-full px-5 py-2 font-semibold text-base shadow-md w-fit whitespace-nowrap overflow-hidden text-ellipsis rotate-[10deg]" role="listitem">Data Analytics</span>
      </div>
    </div>
    <div className="mt-auto">
      <span className="block text-white text-[3.5rem] font-extrabold leading-none mb-2">120+</span>
      <span className="block text-white text-lg opacity-90">Capital Market Projects</span>
    </div>
  </div>
);

const ClientsServedCard = () => (
  <div
    className="rounded-[32px] bg-white shadow-lg flex flex-col justify-between p-0 overflow-hidden"
    style={{
      gridColumn: '2 / 3',
      gridRow: '1 / 3',
    }}
  >
    {/* Image with badge */}
    <div className="relative w-full h-[120px] rounded-t-[32px] overflow-hidden">
      <TechCircuitSVG className="w-full h-full" width={350} height={350} aria-label="Technology circuit pattern"/>
      <div className="absolute top-3 right-5 text-xs text-white bg-[#888]/80 px-4 py-1 rounded-full tracking-wide font-semibold">2024 - 2025</div>
    </div>
    {/* Main Stat */}
    <div className="flex flex-col items-center justify-center flex-1 py-6">
      <span className="text-[#8958FE] text-[3.2rem] font-extrabold leading-none mb-2">500+</span>
      <span className="text-[#8958FE] text-lg opacity-70 mb-8 font-semibold">Clients Served</span>
      {/* Info Box */}
      <div className="rounded-2xl p-5 w-full max-w-[220px] mx-auto mt-4 bg-[#8958FE] text-white shadow-lg">
        <h3 className="font-semibold text-base mb-2">Our Impact</h3>
        <div className="flex flex-col gap-1 text-sm">
          <span className="opacity-90"><b className="text-white text-lg">200+</b> Strategic Campaigns</span>
          <span className="opacity-90"><b className="text-white text-lg">7+</b> Years of Excellence</span>
          <span className="opacity-90"><b className="text-white text-lg">50+</b> Industries Served</span>
        </div>
      </div>
    </div>
  </div>
);

const StrategicServicesCard = () => (
  <div
    className="rounded-[32px] flex flex-col justify-between px-8 py-10 shadow-lg overflow-hidden"
    style={{
      background: '#6EE0F6',
      gridColumn: '3 / 4',
      gridRow: '1 / 2',
    }}
  >
    <div>
      <h3 className="font-bold text-xl text-[#222] mb-7">Strategic Services</h3>
     
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/20 rounded-lg p-3">
          <span className="block text-2xl font-bold mb-1">300+</span>
          <span className="text-sm text-[#222] font-semibold">Marketing Campaigns</span>
        </div>
        <div className="bg-white/20 rounded-lg p-3">
          <span className="block text-2xl font-bold mb-1 ">95%</span>
          <span className="text-sm text-[#222] font-semibold">Client Satisfaction</span>
        </div>
      </div>
    </div>
  </div>
);

const DigitalServicesCard = () => (
  <div
    className="rounded-[32px] bg-white shadow-lg flex flex-col items-center justify-center px-8 py-10 text-center overflow-hidden relative"
    style={{
      gridColumn: '4 / 5',
      gridRow: '1 / 2',
    }}
  >
    {/* Decorative background pattern */}
    <div className="absolute inset-0 opacity-5">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#8958FE" strokeWidth="0.5"/>
        </pattern>
        <rect width="100" height="100" fill="url(#grid)" />
      </svg>
    </div>

    <div className="flex flex-col items-center justify-center w-full relative z-10">
      <span className="font-bold text-2xl text-[#222] mb-6 relative">
        Digital Services
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-[#8958FE] rounded-full"></div>
      </span>
     
      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="bg-[#8958FE] rounded-lg p-4 transform hover:scale-105 transition-transform duration-300 shadow-lg">
          <span className="block text-2xl font-bold mb-1 text-white">15+</span>
          <span className="text-sm text-white/90">Programming Languages</span>
        </div>
        <div className="bg-[#8958FE] rounded-lg p-4 transform hover:scale-105 transition-transform duration-300 shadow-lg">
          <span className="block text-2xl font-bold mb-1 text-white">25+</span>
          <span className="text-sm text-white/90">Tech Experts</span>
        </div>
      </div>
    </div>
  </div>
);

const InnovationCard = () => (
  <div
    className="relative rounded-[32px] flex flex-col justify-between px-8 py-10 shadow-lg overflow-hidden"
    style={{
      background: '#8958FE',
      gridColumn: '5 / 6',
      gridRow: '1 / 3',
      color: '#fff',
      overflow: 'hidden',
    }}
  >
    {/* Tech Circuit Pattern */}
    <svg className="absolute right-6 top-8 w-20 h-20 z-0 opacity-40" viewBox="0 0 80 80" fill="none">
      <path d="M10 40 L30 40 L30 20 L50 20" stroke="#fff" strokeWidth="2" fill="none" />
      <path d="M50 20 L50 60 L70 60" stroke="#fff" strokeWidth="2" fill="none" />
      <circle cx="30" cy="40" r="4" fill="#fff" />
      <circle cx="50" cy="20" r="4" fill="#fff" />
      <circle cx="50" cy="60" r="4" fill="#fff" />
      <circle cx="70" cy="60" r="4" fill="#fff" />
    </svg>
    <div className="relative z-10">
      <h3 className="font-bold text-xl mb-6">Tech Innovation</h3>
      <div className="flex flex-col items-start justify-center h-full space-y-6">
        <div>
          <span className="text-5xl font-extrabold mb-2 leading-none">99.9<span className="text-3xl align-top">%</span></span>
          <span className="text-base opacity-90 block">System Uptime</span>
        </div>
        <div>
          <span className="text-3xl font-extrabold mb-2 leading-none">50<span className="text-xl align-top">+</span></span>
          <span className="text-base opacity-90 block">Tech Patents</span>
        </div>
        <div>
          <span className="text-3xl font-extrabold mb-2 leading-none">10M<span className="text-xl align-top">+</span></span>
          <span className="text-base opacity-90 block">API Calls/Day</span>
        </div>
        <div>
          <span className="text-3xl font-extrabold mb-2 leading-none">15<span className="text-xl align-top">+</span></span>
          <span className="text-base opacity-90 block">Cloud Regions</span>
        </div>
      </div>
    </div>
  </div>
);

const GlobalReachCard = () => (
  <div
    className="relative rounded-[32px] flex flex-col justify-between px-8 py-10 shadow-lg overflow-hidden"
    style={{
      background: '#8958FE',
      gridColumn: '1 / 3',
      gridRow: '3 / 4',
      color: '#fff',
      overflow: 'hidden',
    }}
  >
    {/* Decorative SVG Pattern */}
    <svg className="absolute right-8 top-10 w-16 h-16 z-0 opacity-30" viewBox="0 0 64 64" fill="none">
      <ellipse cx="32" cy="32" rx="28" ry="16" fill="#fff" />
      <ellipse cx="32" cy="32" rx="18" ry="8" fill="#fff" opacity="0.5" />
    </svg>
    <div className="relative z-10">
      <h3 className="font-bold text-xl mb-7">Global Reach</h3>
      <div className="flex flex-wrap gap-3">
        {['International Markets','Cross-Border Solutions','Global Partnerships','Market Expansion','Cultural Expertise'].map((tag) => (
          <span key={tag} className="bg-white text-[#8958FE] rounded-full px-5 py-2 font-semibold text-base shadow-md w-fit whitespace-nowrap overflow-hidden text-ellipsis">{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

const DigitalTransformationCard = () => (
  <div
    className="relative rounded-[32px] flex flex-col justify-between px-8 py-10 shadow-lg overflow-hidden"
    style={{
      background: '#222',
      gridColumn: '3 / 4',
      gridRow: '2 / 4',
      color: '#fff',
    }}
  >
    <div className="relative z-10">
      <h3 className="font-bold text-2xl mb-6">Digital Services</h3>
      <div className="flex flex-wrap gap-3 mb-8">
        {['SEO & PPC','Content Marketing','E-Commerce','Tech Integration','Social Media'].map((tag) => (
          <span key={tag} className="bg-white text-[#222] rounded-full px-4 py-1 font-semibold text-base shadow-md w-fit whitespace-nowrap overflow-hidden text-ellipsis">{tag}</span>
        ))}
      </div>
      <div className="mt-auto">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <span className="block text-3xl font-bold mb-1">85%</span>
            <span className="text-sm opacity-80">Client Retention</span>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <span className="block text-3xl font-bold mb-1">200+</span>
            <span className="text-sm opacity-80">Digital Projects</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TeamCultureCard = () => (
  <div
    className="relative rounded-[32px] flex flex-col justify-between px-8 py-10 shadow-lg overflow-hidden"
    style={{
      background: '#222',
      gridColumn: '4 / 5',
      gridRow: '2 / 4',
      color: '#fff',
    }}
  >
    <div className="relative z-10">
      <h3 className="font-bold text-2xl mb-6">Strategic Services
      </h3>
      <div className="flex flex-wrap gap-3 mb-8">
        {['Crisis Management','Reputation Management','Media Relations','Public Relations','Advertising'].map((tag) => (
          <span key={tag} className="bg-white text-[#222] rounded-full px-4 py-1 font-semibold text-base shadow-md w-fit whitespace-nowrap overflow-hidden text-ellipsis">{tag}</span>
        ))}
      </div>
      <div className="mt-auto">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <span className="block text-3xl font-bold mb-1">50+</span>
            <span className="text-sm opacity-80">Experts</span>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <span className="block text-3xl font-bold mb-1">15+</span>
            <span className="text-sm opacity-80">Countries</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const GlobalDeliveryCard = () => (
  <div
    className="relative rounded-[32px] flex flex-col justify-end px-0 pb-0 pt-0 overflow-hidden shadow-lg"
    style={{
      background: '#fff',
      gridColumn: '5 / 6',
      gridRow: '3 / 4',
      color: '#222',
    }}
  >
    {/* Globe SVG as background */}
    <div className="w-full h-full relative flex items-center justify-center bg-gray-50">
    <svg className="absolute inset-0 w-full h-full opacity-20 text-[#7e7e7e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
      <div className="relative z-10 w-full flex flex-col items-center justify-center h-full px-4 pb-4 text-center">
        {/* Label and Stats */}
        <span className="block text-xl sm:text-xl font-extrabold text-[#222] mb-4 w-full">Global Delivery</span>
        <div className="flex items-center justify-center gap-2 w-full">
          
          <span className="text-5xl sm:text-4xl text-[#8958FE] font-extrabold drop-shadow-sm w-full">50+ Countries</span>
        </div>
      </div>
    </div>
  </div>
);

export default function ServiceCards() {
  return (
    <section className="py-16 lg:block md:hidden sm:hidden hidden" aria-label="Our services">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <FinancialServicesCard />
        <ClientsServedCard />
        <StrategicServicesCard />
        <DigitalServicesCard />
        <InnovationCard />
        <GlobalReachCard />
        <DigitalTransformationCard />
        <TeamCultureCard />
        <GlobalDeliveryCard />
      </div>
    </section>
  );
} 