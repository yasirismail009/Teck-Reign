import Hero from './components/Hero';
import ServiceCards from './components/ServiceCards';
import AboutUs from './components/AboutUs';
import ServicesSection from './components/ServicesSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import ContactShowcase from './components/ContactShowcase';
import FAQSection from './components/FAQSection';

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center relative overflow-x-hidden bg-foreground" style={{ color: "var(--color-foreground)" }}>
      {/* Background overlay */}
      <div className="absolute inset-0 z-0"></div>
      
      {/* Main content container */}
      <div className="w-full relative">
        <div className="mx-auto px-6 sm:px-12 lg:px-20">
          <Hero />
        </div>
        <div className="mx-auto px-6 sm:px-12 lg:px-20">
          <ServiceCards />
        </div>
        <div className="mx-auto px-6 sm:px-12 lg:px-20 bg-foreground">
          <AboutUs />
        </div>
        <div className="mx-auto px-6 sm:px-12 lg:px-20 bg-white">
          <ServicesSection />
        </div>
        <div className="bg-[#0A1531] mx-auto px-6 sm:px-12 lg:px-20">
          <CaseStudiesSection />
        </div>
        <div className="mx-auto px-6 sm:px-12 lg:px-20 bg-white">
          <ContactShowcase />
        </div>
        <div className="mx-auto px-6 sm:px-12 lg:px-20 bg-foreground">
          <FAQSection />
        </div>
      </div>
    </div>
  );
}
