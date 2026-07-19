import { caseStudies } from './data/caseStudies';
import { SITE_URL, STATIC_ROUTES } from '../lib/seo';

export default function sitemap() {
  const lastModified = new Date();

  const staticEntries = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path === '/' ? '' : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const caseStudyEntries = caseStudies.map((study) => ({
    url: `${SITE_URL}/case-studies/${study.id}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticEntries, ...caseStudyEntries];
}
