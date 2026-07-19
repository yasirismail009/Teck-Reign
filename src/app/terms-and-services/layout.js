import { createPageMetadata } from '../../lib/seo';

export const metadata = createPageMetadata({
  title: 'Terms of Service',
  description:
    "Review TekReign's Terms of Service covering account terms, service usage, intellectual property, and your rights when using our platform.",
  path: '/terms-and-services',
  keywords: 'TekReign terms of service, terms and conditions, service agreement',
});

export default function TermsLayout({ children }) {
  return children;
}
