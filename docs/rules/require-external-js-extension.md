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
