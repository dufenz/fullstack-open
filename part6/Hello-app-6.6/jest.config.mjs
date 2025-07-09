export default {
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  },
  extensionsToTreatAsEsm: ['.jsx'],
  testEnvironment: "jest-environment-jsdom",
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: []
}
