'use client';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { caseStudies } from '../../data/caseStudies';

export default function CaseStudy({ params }) {
  const caseStudy = caseStudies.find(study => study.id === parseInt(params.id));

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 py-24">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center text-white">
            <span className="text-sm font-semibold bg-blue-500 px-3 py-1 rounded-full inline-block mb-4">
              {caseStudy.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{caseStudy.title}</h1>
            <p className="text-xl max-w-3xl mx-auto">{caseStudy.description}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Overview */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Overview</h2>
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-8 whitespace-pre-line">{caseStudy.content.overview}</p>
              </div>
            </div>
            <div className="md:w-1/3 bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="font-bold mb-6 text-xl">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-600 block mb-1">Client</span>
                  <p className="font-semibold">{caseStudy.client}</p>
                </div>
                <div>
                  <span className="text-gray-600 block mb-1">Duration</span>
                  <p className="font-semibold">{caseStudy.duration}</p>
                </div>
                <div>
                  <span className="text-gray-600 block mb-1">Category</span>
                  <p className="font-semibold">{caseStudy.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Image */}
        <div className="relative h-[400px] mb-16 rounded-xl overflow-hidden border border-gray-100">
          <Image
            src={caseStudy.image}
            alt={caseStudy.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Key Results */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {caseStudy.results.map((result, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-100 text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">{result}</div>
            </div>
          ))}
        </div>

        {/* Challenge */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <div className="prose max-w-none">
              <p className="text-gray-600 whitespace-pre-line">{caseStudy.content.challenge}</p>
            </div>
          </div>
        </div>

        {/* Solution */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <div className="prose max-w-none">
              <p className="text-gray-600 whitespace-pre-line">{caseStudy.content.solution}</p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">The Results</h2>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <div className="prose max-w-none">
              <p className="text-gray-600 whitespace-pre-line">{caseStudy.content.results}</p>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-4">
            {caseStudy.content.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mb-16 bg-blue-50 p-8 rounded-xl border border-blue-100">
          <blockquote className="text-xl italic text-gray-700 mb-6">
            "{caseStudy.content.testimonial.quote}"
          </blockquote>
          <div className="flex items-center">
            <div>
              <p className="font-semibold">{caseStudy.content.testimonial.author}</p>
              <p className="text-gray-600">{caseStudy.content.testimonial.position}</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/case-studies"
            className="inline-block bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors text-center"
          >
            Back to Case Studies
          </Link>
          <Link
            href="/contact-us"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors text-center"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
} 