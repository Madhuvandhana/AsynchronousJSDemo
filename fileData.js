const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));
const textMetrics = require('./textMetrics');


async function getFileAsString(path) {
    // Throwing inside of an async method causes the method
    // To return a rejected promise, which means we can throw based
    // On arguments
    if (!path) throw "You must provide a path";
    else
        return await fs.readFileSync(path, "utf-8")

  }
  async function getFileAsJSON(path) {
    if (!path) throw "You must provide a path";
    else{
    let data = await fs.readFileSync(path, "utf-8")
    return JSON.parse(data);
    }
  }
  async function saveJSONToFile(path, obj){
    if (!path) throw "You must provide a path";
    let data = JSON.stringify(obj);
    var filenameExt = path.replace(/^.*[\\\/]/, '')
    var filename = filenameExt.split('.')[0];
    return await fs.writeFileSync(filename+'.result.json', data);
  }



  module.exports = {getFileAsJSON, saveJSONToFile, getFileAsString};
