/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
