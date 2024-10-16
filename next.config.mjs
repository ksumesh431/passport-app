/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/passport-app",
    env: {
      NEXT_PUBLIC_BASE_PATH: '/passport-app',
    },
    output: "export", // changed from standalone to export to get static build
    images: { unoptimized: true },
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
  };
  

  
  export default nextConfig;
  