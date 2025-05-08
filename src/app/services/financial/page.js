'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    title: 'Investor Relations',
    description: 'Strategic investor communication and relationship management to maximize shareholder value.',
    icon: '💼',
    features: [
      'Investor Communications',
      'Shareholder Meetings',
      'Financial Reporting',
      'Market Analysis',
      'Stakeholder Engagement'
    ]
  },
  {
    title: 'Rights Issues',
    description: 'Expert management of rights offerings and capital raising initiatives.',
    icon: '📈',
    features: [
      'Issue Planning',
      'Documentation',
      'Regulatory Compliance',
      'Investor Communication',
      'Execution Support'
    ]
  },
  {
    title: 'Mergers & Acquisitions',
    description: 'Comprehensive support for M&A transactions and corporate restructuring.',
    icon: '🤝',
    features: [
      'Deal Strategy',
      'Due Diligence',
      'Valuation Analysis',
      'Integration Planning',
      'Stakeholder Management'
    ]
  },
  {
    title: 'IPO Communications',
    description: 'Strategic communication support for initial public offerings and market listings.',
    icon: '📊',
    features: [
      'IPO Strategy',
      'Roadshow Support',
      'Media Relations',
      'Investor Education',
      'Market Positioning'
    ]
  },
  {
    title: 'Funds Management',
    description: 'Expert management and communication for investment funds and portfolios.',
    icon: '💰',
    features: [
      'Fund Strategy',
      'Performance Reporting',
      'Investor Relations',
      'Risk Management',
      'Compliance Support'
    ]
  },
  {
    title: 'Bonds Issuances',
    description: 'Comprehensive support for bond offerings and debt capital markets.',
    icon: '📜',
    features: [
      'Issue Planning',
      'Documentation',
      'Investor Relations',
      'Market Analysis',
      'Compliance Support'
    ]
  },
  {
    title: 'Financial Analysis',
    description: 'In-depth financial analysis and strategic insights for informed decision-making.',
    icon: '📊',
    features: [
      'Market Analysis',
      'Performance Metrics',
      'Risk Assessment',
      'Strategic Planning',
      'Investment Research'
    ]
  },
  {
    title: 'Regulatory Compliance',
    description: 'Expert guidance on financial regulations and compliance requirements.',
    icon: '⚖️',
    features: [
      'Compliance Strategy',
      'Regulatory Reporting',
      'Risk Assessment',
      'Policy Development',
      'Audit Support'
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

export default function FinancialServicesPage() {
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
            Financial Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Expert financial communication and advisory services to support your capital markets activities
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
            <h2 className="text-2xl font-bold mb-4">Ready to Optimize Your Financial Strategy?</h2>
            <p className="mb-6">Let&apos;s discuss how our financial services can help achieve your capital markets objectives.</p>
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