import type { Metadata } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://mws-eta.vercel.app';
const IMAGE_PNG = `${SITE_URL}/metadata.png`;

export function MetaTags() {
  const title = 'MWS - Web Development, Mobile Apps, CRM Systems & Digital Marketing | Modern Web Solutions';
  const description = 'Professional web development, mobile applications, CRM systems, video editing, marketing, and SMM services. 7+ years of experience. 100+ satisfied clients worldwide.';

  return (
    <>
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={IMAGE_PNG} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="MWS - Modern Web Solutions" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mws" />
      <meta name="twitter:creator" content="@mws" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={IMAGE_PNG} />
      
      {/* VK Meta Tags */}
      <meta property="vk:image" content={IMAGE_PNG} />
    </>
  );
}

