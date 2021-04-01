module.exports = {
    env: {
        es6: true,
        node: true,
        jest: true,
    },
    plugins: [
        'react',
        'react-hooks',
        'promise',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2020,
        sourceType: 'module'
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
    ],
    rules: {
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'linebreak-style': ['error', 'unix'],
        'no-empty-function': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
        indent: ['error', 4, { SwitchCase: 1 }],
        quotes: ['error', 'single', { avoidEscape: true }],
        semi: ['error', 'always'],
        '@typescript-eslint/no-use-before-define': ['error', {
            'functions': false,
            'classes': true,
            'variables': true,
            'typedefs': true
        }],
        'prettier/prettier': 0,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
