module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  moduleFileExtensions: ['js', 'jsx'],
  extensionsToTreatAsEsm: ['.jsx'],
  setupFilesAfterEnv: ['./jest.setup.js'],
};
