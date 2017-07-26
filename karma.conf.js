// Karma configuration
// Generated on Thu Jun 15 2017 16:03:12 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files:
    [
      '/usr/local/lib/node_modules/angular/angular.js',
      '/usr/local/lib/node_modules/angular-mocks/angular-mocks.js',
      'test/*.js'
    ],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        //'js/**/*.js': 'coverage'
    },

     plugins : [
        'karma-phantomjs-launcher',
        'karma-chrome-launcher',
        'karma-jasmine',
        'karma-junit-reporter'
    ],


   reporters: ['progress', 'junit'],
        // web server port
        port: 9876,
        browsers: ['Chrome'],
        singleRun: true,
        concurrency: Infinity,
        // the default configuration


    junitReporter: {
    outputDir: 'test-reports', // results will be saved as $outputDir/$browserName.xml
    outputFile: 'junit-report.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
    suite: '', // suite will become the package name attribute in xml testsuite element
    useBrowserName: true, // add browser name to report and classes names
    nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
    classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
    properties: {} // key value pair of properties to add to the section of the report
},
   


    // // enable / disable colors in the output (reporters and logs)
    // colors: true,


    // // level of logging
    // // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    // logLevel: config.LOG_INFO,


    // // enable / disable watching file and executing tests whenever any file changes
    // autoWatch: true,


   


  })
}
