import { Geist, Geist_Mono } from "next/font/google";
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
  title: "TeckReign - Innovative Technology Solutions & Digital Transformation Experts",
  description: "TeckReign delivers cutting-edge technology solutions, custom software development, and digital transformation services. Expert in web development, mobile apps, cloud solutions, and enterprise software.",
  keywords: "technology solutions, software development, digital transformation, web development, mobile apps, cloud solutions, enterprise software, IT consulting, custom software, tech innovation",
  authors: [{ name: 'TeckReign' }],
  creator: 'TeckReign',
  publisher: 'TeckReign',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://teckreign.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'TeckReign - Innovative Technology Solutions & Digital Transformation Experts',
    description: 'Transform your business with TeckReign\'s cutting-edge technology solutions, custom software development, and digital transformation services.',
    url: 'https://teckreign.com',
    siteName: 'TeckReign',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TeckReign - Technology Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TeckReign - Innovative Technology Solutions',
    description: 'Transform your business with TeckReign\'s cutting-edge technology solutions and digital transformation services.',
    images: ['/twitter-image.jpg'],
    creator: '@teckreign',
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
