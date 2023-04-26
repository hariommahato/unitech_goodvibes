/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["www.ksecurity.com.np"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  trailingSlash: true,
  env: {
    NEXT_MONGODB_URL:
      "mongodb+srv://consultancy:consultancy@cluster0.as7kclv.mongodb.net/?retryWrites=true&w=majority",
    CLOUDINARY_NAME: "dijky1jjg",
    CLOUDINARY_API_KEY: "557477556585753",
    CLOUDINARY_API_SECRET: "sEE6XWIEmTmIvxFnr7Xkvg5HkMs",
    NEXTAUTH_SECRET: "asfsdfkulsghdfbjkshdfv",
    // NEXTAUTH_URL: "https://goodvibes.com.np",
  },
};

module.exports = nextConfig;
