import Hero from './components/Hero';
import KampaloSection from './components/KampaloSection';
import ServiceCards from './components/ServiceCards';
import AboutUs from './components/AboutUs';
import ServicesSection from './components/ServicesSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import ContactShowcase from './components/ContactShowcase';
import FAQSection from './components/FAQSection';
import Script from 'next/script';
import { createPageMetadata, SITE_URL } from '../lib/seo';

export const metadata = {
  ...createPageMetadata({
    title: 'AI Software, Agentic AI, ML & Digital Products',
    description:
      'TekReign builds Agentic AI, ML, LLM, and modern AI solutions—plus KAMPALO, an AI-based marketing analytics platform—and custom software, cloud, and digital products.',
    path: '/',
    keywords:
      'TekReign, Agentic AI, machine learning, ML, LLM, GenAI, modern AI solutions, KAMPALO, AI marketing platform, software development, digital transformation',
  }),
  title: {
    absolute: 'TekReign | Agentic AI, ML, LLMs & KAMPALO AI Marketing',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'TekReign',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  description:
    'TekReign builds Agentic AI, machine learning, LLM, and modern AI solutions, custom software, and KAMPALO—an AI-based marketing analytics platform.',
  sameAs: [
    'https://www.linkedin.com/company/tek-reign',
    'https://twitter.com/tekreign',
    'https://www.facebook.com/tekreign',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    url: `${SITE_URL}/contact-us`,
    availableLanguage: 'English',
  },
};

const kampaloProductSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'KAMPALO',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://kampalo.com/',
  description:
    'KAMPALO is TekReign’s AI-based marketing platform with Kai—an agentic supervisor and specialist mini-agents stack (LangGraph) for Google Ads, Meta, analytics, and search over synced campaign data, with hybrid ROAS/CTR/CPC decisions and LLM synthesis.',
  offers: {
    '@type': 'Offer',
    url: 'https://kampalo.com/',
    availability: 'https://schema.org/InStock',
  },
  provider: {
    '@type': 'Organization',
    name: 'TekReign',
    url: SITE_URL,
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What technologies does TekReign specialize in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'TekReign specializes in Agentic AI, machine learning (ML), large language models (LLMs), and modern AI solutions—plus cloud computing, blockchain, and web stacks such as React, Next.js, and Node.js.',
      },
    },
    {
      '@type': 'Question',
      name: 'What AI and machine learning capabilities does TekReign offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We deliver Agentic AI systems, custom ML models, LLM and GenAI applications (including RAG), and modern AI solutions—from prototypes to production.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is KAMPALO?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'KAMPALO is TekReign’s AI-based marketing platform with Kai—a supervisor plus specialist mini-agents for Google Ads, Meta, analytics, and search. It uses synced stats, deterministic ROAS/CTR/CPC decisions, LLM synthesis, and MCP-exposed tools.',
      },
    },
    {
      '@type': 'Question',
      name: 'What cloud platforms does TekReign work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work across AWS, Microsoft Azure, and Google Cloud Platform—covering architecture design, migration, optimization, and ongoing cloud infrastructure management.',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Script
        id="kampalo-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kampaloProductSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <article className="font-sans flex flex-col items-center relative overflow-x-hidden bg-white text-slate-900">
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-slate-50/80 via-white to-white" aria-hidden="true" />
        <div className="w-full relative">
          <section className="mx-auto px-6 sm:px-12 lg:px-20 pt-4 sm:pt-8" aria-label="Hero section">
            <Hero />
          </section>

          <section className="w-full" aria-label="KAMPALO product">
            <KampaloSection />
          </section>
          
          <section className="mx-auto px-6 sm:px-12 lg:px-20" aria-label="Service cards">
            <ServiceCards />
          </section>
          
          <section className="mx-auto px-6 sm:px-12 lg:px-20 bg-foreground" aria-label="About us">
            <AboutUs />
          </section>
          
          <section className="mx-auto px-6 sm:px-12 lg:px-20 bg-white" aria-label="Our services">
            <ServicesSection />
          </section>
          
          <section className="bg-[#0A1531] mx-auto px-6 sm:px-12 lg:px-20" aria-label="Case studies">
            <CaseStudiesSection />
          </section>
          
          <section className="mx-auto px-6 sm:px-12 lg:px-20 bg-white" aria-label="Contact us">
            <ContactShowcase />
          </section>
          
          <section className="mx-auto px-6 sm:px-12 lg:px-20 bg-foreground" aria-label="Frequently asked questions">
            <FAQSection />
          </section>
        </div>
      </article>
    </>
  );
}
