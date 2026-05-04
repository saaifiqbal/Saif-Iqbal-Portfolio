/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.61.47'],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
