module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  ignorePatterns: ['index.d.ts', 'globals.d.ts'],
  plugins: ['simple-import-sort'],
  extends: [
    'plugin:wc/recommended',
    'plugin:lit/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier'
  ],
  rules: {
    'class-methods-use-this': 'off',
    'default-case': 'off',
    'max-classes-per-file': 'off',
    'no-console': 'off',
    'no-underscore-dangle': 'off',
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    // TODO: resolve all these warnings later.
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off'
  },
  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
};
