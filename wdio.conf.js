const fs = require('fs')
const { DIRECTORIES } = require('./constants/const')
exports.config = {
  //
  // ====================
  // Runner Configuration
  // ====================
  //
  // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
  // on a remote machine).
  runner: 'local',
  sync: true,
  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // from which `wdio` was called. Notice that, if you are calling `wdio` from an
  // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
  // directory is where your package.json resides, so `wdio` will be called from there.

  // specs is no longer applicable due to the configuration of the test runner
  // specs: ['./test/specs/**.spec.js'],

  // if the param provided for suites does not match any suite name, run specs instead
  suites: {
    default: ['./test/specs/login.spec.js'],
    login: ['./test/specs/login.spec.js']
  },
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 1,
  port: 4723,

  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'warn',
  bail: 0,

  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  services: ['appium'],
  appium: {
    command: 'appium'
    // The defaults you need to have in your config
  },
  framework: 'mocha',
  reporters: [
    'spec'
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 120000
  },
  //
  // =====
  // Hooks
  // =====

  beforeSession: (config, capabilities, specs) => {
    require('@babel/register')
  },

  before: function () {
    const chai = require('chai')
    global.expect = chai.expect
    chai.Should()
    if (!fs.existsSync(DIRECTORIES.SCREENSHOTS)) {
      fs.mkdirSync(DIRECTORIES.SCREENSHOTS)
    }
    driver.setImplicitTimeout(2000)
  },

  afterTest: (test) => {
    if (!test.passed) {
      const fileName = `${test.title}`.replace(/ /g, '_')
      driver.saveScreenshot(`${DIRECTORIES.SCREENSHOTS}/${fileName}-${driver.config.date}.png`)
    }
  }
}
