import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { caseStudies } from '../data/caseStudies';
import PlaceholderImage from './PlaceholderImage';

export default function CaseStudiesSection() {
  // Get the first two case studies
  const featuredStudies = caseStudies.slice(0, 2);
  // Get testimonials from case studies
  const testimonials = caseStudies.slice(0, 6).map(study => ({
    quote: study.content.testimonial.quote,
    author: study.content.testimonial.author,
    position: study.content.testimonial.position,
    category: study.category
  }));

  return (
    <>
    <section className="w-full py-16 px-4 sm:px-8 relative overflow-hidden bg-[#0A1531]">
      {/* Top left label with angled background */}
      <div className="absolute left-0 top-0 w-64 h-16 bg-white rounded-br-3xl flex items-center pl-8 z-10" style={{clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)'}}>
        <span className="text-xl font-semibold tracking-wider text-black">/CASE STUDIES</span>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-20 mt-16">
        {/* Left Card */}
        <div className="flex-1 flex flex-col items-start bg-[#101C3A] rounded-3xl overflow-hidden shadow-lg max-w-sm">
          <div className="w-full h-64 overflow-hidden">
            {featuredStudies[0].image ? (
              <Image
                src={featuredStudies[0].image}
                alt={featuredStudies[0].title}
                width={400}
                height={400}
                className="object-cover"
                priority
              />
            ) : (
              <PlaceholderImage 
                category={featuredStudies[0].category}
                title={featuredStudies[0].title}
              />
            )}
          </div>
          <div className="p-6">
            <span className="text-xs font-semibold text-[#A084FE] uppercase tracking-wide mb-2 block">{featuredStudies[0].category}</span>
            <h3 className="text-lg font-semibold text-white mb-2">{featuredStudies[0].title}</h3>
            <p className="text-gray-400 text-sm mb-4">{featuredStudies[0].description}</p>
            <div className="flex flex-wrap gap-2">
              {featuredStudies[0].results.slice(0, 2).map((result, index) => (
                <span key={index} className="px-2 py-1 bg-[#A084FE]/10 text-[#A084FE] text-xs rounded-full">
                  {result}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Center Text & Button */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
          <p className="text-white text-2xl font-medium leading-snug mb-8 max-w-xs md:max-w-sm">
            We Blend innovative digital strategies with traditional approaches,<br className="hidden md:block" /> To deliver comprehensive solutions
          </p>
          <Link href="/case-studies" className="mt-2 px-8 py-3 rounded-full border border-white text-white font-semibold text-base flex items-center gap-2 hover:bg-white hover:text-[#0A1531] transition">
            More Case Studies
            <span className="inline-block transform translate-x-1">↗</span>
          </Link>
        </div>

        {/* Right Card */}
        <div className="flex-1 flex flex-col items-start bg-[#101C3A] rounded-3xl overflow-hidden shadow-lg max-w-sm">
          <div className="w-full h-64 overflow-hidden">
          {featuredStudies[1].image ? (
                        <Image
                          src={featuredStudies[1].image}
                          alt={featuredStudies[1].title}
                          width={400}
                          height={400}
                          className="object-cover"
                          priority
                        />
                      ) : (
            <PlaceholderImage 
              category={featuredStudies[1].category}
              title={featuredStudies[1].title}
            />
            )}
          </div>
          <div className="p-6">
            <span className="text-xs font-semibold text-[#A084FE] uppercase tracking-wide mb-2 block">{featuredStudies[1].category}</span>
            <h3 className="text-lg font-semibold text-white mb-2">{featuredStudies[1].title}</h3>
            <p className="text-gray-400 text-sm mb-4">{featuredStudies[1].description}</p>
            <div className="flex flex-wrap gap-2">
              {featuredStudies[1].results.slice(0, 2).map((result, index) => (
                <span key={index} className="px-2 py-1 bg-[#A084FE]/10 text-[#A084FE] text-xs rounded-full">
                  {result}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* TESTIMONIALS SECTION */}
    <section className="w-full py-16 px-4 sm:px-8 relative overflow-hidden bg-[#0A1531] mt-0">
      {/* Top left label with angled background */}
      <div className="absolute left-0 top-0 w-64 h-16 rounded-br-3xl flex items-center pl-8 z-10" style={{clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)'}}>
        <span className="text-xl font-semibold tracking-wider text-white">/TESTIMONIALS</span>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mt-16">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-[#23283A] rounded-2xl p-6 shadow-lg flex flex-col justify-between min-h-[200px] relative">
            <div>
              <span className="text-xs font-semibold text-[#A084FE] uppercase tracking-wide mb-2 block">{testimonial.category}</span>
              <p className="text-gray-200 text-base mb-6">{testimonial.quote}</p>
            </div>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#A084FE]/20 flex items-center justify-center text-[#A084FE] font-semibold">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <span className="text-white font-semibold text-sm block">{testimonial.author}</span>
                  <span className="text-gray-400 text-xs">{testimonial.position}</span>
                </div>
              </div>
              <span className="text-[#A084FE] text-2xl font-bold">&quot;</span>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
} 