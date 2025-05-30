'use client'
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const servicesData = [
  {
    title: "Software Development",
    icon: "💻",
    items: [
      "Web Development",
      "Mobile App Development",
      "Custom Software Solutions",
      "API Development",
      "Cloud Services",
      "DevOps & CI/CD",
      "Quality Assurance",
      "Technical Consulting"
    ]
  },
  {
    title: "Digital Marketing",
    icon: "📱",
    items: [
      "SEO Optimization",
      "Social Media Marketing",
      "Content Marketing",
      "PPC Advertising",
      "Email Marketing",
      "Analytics & Reporting",
      "Conversion Rate Optimization",
      "Digital Strategy"
    ]
  },
  {
    title: "Design UX",
    icon: "🎨",
    items: [
      "UI/UX Design",
      "Brand Identity",
      "Web Design",
      "Mobile App Design",
      "Graphic Design",
      "Prototyping",
      "Design Systems",
      "User Research"
    ]
  }
];

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
          buttonRef.current && !buttonRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative z-10">
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-8 text-base font-semibold items-center">
        <Link href="/" className="hover:underline transition-colors" style={{ color: "#1A2341" }}>Home</Link>
        <div className="relative">
          <div className="flex items-center gap-2">
            <Link 
              href="/services" 
              className="hover:underline transition-colors" 
              style={{ color: "#1A2341" }}
            >
              Services
            </Link>
            <button 
              ref={buttonRef}
              onClick={toggleDropdown}
              className="hover:underline transition-colors focus:outline-none text-[#1A2341]" 
            >
              ▼
            </button>
          </div>
          {showDropdown && (
            <div className="absolute  left-1/2 -translate-x-1/2 top-full flex flex-col items-center" style={{ width: '100%' }}>
              <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-white mb-[-6px]" />
              <div 
                ref={dropdownRef}
                className="min-w-[600px] z-10 max-w-screen-md bg-white shadow-xl rounded-3xl border border-gray-100 flex p-8 gap-6 overflow-x-hidden"
                style={{ minHeight: '220px' }}
              >
                {servicesData.map((col) => (
                  <div key={col.title} className="flex-1 min-w-[220px]">
                    <div className="flex items-center gap-2 mb-2">
                      <span>{col.icon}</span>
                      <Link 
                        href={`/services/${col.title.toLowerCase().replace(/\s+/g, '-')}`}
                        className="uppercase tracking-wide text-xs font-semibold text-[#7B819A] hover:text-[#8958FE] transition-colors"
                      >
                        {col.title}
                      </Link>
                    </div>
                    <div className="h-1 w-8 bg-[#E6E8F0] rounded mb-4" />
                    <div className="flex flex-wrap gap-2">
                      {col.items.map(item => (
                        <Link
                          key={item}
                          href={`/services/${col.title.toLowerCase().replace(/\s+/g, '-')}#${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="bg-[#F5F7FA] text-[#1A2341] rounded-lg px-4 py-2 text-sm font-medium shadow-sm whitespace-nowrap mb-2 hover:bg-[#E6E8F0] transition"
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <Link href="/case-studies" className="hover:underline transition-colors" style={{ color: "#1A2341" }}>Case Studies</Link>
        <Link href="/about-us" className="hover:underline transition-colors" style={{ color: "#1A2341" }}>About Us</Link>
        <Link href="#" className="hover:underline transition-colors" style={{ color: "#1A2341" }}>Careers</Link>
        <Link href="/contact-us" className="ml-6 px-6 py-2 rounded-lg font-semibold shadow bg-[#8958FE] text-white hover:text-[#8958FE] hover:bg-[#E6E8F0] transition" style={{ boxShadow: '0 2px 8px rgba(80, 80, 120, 0.08)' }}>Contact Us</Link>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden relative">
        <button
          onClick={toggleMobileMenu}
          className="p-2 text-[#1A2341] focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu Popover */}
        {isMobileMenuOpen && (
          <>
            <div className="fixed inset-0 z-[99]" onClick={toggleMobileMenu} />
            <div
              ref={mobileMenuRef}
              className="absolute top-full right-0 w-[280px] bg-white z-[100] rounded-xl shadow-lg border border-gray-100 mt-2 py-4"
            >
              <div className="flex flex-col space-y-2 px-4">
                <Link 
                  href="/" 
                  className="text-[#1A2341] hover:text-[#8958FE] transition-colors py-2"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Link 
                      href="/services" 
                      className="text-[#1A2341] hover:text-[#8958FE] transition-colors py-2"
                      onClick={toggleMobileMenu}
                    >
                      Services
                    </Link>
                  
                  </div>
                
                </div>
                <Link 
                  href="/case-studies" 
                  className="text-[#1A2341] hover:text-[#8958FE] transition-colors py-2"
                  onClick={toggleMobileMenu}
                >
                  Case Studies
                </Link>
                <Link 
                  href="/about-us" 
                  className="text-[#1A2341] hover:text-[#8958FE] transition-colors py-2"
                  onClick={toggleMobileMenu}
                >
                  About Us
                </Link>
                <Link 
                  href="#" 
                  className="text-[#1A2341] hover:text-[#8958FE] transition-colors py-2"
                  onClick={toggleMobileMenu}
                >
                  Careers
                </Link>
                <Link
                  href="/contact-us"
                  className="mt-2 px-6 py-2 rounded-lg font-semibold text-center bg-[#F5F7FA] text-[#1A2341] hover:bg-[#E6E8F0] transition"
                  style={{ boxShadow: '0 2px 8px rgba(80, 80, 120, 0.08)' }}
                  onClick={toggleMobileMenu}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
} 