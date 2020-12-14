const OptimizePlugin = require('optimize-plugin');

module.exports = {
  publicRuntimeConfig: {
    // Will be available on both server and client
    apolloClientUri: process.env.APOLLO_CLIENT_URI,
    gtm: process.env.GTM,
  },
  serverRuntimeConfig: {
    apolloClientUri: process.env.APOLLO_SERVER_URI,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(new OptimizePlugin());

    // Important: return the modified config
    return config;
  },
};
