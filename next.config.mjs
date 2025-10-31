/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    trailingSlash: true,
    output: "standalone",
    reactStrictMode: false,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'localhost',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
            },
            {
                protocol: 'https',
                hostname: 'http.cat',
            },
        ],
    },
    env: {
        NEXT_PUBLIC_INTERNAL_HOST: process.env.NEXT_PUBLIC_INTERNAL_HOST,
        NEXT_PUBLIC_PUBLIC_HOST: process.env.NEXT_PUBLIC_PUBLIC_HOST,
    },
    
    // Use webpack explicitly for now (can migrate to Turbopack later)
    webpack: (config, {isServer, webpack}) => {
        if (!isServer) {
            config.output.publicPath = '/_next/';
        }

        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.PORT': JSON.stringify(process.env.PORT || 3000),
            })
        );

        config.module.rules.push({
            test: /\.html$/,
            use: ['html-loader'],
        });

        config.resolve.alias = {
            ...config.resolve.alias,
            '@': './src',
        };

        return config;
    },
    
    // Turbopack config placeholder
    turbopack: {},
};

export default nextConfig;
