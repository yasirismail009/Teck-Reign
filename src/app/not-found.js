import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: '404 - Page Not Found | TeckReign',
  description: 'The page you are looking for could not be found. Return to TeckReign homepage for innovative technology solutions.',
};

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-8 py-16 relative">
      {/* Background overlay */}
      <div className="absolute inset-0 z-0" aria-hidden="true"></div>
      
      {/* Main content */}
      <div className="text-center max-w-3xl mx-auto relative z-10">
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold text-[#8958FE] mb-6">
          404
        </h1>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-400 mb-4">
          Oops! Page Not Found
        </h2>
        
        <p className="text-base sm:text-lg text-gray-500 mb-8 max-w-xl mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Decorative elements */}
        <div className="relative mb-12">
          <div className="absolute -left-4 -top-4 w-8 h-8 rounded-full bg-[#8958FE]/10" aria-hidden="true"></div>
          <div className="absolute -right-4 -bottom-4 w-8 h-8 rounded-full bg-[#8958FE]/10" aria-hidden="true"></div>
          <div className="w-16 h-16 mx-auto rounded-full bg-[#8958FE]/5 flex items-center justify-center">
            <svg 
              className="w-8 h-8 text-[#8958FE]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <Link 
            href="/"
            className="px-8 py-3 rounded-lg font-semibold shadow transition bg-[#8958FE] hover:bg-[#7a4adf] text-white text-base sm:text-lg"
          >
            Return Home
          </Link>
          <Link 
            href="/contact-us"
            className="font-bold flex items-center gap-1 text-gray-900 hover:underline text-base sm:text-lg"
          >
            Contact Support <span className="text-lg" aria-hidden="true">↗</span>
          </Link>
        </div>

        {/* Additional help text */}
        <p className="mt-8 text-sm text-gray-400">
          Need help? Our team is here to assist you.
        </p>
      </div>

      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#8958FE" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
} 