const withBundleAnalyzer = require("@zeit/next-bundle-analyzer")

const debug = process.env.NODE_ENV !== "production"
const repoName = "weekendfe"

const nextConfig = {
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
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
  assetPrefix: debug ? "" : `/${repoName}/`,
  webpack(config) {
    return config
  }
}

module.exports = withBundleAnalyzer(nextConfig)
