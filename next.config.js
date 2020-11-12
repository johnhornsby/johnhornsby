module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.APOLLO_CLIENT_URI': JSON.stringify(process.env.APOLLO_CLIENT_URI),
      })
    )

    // Important: return the modified config
    return config
  },
}
