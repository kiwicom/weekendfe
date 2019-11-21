// @flow

const OFF = 0
const WARNING = 1
const ERROR = 2

module.exports = {
  reportUnusedDisableDirectives: true,
  env: {
    browser: true
  },
  parser: "babel-eslint",
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:fp/recommended",
    "plugin:relay/recommended"
  ],
  globals: {
    BASE_URL: true
  },
  plugins: ["relay", "prettier", "fp", "react-hooks"],
  rules: {
    "prettier/prettier": ERROR,
    "react/jsx-filename-extension": [
      ERROR,
      { extensions: [".js", ".jsx"] }
    ],
    "import/extensions": ERROR,
    "import/no-unresolved": ERROR,
    "react/jsx-no-bind": ERROR,
    "no-var": ERROR,
    "import/order": [
      ERROR,
      {
        groups: [
          ["builtin", "external"],
          ["internal", "parent", "sibling", "index"]
        ],
        "newlines-between": "always"
      }
    ],
    "react/jsx-props-no-spreading": OFF,
    "react-hooks/rules-of-hooks": ERROR, // Checks rules of Hooks
    "react-hooks/exhaustive-deps": WARNING, // Checks effect dependencies
    "react/prop-types": OFF, // we don't use prop types
    "react/react-in-jsx-scope": OFF, // next
    "fp/no-nil": OFF, // Side effects
    "fp/no-class": OFF, // React
    "fp/no-this": OFF, // React
    "fp/no-mutation": OFF, // React
    "fp/no-unused-expression": OFF
  }
}
