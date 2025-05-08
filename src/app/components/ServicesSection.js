import React from 'react';

const services = [
  {
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <circle cx="28" cy="28" r="28" fill="#A084FE" />
          <path d="M28 14C21.3726 14 16 19.3726 16 26C16 32.6274 21.3726 38 28 38C34.6274 38 40 32.6274 40 26C40 19.3726 34.6274 14 28 14ZM28 36C22.4772 36 18 31.5228 18 26C18 20.4772 22.4772 16 28 16C33.5228 16 38 20.4772 38 26C38 31.5228 33.5228 36 28 36Z" fill="#fff" />
        </g>
      </svg>
    ),
    title: 'Strategic Services',
    description: 'Boxes Has Successfully Worked Across Various Sectors, Leveraging Cutting-Edge Technology...',
    tags: [
      'Crisis Management',
      'Reputation Management',
      'Media Relations',
      'Public Relations',
      'Advertising',
    ],
  },
  {
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <circle cx="28" cy="28" r="28" fill="#A084FE" />
          <path d="M18 38L28 18L38 38H18Z" fill="#fff" />
        </g>
      </svg>
    ),
    title: 'Financial Services',
    description: 'Boxes Has Successfully Worked Across Various Sectors, Leveraging Cutting-Edge Technology...',
    tags: [
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
  {
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <circle cx="28" cy="28" r="28" fill="#A084FE" />
          <path d="M20 36C20 32.6863 22.6863 30 26 30H30C33.3137 30 36 32.6863 36 36" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
          <circle cx="28" cy="24" r="4" fill="#fff" />
        </g>
      </svg>
    ),
    title: 'Digital Services',
    description: 'Boxes Has Successfully Worked Across Various Sectors, Leveraging Cutting-Edge Technology...',
    tags: [
      'SEO & PPC',
      'Content Marketing',
      'E-Commerce Solutions',
      'Tech Integration',
      'Social Media Management',
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
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-black/90">{service.title}</h3>
              <p className="text-gray-500 mb-6 max-w-xs leading-relaxed">{service.description}</p>
              <hr className="w-full border-gray-200 mb-6" />
              <div className="flex flex-wrap gap-3">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 rounded-full px-4 py-2 text-sm font-semibold shadow-sm border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
      </div>
    </section>
  );
} 