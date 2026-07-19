'use client'
import React from 'react';
import Link from 'next/link';

export default function WorkTogetherPage() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#F9F9FB] py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-4">How We Partner With You</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Collaborative engagements that turn your challenges into tailored technology solutions—with planning, delivery, and support included.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
            <p className="text-gray-600 mb-6">
              We work as partners: we learn your goals and constraints first, then design and deliver solutions that fit your business—not a one-size template.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#8958FE] mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Strategic planning</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#8958FE] mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Custom solutions</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#8958FE] mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Ongoing support</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Why Teams Choose TekReign</h2>
            <p className="text-gray-600 mb-6">
              Years of delivery experience and a track record of shipping work that meets real project goals—not just demos.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#8958FE] mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Experienced team</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#8958FE] mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Proven project results</span>
              </li>
              <li className="flex items-start">
                <svg className="w-6 h-6 text-[#8958FE] mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Dedicated support</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link
            href="/contact-us"
            className="inline-block bg-[#8958FE] hover:bg-[#6C3DFE] text-white font-semibold rounded-lg px-8 py-3 transition-all text-base shadow"
          >
            Start a conversation
          </Link>
        </div>
      </div>
    </div>
  );
}
