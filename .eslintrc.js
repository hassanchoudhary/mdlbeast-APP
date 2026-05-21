/**
 * NOTE: ESLint 10 (currently installed) only supports flat config (eslint.config.js)
 * and IGNORES this file. To activate this config either:
 *   1. Downgrade ESLint: `pnpm add -D eslint@^8.57.0`, OR
 *   2. Migrate this content to `eslint.config.js` (flat config).
 *
 * This file is kept as a familiar reference of project lint intent.
 */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  env: { node: true, es2022: true },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
  },
  ignorePatterns: [
    'node_modules/',
    '.expo/',
    'dist/',
    'babel.config.js',
    'metro.config.js',
    '*.d.ts',
  ],
};
