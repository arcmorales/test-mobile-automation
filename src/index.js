'use strict'
import Launcher from '@wdio/cli'

require('dotenv').config()

let conf

// specify which suite to run. No param would select "default" suite
const suite = (process.argv[3] && process.argv[3].toLowerCase().split()) || ['default']

const platform = process.argv[2]

if (!platform || (platform.toLowerCase() !== 'ios' && platform.toLowerCase() !== 'android')) {
  console.error('Error. Please specify platform as iOS or Android. Run `npm test <platform> <suite>`')
  process.exit()
} else if (platform.toLowerCase() === 'ios') {
  conf = './config/wdio.ios.conf.js'
} else if (platform.toLowerCase() === 'android') {
  conf = './config/wdio.android.conf.js'
}

// Ensure required ENV vars are set
const requiredEnv = [
  'POSITIVE_USER',
  'POSITIVE_PASSWORD',
  'INVALID_EMAIL',
  'INVALID_PASSWORD'
]
const unsetEnv = requiredEnv.filter((env) => !process.env[env])

if (unsetEnv.length > 0) {
  console.error('Required ENV variables are not set: [' + unsetEnv.join(', ') + ']')
  process.exit()
}

const wdio = new Launcher(conf, { suite: suite, date: Date.now() })

wdio.run().then((code) => {
  process.exit(code)
}, (error) => {
  if (!error) {
    process.exit(0)
  } else {
    console.error('Launcher failed to start the test', error.stacktrace)
    process.exit(1)
  }
})
