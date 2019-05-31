/* eslint-disable no-param-reassign */
const webpack = require("webpack")
const dotenv = require("dotenv")
dotenv.config()

const API_URL = process.env.API_URL

const nextConfig = {
  webpack(config) {
    config.plugins = [
      ...(config.plugins || []),
      new webpack.DefinePlugin({
        API_URL
      })
    ]

    return config
  }
}

module.exports = nextConfig
