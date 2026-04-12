import Hero from './components/Hero';
import KampaloSection from './components/KampaloSection';
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
            "name": "TekReign",
            "url": "https://tekreign.com",
            "logo": "https://tekreign.com/logo.png",
            "description": "TekReign delivers cutting-edge technology solutions, custom software development, and digital transformation services.",
            "sameAs": [
              "https://www.linkedin.com/company/tekreign",
              "https://twitter.com/tekreign",
              "https://www.facebook.com/tekreign"
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
