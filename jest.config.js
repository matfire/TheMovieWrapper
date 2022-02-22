/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  coverageProvider: 'v8',
  coverageDirectory: 'coverage',
  collectCoverage: true,
  setupFiles: [
    'dotenv/config',
  ],
};
