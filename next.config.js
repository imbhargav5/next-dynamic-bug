const webpack = require("webpack");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


const configuration = {
  webpack: (config,
    { dev, isServer
    }) => {
    config.node = {
      fs: "empty"
    };

    if (dev) {
      config.devtool = "cheap-eval-source-map";
    }

    //exclude all moment locales to cut bundle size
    // TODO : include the ones needed


    return config;
  }
};

module.exports = configuration;
