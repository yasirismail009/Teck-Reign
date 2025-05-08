'use client'
import React, { useState } from 'react';
import Navbar from './Navbar';

const servicesMenu = [
  {
    title: 'Strategic Services',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#A78BFA" /><path d="M16 8l4 8-4 8-4-8 4-8z" fill="#fff"/></svg>
    ),
    items: [
      'Crisis Management',
      'Reputation Management',
      'Media Relations',
      'Public Relations',
      'Advertising',
    ],
  },
  {
    title: 'Digital Services',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#A78BFA" /><path d="M10 18h12v2H10v-2zm0-4h8v2h-8v-2zm0-4h4v2h-4v-2z" fill="#fff"/></svg>
    ),
    items: [
      'SEO & PPC',
      'Content Marketing',
      'E-Commerce Solutions',
      'Tech Integration',
      'Social Media Management',
    ],
  },
  {
    title: 'Financial Services',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#A78BFA" /><path d="M16 10l6 12H10l6-12z" fill="#fff"/></svg>
    ),
    items: [
      'Investor Relations',
      'Rights Issues',
      'Mergers & Acquisitions',
      'IPO Communications',
      'Funds Management',
      'Bonds Issuances',
      'Financial Analysis',
      'Regulatory Compliance',
    ],
  },
];

export default function Header() {
  return (
    <header className="w-full max-w-[1700px] flex items-center justify-between mb-8 mt-8 relative z-10 overflow-visible">
      <div className="flex items-center gap-2 mb-4 sm:mb-0 relative w-full justify-start sm:w-auto sm:justify-start py-2 px-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-[#A78BFA]">
          <span className="font-extrabold text-xl text-white tracking-tight">T</span>
        </div>
        <span className="font-extrabold text-2xl ml-2 tracking-tight text-[#1A2341]">TECKREIGN</span>
        <span className="hidden sm:inline text-xs ml-2 font-medium text-[#A0A4B8]">Intelligent Communications</span>
      </div>
      <div className="absolute right-4 top-1/3 -translate-y-1/2 sm:static sm:translate-y-0">
        <Navbar servicesMenu={servicesMenu} />
      </div>
    </header>
  );
} 