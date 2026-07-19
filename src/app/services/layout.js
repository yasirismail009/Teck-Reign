import { createPageMetadata } from '../../lib/seo';

export const metadata = createPageMetadata({
  title: 'AI, Software, Marketing & Design Services',
  description:
    'TekReign services: Agentic AI, ML, LLMs, modern AI solutions, software development, digital marketing, design & UX—and KAMPALO AI marketing analytics.',
  path: '/services',
  keywords:
    'Agentic AI, machine learning, LLM, GenAI, TekReign services, software development, digital marketing, KAMPALO, UI UX design',
});

export default function ServicesLayout({ children }) {
  return children;
}
