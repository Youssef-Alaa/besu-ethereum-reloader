# Why

  I found that docker images after random time got stopped so I made this simple application
  to restart `BESU Ethereum` docker images and keep the node available always

## Instructions

* If it is the first time then *Run*
  > `. run.sh`
  
    to import needed images and allow besu to work properly.
* *Run*
  > `cp config.example.js config.js`

* *Run*
  > `nano config.js`
* configure `config.js` with suitable values.
* *Run*
  > `npm i`

### Documentation
  
```javascript
configurationObject = {
  CRON_IN_MINUTE: 15, // in minutes, this will allow cron job to be repeated every certain time
  CONNECTIVITY_TIMEOUT: 10000, // in milliseconds, a timeout to terminate the connection trail to the node
  BESU_NODE_URL: 'http://0.0.0.0:8545', // BESO Ethereum URL
  TIMEOUT_TO_RESUME: 300000, // in milliseconds, as stop script may take some time so I create timeout until stop script done to resume the node.
}
```
