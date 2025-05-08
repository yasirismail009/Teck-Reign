import React from 'react';

const caseStudies = [
  {
    image: '/case-study-1.jpg', // Replace with your actual image path
    title: 'Case Study Title',
    description: 'Boxes Has Successfully Worked Across Various Sectors, Leveraging Cutting-Edge Technology...'
  },
  {
    image: '/case-study-2.jpg', // Replace with your actual image path
    title: 'Case Study Title',
    description: 'Boxes Has Successfully Worked Across Various Sectors, Leveraging Cutting-Edge Technology...'
  }
];

export default function CaseStudiesSection() {
  return (
    <>
    <section className="w-full  py-16 px-4 sm:px-8 relative overflow-hidden">
      {/* Top left label with angled background */}
      <div className="absolute left-0 top-0 w-64 h-16 bg-white rounded-br-3xl flex items-center pl-8 z-10" style={{clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)'}}>
        <span className="text-xl font-semibold tracking-wider text-black">/CASE STUDIES</span>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-20 mt-16">
        {/* Left Card */}
        <div className="flex-1 flex flex-col items-start bg-[#101C3A] rounded-3xl overflow-hidden shadow-lg max-w-sm">
          <div className="w-full h-64 overflow-hidden">
            <img src={caseStudies[0].image} alt="Case Study 1" className="object-cover w-full h-full" />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-white mb-2">{caseStudies[0].title}</h3>
            <p className="text-gray-400 text-sm">{caseStudies[0].description}</p>
          </div>
        </div>
        {/* Center Text & Button */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <p className="text-white text-2xl font-medium leading-snug mb-8 max-w-xs md:max-w-sm">
            We Blend innovative digital strategies with traditional approaches,<br className="hidden md:block" /> To deliver comprehensive solutions
          </p>
          <button className="mt-2 px-8 py-3 rounded-full border border-white text-white font-semibold text-base flex items-center gap-2 hover:bg-white hover:text-[#0A1531] transition">
            More Case Studies
            <span className="inline-block transform translate-x-1">↗</span>
          </button>
        </div>
        {/* Right Card */}
        <div className="flex-1 flex flex-col items-start bg-[#101C3A] rounded-3xl overflow-hidden shadow-lg max-w-sm">
          <div className="w-full h-64 overflow-hidden">
            <img src={caseStudies[1].image} alt="Case Study 2" className="object-cover w-full h-full" />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold text-white mb-2">{caseStudies[1].title}</h3>
            <p className="text-gray-400 text-sm">{caseStudies[1].description}</p>
          </div>
        </div>
      </div>
    </section>
    {/* TESTIMONIALS SECTION */}
    <section className="w-full py-16 px-4 sm:px-8 relative overflow-hidden bg-[#0A1531] mt-0">
      {/* Top left label with angled background */}
      <div className="absolute left-0 top-0 w-64 h-16  rounded-br-3xl flex items-center pl-8 z-10" style={{clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)'}}>
        <span className="text-xl font-semibold tracking-wider text-white">/TESTIMONIALS</span>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mt-16">
        {/* Testimonial Card 1 */}
        <div className="bg-[#23283A] rounded-2xl p-6 shadow-lg flex flex-col justify-between min-h-[200px] relative">
          <p className="text-gray-200 text-base mb-6">Great Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-3">
              <img src="/avatar-1.jpg" alt="Claudia Leal" className="w-10 h-10 rounded-full object-cover border-2 border-white" />
              <span className="text-white font-semibold text-sm">Claudia Leal</span>
            </div>
            <span className="text-[#A084FE] text-2xl font-bold">“”</span>
          </div>
        </div>
        {/* Testimonial Card 2 */}
        <div className="bg-[#23283A] rounded-2xl p-6 shadow-lg flex flex-col justify-between min-h-[200px] relative">
          <p className="text-gray-200 text-base mb-6">Great Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-3">
              <img src="/avatar-2.jpg" alt="Dianna Beck" className="w-10 h-10 rounded-full object-cover border-2 border-white" />
              <span className="text-white font-semibold text-sm">Dianna Beck</span>
            </div>
            <span className="text-[#A084FE] text-2xl font-bold">“”</span>
          </div>
        </div>
        {/* Testimonial Card 3 */}
        <div className="bg-[#23283A] rounded-2xl p-6 shadow-lg flex flex-col justify-between min-h-[200px] relative">
          <p className="text-gray-200 text-base mb-6">Great Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-3">
              <img src="/avatar-3.jpg" alt="Natalie Lane" className="w-10 h-10 rounded-full object-cover border-2 border-white" />
              <span className="text-white font-semibold text-sm">Natalie Lane</span>
            </div>
            <span className="text-[#A084FE] text-2xl font-bold">“”</span>
          </div>
        </div>
        {/* Testimonial Card 4 */}
        <div className="bg-[#23283A] rounded-2xl p-6 shadow-lg flex flex-col justify-between min-h-[200px] relative">
          <p className="text-gray-200 text-base mb-6">Great Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-3">
              <img src="/avatar-3.jpg" alt="Natalie Lane" className="w-10 h-10 rounded-full object-cover border-2 border-white" />
              <span className="text-white font-semibold text-sm">Natalie Lane</span>
            </div>
            <span className="text-[#A084FE] text-2xl font-bold">“”</span>
          </div>
        </div>
        {/* Testimonial Card 5 */}
        <div className="bg-[#23283A] rounded-2xl p-6 shadow-lg flex flex-col justify-between min-h-[200px] relative">
          <p className="text-gray-200 text-base mb-6">Great Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-3">
              <img src="/avatar-1.jpg" alt="Claudia Leal" className="w-10 h-10 rounded-full object-cover border-2 border-white" />
              <span className="text-white font-semibold text-sm">Claudia Leal</span>
            </div>
            <span className="text-[#A084FE] text-2xl font-bold">“”</span>
          </div>
        </div>
        {/* Testimonial Card 6 */}
        <div className="bg-[#23283A] rounded-2xl p-6 shadow-lg flex flex-col justify-between min-h-[200px] relative">
          <p className="text-gray-200 text-base mb-6">Great Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-3">
              <img src="/avatar-2.jpg" alt="Dianna Beck" className="w-10 h-10 rounded-full object-cover border-2 border-white" />
              <span className="text-white font-semibold text-sm">Dianna Beck</span>
            </div>
            <span className="text-[#A084FE] text-2xl font-bold">“”</span>
          </div>
        </div>
      </div>
    </section>
    </>
  );
} 