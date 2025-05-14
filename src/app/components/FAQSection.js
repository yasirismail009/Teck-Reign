'use client'
import React, { useState } from 'react';

const faqs = [
  {
    question: "What technologies does Tech Reign specialize in?",
    answer: "Tech Reign specializes in cutting-edge technologies including AI/ML solutions, cloud computing, blockchain development, and modern web frameworks like React, Next.js, and Node.js. We also excel in DevOps practices and microservices architecture."
  },
  {
    question: "How does Tech Reign approach software development?",
    answer: "We follow agile methodologies and best practices in software development. Our approach includes continuous integration/continuous deployment (CI/CD), test-driven development (TDD), and code reviews. We prioritize scalable, maintainable, and secure code architecture."
  },
  {
    question: "What kind of tech consulting services does Tech Reign offer?",
    answer: "We provide comprehensive tech consulting including digital transformation strategies, cloud migration, cybersecurity assessments, and technology stack optimization. Our team helps businesses modernize their infrastructure and implement cutting-edge solutions."
  },
  {
    question: "How does Tech Reign ensure code quality and security?",
    answer: "We maintain high code quality through automated testing, code linting, and security scanning. Our development process includes regular security audits, penetration testing, and adherence to OWASP security guidelines."
  },
  {
    question: "What cloud platforms does Tech Reign work with?",
    answer: "We are experts in major cloud platforms including AWS, Azure, and Google Cloud Platform. Our team can help with cloud architecture design, migration, optimization, and management of cloud infrastructure."
  },
  {
    question: "How does Tech Reign handle project scalability?",
    answer: "We design systems with scalability in mind from the start. This includes implementing microservices architecture, containerization with Docker and Kubernetes, load balancing, and auto-scaling solutions to ensure your application can handle growth."
  },
  {
    question: "What is Tech Reign's approach to cybersecurity?",
    answer: "We implement a comprehensive security strategy including secure coding practices, regular security audits, penetration testing, and compliance with industry standards. We also provide security training and implement robust authentication and authorization systems."
  },
  {
    question: "How does Tech Reign support mobile app development?",
    answer: "We develop both native and cross-platform mobile applications using React Native, Flutter, and native iOS/Android development. Our mobile solutions include offline capabilities, push notifications, and seamless integration with backend services."
  },
  {
    question: "What AI and machine learning capabilities does Tech Reign offer?",
    answer: "We develop custom AI solutions including natural language processing, computer vision, predictive analytics, and recommendation systems. Our team can help implement machine learning models, neural networks, and integrate with existing AI services."
  },
  {
    question: "How does Tech Reign handle data management and analytics?",
    answer: "We implement robust data management solutions including data warehousing, ETL processes, real-time analytics, and business intelligence tools. Our team can help set up data pipelines, implement data governance, and create custom analytics dashboards."
  }
];

export default function FAQSection() {
  const [openIndices, setOpenIndices] = useState(new Set());

  const toggleFAQ = (index) => {
    setOpenIndices(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section className="w-full py-16 mx-auto mt-20 mb-16 px-4" style={{background: 'transparent'}}>
      <h2 className="text-lg font-semibold mb-8 tracking-widest uppercase text-[#1A2341]">/TECH FAQ</h2>
      <div className="flex flex-col gap-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow p-6">
            <button
              className="w-full flex justify-between items-center text-left font-medium text-base text-[#1A2341] focus:outline-none cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => toggleFAQ(idx)}
              aria-expanded={openIndices.has(idx)}
            >
              <span>{faq.question}</span>
              <span className="text-2xl font-bold ml-4">{openIndices.has(idx) ? '−' : '+'}</span>
            </button>
            {openIndices.has(idx) && (
              <div className="mt-4 text-[#6B7280] text-sm leading-relaxed">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 