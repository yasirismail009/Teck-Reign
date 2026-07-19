import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: 'TekReign | Agentic AI, ML, LLMs & KAMPALO AI Marketing',
    template: '%s | TekReign',
  },
  description:
    'TekReign builds Agentic AI, ML, LLM, and modern AI solutions—plus KAMPALO, an AI-based marketing analytics platform—and custom software, cloud, and digital products.',
  keywords:
    'TekReign, Agentic AI, machine learning, ML, LLM, GenAI, modern AI solutions, KAMPALO, AI marketing platform, software development, digital transformation',
  authors: [{ name: 'TekReign' }],
  creator: 'TekReign',
  publisher: 'TekReign',
  icons: {
    // Google Search requires a square PNG that is a multiple of 48px and crawlable.
    // Prefer PNG over SVG (SVG text+font favicons often fail in SERPs).
    icon: [
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: '48x48', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: [{ url: '/favicon-48x48.png', type: 'image/png' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tekreign.com'),
  openGraph: {
    title: 'TekReign | Agentic AI, ML, LLMs & KAMPALO AI Marketing',
    description:
      'TekReign builds Agentic AI, ML, LLM, and modern AI solutions—plus KAMPALO, an AI-based marketing analytics platform—and custom software, cloud, and digital products.',
    url: 'https://tekreign.com',
    siteName: 'TekReign',
    images: [
      {
        url: '/web-app-manifest-512x512.png',
        width: 512,
        height: 512,
        alt: 'TekReign - Technology Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TekReign | Agentic AI, ML, LLMs & KAMPALO AI Marketing',
    description:
      'TekReign builds Agentic AI, ML, LLM, and modern AI solutions—plus KAMPALO, an AI-based marketing analytics platform.',
    images: ['/web-app-manifest-512x512.png'],
    creator: '@tekreign',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'W-Iz8GyV8lnt9FtfHdhyX2Ggmg0Nll_fqIOoWn-XHsc',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="facebook-domain-verification" content="g7o606mq71u9dquibk7e72rtedb687" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5ZVL3EB83B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5ZVL3EB83B');
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16469687105"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16469687105');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col `}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
