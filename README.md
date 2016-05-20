Incidental, a webhook aggregation platform

\![Build Status](https://travis-ci.org/username/reponame.svg?branch=master)


    +------------------+        +---------------------------+
    | storage api      |------->| modular webhook platform  |------> ?
    +------------------+        +---------------------------+
            ^                                ^
            |                                |
            |                                |
          http                              http


<img src="doc/webhooks.png" width="45%"/>

## Usage

    $ PORT_WEBHOOKS=3001 PORT_API=3000 node server.js

## Features

* visually glue microservices together
* visually aggregate & organize webhooks
