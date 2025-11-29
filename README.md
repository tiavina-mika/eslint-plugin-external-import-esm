
# eslint-plugin-external-import-esm

> ESLint plugin to detect external ESM imports of format `'lib/func'`, `'lib/func/subfunc'`, etc., excluding internal import like `@/`, `./`, or `../`.

## Installation

```bash
npm install eslint-plugin-external-import-esm --save-dev
```

## Configs

<!-- begin auto-generated configs list -->

|    | Name          |
| :- | :------------ |
| ✅  | `recommended` |

<!-- end auto-generated configs list -->

## Rules

<!-- begin auto-generated rules list -->

💼 Configurations enabled in.\
✅ Set in the `recommended` configuration.\
🔧 Automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/user-guide/command-line-interface#--fix).

| Name                                                       | Description                                    | 💼 | 🔧 |
| :--------------------------------------------------------- | :--------------------------------------------- | :- | :- |
| [require-external-js-extension](docs/rules/require-external-js-extension.md) | Force .js extension on external module imports | ✅  | 🔧 |

<!-- end auto-generated rules list -->

## Usage
```js
import externalImportEsm from 'eslint-plugin-external-import-esm';
import js from '@eslint/js';

export default [
  js.configs.recommended,
  externalImportEsm.configs.recommended,
  {
    files: ['**/*.{js,ts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    // Or override the rule here:
    rules: {
      'external-import-esm/require-external-js-extension': 'warn',
    },
  },
];
```

## Examples
### ❌ Incorrect 
```js
import func from 'lib/func'; // Missing .js extension
import subfunc from 'lib/func/subfunc'; // Missing .js extension
import plugin from 'dayjs/plugin/something'; // Missing .js extension
```

### ✅ Correct
```js
import func from 'lib/func.js';
import subfunc from 'lib/func/subfunc.js';
import plugin from 'dayjs/plugin/something.js';
import myUtil from '@/utils'; // Alias import, no .js needed
import localModule from './local'; // Relative import, no .js needed
```

## Documentation
    
See [require-external-js-extension](https://github.com/tiavina-mika/eslint-plugin-external-import-esm/blob/main/docs/rules/require-external-js-extension.md) for full details and examples.