import React from 'react';
import Link from 'next/link';

const AI_PRODUCT_LINKS = {
  KAMPALO: '/case-studies/32',
  AuditQA: '/case-studies/33',
  'Hey Iris': '/case-studies/28',
  TerraSkyAI: '/case-studies/35',
};

const services = [
  {
    icon: '🤖',
    title: 'AI Solutions',
    slug: 'software-development',
    description:
      'Agentic AI, ML, computer vision, and modern AI products—including KAMPALO, AuditQA, Hey Iris, and TerraSkyAI (drone CV)—built for production.',
    tags: ['Agentic AI', 'KAMPALO', 'TerraSkyAI', 'AuditQA'],
  },
  {
    icon: '💻',
    title: 'Software Development',
    slug: 'software-development',
    description:
      'Turn ideas into reliable web apps, mobile apps, custom software, and APIs built for real business use.',
    tags: [
      'Web Development',
      'Mobile App Development',
      'Custom Software Solutions',
      'API Development',
    ],
  },
  {
    icon: '📱',
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    description:
      'Grow visibility with SEO, social, content, and PPC—supported by KAMPALO, our AI-based marketing platform.',
    tags: [
      'SEO Optimization',
      'Social Media Marketing',
      'Content Marketing',
      'PPC Advertising',
    ],
  },
  {
    icon: '🎨',
    title: 'Design & UX',
    slug: 'design-ux',
    description:
      'Design clear, conversion-focused interfaces—UI/UX, brand identity, websites, and mobile app experiences.',
    tags: ['UI/UX Design', 'Brand Identity', 'Web Design', 'Mobile App Design'],
  },
];

function tagHref(serviceSlug, tag) {
  if (AI_PRODUCT_LINKS[tag]) return AI_PRODUCT_LINKS[tag];
  return `/services/${serviceSlug}#${tag.toLowerCase().replace(/\s+/g, '-')}`;
}

export default function ServicesSection() {
  return (
    <section className="w-full mx-auto py-16 px-4 sm:px-8">
      <div className="text-xl font-semibold tracking-wider text-gray-500 mb-6">/SERVICES</div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {services.map((service) => (
          <div key={service.title} className="flex flex-col items-start">
            <div className="text-4xl mb-6">{service.icon}</div>
            <Link
              href={`/services/${service.slug}`}
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
                  href={tagHref(service.slug, tag)}
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
