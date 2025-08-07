/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ["./src/styles"],
    prependData: `@import "variables"; @import "mixins";`,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      type: "asset/resource",
    });
    return config;
  },
};

module.exports = nextConfig;
