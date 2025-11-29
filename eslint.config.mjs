import globals from 'globals';
import js from '@eslint/js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { defineConfig } from 'eslint/config';
import eslintPlugin from 'eslint-plugin-eslint-plugin';

export default defineConfig(
  {
    ignores: [
      '**/dist',
      '**/node_modules/',
      '**/.prettierrc.mjs',
      '**/eslint.config.mjs',
    ],
  },
  eslintPlugin.configs.recommended,
  js.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
    rules: {
      'prettier/prettier': ['off', { singleQuote: true }],
    }
  },
  {
    files: ['tests/**/*.js'],

    languageOptions: {
      globals: {
        ...globals.mocha
      }
    }
  },
);