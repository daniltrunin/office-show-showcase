module.exports = {
    env: {browser: true, es2022: true},
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended', // Интеграция с Prettier
    ],
    parser: '@typescript-eslint/parser',
    settings: {
        react: {version: 'detect'},
    },
    rules: {
        'react/react-in-jsx-scope': 'off', // Для React 17+
        'prettier/prettier': ['error', {endOfLine: 'auto'}],
    },
};