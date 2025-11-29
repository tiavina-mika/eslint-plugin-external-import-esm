const { name, version } = require('../package.json');

module.exports = {
    meta: {
        name,
        version
    },
    rules: {
        'require-external-js-extension': require('./rules/require-external-js-extension.js')
    },
    configs: {
        recommended: {
            plugins: ['external-import-esm'],
            rules: {
                'external-import-esm/require-external-js-extension': 'error'
            }
        }
    }
};
