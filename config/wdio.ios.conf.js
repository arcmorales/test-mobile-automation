'use strict'

const { IOS } = require('../constants')
const { config } = require('../wdio.conf')

config.capabilities = [

  {
    platformName: IOS.PLATFORM_NAME,
    deviceName: IOS.DEVICE_NAME,
    platformVersion: IOS.PLATFORM_VERSION,
    automationName: IOS.AUTOMATION_NAME,
    app: IOS.APP
  }
]

exports.config = config
