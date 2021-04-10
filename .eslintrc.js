module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['simple-import-sort', 'sort-keys-fix'],
    rules: {
        semi: [2, 'never'],
        'import/order': 'off',
        'react/jsx-sort-props': 2,
        'simple-import-sort/sort': 'error',
        'sort-imports': 'off',
        'sort-keys-fix/sort-keys-fix': 'error',
        '@typescript-eslint/ban-ts-comment': 0,
        '@typescript-eslint/no-explicit-any': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        'jest/no-identical-title': 'error',
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        'no-duplicate-imports': 'error',
        'spaced-comment': ['error', 'always', { "block": { 'balanced': true}}],
    }
}