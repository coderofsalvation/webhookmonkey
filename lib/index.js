var Swagger = require('swagger-client')

o = {}

o.foo = function(){ console.log("hoi"); }

setInterval( function(){
  if( ! o.api ){
    o.api = new Swagger({
      url: process.env.API_URL || "http://localhost:3000/model", 
        success: function() {
          console.log("jaaaaaaaaaa")
          //client.pet.getPetById({petId:7}, {responseContentType: 'application/json'}, function(pet){
          //        console.log('pet',  pet);
          //});
        }
    });
  }  
}, 3000) // *TODO* needs to listen to flowee start event


module.exports = o
