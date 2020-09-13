module.exports = {
  preset: 'ts-jest',
  collectCoverageFrom: ['src/**/*.tsx'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
  },
};
