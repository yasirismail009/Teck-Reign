import React from 'react';
import Link from 'next/link';

const services = [
  {
    icon: "💻",
    title: 'Software Development',
    description: 'Transform your ideas into powerful digital solutions with our comprehensive software development services.',
    tags: [
      'Web Development',
      'Mobile App Development',
      'Custom Software Solutions',
      'API Development'
    ],
  },
  {
    icon: "📱",
    title: 'Digital Marketing',
    description: 'Boost your online presence and drive growth with our data-driven digital marketing strategies.',
    tags: [
      'SEO Optimization',
      'Social Media Marketing',
      'Content Marketing',
      'PPC Advertising'
    ],
  },
  {
    icon: "🎨",
    title: 'Design UX',
    description: 'Create exceptional user experiences with our comprehensive design services.',
    tags: [
      'UI/UX Design',
      'Brand Identity',
      'Web Design',
      'Mobile App Design'
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full mx-auto py-16 px-4 sm:px-8">
      <div className="text-xl font-semibold tracking-wider text-gray-500 mb-6">/SERVICES</div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.map((service, idx) => (
          <div key={service.title} className="flex flex-col items-start">
            <div className="text-4xl mb-6">{service.icon}</div>
            <Link 
              href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-2xl font-bold mb-2 text-black/90 hover:text-[#8958FE] transition-colors"
            >
              {service.title}
            </Link>
            <p className="text-gray-500 mb-6 max-w-xs leading-relaxed">{service.description}</p>
            <hr className="w-full border-gray-200 mb-6" />
            <div className="flex flex-wrap gap-3">
              {service.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}#${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-gray-100 text-gray-700 rounded-full px-4 py-2 text-sm font-semibold shadow-sm border border-gray-200 hover:bg-[#8958FE] hover:text-white hover:border-[#8958FE] transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 