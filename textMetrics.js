
const bluebird = require("bluebird");
const Promise = bluebird.Promise;
const fs = bluebird.promisifyAll(require("fs"));

let map ={};
async function getWordOccurence(str){
    if(typeof str !== "string") throw `${str} is not a string`;
    let charMap = {};
    let a = str.replace(/[^a-zA-Z0-9|\\s+]/g, " ").replace("\\t", " ").replace("\\n", " ").split(" ");
    for(let x of a){
     let word = x.toLowerCase();
     if(word.match(/[\w]+/gi) && !word.match(/^((?!501|504)[0-9]*)$/) && !x.match(/[-\/\\^$*+?.()|[\]{}]/g)){
    if(charMap[word] === undefined){
        charMap[word] = 1;
}
else{ 
    charMap[word] = charMap[word] + 1;
}
        }

}
return charMap;
}

async function getTotalLetters(str){
    if(typeof str !== "string") throw `${str} is not a string`;
    var letter =0;
    let res = str.replace(/[^a-zA-Z0-9|\\s+]/g, " ").replace(/[\\n\\r]/g, " ");
    for(let x of res){
        if(x.toUpperCase() >= "A" && x.toUpperCase() <= "Z"){
            letter++;

        }
    }
    return letter;
}
async function getTotalNonLetters(str){
    if(typeof str !== "string") throw `${str} is not a string`;
    var nonletter =0;
    for(let x of str){
        if(x.toUpperCase() < "A" || x.toUpperCase() > "Z"){
            nonletter++;
        }
    }
    return nonletter;
}
async function getTotalVowels(str){
    if(typeof str !== "string") throw `${str} is not a string`;
    let count = 0;
    for(let a of str) {
        let x  =  a.toLowerCase()
        if( x == 'a' || x == 'e' ||  x == 'i' || x == 'o' ||  x == 'u' ){
            count++;
        }

    }
    return count;
}

async function getTotalConsonents(str){
    if(typeof str !== "string") throw `${str} is not a string`;
    let count = 0;
    let res = str.replace(/[^a-zA-Z0-9|\\s+]/g, " ").replace(/[\\n\\r]/g, " ")
    for(let a of res) {
        let x  =  a.toLowerCase()
        if(x.match(/[bcdfghjklmnpqrstvwxyz]/)) {
            count++;
        }

    }
    return count;
}
async function getUniqueWords(str){
    if(typeof str !== "string") throw `${str} is not a string`;
    let count = 0;

    let a = str.replace(/[^a-zA-Z0-9|\\s+]/g, " ").replace("\\t", " ").replace("\\n", " ").split(" ");
    let set = new Set();
    for(let x of a) {
        if(x.match(/[\w]+/gi) && !x.match(/^((?!501|504)[0-9]*)$/) && !x.match(/[-\/\\^$*+?.()|[\]{}]/g)) {
            set.add(x.toLowerCase());
        }

    }

    return set.size;
 


}
async function getLongWords(str){
    if(typeof str !== "string") throw `${str} is not a string`;
    let count = 0;
    let a = str.replace(/[^a-zA-Z0-9|\\s+]/g, " ").replace("\\t", " ").replace("\\n", " ").split(" ");
    for(let x of a) {
        if((x.match(/[\w]+/gi) && !x.match(/^((?!501|504)[0-9]*)$/) && !x.match(/[-\/\\^$*+?.()|[\]{}]/g) && x.length >= 6)) {
            count++;
        }

    }
    return count;
}

async function getTotalWords(str){
    if(typeof str !== "string") throw `${str} is not a string`;
    let count = 0;
    let a = str.replace(/[^a-zA-Z0-9|\\s+]/g, " ").replace("\\t", " ").replace("\\n", " ").split(" ");
    for(let x of a) {
        if(x.match(/[\w]+/gi) && !x.match(/^((?!501|504)[0-9]*)$/) && !x.match(/[-\/\\^$*+?.()|[\]{}]/g)) {
            count++;
        }

    }
    return count;
}
async function createMetrics(str){
  
    let totalLetters = await getTotalLetters(str);
    let totalNonLetters = await getTotalNonLetters(str);
    let totalVowels = await getTotalVowels(str);
    let totalConsonants = await getTotalConsonents(str);
    let totalWords = await getTotalWords(str);
    let uniqueWords = await getUniqueWords(str);
    let longWords = await getLongWords(str);
    let wordOccurrences = await getWordOccurence(str);
    map['totalLetters'] = totalLetters;
    map['totalNonLetters'] = totalNonLetters;
    map['totalVowels'] = totalVowels;
    map['totalConsonants'] = totalConsonants;
    map['totalWords'] = totalWords;
    map['uniqueWords'] = uniqueWords;
    map['longWords'] = longWords;
    map['averageWordLength'] = totalLetters/totalWords;
    map['wordOccurrences'] = wordOccurrences;
    return map;

}

module.exports = {createMetrics};