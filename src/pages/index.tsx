import React, {Suspense} from "react";
import Head from 'next/head';
import {GetServerSideProps} from 'next';
import {SpeedInsights} from '@vercel/speed-insights/next';
import {Carousel} from '@/widgets/Carousel';
import {Features} from '@/shared/ui/Feature';
import {Video} from "@/shared/ui/Video/Video";
import {Examples} from "@/widgets/Examples";
import {Promotion} from "@/shared/ui/Promotion";
import {Footer} from "@/widgets/Footer";
import {carousel_slides, example_slides} from '@/shared/lib/store/slides';
import {useTranslation} from 'react-i18next';

// Import translations directly for SSR
import enTranslations from '../../../public/locales/en/translation.json';
import ruTranslations from '../../../public/locales/ru/translation.json';

interface PageProps {
    initialLanguage?: string;
}

const App = ({ initialLanguage }: PageProps) => {
    const { t, i18n } = useTranslation();
    // Use SSR language if available, otherwise fallback to client-side detection
    const currentLanguage = initialLanguage || i18n.language || 'en';
    const isRussian = currentLanguage === 'ru';
    
    // Get translations for SSR (fallback to client-side i18n)
    const getTranslation = (key: string): string => {
        if (initialLanguage) {
            const translations = initialLanguage === 'ru' ? ruTranslations : enTranslations;
            return (translations as Record<string, string>)[key] || key;
        }
        return t(key);
    };
    
    // Use live domain by default so crawlers get absolute URLs in prod
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mws-eta.vercel.app';
    const currentUrl = siteUrl;
    // Provide multiple formats; some platforms (Telegram/VK) ignore WEBP
    const imageWebp = `${siteUrl}/metadata.webp?v=20251105`;
    const imageJpg = `${siteUrl}/metadata.jpg?v=20251105`;
    const imagePng = `${siteUrl}/metadata.png?v=20251105`;
    
    // SEO Meta Content with robust fallbacks if i18n isn't ready during SSR
    const fallbackTitleEn = 'MWS - Web Development, Mobile Apps, CRM Systems & Digital Marketing | Modern Web Solutions';
    const fallbackDescEn = 'Professional web development, mobile applications, CRM systems, video editing, marketing, and SMM services. 7+ years of experience. 100+ satisfied clients worldwide. Innovative solutions for your business.';
    const fallbackKeysEn = 'web development, mobile app development, CRM systems, digital marketing, SMM, website creation, landing pages, corporate websites, video editing, advertising creatives, logos, telegram bots, business automation, IT solutions, web studio, MWS';
    const fallbackTitleRu = 'MWS - Разработка сайтов, мобильных приложений, CRM систем и цифровой маркетинг | Modern Web Solutions';
    const fallbackDescRu = 'Профессиональная разработка сайтов, мобильных приложений, CRM систем, монтаж видео, маркетинг и SMM услуги. Более 7 лет опыта. 100+ довольных клиентов по всему миру. Инновационные решения для вашего бизнеса.';
    const fallbackKeysRu = 'разработка сайтов, создание мобильных приложений, CRM системы, цифровой маркетинг, SMM, создание сайтов, лендинги, корпоративные сайты, монтаж видео, рекламные креативы, логотипы, телеграм боты, автоматизация бизнеса, IT решения, веб студия, MWS, разработка веб приложений';

    const safe = (key: string, fallback: string) => {
        const value = getTranslation(key);
        // If translation not ready, use fallback
        return !value || value === key ? fallback : value;
    };

    const title = safe('SEO Title', isRussian ? fallbackTitleRu : fallbackTitleEn);
    const description = safe('SEO Description', isRussian ? fallbackDescRu : fallbackDescEn);
    const keywords = safe('SEO Keywords', isRussian ? fallbackKeysRu : fallbackKeysEn);
    
    // Structured Data
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "MWS - Modern Web Solutions",
        "alternateName": "MWS",
        "url": siteUrl,
        "logo": imageJpg,
        "description": description,
        "address": {
            "@type": "PostalAddress",
            "addressCountry": isRussian ? "RU" : "Global"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": ["en", "ru"]
        },
        "sameAs": [
            "https://www.facebook.com/mws",
            "https://twitter.com/mws",
            "https://www.linkedin.com/company/mws",
            "https://www.instagram.com/mws"
        ],
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "offerCount": "10",
            "offers": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": getTranslation('Web development'),
                        "description": getTranslation('Landing page description')
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": getTranslation('Mobile apps'),
                        "description": getTranslation('Mobile application description')
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": getTranslation('CRM systems'),
                        "description": getTranslation('CRM system description')
                    }
                }
            ]
        }
    };

    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="author" content="MWS - Modern Web Solutions" />
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta name="language" content={currentLanguage} />
                <meta name="revisit-after" content="7 days" />
                <meta name="rating" content="general" />
                
                {/* Viewport & Mobile */}
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="apple-mobile-web-app-title" content="MWS" />
                
                {/* Canonical URL */}
                <link rel="canonical" href={currentUrl} />
                
                {/* Alternate Languages */}
                <link rel="alternate" hrefLang="en" href={`${siteUrl}?lang=en`} />
                <link rel="alternate" hrefLang="ru" href={`${siteUrl}?lang=ru`} />
                <link rel="alternate" hrefLang="x-default" href={siteUrl} />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={currentUrl} />
                <meta property="og:site_name" content="MWS - Modern Web Solutions" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                {/* Prefer JPG for broader compatibility; include PNG/WEBP fallbacks */}
                <meta property="og:image" content={imageJpg} />
                <meta property="og:image:secure_url" content={imageJpg} />
                <meta property="og:image:type" content="image/jpeg" />
                <meta property="og:image" content={imagePng} />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image" content={imageWebp} />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content={title} />
                {/* VK-specific (optional, some clients read it) */}
                <meta property="vk:image" content={imageJpg} />
                <meta property="og:locale" content={isRussian ? "ru_RU" : "en_US"} />
                <meta property="og:locale:alternate" content={isRussian ? "en_US" : "ru_RU"} />
                
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={currentUrl} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={imageJpg} />
                <meta name="twitter:image:alt" content={title} />
                <meta name="twitter:creator" content="@mws" />
                <meta name="twitter:site" content="@mws" />
                
                {/* Additional SEO */}
                <meta name="format-detection" content="telephone=yes" />
                <meta name="format-detection" content="address=yes" />
                <meta name="format-detection" content="email=yes" />
                
                {/* Geo Tags */}
                <meta name="geo.region" content={isRussian ? "RU" : "US"} />
                <meta name="geo.placename" content={isRussian ? "Russia" : "Global"} />
                <meta name="geo.position" content={isRussian ? "55.751244;37.618423" : ""} />
                <meta name="ICBM" content={isRussian ? "55.751244, 37.618423" : ""} />
                
                {/* Business Information */}
                <meta name="coverage" content="Worldwide" />
                <meta name="distribution" content="Global" />
                <meta name="target" content="all" />
                <meta name="audience" content="all" />
                
                {/* Structured Data / JSON-LD */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData)
                    }}
                />
            </Head>
            <Suspense fallback={<div>Loading...</div>}>
                <div id="services">
                    <Carousel slides={carousel_slides}/>
                </div>
                <div id="features">
                    <Features/>
                </div>
                <div id="about">
                    <Video/>
                </div>
                <div id="products">
                    <Examples slides={example_slides}/>
                </div>
                <div id="support">
                    <Promotion/>
                </div>
                <Footer/>
                <SpeedInsights/>
            </Suspense>
        </>
    )
}

export default App;

// SSR: Determine language from query params or cookies for proper meta tag rendering
export const getServerSideProps: GetServerSideProps<PageProps> = async (context) => {
    const { query, req } = context;
    
    let detectedLanguage = 'en'; // Default
    
    // 1. Check query parameter (lang=ru or lang=en)
    if (query.lang && (query.lang === 'en' || query.lang === 'ru')) {
        detectedLanguage = query.lang as string;
    }
    // 2. Check cookies (for returning visitors)
    else if (req.headers.cookie) {
        const languageMatch = req.headers.cookie.match(/language=([^;]+)/);
        if (languageMatch && (languageMatch[1] === 'en' || languageMatch[1] === 'ru')) {
            detectedLanguage = languageMatch[1];
        }
    }
    
    return {
        props: {
            initialLanguage: detectedLanguage,
        },
    };
};
