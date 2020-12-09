module.exports = {
  publicRuntimeConfig: {
    // Will be available on both server and client
    apolloClientUri: process.env.APOLLO_CLIENT_URI,
    gtm: process.env.GTM,
  },
  serverRuntimeConfig: {
    apolloClientUri: process.env.APOLLO_SERVER_URI,
  },
};
