// eslint.config.cjs
const { defineConfig, globalIgnores } = require('eslint/config')
const tseslint = require('typescript-eslint')
const reactX = require('eslint-plugin-react-x')
const reactDom = require('eslint-plugin-react-dom')

module.exports = defineConfig([
  globalIgnores(['dist']),

  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: __dirname,
      },
    },
  },
])