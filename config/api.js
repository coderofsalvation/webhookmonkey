  module.exports = {
    'swagger': '2.0',
    'info': {
      'version': '1.0.0',
      'title': 'Incidental API',
      'description': '<a href="./doc/incidental-concept.png" target="_blank"><img src="./doc/incidental-concept.png" style="width:300px"/></a><a href="./doc/seq.png" target="_blank"><img src="./doc/seq.png" style="width:300px"/></a>', 
      'termsOfService': 'http://swagger.io/terms/',
      'contact': {
        'name': 'Incidental'
      },
      'license': {
        'name': 'MIT'
      }
    },
    'host': 'yourdomain.io', 
    'basePath': '/api',
    'schemes': ['http'],
    'consumes': ['application/vnd.api+json', 'application/json'],
    'produces': ['application/vnd.api+json', 'application/json'],
    flowee: {
      model: {
        write: true,
        file: "/model.generated.json"
      },
      dataPath: '.',
      fortunejs: {
        serializers: [
          {
            type: 'fortune-json-api',
            options: {}
          }
        ]
      }
    },
    paths: {
      '/model': {
        'get': {
          "public": true,
          'description': 'Returns flowee (generated) model for backup or documentation purposes',
          'produces': ['application/json'],
          'responses': {
            '200': {
              'description': 'The flowee json model',
              'schema': {
                'type': 'object'
              }
            }
          },
          func: function(req, res, next) {
            res.writeHead(200, {
              'Content-Type': 'application/json'
            });
            res.header;
            res.end(JSON.stringify(req.flowee.model, null, 2));
            return next();
          }
        }
      }
    },
    definitions: {
      subscriber: {
        schema: {
          name: {
            type: String
          },
          email: {
            type: String
          }, 
          mobile: {
            type: Number
          }, 
          topics: {
            link: 'topic', 
            isArray: true
          }, 
        }
      }, 
      topic: {
        schema: {
          name:{
            type: String
          }, 
          subscribers: {
            link: 'subscriber',
            isArray: true
          }, 
          regexes: {
            type: String, 
            isArray: true
          }
        }  
      }, 
      wire:{
        schema:{
          service: {
            type: String
          }, 
          title: {
            type: String
          }, 
          data: {
            type: Object
          }
        } 
      }, 
      transaction:{
        schema: {
          hash: { 
            type: String
          }, 
          wires: {
            link: 'wire',
            isArray: true
          }
        }
      }, 
      incident: {
        schema: {
          service: {
            type: String
          }, 
          title: {
            type: String
          }, 
          data: {
            type: Object
          }
        }
      }
    }
  };
