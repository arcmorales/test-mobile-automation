'use strict'
import Launcher from '@wdio/cli'

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
