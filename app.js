#!/usr/bin/env node

var lib = require('./lib')
require('./server/webhooks.js')(lib, function (lib) {
  require('./server/api.js')(lib, function () {
    lib.init()
  })
})

