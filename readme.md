# Why

  I found that docker images after random time got stopped so I made this simple application
  to restart `BESO Ethereum` docker images and keep the node available always

## Instructions

* *Run*
  > `sudo nano config.js`
* configure `config.js` with suitable values.
* *Run*
  > `npm i`

### Documentation
  
```javascript
configurationObject = {
  CRON_IN_MINUTE: 15, // in minutes, this will allow cron job to be repeated every certain time
  CONNECTIVITY_TIMEOUT: 10000, // in milliseconds, a timeout to terminate the connection trail to the node
  BESO_NODE_URL: 'http://0.0.0.0:8545', // BESO Ethereum URL
  TIMEOUT_TO_RESUME: 300000, // in milliseconds, as stop script may take some time so I create timeout until stop script done to resume the node.
  STOP_SCRIPT_PATH: '../../../../stop.sh', // relative to this index.js inside this application
  RESUME_SCRIPT_PATH: '../../../../resume.sh', // relative to to this index.js inside this application
}
```
  
#### Known Issue

  `CONNECTIVITY_TIMEOUT` does not close the connection trial and always works after 3 minutes
  as it `axios` default timeout if you are using the remote IP of the node
  while you are inside this remote node
