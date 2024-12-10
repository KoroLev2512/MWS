/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    trailingSlash: true,
    output: "standalone",
    reactStrictMode: false,
    swcMinify: false,
    images: {
        unoptimized: true,
        domains: ["localhost", "http.cat"],
    },
    env: {
        NEXT_PUBLIC_INTERNAL_HOST: process.env.NEXT_PUBLIC_INTERNAL_HOST,
        NEXT_PUBLIC_PUBLIC_HOST: process.env.NEXT_PUBLIC_PUBLIC_HOST,
    },
    serverRuntimeConfig: {
        host: process.env.NEXT_PUBLIC_INTERNAL_HOST,
    },
    publicRuntimeConfig: {
        host: process.env.NEXT_PUBLIC_PUBLIC_HOST,
    },

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
};

export default nextConfig;
