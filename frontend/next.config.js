const path = require("path");

const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(self), microphone=(), geolocation=(), browsing-topics=()",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/overview",
        permanent: true,
      },
    ];
  },

  pageExtensions: ["page.jsx", "page.js"],
  poweredByHeader: false,
  reactStrictMode: false, // Can't enable this yet, causing issues see | https://github.com/mui-org/material-ui/issues/13394 - 25-04-2021
  compiler: {
    emotion: true,
  },

  webpack: config => {
    const webpackConfig = config;
    webpackConfig.resolve.alias["@/actions"] = path.join(__dirname, "./src/actions");
    webpackConfig.resolve.alias["@/components"] = path.join(__dirname, "./src/components");
    webpackConfig.resolve.alias["@/constants"] = path.join(__dirname, "./src/utils/constants");
    webpackConfig.resolve.alias["@/content"] = path.join(__dirname, "./src/content");
    webpackConfig.resolve.alias["@/fields"] = path.join(__dirname, "./src/components/field");
    webpackConfig.resolve.alias["@/forms"] = path.join(__dirname, "./src/modules/form");
    webpackConfig.resolve.alias["@/graphql"] = path.join(__dirname, "./src/graphql");
    webpackConfig.resolve.alias["@/helpers"] = path.join(__dirname, "./src/utils/helpers");
    webpackConfig.resolve.alias["@/hooks"] = path.join(__dirname, "./src/hooks");
    webpackConfig.resolve.alias["@/layouts"] = path.join(__dirname, "./src/layouts");
    webpackConfig.resolve.alias["@/modules"] = path.join(__dirname, "./src/modules");
    webpackConfig.resolve.alias["@/public"] = path.join(__dirname, "./public");
    return webpackConfig;
  },
};

module.exports = nextConfig;
