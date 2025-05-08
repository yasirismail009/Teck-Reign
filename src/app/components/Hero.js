import React from 'react';

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center mb-16 relative">
      <h1 className="mb-3">
        <span className="block text-3xl sm:text-5xl md:text-6xl font-light text-gray-400" style={{ letterSpacing: '-0.02em' }}>
          Your Global Partner
        </span>
        <span className="block text-4xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mt-1" style={{ letterSpacing: '-0.03em' }}>
          for Creative Solutions
        </span>
      </h1>
      <p className="max-w-2xl text-base sm:text-lg text-gray-400 mb-8">
        Blending innovative digital strategies with traditional approaches, Boxes deliver comprehensive solutions, particularly excelling in financial communications and strategic public relations.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <button className="px-8 py-3 rounded-lg font-semibold shadow transition bg-violet-500 hover:bg-violet-600 text-white text-base sm:text-lg">
          Contact Us
        </button>
        <a href="#" className="font-bold flex items-center gap-1 text-gray-900 hover:underline text-base sm:text-lg">
          Case Studies <span className="text-lg">↗</span>
        </a>
      </div>
    </section>
  );
} 