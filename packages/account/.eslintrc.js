const webpackConfig = require('./build/webpack.config.js');

module.exports = {
    extends: ['../../.eslintrc.js'],
    settings: {
        'import/resolver': {
            webpack: { config: webpackConfig({}) },
        },
    },
};
