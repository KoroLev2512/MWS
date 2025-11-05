import type { Metadata } from 'next';
import '@/app/styles/globals.scss';
import { NavigationBar } from '@/widgets/NavigationBar';
import { CookieConsent } from '@/shared/ui/CookieConsent';
import { LanguageSync } from '@/shared/components/LanguageSync';

export const metadata: Metadata = {
  title: 'MWS - Web Development, Mobile Apps, CRM Systems & Digital Marketing | Modern Web Solutions',
  description: 'Professional web development, mobile applications, CRM systems, video editing, marketing, and SMM services. 7+ years of experience. 100+ satisfied clients worldwide.',
  keywords: 'web development, mobile apps, CRM systems, digital marketing, SMM, website creation, web development, website promotion, MWS, Modern Web Solutions',
  authors: [{ name: 'Modern Web Solutions' }],
  robots: 'index, follow',
  openGraph: {
    title: 'MWS - Web Development, Mobile Apps, CRM Systems & Digital Marketing',
    description: 'Professional web development, mobile applications, CRM systems, video editing, marketing, and SMM services. 7+ years of experience. 100+ satisfied clients worldwide.',
    url: 'https://mws-eta.vercel.app/',
    siteName: 'MWS - Modern Web Solutions',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://mws-eta.vercel.app/metadata.png',
        width: 1200,
        height: 630,
        alt: 'MWS - Web Development, Mobile Apps, CRM Systems & Digital Marketing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MWS - Web Development, Mobile Apps, CRM Systems & Digital Marketing',
    description: 'Professional web development, mobile applications, CRM systems, video editing, marketing, and SMM services. 7+ years of experience. 100+ satisfied clients worldwide.',
    images: ['https://mws-eta.vercel.app/metadata.png'],
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#0088FF',
  manifest: '/manifest.json',
  icons: {
    icon: [{ url: '/favicon.ico' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageSync />
        <NavigationBar />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}


