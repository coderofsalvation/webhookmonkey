
var flowee = require( __dirname+'/../node_modules/flowee')
require( __dirname+'/../node_modules/flowee-doc')(flowee)

module.exports = function(lib, cb){

  // start flowee api 
  lib.api = flowee.init({
    model: require('./../config/api.js'),
    store: true
  });

//  flowee.use(function(req,res,next){
//    if( req.url == '/event' ){ // } && req.method == "POST" ){
//      //lib.on('event', req.body )
//      console.log("body:")
//      console.dir(req.body)
//    }
//    next()
//  })

  flowee.start(function(server, router) {
    flowee.store.transformInput("event", function(context, record, update){
      var method = context.request.method
      if( method == "create" || update )
        for( field in flowee.model.definitions.event.schema )
          if( ! record[field] ) throw Error("field: "+field+" not passed")
      if( method == "create" )
        lib.event( record.service, record.category, record.label, record.value )
      return record
    })

    var port;
    port = process.env.PORT_API || 3000;
    console.log("starting flowee api at port %s", port);
    setTimeout( cb, 200 )
    return server.listen(port);
  })

}
