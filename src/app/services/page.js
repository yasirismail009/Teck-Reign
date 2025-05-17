'use client';

import React from 'react';
import Link from 'next/link';

const servicesData = [
  {
    title: "Software Development",
    description: "Transform your ideas into powerful digital solutions with our comprehensive software development services.",
    icon: "💻",
    link: "/services/software-development",
    features: [
      "Web Development",
      "Mobile App Development",
      "Custom Software Solutions",
      "API Development",
    ]
  },
  {
    title: "Digital Marketing",
    description: "Boost your online presence and drive growth with our data-driven digital marketing strategies.",
    icon: "📱",
    link: "/services/digital-marketing",
    features: [
      "SEO Optimization",
      "Social Media Marketing",
      "Content Marketing",
      "PPC Advertising"
    ]
  },
  {
    title: "Design & UX",
    description: "Create exceptional user experiences with our comprehensive design services.",
    icon: "🎨",
    link: "/services/design-ux",
    features: [
      "UI/UX Design",
      "Brand Identity",
      "Web Design",
      "Mobile App Design"
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business grow and succeed in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Link 
              key={index}
              href={service.link}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 h-full">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-[#8958FE] transition-colors">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 mr-2 text-[#8958FE]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-[#8958FE] font-semibold group-hover:underline">
                  Learn more →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <a
            href="/contact-us"
            className="inline-block px-8 py-4 bg-[#8958FE] text-white rounded-lg font-semibold hover:bg-[#7B4FE0] transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
} 