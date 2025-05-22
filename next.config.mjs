/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
    output: 'export',
    basePath: isProd ? "/crypgo" : "",
    assetPrefix: isProd ? "/crypgo/" : "",
    images: {
        unoptimized: true,
    },

};

export default nextConfig;

