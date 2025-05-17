import Hero from './components/Hero';
import ServiceCards from './components/ServiceCards';
import AboutUs from './components/AboutUs';
import ServicesSection from './components/ServicesSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import ContactShowcase from './components/ContactShowcase';
import FAQSection from './components/FAQSection';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "TeckReign",
            "url": "https://teckreign.com",
            "logo": "https://teckreign.com/logo.png",
            "description": "TeckReign delivers cutting-edge technology solutions, custom software development, and digital transformation services.",
            "sameAs": [
              "https://www.linkedin.com/company/teckreign",
              "https://twitter.com/teckreign",
              "https://www.facebook.com/teckreign"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-XXX-XXX-XXXX",
              "contactType": "customer service",
              "availableLanguage": "English"
            }
          })
        }}
      />
      <article className="font-sans flex flex-col items-center relative overflow-x-hidden bg-foreground" style={{ color: "var(--color-foreground)" }}>
        {/* Background overlay */}
        <div className="absolute inset-0 z-0" aria-hidden="true"></div>
        
        {/* Main content container */}
        <div className="w-full relative">
          <section className="mx-auto px-6 sm:px-12 lg:px-20" aria-label="Hero section">
            <Hero />
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
