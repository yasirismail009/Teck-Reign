import React from 'react';
import Link from 'next/link';

const KAMPALO_URL = 'https://kampalo.com/';

const highlights = [
  {
    title: 'Kai agentic stack',
    description:
      'Supervisor + specialist mini-agents (LangGraph): decode, run suite agents in parallel, then synthesize a clear answer.',
  },
  {
    title: 'Suite specialists',
    description:
      'Dedicated agents for search, analytics, Google Ads, Meta Ads, and Meta insights—over synced campaign data.',
  },
  {
    title: 'Hybrid decisions',
    description:
      'Tools produce structured findings; a deterministic engine ranks ROAS/CTR/CPC winners; the LLM synthesizes mixed-domain answers.',
  },
  {
    title: 'MCP-ready tools',
    description:
      'The same namespaced suite tools power in-app chat and FastMCP for API or external agent clients.',
  },
];

export default function KampaloSection() {
  return (
    <section
      className="w-full py-20 sm:py-24 px-4 sm:px-8 relative overflow-hidden"
      aria-labelledby="kampalo-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#f4f2ff] via-white to-white"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#8958FE]/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#0A1531]/5 blur-3xl" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-10 lg:gap-14">
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8958FE] mb-4">
              Flagship AI product
            </p>
            <h2
              id="kampalo-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0A1531] tracking-tight leading-[1.1] mb-5"
            >
              <span className="font-light text-slate-500 block text-2xl sm:text-3xl md:text-4xl mb-1">
                Meet
              </span>
              KAMPALO
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              An <span className="text-[#0A1531] font-medium">AI-based marketing platform</span> powered by{' '}
              <span className="text-[#0A1531] font-medium">Kai</span>—a supervisor and specialist mini-agents stack
              for Google Ads, Meta, analytics, and search. Chat over synced data with hybrid ROAS/CTR/CPC decisions
              and LLM synthesis, engineered by TekReign.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <a
                href={KAMPALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-7 py-3.5 rounded-xl font-semibold text-white bg-[#8958FE] hover:bg-[#7c4fe8] shadow-lg shadow-[#8958FE]/25 transition-colors text-center"
              >
                Visit kampalo.com
              </a>
              <Link
                href="/contact-us"
                className="inline-flex justify-center items-center px-7 py-3.5 rounded-xl font-semibold text-[#0A1531] border border-slate-200 bg-white/80 hover:bg-slate-50 hover:border-slate-300 transition-colors text-center"
              >
                Talk to us about KAMPALO
              </Link>
            </div>
            <p className="mt-6 text-sm text-slate-500">
              Live in production · No credit card for trial ·{' '}
              <a
                href={KAMPALO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8958FE] font-medium hover:underline underline-offset-2"
              >
                kampalo.com
              </a>
            </p>
          </div>

          <div className="flex-1 min-w-0">
            <div className="h-full rounded-3xl border border-slate-200/80 bg-white/90 backdrop-blur-sm shadow-xl shadow-slate-200/50 p-6 sm:p-8 flex flex-col">
              <div className="flex items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-6">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Agentic AI</p>
                  <p className="text-lg font-semibold text-[#0A1531]">Kai · supervisor + suites</p>
                </div>
                <span className="shrink-0 text-xs font-semibold uppercase tracking-wide text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full">
                  Production
                </span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
                {highlights.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-2xl bg-slate-50/80 border border-slate-100 p-4 sm:p-5 hover:border-[#8958FE]/20 transition-colors"
                  >
                    <h3 className="text-sm font-semibold text-[#0A1531] mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
