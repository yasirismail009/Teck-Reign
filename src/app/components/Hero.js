"use client"
import Link from 'next/link';
import React from 'react';

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center mb-16 relative" >
      <h1 className="mb-3">
        <span className="block text-3xl sm:text-5xl md:text-6xl font-light text-gray-400" style={{ letterSpacing: '-0.02em' }}>
          Transforming Ideas into
        </span>
        <span className="block text-4xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mt-1" style={{ letterSpacing: '-0.03em' }}>
          Digital Innovation
        </span>
      </h1>
      <p className="max-w-2xl text-base sm:text-lg text-gray-400 mb-8">
        We build cutting-edge software solutions that drive business growth. From AI-powered applications to scalable cloud infrastructure, we help companies navigate the digital landscape with confidence.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <button onClick={() => window.location.href = '/contact-us'} className="px-8 py-3 rounded-lg font-semibold shadow transition bg-violet-500 hover:bg-violet-600 text-white text-base sm:text-lg">
          Start Your Project
        </button>
        <Link href="/case-studies" className="font-bold flex items-center gap-1 text-gray-900 hover:underline text-base sm:text-lg">
          View Our Tech Stack <span className="text-lg">↗</span>
        </Link>
      </div>
    </section>
  );
} 