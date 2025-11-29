const { name, version } = require('../package.json');
const requireExternalJsExtension = require('./rules/require-external-js-extension.js');

module.exports = {
    meta: {
        name,
        version
    },
    rules: {
        'require-external-js-extension': requireExternalJsExtension,
    },
    configs: {
        recommended: {
        plugins: {
            'external-import-esm': {
                rules: {
                    'require-external-js-extension': requireExternalJsExtension,
                },
            },
        },
        rules: {
            'external-import-esm/require-external-js-extension': 'error',
        },
        },
    },
};
