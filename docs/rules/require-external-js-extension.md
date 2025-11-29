# Force .js extension on external module imports (`external-import-esm/require-external-js-extension`)

💼 This rule is enabled in the ✅ `recommended` config.

🔧 This rule is automatically fixable by the [`--fix` CLI option](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix).

<!-- end auto-generated rule header -->

<!-- eslint-rule-meta -->

Detects external ESM imports of format `'lib/func'`, `'lib/func/subfunc'`, `'dayjs/plugin/something'`,  
ignoring alias imports like `'@/'` and relative imports like `'./'` or `'../'`.

## Rule Details

This rule enforces using a `.js` extension for modules imported from inside `node_modules`  
but *not* for local or alias-based imports.

### Examples
#### Incorrect

```js
import func from 'lib/func'; // Missing .js extension
import subfunc from 'lib/func/subfunc'; // Missing .js extension
import plugin from 'dayjs/plugin/something'; // Missing .js extension
```

#### Correct

```js
import func from 'lib/func.js';
import subfunc from 'lib/func/subfunc.js';
import plugin from 'dayjs/plugin/something.js';
import myUtil from '@/utils'; // Alias import, no .js needed
import localModule from './local'; // Relative import, no .js needed
```