import { createPageMetadata } from '../../lib/seo';

export const metadata = createPageMetadata({
  title: 'Contact Us',
  description:
    'Contact TekReign about your project. We deliver complete solutions, with particular strength in financial communications and strategic public relations.',
  path: '/contact-us',
  keywords: 'contact TekReign, hire software developers, request a quote, technology consulting',
});

export default function ContactUsLayout({ children }) {
  return children;
}
