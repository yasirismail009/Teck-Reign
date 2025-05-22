import Image from 'next/image';

export const metadata = {
  title: 'About Us - TekReign',
  description: 'Learn about TekReign - Our mission, vision, and the team behind innovative technology solutions.',
};

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-[var(--color-primary)] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About TekReign</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Empowering businesses through innovative technology solutions
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A2341] mb-4">Our Purpose</h2>
              <div className="w-20 h-1 bg-[#8958FE] mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-16">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-16 bg-[#8958FE]"></div>
                <h3 className="text-2xl font-bold mb-6 text-[#1A2341]">Mission</h3>
                <p className="text-[#7B819A] text-lg leading-relaxed">
                  To transform businesses through innovative technology solutions that drive growth,
                  efficiency, and competitive advantage in the digital age.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-16 bg-[#8958FE]"></div>
                <h3 className="text-2xl font-bold mb-6 text-[#1A2341]">Vision</h3>
                <p className="text-[#7B819A] text-lg leading-relaxed">
                  To be the leading technology partner for businesses worldwide, known for our
                  innovative solutions, exceptional service, and commitment to client success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1A2341]">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="bg-[#F5F7FA] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#8958FE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#1A2341]">Innovation</h3>
              <p className="text-[#7B819A]">Pushing boundaries and embracing new technologies</p>
            </div>
            <div className="text-center">
              <div className="bg-[#F5F7FA] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#8958FE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#1A2341]">Excellence</h3>
              <p className="text-[#7B819A]">Delivering the highest quality in everything we do</p>
            </div>
            <div className="text-center">
              <div className="bg-[#F5F7FA] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#8958FE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#1A2341]">Integrity</h3>
              <p className="text-[#7B819A]">Building trust through honest and ethical practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-[#F5F7FA]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#1A2341]">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[#E6E8F0]"></div>
              <h3 className="text-xl font-semibold mb-2 text-[#1A2341]">Muhammad Yasir Ismail</h3>
              <p className="text-[#8958FE] mb-2">Co-Founder</p>
              <p className="text-[#7B819A]">Visionary leader driving company innovation and growth</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[#E6E8F0]"></div>
              <h3 className="text-xl font-semibold mb-2 text-[#1A2341]">Manshoor</h3>
              <p className="text-[#8958FE] mb-2">Co-Founder</p>
              <p className="text-[#7B819A]">Strategic leader shaping company direction and success</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[#E6E8F0]"></div>
              <h3 className="text-xl font-semibold mb-2 text-[#1A2341]">Wajahat</h3>
              <p className="text-[#8958FE] mb-2">Business Development Manager</p>
              <p className="text-[#7B819A]">Driving business growth and client relationships</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 