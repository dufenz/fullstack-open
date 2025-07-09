export default {
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(axios)/)"
  ],
  moduleFileExtensions: ["js", "jsx", "json", "node"],
  testEnvironment: "jsdom"
}
