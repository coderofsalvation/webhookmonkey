
var flowee = require( __dirname+'/../node_modules/flowee')
require( __dirname+'/../node_modules/flowee-doc')(flowee)

module.exports = function(handler){

  // start flowee api 
  flowee.init({
    model: require('./../config/api.js'),
    store: true
  });

  flowee.start(function(server, router) {
    var port;
    port = process.env.PORT_API || 3000;
    console.log("starting flowee api at port %s", port);
    return server.listen(port);
  })

}
