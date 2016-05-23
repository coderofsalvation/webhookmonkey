<img src="doc/logo.jpg" width="25%"/>
<br>

> "We've managed to automate everything using webhooks..I think"

Prevent webhook-spaghetti: webhook patching and monitoring (using google analytics events).
Comes with api and editor to easily broke, aggregate and route webhooks.

\![Build Status](https://travis-ci.org/username/reponame.svg?branch=master)

<img src="doc/webhooks.png" width="45%"/>
<img src="doc/api.png" width="45%" align="right"/>


    +------------------+        +---------------------------+
    | storage api      |<------>| modular webhook platform  |------> IFTTT/Zapier/servers/Ganalytics/etc
    +------------------+        +---------------------------+
            ^                                ^
            |                                |
            |                                |
      manage history                      webhooks
                                      github/bb/apps/servers/SaaS


## Usage

    $ PORT_WEBHOOKS=3001 PORT_API=3000 API_URL="http://localhost:3000" node app.js

## Features

Webhookmonkey is focusing on webhook monitoring & webhook patching. 
For __microservice__ monitoring check [TRACE](https://trace.risingstack.com/)

* visually glue microservices together
* finally visually aggregate & organize webhooks
* extract events and incidents from webhooks into api DB (REST)
* perfect to integrate in backends (REST)

Webhookmonkey does not force you to centralize your infrastructure, it just sits in the sweet spot:

<img src="doc/sweetspot.png" width="90%"/>

## The api & editor

* The api documentation is generated at `http://localhost:3000/doc`, and a swagger url at `http://localhost:3000/model`
* The [webhook editor](https://npmjs.org/package/node-red) can be visited at `http://localhost:3001`

By default, the api is just simple storage of webhook-history & incidents.
The webhook editor applies some example logic to the api.
However, this editor allows you to extend it with any (js) logic.
This is how webhookmonkey can be used in your multi-service environmnent:

<img src="doc/concept.png"/>

Right now it extracts incidents from webhooks, or generates them:

<img src="doc/seq.png"/>

or as a state 

## Doing api requests

* use [swagger-client](https://npmjs.org/package/swagger-client) to easily call the api (using the swagger url, see `lib/index.js`)
* create `http` nodes in the editor to setup custom points 
* use `context.global.lib.api` in a script-node inside the editor to do internal api-calls

## Extending 

* For hardcoded (testable) logic use lib/index.js as entrypoint.
* For simple wiring/glue code just use script-nodes in the editor.

> lib/index.js is exposed as `context.global.lib` inside a script-node (in the editor)

## Storage

You can easily swap storage (SQL/Mongodb/Redis/etc), see [flowee docs](http://flowee.isvery.ninja)

## Notes 

* you need to enable security in `config/webhook.js` (see [node-red](https://npmjs.org/package/node-red) for more info )
