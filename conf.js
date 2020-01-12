var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  directConnect: true,
  specs: ['spec1.js'],
  capabilities: {
    browserName: 'chrome'
  },
    onPrepare: function () {
        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target/screenshots'
            })
        );

    },
    jasmineNodeOpts: {
      showColors: true
    },
    suites: {
      smoke: ['dropdown.js', 'ng-repeater.spec.js'],
        regression: "practise-exercise.spec.js"
    }
};