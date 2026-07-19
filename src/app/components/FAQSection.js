'use client'
import React, { useState } from 'react';

const faqs = [
    {
      question: 'What technologies does TekReign specialize in?',
      answer:
        'TekReign specializes in Agentic AI, machine learning (ML), large language models (LLMs), and modern AI solutions—plus cloud computing, blockchain, and web stacks such as React, Next.js, and Node.js. We also apply DevOps and microservices where they fit the product.',
    },
  {
    question: 'How does TekReign approach software development?',
    answer:
      'We use agile delivery with continuous integration and deployment (CI/CD), test-driven development (TDD), and code reviews. The goal is software that stays scalable, maintainable, and secure as your product grows.',
  },
  {
    question: 'What tech consulting services does TekReign offer?',
    answer:
      'Our consulting covers digital transformation strategy, cloud migration, cybersecurity assessments, and technology stack optimization—helping teams modernize infrastructure and ship stronger solutions.',
  },
  {
    question: 'How does TekReign ensure code quality and security?',
    answer:
      'We use automated testing, linting, and security scanning, plus regular security reviews and penetration testing. Development follows OWASP-aligned practices to reduce risk before release.',
  },
  {
    question: 'What cloud platforms does TekReign work with?',
    answer:
      'We work across AWS, Microsoft Azure, and Google Cloud Platform—covering architecture design, migration, optimization, and ongoing cloud infrastructure management.',
  },
  {
    question: 'How does TekReign handle project scalability?',
    answer:
      'We plan for growth from day one with microservices where useful, Docker and Kubernetes containerization, load balancing, and auto-scaling so applications can handle higher demand.',
  },
  {
    question: "What is TekReign's approach to cybersecurity?",
    answer:
      'Security is built into delivery: secure coding, audits, penetration testing, industry-standard compliance practices, authentication and authorization, and team guidance where needed.',
  },
  {
    question: 'How does TekReign support mobile app development?',
    answer:
      'We build native and cross-platform apps with React Native, Flutter, and native iOS/Android. Typical capabilities include offline support, push notifications, and reliable backend integration.',
  },
    {
      question: 'What AI and machine learning capabilities does TekReign offer?',
      answer:
        'We deliver Agentic AI systems, custom ML models, LLM and GenAI applications (including RAG), and modern AI solutions—from prototypes to production. Capabilities include NLP, computer vision, predictive analytics, recommendation systems, and AI product integration.',
    },
    {
      question: 'What is KAMPALO?',
      answer:
        'KAMPALO is TekReign’s AI-based marketing platform. It includes Kai—a supervisor plus specialist mini-agents (LangGraph) for Google Ads, Meta, analytics, and search. Agents query synced DB stats, apply deterministic ROAS/CTR/CPC decision logic, and use LLMs (Ollama or Groq via LangChain) to synthesize answers. Tools are also exposed via MCP for chat and external clients.',
    },
    {
      question: 'What is AuditQA?',
      answer:
        'AuditQA is TekReign’s AI-powered financial statement quality review system. It extracts .docx FS text, runs deterministic tools first (casting, notes, periods, presentation, and more), then uses an Ollama LLM for judgment checks. Modes include Quality Review (~32 findings) and Bilingual Cross-Check (7 findings). A feedback → dataset → adapter → golden-eval loop improves accuracy while shrinking prompts.',
    },
    {
      question: 'How does TekReign handle data management and analytics?',
    answer:
      'We deliver data warehousing, ETL pipelines, real-time analytics, and business intelligence setups—plus data governance and custom dashboards so teams can act on reliable insights.',
  },
];

export default function FAQSection() {
  const [openIndices, setOpenIndices] = useState(new Set());

  const toggleFAQ = (index) => {
    setOpenIndices((prev) => {
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
    <section className="w-full py-16 mx-auto mt-20 mb-16 px-4" style={{ background: 'transparent' }}>
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
