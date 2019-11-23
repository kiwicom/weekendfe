// @noflow

module.exports = {
  setupFiles: ["jest-date-mock", "./jest.setup.js"],
  testEnvironment: "jest-environment-jsdom-global",
  testMatch: [
    '<rootDir>/**/__tests__/**/?(*.)+(spec|test).js?(x)',
  ]
};
