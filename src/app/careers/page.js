'use client';

import React from 'react';
import TechCircuitSVG from '../components/TechCircuitSVG';

const JobCard = ({ title, type, location, description, requirements, benefits }) => (
  <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-start justify-between mb-6">
      <div>
        <h3 className="text-2xl font-bold text-[#222] mb-2">{title}</h3>
        <div className="flex gap-4 text-sm text-gray-600">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {type}
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {location}
          </span>
        </div>
      </div>
      <button className="bg-[#8958FE] text-white px-6 py-2 rounded-full hover:bg-[#7a4de0] transition-colors duration-300">
        Apply Now
      </button>
    </div>
    
    <div className="space-y-6">
      <div>
        <h4 className="text-lg font-semibold text-[#222] mb-2">Description</h4>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div>
        <h4 className="text-lg font-semibold text-[#222] mb-2">Requirements</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>
      
      <div>
        <h4 className="text-lg font-semibold text-[#222] mb-2">Benefits</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default function CareersPage() {
  const jobs = [
    {
      title: "Senior Frontend Developer",
      type: "Full-time",
      location: "Remote / Hybrid",
      description: "We&apos;re looking for a Senior Frontend Developer to join our team and help build the next generation of web applications. You&apos;ll work with modern technologies and collaborate with cross-functional teams to deliver exceptional user experiences.",
      requirements: [
        "5+ years of experience in frontend development",
        "Strong expertise in React.js and Next.js",
        "Experience with TypeScript and modern JavaScript",
        "Proficiency in CSS/SCSS and responsive design",
        "Experience with state management (Redux, Context API)",
        "Strong understanding of web performance optimization"
      ],
      benefits: [
        "Competitive salary and equity options",
        "Flexible work arrangements",
        "Health insurance and wellness programs",
        "Professional development budget",
        "Regular team events and activities",
        "Modern equipment and tools"
      ]
    },
    {
      title: "Backend Developer",
      type: "Full-time",
      location: "Remote / Hybrid",
      description: "Join our backend team to build scalable and robust server-side applications. You&apos;ll work on designing and implementing APIs, database architecture, and cloud infrastructure solutions.",
      requirements: [
        "4+ years of backend development experience",
        "Strong expertise in Node.js and Express",
        "Experience with SQL and NoSQL databases",
        "Knowledge of cloud platforms (AWS, Azure, or GCP)",
        "Understanding of microservices architecture",
        "Experience with API design and documentation"
      ],
      benefits: [
        "Competitive salary package",
        "Remote work options",
        "Comprehensive health coverage",
        "Learning and development opportunities",
        "Collaborative team environment",
        "Latest development tools and resources"
      ]
    },
    {
      title: "DevOps Engineer",
      type: "Full-time",
      location: "Remote / Hybrid",
      description: "We&apos;re seeking a DevOps Engineer to help streamline our development and deployment processes. You&apos;ll work on automating infrastructure, implementing CI/CD pipelines, and ensuring system reliability.",
      requirements: [
        "3+ years of DevOps experience",
        "Experience with Docker and Kubernetes",
        "Knowledge of CI/CD tools (Jenkins, GitHub Actions)",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Monitoring and logging tools experience",
        "Strong scripting skills (Python, Bash)"
      ],
      benefits: [
        "Competitive compensation",
        "Remote work flexibility",
        "Health and wellness benefits",
        "Professional growth opportunities",
        "Modern tech stack",
        "Collaborative team culture"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-[#8958FE] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl opacity-90 mb-8">
              Build the future of technology with us. We&apos;re looking for passionate individuals
              who want to make a difference.
            </p>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <div className="flex justify-center">
              <TechCircuitSVG className="w-32 h-32 opacity-50" />
            </div>
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#222] mb-12 text-center">Open Positions</h2>
          <div className="grid gap-8">
            {jobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        </div>
      </div>

      {/* Why Join Us Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#222] mb-8">Why Join Us?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6">
                <div className="w-16 h-16 bg-[#8958FE] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#8958FE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
                <p className="text-gray-600">Continuous learning and career advancement paths</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-[#8958FE] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#8958FE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Great Culture</h3>
                <p className="text-gray-600">Collaborative environment with amazing colleagues</p>
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-[#8958FE] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#8958FE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Competitive Benefits</h3>
                <p className="text-gray-600">Comprehensive benefits package and perks</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 