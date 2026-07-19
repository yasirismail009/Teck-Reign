import { caseStudies } from '../../data/caseStudies';
import { createPageMetadata } from '../../../lib/seo';

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ id: String(study.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const caseStudy = caseStudies.find((study) => study.id === parseInt(id, 10));

  if (!caseStudy) {
    return createPageMetadata({
      title: 'Case Study Not Found',
      description: 'The requested TekReign case study could not be found.',
      path: `/case-studies/${id}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: caseStudy.title,
    description: caseStudy.description,
    path: `/case-studies/${caseStudy.id}`,
    keywords: `${caseStudy.category}, ${caseStudy.client}, TekReign case study, ${caseStudy.title}`,
    image: caseStudy.image || undefined,
    type: 'article',
  });
}

export default function CaseStudyDetailLayout({ children }) {
  return children;
}
