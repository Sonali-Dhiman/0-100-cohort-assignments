// <!-- ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ``` -->

const fs = require ('fs');

function readDatafromFile(){
    return new Promise ((resolve, reject)=>{
        fs.readFile('a.txt','utf8',(err,data)=>{
            if(err){
                console.log('Error in reading file');
                reject(new Error('Error in reading file'))
            } else {
                console.log("REading successful,Data as follows: ", data);
                resolve(data);
            }

        })
    })
}
function writeDataToFie(cleanData){
    return new Promise((resolve, reject)=>{
        fs.writeFile('a.txt', cleanData , 'utf8',(err)=>{
            if(err){
                console.log('Error in writing to file');
                reject(new Error('Error in writing to file'))
            } else{
                // console.log('Writing to file is successful');
                resolve('Writing to file is successful')
            }
        })
    })
}
 // using async function
async function main(){
    let dataFromFile = await readDatafromFile();
    console.log(dataFromFile);
    const cleanData = dataFromFile.split(" ").join("");
    const result = await writeDataToFie(cleanData);
    console.log(result);
}

//using .then approch
/*function main(){
    readDatafromFile().then((dataFromFile)=>{
    console.log(dataFromFile);
    const cleanData = dataFromFile.split(" ").join("");
    writeDataToFie(cleanData).then((result)=>console.log(result));
    })
}*/

main();