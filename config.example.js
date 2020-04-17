module.exports = {
  CRON_IN_MINUTE: 1, // in minutes
  CONNECTIVITY_TIMEOUT: 10000, // in milliseconds
  BESO_NODE_URL: 'http://0.0.0.0:8545',
  TIMEOUT_TO_RESUME: 120000, // in milliseconds
  STOP_SCRIPT_PATH: '../../../Private/besu-sample-networks/stop.sh', // relative to server
  RESUME_SCRIPT_PATH: '../../../Private/besu-sample-networks/resume.sh', // relative to server
  BESU_DOT_ENV_PATH: '../../../Private/besu-sample-networks/.env',
  COMMON_SCRIPT_PATH: '../../../Private/besu-sample-networks/.common.sh',
  DOCKER_COMPOSE_PATH: '../../../Private/besu-sample-networks/docker-compose.yml'
}
