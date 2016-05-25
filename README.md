<img src="doc/logo.jpg" width="25%"/>
<br>

> "We've managed to automate everything using webhooks..at least I think"

Prevent webhook-spaghetti: webhook monkeypatching and monitoring (using google analytics events).
Comes with api and editor to easily broke, aggregate and route webhooks.

\![Build Status](https://travis-ci.org/username/reponame.svg?branch=master)


## Architecture

    +------------------+        +---------------------------+
    | storage api      |<------>|       flow editor         |------> IFTTT
    +------------------+        +---------------------------+        Zapier
            ^                                ^                       server A/B/C
            |                                |                       Ganalytics
            |                                |                       etc
      manage history                      webhooks
                                      github/bb/apps/servers/SaaS

> Or in pictures it looks like this:

<img src="doc/api.png" width="45%" align="left"/>
<img src="doc/webhooks.png" width="45%"/>


## Usage

    $ PORT_WEBHOOKS=3001 PORT_API=3000 API_URL="http://localhost:3000" node app.js

## Features

Webhookmonkey is focusing on webhook monitoring & webhook monkeypatching. 
For __microservice__ monitoring check [TRACE](https://trace.risingstack.com/)

* visually setup and glue webhooks together
* monitor webhook transactions
* save webhook history to DB (REST API)
* integrate with backoffice thru REST 

Webhookmonkey does not force you to centralize your infrastructure, it just sits in the sweet spot:

<img src="doc/sweetspot.png" width="90%"/>

<img src="doc/concept.png"/>

## The api & editor

* The api documentation is generated at `http://localhost:3000/doc`, and a swagger url at `http://localhost:3000/model`
* The [webhook editor](https://npmjs.org/package/node-red) can be visited at `http://localhost:3001`

By default, the api is just simple storage of webhook-history.
The webhook editor applies some example logic to the api.
However, this editor allows you to extend it with any (js) logic.

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
