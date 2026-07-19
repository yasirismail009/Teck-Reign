import { createPageMetadata } from '../../lib/seo';

export const metadata = createPageMetadata({
  title: 'Case Studies',
  description:
    'Browse TekReign case studies—real software and digital projects with measurable outcomes for clients across industries.',
  path: '/case-studies',
  keywords:
    'TekReign case studies, software portfolio, client success stories, digital transformation projects',
});

export default function CaseStudiesLayout({ children }) {
  return <div className="min-h-screen bg-white">{children}</div>;
}
