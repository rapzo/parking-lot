const { composePlugins, withNx } = require("@nrwl/webpack");
const { withReact } = require("@nrwl/react");
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`

  // Bundle size analyzer
  // config.plugins?.push(new BundleAnalyzerPlugin())

  return config;
});
