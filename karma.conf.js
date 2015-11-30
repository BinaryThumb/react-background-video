var path = require('path');

module.exports = function karma(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'test/**/*.js',
    ],
    preprocessors: {
      'test/**/*.js': ['webpack', 'sourcemap'],
    },
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
        ],
        postLoaders: [{
          test: /\.js$/,
          exclude: /(test|node_modules)\//,
          loader: 'istanbul-instrumenter'
        }],
      },
      resolve: {
        alias: {
          'react-background-video': path.join(process.cwd(), 'lib'),
        },
      },
    },

    coverageReporter: {
      type: 'lcov',
      dir: 'coverage/',
    },

    webpackServer: {
      noInfo: true,
    },

    exclude: [],
    port: 8080,
    logLevel: config.LOG_INFO,
    colors: true,
    autoWatch: false,
    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],
    reporters: ['progress', 'coverage'],
    captureTimeout: 60000,
    // to avoid DISCONNECTED messages
    browserDisconnectTimeout: 10000, // default 2000
    browserDisconnectTolerance: 1, // default 0
    browserNoActivityTimeout: 60000,
    singleRun: true,
  });
};
