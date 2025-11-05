import type { Metadata } from 'next';
import { cookies, headers } from 'next/headers';
import '@/app/styles/globals.scss';
import { NavigationBar } from '@/widgets/NavigationBar';
import { CookieConsent } from '@/shared/ui/CookieConsent';
import { LanguageSync } from '@/shared/components/LanguageSync';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mws-eta.vercel.app';
const IMAGE_JPG = `${SITE_URL}/metadata.jpg`;

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const hdrs = await headers();
  const acceptLang = hdrs.get('accept-language') || '';
  const cookieLang = cookieStore.get('language')?.value;
  const isRu = (cookieLang === 'ru') || (/\bru\b/i.test(acceptLang));

  const title = isRu
    ? 'MWS - Разработка сайтов, мобильных приложений, CRM систем и цифровой маркетинг | Modern Web Solutions'
    : 'MWS - Web Development, Mobile Apps, CRM Systems & Digital Marketing | Modern Web Solutions';
  const description = isRu
    ? 'Профессиональная разработка сайтов, мобильных приложений, CRM систем, монтаж видео, маркетинг и SMM услуги. Более 7 лет опыта. 100+ довольных клиентов по всему миру.'
    : 'Professional web development, mobile applications, CRM systems, video editing, marketing, and SMM services. 7+ years of experience. 100+ satisfied clients worldwide.';

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    applicationName: 'MWS - Modern Web Solutions',
    alternates: {
      canonical: '/',
      languages: {
        en: `${SITE_URL}?lang=en`,
        ru: `${SITE_URL}?lang=ru`,
      },
    },
    openGraph: {
      type: 'website',
      url: SITE_URL,
      siteName: 'MWS - Modern Web Solutions',
      title,
      description,
      locale: isRu ? 'ru_RU' : 'en_US',
      images: [{ url: IMAGE_JPG, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [IMAGE_JPG],
      creator: '@mws',
      site: '@mws',
    },
    icons: {
      icon: [
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicon.ico' },
      ],
      apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    },
    manifest: '/manifest.json',
    robots: {
      index: true,
      follow: true,
    },
    other: {
      'geo.region': isRu ? 'RU' : 'US',
      'geo.placename': isRu ? 'Russia' : 'Global',
      'theme-color': '#0088FF',
      'msapplication-TileColor': '#0088FF',
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 5,
    },
  };
}

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


