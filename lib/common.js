var Swagger = require('swagger-client')
var ua = require('universal-analytics')

o = Function()

o.prototype.init = function (){
  this.initAnalytics()
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

o.prototype.initAnalytics = function () {
  if ( ! process.env.GANALYTICS_TOKEN ) return
  this.ua = ua( process.env.GANALYTICS_TOKEN )
  this.event("Services", "restart","webhookmonkey", 1 )
}

o.prototype.event = function (category,event,label,value) {
    this.ua.event(category, event, label, value ).send()
}

o.prototype.events = function (events){
  var e
  for ( var i in events  ) {
    var event = events[i]
    e = this.ua.event( event.category, event.event, event.label, event.value ).send()
  }
  e.send()
}

module.exports = new o()
