'use client'
import React from 'react';
import TableOfContents from './components/TableOfContents';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 mx-auto px-6 sm:px-12 lg:px-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 py-12">
          {/* Main Content */}
          <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">Terms of Service</h1>
            
            <div className="space-y-10">
              <section id="introduction" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 mb-4">
                    Welcome to TeckReign&apos;s Terms of Service. This agreement outlines the terms and conditions for using our services. By accessing or using our platform, you agree to be bound by these terms. Please read them carefully before proceeding.
                  </p>
                  <p className="text-gray-600">
                    These terms form a legally binding agreement between you and TeckReign. If you do not agree with any part of these terms, you may not use our services.
                  </p>
                </div>
              </section>

              <section id="definitions" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Definitions</h2>
                <div className="prose prose-gray max-w-none">
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>&quot;Platform&quot; refers to TeckReign&apos;s website and all associated services</li>
                    <li>&quot;User&quot; refers to any individual or entity using our Platform</li>
                    <li>&quot;Content&quot; refers to all materials, information, and data available through our Platform</li>
                    <li>&quot;Account&quot; refers to a user&apos;s registration with our Platform</li>
                    <li>&quot;Services&quot; refers to all features, functionality, and offerings provided by TeckReign</li>
                  </ul>
                </div>
              </section>

              <section id="account-terms" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Account Terms</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 mb-4">
                    To access certain features of our Platform, you must create an account. By creating an account, you agree to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Notify us immediately of any unauthorized access</li>
                    <li>Accept responsibility for all activities under your account</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                </div>
              </section>

              <section id="service-usage" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Service Usage</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 mb-4">
                    When using our Platform, you agree to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Use the Platform only for lawful purposes</li>
                    <li>Respect intellectual property rights</li>
                    <li>Not engage in any harmful or disruptive activities</li>
                    <li>Not attempt to gain unauthorized access</li>
                    <li>Not use automated systems or bots without permission</li>
                    <li>Not interfere with the proper functioning of the Platform</li>
                  </ul>
                </div>
              </section>

              <section id="intellectual-property" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 mb-4">
                    All content, features, and functionality of our Platform are owned by TeckReign and are protected by international copyright, trademark, and other intellectual property laws. You may not:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Copy or modify any part of our Platform</li>
                    <li>Use our trademarks or branding without permission</li>
                    <li>Remove any copyright or proprietary notices</li>
                    <li>Use our content for commercial purposes without consent</li>
                  </ul>
                </div>
              </section>

              <section id="user-content" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. User Content</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 mb-4">
                    By submitting content to our Platform, you:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Grant us a worldwide, non-exclusive license to use your content</li>
                    <li>Warrant that you have all necessary rights to submit the content</li>
                    <li>Agree that your content does not violate any third-party rights</li>
                    <li>Accept responsibility for any claims arising from your content</li>
                  </ul>
                </div>
              </section>

              <section id="limitations" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Service Limitations</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 mb-4">
                    To the maximum extent permitted by law:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>We provide the Platform &quot;as is&quot; without warranties</li>
                    <li>We are not liable for any indirect, incidental, or consequential damages</li>
                    <li>Our total liability shall not exceed the amount paid by you for the Services</li>
                    <li>We are not responsible for any third-party content or services</li>
                  </ul>
                </div>
              </section>

              <section id="termination" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Service Termination</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600">
                    We reserve the right to terminate or suspend your access to the Platform at any time, without notice, for any reason, including but not limited to violation of these Terms. Upon termination, your right to use the Platform will immediately cease.
                  </p>
                </div>
              </section>

              <section id="changes" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Changes to Service</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600">
                    We reserve the right to modify these Terms and our Services at any time. We will notify users of any material changes by posting the new Terms on this page and updating the &quot;Last Updated&quot; date. Your continued use of the Platform after such modifications constitutes your acceptance of the new Terms.
                  </p>
                </div>
              </section>

              <section id="governing-law" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Governing Law</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600">
                    These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
                  </p>
                </div>
              </section>

              <section id="contact" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Information</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 mb-4">
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                    <p className="text-gray-700">Email: legal@teckreign.com</p>
                    <p className="text-gray-700">Phone: [Your Phone Number]</p>
                    <p className="text-gray-700">Address: [Your Business Address]</p>
                  </div>
                </div>
              </section>

              <section className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  Last Updated: {new Date().toLocaleDateString()}
                </p>
              </section>
            </div>
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block w-96 flex-shrink-0">
            <TableOfContents />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 