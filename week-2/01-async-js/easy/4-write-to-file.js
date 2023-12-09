// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');
function writeToFile(data){
    fs.writeFile('a.txt',data,'utf8',(err)=>{
        if (err) {
            console.error(`Error reading file: ${err.message}`);
            return;
          }
        console.log("Data is written in file")
    })
}

function readFileData(){
    fs.readFile('a.txt', 'utf8' , (err,data) =>{
        if(err){
            console.log("Error reading data from file");
            return;
        }

        console.log(data);
    })
}

function appendFileData(data){
    fs.appendFile('a.txt',data, 'utf8',(err)=>{
        if(err){
            console.log("Error in appendng data to file");
            return;
        }
        console.log("Data appended successfully")
    })
}

readFileData();
setTimeout(()=>{
writeToFile("adding extra data using writefile of fs library");
readFileData();
},2000);

setTimeout(()=>{
    appendFileData(".This data is to append data in file");
readFileData();
},4000)