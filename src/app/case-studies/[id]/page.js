'use client';

import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { caseStudies } from '../../data/caseStudies';
import { motion } from 'framer-motion';
import { FaChartLine, FaUsers, FaClock, FaDollarSign, FaChartBar, FaLightbulb, FaPlay } from 'react-icons/fa';
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import PlaceholderImage from '@/app/components/PlaceholderImage';

export default function CaseStudy({ params }) {
  const caseStudy = caseStudies.find(study => study.id === parseInt(params.id));
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (caseStudy?.detail_images) {
      setImages(caseStudy.detail_images);
      setIsLoading(false);
    }
  }, [caseStudy]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  if (!caseStudy) {
    notFound();
  }

  // Helper function to get appropriate icon based on result type
  const getResultIcon = (result) => {
    const lowerResult = result.toLowerCase();
    if (lowerResult.includes('increase') || lowerResult.includes('growth')) return <FaChartLine className="w-8 h-8" />;
    if (lowerResult.includes('user') || lowerResult.includes('customer')) return <FaUsers className="w-8 h-8" />;
    if (lowerResult.includes('time') || lowerResult.includes('efficiency')) return <FaClock className="w-8 h-8" />;
    if (lowerResult.includes('revenue') || lowerResult.includes('cost')) return <FaDollarSign className="w-8 h-8" />;
    if (lowerResult.includes('performance') || lowerResult.includes('metric')) return <FaChartBar className="w-8 h-8" />;
    return <FaLightbulb className="w-8 h-8" />;
  };

  // Helper function to extract metrics from result text
  const extractMetrics = (result) => {
    const metrics = result.match(/\d+(?:\.\d+)?%/g) || [];
    return metrics;
  };

  // Helper function to convert Google Drive link to embed format
  const getEmbedUrl = (url) => {
    if (url.includes('drive.google.com')) {
      const fileId = url.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
      return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : url;
    }
    return url;
  };

  return (
    <main className="min-h-screen bg-[#F9F9FB]">
      {/* Hero Section */}
      <section className="relative py-32">
        {caseStudy.image ? (
          <>
            <Image
              src={caseStudy.image}
              alt={caseStudy.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-dark)]" />
        )}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <span className="text-sm font-semibold bg-[#8958FE]/20 px-4 py-1.5 rounded-full inline-block mb-6 backdrop-blur-sm">
              {caseStudy.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">{caseStudy.title}</h1>
            <p className="text-xl max-w-3xl mx-auto text-white/90">{caseStudy.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        {/* Overview */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:w-2/3"
            >
              <h2 className="text-3xl font-bold mb-8 text-[#1A2341]">Overview</h2>
              <div className="prose max-w-none">
                <p className="text-[#7B819A] text-lg leading-relaxed whitespace-pre-line">{caseStudy.content.overview}</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:w-1/3 bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h3 className="font-bold mb-8 text-xl text-[#1A2341]">Project Details</h3>
              <div className="space-y-6">
                <div>
                  <span className="text-[#7B819A] block mb-2 text-sm font-medium">Client</span>
                  <p className="font-semibold text-[#1A2341]">{caseStudy.client}</p>
                </div>
                <div>
                  <span className="text-[#7B819A] block mb-2 text-sm font-medium">Duration</span>
                  <p className="font-semibold text-[#1A2341]">{caseStudy.duration}</p>
                </div>
                <div>
                  <span className="text-[#7B819A] block mb-2 text-sm font-medium">Category</span>
                  <p className="font-semibold text-[#1A2341]">{caseStudy.category}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Video Section */}
        {caseStudy.video_link && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-8 text-[#1A2341]">Project Video</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="relative aspect-video rounded-lg overflow-hidden">
                {showVideo ? (
                  <iframe
                    src={getEmbedUrl(caseStudy.video_link)}
                    title={`${caseStudy.title} - Project Video`}
                    className="w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                  />
                ) : (
                  <div className="relative w-full h-full bg-gray-900 flex items-center justify-center group cursor-pointer" onClick={() => setShowVideo(true)}>
                    {caseStudy.image && (
                      <Image
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        fill
                        className="object-cover opacity-50"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:bg-white/30 transition-all duration-300">
                        <FaPlay className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-lg font-semibold">Click to watch project video</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Image Gallery */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-[#1A2341]">Project Gallery</h2>
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            </div>
          ) : images.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <motion.div
                  key={image}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="relative aspect-video rounded-lg overflow-hidden shadow-lg group"
                >
                  <Image
                    src={image}
                    alt={`${caseStudy.title} - Image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-[#7B819A] text-lg">No images available for this project.</p>
            </div>
          )}
        </div>

        {/* Key Results */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-[#1A2341]">Key Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudy.results.map((result, index) => {
              const metrics = extractMetrics(result);
              const icon = getResultIcon(result);
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[#8958FE]/10 flex items-center justify-center mb-6 text-[#8958FE] group-hover:bg-[#8958FE]/20 transition-colors">
                      {icon}
                    </div>
                    {metrics.length > 0 ? (
                      <div className="space-y-2">
                        {metrics.map((metric, idx) => (
                          <div key={idx} className="text-3xl font-bold text-[#8958FE] mb-2">
                            {metric}
                          </div>
                        ))}
                        <p className="text-[#7B819A] text-lg leading-relaxed">
                          {result.replace(/\d+(?:\.\d+)?%/g, '').trim()}
                        </p>
                      </div>
                    ) : (
                      <div className="text-2xl font-bold text-[#8958FE] mb-2">
                        {result}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Challenge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-[#1A2341]">The Challenge</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="prose max-w-none">
              <p className="text-[#7B819A] text-lg leading-relaxed whitespace-pre-line">{caseStudy.content.challenge}</p>
            </div>
          </div>
        </motion.div>

        {/* Solution */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-[#1A2341]">Our Solution</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="prose max-w-none">
              <p className="text-[#7B819A] text-lg leading-relaxed whitespace-pre-line">{caseStudy.content.solution}</p>
            </div>
          </div>
        </motion.div>

        {/* Results */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-[#1A2341]">The Results</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="prose max-w-none">
              <p className="text-[#7B819A] text-lg leading-relaxed whitespace-pre-line">{caseStudy.content.results}</p>
            </div>
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-[#1A2341]">Technologies Used</h2>
          <div className="flex flex-wrap gap-4">
            {caseStudy.content.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-[#8958FE]/10 text-[#8958FE] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#8958FE]/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-20 bg-[#8958FE]/5 p-12 rounded-2xl border border-[#8958FE]/10"
        >
          <blockquote className="text-2xl italic text-[#1A2341] mb-8">
            &ldquo;{caseStudy.content.testimonial.quote}&rdquo;
          </blockquote>
          <div className="flex items-center">
            <div>
              <p className="font-semibold text-[#1A2341]">{caseStudy.content.testimonial.author}</p>
              <p className="text-[#7B819A]">{caseStudy.content.testimonial.position}</p>
            </div>
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/case-studies"
            className="inline-block bg-white text-[#1A2341] px-8 py-4 rounded-xl hover:bg-gray-50 transition-colors text-center shadow-lg border border-gray-100"
          >
            Back to Case Studies
          </Link>
          <Link
            href="/contact-us"
            className="inline-block bg-[#8958FE] text-white px-8 py-4 rounded-xl hover:bg-[#7C4DFF] transition-colors text-center shadow-lg"
          >
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </main>
  );
} 