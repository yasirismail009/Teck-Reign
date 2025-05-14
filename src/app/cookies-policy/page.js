'use client'
import React from 'react';
import TableOfContents from './components/TableOfContents';

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 mx-auto px-6 sm:px-12 lg:px-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 py-12">
          {/* Main Content */}
          <div className="flex-1 bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">Cookies Policy</h1>
            
            <div className="space-y-10">
              <section id="introduction" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 mb-4">
                    Welcome to TeckReign&apos;s Cookies Policy. This policy explains how we use cookies and similar tracking technologies on our website. By using our website, you consent to the use of cookies as described in this policy.
                  </p>
                  <p className="text-gray-600">
                    We are committed to protecting your privacy and ensuring you have a positive experience on our website. This policy should be read alongside our Privacy Policy and Terms and Conditions.
                  </p>
                </div>
              </section>

              <section id="what-are-cookies" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. What Are Cookies</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 mb-4">
                    Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide useful information to website owners. Cookies can be:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Session cookies: Temporary cookies that expire when you close your browser</li>
                    <li>Persistent cookies: Remain on your device for a specified period</li>
                    <li>First-party cookies: Set by the website you&apos;re visiting</li>
                    <li>Third-party cookies: Set by a different website than the one you&apos;re visiting</li>
                  </ul>
                </div>
              </section>

              <section id="types-of-cookies" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
                <div className="prose prose-gray max-w-none space-y-6">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">3.1 Essential Cookies</h3>
                    <p className="text-gray-600 mb-4">
                      These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">3.2 Performance Cookies</h3>
                    <p className="text-gray-600 mb-4">
                      These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They help us improve the way our website works.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">3.3 Functionality Cookies</h3>
                    <p className="text-gray-600 mb-4">
                      These cookies allow the website to remember choices you make and provide enhanced, more personal features. They may be set by us or by third-party providers.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-3">3.4 Targeting Cookies</h3>
                    <p className="text-gray-600 mb-4">
                      These cookies track your browsing habits to enable us to show advertising which is more likely to be of interest to you. They are also used to limit the number of times you see an advertisement.
                    </p>
                  </div>
                </div>
              </section>

              <section id="how-we-use-cookies" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. How We Use Cookies</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 mb-4">
                    We use cookies for the following purposes:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>To maintain your session and remember your preferences</li>
                    <li>To analyze how you use our website and improve its performance</li>
                    <li>To personalize your experience and show relevant content</li>
                    <li>To measure the effectiveness of our marketing campaigns</li>
                    <li>To provide social media features and share content</li>
                    <li>To detect and prevent fraud or unauthorized access</li>
                  </ul>
                </div>
              </section>

              <section id="third-party-cookies" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Third-Party Cookies</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 mb-4">
                    We use various third-party services that may set cookies on your device:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Google Analytics for website analytics</li>
                    <li>Social media platforms for sharing and integration</li>
                    <li>Advertising networks for targeted advertising</li>
                    <li>Payment processors for secure transactions</li>
                    <li>Customer support tools for assistance</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    These third parties have their own privacy policies and may collect information as specified in their respective policies.
                  </p>
                </div>
              </section>

              <section id="cookie-controls" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookie Controls</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 mb-4">
                    You can control and manage cookies in various ways:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Browser settings: Most web browsers allow you to control cookies through their settings</li>
                    <li>Cookie consent: We provide a cookie consent banner when you first visit our website</li>
                    <li>Third-party opt-outs: Many third-party services provide opt-out mechanisms</li>
                    <li>Do Not Track: Some browsers offer a &quot;Do Not Track&quot; feature</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    Please note that disabling certain cookies may affect the functionality of our website.
                  </p>
                </div>
              </section>

              <section id="cookie-preferences" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Managing Cookie Preferences</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 mb-4">
                    You can manage your cookie preferences through:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Our cookie consent banner</li>
                    <li>Your browser settings</li>
                    <li>Third-party opt-out tools</li>
                    <li>Contacting our support team</li>
                  </ul>
                  <p className="text-gray-600 mt-4">
                    We regularly review and update our cookie settings to ensure they align with best practices and legal requirements.
                  </p>
                </div>
              </section>

              <section id="updates" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Updates to This Policy</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600">
                    We may update this Cookies Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated policy on our website and updating the &quot;Last Updated&quot; date.
                  </p>
                </div>
              </section>

              <section id="contact" className="scroll-mt-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Contact Us</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 mb-4">
                    If you have any questions about our use of cookies or this policy, please contact us at:
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6 space-y-3">
                    <p className="text-gray-700">Email: privacy@teckreign.com</p>
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

export default CookiesPolicy; 