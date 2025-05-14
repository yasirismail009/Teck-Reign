import React, { useState, useEffect, useMemo } from 'react';

const TableOfContents = () => {
  const [activeSection, setActiveSection] = useState('');

  const sections = useMemo(() => [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'definitions', title: '2. Definitions' },
    { id: 'account-terms', title: '3. Account Terms' },
    { id: 'service-usage', title: '4. Service Usage' },
    { id: 'intellectual-property', title: '5. Intellectual Property' },
    { id: 'user-content', title: '6. User Content' },
    { id: 'limitations', title: '7. Service Limitations' },
    { id: 'termination', title: '8. Service Termination' },
    { id: 'changes', title: '9. Changes to Service' },
    { id: 'governing-law', title: '10. Governing Law' },
    { id: 'contact', title: '11. Contact Information' },
  ], []);

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
  }, [sections]);

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