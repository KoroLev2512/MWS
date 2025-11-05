import React, {Suspense} from "react";
import Head from 'next/head';
import {SpeedInsights} from '@vercel/speed-insights/next';
import {Carousel} from '@/widgets/Carousel';
import {Features} from '@/shared/ui/Feature';
import {Video} from "@/shared/ui/Video/Video";
import {Examples} from "@/widgets/Examples";
import {Promotion} from "@/shared/ui/Promotion";
import {Footer} from "@/widgets/Footer";
import {carousel_slides, example_slides} from '@/shared/lib/store/slides';
import {useTranslation} from 'react-i18next';

const App = () =>{
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language || 'en';
    const isRussian = currentLanguage === 'ru';
    
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mws.com';
    const currentUrl = siteUrl;
    const imageUrl = `${siteUrl}/metadata.webp`;
    
    // SEO Meta Content
    const title = t('SEO Title');
    const description = t('SEO Description');
    const keywords = t('SEO Keywords');
    
    // Structured Data
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "MWS - Modern Web Solutions",
        "alternateName": "MWS",
        "url": siteUrl,
        "logo": imageUrl,
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
                        "name": t('Web development'),
                        "description": t('Landing page description')
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": t('Mobile apps'),
                        "description": t('Mobile application description')
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": t('CRM systems'),
                        "description": t('CRM system description')
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
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:secure_url" content={imageUrl} />
                <meta property="og:image:type" content="image/webp" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content={title} />
                <meta property="og:locale" content={isRussian ? "ru_RU" : "en_US"} />
                <meta property="og:locale:alternate" content={isRussian ? "en_US" : "ru_RU"} />
                
                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:url" content={currentUrl} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={imageUrl} />
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
