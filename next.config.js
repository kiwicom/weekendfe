const debug = process.env.NODE_ENV !== "production"
const repoName = "weekendfe"

module.exports = {
  assetPrefix: debug ? "" : `/${repoName}/`
}
