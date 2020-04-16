const path = require('path');
const fs = require('fs');

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

exports.checkPaths = (path1, path2) =>{
  try {
    const p1 = path.resolve(path1);
    const p2 = path.resolve(path2);
    fs.readFileSync(p1);
    fs.readFileSync(p2);
    console.log('scripts has been found, let me do the rest!')
  } catch (error) {
    throw error;
  }
}
