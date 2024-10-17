/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: "/passport-app",
    images: {
      unoptimized: true,
    },
    trailingSlash: true, // for s3 so that next js create directories like /about/index.html instead of just /about
    basePath: "",
    env: {
      NEXT_PUBLIC_BASE_PATH: "",
    },
    output: "export", // changed from standalone to export to get static build
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
      },
  };
  

  
  export default nextConfig;
  