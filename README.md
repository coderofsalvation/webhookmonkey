Ever experienced webhookjungle? Here's a webhook aggregator/router to prevent that.

\![Build Status](https://travis-ci.org/username/reponame.svg?branch=master)


    +------------------+        +---------------------------+
    | storage api      |<------>| modular webhook platform  |------> IFTTT/Zapier/servers/etc
    +------------------+        +---------------------------+
            ^                                ^
            |                                |
            |                                |
          http                             webhooks
                                      github/bb/apps/servers/SaaS

<img src="doc/webhooks.png" width="45%"/>
<img src="doc/api.png" width="45%" align="right"/>

## Usage

    $ PORT_WEBHOOKS=3001 PORT_API=3000 API_URL="http://localhost:3000" node app.js

## Features

* visually glue microservices together
* visually aggregate & organize webhooks
* store incidents,metrics in storage api using REST
* REST api perfect to integrate in backends

## The api & editor

* The api documentation is generated at `http://localhost:3000`
* The [webhook editor](https://npmjs.org/package/node-red) can be visited at `http://localhost:3001`

By default, the api is just an simple example of incident storage, which the webhook 
editor orchestrates.
However, it can be extended to do much more.
Right now it demonstrates this incident mangement cycle:

<img src="doc/incidents.png"/>

## Notes 

* you need to enable security in `config/webhook.js` (see [node-red](https://npmjs.org/package/node-red) for more info )