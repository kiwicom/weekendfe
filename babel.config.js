// @flow strict

/*::

type ApiType = {|
  +assertVersion: number => void,
  +cache: {|
    forever: () => void
  |}
|}

*/

module.exports = function(api /*: ApiType */) {
  api.assertVersion(7)
  api.cache.forever()

  return {
    presets: ["next/babel", "@babel/preset-flow"],
    plugins: [
      [
        "styled-components",
        { ssr: true, transpileTemplateLiterals: true }
      ],
      ["@kiwicom/orbit-components"],
      ["import-graphql"],
      ["relay"],
      ["@babel/plugin-proposal-optional-chaining"]
    ]
  }
}
