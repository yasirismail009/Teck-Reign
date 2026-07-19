import { createPageMetadata } from '../../lib/seo';

export const metadata = createPageMetadata({
  title: 'Cookies Policy',
  description:
    'Learn how TekReign uses cookies and similar technologies, what types we use, and how you can manage your cookie preferences.',
  path: '/cookies-policy',
  keywords: 'TekReign cookies policy, cookie preferences, tracking technologies',
});

export default function CookiesPolicyLayout({ children }) {
  return children;
}
