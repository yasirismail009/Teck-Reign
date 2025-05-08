'use client'
import React, { useState } from 'react';

const faqs = [
  {
    question: "What services does Boxes provide?",
    answer: "Boxes offers comprehensive services across three main areas: Financial Communications, Public Relations and Communication, and Digital Transformation, including SEO, web development, and social media management."
  },
  {
    question: "How can Boxes help my business grow?",
    answer: "Boxes helps your business grow by leveraging strategic communication, digital marketing, and technology solutions tailored to your needs."
  },
  {
    question: "What industries does Boxes specialize in?",
    answer: "Boxes specializes in a variety of industries including finance, technology, healthcare, and more."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="w-full py-16 mx-auto mt-20 mb-16 px-4" style={{background: 'transparent'}}>
      <h2 className="text-lg font-semibold mb-8 tracking-widest uppercase text-[#1A2341]">/QUESTIONS</h2>
      <div className="flex flex-col gap-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow p-6">
            <button
              className="w-full flex justify-between items-center text-left font-medium text-base text-[#1A2341] focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
            >
              <span>{faq.question}</span>
              <span className="text-2xl font-bold ml-4">{openIndex === idx ? '−' : '+'}</span>
            </button>
            {openIndex === idx && (
              <div className="mt-4 text-[#6B7280] text-sm leading-relaxed">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 