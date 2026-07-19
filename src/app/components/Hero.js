"use client"
import Link from 'next/link';
import React from 'react';

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center mb-12 sm:mb-16 relative max-w-4xl mx-auto" aria-label="Hero section">
      <a
        href="https://kampalo.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/90 px-4 py-1.5 text-xs font-medium text-slate-600 shadow-sm backdrop-blur-sm transition hover:border-[#8958FE]/40 hover:text-[#0A1531]"
      >
        <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-800">
          Live product
        </span>
        KAMPALO — Kai agentic marketing AI
        <span className="text-slate-400" aria-hidden="true">
          →
        </span>
      </a>
      <h1 className="mb-5">
        <span className="block text-3xl sm:text-5xl md:text-6xl font-light text-slate-500 tracking-tight">
          TekReign builds
        </span>
        <span className="block text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#0A1531] mt-1 tracking-tight">
          AI-powered digital products
        </span>
      </h1>
      <p className="max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed mb-9">
        We design and ship production software with{' '}
        <span className="text-[#0A1531] font-semibold">Agentic AI</span>,{' '}
        <span className="text-[#0A1531] font-semibold">ML</span>,{' '}
        <span className="text-[#0A1531] font-semibold">LLMs</span>, and modern AI solutions—from our flagship{' '}
        <span className="text-[#0A1531] font-semibold">KAMPALO</span> AI marketing platform to custom cloud and
        enterprise systems built for reliability at scale.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center w-full sm:w-auto">
        <Link
          href="/contact-us"
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-white bg-[#8958FE] hover:bg-[#7c4fe8] shadow-lg shadow-[#8958FE]/20 transition-colors text-base"
        >
          Start your project
        </Link>
        <Link
          href="/case-studies"
          className="w-full sm:w-auto font-semibold flex items-center justify-center gap-1.5 text-[#0A1531] border border-slate-200 rounded-xl px-8 py-3.5 hover:bg-slate-50 transition-colors text-base"
        >
          View case studies
          <span className="text-lg leading-none" aria-hidden="true">
            ↗
          </span>
        </Link>
      </div>
    </section>
  );
} 