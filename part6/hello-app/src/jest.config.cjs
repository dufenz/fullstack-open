module.exports = {
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!(axios)/)'
  ],
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
}
