module.exports = {
  publicRuntimeConfig: {
    // Will be available on both server and client
    apolloClientUri: process.env.APOLLO_CLIENT_URI,
  },
  serverRuntimeConfig: {
    apolloClientUri: process.env.APOLLO_SERVER_URI,
  },
};
