import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#0088FF" />
        <meta name="msapplication-TileColor" content="#0088FF" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* SSR Fallback Meta (ensures bots always see something) */}
        <meta name="title" content="MWS - Modern Web Solutions" />
        <meta name="description" content="Professional web, mobile, CRM and marketing services. Innovative solutions for your business." />
        <meta name="keywords" content="web development, mobile apps, CRM, digital marketing, SMM, MWS" />

        {/* Open Graph Fallback */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MWS - Modern Web Solutions" />
        <meta property="og:title" content="MWS - Modern Web Solutions" />
        <meta property="og:description" content="Professional web, mobile, CRM and marketing services. Innovative solutions for your business." />
        <meta property="og:image" content="https://mws-eta.vercel.app/metadata.jpg?v=ssr" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Fallback */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MWS - Modern Web Solutions" />
        <meta name="twitter:description" content="Professional web, mobile, CRM and marketing services. Innovative solutions for your business." />
        <meta name="twitter:image" content="https://mws-eta.vercel.app/metadata.jpg?v=ssr" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

