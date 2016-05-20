  module.exports = {
    'swagger': '2.0',
    'info': {
      'version': '1.0.0',
      'title': 'Incidental API',
      'description': '', 
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
          }
        }
      }, 
      tags: {
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
      post: {
        schema: {
          date: {
            type: Number
          }, 
          mimetype: {
            type: String
          }, 
          content: {
            type: String
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
          posts: {
            link: 'post', 
            isArray: true
          }
        }
      }
    }
  };
