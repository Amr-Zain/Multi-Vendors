import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'multi-vendors-989.saied.aait-d.com',
        port: '',
        pathname: '/storage/**',
      },
    ],
  },
  experimental: {
  }
};


const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
