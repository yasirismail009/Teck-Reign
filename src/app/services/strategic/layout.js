import { createPageMetadata } from '../../../lib/seo';

export const metadata = createPageMetadata({
  title: 'Strategic Services',
  description:
    'TekReign strategic services — crisis management, reputation management, media relations, PR, and advertising that protect and grow your brand.',
  path: '/services/strategic',
  keywords:
    'strategic services, crisis management, reputation management, public relations, media relations, TekReign',
});

export default function StrategicServicesLayout({ children }) {
  return children;
}
