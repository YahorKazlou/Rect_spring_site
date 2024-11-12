module.exports = {
    transform: {
        '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
    },
    automock: false,
    setupFiles: ['./setupJest.js'],
};
