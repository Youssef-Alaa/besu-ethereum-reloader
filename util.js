const path = require('path');
const fs = require('fs');
const shell = require('shelljs');

const { BESU_DOT_ENV_PATH } = require('./config');

function addZero (number) {
  if(Number(number) < 10){
    return '0' + number;
  }
  return number
}

exports.timeNow = () => {
  const today = new Date();
  const time = addZero(today.getHours()) + ":" + addZero(today.getMinutes()) + ":" + addZero(today.getSeconds());
  return time;
}

exports.checkPaths = (resumeScriptPath, stopScriptPath, dotEnvPath, commonPath) =>{
  try {
    const resumeScriptAbsPath = path.resolve(resumeScriptPath);
    const stopScriptAbsPath = path.resolve(stopScriptPath);
    const dotEnvAbsPath = path.resolve(dotEnvPath);
    const commonAbsPath = path.resolve(commonPath);
    fs.readFileSync(resumeScriptAbsPath);
    fs.readFileSync(stopScriptAbsPath);
    fs.readFileSync(dotEnvPath);
    fs.readFileSync(commonPath);
    console.log('scripts has been found, let me do the rest!')
    return {
      resumeScriptAbsPath,
      stopScriptAbsPath,
      dotEnvAbsPath,
      commonAbsPath,
    }
  } catch (error) {
    throw error;
  }
}

exports.copyDotEnvAndCommon = (dotEnvPath, commonPath) => {
  shell.cp(dotEnvPath, __dirname);
  shell.cp(commonPath, __dirname);
}
