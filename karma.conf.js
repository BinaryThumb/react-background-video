var path = require('path');

module.exports = function karma(config) {
  config.set({
    basePath: '',
    frameworks: ['phantomjs-shim', 'mocha', 'chai'],
    files: [
      'test/index.js',
    ],
    preprocessors: {
      'test/index.js': ['webpack', 'sourcemap'],
    },
    webpack: {
      devtool: 'eval',
      module: {
        preLoaders: [{
          test: /\.js$/,
          loader: 'istanbul-instrumenter',
          include: [
            path.join(__dirname, 'src'),
          ],
        }],
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: [
              path.join(__dirname, 'src'),
              path.join(__dirname, 'test'),
            ],
        }],
      },
      resolve: {
        alias: {
          'react-background-video': path.join(process.cwd(), 'src'),
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
    reporters: ['mocha', 'coverage'],
    captureTimeout: 60000,
    // to avoid DISCONNECTED messages
    browserDisconnectTimeout: 10000, // default 2000
    browserDisconnectTolerance: 1, // default 0
    browserNoActivityTimeout: 60000,
    singleRun: true,
  });
};
