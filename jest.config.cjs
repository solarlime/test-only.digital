module.exports = {
  transform: {
    '^.+\\.(ts|tsx|js|jsx)?$': '@swc/jest',
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
};
