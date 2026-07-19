import { createPageMetadata } from '../../lib/seo';

export const metadata = createPageMetadata({
  title: 'Privacy Policy',
  description:
    "Read TekReign's Privacy Policy to understand how we collect, use, and protect your personal information when you use our website and services.",
  path: '/privacy-policy',
  keywords: 'TekReign privacy policy, data protection, personal information',
});

export default function PrivacyPolicyLayout({ children }) {
  return children;
}
