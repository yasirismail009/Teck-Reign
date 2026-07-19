export const SITE_URL = 'https://tekreign.com';
export const SITE_NAME = 'TekReign';
export const DEFAULT_OG_IMAGE = '/web-app-manifest-512x512.png';

/** @typedef {{ title: string, description: string, path: string, keywords?: string, image?: string, type?: string, noIndex?: boolean }} PageSeoInput */

/**
 * Build consistent Next.js metadata for a route.
 * @param {PageSeoInput} input
 */
export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  noIndex = false,
}) {
  const url = `${SITE_URL}${path === '/' ? '' : path}`;

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${title} | ${SITE_NAME}`,
        },
      ],
      locale: 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [image],
    },
    ...(noIndex
      ? {
          robots: {
            index: false,
            follow: true,
          },
        }
      : {}),
  };
}

export const SERVICE_CATEGORY_SEO = {
  'software-development': {
    title: 'Software Development & AI Services',
    description:
      'Custom software plus Agentic AI, ML, LLMs, and modern AI solutions from TekReign—agile delivery for scalable, secure products.',
    keywords:
      'Agentic AI, machine learning, ML, LLM, GenAI, modern AI solutions, software development, custom software, TekReign',
  },
  'digital-marketing': {
    title: 'Digital Marketing Services',
    description:
      'SEO, PPC, content, and growth marketing from TekReign—plus KAMPALO, our AI-based marketing analytics platform.',
    keywords:
      'digital marketing, SEO services, PPC advertising, KAMPALO, AI marketing platform, content marketing, TekReign',
  },
  'design-ux': {
    title: 'Design & UX Services',
    description:
      'UI/UX design, prototyping, and design systems from TekReign—clear interfaces that look sharp and convert.',
    keywords:
      'UI UX design, product design, design systems, prototyping, user experience, TekReign',
  },
};

export const STATIC_ROUTES = [
  { path: '/', changeFrequency: 'weekly', priority: 1.0 },
  { path: '/about-us', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/services/software-development', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/services/digital-marketing', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/services/design-ux', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/services/digital', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/financial', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services/strategic', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/case-studies', changeFrequency: 'weekly', priority: 0.85 },
  { path: '/careers', changeFrequency: 'weekly', priority: 0.7 },
  { path: '/contact-us', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/work-together', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/privacy-policy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms-and-services', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/cookies-policy', changeFrequency: 'yearly', priority: 0.3 },
];
