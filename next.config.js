/**
 *  @type {import('next').NextConfig}
 *
 *  */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
// module.exports = {
//   async rewrites() {
//     return [
//       {
//         source: "/api/:path*",
//         destination: "https://js-post-api.herokuapp.com/api/:path*",
//       },
//       {
//         source: "/login",
//         destination: "https://js-post-api.herokuapp.com/api",
//       },
//     ];
//   },
// };
