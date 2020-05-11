# Why

  

I found that docker images stopped after random time, so I made this simple application

to restart `BESU Ethereum` docker images and keep the nodes always available .

  

## Instructions

  

* If it is the first time then *Run*

>  `. run.sh`  

this starts all the docker containers in POW mode.

OR for using IBFT2, which I pre-configured to run with free-gas *Run*

>  `. run.sh -c ibft2`  

*  then *Run*

>  `nano config.js`

* configure `config.js` with suitable values.

*  *Run*

>  `npm i`

  

### Documentation

```javascript

configurationObject = {

CRON_IN_MINUTE:  15, // in minutes, this will allow cron job to be repeated every certain time

CONNECTIVITY_TIMEOUT:  10000, // in milliseconds, a timeout to terminate the connection trail to the node

BESU_NODE_URL:  'http://0.0.0.0:8545', // BESU Ethereum URL

TIMEOUT_TO_RESUME:  300000, // in milliseconds, as stop script may take some time so I create timeout until stop script done to resume the node.

}

```