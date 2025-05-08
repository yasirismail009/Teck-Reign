'use client';

import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Crisis Management',
    description: 'Expert handling of critical situations with strategic communication and rapid response protocols.',
    icon: '🛡️',
    features: [
      '24/7 Crisis Response',
      'Media Training',
      'Reputation Protection',
      'Stakeholder Communication',
      'Risk Assessment'
    ]
  },
  {
    title: 'Reputation Management',
    description: 'Building and maintaining a strong, positive brand reputation across all channels.',
    icon: '⭐',
    features: [
      'Brand Monitoring',
      'Online Reputation',
      'Media Relations',
      'Stakeholder Engagement',
      'Crisis Prevention'
    ]
  },
  {
    title: 'Media Relations',
    description: 'Strategic media engagement and relationship building with key industry publications.',
    icon: '📰',
    features: [
      'Press Release Strategy',
      'Media Outreach',
      'Interview Preparation',
      'Media Monitoring',
      'Content Distribution'
    ]
  },
  {
    title: 'Public Relations',
    description: 'Comprehensive PR strategies to enhance your brand visibility and credibility.',
    icon: '🎯',
    features: [
      'Strategic Planning',
      'Media Campaigns',
      'Event Management',
      'Community Relations',
      'Industry Positioning'
    ]
  },
  {
    title: 'Advertising',
    description: 'Creative and effective advertising campaigns that resonate with your target audience.',
    icon: '📢',
    features: [
      'Campaign Strategy',
      'Creative Development',
      'Media Planning',
      'Performance Tracking',
      'ROI Analysis'
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

export default function StrategicServicesPage() {
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
            Strategic Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive strategic communication solutions to protect and enhance your brand's reputation
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
            <h2 className="text-2xl font-bold mb-4">Ready to Strengthen Your Strategy?</h2>
            <p className="mb-6">Let's discuss how our strategic services can help protect and grow your brand.</p>
            <a
              href="/contact-us"
              className="inline-block bg-white text-[#8958FE] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 