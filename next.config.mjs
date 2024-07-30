/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'img.freepik.com',
        protocol: 'https'
      },
      {
        hostname: 'encrypted-tbn0.gstatic.com',
        protocol: 'https'
      },
      {
        hostname: 'lh3.googleusercontent.com',
        protocol: 'https'
      }
    ]
  }
};

export default nextConfig;
