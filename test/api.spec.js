var request = require('supertest');
var t = require('./testrunner.js')
request = request('http://localhost:3000');
var lib = require('./../lib')
var host = "http://localhost:3000"

 //  headers: { 'Content-Type': 'application/vnd.api+json' }

t.test("get /",  function (next) {
  request.get('/')
    .set('Accept',  'application/vnd.api+json')
    .set('Content-Type',  'application/vnd.api+json')
    .expect(200,  require('./data/api/get.js') )
    .end( function(err){
      if(err) t.error(err)
      else next()
    })
})

t.test("get /model",  function (next) {
  request.get('/model')
    .set('Accept',  'application/vnd.api+json')
    .set('Content-Type',  'application/vnd.api+json')
    .expect(200,  require('./data/api/model/get.js') )
    .end( function(err){
      if(err) t.error(err)
      else next()
    })
})

t.test('all done', function(next) {
  if (!t.errors) {
    console.log("OK");
    return process.exit(0);
  } else {
    console.log("\nERROR: some tests failed\n");
    return process.exit(1);
  }
});


require('./../server/webhooks.js')(lib, function (lib) {
  require('./../server/api.js')(lib, function () {
    lib.init()
    t.run()
  })
})
