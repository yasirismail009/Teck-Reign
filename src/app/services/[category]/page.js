'use client'
import React, { useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';

const servicesData = {
  'software-development': {
    title: "Software Development",
    description: "Transform your ideas into powerful digital solutions with our comprehensive software development services.",
    icon: "💻",
    overview: "Our software development services combine cutting-edge technology with industry best practices to deliver scalable, secure, and high-performance solutions. We follow an agile methodology to ensure timely delivery and continuous improvement.",
    process: [
      "Requirement Analysis & Planning",
      "Architecture Design & Technology Selection",
      "Development & Implementation",
      "Quality Assurance & Testing",
      "Deployment & Launch",
      "Maintenance & Support"
    ],
    results: [
      "Scalable and maintainable software solutions",
      "Improved operational efficiency",
      "Enhanced user experience",
      "Reduced development costs",
      "Faster time to market",
      "Ongoing technical support"
    ],
    items: [
      {
        title: "Web Development",
        description: "Custom web applications built with modern technologies and best practices.",
        features: ["Responsive Design", "Progressive Web Apps", "E-commerce Solutions", "CMS Development"],
        subservices: [
          {
            name: "Frontend Development",
            description: "Building responsive and interactive user interfaces using React, Vue, or Angular",
            technologies: ["React", "Vue.js", "Angular", "Next.js", "Tailwind CSS"]
          },
          {
            name: "Backend Development",
            description: "Developing robust server-side applications and APIs",
            technologies: ["Node.js", "Python", "Java", "PHP", "GraphQL"]
          },
          {
            name: "E-commerce Solutions",
            description: "Creating scalable online stores with advanced features",
            technologies: ["Shopify", "WooCommerce", "Magento", "Custom Solutions"]
          }
        ]
      },
      {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile applications for iOS and Android.",
        features: ["iOS Development", "Android Development", "React Native", "Flutter"],
        subservices: [
          {
            name: "Native iOS Development",
            description: "Building high-performance iOS applications using Swift",
            technologies: ["Swift", "SwiftUI", "Core Data", "ARKit"]
          },
          {
            name: "Native Android Development",
            description: "Creating feature-rich Android applications using Kotlin",
            technologies: ["Kotlin", "Jetpack", "Material Design", "Android Studio"]
          },
          {
            name: "Cross-platform Development",
            description: "Developing apps that work seamlessly across multiple platforms",
            technologies: ["React Native", "Flutter", "Xamarin", "Ionic"]
          }
        ]
      },
      {
        title: "Custom Software Solutions",
        description: "Tailored software solutions designed to meet your specific business needs.",
        features: ["Enterprise Software", "Business Process Automation", "Custom CRM", "ERP Solutions"],
        subservices: [
          {
            name: "Enterprise Software",
            description: "Developing custom enterprise-grade applications",
            technologies: [".NET", "Java EE", "Spring Boot", "Microservices"]
          },
          {
            name: "Business Process Automation",
            description: "Automating repetitive tasks and workflows",
            technologies: ["RPA", "Workflow Automation", "BPM", "Integration Tools"]
          },
          {
            name: "Custom CRM/ERP",
            description: "Building tailored customer and resource management systems",
            technologies: ["Salesforce", "SAP", "Oracle", "Custom Solutions"]
          }
        ]
      },
      {
        title: "API Development",
        description: "Robust and scalable API development for seamless integration.",
        features: ["RESTful APIs", "GraphQL", "API Documentation", "Integration Services"]
      },
      {
        title: "Cloud Services",
        description: "Cloud infrastructure and deployment solutions for optimal performance.",
        features: ["AWS", "Azure", "Google Cloud", "Cloud Migration"]
      },
      {
        title: "DevOps & CI/CD",
        description: "Streamline your development and deployment processes.",
        features: ["Continuous Integration", "Continuous Deployment", "Infrastructure as Code", "Monitoring"]
      },
      {
        title: "Quality Assurance",
        description: "Comprehensive testing and quality assurance services.",
        features: ["Automated Testing", "Performance Testing", "Security Testing", "User Acceptance Testing"]
      },
      {
        title: "Technical Consulting",
        description: "Expert guidance for your technical decisions and implementations.",
        features: ["Architecture Design", "Technology Stack Selection", "Code Review", "Performance Optimization"]
      }
    ]
  },
  'digital-marketing': {
    title: "Digital Marketing",
    description: "Boost your online presence and drive growth with our data-driven digital marketing strategies.",
    icon: "📱",
    overview: "Our digital marketing services are designed to increase your online visibility, engage your target audience, and drive measurable business growth. We combine data-driven strategies with creative content to deliver exceptional results.",
    process: [
      "Market Research & Analysis",
      "Strategy Development",
      "Content Creation & Optimization",
      "Campaign Implementation",
      "Performance Monitoring",
      "Continuous Optimization"
    ],
    results: [
      "Increased brand visibility",
      "Higher conversion rates",
      "Improved ROI",
      "Enhanced customer engagement",
      "Better market positioning",
      "Measurable business growth"
    ],
    items: [
      {
        title: "SEO Optimization",
        description: "Improve your search engine rankings and organic traffic.",
        features: ["Keyword Research", "On-page SEO", "Technical SEO", "Link Building"],
        subservices: [
          {
            name: "Technical SEO",
            description: "Optimizing website structure and performance",
            technologies: ["Core Web Vitals", "Schema Markup", "XML Sitemaps", "Mobile Optimization"]
          },
          {
            name: "Content SEO",
            description: "Creating search-engine optimized content",
            technologies: ["Keyword Research", "Content Strategy", "Meta Optimization", "Internal Linking"]
          },
          {
            name: "Local SEO",
            description: "Improving local search visibility",
            technologies: ["Google My Business", "Local Citations", "Review Management", "Local Content"]
          }
        ]
      },
      {
        title: "Social Media Marketing",
        description: "Engage with your audience across all major social platforms.",
        features: ["Content Strategy", "Community Management", "Paid Social", "Social Analytics"],
        subservices: [
          {
            name: "Social Media Strategy",
            description: "Developing comprehensive social media strategies",
            platforms: ["Facebook", "Instagram", "LinkedIn", "Twitter", "TikTok"]
          },
          {
            name: "Content Creation",
            description: "Creating engaging social media content",
            types: ["Posts", "Stories", "Videos", "Live Streams", "Carousels"]
          },
          {
            name: "Community Management",
            description: "Building and managing online communities",
            services: ["Engagement", "Moderation", "Crisis Management", "Growth Strategy"]
          }
        ]
      },
      {
        title: "Content Marketing",
        description: "Create valuable content that attracts and converts your target audience.",
        features: ["Blog Writing", "Video Content", "Infographics", "Content Strategy"],
        subservices: [
          {
            name: "Content Strategy",
            description: "Developing comprehensive content strategies",
            services: ["Audience Research", "Content Planning", "Distribution Strategy", "Performance Analysis"]
          },
          {
            name: "Content Creation",
            description: "Creating various types of content",
            types: ["Blog Posts", "Whitepapers", "Case Studies", "Videos", "Infographics"]
          },
          {
            name: "Content Distribution",
            description: "Distributing content across multiple channels",
            channels: ["Social Media", "Email", "Content Syndication", "Influencer Marketing"]
          }
        ]
      },
      {
        title: "PPC Advertising",
        description: "Drive targeted traffic and conversions through paid advertising.",
        features: ["Google Ads", "Social Media Ads", "Display Advertising", "Remarketing"]
      },
      {
        title: "Email Marketing",
        description: "Build and nurture relationships with your audience through email.",
        features: ["Email Campaigns", "Automation", "Newsletter Design", "List Management"]
      },
      {
        title: "Analytics & Reporting",
        description: "Make data-driven decisions with comprehensive analytics.",
        features: ["Performance Tracking", "Conversion Analysis", "ROI Measurement", "Custom Reports"]
      },
      {
        title: "Conversion Rate Optimization",
        description: "Optimize your website to convert more visitors into customers.",
        features: ["A/B Testing", "User Experience", "Landing Page Optimization", "Funnel Analysis"]
      },
      {
        title: "Digital Strategy",
        description: "Develop a comprehensive digital strategy aligned with your business goals.",
        features: ["Market Research", "Competitor Analysis", "Strategy Development", "Implementation Planning"]
      }
    ]
  },
  'design-ux': {
    title: "UI/UX Design",
    description: "Create exceptional user experiences with our comprehensive design services.",
    icon: "🎨",
    overview: "Our UI/UX design services focus on creating intuitive, engaging, and user-centered digital experiences. We combine creativity with user research to deliver designs that not only look great but also drive results.",
    items: [
      {
        title: "User Interface Design",
        description: "Create beautiful and functional interfaces that users love to interact with.",
        features: [
          "Visual Design",
          "Component Design",
          "Responsive Design",
          "Design Systems",
          "Accessibility",
          "Interactive Prototypes"
        ],
        subservices: [
          {
            name: "Visual Design",
            description: "Creating visually appealing interfaces that align with brand guidelines and user expectations"
          },
          {
            name: "Component Design",
            description: "Designing reusable UI components for consistent and efficient development"
          },
          {
            name: "Responsive Design",
            description: "Creating designs that work seamlessly across all devices and screen sizes"
          }
        ]
      },
      {
        title: "User Experience Design",
        description: "Design intuitive and engaging user experiences that solve real problems.",
        features: [
          "User Research",
          "Information Architecture",
          "User Flows",
          "Wireframing",
          "Usability Testing",
          "User Journey Mapping"
        ],
        subservices: [
          {
            name: "User Research",
            description: "Understanding user needs, behaviors, and pain points through various research methods"
          },
          {
            name: "Information Architecture",
            description: "Organizing and structuring content for optimal user navigation and understanding"
          },
          {
            name: "User Flows",
            description: "Mapping out user journeys and interactions to create seamless experiences"
          }
        ]
      },
      {
        title: "Prototyping & Testing",
        description: "Validate your designs through interactive prototypes and user testing.",
        features: [
          "Interactive Prototypes",
          "Usability Testing",
          "A/B Testing",
          "User Feedback",
          "Design Iteration",
          "Performance Testing"
        ],
        subservices: [
          {
            name: "Interactive Prototyping",
            description: "Creating high-fidelity interactive prototypes to test and validate design solutions"
          },
          {
            name: "Usability Testing",
            description: "Conducting tests with real users to identify and fix usability issues"
          },
          {
            name: "Design Iteration",
            description: "Refining designs based on user feedback and testing results"
          }
        ]
      },
      {
        title: "Design Systems",
        description: "Create scalable and consistent design systems for your products.",
        features: [
          "Component Libraries",
          "Style Guides",
          "Design Tokens",
          "Documentation",
          "Version Control",
          "Design Governance"
        ],
        subservices: [
          {
            name: "Component Libraries",
            description: "Building comprehensive libraries of reusable UI components"
          },
          {
            name: "Style Guides",
            description: "Creating detailed guidelines for consistent design implementation"
          },
          {
            name: "Design Documentation",
            description: "Documenting design decisions, patterns, and best practices"
          }
        ]
      },
      {
        title: "Mobile App Design",
        description: "Design engaging and intuitive mobile experiences.",
        features: [
          "iOS Design",
          "Android Design",
          "Mobile Prototyping",
          "Gesture Design",
          "Mobile UX",
          "App Store Optimization"
        ],
        subservices: [
          {
            name: "Platform-Specific Design",
            description: "Creating designs that follow iOS and Android platform guidelines"
          },
          {
            name: "Mobile UX Design",
            description: "Designing optimal user experiences for mobile devices"
          },
          {
            name: "Mobile Prototyping",
            description: "Building interactive prototypes for mobile applications"
          }
        ]
      },
      {
        title: "Web Design",
        description: "Create beautiful and functional websites that convert.",
        features: [
          "Website Design",
          "Landing Pages",
          "E-commerce Design",
          "Web Prototyping",
          "Responsive Design",
          "Web Accessibility"
        ],
        subservices: [
          {
            name: "Website Design",
            description: "Creating engaging and conversion-focused website designs"
          },
          {
            name: "Landing Page Design",
            description: "Designing high-converting landing pages for marketing campaigns"
          },
          {
            name: "E-commerce Design",
            description: "Creating intuitive shopping experiences for online stores"
          }
        ]
      }
    ]
  }
};

export default function ServicePage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const category = params.category;
  const serviceData = servicesData[category];
  const section = searchParams?.get('section');

  useEffect(() => {
    if (section) {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [section]);

  if (!serviceData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">Service category not found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="mb-3">
            <span className="block text-3xl sm:text-5xl md:text-6xl font-light text-gray-400" style={{ letterSpacing: '-0.02em' }}>
              {serviceData.title}
            </span>
            <span className="block text-4xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 mt-1" style={{ letterSpacing: '-0.03em' }}>
              {serviceData.description}
            </span>
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-gray-400 mb-8 mx-auto">
            {serviceData.overview}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="/contact-us"
              className="px-8 py-3 rounded-lg font-semibold shadow transition bg-[#8958FE] hover:bg-[#7B4FE0] text-white text-base sm:text-lg"
            >
              Contact Us
            </a>
            <a href="#" className="font-bold flex items-center gap-1 text-gray-900 hover:underline text-base sm:text-lg">
              Case Studies <span className="text-lg">↗</span>
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceData.items.map((item, index) => (
            <div 
              key={index}
              id={item.title.toLowerCase().replace(/\s+/g, '-')}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* <div className="text-4xl mb-6">{serviceData.icon}</div> */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.description}</p>
              
              {/* Features */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-[#8958FE] mb-4">Key Features</h4>
                <ul className="space-y-3">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-3 text-[#8958FE]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subservices */}
              {item.subservices && item.subservices.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold text-[#8958FE] mb-4">Subservices</h4>
                  <div className="space-y-4">
                    {item.subservices.map((subservice, subIndex) => (
                      <div key={subIndex} className="bg-[#8958FE]/5 rounded-lg p-4 border border-[#8958FE]/20">
                        <h5 className="font-bold text-[#8958FE] text-base mb-2">{subservice.name}</h5>
                        <p className="text-gray-600 text-sm">{subservice.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-[#8958FE] text-white rounded-lg p-8 shadow-lg max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-6">Let&apos;s discuss how our {serviceData.title.toLowerCase()} services can help achieve your goals.</p>
            <a
              href="/contact-us"
              className="inline-block bg-white text-[#8958FE] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 