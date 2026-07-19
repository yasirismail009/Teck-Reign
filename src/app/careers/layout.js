import { createPageMetadata } from '../../lib/seo';

export const metadata = createPageMetadata({
  title: 'Careers',
  description:
    'Join TekReign — explore open roles in frontend, backend, DevOps, and more. Build innovative technology products with a collaborative engineering team.',
  path: '/careers',
  keywords: 'TekReign careers, software developer jobs, frontend jobs, backend jobs, DevOps careers',
});

export default function CareersLayout({ children }) {
  return children;
}
