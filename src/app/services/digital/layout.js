import { createPageMetadata } from '../../../lib/seo';

export const metadata = createPageMetadata({
  title: 'Digital Services',
  description:
    'TekReign digital services — SEO & PPC, content marketing, e-commerce, tech integration, and social media management to grow your online presence.',
  path: '/services/digital',
  keywords:
    'digital services, SEO PPC, content marketing, e-commerce solutions, social media management, TekReign',
});

export default function DigitalServicesLayout({ children }) {
  return children;
}
