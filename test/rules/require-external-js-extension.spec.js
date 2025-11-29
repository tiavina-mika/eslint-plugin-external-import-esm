const { RuleTester } = require('eslint');
const plugin = require('../../src');

RuleTester.setDefaultConfig({
    languageOptions: {
        ecmaVersion: 2020,
        // sourceType: "module",
    },
});

const ruleTester = new RuleTester();

ruleTester.run('require-external-js-extension', plugin.rules['require-external-js-extension'], {
  valid: [
    { code: "import myUtil from '@/utils';" },
    { code: "import something from './local';" },
    { code: "import something from '../local';" },
    { code: "import x from 'lib';" },
    { code: "import x from 'lib.js';" },
    // Already has .js extension
    { code: "import queue from 'async/queue.js';" },
    { code: "import throttle from 'lodash/throttle.js';" },
    { code: "import 'dayjs/locale/en.js';" },
    // If with require()
    { code: "const queue = require('async/queue');" },
  ],
  invalid: [
    {
      code: "import queue from 'async/queue';",
      output: "import queue from 'async/queue.js';",
      errors: [{ messageId: "missingJsExtension", data: { importPath: 'async/queue' } }]
    },
    {
      code: "import throttle from 'lodash/throttle';",
      output: "import throttle from 'lodash/throttle.js';",
      errors: [{ messageId: "missingJsExtension", data: { importPath: 'lodash/throttle' } }]
    },
    {
      code: "import 'dayjs/locale/en';",
      output: "import 'dayjs/locale/en.js';",
      errors: [{ messageId: "missingJsExtension", data: { importPath: 'dayjs/locale/en' } }]
    }
  ]
});
