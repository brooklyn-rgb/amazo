/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'utfs.io',
            port: '',
          },
        ],
      },
};

export default nextConfig;
