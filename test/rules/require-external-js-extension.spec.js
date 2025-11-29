const { RuleTester } = require('eslint');
const plugin = require('../../src');

RuleTester.setDefaultConfig({
    languageOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
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
    { code: "import queue from 'async/queue';", errors: [{ message: "External import detected: 'async/queue'" }] },
    { code: "import throttle from 'lodash/throttle';", errors: [{ message: "External import detected: 'lodash/throttle'" }] },
    { code: "import 'dayjs/locale/en';", errors: [{ message: "External import detected: 'dayjs/locale/de'" }] }
  ]
});
