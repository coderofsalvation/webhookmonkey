<img src="doc/logo.png" width="20%"/><br>
Prevent notification- and webhook-spaghetti: a broker, aggregator and router for webhooks.

\![Build Status](https://travis-ci.org/username/reponame.svg?branch=master)


    +------------------+        +---------------------------+
    | storage api      |<------>| modular webhook platform  |------> IFTTT/Zapier/servers/etc
    +------------------+        +---------------------------+
            ^                                ^
            |                                |
            |                                |
      manage history                      webhooks
                                      github/bb/apps/servers/SaaS

<img src="doc/webhooks.png" width="45%"/>
<img src="doc/api.png" width="45%" align="right"/>

## Usage

    $ PORT_WEBHOOKS=3001 PORT_API=3000 API_URL="http://localhost:3000" node app.js

## Features

* visually glue microservices together
* finally visually aggregate & organize webhooks
* extract events and incidents from webhooks into api DB (REST)
* perfect to integrate in backends (REST)

Incidental does not force you to centralize your infrastructure, it just sits in the sweet spot:

<img src="doc/sweetspot.png" width="90%"/>

## The api & editor

* The api documentation is generated at `http://localhost:3000/doc`, and a swagger url at `http://localhost:3000/model`
* The [webhook editor](https://npmjs.org/package/node-red) can be visited at `http://localhost:3001`

By default, the api is just simple storage of simple example of event/incident storage.
The webhook editor applies some example logic.
Right now it extracts incidents from webhooks or ping-fails like so:

<img src="doc/incidents.png"/>

However, in the scriptable editor allows you to extend it with any (js) logic.

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
