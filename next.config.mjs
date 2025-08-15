import assert from 'node:assert';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

assert(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);

export default nextConfig;
