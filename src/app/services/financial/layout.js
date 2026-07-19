import { createPageMetadata } from '../../../lib/seo';

export const metadata = createPageMetadata({
  title: 'Financial Services',
  description:
    'TekReign financial services — investor relations, M&A support, IPO communications, funds management, and regulatory compliance guidance.',
  path: '/services/financial',
  keywords:
    'financial services, investor relations, M&A communications, IPO support, funds management, TekReign',
});

export default function FinancialServicesLayout({ children }) {
  return children;
}
