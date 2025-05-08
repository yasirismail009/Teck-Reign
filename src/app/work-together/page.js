'use client'
import React from 'react';
import Link from 'next/link';

export default function WorkTogetherPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#F9F9FB] py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-8">Let&apos;s Work Together</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
            <p className="text-gray-600 mb-6">
              We believe in collaborative partnerships that drive innovation and growth. Our team works closely with you to understand your unique challenges and deliver tailored solutions.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#8958FE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Strategic Planning</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#8958FE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Custom Solutions</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#8958FE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Ongoing Support</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 mb-6">
              With years of experience and a proven track record, we&apos;re committed to delivering excellence in every project.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#8958FE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Expert Team</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#8958FE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Proven Results</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#8958FE] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Dedicated Support</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link
            href="/contact-us"
            className="inline-block bg-[#8958FE] hover:bg-[#6C3DFE] text-white font-semibold rounded-lg px-8 py-3 transition-all text-base shadow"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
} 