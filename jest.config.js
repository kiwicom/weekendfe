// @noflow

module.exports = {
  setupFiles: ["jest-date-mock", "./jest.setup.js"],
  testEnvironment: "jest-environment-jsdom-global",
};
