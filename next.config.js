/* eslint-disable no-param-reassign */
const webpack = require("webpack")
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer")

const debug = process.env.NODE_ENV !== "production"
const repoName = ""

const nextConfig = {
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
  exportPathMap() {
    return {
      "/": { page: "/" },
      "/places": { page: "places" },
      "/result": { page: "result" }
    }
  }
}

module.exports = withBundleAnalyzer(nextConfig)
