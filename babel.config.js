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
  return {
    "presets": ["next/babel"],
    "plugins": [
      ["styled-components", { "ssr": true, "transpileTemplateLiterals": true }],
      ["@kiwicom/orbit-components"],
      ["import-graphql"],
      ["relay"]
    ]
  };
};
