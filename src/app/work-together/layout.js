import { createPageMetadata } from '../../lib/seo';

export const metadata = createPageMetadata({
  title: 'How We Partner With You',
  description:
    'See how TekReign partners with teams—strategic planning, custom solutions, and ongoing support—then start a conversation.',
  path: '/work-together',
  keywords: 'work with TekReign, technology partnership, software collaboration, digital projects',
});

export default function WorkTogetherLayout({ children }) {
  return children;
}
