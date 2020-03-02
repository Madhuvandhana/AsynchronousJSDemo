const fileData = require('./fileData');
const textMetrics = require('./textMetrics');
const main = async (path) => {
        let res = undefined;
        try{
             res = await fileData.getFileAsJSON(path)
            console.log(res);
        }catch(err) {
            console.log(err);
        }
  
    if(res == undefined){
     let result = await fileData.getFileAsString(path);
        if(result.error){
            console.log(result.error);
        }
        else{
        let result1 = await textMetrics.createMetrics(result);
        console.log(result1);
        return await fileData.saveJSONToFile(path, result1);
        }
    }
}


main("example.txt").catch( err => {
    console.log(err);
})
// main("chapter1.txt").catch( err => {
//     console.log(err);
// })
// main("chapter2.txt").catch( err => {
//     console.log(err);
// })
// main("chapter3.txt").catch( err => {
//     console.log(err);
// })