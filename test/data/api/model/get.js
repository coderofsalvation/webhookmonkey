module.exports = {
  "swagger": "2.0",
  "info": {
    "version": "1.0.0",
    "title": "Webhookmonkey API",
    "description": "<a href=\"./doc/concept.png\" target=\"_blank\"><img src=\"./doc/concept.png\" style=\"width:300px\"/></a>",
    "termsOfService": "http://swagger.io/terms/",
    "contact": {
      "name": "Webhookmonkey"
    },
    "license": {
      "name": "MIT"
    }
  },
  "host": "http://localhost:3000",
  "basePath": "/api",
  "schemes": [
    "http"
  ],
  "consumes": [
    "application/vnd.api+json",
    "application/json"
  ],
  "produces": [
    "application/vnd.api+json",
    "application/json"
  ],
  "flowee": {
    "model": {
      "write": true,
      "file": "/model.generated.json"
    },
    "dataPath": ".",
    "fortunejs": {
      "serializers": [
        {
          "options": {
            "inflectType": true,
            "inflectKeys": true,
            "maxLimit": 1000,
            "includeLimit": 3,
            "bufferEncoding": "base64",
            "prefix": "",
            "uriTemplate": "{/type,ids,relatedField,relationship}{?query*}",
            "allowLevel": [
              [
                "GET"
              ],
              [
                "GET",
                "POST"
              ],
              [
                "GET",
                "PATCH",
                "DELETE"
              ],
              [
                "GET"
              ],
              [
                "GET",
                "POST",
                "PATCH",
                "DELETE"
              ]
            ]
          }
        }
      ],
      "adapter": {
        "options": {
          "dbPath": "./db"
        }
      },
      "enforceLinks": true
    }
  },
  "paths": {
    "/model": {
      "get": {
        "public": true,
        "description": "Returns flowee (generated) model for backup or documentation purposes",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "The flowee json model",
            "schema": {
              "type": "object"
            }
          }
        }
      }
    },
    "/events/:groupid": {
      "get": {
        "public": true,
        "description": "Returns a group of events",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "The flowee json model",
            "schema": {
              "type": "object"
            }
          }
        }
      }
    },
    "/event": {
      "get": {
        "description": "Returns a collection of event objects from the database",
        "produces": [
          "application/vnd.api+json"
        ],
        "responses": {
          "200": {
            "description": "A collection of event objects",
            "schema": {
              "type": "array",
              "items": [
                {
                  "type": "object",
                  "properties": {
                    "groupid": {
                      "type": "string"
                    },
                    "service": {
                      "type": "string"
                    },
                    "category": {
                      "type": "string"
                    },
                    "label": {
                      "type": "string"
                    },
                    "value": {},
                    "data": {}
                  }
                }
              ]
            }
          }
        }
      },
      "post": {
        "description": "Creates a event object",
        "produces": [
          "application/vnd.api+json"
        ],
        "responses": {
          "200": {
            "description": "A event object",
            "schema": {
              "type": "object",
              "properties": {
                "groupid": {
                  "type": "string"
                },
                "service": {
                  "type": "string"
                },
                "category": {
                  "type": "string"
                },
                "label": {
                  "type": "string"
                },
                "value": {},
                "data": {}
              }
            }
          }
        }
      }
    },
    "/event/:id": {
      "get": {
        "description": "Returns a event object from the database",
        "produces": [
          "application/vnd.api+json"
        ],
        "responses": {
          "200": {
            "description": "A event object",
            "schema": {
              "type": "object",
              "properties": {
                "groupid": {
                  "type": "string"
                },
                "service": {
                  "type": "string"
                },
                "category": {
                  "type": "string"
                },
                "label": {
                  "type": "string"
                },
                "value": {},
                "data": {}
              }
            }
          }
        }
      },
      "put": {
        "description": "Updates a event object",
        "produces": [
          "application/vnd.api+json"
        ],
        "responses": {
          "200": {
            "description": "A event object",
            "schema": {
              "type": "object",
              "properties": {
                "groupid": {
                  "type": "string"
                },
                "service": {
                  "type": "string"
                },
                "category": {
                  "type": "string"
                },
                "label": {
                  "type": "string"
                },
                "value": {},
                "data": {}
              }
            }
          }
        }
      }
    }
  },
  "definitions": {
    "event": {
      "schema": {
        "groupid": {},
        "service": {},
        "category": {},
        "label": {},
        "value": {},
        "data": {}
      }
    }
  }
}
