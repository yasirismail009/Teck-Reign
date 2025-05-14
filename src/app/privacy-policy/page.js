'use client'
import React from 'react';
import TableOfContents from './components/TableOfContents';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 mx-auto px-6 sm:px-12 lg:px-20">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 py-12">
          {/* Main Content */}
          <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">Privacy Policy</h1>
            
            <div className="space-y-10">
              <section id="introduction" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 mb-4">
                    Welcome to TeckReign&apos;s Privacy Policy. This document outlines how we collect, use, and protect your personal information when you use our website and services. We are committed to ensuring that your privacy is protected and that we comply with all applicable data protection laws and regulations.
                  </p>
                  <p className="text-gray-600">
                    By using our website and services, you consent to the collection and use of information in accordance with this policy. We may update this policy from time to time, and any changes will be posted on this page.
                  </p>
                </div>
              </section>

              <section id="information-collection" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                <div className="prose prose-gray max-w-none space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">2.1 Personal Information</h3>
                    <p className="text-gray-600 mb-4">
                      We collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li>Register for an account or subscribe to our services</li>
                      <li>Fill out contact forms or request information</li>
                      <li>Participate in surveys or promotions</li>
                      <li>Apply for employment opportunities</li>
                      <li>Engage with our customer support team</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">2.2 Automatically Collected Information</h3>
                    <p className="text-gray-600 mb-4">
                      When you visit our website, we automatically collect certain technical information about your device and usage patterns:
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2">
                      <li>IP address and location data</li>
                      <li>Browser type, version, and settings</li>
                      <li>Operating system and device information</li>
                      <li>Pages visited and time spent on each page</li>
                      <li>Referring website or source</li>
                      <li>Clickstream data and navigation patterns</li>
                      <li>Device identifiers and characteristics</li>
                      <li>Network connection information</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="information-usage" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 mb-4">
                    We use the collected information for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>To provide, maintain, and improve our services</li>
                    <li>To process transactions and manage your account</li>
                    <li>To communicate with you about our services, updates, and promotions</li>
                    <li>To respond to your inquiries and provide customer support</li>
                    <li>To personalize your experience and deliver relevant content</li>
                    <li>To conduct research and analysis to improve our services</li>
                    <li>To detect and prevent fraud or unauthorized access</li>
                    <li>To comply with legal obligations and enforce our terms</li>
                    <li>To send you marketing communications (with your explicit consent)</li>
                    <li>To facilitate business operations and administrative tasks</li>
                  </ul>
                </div>
              </section>

              <section id="data-security" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 mb-4">
                    We implement comprehensive security measures to protect your personal information:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication mechanisms</li>
                    <li>Secure data storage and backup procedures</li>
                    <li>Employee training on data protection</li>
                    <li>Incident response and breach notification procedures</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    While we strive to protect your information, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security but are committed to maintaining appropriate safeguards.
                  </p>
                </div>
              </section>

              <section id="cookies" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies and Tracking Technologies</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 mb-4">
                    We use various tracking technologies to enhance your experience:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Essential cookies for website functionality</li>
                    <li>Analytics cookies to understand user behavior</li>
                    <li>Marketing cookies for targeted advertising</li>
                    <li>Social media plugins and integration</li>
                    <li>Web beacons and pixel tags</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    You can control cookie preferences through your browser settings. However, disabling certain cookies may affect website functionality.
                  </p>
                </div>
              </section>

              <section id="third-party" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Third-Party Services</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 mb-4">
                    We may use third-party services for various purposes:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Payment processing and financial services</li>
                    <li>Analytics and performance monitoring</li>
                    <li>Customer relationship management</li>
                    <li>Email marketing and communication</li>
                    <li>Cloud storage and hosting services</li>
                    <li>Security and fraud prevention</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    These services have their own privacy policies and may collect information as specified in their respective policies.
                  </p>
                </div>
              </section>

              <section id="your-rights" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 mb-4">
                    Under applicable data protection laws, you have the following rights:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Right to access your personal information</li>
                    <li>Right to correct inaccurate or incomplete data</li>
                    <li>Right to request deletion of your data</li>
                    <li>Right to restrict or object to processing</li>
                    <li>Right to data portability</li>
                    <li>Right to withdraw consent</li>
                    <li>Right to lodge a complaint with supervisory authorities</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </div>
              </section>

              <section id="international-transfers" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. International Data Transfers</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600">
                    We may transfer your information internationally. When we do, we ensure appropriate safeguards are in place to protect your data in accordance with applicable laws and regulations.
                  </p>
                </div>
              </section>

              <section id="children-privacy" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Children&apos;s Privacy</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600">
                    Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                  </p>
                </div>
              </section>

              <section id="policy-changes" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600">
                    We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the &quot;Last Updated&quot; date. We encourage you to review this policy regularly.
                  </p>
                </div>
              </section>

              <section id="contact" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 mb-4">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                    <p className="text-gray-700">Email: privacy@teckreign.com</p>
                    <p className="text-gray-700">Phone: [Your Phone Number]</p>
                    <p className="text-gray-700">Address: [Your Business Address]</p>
                    <p className="text-gray-700">Data Protection Officer: [DPO Name]</p>
                  </div>
                  <p className="text-gray-600 mt-4">
                    We will respond to your request within 30 days of receipt.
                  </p>
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

export default PrivacyPolicy; 