import React, { useState, useEffect } from 'react';

const TableOfContents = () => {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'what-are-cookies', title: '2. What Are Cookies' },
    { id: 'types-of-cookies', title: '3. Types of Cookies We Use' },
    { id: 'how-we-use-cookies', title: '4. How We Use Cookies' },
    { id: 'third-party-cookies', title: '5. Third-Party Cookies' },
    { id: 'cookie-controls', title: '6. Cookie Controls' },
    { id: 'cookie-preferences', title: '7. Managing Cookie Preferences' },
    { id: 'updates', title: '8. Updates to This Policy' },
    { id: 'contact', title: '9. Contact Us' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-200 pb-3">Table of Contents</h3>
        <nav className="space-y-1">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`block py-2 px-3 rounded-md text-sm transition-all duration-200 ${
                activeSection === section.id
                  ? 'bg-blue-50 text-blue-700 font-medium shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {section.title}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default TableOfContents; 