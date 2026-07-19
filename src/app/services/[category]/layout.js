import { createPageMetadata, SERVICE_CATEGORY_SEO } from '../../../lib/seo';

export function generateStaticParams() {
  return Object.keys(SERVICE_CATEGORY_SEO).map((category) => ({ category }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const seo = SERVICE_CATEGORY_SEO[category];

  if (!seo) {
    return createPageMetadata({
      title: 'Service Not Found',
      description: 'The requested TekReign service category could not be found.',
      path: `/services/${category}`,
      noIndex: true,
    });
  }

  return createPageMetadata({
    title: seo.title,
    description: seo.description,
    path: `/services/${category}`,
    keywords: seo.keywords,
  });
}

export default function ServiceCategoryLayout({ children }) {
  return children;
}
