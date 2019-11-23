/* eslint-disable no-param-reassign */
const path = require("path")
/* eslint-disable import/no-extraneous-dependencies */
const webpack = require("webpack")
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer")
const dotenv = require("dotenv")

dotenv.config()
const env = name => process.env[name] || ""

const debug = process.env.NODE_ENV !== "production"

const nextConfig = {
  publicRuntimeConfig: {
    mapToken: env("MAP_TOKEN") // Pass through env variables
  },
  analyzeServer: ["server", "both"].includes(
    process.env.BUNDLE_ANALYZE
  ),
  analyzeBrowser: ["browser", "both"].includes(
    process.env.BUNDLE_ANALYZE
  ),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: "static",
      reportFilename: "../bundles/server.html"
    },
    browser: {
      analyzerMode: "static",
      reportFilename: "../bundles/client.html"
    }
  },
  // exportPathMap() {
  //   return {
  //     "/": { page: "/" },
  //     "/places": { page: "places" },
  //     "/places/Prague": { page: "places", query: {"place": "Prague"} },
  //     "/result": { page: "result" }
  //   }
  // },
  // assetPrefix: debug ? "" : `/${repoName}/`,

  experimental: { granularChunks: true },

  webpack: (config /* : any */) => {
    // https://github.com/zeit/next.js/issues/8617
    const originalEntry = config.entry
    config.entry = async () => {
      const entries = await originalEntry()

      const keys = Object.keys(entries)
      keys.forEach(key => {
        if (key.includes("/__generated__/")) {
          delete entries[key] // eslint-disable-line fp/no-delete
        }
      })

      return entries
    }

    config.resolve.alias.components = path.join(
      __dirname,
      "components"
    )
    config.resolve.alias.src = path.join(__dirname, "src")

    return config
  }
}

module.exports = withBundleAnalyzer(nextConfig)
