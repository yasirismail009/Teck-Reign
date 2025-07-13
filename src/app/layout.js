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
  title: "TekReign - Innovative Technology Solutions & Digital Transformation Experts",
  description: "TekReign delivers cutting-edge technology solutions, custom software development, and digital transformation services. Expert in web development, mobile apps, cloud solutions, and enterprise software.",
  keywords: "technology solutions, software development, digital transformation, web development, mobile apps, cloud solutions, enterprise software, IT consulting, custom software, tech innovation",
  authors: [{ name: 'TekReign' }],
  creator: 'TekReign',
  publisher: 'TekReign',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon.svg',
      },
    ],
  },
  manifest: '/site.webmanifest',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tekreign.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'TekReign - Innovative Technology Solutions & Digital Transformation Experts',
    description: 'Transform your business with TekReign\'s cutting-edge technology solutions, custom software development, and digital transformation services.',
    url: 'https://tekreign.com',
    siteName: 'TekReign',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TekReign - Technology Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TekReign - Innovative Technology Solutions',
    description: 'Transform your business with TekReign\'s cutting-edge technology solutions and digital transformation services.',
    images: ['/twitter-image.jpg'],
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
    google: 'your-google-site-verification',
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
