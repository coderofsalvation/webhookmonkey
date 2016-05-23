#!/usr/bin/env node

require('./server/webhooks.js')( function(handler){
  require('./server/api.js')(handler)
})

