const cron = require("node-cron");
const shell = require("shelljs");
const axios = require("axios");
const logger = require("npmlog");

console.log = logger.info;

const { timeNow } = require('./util');

const {
  CRON_IN_MINUTE,
  CONNECTIVITY_TIMEOUT,
  BESU_NODE_URL,
  TIMEOUT_TO_RESUME,
} = require('./config');

console.log('Empty allocated variable `lastBlockNumber`');
let lastBlockNumber = null;

console.log('****************Started****************');
cron.schedule(`*/${CRON_IN_MINUTE} * * * *`, async () =>  {
  console.log('********************************');
  console.log('|Date:', `${new Date().toISOString()}|`);
  console.log("|------------------------------|");
  console.log(`| Running Cron Job at ${timeNow()} |`);
  console.log("|------------------------------|");
  console.log('********************************');


  const body = {
    "jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1
  };
  let isWorking = false;
  // check connectivity and timeout if 10 second passed
  console.log('timeout start at: ', timeNow())
  try {
  const intervalId = setInterval(() => {
    console.log('connectivity timeout done at:', timeNow());
    if (!isWorking) isWorking = false;
    clearInterval(intervalId);
  }, CONNECTIVITY_TIMEOUT);

    console.log('checking connectivity! at: ', timeNow());
    const { data } = await axios.default.post(BESU_NODE_URL, body);
    console.log('current block number is, ', data.result);
    console.log('last block number is, ', lastBlockNumber);
    if(lastBlockNumber === data.result) {
      console.log('block number is the same, ', lastBlockNumber === data.result);
      isWorking = false;
    }
    else {
      lastBlockNumber = data.result;
      console.log('connectivity is fine! at:', timeNow());
      isWorking = true;
    }
  } catch (error) {
    console.log('there is a problem in connectivity, I will restart beso-node! at: ', timeNow());
    isWorking = false;
  }

  if(!isWorking) {
    console.log('Stopping beso node! at: ', timeNow());
    console.log('Empty allocated variable as the network is stacked');
    lastBlockNumber = null;
    shell.exec('./stop.sh');
    //wait till stop finish
    setTimeout(async () => {
      console.log('resuming beso node! at: ', timeNow());
      shell.exec('./resume.sh');
    }, TIMEOUT_TO_RESUME);
  }
}, {
  scheduled: true,
});
