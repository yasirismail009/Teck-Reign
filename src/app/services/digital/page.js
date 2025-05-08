'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    title: 'SEO & PPC',
    description: 'Comprehensive search engine optimization and pay-per-click advertising strategies to increase your online visibility.',
    icon: '🔍',
    features: [
      'Keyword Research',
      'On-Page SEO',
      'Technical SEO',
      'PPC Campaigns',
      'Performance Analytics'
    ]
  },
  {
    title: 'Content Marketing',
    description: 'Strategic content creation and distribution to engage your audience and drive business growth.',
    icon: '📝',
    features: [
      'Content Strategy',
      'Blog Writing',
      'Social Media Content',
      'Email Marketing',
      'Content Distribution'
    ]
  },
  {
    title: 'E-Commerce Solutions',
    description: 'End-to-end e-commerce development and optimization to maximize your online sales.',
    icon: '🛍️',
    features: [
      'Platform Development',
      'Payment Integration',
      'Inventory Management',
      'User Experience',
      'Analytics & Reporting'
    ]
  },
  {
    title: 'Tech Integration',
    description: 'Seamless integration of modern technologies to enhance your business operations.',
    icon: '⚙️',
    features: [
      'API Development',
      'System Integration',
      'Cloud Solutions',
      'Automation',
      'Security Implementation'
    ]
  },
  {
    title: 'Social Media Management',
    description: 'Comprehensive social media strategies to build your brand presence and engage with your audience.',
    icon: '📱',
    features: [
      'Platform Management',
      'Content Calendar',
      'Community Engagement',
      'Analytics & Reporting',
      'Campaign Strategy'
    ]
  }
];

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="text-4xl mb-4">{service.icon}</div>
      <h3 className="text-2xl font-bold mb-3 text-gray-800">{service.title}</h3>
      <p className="text-gray-600 mb-4">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <span className="mr-2">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default function DigitalServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4"
          >
            Digital Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Transform your digital presence with our comprehensive suite of digital marketing and technology solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#8958FE] text-white rounded-lg p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Ready to Go Digital?</h2>
            <p className="mb-6">Let&apos;s discuss how our digital services can help grow your online presence.</p>
            <Link
              href="/contact-us"
              className="inline-block bg-white text-[#8958FE] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 