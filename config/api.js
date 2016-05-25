  module.exports = {
    'swagger': '2.0',
    'info': {
      'version': '1.0.0',
      'title': 'Webhookmonkey API',
      'description': '<a href="./doc/concept.png" target="_blank"><img src="./doc/concept.png" style="width:300px"/></a>', 
      'termsOfService': 'http://swagger.io/terms/',
      'contact': {
        'name': 'Webhookmonkey'
      },
      'license': {
        'name': 'MIT'
      }
    },
    'host': 'http://localhost:3000', 
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
      }, 
      '/events/:groupid': {
        'get': {
          "public": true,
          'description': 'Returns a group of events', 
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
      event:{
        schema:{
          groupid: {
            type: String
          }, 
          service: {
            type: String
          }, 
          category: {
            type: String
          }, 
          label: {
            type: String
          }, 
          value: {
            type: Number
          }, 
          data: {
            type: Object
          }
        } 
      } 
    }
  };
