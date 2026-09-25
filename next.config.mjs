/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    trailingSlash: true,
    output: 'standalone',
    reactStrictMode: false,
    env: {
        NEXT_PUBLIC_INTERNAL_HOST: process.env.NEXT_PUBLIC_INTERNAL_HOST,
        NEXT_PUBLIC_PUBLIC_HOST: process.env.NEXT_PUBLIC_PUBLIC_HOST,
    },
};

export default nextConfig;
