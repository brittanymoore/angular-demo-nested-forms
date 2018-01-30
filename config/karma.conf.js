const getWebpackConfig = require('./../webpack.config');
webpackConfig = getWebpackConfig('dev');
webpackConfig.output = {};

module.exports = function (config) {
    config.set({
        basePath: '',
        browsers: ['Chrome'],        
        client: {
            clearContext: false
        },
        frameworks: ['jasmine'],
        files: [
            { pattern: './karma.test.bundle.js' }
        ],
        preprocessors: {
            './karma.test.bundle.js': ['webpack', 'sourcemap']
        },
        reporters: ['spec'],
        specReporter: {
            suppressErrorSummary: true
        },
        singleRun: false,
        webpack: webpackConfig       
    });
}