'use strict'

const { ANDROID } = require('../constants')
const { config } = require('../wdio.conf')

config.capabilities = [
  {
    platformName: ANDROID.PLATFORM_NAME,
    avd: ANDROID.AVD,
    deviceName: ANDROID.DEVICE_NAME,
    platformVersion: ANDROID.PLATFORM_VERSION,
    automationName: ANDROID.AUTOMATION_NAME,
    app: ANDROID.APP
  }
]

exports.config = config
