var Swagger = require('swagger-client')

o = {}

o.init = function (){
  this.api = new Swagger({
    url: process.env.API_URL || "http://localhost:3000/model", 
      success: function() {
        console.log("swagger client initialized")
        //client.event.getEventById({eventId:7}, {responseContentType: 'application/json'}, function(pet){
        //  console.log('event:',  event);
        //});
      }
  });
}

o.init.bind(o)

module.exports = o
