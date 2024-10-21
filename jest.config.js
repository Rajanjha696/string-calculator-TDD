/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node', // Set the environment for the tests
    transform: {
      '^.+\\.ts?$': 'ts-jest', // Use ts-jest to compile TypeScript files
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts$', // Matches test files
    moduleFileExtensions: ['ts', 'js', 'json', 'node'], // Supported file extensions
    globals: {
      'ts-jest': {
        tsconfig: 'tsconfig.json', // Path to your tsconfig file
      },
    },
    verbose: true, // Enable verbose logging
    collectCoverage: true, // Collect test coverage information
    collectCoverageFrom: ['src/**/*.{ts,js}', '!src/**/*.d.ts'], // Collect coverage from these files
  };
  