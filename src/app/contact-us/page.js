'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const services = [
  {
    label: 'Strategic Services',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#8958FE"/><path d="M16 8v8l6 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    label: 'Financial Services',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#E7E7EF"/><path d="M10 20h12M16 12v8" stroke="#8958FE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    label: 'Digital Services',
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#E7E7EF"/><rect x="12" y="12" width="8" height="8" rx="2" fill="#8958FE"/></svg>
    ),
  },
];

export default function ContactUsPage() {
  const [selectedService, setSelectedService] = useState(0);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    alert('Form submitted!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F9F9FB] py-8 md:py-16 px-4 md:px-0">
      <div className="bg-white rounded-[24px] md:rounded-[32px] shadow-2xl flex flex-col md:flex-row w-full max-w-5xl overflow-hidden border border-[#F1F1F4]">
        {/* Left: Form Section */}
        <div className="flex-1 flex flex-col justify-center min-w-0 md:min-w-[370px] px-6 md:px-14 py-8 md:py-12">
          <div className="flex flex-col justify-center h-full">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 leading-tight text-[#18181B]">Let&apos;s Work Together</h1>
            <p className="text-[#44444A] mb-6 md:mb-7 text-sm md:text-base leading-relaxed font-normal">We deliver comprehensive solutions, particularly excelling in financial communications and strategic public relations.</p>
            <div className="mb-6 md:mb-7">
              <div className="text-sm font-medium mb-3 text-[#18181B]">What do you need help with?</div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                {services.map((service, idx) => (
                  <button
                    key={service.label}
                    type="button"
                    className={`flex flex-row sm:flex-col items-center justify-center border rounded-xl px-4 py-3 w-full sm:w-40 transition-all duration-150 text-sm font-semibold focus:outline-none shadow-sm ${selectedService === idx ? 'border-[#8958FE] bg-[#F6F2FF] ring-2 ring-[#8958FE]/20 text-[#8958FE]' : 'border-gray-200 bg-white text-[#44444A]'} `}
                    onClick={() => setSelectedService(idx)}
                    aria-pressed={selectedService === idx}
                  >
                    <span className="mr-2 sm:mr-0 sm:mb-1 flex items-center justify-center">{service.icon}</span>
                    <span className="sm:mt-1 text-base font-semibold" style={{letterSpacing: 0.1}}>{service.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <form className="space-y-4" onSubmit={handleSubmit} autoComplete="off">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:border-[#8958FE] focus:ring-1 focus:ring-[#8958FE] outline-none placeholder:text-gray-400 placeholder:font-normal bg-[#FAFAFC] text-[#18181B]"
                  value={form.firstName}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:border-[#8958FE] focus:ring-1 focus:ring-[#8958FE] outline-none placeholder:text-gray-400 placeholder:font-normal bg-[#FAFAFC] text-[#18181B]"
                  value={form.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:border-[#8958FE] focus:ring-1 focus:ring-[#8958FE] outline-none placeholder:text-gray-400 placeholder:font-normal bg-[#FAFAFC] text-[#18181B]"
                value={form.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:border-[#8958FE] focus:ring-1 focus:ring-[#8958FE] outline-none placeholder:text-gray-400 placeholder:font-normal bg-[#FAFAFC] text-[#18181B]"
                value={form.phone}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Message"
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:border-[#8958FE] focus:ring-1 focus:ring-[#8958FE] outline-none min-h-[80px] placeholder:text-gray-400 placeholder:font-normal bg-[#FAFAFC] text-[#18181B]"
                value={form.message}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="w-full bg-[#8958FE] hover:bg-[#6C3DFE] text-white font-bold rounded-xl py-3 mt-2 transition-all text-base shadow-md tracking-wide"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* Right: Image & Info Section */}
        <div className="flex-1 relative min-h-[400px] md:min-h-[600px] flex items-center justify-center">
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            alt="Business handshake"
            width={800}
            height={600}
            className="absolute inset-0 w-full h-full object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
          <div className="relative z-20 px-6 md:px-8 py-8 md:py-12 w-full flex flex-col justify-center h-full text-white">
            <div className="mb-6 md:mb-7">
              <div className="font-semibold text-sm md:text-base mb-1">Office Hours</div>
              <div className="text-xs md:text-sm leading-relaxed">Monday - Friday<br />8:00 am to 5:00 pm</div>
            </div>
            <div className="mb-6 md:mb-7">
              <div className="font-semibold text-sm md:text-base mb-1">Our Address</div>
              <div className="text-xs md:text-sm leading-relaxed">8520 Preston Rd. Ingle, Maine<br />4102914, USA</div>
            </div>
            <div>
              <div className="font-semibold text-sm md:text-base mb-1">Get In Touch</div>
              <div className="text-xs md:text-sm leading-relaxed">+1 554 058 3808<br />+1 157 057 9987</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 