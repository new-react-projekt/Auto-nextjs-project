/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.autoscout24.de',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'prod.pictures.autoscout24.net',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'cdn.autohaus.de',
          pathname: '/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  