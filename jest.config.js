// @noflow
module.exports = {
  setupFiles: ["jest-date-mock", "./lib/jestSetup.js"],
  setupFilesAfterEnv: ["./lib/jestSetupFramework.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  testEnvironment: "jest-environment-jsdom-global",
  testPathIgnorePatterns: ["cypress", ".next", "queries"],
  coverageReporters: ["json", "lcov", "text", "text-summary"],
  coverageThreshold: {
    global: {
      statements: 76,
      branches: 49,
      functions: 57,
      lines: 76
    }
  }
}
